<template>
  <div v-if="content" :class="classes.container" v-html="content"></div>
  <div v-else-if="isSlot" :class="classes.container"><slot></slot></div>
</template>

<script>
  export default {
    name: 'ElementText',
    data() {
      return {
        defaultClasses: {
          container: '',
          container_before: '',
          container_between: '',
          container_after: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>