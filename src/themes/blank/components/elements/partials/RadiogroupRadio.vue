<template>
  <div :class="classes.container">
    <slot :classes="classes" :is-disabled="isDisabled" :name="el$.name" :id="`${el$.fieldId}-${value}`" :item="item" :value="value">
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
        v-html="item.label"
      ></label>
    </slot>
  </div>
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