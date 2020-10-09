<template>
  <component :is="components.BaseElementLayout">
    <template slot="field">
      <slot name="prefix"></slot>

      <!-- Upload button -->
      <a
        v-if="canSelect"
        href=""
        :class="classes.selectButton"
        @click.prevent="handleClick"
      >{{ __('laraform.elements.file.uploadButton') }}</a>
      
      <!-- Invisible input field -->
      <input
        v-if="canSelect"
        v-show="false"
        type="file"
        @change="handleFileSelected"
        ref="input"
      />

      <!-- Preview -->
      <div class="preview">
        <a :href="link" v-if="link && clickable" target="_blank">{{ filename }}</a>
        <span v-else-if="filename">{{ filename }}</span>
      </div>

      <!-- Progress -->
      <slot name="progress" :el$="el$" :progress="progress">
        <component
          :is="slots.progress"
          :el$="el$"
          :progress="progress"
        />
      </slot>

      <!-- Upload temp button -->
      <a
        v-if="canUploadTemp"
        href=""
        :class="classes.uploadButton"
        @click.prevent="uploadTemp"
      >Upload</a>

      <!-- Remove button -->
      <a
        v-if="canRemove"
        href=""
        :class="classes.removeButton"
        @click.prevent="handleRemove"
      >Remove</a>

      <!-- Abort button -->
      <a
        v-if="uploading"
        href=""
        :class="classes.abortButton"
        @click.prevent="handleAbort"
      >Abort</a>
        
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
    name: 'FileElement',
    mixins: [FileElement],
    data() {
      return {
        defaultClasses: {
          selectButton: 'btn btn-light btn-select-file',
          uploadButton: 'btn btn-primary btn-upload-temp',
          removeButton: 'btn btn-light btn-remove-file',
          abortButton: 'btn btn-danger btn-abort-upload',
        }
      }
    }
  }
</script>