<template>
  <small
    v-if="error"
    :class="classes.container"
  >
    {{ error }}
  </small>
</template>

<script>
  export default {
    name: 'ElementError',
    data() {
      return {
        defaultClasses: {
          container: 'text-danger'
        }
      }
    }
  }
</script>

<style lang="scss">
</style>