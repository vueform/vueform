import useTheme from './useTheme'

const base = function(props, context, dependencies)
{ 
  // ============== METHODS ===============
  
  /**
  * 
  * 
  * @private
  */
  const elementComponent = (element) => {
    return `${_.upperFirst(_.camelCase(element.type))}Element`
  }

  return {
    elementComponent,
  }
}

export default base