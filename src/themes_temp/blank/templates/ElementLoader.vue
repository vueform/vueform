<template>
  <div :class="classes.container">
    <span :class="classes.loader"></span>
  </div>
</template>

<script>
  export default {
    name: 'ElementLoader',
    data() {
      return {
        defaultClasses: {
          container: '',
          loader: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>