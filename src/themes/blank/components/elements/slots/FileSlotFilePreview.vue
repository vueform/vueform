<template>
  <div :class="classes.container" v-show="visible">
    <div :class="classes.wrapper">
      <div :class="classes.file">

        <!-- Filename -->
        <a :href="link" v-if="hasLink && clickable" :class="classes.filenameLink" target="_blank">{{ filename }}</a>
        <span v-else :class="classes.filenameStatic">{{ filename }}</span>

      </div>
      
      <div :class="classes.actions">

        <!-- Remove -->
        <a href="" :class="classes.remove" v-if="canRemove" @click.prevent="remove">
          <span :class="classes.removeIcon"></span>
        </a>

        <!-- Progress -->
        <div  v-if="uploading" :class="classes.percent">{{ progress }}%</div>

        <!-- Error -->
        <span v-if="hasError" :class="classes.warning">
          <span :class="classes.warningIcon"></span>
        </span>

        <!-- Upload button -->
        <a href="" :class="classes.upload" v-if="canUpload" @click.prevent="upload">{{ uploadText }}</a>

        <!-- Success -->
        <span v-else-if="uploaded" :class="classes.uploaded">
          <span :class="classes.uploadedIcon"></span>
        </span>

      </div>
    </div>
    <div v-if="uploading" :class="classes.progressBar">
      <div :class="classes.progress" :style="{ width: progress + '%' }"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FileSlotFilePreview',
    data() {
      return {
        defaultClasses: {
          container: '',
          wrapper: '',
          file: '',
          filenameLink: '',
          filenameStatic: '',
          actions: '',
          percent: '',
          upload: '',
          progressBar: '',
          progress: '',
          warning: '',
          warningIcon: '',
          uploaded: '',
          uploadedIcon: '',
          remove: '',
          removeIcon: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>