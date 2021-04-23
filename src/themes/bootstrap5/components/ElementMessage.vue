<template>
  <small
    v-if="message"
    :class="classes.container"
  >
    {{ message }}
  </small>
</template>

<script>
  export default {
    name: 'ElementMessage',
    data() {
      return {
        defaultClasses: {
          container: 'text-success'
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';
</style>