<template>
  <div :class="classes.container" v-show="visible">
    <div :class="classes.outerWrapper">

      <slot v-if="hasLabel" name="label"></slot>

      <div :class="classes.fieldWrapper">
        <slot name="before"></slot>
        <slot name="field"></slot>
        <slot name="between"></slot>
        <slot name="description"></slot>
        <slot name="error"></slot>
        <slot name="message"></slot>
        <slot name="after"></slot>
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
          outerWrapper: 'row',
          outerWrapperSingle: 'form-group',
          outerWrapperMultiple: '',
          fieldWrapper: '',
          error: 'has-error',
        },
        classKeys: {
          element: 'container',
          outerWrapper: 'outerWrapper',
          outerWrapperSingle: 'outerWrapperSingle',
          outerWrapperMultiple: 'outerWrapperMultiple',
          field: 'fieldWrapper',
        }
      }
    },
  }
</script>