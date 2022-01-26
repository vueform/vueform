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
          wrapper: 'vf-checkboxgroup-pills-wrapper',
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-checkboxgroup-pills-wrapper {
    display: grid;
    grid-auto-flow: column;
  }
</style>