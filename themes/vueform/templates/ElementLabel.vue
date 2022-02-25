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
    align-items: flex-start;
    padding-right: var(--vf-gutter);
    padding-bottom: calc(var(--vf-gutter) / 3);

    &.vf-label-sm {
      padding-right: var(--vf-gutter-sm);
      padding-bottom: calc(var(--vf-gutter-sm) / 3);
    }

    &.vf-label-lg {
      padding-right: var(--vf-gutter-lg);
      padding-bottom: calc(var(--vf-gutter-lg) / 3);
    }
  }

  .vf-form-horizontal {
    .vf-text-type {
      .vf-label {
        padding-top: calc(var(--vf-border-width-input-t) + var(--vf-py-input));
        padding-bottom: 0;

        &.vf-label-sm {
          padding-top: calc(var(--vf-border-width-input-t) + var(--vf-py-input-sm));
          padding-bottom: 0;
        }

        &.vf-label-lg {
          padding-top: calc(var(--vf-border-width-input-t) + var(--vf-py-input-lg));
          padding-bottom: 0;
        }
      }
    }
  }
</style>