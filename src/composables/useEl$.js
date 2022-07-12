import { inject } from 'vue'

const base = function(props, context, dependencies)
{
  // =============== INJECT ===============

  /**
  * The parent element's component.
  * 
  * @type {component}
  */
  let el$ = inject('el$')

  return {
    el$,
  }
}

export default base