<script>
  import TagsElement from './../../../../components/elements/TagsElement'
  import SelectElement from './SelectElement'
  import Multiselect from '@vueform/multiselect/src/Multiselect'

  export default {
    name: 'TagsElement',
    mixins: [TagsElement],
    components: {
      Multiselect,
    },
    render: SelectElement.render,
    data() {
      return {
        defaultClasses: {
          container: 'lf-tags',
          select: 'form-control',
          selectNativePlaceholder: 'native-select-placeholder',
        }
      }
    }
  }
</script>