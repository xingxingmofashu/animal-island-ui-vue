<script lang="ts">
import { computed } from 'vue'
import theme from '../../theme/icon'
import { tv } from 'tailwind-variants'

type Icon = typeof theme

export interface IconProps {
  as?: string
  name: keyof Icon['variants']['variant']
  size?: string | number
  bounce?: boolean
  class?: any
  ui?: Partial<Icon['slots']>
}
</script>
<script setup lang="ts">
const props = withDefaults(defineProps<IconProps>(), {
  as: 'span',
  size: '24'
})

const ui = computed(() =>
  tv(theme)({
    variant: props.name,
    bounce: props.bounce
  })
)
</script>
<template>
  <component
    :is="props.as"
    :class="
      ui.base({
        class: [props.ui?.base, props.class]
      })
    "
    :style="{ width: `${props.size}px`, height: `${props.size}px` }"
  />
</template>
