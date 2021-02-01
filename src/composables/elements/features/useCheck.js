const base = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const value = dependencies.value
  const items = dependencies.items

  // =============== METHODS ==============

  /**
   * Checks a checkbox or checkboxes.
   *
   * @param {array|string|number} items* key of one or more checkboxes to check.
   * @returns {void}
   */
  const check = (items) => {
    if (!_.isArray(items)) {
      items = [items]
    }

    const values = _.clone(value.value)

    _.each(items, (item) => {
      item = String(item)
      
      if (values.indexOf(item) === -1) {
        values.push(item)
      }
    })

    value.value = values
  }

  /**
   * Unchecks a checkbox or checkboxes.
   *
   * @param {array|string|number} items* key of one or more checkboxes to uncheck.
   * @returns {void}
   */
  const uncheck = (items) => {
    if (!_.isArray(items)) {
      items = [items]
    }

    const values = _.clone(value.value)

    _.each(items, (item) => {
      item = String(item)
      
      var index = values.indexOf(item)

      if (index !== -1) {
        values.splice(index, 1)
      }
    })

    value.value = values
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
   * Checks all checkboxes.
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