<script>
  import ElementLabelFloating from './../../blank/components/ElementLabelFloating'

  export default {
    name: 'ElementLabelFloating',
    render: ElementLabelFloating.render,
    data() {
      return {
        defaultClasses: {
          container: 'floating-wrapper',
          label: 'floating-label',
          label_invisible: '',
          label_visible: 'is-visible',
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'node_modules/bootstrap/scss/_functions.scss';
  @import 'node_modules/bootstrap/scss/_variables.scss';
  @import 'node_modules/bootstrap/scss/_mixins.scss';

  /* Floating label styles */

  .floating-wrapper {
    position: relative;
  }

  .floating-label {
    position: absolute;
    z-index: 5;
    left: 10px;
    top: -7px;
    font-size: 70%;
    background: #fff;
    padding: 0 1px;
    line-height: 0.9;
    transition: .3s;
    opacity: 0;
    visibility: hidden;
    white-space: nowrap;

    &.is-visible {
      opacity: 1;
      visibility: visible;
      top: -4px;
    }
  }
</style>