import { computed, toRefs } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'
import { mergeComponentClasses } from './../utils/mergeClasses'

export default {
  name: 'FormLanguageSelectorTab',
  init(props, context)
  {  
    const { code } = toRefs(props.code)
    const { containers } = toRefs(context.data)

    // ============ DEPENDENCIES ============

    const { form$, theme, classes, components } = useFormComponent(props, context)

    // ============== COMPUTED ==============

    const selectedLanguage = computed(() => {
      return form$.value.language
    })

    const selected = computed(() => {
      return selectedLanguage.value == code.value
    })

    const updatedClasses = computed(() => {
      let classList = classes.value

      classList = mergeComponentClasses(classList, {
        [containers.value.state]: {
          [classList.active]: selected.value,
          [classList.inactive]: !selected.value,
        }
      })

      return classList
    })

    return {
      // Inject
      form$,
      theme,

      // Computed
      selectedLanguage,
      selected,
      classes: updatedClasses,
      components,
    }
  },
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
  methods: {
    select() {
      this.$emit('select', this.code)
    }
  }
}