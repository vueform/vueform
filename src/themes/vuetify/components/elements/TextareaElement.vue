<template>
  <component :is="theme.components.BaseElementLayout">
    <template slot="field">
      <textarea />
    </template>
  </component>
</template>

<script>
  import TextareaElement from './../../../../components/elements/TextareaElement'

  export default {
    mixins: [TextareaElement],
  }
</script>