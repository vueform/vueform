import { computed, ref, nextTick } from 'vue'
import useElementComponent from './../composables/useElementComponent'
import isInViewport from './../utils/isInViewport'

export default {
  name: 'ElementInfo',
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

    // ================ DATA ================

    /**
     * The position of the info.
     * 
     * @type {boolean}
     * @default false
     * @private
     */
    const position = ref(el$.value.infoPosition)

    // ============== COMPUTED ==============

    /**
     * The info for the element, defined via the element's `info` prop.
     * 
     * @type {string}
     */
    const info = computed(() => {
      return el$.value.info
    })
  
    /**
     * Whether the info is provided as a slot.
     * 
     * @type {boolean}
     * @private
     */
    const isSlot = computed(() => {
      return !!(el$.value.slots?.info || el$.value.$slots?.info || (form$.value.$vueform.vueVersion === 2 && el$.value.$scopedSlots?.info))
    })

    // =============== METHODS ==============

    /**
     * Handles the info hover.
     * 
     * @param {Event} e 
     * @return {void}
     * @private
     */
    const handleMouseOver = async (e) => {
      if (position.value !== el$.value.infoPosition) {
        return
      }
      
      await nextTick()

      let wrapper = e.target.querySelector('div')

      if (!wrapper) {
        return
      }
      
      if (!isInViewport(wrapper)) {
        position.value = 'right'
      }

      await nextTick()

      if (!isInViewport(wrapper)) {
        position.value = 'top'
      }

      await nextTick()

      if (!isInViewport(wrapper)) {
        position.value = 'left'
      }

      await nextTick()
      
      if (!isInViewport(wrapper)) {
        position.value = 'bottom'
      }
    }

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
      info,
      isSlot,
      position,
      handleMouseOver,
    }
  },
}