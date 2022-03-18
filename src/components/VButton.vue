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
    background: hsl(226, 83%, 61%);
    border: 1px solid hsl(226, 83%, 61%);
    box-shadow: 0px 3px 0px hsl(226, 73%, 68%);
    color: white;
    border-radius: 12px;
    position: relative;
    transition: all ease 0.1s;
    &:hover {
      border: 1px solid hsl(0, 0%, 70%);
      text-decoration: none;
      cursor: pointer;
    }
    &:hover:active {
      transform: translateY(4px);
      box-shadow: 0px 1px 0px hsl(0, 0%, 70%);
    }
    &:active {
      background: hsl(226, 82%, 69%);
      border: 1px solid hsl(226, 82%, 69%);
    }
    &.primary {

         background: hsl(120, 81%, 68%);
         color: black;
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
