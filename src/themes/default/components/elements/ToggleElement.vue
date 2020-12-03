<template>
  <component :is="layout">

    <template v-slot:field>

      <slot name="prefix"></slot>

      <toggle-button
        v-bind="options"
        :value="model"
        :name="String(name)"
        :id="String(id)"
        @input="handleChange"
        ref="input"
      />

      <span v-if="text" :class="classes.toggleText" v-html="text"></span>

      <slot name="suffix"></slot>

    </template>

    <template v-slot:info><slot name="info" :el$="el$"><component :is="slots.info" /></slot></template>
    <template v-slot:before><slot name="before" :el$="el$"><component :is="slots.before" type="before" /></slot></template>
    <template v-slot:label><slot name="label" :el$="el$"><component :is="slots.label" /></slot></template>
    <template v-slot:between><slot name="between" :el$="el$"><component :is="slots.between" type="between" /></slot></template>
    <template v-slot:description><slot name="description" :el$="el$"><component :is="slots.description" /></slot></template>
    <template v-slot:error><slot name="error" :el$="el$"><component :is="slots.error" /></slot></template>
    <template v-slot:message><slot name="message" :el$="el$"><component :is="slots.message" /></slot></template>
    <template v-slot:after><slot name="after" :el$="el$"><component :is="slots.after" type="after" /></slot></template>

  </component>
</template>

<script>
  import ToggleElement from './../../../../components/elements/ToggleElement'

  import ToggleButton from 'vue-js-toggle-button/src/Button.vue'

  export default {
    name: 'ToggleElement',
    mixins: [ToggleElement],
    components: {
      ToggleButton,
    },
    data() {
      return {
        defaultClasses: {
          container: 'lf-toggle',
          toggleText: 'toggle-text',
        }
      }
    }
  }
</script>

<style lang="scss">
  // @import 'variables';

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