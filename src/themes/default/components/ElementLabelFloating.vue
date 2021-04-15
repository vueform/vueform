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
          visible: 'is-visible',
          label: 'floating-label',
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

  /* Fix for border radius bug introduced by inserting and extra div between the prefix and .form control */
  
  .input-group > :not(.input-group-prepend) ~ .form-control:not(:first-child),
  .input-group:not(.has-validation) > :not(.input-group-prepend) ~ .form-control {
    border-top-left-radius: $border-radius;
    border-bottom-left-radius: $border-radius;
  }

  .input-group > .input-group-prepend ~ .form-control:not(:first-child),
  .input-group:not(.has-validation) > .input-group-prepend ~ .form-control {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  /* Floating label styles */

  .floating-wrapper {
    position: relative;

    &.is-visible {
      .floating-label {
        opacity: 1;
        visibility: visible;
        top: -4px;
      }
    }
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
  }
</style>