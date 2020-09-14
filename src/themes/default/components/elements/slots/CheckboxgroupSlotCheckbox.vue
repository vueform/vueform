<template>
  <div :class="el$.classes.checkboxContainer">
    <label 
      :class="el$.classes.checkboxLabel"
      :for="el$.checkboxId(value)"
    >
      <input
        type="checkbox"
        v-model="el$.model"
        :value="value"
        :class="el$.classes.checkbox"
        :name="el$.checkboxName(value)"
        :id="el$.checkboxId(value)"
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