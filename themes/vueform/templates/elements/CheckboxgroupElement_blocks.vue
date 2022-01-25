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
          wrapper: 'vf-checkboxgroup-wrapper-blocks',
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-checkboxgroup-wrapper-blocks {
    display: flex;
  }
</style>