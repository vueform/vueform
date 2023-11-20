import each from 'lodash/each'
import find from 'lodash/find'
import findLast from 'lodash/findLast'
import difference from 'lodash/difference'
import keys from 'lodash/keys'
import { ref, computed, provide, watch, onMounted, onBeforeMount, onBeforeUnmount, nextTick, getCurrentInstance } from 'vue'
import useFormComponent from './../composables/useFormComponent'
import useEvents from './../composables/useEvents'
import normalize from './../utils/normalize'

export default {
  name: 'FormTabs',
  emits: ['select'],
  props: {
    view: {
      required: false,
      type: [String],
      default: undefined,
    },
  },
  setup(props, context)
  {
    const $this = getCurrentInstance().proxy

    // ============ DEPENDENCIES ============

    const {
      form$,
      Size,
      View,
      classesInstance,
      theme,
      classes,
      Templates,
      template,
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

      each(tabs$Array.value, (formTab$) => {
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

      each(tabs$.value, (tab$) => {
        if (tab$.visible) {
          tabList$[tab$.name] = tab$
        }
      })

      return tabList$
    })

    /**
     * The current [`FormTab`](form-tab) component.
     *
     * @type {FormTab}
     */
    const current$ = computed(() => {
      var current = find(tabs$.value, { active: true })

      return current !== undefined ? current : {}
    })

    /**
     * The first visible [`FormTab`](form-tab) component.
     *
     * @type {FormTab}
     */
    const first$ = computed(() => {
      return find(visible$.value, (tab) => {
        return tab.visible
      })
    })

    /**
     * The last visible [`FormTab`](form-tab) component.
     *
     * @type {FormTab}
     */
    const last$ = computed(() => {
      return Object.values(visible$.value).pop()
    })

    /**
     * The next visible [`FormTab`](form-tab) component.
     *
     * @type {FormTab}
     */
    const next$ = computed(() => {
      return find(visible$.value, (tab) => {
        return tab.index > current$.value.index && tab.visible
      })
    })

    /**
     * The previous visible [`FormTab`](form-tab) component.
     *
     * @type {FormTab}
     */
    const previous$ = computed(() => {
      return findLast(visible$.value, (tab) => {
        return tab.index < current$.value.index && tab.visible
      })
    })

    // =============== METHODS ==============

    /**
     * Go to a tab.
     *
     * @param {string} name* name of tab to go to
     * @returns {void}
     */
    const goTo = (name) => {
      let tab$ = visible$.value[name]
      
      tab$.select()
    }

    /**
     * Select a tab.
     *
     * @param {FormTab} tab$* the [`FormTab`](form-tab) component to select
     * @returns {void}
     * @private
     */
    const select = (tab$) => {
      let curr$ = current$.value

      each(elements$.value, (element$) => {
        element$.deactivate()
      })

      each(tabs$.value, (tab$) => {
        tab$.deactivate()
      })

      fire('select', tab$, curr$)
    }

    /**
     * Returns a specific [`FormTab`](form-tab) by index.
     *
     * @param {string} tab* name of the tab
     * @returns {FormTab}
     */
    const tab$ = (name) => {
      return find(tabs$.value, { name: name })
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
     * @param {VNode} $parent parent component
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
    * @param {VNode} $parent parent component
    * @param {function} removeFromParent the removeFromParent function for recursion
    * @private
    */
    const removeFromParent = ($parent, removeFromParent) => {
      if ($parent.tabs$ !== undefined) {
        form$.value.$set($parent, 'tabs$', null)
      }
      else {
        /* @todo:adam test later */
        removeFromParent($parent.$parent, removeFromParent)
      }
    }

    // ============== PROVIDE ===============

    provide('View', View)

    // ============== WATCHERS ==============
    
    /* istanbul ignore next: can not reproduce */
    watch(elements$, (newValue, oldValue) => {
      let newElements$ = difference(keys(newValue), keys(oldValue))
      
      each(newElements$, (newElement$) => {
        elements$.value[newElement$].deactivate()
      })
    }, { deep: false, lazy: true })

    watch(tabs, async () => {
      await nextTick()
      await nextTick()
      
      //@todo:adam we came up with change together
      if ((current$.value === undefined || current$.value.index === undefined) && first$.value) {
        first$.value.select()
      }
    }, { deep: true, lazy: true })

    // Resort tabs$Array when tabs
    // order changes or a tab is removed
    watch(tabs, (newValue) => {
      let newTabs$Array = []

      each(newValue, (t, name) => {
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
        if (!find(tabs$.value, { active: true })) {
          first$.value.select()
        }
      })
    })

    return {
      form$,
      Size,
      View,
      classesInstance,
      theme,
      tabs,
      elements$,
      tabs$Array,
      events,
      listeners,
      exists,
      classes,
      Templates,
      template,
      tabs$,
      visible$,
      current$,
      first$,
      last$,
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