import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const base = function(props, context, dependencies)
{ 
  // ============== METHODS ===============
  
  /**
  * Transforms an element `type` into the element's component name.
  * 
  * @param {string} element* element `type`
  * @returns {string}
  * @private
  */
  const component = (element) => {
    return `${upperFirst(camelCase(element.type))}Element`
  }

  return {
    component,
  }
}

export default base