<script>
  import MultiselectElement from './../../../../components/elements/MultiselectElement'

  import SelectElement from './SelectElement'

  import Multiselect from 'vue-multiselect/src'

  export default {
    mixins: [MultiselectElement],
    components: {
      Multiselect,
    },
    render: SelectElement.render,
  }
</script>