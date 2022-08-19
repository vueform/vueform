<template>
  <div v-if="error" :class="classes.container" v-html="error"></div>
</template>

<script>
  export default {
    name: 'ElementError',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>