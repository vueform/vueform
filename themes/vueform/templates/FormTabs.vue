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
          container_sm: '',
          container_md: '',
          container_lg: '',
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
    margin: 0 0 calc(var(--vf-gutter) * 1) 0;
  }
</style>