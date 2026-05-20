<script lang="ts">
import theme from '../../theme/card'
import type { ComponentConfig } from '../types/tv'
import { tv } from 'tailwind-variants'
import type { VNode } from 'vue'

type Card = ComponentConfig<typeof theme>
export interface CardProps {
  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any
  variant?: Card['variants']['variant']
  color?: Card['variants']['color']
  class?: any
  ui?: Card['slots']
}

export interface CardSlots {
  header?(props?: {}): VNode[]
  default?(props?: {}): VNode[]
  footer?(props?: {}): VNode[]
}
</script>
<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<CardProps>(), {
  as: 'div'
})

const slots = defineSlots<CardSlots>()

const ui = computed(() =>
  tv(theme)({
    color: props.color,
    variant: props.variant
  })
)
</script>
<template>
  <component :is="props.as" data-slot="root" :class="ui.root({ class: [props.ui?.root, props.class] })">
    <div v-if="!!slots.header" data-slot="header" :class="ui.header({ class: props.ui?.header })">
      <slot name="header" />
    </div>
    <div v-if="!!slots.default" data-slot="body" :class="ui.body({ class: props.ui?.body })">
      <slot />
    </div>
    <div v-if="!!slots.footer" data-slot="footer" :class="ui.footer({ class: props.ui?.footer })">
      <slot name="footer" />
    </div>
  </component>
</template>
