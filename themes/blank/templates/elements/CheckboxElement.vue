<template>
  <component :is="elementLayout">
    <template #element>
      <label :class="classes.wrapper">
        <input
          type="checkbox"
          v-model="value"
          :class="classes.input"
          :name="path"
          :id="fieldId"
          :true-value="trueValue"
          :false-value="falseValue"
          :disabled="isDisabled"
          ref="input"
        />

        <!-- If label is HTML -->
        <span
          v-if="text"
          :class="classes.text"
          v-html="text"
        />

        <!-- If label is slot -->
        <span
          v-else
          :class="classes.text"
        ><slot :el$="el$"><component :is="fieldSlots.default" :el$="el$"/></slot></span>
      </label>
    </template>

    <!-- Default element slots -->
    <template v-for="(component, slot) in elementSlots" #[slot]><slot :name="slot" :el$="el$"><component :is="component" :el$="el$"/></slot></template>
  </component>
</template>

<script>
  export default {
    name: 'CheckboxElement',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: '',
          wrapper_sm: '',
          wrapper_md: '',
          wrapper_lg: '',
          input: '',
          input_enabled: '',
          input_disabled: '',
          input_sm: '',
          input_md: '',
          input_lg: '',
          text: '',
          $wrapper: (classes, { Size }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`]
          ]),
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