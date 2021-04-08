<template>
  <component :is="elementLayout">

    <template v-slot:field>

      <div :class="classes.inputContainer">
        <Toggle
          :value="value"
          :modelValue="value"
          v-bind="fieldOptions"
          :name="name"
          :id="fieldId"
          @input="handleChange"
          ref="input"
        />

        <span v-if="text" :class="classes.toggleText" v-html="text"></span>
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
  import Toggle from '@vueform/toggle/src/Toggle'

  export default {
    name: 'ToggleElement',
    components: {
      Toggle,
    },
    data() {
      return {
        defaultClasses: {
          container: '',
          toggleText: 'toggle-text',
          inputContainer: 'input-group',
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/@vueform/toggle/themes/default.scss';
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

  .toggle-input {
    margin-right: 10px;

    label {
      background: $input-border-color;
    }

    input {
      &:disabled + label {
        background: $input-disabled-bg;
      }

      &:checked + label {
        background: $primary;
      }
    }
  }
</style>