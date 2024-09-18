<script>
  import MatrixElement from './../../../blank/templates/elements/MatrixElement.vue'

  export default {
    name: 'MatrixElement',
    render: MatrixElement.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-matrix',
        }
      }
    },
  }
</script>

<style lang="scss">
  /* Some styles are contained in Vueform.vue */
</style>