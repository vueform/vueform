import useTheme from './useTheme'

const base = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const { theme } = useTheme(props, context)
  
  // ============== METHODS ===============
  
  /**
  * 
  * 
  * @private
  */
  const component = (element) => {
    if (element.component) {
      return element.component
    }

    let name = `${_.upperFirst(_.camelCase(element.type))}Element`

    let component = theme.value.elements[name]

    if (component === undefined) {
      throw new TypeError('[Laraform] Unknown element type: ' + element.type)
    }

    return component
  }

  return {
    component,
  }
}

export default base