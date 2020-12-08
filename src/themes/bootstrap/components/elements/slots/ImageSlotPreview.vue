<template>
  <div :class="classes.preview">
    <a :href="link" v-if="uploaded" target="_blank"><img :src="preview" /> {{ filename }}</a>
    <span v-else><img :src="preview" /> {{ filename }}</span>
  </div>
</template>

<script>
  import ImageSlotPreview from './../../../../../components/elements/slots/ImageSlotPreview'

  export default {
    name: 'ImageSlotPreview',
    mixins: [ImageSlotPreview],
    data() {
      return {
        defaultClasses: {
          preview: 'preview'
        }
      }
    }
  }
</script>