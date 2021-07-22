<template>
  <div :class="classes.container" v-show="visible">
    <div :class="classes.wrapper">

      <!-- Image -->
      <a :href="link" v-if="hasLink" :class="classes.image" target="_blank"><img :class="classes.img" :src="preview" /></a>
      <span v-else :class="classes.image"><img :class="classes.img" :src="preview" /></span>

      <div :class="classes.file">

        <!-- Filename -->
        <a :href="link" v-if="hasLink" :class="classes.filenameLink" target="_blank">{{ filename }}</a>
        <span v-else :class="classes.filenameStatic">{{ filename }}</span>

      </div>
      
      <div :class="classes.actions">

        <!-- Remove -->
        <a href="" :class="classes.remove" v-if="canRemove" @click.prevent="remove"><span :class="classes.iconRemove"></span></a>

        <!-- Progress -->
        <div  v-if="uploading" :class="classes.percent">{{ progress }}%</div>

        <!-- Error -->
        <span v-if="hasError" :class="classes.iconWarning"></span>

        <!-- Upload button -->
        <a href="" :class="classes.upload" v-if="canUpload" @click.prevent="upload">{{ uploadText }}</a>

        <!-- Success -->
        <span v-else-if="uploaded" :class="classes.iconUploaded"></span>

      </div>
    </div>
    <div v-if="uploading" :class="classes.progressBar">
      <div :class="classes.progress" :style="{ width: progress + '%' }"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FileSlotImagePreview',
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
          remove: '',
          progressBar: '',
          progress: '',
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