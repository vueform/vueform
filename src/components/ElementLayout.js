import { computed, toRefs, ref } from 'composition-api'
import useElementComponent from './../composables/useElementComponent'

export default {
  name: 'ElementLayout',
  slots: ['label', 'before', 'field', 'between', 'description', 'error', 'message', 'after'],
  props: {
    multiple: {
      type: [Boolean],
      required: false,
      default: false,
    },
  },
  setup(props, context)
  {
    const { multiple } = toRefs(props)

    // ============ DEPENDENCIES ============

    const {
      form$,
      el$,
      classes,
      components,
      mainClass,
      theme,
      defaultClasses,
    } = useElementComponent(props, context, {}, {
      addClasses: [
        ['container', computed(() => el$.value.columnsClasses.element), ref(true)],
        ['container', computed(() => el$.value.classes.container), ref(true)],
        ['container', 'container_error', computed(() => !el$.value.isStatic && el$.value.errors && !!el$.value.errors.length)],
        ['fieldWrapper', computed(() => el$.value.columnsClasses.field), ref(true)],
        ['outerWrapper', 'outerWrapper_single', computed(() => !multiple.value)],
        ['outerWrapper', 'outerWrapper_multiple', computed(() => multiple.value)],
      ]
    })

    // ============== COMPUTED ==============

    /**
     * 
     * 
     * @private
     */
    const hasLabel = computed(() => {
      return el$.value.hasLabel
    })

    /**
     * 
     * 
     * @private
     */
    const info = computed(() => {
      return el$.value.info
    })

    /**
     * 
     * 
     * @private
     */
    const before = computed(() => {
      return el$.value.before
    })

    /**
     * 
     * 
     * @private
     */
    const between = computed(() => {
      return el$.value.between
    })

    /**
     * 
     * 
     * @private
     */
    const after = computed(() => {
      return el$.value.after
    })

    /**
     * 
     * 
     * @private
     */
    const description = computed(() => {
      return el$.value.description
    })

    /**
     * 
     * 
     * @private
     */
    const visible = computed(() => {
      return el$.value.visible
    })

    return {
      el$,
      form$,
      theme,
      components,
      classes,
      mainClass,
      defaultClasses,
      visible,
      hasLabel,
      info,
      before,
      between,
      after,
      description,
    }
  },
}