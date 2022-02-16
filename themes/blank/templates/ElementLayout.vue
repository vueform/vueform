<template>
  <div :class="classes.container" v-show="visible">
    <div :class="classes.outerWrapper">
      <ElementLabel>
        <template #default><slot name="label"/></template>
        <template #info><slot name="info"/></template>
      </ElementLabel>

      <div :class="classes.innerContainer">
        <div :class="classes.innerWrapperBefore">
          <ElementText type="before"><slot name="before"/></ElementText>
        </div>
        <div :class="classes.innerWrapper">
          <slot name="element"/>
        </div>
        <div :class="classes.innerWrapperAfter">
          <ElementText type="between"><slot name="between"/></ElementText>
          <ElementDescription><slot name="description"/></ElementDescription>
          <ElementError/>
          <ElementMessage/>
          <ElementText type="after"><slot name="after"/></ElementText>
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
        merge: true,
        defaultClasses: {
          container: '',
          outerWrapper: '',
          innerContainer: '',
          innerWrapperBefore: '',
          innerWrapper: '',
          innerWrapperAfter: '',
        },
      }
    },
  }
</script>

<style lang="scss">
</style>