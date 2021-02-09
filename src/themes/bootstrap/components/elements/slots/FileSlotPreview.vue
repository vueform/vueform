<template>
  <div :class="classes.preview">
    <a :href="link" v-if="link && clickable" target="_blank">{{ filename }}</a>
    <span v-else-if="filename">{{ filename }}</span>
  </div>
</template>

<script>
  export default {
    name: 'FileSlotPreview',
    data() {
      return {
        defaultClasses: {
          preview: 'preview'
        }
      }
    }
  }
</script>