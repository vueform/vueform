<script>
  import TagsElement from './../../../../components/elements/TagsElement'

  import MultiselectElement from './MultiselectElement'

  import Multiselect from 'vue-multiselect/src'

  export default {
    mixins: [TagsElement],
    components: {
      Multiselect,
    },
    render: MultiselectElement.render,
  }
</script>