<template>
  <i v-if="info" :class="classes.info">
    <div :class="classes.wrapper">
      <span :class="classes.content" v-html="info"></span>
    </div>
  </i>
</template>

<script>
  export default {
    name: 'ElementInfo',
    data() {
      return {
        defaultClasses: {
          info: '',
          wrapper: '',
          content: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>