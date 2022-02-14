<script>
  import ObjectElement from './../../../blank/templates/elements/ObjectElement.vue'

  export default {
    name: 'ObjectElement',
    render: ObjectElement.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: 'vf-row',
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Vueform.vue
</style>