import { inject } from 'composition-api'

const base = function(props, context, dependencies)
{
  // =============== INJECT ===============

  /**
  * The computed size of the component.
  * 
  * @type {component}
  */
  let $size = inject('$size')

  return {
    $size,
  }
}

export default base