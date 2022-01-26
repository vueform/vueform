<template>
  <div v-if="error" :class="classes.container">{{ error }}</div>
</template>

<script>
  export default {
    name: 'ElementError',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          container_sm: '',
          container_md: '',
          container_lg: '',
          $container: (classes, { Size }) => ([
            classes.container,
            classes[`container_${Size}`],
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
</style>