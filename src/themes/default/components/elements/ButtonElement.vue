<script>
  import ButtonElement from './../../../blank/components/elements/ButtonElement'

  export default {
    name: 'ButtonElement',
    render: ButtonElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          button: 'btn',
          button_enabled: '',
          button_disabled: 'btn-disabled',
          button_loading: 'btn-loading',
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

  .btn-loading {
    position: relative;
    color: transparent !important;

    &:after {
      content: "";
      display: inline-block;
      width: 14px;
      height: 14px;
      vertical-align: text-bottom;
      border: .25em solid;
      border-right: .25em solid transparent;
      border-radius: 50%;
      -webkit-animation: button-spinner .75s linear infinite;
      animation: button-spinner .75s linear infinite;
      font-size: 9px;
      position: absolute;
      left: calc(50% - 7px);
      top: calc(50% - 7px);
      color: initial;
      color: #ffffff;
    }
  }

  @keyframes button-spinner {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(1turn);
    }
  }
</style>