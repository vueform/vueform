import _ from 'lodash'
import { toRefs } from 'vue'

const base = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const value = dependencies.value
  const resolvedOptions = dependencies.resolvedOptions

  // =============== METHODS ==============

  /**
   * Toggle's a checkbox's value.
   *
   * @param {string|number} value* value to toggle
   * @returns {void}
   */
  const toggle = (val) => {
    if (value.value.indexOf(String(val)) === -1 && value.value.indexOf(Number(val)) === -1) {
      check(val)
    } else {
      uncheck(val)
    }
  }

  /**
   * Checks one or more checkboxes.
   *
   * @param {array|string|number} values* value(s) to check
   * @returns {void}
   */
  const check = (values) => {
    if (!_.isArray(values)) {
      values = [values]
    }

    const items = _.clone(value.value)

    _.each(values, (item) => {
      if (items.indexOf(String(item)) === -1 && items.indexOf(Number(item)) === -1) {
        items.push(item)
      }
    })

    value.value = items
  }

  /**
   * Unchecks one or more checkboxes.
   *
   * @param {array|string|number} values* value(s) to check
   * @returns {void}
   */
  const uncheck = (values) => {
    if (!_.isArray(values)) {
      values = [values]
    }

    const items = _.clone(value.value)

    _.each(values, (item) => {
      let index = items.indexOf(String(item))

      if (index === -1) {
        index = items.indexOf(Number(item))
      }

      if (index !== -1) {
        items.splice(index, 1)
      }
    })

    value.value = items
  }

  /**
   * Checks all checkboxes.
   *
   * @returns {void}
   */
  const checkAll = () => {
    check(resolvedOptions.value.map(o => o.value))
  }

  /**
   * Unchecks all checkboxes.
   *
   * @returns {void}
   */
  const uncheckAll = () => {
    uncheck(resolvedOptions.value.map(o => o.value))
  }

  return {
    toggle,
    check,
    uncheck,
    checkAll,
    uncheckAll,
  }
}

export default base