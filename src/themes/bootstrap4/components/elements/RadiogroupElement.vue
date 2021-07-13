<script>
  import RadiogroupElement from './../../../blank/components/elements/RadiogroupElement'

  export default {
    name: 'RadiogroupElement',
    render: RadiogroupElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          radioGroup: 'radio-group',
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