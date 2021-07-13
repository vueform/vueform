<script>
  import Laraform from './../../blank/components/Laraform'

  export default {
    name: 'Laraform',
    render: Laraform.render,
    data() {
      return {
        defaultClasses: {
          form: '',
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

  .btn.btn-disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;

    &:not(:disabled):not(.disabled) {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

</style>