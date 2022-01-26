<template>
  <div v-if="message" :class="classes.container">{{ message }}</div>
</template>

<script>
  export default {
    name: 'ElementMessage',
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