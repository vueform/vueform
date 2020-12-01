<template>
  <div
    :class="classes.container"
    @click.prevent="handleClick"
    ref="area"
  >
    <span :class="classes.icon"></span>
    <span v-if="title" :class="classes.title">{{ title }}</span>
    <span v-if="description" :class="classes.description">{{ description }}</span>
  </div>
</template>

<script>
  import DragAndDrop from './../../../components/DragAndDrop'

  export default {
    name: 'DragAndDrop',
    mixins: [DragAndDrop],
    data() {
      return {
        defaultClasses: {
          container: 'uploader-dragndrop',
          icon: 'dragndrop-icon',
          title: 'dragndrop-title',
          description: 'dragndrop-description',
          active: 'uploader-dragndrop-active',
        }
      }
    }
  }
</script>