<template>
  <div :class="classes.container">
    <FormStepsControl type="previous" />
    <FormStepsControl type="next" />
    <FormStepsControl type="finish" />
  </div>
</template>

<script>
  export default {
    name: 'FormStepsControls',
    data() {
      return {
        defaultClasses: {
          container: 'form-steps-controls'
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

  .form-steps-controls {
    display: flex;
    justify-content: space-between;
    margin-top: $spacer;
  }
</style>