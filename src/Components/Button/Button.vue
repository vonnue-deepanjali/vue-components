<template>
  <button
    class="custom-button"
    :style="{ backgroundColor, color: textColor, padding }"
    @click="handleClick"
  >
    <Text :color="textColor" :size="textSize" :weight="textWeight" :uppercase="uppercase">
      {{ text }}
    </Text>
  </button>
</template>

<script setup lang="ts">
import type { buttonProps } from '@/Types/Type'
import Text from '../Text/Text.vue'

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
