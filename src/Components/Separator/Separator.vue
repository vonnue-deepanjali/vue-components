<template>
  <v-divider
    :vertical="vertical"
    :thickness="thickness"
    :length="length"
    :aria-orientation="vertical ? 'vertical' : 'horizontal'"
    role="separator"
    class="custom-divider"
  />
</template>

<script setup lang="ts">
import type { SeparatorProps } from '@/Types/Type'

const props = withDefaults(defineProps<SeparatorProps>(), {
  thickness: 1,
  length: '100%',
  color: '#000000',
  vertical: true,
})
</script>

<style scoped>
.custom-divider {
  margin: 0 8px;
}
</style>
