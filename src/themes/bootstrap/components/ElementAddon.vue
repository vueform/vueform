<template>
  <div
    v-if="isAddonComponent"
    :class="classes.container"
  >
    <div :class="classes.wrapper">
      <component :is="addon" :el$="el$" />
    </div>
  </div>

  <div v-else :class="classes.container">
    <div v-html="addon" :class="classes.wrapper">
    </div>
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
          addonBefore: 'input-group-prepend',
          addonAfter: 'input-group-append',
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