<script setup lang="ts">
import { ref, watch } from 'vue'
import Switch from 'animal-ui/runtime/components/Switch.vue'

const value=ref()
watch(value, (newValue) => {
  console.log('Switch value changed:', newValue)
})

</script>

<template>
  <div class="fixed inset-0 flex items-center justify-center">
    <Switch :default-value="false"  size="sm" />
    <Switch  v-model:model-value="value" size="md" />
    <Switch :default-value="true" disabled  size="lg" />
  </div>
</template>
