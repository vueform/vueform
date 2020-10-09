<template>
  <div>
    <input :id="`trix-input-${id}`" :value="value" type="hidden">
    <trix-editor
      :value="value"
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
  import TrixWrapper from './../../../../components/wrappers/Trix'

  import Trix from 'trix'
  import 'trix/dist/trix.css'

  export default {
    mixins: [TrixWrapper],
    data() {
      return {
        defaultClasses: {

        }
      }
    } 
  }
</script>