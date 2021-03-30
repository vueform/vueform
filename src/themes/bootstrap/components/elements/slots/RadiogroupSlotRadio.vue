<template>
  <div :class="classes.container">
    <label 
      :class="classes.label"
      :for="`${el$.fieldId}-${value}`"
    >
      <input
        type="radio"
        v-model="el$.value"
        :value="value"
        :class="classes.radio"
        :name="el$.name"
        :id="`${el$.fieldId}-${value}`"
        :disabled="isDisabled"
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
          container: 'radio-container',
          label: 'label',
          radio: 'radio',
        }
      }
    }
  }
</script>