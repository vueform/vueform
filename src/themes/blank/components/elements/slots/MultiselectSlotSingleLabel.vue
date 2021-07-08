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
          container: ''
        }
      }
    }
  }
</script>

<style lang="scss">
</style>