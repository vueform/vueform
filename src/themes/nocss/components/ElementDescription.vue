<template>
  <div v-if="description" :class="classes.fieldDescription" v-html="description"></div>
</template>

<script>
  export default {
    name: 'ElementDescription',
    data() {
      return {
        defaultClasses: {
          fieldDescription: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>