import { inject } from 'vue'

const base = function(props, context, dependencies)
{
  // =============== INJECT ===============

  /**
  * The global theme object, which contains all the default templates and classes.
  * 
  * @type {object}
  */
  let theme = inject('theme')

  return {
    theme,
  }
}

export default base