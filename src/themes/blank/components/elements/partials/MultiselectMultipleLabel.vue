<template>
  <div v-if="isSlot" :class="classes.container"><slot></slot></div>
  <div v-else :class="classes.container" v-html="label(values)"></div>
</template>

<script>
  export default {
    name: 'MultiselectMultipleLabel',
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