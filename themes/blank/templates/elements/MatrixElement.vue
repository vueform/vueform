<template>
  <component :is="elementLayout" ref="container">
    <template #element>
      Matrix
    </template>
    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot></template>
  </component>
</template>

<script>
  export default {
    name: 'MatrixElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
        },
      }
    },
  }
</script>

<style lang="scss">
</style>