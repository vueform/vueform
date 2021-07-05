<template>
  <label v-if="isLabelComponent" :class="classes.container" :for="name">
    <span><component v-if="isLabelComponent" :is="label" :el$="el$" /></span>
    <ElementInfo />
  </label>
  <label v-else :class="classes.container" :for="name">
    <span v-html="label"></span>
    <ElementInfo />
  </label>
</template>

<script>
  export default {
    name: 'ElementLabel',
    data() {
      return {
        defaultClasses: {
          container: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>