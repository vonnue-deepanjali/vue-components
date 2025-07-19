<template>
  <v-divider
    :vertical="vertical"
    :style="dividerStyle"
    class="custom-divider"
    role="separator"
    :aria-orientation="vertical ? 'vertical' : 'horizontal'"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'

import type { SeparatorProps } from '@/type/Separator'

const props = withDefaults(defineProps<SeparatorProps>(), {
  thickness: 1,
  length: '100%',
  color: '#000000',
  vertical: true,
})

const createSeparatorStyle = ({ thickness, length, color, vertical = true }: SeparatorProps) => {
  if (vertical) {
    return {
      width: typeof thickness === 'number' ? `${thickness}px` : thickness,
      height: typeof length === 'number' ? `${length}px` : length,
      backgroundColor: color,
      display: 'inline-block',
    }
  } else {
    return {
      width: typeof length === 'number' ? `${length}px` : length,
      height: typeof thickness === 'number' ? `${thickness}px` : thickness,
      backgroundColor: color,
      display: 'inline-block',
    }
  }
}

const dividerStyle = computed(() => createSeparatorStyle(props))
</script>

<style scoped>
.custom-divider {
  margin: 0 8px;
  display: inline-block;
}
</style>
