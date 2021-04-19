<template>
  <div
    :class="classes.container"
  >
    <div
      v-for="(message, key, index) in messages"
      :class="classes.message"
      :key="index"
    >
      {{ message }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FormMessages',
    data() {
      return {
        defaultClasses: {
          container: 'alert alert-success',
          message: '',
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