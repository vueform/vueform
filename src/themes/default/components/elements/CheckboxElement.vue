<template>
  <component :is="components.BaseElementLayout">
    <template slot="field">
      <slot name="prefix"></slot>
      
      <div
        :class="classes.checkboxContainer"
      >
        <label 
          :class="classes.checkboxLabel"
        >
          <input
            type="checkbox"
            v-model="model"
            :class="classes.checkbox"
            :name="name"
            :id="id"
            :true-value="trueValue"
            :false-value="falseValue"
            :disabled="disabled"
            @change="handleChange"
            ref="checkbox"
          />
        
          <span v-html="text"></span>
        </label>
      </div>

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
  import CheckboxElement from './../../../../components/elements/CheckboxElement'

  export default {
    mixins: [CheckboxElement],
    data() {
      return {
        defaultClasses: {
          checkboxContainer: 'checkbox form-check',
          checkboxLabel: 'form-check-label',
          checkbox: 'form-check-input',
        }
      }
    }
  }
</script>