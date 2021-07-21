<script>
  import CheckboxgroupElement from './../../../blank/components/elements/CheckboxgroupElement'

  export default {
    name: 'CheckboxgroupElement',
    render: CheckboxgroupElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          checkboxGroup: 'form-checkbox-group',
        }
      }
    }
  }
</script>

<style lang="scss">
  .form-checkbox-group {
    padding-top: calc(var(--form-input-py) + var(--form-border-width));

    .form-checkbox-container {
      padding-top: 0;
    }
  }
</style>