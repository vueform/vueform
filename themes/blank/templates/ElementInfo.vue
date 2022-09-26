<template>
  <span v-if="info || isSlot" :class="classes.container" @mouseover="handleMouseOver">
    <div :class="classes.wrapper" :id="id">
      <span v-if="isSlot" :class="classes.content"><slot/></span>
      <span v-else :class="classes.content" v-html="info"></span>
    </div>
  </span>
</template>

<script>
  export default {
    name: 'ElementInfo',
    data() {
      return {
        merge: true,
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