<template>
  <label v-if="label && isLabelComponent" :class="classes.container" :for="name">
    <span><component v-if="isLabelComponent" :is="label" /></span>
    <ElementInfo><slot name="info"></slot></ElementInfo>
  </label>
  <label v-else-if="label" :class="classes.container" :for="name">
    <span v-html="label"></span>
    <ElementInfo><slot name="info"></slot></ElementInfo>
  </label>
  <label v-else-if="isSlot" :class="classes.container" :for="name">
    <slot><component :is="slotComponent" /></slot>
    <ElementInfo><slot name="info"></slot></ElementInfo>
  </label>
</template>

<script>
  export default {
    name: 'ElementLabel',
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