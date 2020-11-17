<template>
  <div :class="el$.classes.checkboxContainer">
    <label 
      :class="el$.classes.checkboxLabel"
      :for="`${el$.id}-${value}`"
    >
      <input
        type="checkbox"
        v-model="el$.model"
        :class="el$.classes.checkbox"
        :name="`${el$.name}-${value}`"
        :id="`${el$.id}-${value}`"
        :disabled="el$.disabled || el$.disables.indexOf(value) !== -1"
        @change="el$.handleChange"
      />
    
      <span>{{ item }}</span>
    </label>
  </div>
</template>

<script>
  import CheckboxgroupSlotCheckbox from './../../../../../components/elements/slots/CheckboxgroupSlotCheckbox'

  export default {
    name: 'CheckboxgroupSlotCheckbox',
    mixins: [CheckboxgroupSlotCheckbox],
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