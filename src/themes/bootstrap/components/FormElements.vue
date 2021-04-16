<template>
  <div :class="classes.container">
    <component
      v-for="(element, name) in schema"
      v-bind="element"
      :is="component(element)"
      :name="name"
      :key="name"
    />
  </div>
</template>

<script>
  export default {
    name: 'FormElements',
    data() {
      return {
        defaultClasses: {
          container: 'row',
        }
      }
    },
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';
</style>