import { computed, ref, nextTick, inject } from 'vue'
import useElementComponent from './../composables/useElementComponent'

export default {
  name: 'ElementRequired',
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
     * Whether the required sign (*) should be visible.
     * 
     * @type {boolean}
     */
    const visible = computed(() => {
      return el$.value.isRequired && form$.value.options.showRequired?.indexOf('label') !== -1
    })
  
    /**
     * Whether the required is provided as a slot.
     *
     * @type {boolean}
     * @private
     */
    const isSlot = computed(() => {
      return !!(el$.value.slots?.required || el$.value.$slots?.required || /* istanbul ignore next: Vue2 is not checked */  (form$.value.$vueform.vueVersion === 2 && el$.value.$scopedSlots?.required))
    })

    return {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme,
      visible,
      isSlot,
    }
  },
}