<script>
  import SelectElement from './SelectElement'
  import Multiselect from '@vueform/multiselect/src/Multiselect'

  export default {
    name: 'TagsElement',
    components: {
      Multiselect,
    },
    render: SelectElement.render,
    data() {
      return {
        defaultClasses: {
          container: '',
          select: 'form-control',
          selectNativePlaceholder: 'native-select-placeholder',
        }
      }
    }
  }
</script>