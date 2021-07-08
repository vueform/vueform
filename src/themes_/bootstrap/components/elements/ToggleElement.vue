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

  .toggle-text {
    margin-left: 0.5rem;
  }

  .toggle-container {
    display: inline-block;
  }

  .toggle {
    display: flex;
    width: var(--toggle-width, 3rem);
    height: var(--toggle-height, 1.25rem);
    border-radius: 999px;
    position: relative;
    cursor: pointer;
    transition: .3s all;
    align-items: center;
    box-sizing: content-box;
    border: var(--toggle-border, 0.125rem) solid;
    font-size: var(--toggle-font-size, 0.75rem);
    line-height: 1;
  }

  .toggle-on {
    background: var(--toggle-bg-on, #10b981);
    border-color: var(--toggle-border-on, #10b981);
    justify-content: flex-start;
    color: var(--toggle-text-on, #ffffff);
  }

  .toggle-off {
    background: var(--toggle-bg-off, #e5e7eb);
    border-color: var(--toggle-border-off, #e5e7eb);
    justify-content: flex-end;
    color: var(--toggle-text-off, #374151);
  }

  .toggle-on-disabled {
    background: var(--toggle-bg-on-disabled, #d1d5db);
    border-color: var(--toggle-border-on-disabled, #d1d5db);
    justify-content: flex-start;
    color: var(--toggle-text-on-disabled, #9ca3af);
    cursor: not-allowed;
  }

  .toggle-off-disabled {
    background: var(--toggle-bg-off-disabled, #e5e7eb);
    border-color: var(--toggle-border-off-disabled, #e5e7eb);
    justify-content: flex-end;
    color: var(--toggle-text-off-disabled, #9ca3af);
    cursor: not-allowed;
  }

  .toggle-handle {
    display: inline-block;
    background: var(--toggle-handle-enabled, #ffffff);
    width: 20px;
    height: 20px;
    top: 0;
    border-radius: 50%;
    position: absolute;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: var(--toggle-duration, 150ms);
  }

  .toggle-handle-on {
    left: 100%;
    transform: translateX(-100%);
  }

  .toggle-handle-off {
    left: 0%;
  }

  .toggle-handle-on-disabled {
    left: 100%;
    transform: translateX(-100%);
    background: var(--toggle-handle-disabled, #f3f4f6);
  }

  .toggle-handle-off-disabled {
    left: 0%;
    background: var(--toggle-handle-disabled, #f3f4f6);
  }

  .toggle-label {
    text-align: center;
    width: calc(var(--toggle-width, 3.25rem) - var(--toggle-height, 1.25rem));
    box-sizing: border-box;
    white-space: nowrap;
    user-select: none;
  }
</style>