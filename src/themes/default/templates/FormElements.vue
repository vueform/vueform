<script>
  import FormElements from './../../blank/templates/FormElements'

  export default {
    name: 'FormElements',
    render: FormElements.render,
    data() {
      return {
        defaultClasses: {
          container: 'vf-row',
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Laraform.vue
</style>