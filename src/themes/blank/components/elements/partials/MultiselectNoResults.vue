<template>
  <div v-if="isSlot" :class="classes.container"><slot></slot></div>
  <div v-else :class="classes.container" v-html="el$.fieldOptions.noResultsText"></div>
</template>

<script>
  export default {
    name: 'MultiselectNoResults',
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