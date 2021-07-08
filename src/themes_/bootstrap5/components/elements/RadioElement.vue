<template>
  <component :is="elementLayout">
    <template v-slot:field>
      
      <div :class="classes.wrapper">
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
          wrapper: 'radio-wrapper',
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

  .radio-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    min-height: $input-height;
  }

  .form-radio {
    display: block;
    min-height: $form-check-min-height;
    padding-left: $form-check-padding-start;
    margin-bottom: $form-check-margin-bottom;

    .form-radio-input {
      float: left;
      margin-left: $form-check-padding-start * -1;
    }
  }

  .form-radio-input {
    width: $form-check-input-width;
    height: $form-check-input-width;
    margin-top: ($line-height-base - $form-check-input-width) / 2; // line-height minus check height
    vertical-align: top;
    background-color: $form-check-input-bg;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: $form-check-input-border;
    appearance: none;
    color-adjust: exact; // Keep themed appearance for print
    @include transition($form-check-transition);

    &[type="radio"] {
      // stylelint-disable-next-line property-disallowed-list
      border-radius: $form-check-radio-border-radius;
    }

    &:active {
      filter: $form-check-input-active-filter;
    }

    &:focus {
      border-color: $form-check-input-focus-border;
      outline: 0;
      box-shadow: $form-check-input-focus-box-shadow;
    }

    &:checked {
      background-color: $form-check-input-checked-bg-color;
      border-color: $form-check-input-checked-border-color;

      &[type="radio"] {
        @if $enable-gradients {
          background-image: escape-svg($form-check-radio-checked-bg-image), var(--#{$variable-prefix}gradient);
        } @else {
          background-image: escape-svg($form-check-radio-checked-bg-image);
        }
      }
    }

    &:disabled {
      pointer-events: none;
      filter: none;
      opacity: $form-check-input-disabled-opacity;
    }

    &[disabled],
    &:disabled {
      ~ .form-radio-label {
        opacity: $form-check-label-disabled-opacity;
      }
    }
  }

  .form-radio-label {
    color: $form-check-label-color;
    cursor: $form-check-label-cursor;
    cursor: pointer;
  }
</style>