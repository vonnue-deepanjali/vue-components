<template>
  <div :style="separatorStyle" role="separator" aria-orientation="vertical" />
</template>

<script setup lang="ts">
import { computed } from 'vue'

import type { separatorProps } from '@/type/Separator'

const props = withDefaults(defineProps<separatorProps>(), {
  width: '1px',
  height: '100%',
  color: '#000000',
})

const separatorStyle = computed(() => ({
  width: props.width,
  height: props.height,
  backgroundColor: props.color,
  display: 'inline-block',
}))
</script>

<style scoped>
div {
  margin: 0 8px;
}
</style>
