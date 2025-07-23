<template>
  <span
    :class="{
      uppercase: uppercase,
    }"
    :style="computedStyle"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { TextProps } from '@/type/type'

const props = withDefaults(defineProps<TextProps>(), {
  color: '#000000',
  size: '16px',
  weight: 'normal',
  uppercase: false,
  align: 'center',
  lineHeight: '30px',
})

const computedStyle = computed(() => ({
  color: props.color,
  fontSize: typeof props.size === 'number' ? `${props.size}px` : props.size,
  fontWeight: props.weight,
  lineHeight: props.lineHeight
    ? typeof props.lineHeight === 'number'
      ? `${props.lineHeight}px`
      : props.lineHeight
    : undefined,
  textAlign: props.align,
}))
</script>

<style scoped>
.uppercase {
  text-transform: uppercase;
}
</style>
