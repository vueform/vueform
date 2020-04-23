<template>
  <!-- Custom preview -->
  <div
    v-if="preview && file"
  >
    <component
      :is="preview"
      :el$="el$"
      :remove="handleRemove"
      :preview="handleImageClick"/>
  </div>

  <!-- Default preview -->
  <div
    v-else-if="file"
    :class="[theme.classes.uploaderPreview, theme.classes.uploaderPreviewImage, theme.classes.uploaderPreviewImageViewPrefix + view]"
  >
    <template v-if="displayLink">
      <a 
        href=""
        :class="theme.classes.uploaderPreviewImagePicture"
        :style="{ backgroundImage: `url('${file.preview || ''}')` }"
        @click.prevent="handleImageClick()"
      ></a>

      <a
        :class="theme.classes.uploaderPreviewImageFilename"
        target="_blank"
        :href="link"
      >{{ filename }}</a>
    </template>

    <template v-else>
      <a
        href=""
        :class="theme.classes.uploaderPreviewImagePicture"
        :style="{ backgroundImage: `url('${file.preview || ''}')` }"
        @click.prevent="handleImageClick"
      ></a>

      <span class="filename">{{ filename }}</span>
    </template>

    <slot name="remove">
      <a href=""
        v-if="!disabled"
        :class="theme.classes.uploaderIconRemove"
        @click.prevent="handleRemove"
      ></a>
    </slot>
  </div>
  <span v-else></span>

</template>

<script>
  import FilePreview from './FilePreview'

  export default {
    mixins: [FilePreview],
    methods: {
      handleImageClick() {
        this.$emit('click')
      }
    }
  }
</script>