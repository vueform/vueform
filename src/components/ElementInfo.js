import { computed, ref, nextTick, inject } from 'vue'
import useElementComponent from './../composables/useElementComponent'
import isInViewport from './../utils/isInViewport'
import localize from './../utils/localize'

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

    // =============== INJECT ===============

    const config$ = inject('config$')

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
      return localize(el$.value.info, config$.value, form$.value)
    })

    /**
     * The `id` attribute of the container.
     *
     * @type {string}
     */
    const id = computed(() => {
      return el$.value.infoId
    })
  
    /**
     * Whether the info is provided as a slot.
     *
     * @type {boolean}
     * @private
     */
    const isSlot = computed(() => {
      return !!(el$.value.slots?.info || el$.value.$slots?.info || /* istanbul ignore next: Vue2 is not checked */  (form$.value.$vueform.vueVersion === 2 && el$.value.$scopedSlots?.info))
    })

    // =============== METHODS ==============

    /**
     * Handles the info hover.
     *
     * @param {Event|object} e
     * @returns {Promise}
     * @private
     */
    /* istanbul ignore next: not worth it */
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
      id,
      handleMouseOver,
    }
  },
}