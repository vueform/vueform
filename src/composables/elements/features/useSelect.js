import computedOption from './../../../utils/computedOption'
import { computed, toRefs } from 'composition-api'
import normalize from './../../../utils/normalize'

export default function (props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const value = dependencies.value


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
   * @public
   * @param {str|num} option the key of option to select.
   * @returns {void}
   */
  const select = (option) => {
    if (inValue(normalize(option))) {
      return
    }
    
    let val = _.clone(value.value)

    val.push(option)

    value.value = val

    updated()
  }

  /**
   * Deselects an option.
   *
   * @public
   * @param {str|num} option the key of option to deselect.
   * @returns {void}
   */
  const deselect = (option) => {
    var index = value.value.indexOf(option)

    if (index === -1) {
      return
    }

    value.value.splice(index, 1)

    updated()
  }

  return {
    select,
    deselect,
  }
}