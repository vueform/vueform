<template>
  <span :class="classes.container" v-show="visible">
    <ElementLabel><slot name="label"></slot></ElementLabel>
    <ElementText type="before"><slot name="before"></slot></ElementText>
    <slot name="field"></slot>
    <ElementText type="between"><slot name="between"></slot></ElementText>
    <ElementDescription type="description"><slot name="description"></slot></ElementDescription>
    <ElementError />
    <ElementMessage />
    <ElementText type="after"><slot name="after"></slot></ElementText>
  </span>
</template>

<script>
  export default {
    name: 'ElementLayoutInline',
    data() {
      return {
        defaultClasses: {
          container: '',
          container_error: '',
        },
      }
    },
  }
</script>

<style lang="scss">
</style>