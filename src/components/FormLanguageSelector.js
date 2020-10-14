import { computed } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'

export default {
  name: 'FormLanguageSelector',
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

    const select = () => {
      context.emit('changeLanguage', language.value)
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
    }
  },
}