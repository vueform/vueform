import { ref, computed, toRefs, watch, onMounted, nextTick } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'
import useEvents from './../composables/useEvents'

export default {
  name: 'FormTabs',
  props: {
    /**
     * Tabs definition.
     */
    tabs: {
      type: Object,
      required: true,
    },

    /**
     * Form element components.
     */
    elements$: {
      type: Object,
      required: true,
    },
  },
  init(props, context)
  {  
    const { elements$, tabs } = toRefs(props)

    // ============ DEPENDENCIES ============

    const { form$, theme, classes, components } = useFormComponent(props, context)
    const { events, listeners, on, off, fire, fireChange } = useEvents(props, context, { form$ }, {
      events: {
        change: [], // (tab$, oldTab$)
      },
    })

    // ================ DATA ================

    const formTabs$ = ref([])

    // ============== COMPUTED ==============

    /**
     * Object of tab$ components.
     * 
     * @type {object}
     * @default {}
     */
    const tabs$ = computed(() => {
      let tabList$ = {}

      _.each(formTabs$.value, (formTab$) => {
        tabList$[formTab$.name] = formTab$
      })

      return tabList$
    })

    /**
     * Returns the visible [tab$](reference/frontend-tab) components.
     * 
     * @type {object}
     */
    const visible$ = computed(() => {
      var tabList$ = {}

      _.each(tabs$.value, (tab$) => {
        if (tab$.visible) {
          tabList$[tab$.name] = tab$
        }
      })

      return tabList$
    })

    /**
     * Returns the current [tab$](reference/frontend-tab) components.
     * 
     * @type {object}
     */
    const current$ = computed(() => {
      var current = _.find(tabs$.value, { active: true })

      return current !== undefined ? current : {}
    })

    /**
     * Returns the first [tab$](reference/frontend-tab) components.
     * 
     * @type {object}
     */
    const first$ = computed(() => {
      return visible$.value[_.head(_.keys(visible$.value))]
    })

    /**
     * Returns the next [tab$](reference/frontend-tab) component.
     * 
     * @type {tab$}
     */
    const next$ = computed(() => {
      return visible$.value[_.keys(visible$.value)[current$.value.index + 1]]
    })

    /**
     * Returns the previous [tabs$](reference/frontend-tab) component.
     * 
     * @type {tab$}
     */
    const previous$ = computed(() => {
      return visible$[_.keys(visible$.value)[current$.value.index - 1]]
    })

    // =============== METHODS ==============

    /**
     * Moves to a tab.
     *
     * @public
     * @param {object} tab key of tab in [tabs](reference/frontend-form#prop-tabs)
     * @returns {void}
     */
    const goTo = (tab) => {
      let tab$ = visible$.value[tab]
      
      tab$.select()
    }

    /**
     * Selects a tab.
     *
     * @private
     * @param {object} tab$ selected tab component
     * @returns {void}
     */
    const select = (tab$) => {
      let curr$ = current$.value

      _.each(tabs$.value, (tab$) => {
        tab$.deactivate()
      })

      fireChange(tab$, curr$)
    }

    /**
     * Returns a specific [tab$](reference/frontend-tab).
     *
     * @public
     * @param {object} tab key of tab in [tabs](reference/frontend-form#prop-tabs) object
     * @returns {wizardStep$}
     */
    const tab$ = (tab) => {
      return _.find(tabs$.value, { name: tab })
    }

    /**
     * Reset tabs, meaning selecting [first$](#prop-first) tab. 
     *
     * @public
     * @returns {void}
     */
    const reset = () => {
      first$.value.select()
    }

    // ============== WATCHERS ==============

    watch(elements$, (newValue, oldValue) => {
      let newElements$ = _.difference(_.keys(newValue), _.keys(oldValue))

      _.each(newElements$, (newElement$) => {
        elements$.value[newElement$].deactivate()
      })
    }, { deep: false, lazy: true })

    watch(tabs, () => {
      nextTick(() => {
        nextTick(() => {
          if (_.isEmpty(current$.value)) {
            first$.value.select()
          }
        })
      })
    }, { deep: true, lazy: true })

    // =============== HOOKS ================

    onMounted(() => {
      if (_.isEmpty(tabs.value)) {
        return
      }

      // nextTick is required because elements$
      // only available after form is mounted,
      // which is later than the tabs mount
      nextTick(() => {
        first$.value.select()
      })
    })

    return {
      // Inject
      form$,
      theme,

      // Data
      formTabs$,
      events,
      listeners,

      // Computed
      classes,
      components,
      tabs$,
      visible$,
      current$,
      first$,
      next$,
      previous$,

      // Methods
      goTo,
      select,
      tab$,
      reset,
      on,
      off,
      fire,
      fireChange,
    }
  },
}