<template>
  <div :class="classes.container" v-show="visible">
    <div :class="classes.outerWrapper">
      <div :class="classes.innerWrapper">

        <div v-if="hasLabel" :class="classes.labelWrapper">
          <slot name="label">
            <component :is="components.ElementLabel" />
          </slot>
        </div>

        <div :class="classes.fieldWrapper">
          <slot name="before">
            <span v-if="before" v-html="before" />
          </slot>

          <slot name="field"></slot>

          <slot name="between">
            <span v-if="between" v-html="between" />
          </slot>

          <slot name="description">
            <span v-if="description" :class="classes.fieldDescription" v-html="description" />
          </slot>

          <slot name="error">
            <component :is="components.ElementError" />
          </slot>

          <slot name="message">
            <component :is="components.ElementMessage" />
          </slot>

          <slot name="after">
            <span v-if="after" v-html="after" />
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
          fieldDescription: 'lf-field-description',
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