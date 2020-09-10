<template>
  <component :is="components.BaseElementLayout">
    <template slot="field">
      <slot name="prefix"></slot>
      
      <component
        :is="components.Flatpickr"
        :model="model"
        :class="classes.input"
        :dateFormat="displayFormat"
        @input="handleInput"
        @change="handleChange"
        ref="datepicker$"
      />

      <slot name="suffix"></slot>
    </template>

    <slot slot="label" name="label" :el$="el$"></slot>
    <slot slot="before" name="before" :el$="el$"></slot>
    <slot slot="between" name="between" :el$="el$"></slot>
    <slot slot="error" name="error" :el$="el$"></slot>
    <slot slot="after" name="after" :el$="el$"></slot>
  </component>
</template>

<script>
  import DateElement from './../../../../components/elements/DateElement'

  import Flatpickr from './../wrappers/Flatpickr'

  export default {
    mixins: [DateElement],
    components: {
      Flatpickr,
    },
    data() {
      return {
        defaultClasses: {
          input: 'form-control',
        }
      }
    }
  }
</script>