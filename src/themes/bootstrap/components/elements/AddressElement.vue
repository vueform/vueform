<script>
  import AddressElement from './../../../../components/elements/AddressElement'

  import ObjectElement from './ObjectElement'

  export default {
    name: 'AddressElement',
    mixins: [AddressElement],
    render: ObjectElement.render,
  }
</script>