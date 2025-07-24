<template>
  <div class="dropdown-card" @mouseenter="handleDropDownOpen" @mouseleave="handleDropDownClose">
    <div class="dropdown-card__header" :class="{ hovered: isHovered }">
      <Text :color="isHovered ? hoverColor : color" size="18px" weight="bold">
        {{ title }}
      </Text>
      <Icon
        name="arrow"
        :color="isHovered ? hoverColor : color"
        :style="{ transform: isHovered ? 'rotate(90deg)' : 'rotate(270deg)' }"
      />
    </div>
    <div
      class="dropdown-card__list"
      v-if="isHovered"
      @mouseenter="handleDropDownOpen"
      @mouseleave="handleDropDownClose"
    >
      <div
        class="dropdown-card__list-column"
        v-for="(column, colIndex) in items"
        :key="column[0]?.id || colIndex"
      >
        <Text
          v-for="item in column"
          :key="item.id"
          size="14px"
          :color="color"
          class="dropdown-card__list-item"
          @click="handleClick(item.label)"
        >
          {{ item.label }}
        </Text>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import type { DropDownSelectionProps, DropDownItem } from '@/type/type'

import Icon from '@/components/Icon.vue'
import Text from '@/components/Text.vue'

const props = withDefaults(defineProps<DropDownSelectionProps>(), {
  color: '#000000',
  hoverColor: '#007BFF',
})

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

const handleClick = (label: string) => {
  console.log('Clicked:', label)
}
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
