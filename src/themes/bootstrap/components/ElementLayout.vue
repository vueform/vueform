<template>
  <div :class="classes.container" v-show="visible">
    <div :class="classes.outerWrapper">

      <template v-if="hasLabel">
        <slot name="label"></slot>
        <slot name="info"></slot>
      </template>

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
          outerWrapper: 'form-group row',
          fieldWrapper: '',
        },
        classKeys: {
          element: 'container',
          label: 'labelWrapper',
          field: 'fieldWrapper',
        }
      }
    },
  }
</script>