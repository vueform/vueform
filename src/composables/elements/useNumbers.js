import { toRefs, inject } from 'vue'

const base = function(props, context, dependencies)
{
  const {
    forceNumbers,
  } = toRefs(props)

  // ============ DEPENDENCIES =============

  const { form$ } = dependencies
  
  // =============== INJECT ===============
  
  const config$ = inject('config$')

  // =============== METHODS ===============

  /**
   * Whether the value should be converted to number/float.
   *
   * @returns {boolean}
   * @private
   */
  const shouldForceNumbers = () => {
    return forceNumbers.value || (config$.value.config.forceNumbers && form$.value.options.forceNumbers !== false && forceNumbers.value !== false) || (form$.value.options.forceNumbers && forceNumbers.value !== false)
  }

  /**
   * Converts string value to number or float.
   *
   * @param {any} str* the string to be converted
   * @returns {number|float|string}
   * @private
   */
  const stringToNumber = (str) => {
    let v = str

    if (typeof str === 'string') {
      if (/^[-]?\d+([\.,]\d+)?$/.test(str)) {
        v = parseFloat(str.replace(',', '.'))
      } else if (/^[-]?\d+$/.test(str)) {
        v = parseInt(str, 10)
      }
    }

    return v
  }

  return {
    shouldForceNumbers,
    stringToNumber,
  }
}

export default base