<template>
  <div
    v-if="showError"
    :class="classes.container"
    :id="id"
    aria-live="assertive"
    v-html="error"
  ></div>
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