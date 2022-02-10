<script>
  import ElementLabel from './../../blank/templates/ElementLabel.vue'

  export default {
    name: 'ElementLabel',
    render: ElementLabel.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-label',
          container_sm: 'vf-label-sm',
          container_md: '',
          container_lg: 'vf-label-lg',
          $container: (classes, { el$, Size }) => ([
            classes.container,
            classes[`container_${Size}`],
            !el$.inline ? el$.columnsClasses.label : null,
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-label {
    padding-top: calc(var(--vf-py-input) + var(--vf-border-width-input-t));
    padding-bottom: calc(var(--vf-py-input) + var(--vf-border-width-input-b));
    margin-bottom: 0;

    &.vf-label-sm {
      padding-top: calc(var(--vf-py-input-sm) + var(--vf-border-width-input-t));
      padding-bottom: calc(var(--vf-py-input-sm) + var(--vf-border-width-input-b));
    }

    &.vf-label-lg {
      padding-top: calc(var(--vf-py-input-lg) + var(--vf-border-width-input-t));
      padding-bottom: calc(var(--vf-py-input-lg) + var(--vf-border-width-input-b));
    }
  }
</style>