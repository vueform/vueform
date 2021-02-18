import { computed } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'

export default {
  name: 'FormLanguageSelector',
  emits: ['changeLanguage'],
  setup(props, context)
  {  
    // ============ DEPENDENCIES ============

    const {
      form$,
      theme,
      classes,
      mainClass,
      components
    } = useFormComponent(props, context)

    // ============== COMPUTED ==============

    /**
     * 
     * 
     * @private
     */
    const language = computed(() => {
      return form$.value.language
    })

    /**
     * 
     * 
     * @private
     */
    const languages = computed(() => {
      return form$.value.languages
    })

    // =============== METHODS ==============

    /**
     * 
     * 
     * @private
     */
    const select = (code) => {
      form$.value.setLanguage(code)
    }

    /**
     * 
     * 
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
      components,
      language,
      languages,
      select,
      handleSelect,
    }
  },
}