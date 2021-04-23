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
          container: '',
        }
      }
    },
  }
</script>

<style lang="scss">
</style>