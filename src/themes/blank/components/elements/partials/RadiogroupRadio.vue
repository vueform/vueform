<template>
  <label :class="classes.container">
    <slot :classes="classes" :is-disabled="isDisabled" :name="el$.inputName" :id="`${el$.fieldId}-${value}`" :item="item" :value="value">
      <input
        type="radio"
        v-model="el$.value"
        :value="value"
        :class="classes.input"
        :name="el$.inputName"
        :id="`${el$.fieldId}-${value}`"
        :disabled="isDisabled"
     />

      <span 
        :class="classes.label"
        v-html="item.label"
      />
    </slot>
  </label>
</template>

<script>
  export default {
    name: 'RadiogroupRadio',
    data() {
      return {
        defaultClasses: {
          container: '',
          input: '',
          input_enabled: '',
          input_disabled: '',
          label: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>