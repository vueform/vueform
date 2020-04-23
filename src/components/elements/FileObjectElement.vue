<script>
  // equals to ObjectElement except that it needs
  // to be able to forward the image click event
  // and remove event

  import ObjectElement from './ObjectElement.vue'

  export default {
    name: 'FileObjectElement',
    mixins: [ObjectElement],
    methods: {
      
      /**
       * Forwards image click event for parent element.
       *
       * @private
       * @returns {void}
       */
      forwardImageClick(index) {
        this.$emit('click', index)
      },
      
      /**
       * Forwards remove event parent element.
       *
       * @private
       * @returns {void}
       */
      forwardRemove(index) {
        this.$emit('remove', index)
      },
    },
  }
</script>