<script>
  import FileElement from './../../../blank/components/elements/FileElement'

  export default {
    name: 'FileElement',
    render: FileElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          container_removing: 'is-removing',
          button: 'vf-btn vf-btn-light',
          button_enabled: '',
          button_disabled: 'is-disabled',
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Laraform.vue
</style>