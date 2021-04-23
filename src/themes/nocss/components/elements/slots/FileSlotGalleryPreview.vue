<template>
  <div :class="classes.preview" v-show="visible">

    <!-- Image  -->
    <a
      v-if="uploaded && hasLink"
      :class="classes.previewContainer"
      :href="link"
      target="_blank"
    >
      <img :src="preview" :alt="filename" :title="filename" /> 
    </a>

    <div
      v-else
      :class="classes.previewContainer"
    >
      <img v-show="previewLoaded" :src="preview" :alt="filename" :title="filename" />
      <span v-show="!previewLoaded" :class="classes.previewLoader"></span>
    </div>

    <!-- Overlay -->
    <div v-if="!uploaded && !uploading" class="overlay">
      <a v-if="canUpload" @click.prevent="upload" href="" class="upload">Upload</a>
    </div>

    <!-- Error -->
    <span v-if="hasError" :class="classes.iconWarning"></span>

    <!-- Remove -->
    <a v-if="canRemove" @click.prevent="remove" href="" class="remove"><span class="icon-remove"></span></a>

    <!-- Progress -->
    <div v-if="uploading" :class="classes.progress">
      <div :class="classes.progressBar" :style="{ width: progress + '%' }"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FileSlotGalleryPreview',
    data() {
      return {
        defaultClasses: {
          preview: '',
          previewContainer: '',
          info: '',
          actions: '',
          percent: '',
          upload: '',
          remove: '',
          progress: '',
          progressBar: '',
          iconWarning: '',
          iconUploaded: '',
          iconRemove: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>