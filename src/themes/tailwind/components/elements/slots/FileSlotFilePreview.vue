<template>
  <div :class="classes.preview" v-show="visible">
    <div :class="classes.info">
      <div :class="classes.filename">

        <!-- Icon -->
        <span v-if="hasError" :class="classes.iconWarning"></span>
        <span v-else-if="uploaded" :class="classes.iconUploaded"></span>
        <span v-else :class="classes.iconFile"></span> 

        <!-- Filename -->
        <a :href="link" v-if="hasLink" :class="classes.filenameLink" target="_blank">{{ filename }}</a>
        <span v-else :class="classes.filenameStatic">{{ filename }}</span>

      </div>
      
      <div :class="classes.actions">

        <!-- Status -->
        <div  v-if="uploading" :class="classes.percent">{{ progress }}%</div>

        <!-- Remove -->
        <a href="" :class="classes.remove" v-if="canRemove" @click.prevent="remove"><span :class="classes.iconRemove"></span></a>

        <!-- Upload button -->
        <a href="" :class="classes.upload" v-if="canUpload" @click.prevent="upload">{{ uploadText }}</a>

      </div>
    </div>
    <div v-if="uploading" :class="classes.progress">
      <div :class="classes.progressBar" :style="{ width: progress + '%' }"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FileSlotFilePreview',
    data() {
      return {
        defaultClasses: {
          preview: '',
          info: '',
          filename: '',
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
          iconFile: '',
          iconRemove: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>