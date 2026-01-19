<template>
  <div :class="classes.container">
    <input :id="`editor-input-${id}`" :value="value" type="hidden" />
    <trix-editor
      v-bind="options"
      @trix-change="handleChange"
      @trix-blur="handleBlur"
      @trix-file-accept="handleFileAccept"
      @trix-attachment-add="handleAttachmentAdd"
      ref="trix$"
    />
  </div>
</template>

<script>
  import Trix from 'trix';

  if (typeof Trix?.elements?.TrixEditorElement?.formAssociated !== 'undefined') {
    Trix.elements.TrixEditorElement.formAssociated = false
  }

  export default {
    name: 'EditorWrapper',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
        }
      }
    },
  }
</script>

<style lang="scss">
</style>