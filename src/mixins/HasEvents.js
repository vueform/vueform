import _ from 'lodash'

export default {
  data() {
    return {

      /**
       * Helper property used to store available events for the element.
       * 
       * @ignore
       * @type {array}
       * @default []
       */
      events: [],

      /**
       * Helper property used to store listeners for events.
       * 
       * @ignore
       * @type {object}
       * @default {}
       */
      listeners: {},
    }
  },
  methods: {
    
    /**
     * Adds a listener for an event.
     *
     * @public
     * @param {string} event event to listen for.
     * @param {function} callback callback to run when the event is triggered. The `this` variable refers to the component the listener is set for.
     * @returns {void}
     */
    on(event, callback) {
      if (!this.listeners[event]) {
        this.$set(this.listeners, event, [])
      }

      this.listeners[event].push(callback)
    },

    /**
     * Removes all listeners for an event.
     *
     * @public
     * @param {string} event event to remove the listeners for.
     * @returns {void}
     */
    off(event) {
      delete this.listeners[event]
    },

    /**
     * Fires an event.
     *
     * @public
     * @returns {any}
     */
    fire() {
      let event = arguments[0]
      let args = [].slice.call(arguments).splice(1)

      var response

      _.each(this.listeners[event], (callback) => {
        var answer = callback.apply(this, args)

        if (answer !== undefined) {
          response = answer
        }
      })

      return response
    },
  },
}