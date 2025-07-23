<template>
  <v-icon class="custom-icon" :color="props.color">
    <component :is="iconComponent" v-if="iconComponent" />
    <span v-else>Icon not found</span>
  </v-icon>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import iconMap from '@/Components/Icon/IconMap'
import type { IconProps } from '@/type/type'

const props = withDefaults(defineProps<IconProps>(), {
  color: 'white',
})

const iconComponent = computed(() => {
  return iconMap[props.name] || null
})
</script>
