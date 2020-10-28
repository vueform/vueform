<template>
  <small
    v-if="error"
    :class="classes.container"
  >
    {{ error }}
  </small>
</template>

<script>
  import ElementError from './../../../components/ElementError'

  export default {
    name: 'ElementError',
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