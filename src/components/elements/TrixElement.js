import BaseElement from './../../mixins/BaseElement'
import useTrix from './../../composables/elements/useTrix'

export default {
  name: 'TrixElement',
  mixins: [BaseElement],
  init: useTrix,
  methods: {

    /**
     * Triggered when the trix editor throws an error during file upload (for example not accepted file types). If no event is attached browsers default `alert()` function will be used.
     *
     * @public
     * @param {string} message message to display.
     * @event error
     */
    handleError(message) {
      this.fire('error', message)

      if (!this.listeners.error) {
        alert(message)
      } 
    },
  },
}