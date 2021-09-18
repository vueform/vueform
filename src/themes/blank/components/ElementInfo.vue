<template>
  <span v-if="info || isSlot" :class="classes.container">
    <div :class="classes.wrapper">
      <span v-if="isSlot" :class="classes.content"><slot><component :is="slotComponent" /></slot></span>
      <span v-else :class="classes.content" v-html="info"></span>
    </div>
  </span>
</template>

<script>
  export default {
    name: 'ElementInfo',
    data() {
      return {
        defaultClasses: {
          container: '',
          wrapper: '',
          content: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>