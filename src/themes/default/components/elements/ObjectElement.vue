<script>
  import ObjectElement from './../../../blank/components/elements/ObjectElement'

  export default {
    name: 'ObjectElement',
    render: ObjectElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          childrenContainer: 'form-row-group',
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Laraform.vue
</style>