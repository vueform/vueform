<template>
  <component :is="components.BaseElementLayout">
    <template slot="field">
      <slot name="prefix"></slot>

      <component
        :is="components.Trix"
        v-model="model"
        :placeholder="placeholder"
        :id="id"
        :accept="accept"
        :accept-mimes="acceptMimes"
        :endpoint="endpoint"
        :disabled="disabled"
        :class="{[classes.trixDisabled]: disabled}"
        @change="handleChange"
        @alert="handleError"
        ref="trix$"
      />

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
  import TrixElement from './../../../../components/elements/TrixElement'
  
  export default {
    name: 'TrixElement',
    mixins: [TrixElement],
    data() {
      return {
        defaultClasses: {
          trixDisabled: 'trix-disabled',
        }
      }
    }
  }
</script>