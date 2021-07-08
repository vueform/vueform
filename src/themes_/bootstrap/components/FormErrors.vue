<template>
  <div
    :class="classes.container"
  >
    <div  
      v-for="(error, key, index) in errors"
      :class="classes.error"
      :key="index"
    >
      {{ error }}
    </div>
  </div>
</template>

<script>

  export default {
    name: 'FormErrors',
    data() {
      return {
        defaultClasses: {
          container: 'alert alert-danger',
          error: '',
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