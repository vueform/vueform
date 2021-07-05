<template>
  <div v-if="content" :class="classes.container" v-html="content"></div>
</template>

<script>
  export default {
    name: 'ElementText',
    data() {
      return {
        defaultClasses: {
          container: '',
          containerBefore: '',
          containerBetween: '',
          containerAfter: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>