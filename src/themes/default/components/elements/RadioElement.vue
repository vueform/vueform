<template>
  <component :is="elementLayout">
    <template v-slot:field>
      
      <div :class="classes.inputContainer">
        <input
          type="radio"
          v-model="value"
          :value="radioValue"
          :class="classes.input"
          :name="fieldName"
          :id="fieldId"
          :disabled="isDisabled"
          ref="input"
        />
        <label 
          :class="classes.label"
          :for="name"
          v-html="text"
        >
        </label>
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
    name: 'RadioElement',
    data() {
      return {
        defaultClasses: {
          container: '',
          inputContainer: 'form-radio',
          label: 'form-radio-label',
          input: 'form-radio-input',
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

  .form-radio {
    position: relative;
    display: block;
    padding-left: $form-check-input-gutter;
  }

  .form-radio-input {
    position: absolute;
    margin-top: $form-check-input-margin-y;
    margin-left: -$form-check-input-gutter;
    -webkit-appearance: none;
    transition: all .2s ease-in-out;
    cursor: pointer;
    width: 16px;
    height: 16px;
    border-radius: 4px;
    border: 1px solid $input-border-color;
    outline: none;
    border-radius: 50%;
    margin-top: 0.2rem;

    &[disabled] ~ .form-check-label,
    &:disabled ~ .form-check-label {
      color: $text-muted;
    }

    &:checked {
      box-shadow: inset 0 0 0 9px $primary;
      border: 0;

      &:after {
        content: " ";
        position: absolute;
        background: #fff;
        width: 4px;
        height: 4px;
        left: 6px;
        top: 6px;
        border-radius: 50%;
        opacity: 0;
        transition: all .2s ease-in-out .1s;
        transform: scale(.2);
        display: inline-block;
        opacity: 1;
        transform: scale(1);
      }
    }
  }

  .form-radio-label {
    margin-bottom: 0; // Override default `<label>` bottom margin
    margin-left: 2px;
    cursor: pointer;
  }
</style>