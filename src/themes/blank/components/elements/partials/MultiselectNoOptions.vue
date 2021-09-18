<template>
  <div v-if="isSlot" :class="classes.container"><slot></slot></div>
  <div v-else :class="classes.container" v-html="el$.fieldOptions.noOptionsText"></div>
</template>

<script>
  export default {
    name: 'MultiselectNoOptions',
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