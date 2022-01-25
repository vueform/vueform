<script>
  import ElementLabelFloating from './../../blank/templates/ElementLabelFloating.vue'

  export default {
    name: 'ElementLabelFloating',
    render: ElementLabelFloating.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-floating-wrapper',
          label: 'vf-floating-label',
          label_sm: '',
          label_md: '',
          label_lg: '',
          label_invisible: '',
          label_visible: 'is-visible',
          $label: (classes, { visible, Size }) => ([
            classes.label,
            classes[`label_${Size}`],
            visible ? classes.label_visible : classes.label_invisible
          ]),
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
    font-size: 70%;
    background: #FFFFFF;
    padding: 0 1px;
    line-height: 1px;
    transition: .3s;
    opacity: 0;
    visibility: hidden;
    white-space: nowrap;

    &.is-visible {
      opacity: 1;
      visibility: visible;
    }
  }
</style>