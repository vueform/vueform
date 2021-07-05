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
        ['container', 'containerBefore', computed(() => type.value === 'before')],
        ['container', 'containerAfter', computed(() => type.value === 'after')],
      ],
    })

    // ============== COMPUTED ==============

    /**
     * 
     * 
     * @private
     */
    const baseAddon = computed(() => {
      return el$.value.addons[type.value]
    })

    /**
     * 
     * 
     * @private
     */
    const addon = computed(() => {
      return isAddonFunction.value
        ? baseAddon.value(el$.value)
        : baseAddon.value || null
    })
    
    /**
     * 
     * 
     * @private
     */
    const isAddonFunction = computed(() => {
      return typeof baseAddon.value === 'function' && (!baseAddon.value.prototype || !baseAddon.value.prototype.constructor || (baseAddon.value.prototype.constructor && baseAddon.value.prototype.constructor.name !== 'VueComponent'))
    })

    /**
     * 
     * 
     * @private
     */
    const isAddonComponent = computed(() => {
      return isVueComponent(baseAddon.value)
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
    }
  },
}