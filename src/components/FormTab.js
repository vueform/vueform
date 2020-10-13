// @todo: check required schema (eg. `elements` property) here and everywhere
import { computed, ref, toRefs } from 'composition-api'
import useFormComponent from './../composables/useFormComponent'
import useConditions from './../composables/useConditions'
import HasEvents from './../mixins/HasEvents'
import HasLabel from './../mixins/HasLabel'
import { mergeComponentClasses } from './../utils/mergeClasses'

export default {
  mixins: [HasEvents, HasLabel],
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
    const { tab, elements$ } = toRefs(props)
    const { containers } = toRefs(context.data)

    // ============ DEPENDENCIES ============

    const { form$, theme, classes, components, mainClass } = useFormComponent(props, context)
    const { available, conditions } = useConditions(props, context, { form$, descriptor: tab })

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

    return {
      // Inject
      form$,
      theme,

      // Data
      active,

      // Computed
      children$,
      visible,
      invalid,
      classes: updatedClasses,
      components,
      conditions,
      available,
    }
  },
  data() {
    return {
      /**
       * Helper property used to store available events.
       * 
       * @private
       * @type {array}
       * @default []
       */
      events: [
        'active', 'inactive',
      ],
    }
  },
  watch: {
    children$: {
      handler() {
        if (!this.active) {
          return
        } 

        _.each(this.children$, (element$) => {
          element$.activate()
        })
      },
      deep: false,
      immediate: false,
    }
  },
  computed: {

    /**
      * Returns the index of tab.
      * 
      * @type {integer}
      */
    index() {
      return _.keys(this.visible$).indexOf(this.name)
    },

    tab$() {
      return this
    },

    descriptor() {
      return this.tab
    }
  },
  methods: {

    /**
     * Selects the tab to become the active tab.
     *
     * @public
     * @returns {void}
     */
    select() {
      if (this.active) {
        return
      }

      this.$emit('select', this)

      _.each(this.children$, (element$) => {
        element$.activate()
      })

      this.activate()
    },

    /**
     * Activates the tab.
     *
     * @public
     * @returns {void}
     */
    activate() {
      if (this.active) {
        return
      }

      this.active = true

      this.handleActive()
    },

    /**
     * Deactivates the step.
     *
     * @public
     * @returns {void}
     */
    deactivate() {
      if (!this.active) {
        return
      }

      this.active = false

      this.handleInactive()
    },
        
    /**
     * Triggered when the tab becomes active using [activate](#method-activate) or [select](#method-select) method.
     *
     * @public
     * @event active
     */
    handleActive(){
      this.fire('active')
    },
        
    /**
     * Triggered when the tab becomes active using [inactivate](#method-activate) on the current or [select](#method-select) method for an other tab.
     *
     * @public
     * @event inactive
     */
    handleInactive(){
      this.fire('inactive')
    },

    /**
     * Apply conditions of the step to the elements within.
     * 
     * @private
     * @returns {void}
     */
    $_forwardConditions() {
      if (this.conditions.length == 0) {
        return
      }

      _.each(this.children$, (element$) => {
        _.each(this.tab.conditions, (condition) => {
          element$.conditions.push(condition)
        })
      })
    },

    /**
     * Set event listeners based on the tab schema's {eventName} property.
     * 
     * @private
     * @returns {void}
     */
    $_initEvents() {
      _.each(this.events, (event) => {
        var listener = this.tab['on' + _.upperFirst(event)]

        if (listener !== undefined) {
          this.on(event, listener)
        }
      })
    },
  },
  mounted() {
    this.$_initEvents()

    // nextTick is required because elements$
    // only available after form is mounted,
    // which is later than the tab mount
    this.$nextTick(() => {
      this.$_forwardConditions()
    })
  },
}