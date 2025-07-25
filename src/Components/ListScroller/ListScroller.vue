<template>
  <div class="ListScroller" :style="ListScrollerStyle">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import type { ListScrollerProps } from '@/type/type'

const { height = '400px', width = '300px', overflowY = 'auto' } = defineProps<ListScrollerProps>()

const ListScrollerStyle = computed(() => ({
  height: typeof height === 'number' ? `${height}px` : height,
  width: typeof width === 'number' ? `${width}px` : width,
  overflowY,
}))
</script>

<style scoped>
.ListScroller {
  border: 1px solid #ccc;
  padding: 16px;
  background-color: #f5f5f5;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
