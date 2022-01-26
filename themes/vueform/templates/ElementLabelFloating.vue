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
          label_sm: 'vf-floating-label-sm',
          label_md: '',
          label_lg: 'vf-floating-label-lg',
          label_invisible: '',
          label_visible: 'vf-floating-label-visible',
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
    left: var(--vf-input-px);
    font-size: 70%;
    background: #FFFFFF;
    padding: 0 1px;
    line-height: 1px;
    transition: .3s;
    opacity: 0;
    visibility: hidden;
    white-space: nowrap;

    &.vf-floating-label-visible {
      opacity: 1;
      visibility: visible;
    }

    &.vf-floating-label-sm {
      left: var(--vf-input-px-sm);
    }

    &.vf-floating-label-lg {
      left: var(--vf-input-px-lg);
      top: 0.625rem;
    }
  }
</style>