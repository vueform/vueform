<template>
  <div :class="classes.container">
    <div :class="classes.wrapper">
      <component
        v-for="(element, name) in schema"
        v-bind="element"
        :is="component(element)"
        :name="name"
        :key="name"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FormElements',
    data() {
      return {
        defaultClasses: {
          container: 'row',
          wrapper: 'form-elements',
        }
      }
    },
  }
</script>

<style lang="scss">
  // required because of SliderElement
  .form-elements {
    width: 100%;
  }
</style>