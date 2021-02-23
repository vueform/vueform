import { computed } from 'composition-api'

const base = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$

  // ============== COMPUTED ===============

  /**
   * Current language.
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
    return _.keys(form$.value.options.languages)
  })
  
  return {
    language,
    languages,
  }
}

export default base