import { inject } from 'composition-api'

const base = function(props, context, dependencies)
{
  // =============== INJECT ===============

  /**
  * 
  * 
  * @private
  */
  let form$ = inject('form$')

  return {
    form$,
  }
}

export default base