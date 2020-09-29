<template>
  <component :is="theme.components.BaseElementLayout">
    <template slot="field">
      <slot name="prefix"></slot>

      <!-- Upload button -->
      <a
        v-if="!embed"
        href=""
        :class="classes.uploaderButton"
        @click.prevent="handleClick"
      >{{ __('laraform.elements.file.uploadButton') }}</a>
      
      <!-- Invisible input field -->
      <input
        v-if="!embed"
        v-show="false"
        type="file"
        :disabled="disabled"
        @change="handleFileChanged"
        ref="input"
      />

      <!-- Preview -->
      <div v-if="isImage" class="preview">
        <a :href="link" v-if="uploaded" target="_blank"><img :src="preview" /> {{ filename }}</a>
        <span v-else><img :src="preview" /> {{ filename }}</span>
        
      </div>
      <div v-else class="preview">
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