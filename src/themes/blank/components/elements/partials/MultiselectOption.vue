<template>
  <span :class="classes.container">
    <slot :option="option" :search="search">
      {{ option.label }}
    </slot>
  </span>
</template>

<script>
  export default {
    name: 'MultiselectOption',
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