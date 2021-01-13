import { computed, toRefs } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'
import { mergeComponentClasses } from './../utils/mergeClasses'

export default {
  name: 'FormLanguageSelectorTab',
  emits: ['select'],
  props: {
    language: {
      type: Object,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
  },
  init(props, context)
  {  
    const { code } = toRefs(props)
    const { containers } = toRefs(context.data)

    // ============ DEPENDENCIES ============

    const { form$, theme, classes: baseClasses, mainClass, components } = useFormComponent(props, context)

    // ============== COMPUTED ==============

    const selectedLanguage = computed(() => {
      return form$.value.language
    })

    const selected = computed(() => {
      return selectedLanguage.value == code.value
    })

    const classes = computed(() => {
      let classList = baseClasses.value

      classList = mergeComponentClasses(classList, {
        [containers.value.state]: {
          [classList.active]: selected.value,
          [classList.inactive]: !selected.value,
        }
      })

      return classList
    })

    // =============== METHODS ==============

    const select = () => {
      context.emit('select', code.value)
    }

    return {
      // Inject
      form$,
      theme,

      // Computed
      selectedLanguage,
      selected,
      classes,
      mainClass,
      components,

      // Methods
      select,
    }
  },
}