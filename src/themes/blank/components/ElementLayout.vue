<template>
  <div :class="classes.container" v-show="visible">
    <div :class="classes.outerWrapper">
      <ElementLabel>
        <template #default><slot name="label" /></template>
        <template #info><slot name="info" /></template>
      </ElementLabel>
      <div :class="classes.fieldContainer">
        <div :class="classes.fieldWrapperBefore">
          <ElementText type="before"><slot name="before" /></ElementText>
        </div>
        <div :class="classes.fieldWrapper">
          <slot name="field" />
        </div>
        <div :class="classes.fieldWrapperAfter">
          <ElementDescription type="description"><slot name="description" /></ElementDescription>
          <ElementText type="between"><slot name="between" /></ElementText>
          <ElementError />
          <ElementMessage />
          <ElementText type="after"><slot name="after" /></ElementText>
        </div>
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
          fieldContainer: '',
          fieldWrapperBefore: '',
          fieldWrapper: '',
          fieldWrapperAfter: '',
        },
      }
    },
  }
</script>

<style lang="scss">
</style>