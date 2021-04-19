<template>
  <div>
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
  import Trix from 'trix'
  import 'trix/dist/trix.css'

  export default {
    name: 'TrixWrapper',
    data() {
      return {
        defaultClasses: {}
      }
    } 
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

  trix-toolbar {
    min-height: 36px;
    background: #fff;
    border: 1px solid $input-border-color;
    margin: 0;
    padding: 8px 6px;
    border-radius: 0;
    border-bottom: 0;
    border-radius: $input-border-radius $input-border-radius 0 0;

    .trix-button-row {
      overflow-x: auto;
    }

    .trix-button-group {
      border: 0 !important;
      margin: 0 !important;

      button {
        border: 0 !important;

        &:not(.trix-active):hover {
          background-color: #f9f9f9;
        }
      }
    }

    .trix-button {
      border-radius: 4px;
      
      &.trix-active {
        background-color: rgba(red($primary), green($primary), blue($primary), .3)
      }
    }
  }

  trix-editor {
    padding: $input-btn-padding-y $input-btn-padding-x;
    font-size: $font-size-base;
    line-height: $line-height-base;
    color: $input-color;
    background-color: $input-bg;
    background-image: none; // Reset unusual Firefox-on-Android default style; see https://github.com/necolas/normalize.css/issues/214
    border: 1px solid $input-border-color;
    border-radius: 0 0 $input-border-radius $input-border-radius; // Note: This has no effect on <select>s in some browsers, due to the limited stylability of <select>s in CSS.
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;

    &:focus {
      @include form-control-focus
    }

    blockquote {
      font-size: $font-size-base;
      line-height: $line-height-base;
    }
  }
</style>