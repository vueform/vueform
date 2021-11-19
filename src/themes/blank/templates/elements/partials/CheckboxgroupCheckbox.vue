<template>
  <label :class="classes.container">
    <slot :classes="classes" v-bind="{ name: `${el$.path}-${value}` }" :is-disabled="isDisabled" :id="`${el$.fieldId}-${value}`" :item="item" :value="value">
      <input
        type="checkbox"
        v-model="el$.model"
        :value="value"
        :class="classes.input"
        :name="`${el$.path}-${value}`"
        :id="`${el$.fieldId}-${value}`"
        :disabled="isDisabled"
     />

      <span 
        :class="classes.text"
        v-html="item"
      />
    </slot>
  </label>
</template>

<script>
  export default {
    name: 'CheckboxgroupCheckbox',
    data() {
      return {
        defaultClasses: {
          container: '',
          input: '',
          input_enabled: '',
          input_disabled: '',
          text: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>