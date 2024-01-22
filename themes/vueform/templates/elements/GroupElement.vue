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
          wrapper: 'vf-row',
          wrapper_sm: 'vf-row-sm',
          wrapper_md: '',
          wrapper_lg: 'vf-row-lg',
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
  /* Some styles are contained in Vueform.vue */
</style>