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
        merge: true,
        defaultClasses: {
          container: '',
          loader: '',
          loader_sm: '',
          loader_md: '',
          loader_lg: '',
          $loader: (classes, { Size }) => ([
            classes.loader,
            classes[`loader_${Size}`],
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
</style>