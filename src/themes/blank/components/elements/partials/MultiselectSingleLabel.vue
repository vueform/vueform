<template>
  <div :class="classes.container">
    <slot :value="value">
      {{ value.label }}
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'MultiselectSingleLabel',
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