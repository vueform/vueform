<template>
  <span :class="classes.container" v-show="visible">
    <ElementLabel><slot name="label"/></ElementLabel>
    <ElementText type="before"><slot name="before"/></ElementText>
    <slot name="field"/>
    <ElementText type="between"><slot name="between"/></ElementText>
    <ElementDescription type="description"><slot name="description"/></ElementDescription>
    <ElementError/>
    <ElementMessage/>
    <ElementText type="after"><slot name="after"/></ElementText>
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