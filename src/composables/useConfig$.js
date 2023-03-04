import { inject } from 'vue'

const base = function(props, context, dependencies)
{
  // =============== INJECT ===============

  /**
  * The global $vueform config object.
  * 
  * @type {component}
  */
  let config$ = inject('config$')

  return {
    config$,
  }
}

export default base