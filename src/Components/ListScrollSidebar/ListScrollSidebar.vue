<template>
  <div
    class="sidebar"
    :style="{
      maxHeight: height,
      width: width,
      overflowY: overflowY,
    }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { SidebarProps } from '@/type/type'

const props = withDefaults(defineProps<SidebarProps>(), {
  height: '400px',
  width: '300px',
  overflowY: 'auto',
})
</script>

<style scoped>
.sidebar {
  border: 1px solid #ccc;
  padding: 16px;
  background-color: #f5f5f5;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
