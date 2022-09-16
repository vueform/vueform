<template>
  <div v-if="message" :class="classes.container" v-html="message"></div>
</template>

<script>
  export default {
    name: 'ElementMessage',
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