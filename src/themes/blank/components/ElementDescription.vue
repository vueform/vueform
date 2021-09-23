<template>
  <div v-if="description" :class="classes.container" v-html="description"></div>
  <div v-else-if="isSlot" :class="classes.container"><slot /></div>
</template>

<script>
  export default {
    name: 'ElementDescription',
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