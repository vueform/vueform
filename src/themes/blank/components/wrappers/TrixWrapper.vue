<template>
  <div :class="classes.container">
    <input :id="`trix-input-${id}`" :value="value" type="hidden">
    
    <trix-editor
      :placeholder="placeholder"
      :disabled="disabled"
      :id="id"
      :input="`trix-input-${id}`"
      @trix-change="handleChange"
      @trix-file-accept="handleFileAccept"
      @trix-attachment-add="handleAttachmentAdd"
      ref="trix$"
    ></trix-editor>
  </div>
</template>

<script>
  // import Trix from 'trix'

  export default {
    name: 'TrixWrapper',
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