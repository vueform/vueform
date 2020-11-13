import { computed } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'

export default {
  name: 'FormLanguageSelector',
  emits: ['changeLanguage'],
  init(props, context)
  {  
    // ============ DEPENDENCIES ============

    const { form$, theme, classes, components } = useFormComponent(props, context)

    // ============== COMPUTED ==============

    const language = computed(() => {
      return form$.value.language
    })

    const languages = computed(() => {
      return form$.value.languages
    })

    // =============== METHODS ==============

    const select = (code) => {
      context.emit('changeLanguage', code)
    }

    const handleSelect = (code) => {
      select(code)
    }

    return {
      // Inject
      form$,
      theme,

      // Computed
      classes,
      components,
      language,
      languages,

      // Methods
      select,
      handleSelect,
    }
  },
}