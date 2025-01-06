<template>
  <div class="h-full">
    <main class="h-full flex overflow-hidden">
      <SideNav />
      <CanvasViewport />
    </main>
  </div>
</template>

<script setup lang="ts">
import SideNav from "./components/SideNav.vue";
import CanvasViewport from "./components/Canvas.vue";
</script>

<style scoped></style>
