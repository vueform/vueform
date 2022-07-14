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
    list-style: none;
    padding: 0;
    margin: 0 0 var(--vf-gutter) 0;
    font-size: var(--vf-font-size);
    line-height: var(--vf-line-height);
    letter-spacing: var(--vf-letter-spacing);

    &.vf-tabs-sm {
      margin: 0 0 var(--vf-gutter) 0;
      font-size: var(--vf-font-size-sm);
      line-height: var(--vf-line-height-sm);
      letter-spacing: var(--vf-letter-spacing-sm);
    }

    &.vf-tabs-lg {
      margin: 0 0 var(--vf-gutter-lg) 0;
      font-size: var(--vf-font-size-lg);
      line-height: var(--vf-line-height-lg);
      letter-spacing: var(--vf-letter-spacing-lg);
    }
  }
</style>