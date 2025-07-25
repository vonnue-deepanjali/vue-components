<template>
  <div class="dropdown-card" @mouseenter="handleDropDownOpen" @mouseleave="handleDropDownClose">
    <div class="dropdown-card__header" :class="{ hovered: isHovered }">
      <Text :color="currentColor" size="18px" weight="bold">
        {{ title }}
      </Text>
      <Icon
        name="arrow"
        :color="currentColor"
        :style="{ transform: isHovered ? 'rotate(90deg)' : 'rotate(270deg)' }"
      />
    </div>
    <div
      v-if="isHovered"
      class="dropdown-card__list"
      @mouseenter="handleDropDownOpen"
      @mouseleave="handleDropDownClose"
    >
      <div v-for="(columnItems, index) in items" class="dropdown-card__list-column" :key="index">
        <Text
          v-for="item in columnItems"
          :key="item.id"
          size="14px"
          :color="color"
          class="dropdown-card__list-item"
          @click="handleItemClick(item)"
        >
          {{ item.label }}
        </Text>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import type { DropDownItem, DropDownSelectionProps } from '@/type/type'

import Icon from '@/components/Icon.vue'
import Text from '@/components/Text.vue'

const {
  color = '#000000',
  hoverColor = '#007BFF',
  title = 'Title',
  items = [
    [
      { id: 'wd', label: 'Web Design' },
      { id: 'ad', label: 'App Development' },
      { id: 'seo', label: 'SEO' },
      { id: 'marketing', label: 'Marketing' },
    ],
  ],
} = defineProps<DropDownSelectionProps>()

const emit = defineEmits<{
  (event: 'item-click', item: DropDownItem): void
}>()

const isHovered = ref<boolean>(false)

const hoverTimeout = ref<ReturnType<typeof setTimeout> | null>(null)

const handleDropDownOpen = () => {
  if (hoverTimeout.value) clearTimeout(hoverTimeout.value)
  isHovered.value = true
}

const handleDropDownClose = () => {
  hoverTimeout.value = setTimeout(() => {
    isHovered.value = false
  }, 200)
}

const handleItemClick = (item: DropDownItem) => {
  emit('item-click', item)
}
const currentColor = computed(() => (isHovered.value ? hoverColor : color))
</script>

<style scoped lang="scss">
.dropdown-card {
  position: relative;
  display: inline-block;

  &__header {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: color 0.3s ease;
  }

  &__list {
    position: absolute;
    top: 100%;
    margin-top: 8px;
    display: flex;
    gap: 40px;
    background: white;
    border: 1px solid #ccc;
    padding: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    z-index: 10;

    &-column {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    &-item {
      cursor: pointer;
      transition: color 0.2s ease;

      &:hover {
        color: var(--hover-color, #007bff);
      }
    }
  }
}
</style>
