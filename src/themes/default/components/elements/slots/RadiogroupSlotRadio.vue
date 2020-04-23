<template>
  <div :class="theme.classes.radioContainer">
    <label 
      :class="el$.theme.classes.radioLabel"
      :for="el$.radioId(value)"
    >
      <input
        type="radio"
        v-model="el$.model"
        :value="value"
        :class="el$.theme.classes.radio"
        :name="el$.fieldName"
        :id="el$.radioId(value)"
        :disabled="el$.isDisabled(value)"
        @change="el$.handleChange"
      />
    
      <span>{{ item }}</span>
    </label>
  </div>
</template>

<script>
  import RadiogroupSlotRadio from './../../../../../components/elements/slots/RadiogroupSlotRadio'

  export default {
    mixins: [RadiogroupSlotRadio],
}
</script>