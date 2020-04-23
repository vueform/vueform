<template>
  <!-- Custom preview -->
  <div
    v-if="preview && file"
  >
    <component :is="preview" :el$="el$" :remove="handleRemove" />
  </div>

  <!-- Default preview -->
  <div
    v-else-if="file"
    :class="[theme.classes.uploaderPreview, theme.classes.uploaderPreviewFile, theme.classes.uploaderPreviewFileViewPrefix + view]"
  >
    <span :class="theme.classes.uploaderIconClip"></span>

    <template v-if="displayLink">
      <a :href="link" target="_blank">{{ filename }}</a>
    </template>

    <template v-else>
      {{ filename }}
    </template>

    <slot name="remove">
      <a href=""
        v-if="!disabled"
        a="a"
        :class="theme.classes.uploaderIconRemove"
        @click.prevent="handleRemove"
      ></a>
    </slot>
  </div>
  <span v-else></span>
</template>

<script>
  export default {
    inject: ['form$', 'theme'],
    props: {
      el$: {
        type: Object,
        required: true
      },
    },
    computed: {
      displayLink() {
        return this.el$.clickable && this.file.link
      },
      file() {
        return this.el$.file
      },
      link() {
        return this.file.link
      },
      filename() {
        return this.file.displayName
      },
      view() {
        return this.el$.view
      },
      disabled() {
        return this.el$.disabled
      },
      preview() {
        return this.el$.slots.preview
      },
    },
    methods: {
      handleRemove() {
        this.$emit('remove')
      }
    }
  }
</script>