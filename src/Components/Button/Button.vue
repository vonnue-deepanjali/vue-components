<template>
  <button
    class="custom-button"
    :style="{ backgroundColor, color: textColor, padding }"
    @click="handleClick"
  >
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import type { buttonProps } from '@/type/Button'

const props = withDefaults(defineProps<buttonProps>(), {
  text: 'Click Me',
  backgroundColor: '#faf9f6',
  textColor: '#000000',
  padding: '10px 20px',
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const handleClick = (event: MouseEvent) => {
  emit('click', event)
}
</script>

<style scoped>
.custom-button {
  border: none;
  font-size: 16px;
  cursor: pointer;
}
</style>
