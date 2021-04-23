<template>
  <div :class="classes.preview" v-show="visible">
    <div :class="classes.info">
      <div :class="classes.filename">

        <!-- Image && filename  -->
        <a v-if="uploaded && hasLink" :href="link" target="_blank">
          <img :src="preview" :alt="filename" :title="filename" /> 
          <span v-if="hasError" :class="classes.iconWarning"></span>
          {{ filename }}
        </a>
        <span v-else>
          <img v-show="previewLoaded" :src="preview" :alt="filename" :title="filename" />
          <span v-show="!previewLoaded" :class="classes.previewLoader"></span>
          <span v-if="hasError" :class="classes.iconWarning"></span>
          {{ filename }}
        </span>

      </div>
      
      <div class="actions">

        <!-- Status -->
        <div  v-if="uploading" :class="classes.percent">{{ progress }}%</div>

        <!-- Upload button -->
        <a href="" :class="classes.upload" v-if="canUpload" @click.prevent="upload">{{ uploadText }}</a> 

        <!-- Success -->
        <span v-if="uploaded" :class="classes.iconUploaded"></span>

        <!-- Remove -->
        <a href="" :class="classes.remove" v-if="canRemove" @click.prevent="remove"><span :class="classes.iconRemove"></span></a>

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
          filename: '',
          actions: '',
          percent: '',
          upload: '',
          remove: '',
          progress: '',
          progressBar: '',
          iconWarning: '',
          iconUploaded: '',
          iconRemove: '',
          previewLoader: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>