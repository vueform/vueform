<script>
  import ElementLabelFloating from './../../blank/templates/ElementLabelFloating.vue'

  export default {
    name: 'ElementLabelFloating',
    render: ElementLabelFloating.render,
    data() {
      return {
        defaultClasses: {
          container: 'vf-floating-wrapper',
          label: 'vf-floating-label',
          label_invisible: '',
          label_visible: 'is-visible',
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-floating-wrapper {
    position: relative;
  }

  .vf-floating-label {
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