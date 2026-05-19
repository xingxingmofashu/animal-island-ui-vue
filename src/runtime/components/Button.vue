<script lang="ts">
import type { ButtonHTMLAttributes } from '../types/html';
import theme from '../../theme/button'
import { omit } from '../utils';

type Button = typeof theme
export interface ButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {
  label?: string
  /**
  * The element or component this component should render as.
  * @defaultValue 'button'
  */
  as?: any
  size?: keyof Button['variants']['size']
  color?: keyof Button['variants']['color']
  variant?: keyof Button['variants']['variant']
  disabled?: boolean
  loading?: boolean
  block?: boolean
  class?: any
  ui?: Button['slots']
}
</script>
<script setup lang="ts">
import { computed } from 'vue'
import { tv } from "tailwind-variants"

const props = withDefaults(defineProps<ButtonProps>(), {
  as: 'button',
  type: 'button'
})


const ui = computed(() => tv(theme)({
  disabled: props?.disabled,
  variant: props.variant,
  color: props.color,
  size: props.size,
  loading: props.loading,
  block: props.block
}))

</script>
<template>
  <component :is="props.as" v-bind="omit(props, ['disabled', 'type'])" :class="[
    ui?.base({
      class: [props.ui?.base, props.class],
    })]">
    <slot />
  </component>
</template>