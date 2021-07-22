<script>
  import GroupElement from './../../../blank/components/elements/GroupElement'

  export default {
    name: 'GroupElement',
    render: GroupElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          childrenContainer: 'form-row-group',
        }
      }
    }
  }
</script>

<style lang="scss">
  // Some styles are contained in Laraform.vue
</style>