<template>
  <label :class="classes.container">
    <slot :classes="classes" v-bind="{ name: el$.path }" :is-disabled="isDisabled" :id="`${el$.fieldId}-${value}`" :item="item" :value="value">
      <input
        type="radio"
        v-model="el$.value"
        :value="value"
        :class="classes.input"
        :name="el$.path"
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
    name: 'RadiogroupRadio',
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