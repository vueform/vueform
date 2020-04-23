<template>
  <component :is="theme.components.BaseElementLayout"
    :el$="el$"
  >
    <template slot="field">

      <slot name="prefix"></slot>

      <component :is="theme.components.ElementLabelFloating"
        v-if="floating"
        :visible="!empty"
      >{{ floating }}</component>

      <textarea
        v-model="model"
        :name="name"
        :id="id"
        :class="theme.classes.textarea"
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
    mixins: [TextareaElement],
  }
</script>