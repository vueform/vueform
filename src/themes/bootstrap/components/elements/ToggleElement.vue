<template>
  <component :is="components.BaseElementLayout">
    <template slot="field">
      <slot name="prefix"></slot>

      <toggle-button
        v-model="model"
        v-bind="options"
        :name="String(name)"
        :id="String(id)"
        @input="handleChange"
        ref="toggle$"
      />

      <span v-if="text" :class="classes.toggleText">
        {{ text }}
      </span>

      <slot name="suffix"></slot>
    </template>

    <slot slot="label" name="label" :el$="el$"></slot>
    <slot slot="before" name="before" :el$="el$"></slot>
    <slot slot="between" name="between" :el$="el$"></slot>
    <slot slot="error" name="error" :el$="el$"></slot>
    <slot slot="after" name="after" :el$="el$"></slot>
  </component>
</template>

<script>
  import ToggleElement from './../../../../components/elements/ToggleElement'

  import ToggleButton from 'vue-js-toggle-button/src/Button.vue'

  export default {
    mixins: [ToggleElement],
    components: {
      ToggleButton,
    },
    data() {
      return {
        defaultClasses: {
          toggleText: 'toggle-text',
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'variables';

  .vue-js-switch {
    .v-switch-core {
      // !!
      background: #777777;
    }

    &.toggled {
      .v-switch-core {
        background: #0597db;
      }
    }
  }

  .toggle-text {
    display: inline-block;
    margin: 0px 0 0 5px;
    position: relative;
    top: -3px;
  }
</style>