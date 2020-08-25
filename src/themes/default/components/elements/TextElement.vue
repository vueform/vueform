<template>
  <component :is="components.BaseElementLayout">
    <template slot="field">

      <slot name="prefix"></slot>

      <div>
        <input
          v-model="model"
          :class="classes.input"
          :disabled="disabled"
          :id="id"
          @keyup="handleKeyup"
        />
      </div>

      <slot name="suffix"></slot>
      
    </template>
    
    <slot slot="label" name="label" :el$="el$"></slot>
    <slot slot="info" name="info" :el$="el$"></slot>
    <slot slot="before" name="before" :el$="el$"></slot>
    <slot slot="between" name="between" :el$="el$"></slot>
    <slot slot="error" name="error" :el$="el$"></slot>
    <slot slot="after" name="after" :el$="el$"></slot>
  </component>
</template>

<script>
  import TextElement from './../../../../components/elements/TextElement'

  export default {
    mixins: [TextElement],
    data() {
      return {
        defaultClasses: {
          input: 'form-control'
        }
      }
    }
  }
</script>