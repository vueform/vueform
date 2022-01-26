<script>
  import FormTabs from './../../blank/templates/FormTabs.vue'

  export default {
    name: 'FormTabs',
    render: FormTabs.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: 'vf-tabs',
          container_sm: 'vf-tabs-sm',
          container_md: '',
          container_lg: 'vf-tabs-lg',
          $container: (classes, { Size }) => ([
            classes.container,
            classes[`container_${Size}`],
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-tabs {
    display: flex;
    align-items: flex-end;
    border-bottom: 1px solid var(--vf-border-color);
    list-style: none;
    padding: 0;
    margin: 0 0 var(--vf-gutter) 0;

    &.vf-tabs-sm {
      margin: 0 0 var(--vf-gutter) 0;
      font-size: var(--vf-font-size-sm);
      line-height: var(--var-line-height-sm);
    }

    &.vf-tabs-lg {
      margin: 0 0 var(--vf-gutter-lg) 0;
      font-size: var(--vf-font-size-lg);
      line-height: var(--var-line-height-lg);
    }
  }
</style>