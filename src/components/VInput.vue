<script setup lang="ts">
import { computed } from 'vue'

interface Emits {
  (e: 'update:modelValue', value: string): void
}
const emit = defineEmits<Emits>()

interface Props {
  modelValue: string
}
const props = defineProps<Props>()

const value = computed({
  get() {
    return props.modelValue
  },
  set(value: string) {
    emit('update:modelValue', value)
  },
})
</script>

<template>
  <div>
    <input v-model="value" type="text" placeholder="Type here...">
  </div>
</template>

<style scoped lang="scss">
input {
    width: 100%;
    padding: 10px;
    border: 2px solid hsl(0, 0%, 75%);
    border-radius: 5px;
    &:focus {
        border: 2px solid hsl(189, 85%, 70%);
        outline:none;
    }
    &:disabled {
      background: hsl(0, 0%, 93%);
      cursor: not-allowed;
      pointer-events: none;
    }
}

</style>
