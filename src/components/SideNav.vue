<template>
  <div
    class="side-nav relative z-0 flex-initial flex flex-col min-w-[215px] w-[215px] h-full bg-red-500"
  >
    <div
      class="tool-box absolute top-0 left-0 right-0 bottom-0 bg-white overflow-hidden"
    >
      <div class="tool-group my-4">
        <div>
          <header class="flex items-center pr-2">
            <img
              class="cursor-grab"
              src="../assets/drag-icon.svg"
              alt="drag-icon"
            />
            <span class="title-text"> Standard </span>
          </header>
          <div class="grid grid-rows-1">
            <div class="flex flex-col pt-2 px-5 pb-1">
              <div class="flex flex-wrap">
                <div
                  class="tool-group-item"
                  v-for="(tool, index) in standardShapes"
                  :key="index"
                >
                  <button :title="tool.alt">
                    <div class="item-icon">
                      <img :src="tool.src" :alt="tool.alt" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="tool-group my-4">
        <div>
          <header class="flex items-center pr-2">
            <img
              class="cursor-grab"
              src="../assets/drag-icon.svg"
              alt="drag-icon"
            />
            <span class="title-text"> Shapes </span>
          </header>
          <div class="grid grid-rows-1">
            <div class="flex flex-col pt-2 px-5 pb-1">
              <div class="flex flex-wrap">
                <div
                  class="tool-group-item"
                  v-for="(tool, index) in shapes"
                  :key="index"
                >
                  <button :title="tool.alt">
                    <div class="item-icon">
                      <img :src="tool.src" :alt="tool.alt" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const standardShapes = [
  { src: "/src/assets/text.svg", alt: "text" },
  { src: "/src/assets/line.svg", alt: "line" },
];
const shapes = [
  { src: "/src/assets/rectangle.svg", alt: "rectangle" },
  { src: "/src/assets/triangle.svg", alt: "triangle" },
  { src: "/src/assets/circle.svg", alt: "circle" },
  { src: "/src/assets/diamond.svg", alt: "diamond" },
];
</script>

<style scoped>
.tool-box {
  height: 100%;
  border-right: 1px solid #dfe3e8;
}
.title-text {
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  vertical-align: top;
}
.tool-group-item {
  padding: 2px;
  cursor: grab;
}
.item-icon {
  overflow: hidden;
}
</style>
