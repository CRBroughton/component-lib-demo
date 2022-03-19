<script setup lang="ts">
import type { StyleValue } from 'vue'
import { computed } from 'vue'

type Style = Record<string, StyleValue>

type Size = 'small' | 'medium' | 'large'

interface Props {
  secondary?: boolean
  warning?: boolean
  class?: string
  style?: Style
  size?: Size
  text?: string
}

interface Emits {
  (e: 'click'): void
}

const props = defineProps<Props>()

const emit = defineEmits<Emits>()

// const clicked = (event: Event) => emit('click', (event.target as HTMLInputElement).innerHTML)
const clicked = () => emit('click')

const classes = computed(() => ({
  secondary: props.secondary,
  warning: !props.secondary && props.warning,
  [`button-${props.size || 'medium'}`]: true,
}))
</script>

<template>
  <div>
    <button
      class="my-button"
      :class="[classes, props.class]"
      :style="props.style"
      @click="clicked"
    >
      {{ text ?? 'Button' }}
    </button>
  </div>
</template>

<style scoped lang="scss">
.my-button {
    border: none;
    background: hsl(246, 84%, 58%);
    border: 1px solid hsl(246, 84%, 58%);
    box-shadow: 1px 1px 2px hsl(246, 80%, 70%);
    color: white;
    text-decoration: none;
    border-radius: 28px;
    position: relative;
    cursor: pointer;
    transition: all ease 0.1s;
    top: 0;
    &:hover {
      outline: 1px solid hsl(226, 75%, 70%);
      box-shadow: 1px 3px 4px hsl(246, 37%, 52%);
      top: -1px;
    }
    &:active {
      box-shadow: inset 1px 3px 1px #333;
      top: 1px;
      background: hsl(246, 84%, 62%);
      outline: 1px solid hsl(226, 82%, 69%);
    }
    &.secondary {
        background: hsl(120, 81%, 68%);
        outline: 1px solid hsl(120, 86%, 65%);
        box-shadow: 1px 1px 2px hsl(120, 83%, 84%);
        color: black;
        &:hover {
          box-shadow: 2px 2px 2px hsl(120, 32%, 55%);
        }
        &:active {
          background: hsl(120, 85%, 70%);
          box-shadow: inset 1px 1px 3px #333;
        }
    }
    &.warning {
        background: hsl(0, 80%, 68%);
        outline: 1px solid hsl(0, 72%, 74%);
        box-shadow: 1px 1px 2px hsl(0, 0%, 75%);
        &:active {
            background: hsl(0, 85%, 70%);
        }
    }
    &.button-small {
      font-size: 12px;
      padding: 10px 16px;
    }
    &.button-medium {
      font-size: 14px;
      padding: 11px 20px;
    }
    &.button-large {
      font-size: 16px;
      padding: 12px 24px;
    }
}

</style>
