<script>
  import ElementLabelFloating from './../../blank/components/ElementLabelFloating'

  export default {
    name: 'ElementLabelFloating',
    render: ElementLabelFloating.render,
    data() {
      return {
        defaultClasses: {
          container: 'form-floating-wrapper',
          label: 'form-floating-label',
          label_invisible: '',
          label_visible: 'is-visible',
        }
      }
    }
  }
</script>

<style lang="scss">
  .form-floating-wrapper {
    position: relative;
  }

  .form-floating-label {
    position: absolute;
    z-index: 5;
    left: 0.625rem;
    top: -0.4375rem;
    font-size: 70%;
    background: #FFFFFF;
    padding: 0 1px;
    line-height: 0.9;
    transition: .3s;
    opacity: 0;
    visibility: hidden;
    white-space: nowrap;

    &.is-visible {
      opacity: 1;
      visibility: visible;
      top: -0.25rem;
    }
  }
</style>