<template>
  <component :is="components.BaseElementLayout">
    <template slot="field">

      <slot name="prefix"></slot>

      <component :is="components.ElementLabelFloating"
        v-if="floating"
        :visible="!empty"
      >{{ floating }}</component>

      <textarea
        v-$model="model"
        :value="model"
        :name="name"
        :id="id"
        :class="classes.textarea"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :rows="rows"
        @keyup="handleKeyup"
        ref="textarea"
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
  import TextareaElement from './../../../../components/elements/TextareaElement'

  export default {
    name: 'TextareaElement',
    mixins: [TextareaElement],
    data() {
      return {
        defaultClasses: {
          textarea: 'form-control',
        }
      }
    }
  }
</script>