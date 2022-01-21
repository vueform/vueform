<script>
  import AddressElement from './../../../blank/templates/elements/AddressElement.vue'

  export default {
    name: 'AddressElement',
    render: AddressElement.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          childrenContainer: 'vf-row-group',
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Vueform.vue
</style>