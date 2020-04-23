<template>
  <div
      :class="{[this.draggingClass]: this.dragging}"
      @click.prevent="handleClick"
      ref="dragndrop"
    >
      <span v-if="icon" :class="theme.classes.uploaderDragndropIcon"></span>
      <span v-if="title" :class="theme.classes.uploaderDragndropTitle">{{ title }}</span>
      <span v-if="description" :class="theme.classes.uploaderDragndropDescription">{{ description }}</span>
    </div>
</template>

<script>
  export default {
    inject: ['theme'],
    props: {
      draggingClass: [String, Object, Array],
      title: String,
      description: String,
      icon: {
        type: Boolean,
        default: true
      },
    },
    data() {
      return {
        dragging: false,
      }
    },
    methods: {
      handleClick() {
        this.$emit('click')
      }
    },
    mounted() {
      // cancelling all default events
      _.each(['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'], (event) => {
        this.$refs.dragndrop.addEventListener(event, (e) => {
          e.preventDefault();
          e.stopPropagation();
        })
      })

      // listening for the actual drop event
      this.$refs.dragndrop.addEventListener('drop', (e) => {
        this.$emit('drop', e)
        this.dragging = false
      })

      this.$refs.dragndrop.addEventListener('dragover', (e) => {
        if (this.dragging !== true) {
          this.dragging = true
        }
      })

      this.$refs.dragndrop.addEventListener('dragleave', (e) => {
        this.dragging = false
      })

      this.$refs.dragndrop.addEventListener('dragend', (e) => {
        this.dragging = false
      })
    },
  }
</script>