<script>
  import MultiselectElement from './../../../../components/elements/MultiselectElement'
  import SelectElement from './SelectElement'
  import Multiselect from './../wrappers/Multiselect'

  export default {
    name: 'MultiselectElement',
    mixins: [MultiselectElement],
    components: {
      Multiselect,
    },
    render: SelectElement.render,
    data() {
      return {
        defaultClasses: {
          container: 'lf-multiselect',
          select: 'form-control',
          selectNativePlaceholder: 'native-select-placeholder',
        }
      }
    }
  }
</script>