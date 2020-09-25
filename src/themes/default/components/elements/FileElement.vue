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

      <div v-if="isImage" class="preview">
        <a :href="link" v-if="uploaded" target="_blank"><img :src="preview" /> {{ filename }}</a>
        <span v-else><img :src="preview" /> {{ filename }}</span>
        
      </div>
      <div v-else class="preview">
        <a :href="link" v-if="uploaded" target="_blank">{{ filename }}</a>
        <span v-else-if="filename">{{ filename }}</span>
      </div>

      <span v-if="progress">{{ progress }}%</span>

      <a v-if="stage === 1 && !auto" @click.prevent="uploadTemp" href="" class="btn btn-primary">Upload</a>

      <a v-if="canRemove" href="" @click.prevent="handleRemove">Remove</a>
        
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