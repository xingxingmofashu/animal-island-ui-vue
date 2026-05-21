<script lang="ts">
import type { ComponentConfig } from '../types/tv'
import theme from '../../theme/switch'

type Switch = ComponentConfig<typeof theme>

export interface SwitchProps<T = boolean> {
  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any
  /**
   * @defaultValue 'md'
   */
  size?: Switch['variants']['size']
  /** The value given as data when submitted with a `name`. */
  value?: string
  /** The state of the switch when it is initially rendered. Use when you do not need to control its state. */
  defaultValue?: T
  /** The controlled state of the switch. Can be bind as `v-model`. */
  modelValue?: T | null
  /**
   * The value used when the switch is on. Defaults to `true`.
   */
  trueValue?: T
  /**
   * The value used when the switch is off. Defaults to `false`.
   */
  falseValue?: T
  disabled?: boolean
  loading?: boolean
  class?: any
  ui?: Switch['slots']
}

export interface SwitchEmits<T = boolean> {
  'update:modelValue': [value: T]
}
</script>
<script setup lang="ts" generic="T extends boolean">
import { tv } from 'tailwind-variants'
import { computed, watch } from 'vue'
import type { Ref } from 'vue'
import { useVModel } from '@vueuse/core'
import { pick } from '../utils'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<SwitchProps>(), {
  as: 'div',
  size: 'md',
  modelValue: undefined,
  value: 'on',
  trueValue: () => true,
  falseValue: () => false
})
const emits = defineEmits<SwitchEmits<T>>()

const modelValue = useVModel(props as any, 'modelValue', emits as any, {
  defaultValue: props.defaultValue ?? props.falseValue,
  passive: (props.modelValue === undefined) as false
}) as Ref<T>

const checked = computed(() => modelValue.value === props.trueValue)

const ui = computed(() =>
  tv(theme)({
    size: props.size,
    disabled: props.disabled || props.loading,
    checked: checked.value,
    unchecked: !checked.value,
    loading: props.loading
  })
)

function toggleCheck() {
  if (props.disabled || props.loading) return
  modelValue.value = checked.value ? (props.falseValue as T) : (props.trueValue as T)
}
</script>
<template>
  <component :is="props.as" data-slot="root" :class="ui.root({ class: [props.ui?.root, props.class] })">
    <div data-slot="container" :class="ui.container({ class: props.ui?.container })">
      <button
        data-slot="base"
        :data-state="checked ? 'checked' : 'unchecked'"
        v-bind="{ ...pick(props, ['disabled']) }"
        @click="toggleCheck"
        @keydown.enter.prevent="toggleCheck"
        :class="ui.base({ class: props.ui?.base })"
      >
        <span
          data-slot="thumb"
          :data-state="checked ? 'checked' : 'unchecked'"
          :data-disabled="props.disabled ? '' : undefined"
          :class="ui.thumb({ class: props.ui?.thumb })"
        >
          <template v-if="props.loading">
            <span name="loading" :class="ui.icon({ class: props.ui?.icon })" />
          </template>
        </span>
      </button>
    </div>
  </component>
</template>
