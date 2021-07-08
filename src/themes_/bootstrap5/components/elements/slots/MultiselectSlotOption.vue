<template>
  <span :class="classes.container">
    {{ option.label }}
  </span>
</template>

<script>
  export default {
    name: 'MultiselectSlotOption',
    data() {
      return {
        defaultClasses: {
          container: ''
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