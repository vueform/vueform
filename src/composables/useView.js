import { inject, ref } from 'composition-api'

const base = function(props, context, dependencies)
{
  // =============== INJECT ===============

  /**
  * The view of the component.
  * 
  * @type {component}
  */
  let view = inject('view') || ref(null)

  return {
    view,
  }
}

export default base