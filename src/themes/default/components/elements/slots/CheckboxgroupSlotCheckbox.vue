<template>
  <div :class="classes.container">
    <label 
      :class="classes.label"
      :for="`${el$.fieldId}-${value}`"
    >
      <input
        type="checkbox"
        v-model="el$.model"
        :value="value"
        :class="classes.checkbox"
        :name="`${el$.name}-${value}`"
        :id="`${el$.fieldId}-${value}`"
        :disabled="isDisabled"
      />
    
      <span>{{ item }}</span>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'CheckboxgroupSlotCheckbox',
    data() {
      return {
        defaultClasses: {
          container: 'checkbox-container',
          label: 'label',
          checkbox: 'checkbox',
        }
      }
    }
  }
</script>