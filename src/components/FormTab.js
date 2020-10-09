// @todo: check required schema (eg. `elements` property) here and everywhere

import HasEvents from './../mixins/HasEvents'
import BaseComponent from './../mixins/BaseComponent'
import HasLabel from './../mixins/HasLabel'
import { mergeComponentClasses } from './../utils/mergeClasses'

export default {
  mixins: [BaseComponent, HasEvents, HasLabel],
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
  data() {
    return {
      /**
       * Determines whether the tab is active.
       * 
       * @type {boolean}
       * @default false
       */
      active: false,

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
    classes() {
      let classes = this.mergedClasses

      classes = mergeComponentClasses(classes, {
        [this.containers.state]: {
          [classes.active]: this.active,
          [classes.inactive]: !this.active,
          [classes.valid]: !this.invalid,
          [classes.invalid]: this.invalid,
        }
      })

      // Add tabs's class to main class
      if (this.class !== null) {
        classes = mergeComponentClasses(classes, {
          [this.mainClass]: this.class
        })
      }

      return classes
    },

    /**
     * Whether the element has any unmet conditions.
     * 
     * @type boolean
     */
    available() {
      return true
    },

    /**
     * Determines whether the tab is visible.
     * 
     * @type {boolean}
     */
    visible() {
      return this.available
    },

    /**
     * Class of tab.
     * 
     * @type {string|array|object}
     */
    class() {
      return this.tab.class || null
    },

    /**
     * Determines whether the tab has any invalid elements.
     * 
     * @type {boolean}
     */
    invalid() {
      return _.some(this.children$, { available: true, invalid: true })   
    },

    /**
     * Returns the components of elements within the tab.
     * 
     * @type {object}
     */
    children$() {
      return _.filter(this.elements$, (element$, key) => {
        return this.tab.elements.indexOf(key) !== -1
      })
    },

    /**
     * Returns the conditions of the tab.
     * 
     * @type {array}
     * @default []
     */
    conditions() {
      return this.tab.conditions || []
    },

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
  }
}