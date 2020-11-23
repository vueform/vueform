import computedOption from './../../../utils/computedOption'
import { computed, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============== COMPUTED ==============

  /**
   * Whether the field should be *disabled* for user input (API updates are possible).
   * 
   * @type {boolean} 
   * @default false
   */
  const disabled = computedOption('disabled', schema, false)


  // =============== METHODS ==============

  /**
   * Disabled the field.
   *
   * @public
   * @returns {void}
   */
  const disable = () => {
    disabled.value = true
  }

  /**
   * Enables the field.
   *
   * @public
   * @returns {void}
   */
  const enable = () => {
    disabled.value = false
  }

  return {
    disabled,
    disable,
    enable,
  }
}

const checkboxgroup = function(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$

  // ================ DATA ================

  /**
   * List of option keys to be disabled.
   * 
   * @type {array} 
   * @default []
   */
  const disables = computed({
    get() {
      return _.map(schema.value.disables || [], (disable) => {
        return String(disable)
      })
    },
    set(val) {
      form$.value.$set(schema.value, 'disables', val)
    }
  })

  /**
   * Whether all the checkboxes are *disabled*.
   * 
   * @type {boolean} 
   * @default false
   */
  const disabled = computedOption('disabled', schema, false)

  // =============== METHODS ==============

  /**
   * Disables a checkbox or checkboxes.
   *
   * @public
   * @param {arr|str|num} options key of one or more checkboxes to disable.
   * @returns {void}
   */
  const disable = (items) => {
    if (!_.isArray(items)) {
      items = [items]
    }

    const disablesList = _.clone(disables.value)

    _.each(items, (item) => {
      item = String(item)
      
      if (disablesList.indexOf(item) === -1) {
        disablesList.push(item)
      }
    })

    disables.value = disablesList
  }

  /**
   * Enables a checkbox or checkboxes.
   *
   * @public
   * @param {arr|str|num} options key of one or more checkboxes to enable.
   * @returns {void}
   */
  const enable = (items) => {
    if (!_.isArray(items)) {
      items = [items]
    }

    const disablesList = _.clone(disables.value)

    _.each(items, (item) => {
      item = String(item)
      
      var index = disablesList.indexOf(item)

      if (index !== -1) {
        disablesList.splice(index, 1)
      }
    })

    disables.value = disablesList
  }

  /**
   * Disabled all checkboxes.
   *
   * @public
   * @returns {void}
   */
  const disableAll = () => {
    disabled.value = true
  }

  /**
   * Enables all checkboxes.
   *
   * @public
   * @returns {void}
   */
  const enableAll = () => {
    disabled.value = false
  }

  return {
    disables,
    disabled,
    disableAll,
    enableAll,
    disable,
    enable,
  }
}

const radiogroup = checkboxgroup

export {
  checkboxgroup,
  radiogroup,
}

export default base