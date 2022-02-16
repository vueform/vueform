<template>
  <span :class="classes.container" v-show="visible">
    <ElementLabel><slot name="label"/></ElementLabel>
    <ElementText type="before"><slot name="before"/></ElementText>
    <slot name="element"/>
    <ElementText type="between"><slot name="between"/></ElementText>
    <ElementDescription><slot name="description"/></ElementDescription>
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
        merge: true,
        defaultClasses: {
          container: '',
        },
      }
    },
  }
</script>

<style lang="scss">
</style>