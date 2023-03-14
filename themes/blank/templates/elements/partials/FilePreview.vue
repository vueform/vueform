<template>
  <div
    :class="classes.container"
    v-show="visible"
    v-bind="attrs"
    tabindex="0"
    role="button"
    :aria-labelledby="ariaLabelledby"
    :aria-placeholder="ariaPlaceholder"
    :aria-describedby="`${el$.fieldId}-file-description`"
    @keyup="handleKeyup"
  >
    <span :id="`${el$.fieldId}-file-description`" :class="classes.assistiveText" aria-hidden="">{{ form$.translations.vueform.a11y.file.description }}</span>

    <div :class="classes.wrapper">
      <div :class="classes.file">
        <!-- Filename -->
        <a :href="link" v-if="hasLink && clickable" :class="classes.filenameLink" target="_blank" rel="nofollow noopener">{{ filename }}</a>
        <span v-else :class="classes.filenameStatic">{{ filename }}</span>
      </div>
      
      <div :class="classes.actions">
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
        <div v-if="uploading" :class="classes.percent">{{ progress }}%</div>

        <!-- Error -->
        <span v-if="hasError" :class="classes.warning">
          <span :class="classes.warningIcon"></span>
        </span>

        <!-- Upload button -->
        <div
          v-if="canUploadTemp"
          :class="classes.upload"
          @click.prevent="upload"
          tabindex="-1"
        >{{ uploadText }}</div>


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
          assistiveText: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>