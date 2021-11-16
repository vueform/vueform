<script>
  import FormTabs from './../../blank/templates/FormTabs.vue'

  export default {
    name: 'FormTabs',
    render: FormTabs.render,
    data() {
      return {
        defaultClasses: {
          container: 'vf-tabs',
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