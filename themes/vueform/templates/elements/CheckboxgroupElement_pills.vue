<script>
  import CheckboxgroupElement from './../../../blank/templates/elements/CheckboxgroupElement.vue'

  export default {
    name: 'CheckboxgroupElement_pills',
    render: CheckboxgroupElement.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: 'vf-checkboxgroup-wrapper-pills',
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-checkboxgroup-wrapper-pills {
    display: grid;
  }
</style>