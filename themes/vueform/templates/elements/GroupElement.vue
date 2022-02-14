<script>
  import GroupElement from './../../../blank/templates/elements/GroupElement.vue'

  export default {
    name: 'GroupElement',
    render: GroupElement.render,
    data() {
      return {
        merge: true,
        defaultClasses: {
          container: '',
          wrapper: 'vf-row vf-rowset',
          wrapper_sm: 'vf-row-sm vf-rowset-sm',
          wrapper_md: '',
          wrapper_lg: 'vf-row-lg vf-rowset-lg',
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
  // Some styles are contained in Vueform.vue
</style>