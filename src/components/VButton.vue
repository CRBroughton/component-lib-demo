<script setup lang="ts">
import type { StyleValue } from 'vue'
import { computed } from 'vue'

type Style = Record<string, StyleValue>

type Size = 'small' | 'medium' | 'large'

interface Props {
  primary?: boolean
  warning?: boolean
  class?: string
  style?: Style
  size?: Size
  text?: string
}

const props = defineProps<Props>()

// eslint-disable-next-line no-console
const clicked = () => { console.log('You clicked me!') }

const classes = computed(() => ({
  primary: props.primary,
  warning: !props.primary && props.warning,
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
    background: hsl(189, 85%, 70%);
    border-radius: 5px;
    &:hover {
      text-decoration: underline;
    }
    &:active {
       background: hsl(189, 87%, 75%);
    }
    &.primary {
        background: hsl(120, 81%, 68%);
        &:active {
            background: hsl(120, 85%, 70%);
        }
    }
    &.warning {
        background: hsl(0, 80%, 68%);
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
