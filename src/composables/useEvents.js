import _ from 'lodash'
import { ref } from 'composition-api'

const base = function(props, context, dependencies, options = {})
{
  if (!options.events) {
    throw new Error('`events` option is required for useEvents')
  }

  // ============ DEPENDENCIES =============

  const form$ = dependencies.form$

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
   * @param {string} event name of the event to listen for
   * @param {function} callback callback to run when the event is triggered
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
   * @param {string} event name of the event to remove
   * @returns {void}
   */
  const off = (evt) => {
    delete listeners.value[evt]
  }

  /**
   * Fires & emits an event.
   *
   * @param {any} args list of arguments to pass over to the event callback 
   * @returns {void}
   */
  const fire = function() {
    let evt = arguments[0]
    let args = [].slice.call(arguments).splice(1)

    _.each(listeners.value[evt], (callback) => {
      callback.apply(form$.value, args)
    })

    if (!listeners.value[evt] || !listeners.value[evt].length) {
      context.emit(...[evt].concat(args))
    }
  }

  // =============== HOOKS ================

  // If component has descriptor subscribe upfront
  // for events using `onEvent` format 
  _.each(events.value, (evt) => {
    let callback = props['on' + _.upperFirst(evt)]

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