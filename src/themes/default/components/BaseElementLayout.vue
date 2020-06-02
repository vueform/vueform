<template>
  <div :class="classes.container" v-show="el$.visible">
    <div :class="classes.outerWrapper">
      <div :class="classes.innerWrapper">

        <div v-if="hasLabel" :class="classes.labelWrapper">
          <slot name="label">
            <component :is="components.ElementLabel" />
          </slot>
        </div>

        <div :class="classes.fieldWrapper">
          <slot name="field"></slot>

          <slot name="error">
            <component :is="components.ElementError" />
          </slot>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import BaseElementLayout from './../../../components/BaseElementLayout'

  export default {
    mixins: [BaseElementLayout],
    data() {
      return {
        defaultClasses: {
          container: 'lf-element',
          outerWrapper: 'form-group',
          innerWrapper: 'row',	
          labelWrapper: 'lf-label-container',	
          fieldWrapper: 'lf-field-container',
        },
        containers: {
          element: 'container',
          label: 'labelWrapper',
          field: 'fieldWrapper',
        }
      }
    }
  }
</script>