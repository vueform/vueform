<template>
  <div
    :class="classes.container"
    v-show="visible"
    tabindex="0"
    role="button"
    v-bind="attrs"
    :aria-labelledby="ariaLabelledby"
    :aria-placeholder="ariaPlaceholder"
    :aria-role="ariaRoledescription"
    :aria-describedby="`${el$.fieldId}-file-description`"
    @keyup="handleKeyup"
  >
    <span :id="`${el$.fieldId}-file-description`" :class="classes.assistiveText" aria-hidden="">{{ form$.translations.vueform.a11y.file.description }}</span>

    <!-- Image  -->
    <a v-if="uploaded && hasLink && clickable" :class="classes.image" :href="link" target="_blank" rel="nofollow noopener">
      <img :src="preview" :class="classes.img" :alt="filename" :title="filename" aria-hidden="true"/>
    </a>
    <div v-else :class="classes.image">
      <img :class="classes.img" :src="preview" :alt="filename" :title="filename" aria-hidden="true"/>
    </div>

    <!-- Overlay -->
    <div v-if="!uploaded && !uploading" :class="classes.overlay">
      <div
        v-if="canUploadTemp"
        :class="classes.upload"
        @click.prevent="upload"
        @keypress.enter.space="upload"
        tabindex="-1"
        role="button"
      >{{ uploadText }}</div>
    </div>

    <!-- Error -->
    <span v-if="hasError" :class="classes.warning">
      <span :class="classes.warningIcon"></span>
    </span>

    <!-- Success -->
    <span v-else-if="el$.stage > 1" :class="classes.uploaded">
      <span :class="classes.uploadedIcon"></span>
    </span>

    <!-- Remove -->
    <div
      v-if="canRemove"
      :class="classes.remove"
      @click.prevent="remove"
      @keypress.enter.space="remove"
      aria-roledescription="❎"
      role="button"
      tabindex="0"
    >
      <span :class="classes.removeIcon"></span>
    </div>

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
          image: '',
          img: '',
          overlay: '',
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