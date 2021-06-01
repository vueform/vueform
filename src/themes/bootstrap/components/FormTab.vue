<template>
  <li v-show="visible" :class="classes.container">
    <a
      v-if="isLabelComponent"
      href="#"
      :class="classes.wrapper"
      @click.prevent="select"
    >
      <component :is="tabLabel" :form$="form$" />
    </a>
    <a
      v-else
      v-html="tabLabel"
      href="#"
      :class="classes.wrapper"
      @click.prevent="select"
    ></a>
  </li>
</template>

<script>
  export default {
    name: 'FormTab',
    data() {
      return {
        defaultClasses: {
          container: 'nav-item',
          wrapper: 'nav-link',
          wrapperActive: 'active',
          wrapperInactive: '',
          wrapperValid: '',
          wrapperInvalid: 'has-error',
        },
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

  .nav-tabs {
    .nav-link {
      &.has-error, &.active.has-error {
        color: $danger;
      }
    }
  }
</style>