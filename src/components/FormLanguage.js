import { computed, toRefs } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'

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

    // ============ DEPENDENCIES ============

    const {
      form$,
      theme,
      classes,
      mainClass,
      components,
      defaultClasses,
    } = useFormComponent(props, context, {}, {
      addClasses: [
        ['wrapper', 'wrapperActive', computed(() => selected.value)],
        ['wrapper', 'wrapperInactive', computed(() => !selected.value)],
      ]
    })

    // ============== COMPUTED ==============

    /**
     * 
     * 
     * @private
     */
    const selectedLanguage = computed(() => {
      return form$.value.selectedLanguage
    })

    /**
     * 
     * 
     * @private
     */
    const selected = computed(() => {
      return selectedLanguage.value == code.value
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