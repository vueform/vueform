<script>
  import TTrixElement from './../../../blank/components/elements/TTrixElement'

  export default {
    name: 'TTrixElement',
    render: TTrixElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          input: 'trix',
          input_enabled: '',
          input_disabled: 'is-disabled',
          input_focused: 'is-focused',
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

</style>