import _ from 'lodash'
import { ref, computed, toRefs, watch, onMounted, onBeforeMount, onBeforeUnmount, onBeforeUpdate, nextTick, getCurrentInstance } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'
import useEvents from './../composables/useEvents'
import normalize from './../utils/normalize'

export default {
  name: 'FormTabs',
  emits: ['select'],
  setup(props, context)
  {  
    const $this = getCurrentInstance().proxy

    // ============ DEPENDENCIES ============

    const {
      form$,
      $size,
      theme,
      classes,
      mainClass,
      templates,
      defaultClasses,
    } = useFormComponent(props, context)

    const {
      events,
      listeners,
      on,
      off,
      fire
    } = useEvents(props, context, { form$ }, {
      events: context.emits,
    })

    // ================ DATA ================

    /**
     * The child [`FormTab`](form-tab) components.
     * 
     * @type {array}
     * @default []
     */
    const tabs$Array = ref([])

    /**
     * Helper prop used for checking if the component exists.
     * 
     * @type {boolean}
     * @private
     */
    const exists = ref(true)

    // ============== COMPUTED ==============

    /**
     * The form elements' components.
     * 
     * @type {object}
     */
    const elements$ = computed(() => {
      return form$.value.elements$
    })

    /**
     * The object containing tabs defined in [`Vueform`](vueform#option-tabs). 
     * 
     * @type {object}
     */
    const tabs = computed(() => {
      return form$.value.options.tabs
    })

    /**
     * The child [`FormTab`](form-tab) components with indexed keys.
     * 
     * @type {object}
     */
    const tabs$ = computed(() => {
      let tabList$ = {}

      _.each(tabs$Array.value, (formTab$) => {
        tabList$[formTab$.name] = formTab$
      })

      return tabList$
    })

    /**
     * All the visible [`FormTab`](form-tab) components.
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
     * The current [`FormTab`](form-tab) component.
     * 
     * @type {component}
     */
    const current$ = computed(() => {
      var current = _.find(tabs$.value, { active: true })

      return current !== undefined ? current : {}
    })

    /**
     * The first visible [`FormTab`](form-tab) component.
     * 
     * @type {component}
     */
    const first$ = computed(() => {
      return _.find(visible$.value, (tab) => {
        return tab.visible
      })
    })

    /**
     * The next visible [`FormTab`](form-tab) component.
     * 
     * @type {component}
     */
    const next$ = computed(() => {
      return _.find(visible$.value, (tab) => {
        return tab.index > current$.value.index && tab.visible
      })
    })

    /**
     * The previous visible [`FormTab`](form-tab) component.
     * 
     * @type {component}
     */
    const previous$ = computed(() => {
      return _.findLast(visible$.value, (tab) => {
        return tab.index < current$.value.index && tab.visible
      })
    })

    // =============== METHODS ==============

    /**
     * Go to a tab.
     *
     * @param {object} index* index of tab to go to
     * @returns {void}
     */
    const goTo = (index) => {
      let tab$ = visible$.value[index]
      
      tab$.select()
    }

    /**
     * Select a tab.
     *
     * @param {component} tab$ the [`FormTab`](form-tab) component to select
     * @returns {void}
     * @private
     */
    const select = (tab$) => {
      let curr$ = current$.value

      _.each(elements$.value, (element$) => {
        element$.deactivate()
      })

      _.each(tabs$.value, (tab$) => {
        tab$.deactivate()
      })

      fire('select', tab$, curr$)
    }

    /**
     * Returns a specific [`FormTab`](form-tab) by index.
     *
     * @param {object} index* index of the tab
     * @returns {component}
     */
    const tab$ = (tab) => {
      return _.find(tabs$.value, { name: tab })
    }

    /**
     * Jump back to the first visible tab.
     *
     * @returns {void}
     */
    const reset = () => {
      first$.value.select()
    }

    /**
     * Set the component to the parent as if `refs` were used.
     * 
     * @param {component} $parent parent component
     * @param {function} assignToParent the assignToParent function for recursion
     * @returns {void}
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

    /**
    * Removes the component from the parent.
    * 
    * @param {component} $parent parent component
    * @param {function} removeFromParent the removeFromParent function for recursion
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
      $size,
      theme,
      tabs,
      elements$,
      tabs$Array,
      events,
      listeners,
      exists,
      classes,
      mainClass,
      defaultClasses,
      templates,
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