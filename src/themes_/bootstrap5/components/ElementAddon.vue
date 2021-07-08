<template>
  <div v-if="isAddonComponent" :class="classes.wrapper">
    <component :is="addon" :el$="el$" />
  </div>

  <div v-else v-html="addon" :class="classes.wrapper">
  </div>
</template>

<script>
  export default {
    name: 'ElementAddon',
    data() {
      return {
        defaultClasses: {
          container: '',
          wrapper: 'input-group-text',
          before: '',
          after: '',
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

  .input-group-append {
    order: 2;
  }
</style>