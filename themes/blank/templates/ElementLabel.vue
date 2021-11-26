<template>
  <!-- If label is a component -->
  <label v-if="label && isLabelComponent" :class="classes.container" :for="name">
    <span><component v-if="isLabelComponent" :is="label"/></span>
    <ElementInfo><slot name="info"/></ElementInfo>
  </label>

  <!-- If label is HTML -->
  <label v-else-if="label" :class="classes.container" :for="name">
    <span v-html="label"></span>
    <ElementInfo><slot name="info"/></ElementInfo>
  </label>

  <!-- If label is a slot -->
  <label v-else-if="isSlot" :class="classes.container" :for="name">
    <slot/>
    <ElementInfo><slot name="info"/></ElementInfo>
  </label>

  <!-- If labels are forced but has no value -->
  <label v-else-if="hasLabel" :class="classes.container" :for="name" />
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