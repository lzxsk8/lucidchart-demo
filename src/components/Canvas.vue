<template>
  <div id="canvas-container" ref="canvasContainerRef" class="viewport">
    <div class="viewport-scrollable">
      <div id="canvas" ref="canvasRef" class="viewport-canvas"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCanvas } from "../composables/useCanvas";

const { canvasRef, canvasContainerRef } = useCanvas();
</script>

<style scoped>
.viewport {
  position: relative;
  flex: 1;
  overflow: hidden;
  height: 100%;
}
.viewport-scrollable {
  position: absolute;
  inset: 0px;
  overflow: hidden;
  user-select: none;
  z-index: 0;
  height: auto;
  width: auto;
}
.viewport-canvas {
  width: 1000%;
  height: 1000%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: 0 0;
  background-image: linear-gradient(to right, #ccc 1px, transparent 1px),
    linear-gradient(to bottom, #ccc 1px, transparent 1px);
  background-size: 20px 20px;
}
</style>
