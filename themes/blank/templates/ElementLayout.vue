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
          container_sm: '',
          container_md: '',
          container_lg: '',
          container_error: '',
          outerWrapper: '',
          outerWrapper_single: '',
          outerWrapper_single_sm: '',
          outerWrapper_single_md: '',
          outerWrapper_single_lg: '',
          outerWrapper_multiple: '',
          outerWrapper_multiple_sm: '',
          outerWrapper_multiple_md: '',
          outerWrapper_multiple_lg: '',
          innerContainer: '',
          innerWrapperBefore: '',
          innerWrapper: '',
          innerWrapperAfter: '',
          $container: (classes, { el$, Size }) => ([
            classes.container,
            classes[`container_${Size}`],
            el$.columnsClasses.container,
            el$.classes.container,
            !el$.isStatic && el$.errors && !!el$.errors.length ? classes.container_error : null
          ]),
          $innerContainer:  (classes, { el$ }) => ([
            classes.innerContainer,
            el$.columnsClasses.innerContainer,
          ]),
          $innerWrapper:  (classes, { el$ }) => ([
            classes.innerWrapper,
            el$.columnsClasses.wrapper,
          ]),
          $outerWrapper:  (classes, { multiple, Size }) => ([
            classes.outerWrapper,
            multiple.value ? classes.outerWrapper_multiple : classes.outerWrapper_single,
            multiple.value ? classes[`outerWrapper_multiple_${Size}`] : classes[`outerWrapper_single_${Size}`],
          ]),
        },
      }
    },
  }
</script>

<style lang="scss">
</style>