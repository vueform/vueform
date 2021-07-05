<script>
  import SelectElement from './SelectElement'
  import Multiselect from '@vueform/multiselect/src/Multiselect'

  export default {
    name: 'MultiselectElement',
    components: {
      Multiselect,
    },
    render: SelectElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          input: '',
          input_enabled: '',
          input_disabled: '',
          inputWrapper: '',
          select: '',
        }
      }
    }
  }
</script>