import { inject } from 'composition-api'

const base = function(props, context, dependencies)
{
  // =============== INJECT ===============

  /**
  * The computed size of the component.
  * 
  * @type {component}
  */
  let Size = inject('Size')

  return {
    Size,
  }
}

export default base