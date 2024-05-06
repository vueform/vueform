const base = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============
  
  const model = dependencies.model
  
  // =============== METHODS ==============
  
  /**
   * Handles `input` event.
   *
   * @param {Event} e* event object
   * @returns {void}
   * @private
   */
  const handleInput = (e) => {
    model.value = e.target.value
  }
  
  return {
    handleInput,
  }
}

const phone = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============
  
  const {
    model,
    input,
    el$,
  } = dependencies
  
  // ============== COMPUTED ==============
  
  /**
   * Handles `input` event.
   *
   * @param {Event} e* event object
   * @returns {void}
   * @private
   */
  const handleInput = (e) => {
    if (el$.value.maskPluginInstalled) {
      model.value = e.target.value
      return
    }

    let startsWithPlus = e.target.value.startsWith('+')
    let value = e.target.value.substr(startsWithPlus ? 1 : 0)
    let numbers = value.match(/\d+/g) || []
    
    if (numbers.length || startsWithPlus) {
      value = '+'
    }

    value += numbers.join('')

    input.value.value = value

    model.value = value
  }
  
  return {
    handleInput,
  }
}

export default base

export {
  phone,
}