<script>
  import ButtonElement from './../../../blank/templates/elements/ButtonElement'

  export default {
    name: 'ButtonElement',
    render: ButtonElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          button: 'vf-btn',
          button_enabled: '',
          button_disabled: 'is-disabled',
          button_loading: 'is-loading',
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Vueform.vue
</style>