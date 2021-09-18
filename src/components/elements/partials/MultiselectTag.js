import { toRefs, computed } from 'composition-api'
import useElementComponent from './../../../composables/useElementComponent'

export default {
  name: 'MultiselectTag',
  props: {
    option: {
      required: true
    },
    handleTagRemove: {
      type: Function,
      required: true
    },
    disabled: {
      type: Boolean,
      required: true
    },
  },
  setup(props, context)
  {
    const { disabled } = toRefs(props)

    const {
      el$,
      form$,
      classes,
      mainClass,
      defaultClasses,
      components,
      theme,
    } = useElementComponent(props, context, {}, {
      addClasses: [
        ['container', 'container_disabled', computed(() => disabled.value)],
      ]
    })

    // ============== COMPUTED ==============

    /**
     * Whether the tag is provided as a slot.
     * 
     * @type {boolean}
     * @private
     */
    const isSlot = computed(() => {
      return !!(el$.value.$slots?.tag || (context.expose === undefined && el$.value.$scopedSlots?.tag))
    })

    return {
      el$,
      form$,
      classes,
      mainClass,
      defaultClasses,
      components,
      theme,
      isSlot,
    }
  },
}