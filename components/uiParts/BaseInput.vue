<script setup lang="ts">
// import { ref, Ref } from 'vue'
import { defineProps } from 'vue'

// props
const props = defineProps({
  text: {
    type: String,
    default: null,
  },
})

// emit
const emit = defineEmits<{
  (event: 'update:text', text: string | null): void
}>()

const inputValue = computed({
  get (): string {
    return props.text;
  },
  set (value: string): void {
    emit('update:text', (value || null))
  }
})
</script>

<template>
  <v-text-field v-model="inputValue" v-bind="$attrs" hide-details density="compact" />
</template>