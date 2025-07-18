<template>
  <div class="popover-card" @mouseenter="popoverOpen" @mouseleave="popoverClose">
    <div class="popover-card__heading">
      <v-icon v-if="icon" class="popover-icon" :icon="icon" />
      {{ heading }}
    </div>
    <div v-if="isOpen && contentItems.length" class="popover-card__content">
      <div :class="arrowPosition" />
      <li v-for="item in contentItems" :key="item.id" @click="handleItemClick(item)">
        {{ item.label }}
      </li>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import type { PopoverItem, popoverProps } from '@/type/Popover'

const props = withDefaults(defineProps<popoverProps>(), {
  position: 'top',
  heading: 'Popover me',
  contentItems: () => [
    { id: '1', label: 'Option 1' },
    { id: '2', label: 'Option 2' },
  ],
})

const emit = defineEmits<{
  (e: 'item-click', item: PopoverItem): void
}>()

const isOpen = ref<boolean>(false)

const arrowPosition = computed(() => {
  switch (props.position) {
    case 'top':
      return 'popover-card__arrow arrow-bottom'
    case 'left':
      return 'popover-card__arrow arrow-right'
    case 'right':
      return 'popover-card__ arrow arrow-left'
    case 'bottom':
      return 'popover-card__arrow arrow-top'
    default:
      return ''
  }
})

const popoverOpen = () => (isOpen.value = true)
const popoverClose = () => (isOpen.value = false)

function handleItemClick(item: PopoverItem) {
  emit('item-click', item)
}
</script>

<style scoped lang="scss">
.popover-card {
  position: relative;
  display: inline-block;

  &__heading {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    user-select: none;

    padding: 8px 14px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    transition:
      background-color 0.2s,
      box-shadow 0.2s;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &:hover {
      background-color: #0056b3;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
    }
  }

  &__icon {
    display: inline-flex;
    align-items: center;
  }

  &__content {
    position: absolute;
    background: white;
    border: 1px solid #ccc;
    padding: 12px;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    min-width: 160px;
    z-index: 10;
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      padding: 6px 10px;
      font-size: 14px;
      cursor: pointer;
      border-radius: 4px;

      &:hover {
        background: #f0f0f0;
      }
    }
  }

  &__arrow {
    position: absolute;
    height: auto;

    &.arrow-top,
    &.arrow-bottom {
      left: 20px;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
    }

    &.arrow-left,
    &.arrow-right {
      top: 12px;
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;
    }

    &.arrow-top {
      bottom: -8px;
      border-top: 8px solid white;
    }

    &.arrow-bottom {
      top: -8px;
      border-bottom: 8px solid white;
    }

    &.arrow-left {
      right: -8px;
      border-left: 8px solid white;
    }

    &.arrow-right {
      left: -8px;
      border-right: 8px solid white;
    }
  }
}
</style>

gjgjgjgj
