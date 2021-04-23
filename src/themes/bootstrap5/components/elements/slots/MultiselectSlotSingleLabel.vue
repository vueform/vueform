<template>
  <div :class="classes.container">
    {{ value.label }}
  </div>
</template>

<script>
  export default {
    name: 'MultiselectSlotSingleLabel',
    data() {
      return {
        defaultClasses: {
          container: 'multiselect-single-label'
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

  .multiselect-single-label {
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: calc(#{$input-padding-x} + 5px);
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    background: transparent;
  }
</style>