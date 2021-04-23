<template>
  <div :class="classes.container" v-show="visible">
    <div :class="classes.outerWrapper">

      <slot v-if="hasLabel" name="label"></slot>

      <div :class="classes.fieldWrapper">
        <slot name="before"></slot>
        <slot name="field"></slot>
        <slot name="between"></slot>
        <slot name="description"></slot>
        <slot name="error"></slot>
        <slot name="message"></slot>
        <slot name="after"></slot>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'ElementLayout',
    data() {
      return {
        defaultClasses: {
          container: '',
          outerWrapper: 'row',
          outerWrapperSingle: 'form-group mb-3',
          outerWrapperMultiple: '',
          fieldWrapper: '',
          error: 'has-error',
        },
      }
    },
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';
</style>