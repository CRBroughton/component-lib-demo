<script setup>
import Small from './demo/VButton/Small.vue'
import Medium from './demo/VButton/Medium.vue'
import Large from './demo/VButton/Large.vue'

</script>

# VButton

This is a simple button component. By default, the button is shown in the light blue colour.

## Example Usage

### Small Button

<DemoContainer>
  <Small/>
</DemoContainer>

<<< @/components/demo/VButton/Small.vue

### Medium Button - Using Primary Prop

<DemoContainer>
  <Medium/>
</DemoContainer>

<<< @/components/demo/VButton/Medium.vue

### Large Button - Using Warning Prop

<DemoContainer>
  <Large/>
</DemoContainer>

<<< @/components/demo/VButton/Large.vue




## Reference

You may show props, slots, events, methods, etc. using Markdown.

### Properties

| Name    | Type                       | Default | Description                                          |
|---------|----------------------------|---------|------------------------------------------------------|
| primary | boolean                    | null    | Sets button to the primary colour                    |
| warning | boolean                    | null    | Sets button to the warning colour                    |
| class   | string                     | null    | Adds additional classes to the button                |
| style   | Record<string, StyleValue> | null    | Adds additional styles to the button                 |
| size    | string                     | null    | Changes the button size ['small', 'medium', 'large'] |
| text    | string                     | null    | Messge to show                                       |



### Events

| Name    | Parameters | Description                             |
|---------|------------|-----------------------------------------|
| Clicked |            | Console logs out a message when clicked |

### Slots

| Name | Parameters | Description |
|------|------------|-------------|
|      |            |             |
