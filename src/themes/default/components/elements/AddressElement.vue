<script>
  import ObjectElement from './ObjectElement'

  export default {
    name: 'AddressElement',
    render: ObjectElement.render,
    data() {
      return {
        defaultClasses: {
          container: 'lf-address',
          childrenContainer: 'element-group',
        }
      }
    }
  }
</script>