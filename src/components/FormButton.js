import { computed, ref, toRefs, onBeforeMount, onBeforeUnmount, getCurrentInstance } from 'composition-api'
import useElementComponent from './../composables/useElementComponent'
import useLabel from './../composables/useLabel'
import useParentAssign from './../composables/useParentAssign'
import { mergeComponentClasses } from './../utils/mergeClasses'

export default {
  name: 'FormButton',
  props: {
    button: {
      type: Object,
      required: true
    },
    name: {
      type: [Number, String],
      required: true
    },
    embed: {
      type: Boolean,
      required: false,
      default: false
    },
    parent: {
      type: Object,
      required: false,
      default: () => ({})
    },
  },
  init(props, context)
  {
    const { button, embed } = toRefs(props)
    const currentInstance = getCurrentInstance()

    // ============ DEPENDENCIES ============

    const {
      el$,
      form$,
      classes: baseClasses,
      components,
      theme,
      mainClass
    } = useElementComponent(props, context)

    const {
      label,
      isLabelComponent
    } = useLabel(props, context, { component$: el$, descriptor: button })

    const {
      assignToParent,
      removeFromParent
    } = useParentAssign(props, context, { form$ })

    // ================ DATA ================

    /**
     * 
     * 
     * @private
     */
    const loading = ref(false)

    /**
     * 
     * 
     * @private
     */
    const disabled = ref(false)

    // ============== COMPUTED ==============

    /**
     * 
     * 
     * @private
     */
    const align = computed(() => {
      return button.value.align || 'left'
    })

    /**
     * 
     * 
     * @private
     */
    const classes = computed(() => {
      let classes = _.clone(baseClasses.value)

      classes = mergeComponentClasses(classes, {
        [mainClass.value]: {
          [classes[align.value]]: true,
          [classes.loading]: isLoading.value,
          [classes.disabled]: isDisabled.value,
        }
      })

      if (button.value.class) {
        classes = mergeComponentClasses(classes, {
          [mainClass.value]: {
            [button.value.class]: true,
          }
        })
      }

      return classes
    })

    /**
     * 
     * 
     * @private
     */
    const isDisabled = computed(() => {
      return typeof button.value.disabled == 'function'
        ? button.value.disabled(form$.value) || disabled.value
        : disabled.value
    })

    /**
     * 
     * 
     * @private
     */
    const isLoading = computed(() => {
      return typeof button.value.loading == 'function'
        ? button.value.loading(form$.value) || loading.value
        : loading.value
    })

    // =============== METHODS ==============

    /**
     * 
     * 
     * @private
     */
    const setLoading = (val) => {
      loading.value = val
    }

    /**
     * 
     * 
     * @private
     */
    const disable = () => {
      disabled.value = true
    }

    /**
     * 
     * 
     * @private
     */
    const enable = () => {
      disabled.value = false
    }

    /**
     * 
     * 
     * @private
     */
    const handleClick = () => {
      if (disabled.value || loading.value) {
        return
      }

      if (typeof button.value.onClick == 'function') {
        button.value.onClick(form$.value)
      }
    }

    // ================ HOOKS ===============

    if (embed.value) {
      onBeforeMount(() => {
        // console.log('mounted ', name.value)
        assignToParent(currentInstance.proxy.$parent, assignToParent)
      })

      onBeforeUnmount(() => {
        // console.log('unmounted ', name.value)
        removeFromParent(currentInstance.proxy.$parent, removeFromParent)
      })
    }

    return {
      el$,
      form$,
      theme,
      align,
      loading,
      disabled,
      isLoading,
      isDisabled,
      mainClass,
      classes,
      components,
      label,
      isLabelComponent,
      setLoading,
      disable,
      enable,
      handleClick,
    }
  },
}