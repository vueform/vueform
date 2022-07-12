import { computed, provide } from 'vue'
import useFormComponent from './../composables/useFormComponent'

export default {
  name: 'FormLanguages',
  props: {
    view: {
      required: false,
      type: [String],
      default: undefined,
    },
  },
  setup(props, context)
  {  
    // ============ DEPENDENCIES ============

    const {
      form$,
      Size,
      View,
      classesInstance,
      theme,
      classes,
      Templates,
      template,
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
     * Selects a language.
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

    // ============== PROVIDE ===============

    provide('View', View)

    return {
      form$,
      Size,
      View,
      classesInstance,
      theme,
      classes,
      Templates,
      template,
      language,
      languages,
      select,
      handleSelect,
    }
  },
}