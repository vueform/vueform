<template>
  <label
    :class="theme.classes.label"
    :for="name"
  >
    <slot></slot>
  </label>
</template>

<script>
  import ElementLabel from './../../../components/ElementLabel'

  export default {
    mixins: [ElementLabel],
  }
</script>