const base = function(props, context, dependencies)
{
  const { fire, el$ } = dependencies
  
  // =============== METHODS ==============
  
  /**
   * Handles `keydown` event.
   *
   * @param {Event} e* event object
   * @returns {void}
   * @private
   */
  const handleKeydown = (e) => {
    fire('keydown', e, el$.value)
  }
  
  /**
   * Handles `keyup` event.
   *
   * @param {Event} e* event object
   * @returns {void}
   * @private
   */
  const handleKeyup = (e) => {
    fire('keyup', e, el$.value)
  }
  
  /**
   * Handles `keypress` event.
   *
   * @param {Event} e* event object
   * @returns {void}
   * @private
   */
  const handleKeypress = (e) => {
    fire('keypress', e, el$.value)
  }
  
  return {
    handleKeydown,
    handleKeyup,
    handleKeypress,
  }
}

const phone = function(props, context, dependencies)
{
  const { 
    fire,
    model,
    input,
    el$,
  } = dependencies
  
  // =============== METHODS ==============
  
  const handleKeydown = (e) => {
    if (el$.value.maskPluginInstalled) {
      return
    }

    if (['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight'].indexOf(e.key) !== -1 || e.ctrlKey || e.metaKey) {
      return
    }

    if (/[0-9]/.test(e.key) && (!model.value || model.value.length < 16)) {
      return
    }

    if (e.key === '+' && (!model.value || input.value.selectionStart === 0) && (!model.value || model.value.length < 16)) {
      return
    }

    e.preventDefault()
  }
  
  return {
    handleKeydown,
  }
}

export default base

export {
  phone,
}