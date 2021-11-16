<script>
  import SelectElement from './SelectElement'
  import Multiselect from '@vueform/multiselect/src/Multiselect'

  export default {
    name: 'MultiselectElement',
    components: {
      Multiselect,
    },
    render: SelectElement.render,
    staticRenderFns: SelectElement.staticRenderFns,
    data() {
      return {
        defaultClasses: {
          container: '',
          input: '',
          input_enabled: '',
          input_disabled: '',
          inputWrapper: '',
          select: {},
        }
      }
    }
  }
</script>

<style lang="scss">
</style>