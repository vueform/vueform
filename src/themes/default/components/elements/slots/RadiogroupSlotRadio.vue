<template>
  <div :class="el$.classes.radioContainer">
    <label 
      :class="el$.classes.radioLabel"
      :for="`${el$.fieldId}-${value}`"
    >
      <input
        type="radio"
        v-model="el$.value"
        :value="value"
        :class="el$.classes.radio"
        :name="el$.name"
        :id="`${el$.fieldId}-${value}`"
        :disabled="el$.isDisabled || el$.disabledItems.indexOf(value) !== -1"
      />
    
      <span>{{ item }}</span>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'RadiogroupSlotRadio',
    data() {
      return {
        defaultClasses: {
          radioContainer: 'radio',
          radio: '',
          radioLabel: '',
        }
      }
    }
  }
</script>