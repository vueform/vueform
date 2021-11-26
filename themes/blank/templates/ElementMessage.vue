<template>
  <div v-if="message" :class="classes.container">{{ message }}</div>
</template>

<script>
  export default {
    name: 'ElementMessage',
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