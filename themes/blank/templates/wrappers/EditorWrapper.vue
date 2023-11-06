<template>
  <div :class="classes.container">
    <input :id="`editor-input-${id}`" :value="value" type="hidden" />
    <component :is="editorComponent" />
  </div>
</template>

<script>
  import 'trix'

  export default {
    name: 'EditorWrapper',
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
        }
      }
    },
  }
</script>

<style lang="scss">
</style>