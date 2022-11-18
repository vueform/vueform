<script>
  import FileElement from './../../../blank/templates/elements/FileElement.vue'

  export default {
    name: 'FileElement',
    render: FileElement.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-file vf-text-type',
          container_removing: 'vf-file-removing',
          button: 'vf-btn vf-btn-secondary',
          button_enabled: '',
          button_disabled: 'vf-btn-disabled',
          button_sm: 'vf-btn-sm',
          button_md: '',
          button_lg: 'vf-btn-lg',
          assertiveText: 'vf-assertive-text',
          $container: (classes, { removing }) => ([
            classes.container,
            removing ? classes.container_removing : null,
          ]),
          $button: (classes, { isDisabled, preparing, Size }) => ([
            classes.button,
            classes[`button_${Size}`],
            !isDisabled && !preparing ? classes.button_enabled : null,
            isDisabled || preparing ? classes.button_disabled : null,
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Vueform.vue
</style>