<script>
  import FormSteps from './../../blank/components/FormSteps'

  export default {
    name: 'FormSteps',
    render: FormSteps.render,
    data() {
      return {
        defaultClasses: {
          container: 'form-steps',
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

  .form-steps {
    list-style: none;
    margin-bottom: calc(#{$spacer} * 2);
    padding: 0;
    display: flex;
    justify-content: space-between;
    overflow-x: auto;
    padding-top: 20px;
  }
</style>