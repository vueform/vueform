import _ from 'lodash'
import { toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const {
    items,
  } = toRefs(props)

  // ============ DEPENDENCIES ============

  const value = dependencies.value

  // =============== METHODS ==============

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
    check(_.keys(items.value))
  }

  /**
   * Unchecks all checkboxes.
   *
   * @returns {void}
   */
  const uncheckAll = () => {
    uncheck(_.keys(items.value))
  }

  return {
    check,
    uncheck,
    checkAll,
    uncheckAll,
  }
}

export default base