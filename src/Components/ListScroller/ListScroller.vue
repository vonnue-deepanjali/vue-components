<template>
  <div class="listScroller" :style="listScrollerStyle">
    <ListHeader
      title="Section 1"
      size="18"
      weight="700"
      uppercase
      color="black"
      align="left"
    ></ListHeader>
    <div v-for="item in section1Items" :key="item.id">
      <Text :text="item.text" color="#212121" size="14px">{{ item.text }}</Text>
    </div>
    <ListHeader title="SEction 2"></ListHeader>
    <div v-for="item in section2Items" :key="item.id">
      <Text :text="item.text" color="#212121" size="14px">{{ item.text }}</Text>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import type { ListScrollerProps } from '@/type/type'

import ListHeader from '@/Components/Header/Header.vue'
import Text from '@/Components/Text/Text.vue'

const props = defineProps<ListScrollerProps>()

const section1Items = [
  { id: 's1-1', text: 'Help with your Issues' },
  { id: 's1-2', text: 'Help with your order' },
  { id: 's1-3', text: 'Help with other Issues' },
  { id: 's1-4', text: 'Delivery related' },
  { id: 's1-5', text: 'Login and my account' },
  { id: 's1-6', text: 'Refunds related' },
]

const section2Items = [
  { id: 's2-1', text: 'Delivery related' },
  { id: 's2-2', text: 'Login and my account' },
  { id: 's2-3', text: 'Refunds related' },
  { id: 's2-4', text: 'Delivery related' },
  { id: 's2-5', text: 'Login and my account' },
  { id: 's2-6', text: 'Refunds related' },
]

const listScrollerStyle = computed(() => ({
  height: props.height
    ? typeof props.height === 'number'
      ? `${props.height}px`
      : props.height
    : '400px',
  width: props.width
    ? typeof props.width === 'number'
      ? `${props.width}px`
      : props.width
    : '300px',
  overflowY: props.overflowY ?? 'auto',
  padding: props.padding
    ? typeof props.padding === 'number'
      ? `${props.padding}px`
      : props.padding
    : '10px',
}))
</script>

<style scoped>
.listScroller {
  border: 1px solid #ccc;
  padding: 16px;
  background-color: #f5f5f5;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
