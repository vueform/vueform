<template>
  <div :class="classes.wrapper">
    <span
      :class="classes.label"
      v-html="floating"
    ></span>
  </div>
</template>

<script>
  export default {
    name: 'ElementLabelFloating',
    data() {
      return {
        defaultClasses: {
          wrapper: 'floating-wrapper',
          label: 'floating-label',
          labelInvisible: '',
          labelVisible: 'is-visible',
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

  /* Floating label styles */

  .floating-wrapper {
    position: relative;
  }

  .floating-label {
    position: absolute;
    z-index: 5;
    left: 10px;
    top: -7px;
    font-size: 70%;
    background: #fff;
    padding: 0 1px;
    line-height: 0.9;
    transition: .3s;
    opacity: 0;
    visibility: hidden;

    &.is-visible {
      opacity: 1;
      visibility: visible;
      top: -4px;
    }
  }
</style>