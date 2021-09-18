<template>
  <div :class="classes.container" v-show="visible">
    <div :class="classes.outerWrapper">

      <ElementLabel>
        <template #default><slot name="label"></slot></template>
        <template #info><slot name="info"></slot></template>
      </ElementLabel>

      <div :class="classes.fieldWrapper">
        <ElementText type="before"><slot name="before"></slot></ElementText>

        <slot name="field"></slot>
        
        <ElementText type="between"><slot name="between"></slot></ElementText>
        <ElementDescription type="description"><slot name="description"></slot></ElementDescription>
        <ElementError />
        <ElementMessage />
        <ElementText type="after"><slot name="after"></slot></ElementText>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'ElementLayout',
    data() {
      return {
        defaultClasses: {
          container: '',
          container_error: '',
          outerWrapper: '',
          outerWrapper_single: '',
          outerWrapper_multiple: '',
          fieldWrapper: '',
        },
      }
    },
  }
</script>

<style lang="scss">
</style>