<template>
  <div :class="classes.container">
    <div :class="classes.wrapper">

      <div v-if="el$.hasLabel" :class="classes.labelWrapper">
        <slot name="label">
          <component :is="components.ElementLabel" />
        </slot>
      </div>

      <div :class="classes.fieldWrapper">
        <slot name="field"></slot>

         <slot name="children">
          <div :class="theme.classes.childrenContainer">
            <slot name="prefix"></slot>

            <slot name="elements"></slot>

            <slot name="suffix"></slot>
          </div>
        </slot>

        <slot name="error">
          <component :is="components.ElementError" />
        </slot>
      </div>

    </div>
  </div>
</template>

<script>
  import NestedElementLayout from './../../../components/NestedElementLayout'

  export default {
    mixins: [NestedElementLayout],
    data() {
      return {
        defaultClasses: {
          container: 'element-container',
          wrapper: 'row',
          labelWrapper: 'lf-label-container',
          fieldWrapper: 'lf-field-container',
          childrenContainer: 'element-group',
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