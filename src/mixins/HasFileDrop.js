export default {
  computed: {
    /**
    * Determines if the element has drag n drop area instead of upload button.
    * 
    * @type {boolean} 
    * @default false
    */
    drop: {
      get() {
        return this.schema.drop !== undefined ? this.schema.drop : false
      },
      set(value) {
        this.$set(this.schema, 'drop', value)
      }
    },

    /**
    * Helper property used to determine if the user's browser has dragging capability.
    * 
    * @type {boolean} 
    * @ignore
    */
    canDragAndDrop() {
      var div = document.createElement('div');

      return ( ( 'draggable' in div )
              || ( 'ondragstart' in div && 'ondrop' in div ) )
              && 'FormData' in window
              && 'FileReader' in window
    }
  }
}