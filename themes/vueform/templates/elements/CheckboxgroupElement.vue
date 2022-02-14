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
          wrapper_sm: 'vf-checkboxgroup-wrapper-sm',
          wrapper_md: '',
          wrapper_lg: 'vf-checkboxgroup-wrapper-lg',
          $wrapper: (classes, { Size }) => ([
            classes.wrapper,
            classes[`wrapper_${Size}`]
          ]),
        }
      }
    }
  }
</script>

<style lang="scss">
  .vf-checkboxgroup-wrapper {
    cursor: pointer;

    .vf-checkbox-container {
      padding-top: 0;
    }
  }
</style>