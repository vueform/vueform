import { computed, toRefs } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'
import { mergeComponentClasses } from './../utils/mergeClasses'

export default {
  name: 'FormLanguage',
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
  setup(props, context)
  {  
    const { code } = toRefs(props)
    const { classKeys } = toRefs(context.data)

    // ============ DEPENDENCIES ============

    const {
      form$,
      theme,
      classes: baseClasses,
      mainClass,
      components,
      defaultClasses,
    } = useFormComponent(props, context)

    // ============== COMPUTED ==============

    /**
     * 
     * 
     * @private
     */
    const selectedLanguage = computed(() => {
      return form$.value.language
    })

    /**
     * 
     * 
     * @private
     */
    const selected = computed(() => {
      return selectedLanguage.value == code.value
    })

    /**
     * 
     * 
     * @private
     */
    const classes = computed(() => {
      let classList = baseClasses.value

      classList = mergeComponentClasses(classList, {
        [classKeys.value.state]: {
          [classList.active]: selected.value,
          [classList.inactive]: !selected.value,
        }
      })

      return classList
    })

    // =============== METHODS ==============

    /**
     * 
     * 
     * @private
     */
    const select = () => {
      context.emit('select', code.value)
    }

    return {
      form$,
      theme,
      selectedLanguage,
      selected,
      classes,
      mainClass,
      defaultClasses,
      components,
      select,
    }
  },
}