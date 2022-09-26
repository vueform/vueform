import { computed } from 'vue'
import useElementComponent from './../composables/useElementComponent'

export default {
  name: 'ElementDescription',
  slots: ['default'],
  setup(props, context)
  {
    // ============ DEPENDENCIES ============

    const {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme,
    } = useElementComponent(props, context)

    // ============== COMPUTED ==============

    /**
     * The element's description, defined via the element's `description` option.
     * 
     * @type {string}
     */
    const description = computed(() => {
      return el$.value.description
    })

    /**
     * The `id` attribute of the container.
     * 
     * @type {string}
     */
    const id = computed(() => {
      return el$.value.descriptionId
    })

    /**
     * Whether the description is provided as a slot.
     * 
     * @type {boolean}
     * @private
     */
    const isSlot = computed(() => {
      return !!(el$.value.slots?.description || el$.value.$slots?.description || (form$.value.$vueform.vueVersion === 2 && el$.value.$scopedSlots?.description))
    })

    return {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      theme,
      classes,
      Templates,
      template,
      description,
      isSlot,
      id,
    }
  },
}