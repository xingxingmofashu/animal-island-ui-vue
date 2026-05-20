<script lang="ts">
import type { ComponentConfig } from '../types/tv'
import theme from '../../theme/input'
import type { IconProps } from './Icon.vue'
import type { VNode } from 'vue'

type Input = ComponentConfig<typeof theme>

// NOTE: `Boolean` could potentially cause casting issues, but have been safe so far.
// https://vuejs.org/guide/components/props.html#boolean-casting
export type InputValue = string | number | bigint | boolean | null

export interface InputProps {
  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any
  /**
   * @defaultValue 'primary'
   */
  color?: Input['variants']['color']
  /**
   * @defaultValue 'default'
   */
  variant?: Input['variants']['variant']
  /**
   * @defaultValue 'md'
   */
  size?: Input['variants']['size']
  placeholder?: string
  disabled?: boolean
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
  ui?: Input['slots']
}

export interface InputSlots {
  leading?(props: { ui: Input['ui'] }): VNode[]
  default?(props: { ui: Input['ui'] }): VNode[]
  trailing?(props: { ui: Input['ui'] }): VNode[]
}
</script>
<script setup lang="ts">
import { computed } from 'vue'
import { tv } from 'tailwind-variants'
import { pick } from '../utils'
import Icon from './Icon.vue'

const props = withDefaults(defineProps<InputProps>(), {
  as: 'div'
})

const slots = defineSlots<InputSlots>()

const ui = computed(() =>
  tv(theme)({
    disabled: props.disabled,
    variant: props.variant,
    size: props.size,
    color: props.color,
    leading: props.leading,
    trailing: props.trailing
  })
)
</script>
<template>
  <component :is="props.as" data-slot="root" :class="ui?.root({ class: props.ui?.root })">
    <input
      v-bind="pick(props, ['disabled', 'placeholder'])"
      data-slot="base"
      :class="ui?.base({ class: props.ui?.base })"
    />
    <span
      data-slot="leading"
      v-if="props.leading && props.leadingIcon"
      :class="
        ui.leading({
          class: props.ui?.leading
        })
      "
    >
      <slot name="leading" :ui="ui">
        <Icon :name="props.leadingIcon" :class="ui.leadingIcon({ class: props.ui?.leadingIcon })" />
      </slot>
    </span>

    <span
      name="trailing"
      data-slot="trailing"
      v-if="props.trailing && props.trailingIcon"
      :class="
        ui.trailing({
          class: props.ui?.trailing
        })
      "
    >
      <slot name="trailing" :ui="ui">
        <Icon :name="props.trailingIcon" :class="ui.trailingIcon({ class: props.ui?.trailingIcon })" />
      </slot>
    </span>
  </component>
</template>
