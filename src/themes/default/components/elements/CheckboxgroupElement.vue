<script>
  import CheckboxgroupElement from './../../../blank/components/elements/CheckboxgroupElement'

  export default {
    name: 'CheckboxgroupElement',
    render: CheckboxgroupElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          wrapper: 'vf-checkboxgroup-wrapper',
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-checkboxgroup-wrapper {
    padding-top: calc(var(--vf-input-py) + var(--vf-border-width));

    .vf-checkbox-container {
      padding-top: 0;
    }
  }
</style>