<template>
  <div :class="classes.preview" v-show="visible">
    <div :class="classes.info">
      <div :class="classes.previewContainer">

        <!-- Image && filename  -->
        <a v-if="uploaded && hasLink" :href="link" :class="classes.previewLinkWrapper" target="_blank">
          <img :src="preview" :class="classes.previewImage" /> 
          <span v-if="hasError" :class="classes.iconWarning"></span>
          <span :class="classes.filenameLink">{{ filename }}</span>
        </a>
        <span v-else :class="classes.previewStaticWrapper">
          <img v-show="previewLoaded" :src="preview" :class="classes.previewImage" />
          <span v-if="hasError" :class="classes.iconWarning"></span>
          <span :class="classes.filenameStatic">{{ filename }}</span>
        </span>

      </div>
      
      <div :class="classes.actions">

        <!-- Status -->
        <div  v-if="uploading" :class="classes.percent">{{ progress }}%</div>

        <!-- Remove -->
        <a href="" :class="classes.remove" v-if="canRemove" @click.prevent="remove"><span :class="classes.iconRemove"></span></a>

        <!-- Upload button -->
        <a href="" :class="classes.upload" v-if="canUpload" @click.prevent="upload">{{ uploadText }}</a> 

        <!-- Success -->
        <span v-if="uploaded" :class="classes.iconUploaded"></span>

      </div>
    </div>
    <div v-if="uploading" :class="classes.progress">
      <div :class="classes.progressBar" :style="{ width: progress + '%' }"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FileSlotImagePreview',
    data() {
      return {
        defaultClasses: {
          preview: '',
          info: '',
          previewContainer: '',
          previewImage: '',
          previewLinkWrapper: '',
          previewStaticWrapper: '',
          filenameLink: '',
          filenameStatic: '',
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