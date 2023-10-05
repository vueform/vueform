const base = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============
  
  const { container } = dependencies
  
  // =============== METHOD ===============
  
  /**
   * Focuses the first focusable part of the element.
   *
   * @returns {void}
   * @private
   */
  const focus = () => {
    let el = container.value?.$el || container.value
    
    el?.querySelector(
      'a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),' +
      'button:not([disabled]),iframe,[tabindex],[contentEditable=true],trix-editor',
    )?.focus()
  }
  
  return {
    focus,
  }
}

const editor = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============
  
  const { input } = dependencies
  
  // =============== METHOD ===============
  
  const focus = () => {
    input.value.editor$.focus()
  }
  
  return {
    focus,
  }
}

export {
  editor,
}

export default base