<template>
  <div class="popover-wrapper" @mouseenter="open" @mouseleave="close">
    <div class="popover-heading">
      <slot name="heading">Popover me</slot>
    </div>
    <div v-if="isOpen" class="popover-content">
      <div class="popover-arrow" :class="arrowPosition"></div>
      <slot name="content">Popover content</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const isOpen = ref(false)

const props = defineProps({
  position: {
    type: String,
    default: 'top',
    validator: (val: string) => ['top', 'right', 'bottom', 'left'].includes(val),
  },
})

const arrowPosition = computed(() => {
  switch (props.position) {
    case 'top':
      return 'arrow-bottom'
    case 'left':
      return 'arrow-right'
    case 'right':
      return 'arrow-left'
    case 'bottom':
    default:
      return 'arrow-top'
  }
})

function open() {
  isOpen.value = true
}

function close() {
  isOpen.value = false
}
</script>

<style scoped>
.popover-wrapper {
  position: relative;
  display: inline-block;
}

.popover-heading {
  cursor: pointer;
}

.popover-content {
  position: absolute;
  background: white;
  border: 1px solid #ccc;
  padding: 12px;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  min-width: 160px;
  z-index: 10;
}

.popover-arrow {
  position: absolute;
  height: auto;
}

.arrow-top,
.arrow-bottom {
  left: 20px;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
}
.arrow-left,
.arrow-right {
  top: 12px;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
}

.arrow-top {
  bottom: -8px;
  border-top: 8px solid white;
}

.arrow-bottom {
  top: -8px;
  border-bottom: 8px solid white;
}

.arrow-left {
  right: -8px;
  border-left: 8px solid white;
}

.arrow-right {
  left: -8px;
  border-right: 8px solid white;
}
</style>
