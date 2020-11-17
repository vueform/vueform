export default function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const value = dependencies.value

  // =============== METHODS ==============

  /**
   * Checks a checkbox or checkboxes.
   *
   * @public
   * @param {arr|str|num} options key of one or more checkboxes to check.
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
   * @public
   * @param {arr|str|num} options key of one or more checkboxes to uncheck.
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

  return {
    check,
    uncheck,
  }
}