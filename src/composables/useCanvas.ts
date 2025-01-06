import { ref, onMounted } from "vue";

export function useCanvas() {
  const canvasRef = ref<HTMLCanvasElement | null>(null);
  const canvasContainerRef = ref<HTMLElement | null>(null);

  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let offsetX = 0;
  let offsetY = 0;
  let scale = 1;

  onMounted(() => {
    const canvas = canvasRef.value;
    const canvasContainer = canvasContainerRef.value;

    if (!canvas || !canvasContainer) {
      console.error("Canvas or canvas container not found.");
      return;
    }

    const centerCanvas = () => {
      const containerWidth = canvasContainer.offsetWidth;
      const containerHeight = canvasContainer.offsetHeight;
      const canvasWidth = canvas.offsetWidth;
      const canvasHeight = canvas.offsetHeight;

      offsetX = (containerWidth - canvasWidth) / 2;
      offsetY = (containerHeight - canvasHeight) / 2;

      updateTransform();
    };

    const updateTransform = () => {
      canvas.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
    };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      startX = e.clientX - offsetX;
      startY = e.clientY - offsetY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        offsetX = e.clientX - startX;
        offsetY = e.clientY - startY;
        updateTransform();
      }
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onMouseLeave = () => {
      isDragging = false;
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();

      const zoomIntensity = 0.001;
      const prevScale = scale;

      scale += e.deltaY * -zoomIntensity;
      scale = Math.min(Math.max(scale, 0.5), 2);

      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      offsetX -= mouseX / prevScale - mouseX / scale;
      offsetY -= mouseY / prevScale - mouseY / scale;

      updateTransform();
    };

    canvasContainer.addEventListener("mousedown", onMouseDown);
    canvasContainer.addEventListener("mousemove", onMouseMove);
    canvasContainer.addEventListener("mouseup", onMouseUp);
    canvasContainer.addEventListener("mouseleave", onMouseLeave);
    canvasContainer.addEventListener("wheel", onWheel);

    centerCanvas();

    return () => {
      canvasContainer.removeEventListener("mousedown", onMouseDown);
      canvasContainer.removeEventListener("mousemove", onMouseMove);
      canvasContainer.removeEventListener("mouseup", onMouseUp);
      canvasContainer.removeEventListener("mouseleave", onMouseLeave);
      canvasContainer.removeEventListener("wheel", onWheel);
    };
  });

  return {
    canvasRef,
    canvasContainerRef,
  };
}
