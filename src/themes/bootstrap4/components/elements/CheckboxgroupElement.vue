<script>
  import CheckboxgroupElement from './../../../blank/components/elements/CheckboxgroupElement'

  export default {
    name: 'CheckboxgroupElement',
    render: CheckboxgroupElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          checkboxGroup: 'checkbox-group',
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