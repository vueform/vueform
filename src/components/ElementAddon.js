import { computed, toRefs } from 'composition-api'
import useElementComponent from './../composables/useElementComponent'
import isVueComponent from './../utils/isVueComponent'

export default {
  name: 'ElementAddon',
  slots: ['default'],
  props: {
    type: {
      required: true,
      type: String
    },
  },
  setup(props, context)
  { 
    const { type } = toRefs(props)

    // ============ DEPENDENCIES ============

    const {
      form$,
      el$,
      $size,
      classes,
      mainClass,
      templates,
      theme,
      defaultClasses,
    } = useElementComponent(props, context, {}, {
      addClasses: [
        ['container', 'container_before', computed(() => type.value === 'before')],
        ['container', 'container_after', computed(() => type.value === 'after')],
      ],
    })

    // ============== COMPUTED ==============

    /**
     * The addon definition.
     * ponent.
  * 
  * @type {string|function|component}
  * @private
     */
    const baseAddon = computed(() => {
      return el$.value.addons[type.value]
    })

    /**
     * The content of the addon. If the addon is provided ss a `function` this contains the resolved value.
     * 
     * @type {string|component}
     */
    const addon = computed(() => {
      return isAddonFunction.value
        ? baseAddon.value(el$.value)
        : baseAddon.value || null
    })
    
    /**
    * Whether the addon is provided as a function.
    * 
    * @type {boolean}
    * @private
    */
    const isAddonFunction = computed(() => {
      return typeof baseAddon.value === 'function' && (!baseAddon.value.prototype || !baseAddon.value.prototype.constructor || (baseAddon.value.prototype.constructor && baseAddon.value.prototype.constructor.name !== 'VueComponent'))
    })

    /**
    * Whether addon is provided as a Vue component.
    * 
    * @type {boolean}
    * @private
    */
    const isAddonComponent = computed(() => {
      return isVueComponent(baseAddon.value)
    })
  
    /**
     * Whether the label is provided as a slot.
     * 
     * @type {boolean}
     * @private
     */
    const isSlot = computed(() => {
      return !!(el$.value.slots?.[`addon-${type.value}`] || el$.value.$slots?.[`addon-${type.value}`] || (context.expose === undefined && el$.value.$scopedSlots?.[`addon-${type.value}`]))
    })

    return {
      el$,
      form$,
      theme,
      $size,
      templates,
      classes,
      mainClass,
      defaultClasses,
      addon,
      isAddonComponent,
      isSlot,
    }
  },
}