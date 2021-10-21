<template>
  <div v-if="error" :class="classes.container">{{ error }}</div>
</template>

<script>
  export default {
    name: 'ElementError',
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