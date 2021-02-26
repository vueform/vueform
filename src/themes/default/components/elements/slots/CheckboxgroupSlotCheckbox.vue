<template>
  <div :class="el$.classes.checkboxContainer">
    <label 
      :class="el$.classes.checkboxLabel"
      :for="`${el$.fieldId}-${value}`"
    >
      <input
        type="checkbox"
        v-model="el$.value"
        :value="value"
        :class="el$.classes.checkbox"
        :name="`${el$.name}-${value}`"
        :id="`${el$.fieldId}-${value}`"
        :disabled="el$.isDisabled || el$.disabledItems.indexOf(value) !== -1"
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
          checkboxContainer: 'checkbox',
          checkboxLabel: '',
          checkbox: '',
        }
      }
    }
  }
</script>