// @todo: check required schema (eg. `elements` property) here and everywhere
import { computed, ref, toRefs, watch, onMounted, nextTick } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'
import useConditions from './../composables/useConditions'
import useLabel from './../composables/useLabel'
import useEvents from './../composables/useEvents'
import { mergeComponentClasses } from './../utils/mergeClasses'

export default {
  name: 'FormTab',
  props: {
    /**
     * Name of tab within [tabs](reference/frontend-form#prop-tabs) object.
     */
    name: {
      type: [String, Number],
      required: true,
    },

    /**
     * Tab schema within [tabs](reference/frontend-form#prop-tabs) object.
     */
    tab: {
      type: Object,
      required: true,
    },

    /**
     * Form element components.
     */
    elements$: {
      type: Object,
      required: false,
    },

    /**
     * The [visible$](reference/frontend-tabs#prop-visible) step of formWizard$.
     */
    visible$: {
      type: Object,
      required: false,
    },
  },
  init(props, context)
  {  
    const { tab, elements$, name, visible$ } = toRefs(props)
    const { containers } = toRefs(context.data)

    // ============ DEPENDENCIES ============

    const { form$, theme, classes, components, mainClass } = useFormComponent(props, context)
    const { available, conditions } = useConditions(props, context, { form$, descriptor: tab })
    const { label, isLabelComponent } = useLabel(props, context, { form$, descriptor: tab })
    const { events, listeners, on, off, fire, fireActive, fireInactive } = useEvents(props, context, { form$, descriptor: tab }, {
      events: {
        active: [], // (tab$)
        inactive: [], // (tab$)
      },
    })

    // ================ DATA ================

    /**
     * Determines whether the tab is active.
     * 
     * @type {boolean}
     * @default false
     */
    const active = ref(false)

    // ============== COMPUTED ==============

    /**
     * Returns the components of elements within the tab.
     * 
     * @type {object}
     */
    const children$ = computed(() => {
      return _.filter(elements$.value, (element$, key) => {
        return tab.value.elements.indexOf(key) !== -1
      })
    })

    /**
     * Determines whether the tab is visible.
     * 
     * @type {boolean}
     */
    const visible = computed(() => {
      return available.value
    })

    /**
     * Class of tab.
     * 
     * @type {string|array|object}
     */
    const class_ = computed(() => {
      return tab.value.class || null
    })

    /**
     * Determines whether the tab has any invalid elements.
     * 
     * @type {boolean}
     */
    const invalid = computed(() => {
      return _.some(children$.value, { available: true, invalid: true })   
    })

    const updatedClasses = computed(() => {
      let classList = classes.value

      classList = mergeComponentClasses(classList, {
        [containers.value.state]: {
          [classList.active]: active.value,
          [classList.inactive]: !active.value,
          [classList.valid]: !invalid.value,
          [classList.invalid]: invalid.value,
        }
      })

      // Add tabs's class to main class
      if (class_ !== null) {
        classList = mergeComponentClasses(classList, {
          [mainClass.value]: class_.value
        })
      }

      return classList
    })

    /**
      * Returns the index of tab.
      * 
      * @type {integer}
      */
    const index = computed(() => {
      return _.keys(visible$.value).indexOf(name.value)
    })
    
    const tab$ = computed(() => {
      return form$.value.tabs$.tabs$[name.value]
    })

    // =============== METHODS ==============

    /**
     * Selects the tab to become the active tab.
     *
     * @public
     * @returns {void}
     */
    const select = () => {
      if (active.value) {
        return
      }

      context.emit('select', tab$.value)

      activate()
    }

    /**
     * Activates the tab.
     *
     * @public
     * @returns {void}
     */
    const activate = () => {
      if (active.value) {
        return
      }

      active.value = true

      _.each(children$.value, (element$) => {
        element$.activate()
      })

      fireActive()
    }

    /**
     * Deactivates the step.
     *
     * @public
     * @returns {void}
     */
    const deactivate = () => {
      if (!active.value) {
        return
      }

      active.value = false

      _.each(children$.value, (element$) => {
        element$.deactivate()
      })

      fireInactive()
    }

    // ============== WATCHERS ==============

    watch(children$, () => {
      if (!active.value) {
        return
      } 

      _.each(children$.value, (element$) => {
        element$.activate()
      })
    }, { deep: false, lazy: true })

    // ================ HOOKS ===============

    onMounted(() => {
      // nextTick is required because elements$
      // only available after form is mounted,
      // which is later than the tab mount
      nextTick(() => {
        if (conditions.value.length == 0) {
          return
        }

        _.each(children$.value, (element$) => {
          _.each(tab.value.conditions, (condition) => {
            element$.conditions.push(condition)
          })
        })
      })
    })

    return {
      // Inject
      form$,
      theme,

      // Data
      active,
      events,
      listeners,

      // Computed
      children$,
      visible,
      invalid,
      classes: updatedClasses,
      components,
      conditions,
      available,
      index,
      label,
      isLabelComponent,
      tab$,

      // Methods
      select,
      activate,
      deactivate,
      on,
      off,
      fire,
      fireActive,
      fireInactive
    }
  },
}