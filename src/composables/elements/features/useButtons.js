const base = function (props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const components = dependencies.components
  
  // ============== METHODS ===============

  /**
   * 
   * 
   * @returns {component<FormButton>}
   * @private
   */
  const component = (button) => {
    if (button.component) {
      return button.component        
    }

    let type = button.type || 'button'
    let component

    switch(type) {
      case 'button':
        component = components.value.FormButton
        break

      default:
        component = components.value['FormButton' + _.upperFirst(type)]

        if (!component) {
          throw new TypeError('Button component not found: "FormButton' + _.upperFirst(type) + '"')
        }
    }

    return component
  }

  return {
    component,
  }
}

export default base