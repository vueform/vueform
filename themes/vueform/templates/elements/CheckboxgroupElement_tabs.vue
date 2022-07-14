<script>
  import CheckboxgroupElement from './../../../blank/templates/elements/CheckboxgroupElement.vue'

  export default {
    name: 'CheckboxgroupElement_tabs',
    render: CheckboxgroupElement.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: 'vf-checkboxgroup-tabs-wrapper',
          wrapper_sm: 'vf-checkboxgroup-tabs-wrapper-sm',
          wrapper_md: '',
          wrapper_lg: 'vf-checkboxgroup-tabs-wrapper-lg',
          $wrapper: (classes, { Size }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`]
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-checkboxgroup-tabs-wrapper {
    display: grid;
    grid-auto-flow: column;
    box-shadow: var(--vf-shadow-input);
    border-radius: var(--vf-radius-large);

    &.vf-checkboxgroup-tabs-wrapper-sm {
      border-radius: var(--vf-radius-large-sm);
    }

    &.vf-checkboxgroup-tabs-wrapper-lg {
      border-radius: var(--vf-radius-large-lg);
    }
  }
</style>