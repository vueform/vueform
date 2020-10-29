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
  }
</script>