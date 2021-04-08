<template>
  <component :is="elementLayout">
    <template v-slot:field>

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

  .form-check .form-check-input {
    -webkit-appearance: none;
    transition: all .2s ease-in-out;
    cursor: pointer;
    width: 16px;
    height: 16px;
    border-radius: 4px;
    border: 1px solid $input-border-color;
    outline: none;
    border-radius: 4px;
    margin-top: 0.2rem;

    &:checked {
      box-shadow: inset 0 0 0 9px $primary;
      border: 0;

      &:after {
        content: " ";
        width: 10px;
        height: 10px;
        display: inline-block;
        background: url('data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>');
        background-size: 10px 10px;
        background-position: 50%;
        background-repeat: no-repeat;
        position: absolute;
        top: 3px;
        left: 3px;
      }
    }
  }

  .form-check-label {
    margin-left: 2px;
    cursor: pointer;
  }
</style>