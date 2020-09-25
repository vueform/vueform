<template>
  <component :is="theme.components.BaseElementLayout">
    <template slot="field">
      <slot name="prefix"></slot>

      <!-- Upload button -->
      <a
        href=""
        :class="classes.uploaderButton"
        @click.prevent="handleClick"
      >{{ __('laraform.elements.file.uploadButton') }}</a>
      
      <!-- Invisible input field -->
      <input
        v-show="false"
        type="file"
        :disabled="disabled"
        @change="handleFileChanged"
        ref="input"
      />

      <!-- Preview -->
      <div class="preview">
        <a :href="link" v-if="uploaded" target="_blank">{{ filename }}</a>
        <span v-else-if="filename">{{ filename }}</span>
      </div>

      <!-- Progress -->
      <span v-if="progress">{{ progress }}%</span>

      <!-- Upload temp button -->
      <a v-if="stage === 1 && !auto && !uploading" @click.prevent="uploadTemp" href="" class="btn btn-primary">Upload</a>

      <!-- Remove button -->
      <a v-if="canRemove" href="" @click.prevent="handleRemove">Remove</a>

      <!-- Abort button -->
      <a v-if="uploading" href="" @click.prevent="handleCancel">Abort</a>
        
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
  import FileElement from './../../../../components/elements/FileElement'

  export default {
    mixins: [FileElement],
    data() {
      return {
        defaultClasses: {
          uploaderButton: 'btn btn-light uploader-button',
        }
      }
    }
  }
</script>