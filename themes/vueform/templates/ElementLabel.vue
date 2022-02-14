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
    margin-bottom: 0;
    display: flex;
    align-items: center;
    padding-right: var(--vf-gutter);

    &.vf-label-sm {
      padding-right: var(--vf-gutter-sm);
    }

    &.vf-label-lg {
      padding-right: var(--vf-gutter-lg);
    }
  }
</style>