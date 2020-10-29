<script>
  import KeyElement from './../../../../components/elements/KeyElement'

  import HiddenElement from './HiddenElement'

  export default {
    name: 'KeyElement',
    mixins: [KeyElement],
    render: HiddenElement.render,
  }
</script>