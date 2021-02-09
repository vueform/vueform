<template>
  <component :is="layout">

    <template v-slot:field>

      <slot name="prefix"></slot>

      <Toggle
        :value="model"
        :modelValue="model"
        v-bind="options"
        :name="name"
        :id="id"
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
  import Toggle from '@vueform/toggle/src/Toggle'
  import '@vueform/toggle/themes/default.css'

  export default {
    name: 'ToggleElement',
    components: {
      Toggle,
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