import normalize from './../../utils/normalize'
import spliceMultiple from './../../utils/spliceMultiple'

const base = function (props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const value = dependencies.value
  const updated = dependencies.updated


  // =============== PRIVATE ==============

  /**
   * Determines if an option is already among the selected options.
   *
   * @private
   * @returns {boolean}
   */
  const inValue = (option) => {
    return value.value.indexOf(option) !== -1
  }

  // =============== METHODS ==============

  /**
   * Selects an option.
   *
   * @param {str|num} option the key of option to select.
   * @returns {void}
   */
  const select = (options) => {
    if (!_.isArray(options)) {
      options = [options]
    }

    let val = _.clone(value.value)

    _.each(options, (option) => {
      if (inValue(normalize(option))) {
        return
      }

      val.push(option)
    })

    value.value = val

    updated()
  }

  /**
   * Deselects an option.
   *
   * @param {str|num} option the key of option to deselect.
   * @returns {void}
   */
  const deselect = (options) => {
    if (!_.isArray(options)) {
      options = [options]
    }

    let val = _.clone(value.value)
    let indexes = []

    _.each(options, (option) => {
      let i = value.value.indexOf(option)

      if (i === -1 || indexes.indexOf(i) !== -1) {
        return
      }

      indexes.push(i)
    })

    value.value = spliceMultiple(val, indexes)

    updated()
  }

  return {
    select,
    deselect,
  }
}

export default base