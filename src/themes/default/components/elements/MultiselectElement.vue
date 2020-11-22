<script>
  import MultiselectElement from './../../../../components/elements/MultiselectElement'
  import SelectElement from './SelectElement'
  import Multiselect from 'vue-multiselect'

  export default {
    name: 'MultiselectElement',
    mixins: [MultiselectElement],
    components: {
      Multiselect,
    },
    render: SelectElement.render,
    data() {
      return _.merge(SelectElement.data(), {
        defaultClasses: {
          container: 'lf-multiselect',
        }
      })
    }
  }
</script>