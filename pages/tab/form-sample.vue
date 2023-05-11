<script lang="ts" setup>
import { ref } from 'vue'

const valueNumber1 = ref<number | null>(null)
const valueNumber2 = ref<number | null>(null)
</script>

<template>
  <div style="padding: 20px;">
    <h2>数値(v-model)</h2>
    <TextField
      v-model:text="valueNumber1"
      type="number"
      :min-number="-10000"
      :max-number="1000"
    />
    <p>{{ typeof valueNumber1 }}: {{ String(valueNumber1) }}</p>
    <p>x * 2 = {{ String((valueNumber1 ?? 0) * 2) }}</p>
  </div>
</template>

<style lang="scss" scoped></style>