<script>
  import RadiogroupElement from './../../../blank/components/elements/RadiogroupElement'

  export default {
    name: 'RadiogroupElement',
    render: RadiogroupElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          radioGroup: 'form-radio-group',
        }
      }
    }
  }
</script>

<style lang="scss">
  .form-radio-group {
    padding-top: calc(var(--form-input-py) + var(--form-border-width));

    .form-radio-container {
      padding-top: 0;
    }
  }
</style>