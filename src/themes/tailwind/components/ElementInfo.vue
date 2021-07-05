<template>
  <span v-if="info" :class="classes.container">
    <div :class="classes.wrapper">
      <span :class="classes.content" v-html="info"></span>
    </div>
  </span>
</template>

<script>
  export default {
    name: 'ElementInfo',
    data() {
      return {
        defaultClasses: {
          container: '',
          wrapper: '',
          content: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>