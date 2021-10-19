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

    // /**
    //  * Whether the element has a [`:label`](#label) or `Laraform` component's [`:forceLabels`](laraform#force-labels) option is `true`. Either way a label should be displayed.
    //  * 
    //  * @type {boolean}
    //  */
    // const hasLabel = computed(() => {
    //   return el$.value.hasLabel
    // })

    // /**
    //  * The info for the element, defined via `:info` prop.
    //  * 
    //  * @type {string}
    //  */
    // const info = computed(() => {
    //   return el$.value.info
    // })

    // /**
    //  * The before content for the element, defined via `:before` prop.
    //  * 
    //  * @type {string}
    //  */
    // const before = computed(() => {
    //   return el$.value.before
    // })

    // /**
    //  * The between content for the element, defined via `:between` prop.
    //  * 
    //  * @type {string}
    //  */
    // const between = computed(() => {
    //   return el$.value.between
    // })

    // /**
    //  * The after content for the element, defined via `:after` prop.
    //  * 
    //  * @type {string}
    //  */
    // const after = computed(() => {
    //   return el$.value.after
    // })

    // /**
    //  * The description for the element, defined via `:description` prop.
    //  * 
    //  * @type {string}
    //  */
    // const description = computed(() => {
    //   return el$.value.description
    // })

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
      components,
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