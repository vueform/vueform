import { computed, ref } from 'composition-api'
import useElementComponent from './../composables/useElementComponent'

export default {
  name: 'ElementLayoutInline',
  slots: ['field', 'label', 'info', 'description', 'before', 'between', 'after'],
  setup(props, context)
  {
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
        ['container', computed(() => el$.value.classes.container), ref(true)],
        ['container', 'container_error', computed(() => !el$.value.isStatic && el$.value.errors && !!el$.value.errors.length)],
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
      defaultClasses,
      classes,
      mainClass,
      visible,
      // hasLabel,
    }
  },
}