<script lang="ts">
import type { ComponentConfig } from '../types/tv'
import theme from '../../theme/input'
import type { IconProps } from './Icon.vue'
import type { VNode } from 'vue'
import type { InputHTMLAttributes } from '../types/html'

type Input = ComponentConfig<typeof theme>

// NOTE: `Boolean` could potentially cause casting issues, but have been safe so far.
// https://vuejs.org/guide/components/props.html#boolean-casting
export type InputValue = string | number | bigint | boolean | null

export interface InputProps<T extends InputValue = InputValue>
  extends /** @vue-ignore */ Omit<
    InputHTMLAttributes,
    'name' | 'type' | 'placeholder' | 'required' | 'autocomplete' | 'autofocus' | 'disabled'
  > {
  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any
  type?: InputHTMLAttributes['type']
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
  /** The placeholder text when the input is empty. */
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
  autocomplete?: InputHTMLAttributes['autocomplete']
  autofocus?: boolean
  autofocusDelay?: number
  modelValue?: T
  defaultValue?: T
  ui?: Input['slots']
}

export interface InputSlots {
  leading?(props: { ui: Input['ui'] }): VNode[]
  default?(props: { ui: Input['ui'] }): VNode[]
  trailing?(props: { ui: Input['ui'] }): VNode[]
}

export interface InputEmits<T extends InputValue = InputValue> {
  'update:modelValue': [value: T]
  blur: [event: FocusEvent]
  change: [event: Event]
  focus: [event: FocusEvent]
}
</script>
<script setup lang="ts" generic="T extends InputValue">
import { computed, onMounted, useTemplateRef } from 'vue'
import { tv } from 'tailwind-variants'
import { pick } from '../utils'
import Icon from './Icon.vue'
import { useVModel } from '@vueuse/core'

const props = withDefaults(defineProps<InputProps<T>>(), {
  as: 'div',
  type: 'text',
  autocomplete: 'off'
})

const slots = defineSlots<InputSlots>()
const emits = defineEmits<InputEmits<T>>()

const inputRef = useTemplateRef('inputRef')
const modelValue = useVModel<InputProps<T>, 'modelValue', 'update:modelValue'>(props, 'modelValue', emits, {
  defaultValue: props.defaultValue
})

function onInput(event: Event) {
  modelValue.value = (event.target as HTMLInputElement).value as T
}

function onBlur(event: FocusEvent) {
  emits('blur', event)
}

function onChange(event: Event) {
  emits('change', event)
}

function onFocus(event: FocusEvent) {
  emits('focus', event)
}

function autoFocus() {
  if (props.autofocus) {
    inputRef.value?.focus()
  }
}

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

onMounted(() => {
  setTimeout(() => {
    autoFocus()
  }, props.autofocusDelay)
})
</script>
<template>
  <component :is="props.as" data-slot="root" :class="ui?.root({ class: props.ui?.root })">
    <input
      ref="inputRef"
      :value="modelValue"
      v-bind="pick(props, ['disabled', 'placeholder', 'autocomplete', 'placeholder', 'type'])"
      data-slot="base"
      :class="ui?.base({ class: props.ui?.base })"
      @input="onInput"
      @blur="onBlur"
      @change="onChange"
      @focus="onFocus"
    />
    <span
      data-slot="leading"
      v-if="props.leading && props.leadingIcon"
      :class="ui.leading({ class: props.ui?.leading })"
    >
      <slot name="leading" :ui="ui">
        <Icon :name="props.leadingIcon" :class="ui.leadingIcon({ class: props.ui?.leadingIcon })" />
      </slot>
    </span>

    <span
      name="trailing"
      data-slot="trailing"
      v-if="props.trailing && props.trailingIcon"
      :class="ui.trailing({ class: props.ui?.trailing })"
    >
      <slot name="trailing" :ui="ui">
        <Icon :name="props.trailingIcon" :class="ui.trailingIcon({ class: props.ui?.trailingIcon })" />
      </slot>
    </span>
  </component>
</template>
