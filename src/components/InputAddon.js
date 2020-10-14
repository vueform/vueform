import { computed, toRefs } from 'composition-api'
import useElementComponent from './../composables/useElementComponent'
import isVueComponent from './../utils/isVueComponent'

export default {
  name: 'InputAddon',
  props: {
    type: {
      required: true,
      type: String
    },
  },
  init(props, context)
  { 
    const { type } = toRefs(props)

    // ============ DEPENDENCIES ============

    const { form$, el$, classes, components, theme } = useElementComponent(props, context)

    // ============== COMPUTED ==============

    const baseAddon = computed(() => {
      return el$.value.addons[type.value]
    })

    const addon = computed(() => {
      return isAddonFunction.value
        ? baseAddon.value(el$.value)
        : baseAddon.value || null
    })
    
    const isAddonFunction = computed(() => {
      return typeof baseAddon.value === 'function' && (!baseAddon.value.prototype || !baseAddon.value.prototype.constructor || (baseAddon.value.prototype.constructor && baseAddon.value.prototype.constructor.name !== 'VueComponent'))
    })

    const isAddonComponent = computed(() => {
      return isVueComponent(baseAddon.value)
    })

    return {
      // Inject
      el$,
      form$,
      theme,

      // Computed
      components,
      classes,
      addon,
      isAddonComponent,
    }
  },
}