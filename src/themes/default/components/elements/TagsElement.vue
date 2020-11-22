<script>
  import TagsElement from './../../../../components/elements/TagsElement'
  import SelectElement from './SelectElement'
  import Multiselect from 'vue-multiselect'

  export default {
    name: 'TagsElement',
    mixins: [TagsElement],
    components: {
      Multiselect,
    },
    render: SelectElement.render,
    data() {
      return _.merge(SelectElement.data(), {
        defaultClasses: {
          container: 'lf-tags',
        }
      })
    }
  }
</script>