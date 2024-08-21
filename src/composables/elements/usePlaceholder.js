import { computed, toRefs, inject } from 'vue'
import localize from './../../utils/localize'

const base = function(props, context, dependencies)
{
  const {
    placeholder,
  } = toRefs(props)

  const { el$ } = dependencies
  
  // =============== INJECT ===============
  
  const config$ = inject('config$')
  const form$ = inject('form$')
  
  // ============== COMPUTED ==============
  
  /**
   * The localized placeholder of the element.
   *
   * @type {string}
   *
   */
  const Placeholder = computed(() => {
    let Placeholder = localize(placeholder.value, config$.value, form$.value)

    if (el$.value.isRequired && form$.value.options.showRequired?.indexOf('placeholder') !== -1) {
      Placeholder += '*'
    }

    return Placeholder
  })
  
  return {
    Placeholder,
  }
}

export default base