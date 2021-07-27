<script>
  import AddressElement from './../../../blank/components/elements/AddressElement'

  export default {
    name: 'AddressElement',
    render: AddressElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          childrenContainer: 'vf-row-group',
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Laraform.vue
</style>