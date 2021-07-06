<template>
  <div :class="classes.container" v-show="visible">

    <!-- Image  -->
    <a
      v-if="uploaded && hasLink"
      :class="classes.previewWrapper"
      :href="link"
      target="_blank"
    >
      <img :src="preview" :class="classes.previewImage" /> 
    </a>

    <div
      v-else
      :class="classes.previewWrapper"
    >
      <img v-show="previewLoaded" :class="classes.previewImage" :src="preview" />
    </div>

    <!-- Overlay -->
    <div v-if="!uploaded && !uploading" :class="classes.overlay">
      <a v-if="canUpload" @click.prevent="upload" href="" :class="classes.upload">{{ uploadText }}</a>
    </div>

    <!-- Error -->
    <span v-if="hasError" :class="classes.iconWarning"></span>

    <!-- Remove -->
    <a v-if="canRemove" @click.prevent="remove" href="" :class="classes.remove"><span :class="classes.iconRemove"></span></a>

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
          container: '',
          previewWrapper: '',
          previewImage: '',
          overlay: '',
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