<template>
  <div :class="classes.preview">
    <a :href="link" v-if="link && clickable" target="_blank">{{ filename }}</a>
    <span v-else-if="filename">{{ filename }}</span>
  </div>
</template>

<script>
  import FileSlotPreview from './../../../../../components/elements/slots/FileSlotPreview'

  export default {
    name: 'FileSlotPreview',
    mixins: [FileSlotPreview],
    data() {
      return {
        defaultClasses: {
          preview: 'preview'
        }
      }
    }
  }
</script>