<template>
  <small
    :class="classes.container"
  >
    {{ error }}
  </small>
</template>

<script>
  import ElementError from './../../../components/ElementError'

  export default {
    mixins: [ElementError],
    data() {
      return {
        defaultClasses: {
          container: 'text-danger'
        }
      }
    }
  }
</script>