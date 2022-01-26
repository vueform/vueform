<script>
  import CheckboxgroupElement from './../../../blank/templates/elements/CheckboxgroupElement.vue'

  export default {
    name: 'CheckboxgroupElement_blocks',
    render: CheckboxgroupElement.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: 'vf-checkboxgroup-blocks-wrapper',
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-checkboxgroup-blocks-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
</style>