<template>
  <component :is="theme.components.BaseElementLayout">
    <template slot="field">
      <div>
        <input :class="theme.classes.elements.text.input" /> <a href="" @click.prevent="remove">Remove</a>
      </div>
    </template>

    <slot name="label" slot="label" :el$="el$"></slot>
  </component>
</template>

<script>
  import TextElement from './../../../../components/elements/TextElement'

  export default {
    mixins: [TextElement],
  }
</script>