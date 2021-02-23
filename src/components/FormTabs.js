import { ref, computed, toRefs, watch, onMounted, onBeforeMount, onBeforeUnmount, onBeforeUpdate, nextTick, getCurrentInstance } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'
import useEvents from './../composables/useEvents'
import normalize from './../utils/normalize'

export default {
  name: 'FormTabs',
  setup(props, context)
  {  
    const $this = getCurrentInstance().proxy

    // ============ DEPENDENCIES ============

    const {
      form$,
      theme,
      classes,
      mainClass,
      components
    } = useFormComponent(props, context)

    const {
      events,
      listeners,
      on,
      off,
      fire
    } = useEvents(props, context, { form$ }, {
      events: ['change']
    })

    // ================ DATA ================

    /**
     * 
     * 
     * @private
     */
    const tabs$Array = ref([])

    /**
     * 
     * 
     * @private
     */
    const exists = ref(true)

    // ============== COMPUTED ==============

    const elements$ = computed(() => {
      return form$.value.elements$
    })

    const tabs = computed(() => {
      return form$.value.options.tabs
    })

    /**
     * Object of tab$ components.
     * 
     * @type {object}
     * @default {}
     */
    const tabs$ = computed(() => {
      let tabList$ = {}

      _.each(tabs$Array.value, (formTab$) => {
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
      return _.find(visible$.value, (tab) => {
        return tab.visible
      })
    })

    /**
     * Returns the next [tab$](reference/frontend-tab) component.
     * 
     * @type {component<FormTab>}
     */
    const next$ = computed(() => {
      return _.find(visible$.value, (tab) => {
        return tab.index > current$.value.index && tab.visible
      })
    })

    /**
     * Returns the previous [tabs$](reference/frontend-tab) component.
     * 
     * @type {component<FormTab>}
     */
    const previous$ = computed(() => {
      return _.findLast(visible$.value, (tab) => {
        return tab.index < current$.value.index && tab.visible
      })
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

      _.each(elements$.value, (element$) => {
        element$.deactivate()
      })

      _.each(tabs$.value, (tab$) => {
        tab$.deactivate()
      })

      fire('change', tab$, curr$)
    }

    /**
     * Returns a specific [tab$](reference/frontend-tab).
     *
     * @public
     * @param {object} tab key of tab in [tabs](reference/frontend-form#prop-tabs) object
     * @returns {component<FormTab>}
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

    // no export
    /**
     * 
     * 
     * @private
     */
    const assignToParent = ($parent, assignToParent) => {
      if ($parent.tabs$ !== undefined) {
        form$.value.$set($parent, 'tabs$', $this)
      }
      else {
        assignToParent($parent.$parent, assignToParent)
      }
    }

    // no export
    /**
     * 
     * 
     * @private
     */
    const removeFromParent = ($parent, removeFromParent) => {
      if ($parent.tabs$ !== undefined) {
        form$.value.$set($parent, 'tabs$', null)
      }
      else {
        removeFromParent($parent.$parent, removeFromParent)
      }
    }

    // ============== WATCHERS ==============

    watch(elements$, (newValue, oldValue) => {
      let newElements$ = _.difference(_.keys(newValue), _.keys(oldValue))

      _.each(newElements$, (newElement$) => {
        elements$.value[newElement$].deactivate()
      })
    }, { deep: false, lazy: true })

    watch(tabs, async () => {
      await nextTick()
      await nextTick()

      if (current$.value === undefined || current$.value.index === undefined) {
        first$.value.select()
      }
    }, { deep: true, lazy: true })

    // Resort tabs$Array when tabs
    // order changes or a tab is removed
    watch(tabs, (newValue) => {
      let newTabs$Array = []

      _.each(newValue, (t, name) => {
        newTabs$Array.push(tabs$Array.value[tabs$Array.value.map(t$=>normalize(t$.name)).indexOf(normalize(name))])
      })

      tabs$Array.value = newTabs$Array
    }, { flush: 'post' })

    // =============== HOOKS ================
    
    onBeforeMount(() => {
      assignToParent($this.$parent, assignToParent)
    })

    onBeforeUnmount(() => {
      removeFromParent($this.$parent, removeFromParent)
    })

    onMounted(() => {
      nextTick(() => {
        if (!_.find(tabs$.value, { active: true })) {
          first$.value.select()
        }
      })
    })

    return {
      form$,
      theme,
      tabs,
      elements$,
      tabs$Array,
      events,
      listeners,
      exists,
      classes,
      mainClass,
      components,
      tabs$,
      visible$,
      current$,
      first$,
      next$,
      previous$,
      goTo,
      select,
      tab$,
      reset,
      on,
      off,
      fire,
    }
  },
}