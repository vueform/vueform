<script>
  import ElementLayout from './../../blank/components/ElementLayout'

  export default {
    name: 'ElementLayout',
    render: ElementLayout.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          container_error: 'has-error',
          outerWrapper: 'form-row',
          outerWrapper_single: 'form-group',
          outerWrapper_multiple: '',
          fieldWrapper: '',
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Laraform.vue
</style>