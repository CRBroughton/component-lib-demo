<script setup lang="ts">

</script>

<template>
  <div>
    <input type="text" placeholder="Type here...">
  </div>
</template>

<style scoped lang="scss">
input {
    width: 100%;
    padding: 10px;
    border: 1px solid hsl(0, 0%, 75%);
    &:focus {
        border: 1px solid hsl(266, 83%, 68%);
        outline:none;
    }
}

</style>
