<template>
  <div v-if="visible" :class="classes.container"><slot>*</slot></div>
</template>

<script>
  export default {
    name: 'ElementRequired',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>