import { inject } from 'composition-api'

const base = function(props, context, dependencies)
{
  // =============== INJECT ===============

  /**
  * 
  * 
  * @private
  */
  let theme = inject('theme')

  /**
  * 
  * 
  * @private
  */
  return {
    theme,
  }
}

export default base