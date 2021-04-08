<template>
  <div :class="classes.container" v-show="visible">
    <div :class="classes.outerWrapper">
      <div :class="classes.innerWrapper">

        <div v-if="hasLabel" :class="classes.labelWrapper">
          <slot name="label"></slot>
          <slot name="info"></slot>
        </div>

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
  </div>
</template>

<script>
  export default {
    name: 'ElementLayout',
    data() {
      return {
        defaultClasses: {
          container: '',
          outerWrapper: 'form-group',
          innerWrapper: 'row',	
          labelWrapper: '',	
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