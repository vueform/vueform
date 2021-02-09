import { computed, toRefs } from 'composition-api'
import useElementComponent from './../composables/useElementComponent'
import isVueComponent from './../utils/isVueComponent'
import { mergeComponentClasses } from './../utils/mergeClasses'

export default {
  name: 'InputAddon',
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
      classes: baseClasses,
      mainClass,
      components,
      theme
    } = useElementComponent(props, context)

    // ============== COMPUTED ==============

    /**
     * 
     * 
     * @private
     */
    const classes = computed(() => {
      let classes = _.clone(baseClasses.value)

      return mergeComponentClasses(classes, {
        [mainClass.value]: {
          [classes.addonBefore]: type.value === 'before',
          [classes.addonAfter]: type.value === 'after',
        }
      })
    })

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
      addon,
      isAddonComponent,
    }
  },
}