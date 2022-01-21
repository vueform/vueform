<template>
  <div :class="classes.container">
    <slot>
      <component
        v-for="(element, name) in schema"
        v-bind="element"
        :is="component(element)"
        :name="name"
        :key="name"
     />
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'FormElements',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
        }
      }
    },
  }
</script>

<style lang="scss">
</style>