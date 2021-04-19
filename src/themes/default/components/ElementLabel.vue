<template>
  <label v-if="isLabelComponent" :class="classes.label" :for="name">
    <span><component v-if="isLabelComponent" :is="label" :el$="el$" /></span>
    <ElementInfo />
  </label>
  <label v-else :class="classes.label" :for="name">
    <span v-html="label"></span>
    <ElementInfo />
  </label>
</template>

<script>
  export default {
    name: 'ElementLabel',
    data() {
      return {
        defaultClasses: {
          label: 'col-form-label',
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';
</style>