<template>
  <component :is="theme.components.BaseElementLayout">
    <template slot="field">
      <v-text-field
      />
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

<style lang="scss">
  label {
    color: var(--lf-brand-primary);
  }
</style>