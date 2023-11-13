import keys from 'lodash-es/keys'
import { computed } from 'vue'

const base = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============
  
  const form$ = dependencies.form$
  
  // ============== COMPUTED ===============
  
  /**
   * The language code of the currently selected language (2 letters).
   *
   * @type {string}
   */
  const language = computed(() => {
    return form$.value.selectedLanguage
  })
  
  /**
   * Available language codes.
   *
   * @type {array}
   */
  const languages = computed(() => {
    return keys(form$.value.options.languages)
  })
  
  return {
    language,
    languages,
  }
}

export default base