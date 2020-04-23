<template>
  <component :is="theme.components.BaseElementLayout"
    v-if="!embed"
    :el$="el$"
  >
    <template slot="field">
      <slot name="prefix"></slot>

      <!-- Upload button -->
      <a
        v-if="uploader == 'button' && displayUploader"
        href=""
        :class="theme.classes.uploaderButton"
        @click.prevent="handleClick"
      >{{ __('elements.image.uploadButton') }}</a>

      <!-- Drag n drop area -->
      <component :is="theme.components.DragAndDrop"
        v-if="uploader == 'drop' && displayUploader"
        :class="theme.classes.uploaderDragndrop"
        :draggingClass="theme.classes.uploaderDragndropOver"
        :title="__('elements.image.dndTitle')"
        :description="__('elements.image.dndDescription')"
        @click="handleClick"
        @drop="handleFileDropped"
      />
      
      <!-- Actual input field -->
      <input
        type="file"
        :disabled="disabled"
        @change="handleFileSelected"
        ref="input"
      />

      <!-- Image preview -->
      <component :is="theme.components.ImagePreview"
        v-if="!disabled && file"
        :el$="el$"
        @click="handleImageClick"
        @remove="handleRemove"
      >
        <slot slot="remove" name="remove"></slot>
      </component>

      <Lightbox
        :images="images"
        ref="lightbox$"
      />

      <slot name="suffix"></slot>
    </template>

    <slot slot="label" name="label" :el$="el$"></slot>
    <slot slot="before" name="before" :el$="el$"></slot>
    <slot slot="between" name="between" :el$="el$"></slot>
    <slot slot="error" name="error" :el$="el$"></slot>
    <slot slot="after" name="after" :el$="el$"></slot>
  </component>

  <!-- Standalone file preview -->
  <component :is="theme.components.ImagePreview"
    v-else
    :el$="el$"
    @click="forwardImageClick"
    @remove="handleRemove"
  >
    <slot slot="remove" name="remove"></slot>
  </component>

</template>

<script>
  import ImageElement from './../../../../components/elements/ImageElement'

  import Lightbox from './../../../../components/wrappers/Lightbox'

  export default {
    mixins: [ImageElement],
    components: {
      Lightbox,
    },
  }
</script>