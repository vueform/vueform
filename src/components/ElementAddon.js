import { computed, toRefs } from 'composition-api'
import useElementComponent from './../composables/useElementComponent'
import isVueComponent from './../utils/isVueComponent'

export default {
  name: 'ElementAddon',
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
      classes,
      mainClass,
      components,
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
     * The addon. If the addon is provided is a `function` this has the resolved value.
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
  
    /**
     * Returns the slot component if defined in [`slots`](#option-slots) object.
     * 
     * @type {component}
     * @private
     */
    const slotComponent = computed(() => {
      return el$.value.slots?.[`addon-${type.value}`] || undefined
    })

    return {
      el$,
      form$,
      theme,
      components,
      classes,
      mainClass,
      defaultClasses,
      addon,
      isAddonComponent,
      isSlot,
      slotComponent,
    }
  },
}