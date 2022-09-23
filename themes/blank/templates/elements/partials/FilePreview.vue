<template>
  <div
    :class="classes.container"
    v-show="visible"
    tabindex="0"
    role="button"
    :aria-labelledby="ariaLabelledby"
    :aria-placeholder="ariaPlaceholder"
    aria-roledescription="❎"
    @keyup="handleKeyup"
  >
    <div :class="classes.wrapper">
      <div :class="classes.file">
        <!-- Filename -->
        <a :href="link" v-if="hasLink && clickable" :class="classes.filenameLink" target="_blank">{{ filename }}</a>
        <span v-else :class="classes.filenameStatic">{{ filename }}</span>
      </div>
      
      <div :class="classes.actions">
        <!-- Remove -->
        <button :class="classes.remove" v-if="canRemove" @click.prevent="remove" aria-roledescription="❎">
          <span :class="classes.removeIcon"></span>
        </button>

        <!-- Progress -->
        <div v-if="uploading" :class="classes.percent">{{ progress }}%</div>

        <!-- Error -->
        <span v-if="hasError" :class="classes.warning">
          <span :class="classes.warningIcon"></span>
        </span>

        <!-- Upload button -->
        <button
          v-if="canUploadTemp"
          :class="classes.upload"
          @click.prevent="upload"
          :aria-placeholder="hasError ? 'error' : undefined"
        >{{ uploadText }}</button>


        <!-- Success -->
        <span v-else-if="el$.stage > 1" :class="classes.uploaded">
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
    name: 'FilePreview',
    data() {
      return {
        merge: true,
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