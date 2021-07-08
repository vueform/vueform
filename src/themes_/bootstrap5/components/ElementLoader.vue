<template>
  <div :class="classes.wrapper">
    <span :class="classes.loader"></span>
  </div>
</template>

<script>
  export default {
    name: 'ElementLoader',
    data() {
      return {
        defaultClasses: {
          wrapper: 'element-loader-wrapper',
          loader: 'element-loader',
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

  .element-loader-wrapper {
    position: relative;
    z-index: 4;
    order: 1;
  }

  .element-loader {
    position: absolute;
    width: 16px;
    height: 16px;
    background: #fff;
    display: block;

    right: $input-padding-x;
    top: 50%;
    transform: translateY(-50%);

    &:before, &:after {
      position: absolute;
      content: "";
      top: 50%;
      left: 50%;
      margin: -8px 0 0 -8px;
      width: 16px;
      height: 16px;
      border-radius: 100%;
      border-color: $primary transparent transparent;
      border-style: solid;
      border-width: 2px;
      box-shadow: 0 0 0 1px transparent;
    }

    &:before {
      animation: spinning 2.4s infinite cubic-bezier(0.41, 0.26, 0.2, 0.62);
    }

    &:after {
      animation: spinning 2.4s infinite cubic-bezier(0.51, 0.09, 0.21, 0.8);
    }
  }

  @keyframes element-loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(2turn);
    }
  }
</style>