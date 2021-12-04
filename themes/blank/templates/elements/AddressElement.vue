<script>
import ObjectElement from './ObjectElement.vue'

  export default {
    name: 'AddressElement',
    render: ObjectElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          childrenContainer: '',
        }
      }
    }
  }
</script>

<style lang="scss">
</style>