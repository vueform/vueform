<template>
  <label :class="classes.container">
    <slot
      v-bind="{ name: `${el$.path}-${value}` }"
      :classes="classes"
      :is-disabled="isDisabled"
      :id="`${el$.fieldId}-${value}`"
      :item="item"
      :value="value"
      :items="items"
      :index="index"
    >
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
        v-html="item.label"
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