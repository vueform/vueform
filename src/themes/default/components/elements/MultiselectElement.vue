<script>
  import MultiselectElement from './../../../blank/components/elements/MultiselectElement'
  import Multiselect from '@vueform/multiselect/src/Multiselect'

  export default {
    name: 'MultiselectElement',
    components: {
      Multiselect,
    },
    render: MultiselectElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          input: 'form-input',
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
  // Some styles are contained in Laraform.vue
</style>