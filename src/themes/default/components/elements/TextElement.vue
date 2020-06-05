<template>
  <component :is="components.BaseElementLayout">
    <template slot="field">

      <slot name="prefix"></slot>

      <div>
        <input
          v-model="model"
          :class="classes.input"
          @keyup="handleKeyup"
        />
      </div>

      <slot name="suffix"></slot>
      
    </template>

    <slot name="label" slot="label" :el$="el$"></slot>
    <slot slot="error" name="error" :el$="el$"></slot>
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