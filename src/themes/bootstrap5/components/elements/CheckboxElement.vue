<template>
  <component :is="elementLayout">
    <template v-slot:field>

        <div :class="classes.wrapper">
          <div :class="classes.inputContainer">
            <input
              type="checkbox"
              v-model="value"
              :class="classes.input"
              :name="name"
              :id="fieldId"
              :true-value="trueValue"
              :false-value="falseValue"
              :disabled="isDisabled"
              ref="input"
            />
            <label
              :class="classes.label"
              :for="name"
              v-html="text"
            ></label>
          </div>
        </div>

    </template>

    <template v-for="(component, slot) in elementSlots" v-slot:[slot]>
      <slot :name="slot" :el$="el$">
        <component :is="component" v-bind="elementSlotProps[slot]" />
      </slot>
    </template>
  </component>
</template>

<script>
  export default {
    name: 'CheckboxElement',
    data() {
      return {
        defaultClasses: {
          container: '',
          wrapper: 'checkbox-wrapper',
          inputContainer: 'form-check',
          label: 'form-check-label',
          input: 'form-check-input',
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

  .checkbox-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    min-height: $input-height;
  }

  .form-check-label {
    cursor: pointer;
  }
</style>