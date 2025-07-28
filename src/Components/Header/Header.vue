<template>
  <div :style="headerStyle" class="list-header">
    <Text
      :text="title"
      :size="size"
      :weight="weight"
      :uppercase="uppercase"
      :color="color"
      :align="align"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import type { HeaderProps } from '@/type/type'

import Text from '@/Components/Text/Text.vue'

const props = withDefaults(defineProps<HeaderProps>(), {
  title: 'Header',
  size: '16px',
  weight: '700',
  color: '#000',
  uppercase: true,
  align: 'left',
  paddingBottom: '8px',
  paddingTop: '8px',
  border: '1px solid #ddd',
})

const headerStyle = computed(() => ({
  paddingTop: props.paddingTop,
  paddingBottom: props.paddingBottom,
  borderBottom: props.border,
}))
</script>

<style scoped>
.list-header {
  margin-bottom: 16px;
}
</style>
