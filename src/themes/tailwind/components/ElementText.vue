<template>
  <div v-if="content" :class="classes[type]" v-html="content"></div>
</template>

<script>
  export default {
    name: 'ElementText',
    data() {
      return {
        defaultClasses: {
          before: '',
          between: '',
          after: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>