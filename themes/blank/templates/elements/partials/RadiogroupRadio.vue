<template>
  <label :class="classes.container">
    <slot
      v-bind="{ name }"
      :classes="classes"
      :is-disabled="isDisabled"
      :id="id"
      :item="item"
      :value="value"
      :items="items"
      :index="index"
    >
      <input
        type="radio"
        v-model="el$.value"
        :value="value"
        :class="classes.input"
        :name="name"
        :id="id"
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
    name: 'RadiogroupRadio',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          input: '',
          input_enabled: '',
          input_disabled: '',
          input_sm: '',
          input_md: '',
          input_lg: '',
          text: '',
          $input: (classes, { isDisabled, Size }) => ([
            classes.input,
            classes[`input_${Size}`],
            isDisabled ? classes.input_disabled : classes.input_enabled
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
</style>