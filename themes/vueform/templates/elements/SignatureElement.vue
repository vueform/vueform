<script>
  import SignatureElement from './../../../blank/templates/elements/SignatureElement.vue'

  export default {
    name: 'SignatureElement',
    render: SignatureElement.render,
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
  /* Some styles are contained in Vueform.vue */
</style>