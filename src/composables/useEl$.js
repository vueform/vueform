import { inject } from 'composition-api'

const base = function(props, context, dependencies)
{
  // =============== INJECT ===============

  /**
  * 
  * 
  * @private
  */
  let el$ = inject('el$')

  return {
    el$,
  }
}

export default base