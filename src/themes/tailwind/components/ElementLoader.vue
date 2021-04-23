<template>
  <div :class="classes.wrapper">
    <span :class="classes.loader"></span>
  </div>
</template>

<script>
  export default {
    name: 'ElementLoader',
    data() {
      return {
        defaultClasses: {
          wrapper: '',
          loader: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>