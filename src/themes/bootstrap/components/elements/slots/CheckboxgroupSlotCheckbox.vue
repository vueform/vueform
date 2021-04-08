<template>
  <div :class="classes.container">
    <input
      type="checkbox"
      v-model="el$.model"
      :value="value"
      :class="classes.input"
      :name="`${el$.name}-${value}`"
      :id="`${el$.fieldId}-${value}`"
      :disabled="isDisabled"
    />

    <label 
      :class="classes.label"
      :for="`${el$.fieldId}-${value}`"
      v-html="item"
    >
    </label>
  </div>
</template>

<script>
  export default {
    name: 'CheckboxgroupSlotCheckbox',
    data() {
      return {
        defaultClasses: {
          container: 'form-check',
          label: 'form-check-label',
          input: 'form-check-input',
        }
      }
    }
  }
</script>