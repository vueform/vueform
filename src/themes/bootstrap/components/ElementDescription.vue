<template>
  <div v-if="description" :class="classes.container" v-html="description"></div>
</template>

<script>
  export default {
    name: 'ElementDescription',
    data() {
      return {
        defaultClasses: {
          container: 'form-text text-muted',
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