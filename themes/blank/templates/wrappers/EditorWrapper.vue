<template>
  <div :class="classes.container">
    <input :id="`editor-input-${id}`" :value="value" type="hidden">
    <trix-editor
      :placeholder="placeholder"
      :disabled="disabled"
      :id="id"
      :input="`editor-input-${id}`"
      @trix-change="handleChange"
      @trix-file-accept="handleFileAccept"
      @trix-attachment-add="handleAttachmentAdd"
      ref="editor$"
    ></trix-editor>
  </div>
</template>

<script>
  import 'trix'

  export default {
    name: 'EditorWrapper',
    data() {
      return {
        defaultClasses: {
          container: '',
        }
      }
    },
  }
</script>

<style lang="scss">
</style>