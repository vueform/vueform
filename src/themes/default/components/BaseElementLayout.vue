<template>
  <div :class="classes.container">
    <div :class="classes.outerWrapper">
      <div  :class="classes.innerWrapper">

        <div v-if="hasLabel" :class="classes.labelWrapper">
          <slot name="label">
            <component :is="components.ElementLabel" />
          </slot>
        </div>

        <div :class="classes.fieldWrapper">
          <slot name="field"></slot>
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
          container: 'col-lg-12',
          outerWrapper: 'form-group',
          innerWrapper: 'row',	
          labelWrapper: 'col-lg-12',	
          fieldWrapper: 'col-lg-12',
        }
      }
    }
  }
</script>