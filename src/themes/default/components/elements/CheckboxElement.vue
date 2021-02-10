<template>
  <component :is="layout">
    <template v-slot:field>

      <slot name="prefix"></slot>
      
      <div :class="classes.checkboxContainer">
        <label :class="classes.checkboxLabel">
          <input
            type="checkbox"
            :checked="model"
            :class="classes.checkbox"
            :name="name"
            :id="id"
            :true-value="true"
            :false-value="false"
            :disabled="disabled"
            @change="handleChange"
            ref="input"
          />
        
          <span :class="classes.text" v-html="text"></span>
        </label>
      </div>

      <slot name="suffix"></slot>
    </template>

    <template v-for="(component, slot) in elementSlots" v-slot:[slot]>
      <slot :name="slot" :el$="el$">
        <component :is="component" v-bind="elementSlotProps[slot]" />
      </slot>
    </template>
  </component>
</template>

<script>
  export default {
    name: 'CheckboxElement',
    data() {
      return {
        defaultClasses: {
          container: 'lf-checkbox',
          checkboxContainer: 'checkbox form-check',
          checkboxLabel: 'form-check-label',
          checkbox: 'form-check-input',
          text: 'checkbox-text',
        }
      }
    }
  }
</script>