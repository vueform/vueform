import { computed, toRefs } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'

export default {
  name: 'FormLanguage',
  emits: ['select'],
  props: {
    language: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    view: {
      required: false,
      type: [String],
      default: undefined,
    },
  },
  setup(props, context)
  {  
    const { code } = toRefs(props)

    // ============ DEPENDENCIES ============

    const {
      form$,
      $size,
      $view,
      theme,
      classes,
      templates,
      template,
    } = useFormComponent(props, context)

    // ============== COMPUTED ==============

    /**
     * The language code of the currently selected language (2 letters).
     * 
     * @type {string}
     */
    const selectedLanguage = computed(() => {
      return form$.value.selectedLanguage
    })

    /**
     * Whether the current language is the selected one.
     * 
     * @type {boolean}
     */
    const selected = computed(() => {
      return selectedLanguage.value == code.value
    })

    // =============== METHODS ==============

    /**
     * Select the language.
     * 
     * @return {void}
     */
    const select = () => {
      context.emit('select', code.value)
    }

    return {
      form$,
      $size,
      $view,
      theme,
      selectedLanguage,
      selected,
      classes,
      templates,
      template,
      select,
    }
  },
}