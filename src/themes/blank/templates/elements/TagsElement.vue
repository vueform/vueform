<script>
  import SelectElement from './SelectElement'
  import Multiselect from '@vueform/multiselect/src/Multiselect'

  export default {
    name: 'TagsElement',
    components: {
      Multiselect,
    },
    render: SelectElement.render,
    staticRenderFns: SelectElement.staticRenderFns,
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