<template>
  <component :is="elementLayout">

    <template v-slot:field>

      <div :class="classes.wrapper">
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
          wrapper: 'toggle-wrapper',
          toggleText: 'toggle-text',
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

  .toggle-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    min-height: $input-height;
  }

  .toggle-input {
    margin-right: 10px;

    label {
      background: $input-border-color;
      width: 54px;
      width: var(--toggle-width);
      height: 24px;
      height: var(--toggle-height);
      display: flex;
      border-radius: 12px;
      border-radius: var(--toggle-radius);
      position: relative;
      cursor: pointer;
      transition: .3s background;
      transition: var(--toggle-speed) background;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding-left: 24px;
      padding-left: var(--toggle-height);
      padding-right: 6px;
      margin-bottom: 0;

      &:before {
        content: " ";
        background: #ffffff;
        background: var(--toggle-off-handle-color);
        width: 18px;
        width: var(--toggle-handle-size);
        height: 18px;
        height: var(--toggle-handle-size);
        border-radius: 50%;
        position: absolute;
        left: 3px;
        top: 3px;
        transition: .3s left;
        transition: var(--toggle-speed) left;
      }

      .toggle-on,
      .toggle-off {
        font-size: 13px;
        font-size: var(--toggle-font-size);
        text-align: center;
        font-weight: 500;
      }

      .toggle-on {
        display: none;
        color: #ffffff;
        color: var(--toggle-on-text-color);
      }

      .toggle-off {
        display: flex;
        color: #80878c;
        color: var(--toggle-off-text-color);
      }
    }

    input {
      display: none;

      &:checked + label {
        background: $primary;
        padding-right: 24px;
        padding-right: var(--toggle-height);
        padding-left: 6px;

        &:before {
          background: #ffffff;
          background: var(--toggle-on-handle-color);
          left: calc(100% - var(--toggle-handle-right-on));
        }

        .toggle-on {
          display: flex;
        }

        .toggle-off {
          display: none;
        }
      }

      &:disabled + label {
        background: $input-disabled-bg;
        cursor: not-allowed;

        &:before {
          background: #f2faff;
          background: var(--toggle-disabled-handle-color);
        }

        .toggle-on,
        .toggle-off {
          color: #80878c;
          color: var(--toggle-disabled-text-color);
        }
      }
    }
  }
</style>