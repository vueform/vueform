import _ from 'lodash'
import useTheme from './useTheme'

const base = function(props, context, dependencies)
{ 
  // ============== METHODS ===============
  
  /**
  * 
  * 
  * @private
  */
  const component = (element) => {
    return `${_.upperFirst(_.camelCase(element.type))}Element`
  }

  return {
    component,
  }
}

export default base