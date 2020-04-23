<template>
  <span
    :class="theme.classes.elementLoader"
  ></span>
</template>

<script>
  import ElementLoader from './../../../components/ElementLoader'

  export default {
    mixins: [ElementLoader],
  }
</script>