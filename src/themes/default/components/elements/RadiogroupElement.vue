<script>
  import RadiogroupElement from './../../../blank/components/elements/RadiogroupElement'

  export default {
    name: 'RadiogroupElement',
    render: RadiogroupElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          radioGroup: 'vf-radio-group',
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-radio-group {
    padding-top: calc(var(--vf-input-py) + var(--vf-border-width));

    .vf-radio-container {
      padding-top: 0;
    }
  }
</style>