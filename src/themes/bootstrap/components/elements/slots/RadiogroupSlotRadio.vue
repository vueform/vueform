<template>
  <div :class="el$.classes.radioContainer">
    <label 
      :class="el$.classes.radioLabel"
      :for="`${el$.id}-${el$.value}`"
    >
      <input
        type="radio"
        v-model="el$.model"
        :value="value"
        :class="el$.classes.radio"
        :name="$el.fieldName"
        :id="`${el$.id}-${el$.value}`"
        :disabled="el$.disabled || el$.disables.indexOf(value) !== -1"
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