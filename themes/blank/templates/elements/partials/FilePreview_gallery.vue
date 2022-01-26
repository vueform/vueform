<template>
  <div :class="classes.container" v-show="visible">
    <!-- Image  -->
    <a v-if="uploaded && hasLink && clickable" :class="classes.image" :href="link" target="_blank">
      <img :src="preview" :class="classes.img"/>
    </a>
    <div v-else :class="classes.image">
      <img :class="classes.img" :src="preview"/>
    </div>

    <!-- Overlay -->
    <div v-if="!uploaded && !uploading" :class="classes.overlay">
      <a v-if="canUploadTemp" @click.prevent="upload" href="" :class="classes.upload">{{ uploadText }}</a>
    </div>

    <!-- Error -->
    <span v-if="hasError" :class="classes.warning">
      <span :class="classes.warningIcon"></span>
    </span>

    <!-- Success -->
    <span v-else-if="uploaded" :class="classes.uploaded">
      <span :class="classes.uploadedIcon"></span>
    </span>

    <!-- Remove -->
    <a v-if="canRemove" @click.prevent="remove" href="" :class="classes.remove">
      <span :class="classes.removeIcon"></span>
    </a>

    <!-- Progress -->
    <div v-if="uploading" :class="classes.progressBar">
      <div :class="classes.progress" :style="{ width: progress + '%' }"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FilePreview_gallery',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          container_sm: '',
          container_md: '',
          container_lg: '',
          image: '',
          image_sm: '',
          image_md: '',
          image_lg: '',
          image_link: '',
          image_static: '',
          img: '',
          img_sm: '',
          img_md: '',
          img_lg: '',
          overlay: '',
          overlay_sm: '',
          overlay_md: '',
          overlay_lg: '',
          upload: '',
          progressBar: '',
          progress: '',
          warning: '',
          warningIcon: '',
          uploaded: '',
          uploadedIcon: '',
          remove: '',
          removeIcon: '',
          $container: (classes, { Size }) => ([
            classes.container,
            classes[`container_${Size}`],
          ]),
          $image: (classes, { Size }) => ([
            classes.image,
            classes[`image_${Size}`],
          ]),
          $img: (classes, { Size }) => ([
            classes.img,
            classes[`img_${Size}`],
          ]),
          $overlay: (classes, { Size }) => ([
            classes.overlay,
            classes[`overlay_${Size}`],
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
</style>