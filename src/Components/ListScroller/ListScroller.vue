<template>
  <div class="sidebar" :style="sidebarStyle">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import type { SidebarProps } from '@/type/type'

const props = withDefaults(defineProps<SidebarProps>(), {
  height: '400px',
  width: '300px',
  overflowY: 'auto',
})

const sidebarStyle = computed(() => ({
  height: typeof props.height === 'number' ? `${props.height}px` : props.height,
  width: typeof props.width === 'number' ? `${props.width}px` : props.width,
  overflowY: props.overflowY,
}))
</script>

<style scoped>
.sidebar {
  border: 1px solid #ccc;
  padding: 16px;
  background-color: #f5f5f5;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
