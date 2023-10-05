import { computed, toRefs, inject } from 'vue'
import useElementComponent from './../composables/useElementComponent'
import localize from './../utils/localize'

export default {
  name: 'ElementText',
  slots: ['default'],
  props: {
    type: {
      type: String,
      required: true
    }
  },
  setup(props, context)
  {
    const { type } = toRefs(props)

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

    // ============== COMPUTED ==============

    /**
     * The value of the content type.
     *
     * @type {string}
     * @private
     */
    const content = computed(() => {
      return localize(el$.value[type.value], config$.value, form$.value)
    })

    /**
     * Whether the contents are provided as a slot.
     *
     * @type {boolean}
     * @private
     */
    const isSlot = computed(() => {
      return !!(el$.value.slots?.[type.value] || el$.value.$slots?.[type.value] || /* istanbul ignore next: Vue2 is not checked */ (form$.value.$vueform.vueVersion === 2 && el$.value.$scopedSlots?.[type.value]))
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
      content,
      isSlot,
    }
  },
}