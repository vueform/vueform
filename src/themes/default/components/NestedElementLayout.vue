<template>
  <div :class="classes.container" v-show="el$.visible">
    <div :class="classes.wrapper">

      <div v-if="el$.hasLabel" :class="classes.labelWrapper">
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

         <slot name="children">
          <div :class="theme.classes.childrenContainer">
            <slot name="prefix"></slot>

            <slot name="elements"></slot>

            <slot name="suffix"></slot>
          </div>
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