<template>
  <div :class="classes.container" v-html="label(values)"></div>
</template>

<script>
  export default {
    name: 'MultiselectSlotMultipleLabel',
    data() {
      return {
        defaultClasses: {
          container: ''
        }
      }
    }
  }
</script>

<style lang="scss">
</style>