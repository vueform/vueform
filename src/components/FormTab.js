// @todo: check required schema (eg. `elements` property) here and everywhere

import HasEvents from './../mixins/HasEvents'
import Localized from './../mixins/Localized'
import BaseComponent from './../mixins/BaseComponent'
import { mergeComponentClasses } from './../utils/mergeClasses'

export default {
  mixins: [BaseComponent, HasEvents, Localized],
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
  computed: {
    classes() {
      let classes = this.mergedClasses

      classes = mergeComponentClasses(classes, {
        [this.containers.state]: {
          [classes.active]: this.active,
          [classes.inactive]: !this.active,
          [classes.valid]: this.valid,
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
     * Label of tab.
     * 
     * @type {string}
     */
    label() {
      return this.tab.label
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
  },
  methods: {

    /**
     * Selects the tab to become the active tab.
     *
     * @public
     * @returns {void}
     */
    select() {
      this.$emit('select', this.name)

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

      this.fire('active')
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

      this.fire('inactive')
    },
        
    /**
     * Triggered when the tab becomes active using [activate](#method-activate) or [select](#method-select) method.
     *
     * @public
     * @prevents 
     * @event active
     */
    handleActive(){},
        
    /**
     * Triggered when the tab becomes active using [inactivate](#method-activate) on the current or [select](#method-select) method for an other tab.
     *
     * @public
     * @prevents 
     * @event inactive
     */
    handleInactive(){},

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
      _.each(this.events, (func, event) => {
        if (this.tab[event] !== undefined) {
          this.$set(this.events, event, this.tab[event])
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