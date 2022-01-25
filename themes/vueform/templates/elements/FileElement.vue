<script>
  import FileElement from './../../../blank/templates/elements/FileElement.vue'

  export default {
    name: 'FileElement',
    render: FileElement.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          container_removing: 'is-removing',
          button: 'vf-btn vf-btn-light',
          button_enabled: '',
          button_disabled: 'is-disabled',
          button_sm: '',
          button_md: '',
          button_lg: '',
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