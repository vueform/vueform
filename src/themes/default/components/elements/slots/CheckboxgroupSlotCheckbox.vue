<template>
  <div :class="theme.classes.checkboxContainer">
    <label 
      :class="el$.theme.classes.checkboxLabel"
      :for="el$.checkboxId(value)"
    >
      <input
        type="checkbox"
        v-model="el$.model"
        :value="value"
        :class="el$.theme.classes.checkbox"
        :name="el$.checkboxName(value)"
        :id="el$.checkboxId(value)"
        :disabled="el$.isDisabled(value)"
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
}
</script>