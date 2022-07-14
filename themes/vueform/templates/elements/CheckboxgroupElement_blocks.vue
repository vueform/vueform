<script>
  import CheckboxgroupElement from './../../../blank/templates/elements/CheckboxgroupElement.vue'

  export default {
    name: 'CheckboxgroupElement_blocks',
    render: CheckboxgroupElement.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: 'vf-checkboxgroup-blocks-wrapper',
          wrapper_sm: 'vf-checkboxgroup-blocks-wrapper-sm',
          wrapper_md: '',
          wrapper_lg: 'vf-checkboxgroup-blocks-wrapper-lg',
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
  .vf-checkboxgroup-blocks-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-shadow: var(--vf-shadow-input);
    border-radius: var(--vf-radius-large);

    &.vf-checkboxgroup-blocks-wrapper-sm {
      border-radius: var(--vf-radius-large-sm);
    }

    &.vf-checkboxgroup-blocks-wrapper-lg {
      border-radius: var(--vf-radius-large-lg);
    }
  }
</style>