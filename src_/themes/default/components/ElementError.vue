<template>
  <small
    :class="theme.classes.elementError"
  >
    {{ error }}
  </small>
</template>

<script>
  import ElementError from './../../../components/ElementError'

  export default {
    mixins: [ElementError],
  }
</script>