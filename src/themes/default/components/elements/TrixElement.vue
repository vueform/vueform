<template>
  <component :is="layout">
    <template v-slot:field>

      <slot name="prefix"></slot>

      <component
        :is="components.Trix"
        :value="model"
        :placeholder="placeholder"
        :id="id"
        :accept="accept"
        :accept-mimes="acceptMimes"
        :endpoint="endpoint"
        :disabled="disabled"
        :class="{[classes.trixDisabled]: disabled}"
        @input="handleInput"
        @alert="handleError"
        ref="input"
      />

      <slot name="suffix"></slot>

    </template>

    <template v-slot:info><slot name="info" :el$="el$"><component v-if="slots.info" :is="slots.info" /></slot></template>
    <template v-slot:before><slot name="before" :el$="el$"><component v-if="slots.before" :is="slots.before" type="before" /></slot></template>
    <template v-slot:label><slot name="label" :el$="el$"><component v-if="slots.label" :is="slots.label" /></slot></template>
    <template v-slot:between><slot name="between" :el$="el$"><component v-if="slots.between" :is="slots.between" type="between" /></slot></template>
    <template v-slot:description><slot name="description" :el$="el$"><component v-if="slots.description" :is="slots.description" /></slot></template>
    <template v-slot:error><slot name="error" :el$="el$"><component v-if="slots.error" :is="slots.error" /></slot></template>
    <template v-slot:message><slot name="message" :el$="el$"><component v-if="slots.message" :is="slots.message" /></slot></template>
    <template v-slot:after><slot name="after" :el$="el$"><component v-if="slots.after" :is="slots.after" type="after" /></slot></template>
    
  </component>
</template>

<script>
  import TrixElement from './../../../../components/elements/TrixElement'
  
  export default {
    name: 'TrixElement',
    mixins: [TrixElement],
    data() {
      return {
        defaultClasses: {
          container: 'lf-trix',
          trixDisabled: 'trix-disabled',
        }
      }
    }
  }
</script>