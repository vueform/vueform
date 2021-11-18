import { computed } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'

export default {
  name: 'FormLanguages',
  setup(props, context)
  {  
    // ============ DEPENDENCIES ============

    const {
      form$,
      theme,
      classes,
      mainClass,
      templates,
      defaultClasses,
    } = useFormComponent(props, context)

    // ============== COMPUTED ==============

    /**
     * The language code of the currently selected language (2 letters).
     * 
     * @type {string}
     */
    const language = computed(() => {
      return form$.value.selectedLanguage
    })

    /**
     * The available languages.
     * 
     * @type {object}
     */
    const languages = computed(() => {
      return form$.value.options.languages
    })

    // =============== METHODS ==============

    /**
     * Select a language.
     * 
     * @param {string} code* the language code to be selected
     * @returns {void}
     */
    const select = (code) => {
      form$.value.setLanguage(code)
    }

    /**
     * Handles `select` event.
     *
     * @param {string} code* the language code to be selected
     * @returns {void}
     * @private
     */
    const handleSelect = (code) => {
      select(code)
    }

    return {
      form$,
      theme,
      classes,
      mainClass,
      defaultClasses,
      templates,
      language,
      languages,
      select,
      handleSelect,
    }
  },
}