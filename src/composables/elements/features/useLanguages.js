import { computed, toRefs } from 'composition-api'

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
    return form$.value.language
  })

  /**
   * Available language codes.
   * 
   * @type {string}
   */
  const languages = computed(() => {
    return _.keys(form$.value.languages)
  })
  
  return {
    // Computed
    language,
    languages,
  }
}

export default base