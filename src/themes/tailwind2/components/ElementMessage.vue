<template>
  <small
    v-if="message"
    :class="classes.container"
  >
    {{ message }}
  </small>
</template>

<script>
  export default {
    name: 'ElementMessage',
    data() {
      return {
        defaultClasses: {
          container: 'text-success'
        }
      }
    }
  }
</script>

<style lang="scss">
</style>