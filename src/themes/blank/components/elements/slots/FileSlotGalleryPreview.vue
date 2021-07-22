<template>
  <div :class="classes.container" v-show="visible">

    <!-- Image  -->
    <a v-if="uploaded && hasLink && clickable" :class="classes.image" :href="link" target="_blank"><img :src="preview" :class="classes.img" /></a>
    <div v-else :class="classes.image"><img :class="classes.img" :src="preview" /></div>

    <!-- Overlay -->
    <div v-if="!uploaded && !uploading" :class="classes.overlay">
      <a v-if="canUpload" @click.prevent="upload" href="" :class="classes.upload">{{ uploadText }}</a>
    </div>

    <!-- Error -->
    <span v-if="hasError" :class="classes.iconWarning"></span>

    <!-- Success -->
    <span v-else-if="uploaded" :class="classes.iconUploaded"></span>

    <!-- Remove -->
    <a v-if="canRemove" @click.prevent="remove" href="" :class="classes.remove"><span :class="classes.iconRemove"></span></a>

    <!-- Progress -->
    <div v-if="uploading" :class="classes.progressBar">
      <div :class="classes.progress" :style="{ width: progress + '%' }"></div>
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