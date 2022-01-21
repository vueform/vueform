<script>
  import CheckboxgroupElement from './../../../blank/templates/elements/CheckboxgroupElement.vue'

  export default {
    name: 'CheckboxgroupElement',
    render: CheckboxgroupElement.render,
    data() {
      return {
        merge: true,
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
    cursor: pointer;

    .vf-checkbox-container {
      padding-top: 0;
    }
  }
</style>