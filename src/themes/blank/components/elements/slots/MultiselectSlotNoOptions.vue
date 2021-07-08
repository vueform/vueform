<template>
  <div :class="classes.container" v-html="el$.fieldOptions.noOptionsText"></div>
</template>

<script>
  export default {
    name: 'MultiselectSlotNoOptions',
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