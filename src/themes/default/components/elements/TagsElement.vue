<script>
  import TagsElement from './../../../blank/components/elements/TagsElement'
  import Multiselect from '@vueform/multiselect/src/Multiselect'

  export default {
    name: 'TagsElement',
    render: TagsElement.render,
    components: {
      Multiselect,
    },
    data() {
      return {
        defaultClasses: {
          container: '',
          select: {},
        }
      }
    }
  }
</script>

<style lang="scss">
</style>