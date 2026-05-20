<script lang="ts">
import type { ButtonHTMLAttributes } from '../types/html';
import type { ComponentConfig } from '../types/tv'
import theme from '../../theme/button'
import { omit } from '../utils';
import type { IconProps } from './Icon.vue';

type Button = ComponentConfig<typeof theme>
export interface ButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {
  label?: string
  /**
  * The element or component this component should render as.
  * @defaultValue 'button'
  */
  as?: any
  /**
   * @defaultValue 'md'
   */
  size?: Button['variants']['size']
  color?: Button['variants']['color']
  /**
   * @defaultValue 'primary'
   */
  variant?: Button['variants']['variant']
  /** When `true`, the icon will be displayed on the left side. */
  leading?: boolean
  /**
   * Display an icon on the left side.
   */
  leadingIcon?: IconProps['name']
  /** When `true`, the icon will be displayed on the right side. */
  trailing?: boolean
  /**
   * Display an icon on the right side.
   */
  trailingIcon?: IconProps['name']
  disabled?: boolean
  loading?: boolean
  block?: boolean
  onClick?: ((event: MouseEvent) => void | Promise<void>) | Array<((event: MouseEvent) => void | Promise<void>)>
  class?: any
  ui?: Button['slots']
}

export interface ButtonSlots {
  leading?(props: { ui: Button['ui'] }): VNode[]
  default?(props: { ui: Button['ui'] }): VNode[]
  trailing?(props: { ui: Button['ui'] }): VNode[]
}

</script>
<script setup lang="ts">
import { computed, type VNode } from 'vue'
import { tv } from "tailwind-variants"
import Icon from './Icon.vue';

const props = withDefaults(defineProps<ButtonProps>(), {
  as: 'button',
  type: 'button'
})
const slots = defineSlots<ButtonSlots>()


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
  <component :is="props.as" v-bind="omit(props, ['disabled', 'type', 'onClick'])" :class="[
    ui?.base({
      class: [props.ui?.base, props.class],
    })]">
    <slot :ui="ui" name="leading">
      <span v-if="leading && leadingIcon" :class="ui.leadingIcon({ class: props.ui?.leadingIcon })">
        <Icon :name="leadingIcon" />
      </span>
    </slot>
    <slot :ui="ui">
      <span v-if="props.label" data-slot="label" :class="ui.label({ class: props.ui?.label })">
        {{ props.label }}
      </span>
    </slot>
    <slot :ui="ui" name="trailing">
      <span v-if="trailing && trailingIcon" :class="ui.trailingIcon({ class: props.ui?.trailingIcon })">
        <Icon :name="trailingIcon" />
      </span>
    </slot>
  </component>
</template>