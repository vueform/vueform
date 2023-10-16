import { inject } from 'vue'

const base = function(props, context, dependencies)
{
  // =============== INJECT ===============

  /**
  * The root form's component.
  * 
  * @type {Vueform}
  */
  let form$ = inject('form$')

  return {
    form$,
  }
}

export default base