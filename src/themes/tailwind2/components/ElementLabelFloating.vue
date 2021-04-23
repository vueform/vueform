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