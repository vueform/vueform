<template>
  <component :is="layout">
    <template v-slot:field>
      <slot name="prefix"></slot>
      
      <div
        :class="classes.radioContainer"
      >
        <label 
          :class="classes.radioLabel"
          :for="name"
        >
          <input
            type="radio"
            :checked="model"
            :value="radioValue"
            :class="classes.radio"
            :name="fieldName"
            :id="fieldId"
            :disabled="isDisabled"
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
    name: 'RadioElement',
    data() {
      return {
        defaultClasses: {
          container: 'lf-radio',
          radioContainer: 'radio',
          radioLabel: '',
          radio: '',
          text: 'checkbox-text',
        }
      }
    }
  }
</script>