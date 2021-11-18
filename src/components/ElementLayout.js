import { computed, toRefs, ref } from 'composition-api'
import useElementComponent from './../composables/useElementComponent'

export default {
  name: 'ElementLayout',
  slots: ['field', 'label', 'info', 'description', 'before', 'between', 'after'],
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
      templates,
      mainClass,
      theme,
      defaultClasses,
    } = useElementComponent(props, context, {}, {
      addClasses: [
        ['container', computed(() => el$.value.columnsClasses.container), ref(true)],
        ['container', computed(() => el$.value.classes.container), ref(true)],
        ['container', 'container_error', computed(() => !el$.value.isStatic && el$.value.errors && !!el$.value.errors.length)],
        ['innerContainer', computed(() => el$.value.columnsClasses.innerContainer), ref(true)],
        ['innerWrapper', computed(() => el$.value.columnsClasses.wrapper), ref(true)],
        ['outerWrapper', 'outerWrapper_single', computed(() => !multiple.value)],
        ['outerWrapper', 'outerWrapper_multiple', computed(() => multiple.value)],
      ]
    })

    // ============== COMPUTED ==============

    /**
     * Whether the element should be visible.
     * 
     * @type {boolean}
     */
    const visible = computed(() => {
      return el$.value.visible
    })

    return {
      el$,
      form$,
      theme,
      templates,
      classes,
      mainClass,
      defaultClasses,
      visible,
      // hasLabel,
      // info,
      // before,
      // between,
      // after,
      // description,
    }
  },
}