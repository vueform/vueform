import each from 'lodash/each'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import { ref } from 'vue'

const base = function(props, context, dependencies, options = {})
{
  if (!options.events) {
    throw new Error('`events` option is required for useEvents')
  }

  // ================ DATA ================

  /**
   * Helper property used to store available events for the element.
   * 
   * @type {array}
   * @default []
   * @private
   */
  const events = ref(options.events)

  /**
   * Helper property used to store listeners for events.
   * 
   * @type {object}
   * @default {}
   * @private
   */
  const listeners = ref({})

  // =============== METHODS ==============

  /**
   * Adds a listener for an event.
   *
   * @param {string} event* name of the event to listen for
   * @param {function} callback* callback to run when the event is triggered
   * @returns {void}
   */
  const on = (evt, callback) => {
    if (!listeners.value[evt]) {
      listeners.value[evt] = []
    }

    listeners.value[evt].push(callback)
  }

  /**
   * Removes all listeners for an event.
   *
   * @param {string} event* name of the event to remove
   * @returns {void}
   */
  const off = (evt) => {
    delete listeners.value[evt]
  }

  /**
   * Fires and emits an event.
   *
   * @param {any} args list of arguments to pass over to the event callback 
   * @returns {void}
   */
  const fire = function() {
    let evt = arguments[0]
    let args = [].slice.call(arguments).splice(1)

    each(listeners.value[evt], (callback) => {
      callback(...args)
    })

    if (!listeners.value[evt] || !listeners.value[evt].length) {
      context.emit(...[evt].concat(args))
    }
  }

  // =============== HOOKS ================

  // If component has descriptor subscribe upfront
  // for events using `onEvent` format 
  each(events.value, (evt) => {
    let callback = props['on' + upperFirst(camelCase(evt))]

    if (callback) {
      on(evt, callback)
    }
  })

  return {
    events,
    listeners,
    on,
    off,
    fire,
  }
}

export default base