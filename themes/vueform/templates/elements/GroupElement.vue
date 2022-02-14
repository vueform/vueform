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
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Vueform.vue
</style>