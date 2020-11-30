const base = function (props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const components = dependencies.components
  
  // ============== METHODS ===============

  
  const component = (button) => {
    if (button.component) {
      return button.component        
    }

    let type = button.type || 'button'

    switch(type) {
      case 'button':
        return components.value.FormButton

      default:
        let component = components.value['FormButton' + _.upperFirst(type)]

        if (!component) {
          throw new TypeError('Button component not found: "FormButton' + _.upperFirst(type) + '"')
        }

        return component
    }
  }

  return {
    component,
  }
}

export default base