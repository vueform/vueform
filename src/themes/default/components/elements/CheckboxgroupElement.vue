<script>
  import CheckboxgroupElement from './../../../blank/components/elements/CheckboxgroupElement'

  export default {
    name: 'CheckboxgroupElement',
    render: CheckboxgroupElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          checkboxGroup: 'vf-checkbox-group',
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-checkbox-group {
    padding-top: calc(var(--vf-input-py) + var(--vf-border-width));

    .vf-checkbox-container {
      padding-top: 0;
    }
  }
</style>