<template>
  <div :class="classes.container">
    <input
      type="radio"
      v-model="el$.value"
      :value="value"
      :class="classes.input"
      :name="el$.name"
      :id="`${el$.fieldId}-${value}`"
      :disabled="isDisabled"
    />

    <label 
      :class="classes.label"
      :for="`${el$.fieldId}-${value}`"
      v-html="item"
    ></label>
  </div>
</template>

<script>
  export default {
    name: 'RadiogroupSlotRadio',
    data() {
      return {
        defaultClasses: {
          container: 'form-radio',
          label: 'form-radio-label',
          input: 'form-radio-input',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>