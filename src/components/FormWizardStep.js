import _ from 'lodash'
import BaseComponent from './../mixins/BaseComponent'
import HasEvents from './../mixins/HasEvents'
import Localized from './../mixins/Localized'
import { mergeComponentClasses } from './../utils/mergeClasses'

export default {
  name: 'FormWizardStep',
  mixins: [BaseComponent, HasEvents, Localized],
  props: {
    /**
     * Name of step within [steps](reference/frontend-form#prop-steps) object.
     */
    name: {
      type: [String, Number],
      required: true,
    },

    /**
     * Step schema within [steps](reference/frontend-form#prop-steps) object.
     */
    step: {
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
     * The [visible$](reference/frontend-wizard#prop-visible) step of formWizard$.
     */
    visible$: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      /**
       * Determines whether the step is active.
       * 
       * @type {boolean}
       * @default false
       */
      active: false,

      /**
       * Determines whether the step is disabled.
       * 
       * @type {boolean}
       * @default true
       */
      disabled: true,

      /**
       * Determines whether the step is completed.
       * 
       * @type {boolean}
       * @default false
       */
      completed: false,

      /**
       * Helper property used to store available events.
       * 
       * @private
       * @type {array}
       * @default []
       */
      events: [
        'active', 'inactive', 'complete', 'enable', 'disable',
      ]
    }
  },
  watch: {
    visible(visible) {
      // if a revealed step is earlier than the
      // current step, it should be enabled
      if (visible && this.index < this.form$.wizard$.current$.index) {
        this.enable()
      }
    },
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
          [classes.disabled]: this.disabled,
          [classes.enabled]: !this.disabled,
          [classes.completed]: this.completed,
          [classes.incompleted]: !this.completed,
          [classes.pending]: this.pending,
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
     * Determines whether the step is visible.
     * 
     * @type {boolean}
     */
    visible() {
      return this.available
    },

    /**
     * Class of step.
     * 
     * @type {string|array|object}
     */
    class() {
      return this.step.class || null
    },

    /**
     * Label of step.
     * 
     * @type {string}
     */
    label() {
      return this.step.label
    },

    /**
     * Returns the labels object of step schema.
     * 
     * @type {object}
     */
    labels() {
      return this.step.labels || {}
    },

    /**
      * Returns the buttons object of step schema.
      * 
      * @type {object}
      */
    buttons() {
      return this.step.buttons || {}
    },

    /**
      * Determines whether the step has any invalid elements.
      * 
      * @type {boolean}
      */
    invalid() {
      return _.some(this.children$, { available: true, invalid: true })   
    },

    /**
      * Determines whether the step has any pending elements.
      * 
      * @type {boolean}
      */
    pending() {
      return _.some(this.children$, { available: true, pending: true })   
    },

    /**
      * Determines whether the step has any debouncing elements.
      * 
      * @type {boolean}
      */
    debouncing() {
      return _.some(this.children$, { available: true, debouncing: true })   
    },

    /**
      * Determines whether all the elements in the step has been validated.
      * 
      * @type {boolean}
      */
    validated() {
      return !_.some(this.children$, { available: true, validated: false })
    },

    /**
      * Determines whether the step has any busy elements.
      * 
      * @type {boolean}
      */
    busy() {
      return this.pending || this.debouncing
    },

    /**
      * Determines whether the step is done (complete, validated has no invalid or pending elements).
      * 
      * @type {boolean}
      */
    done() {
      return this.completed
        && this.validated
        && !this.invalid
        && !this.pending
    },

    /**
      * Returns the components of elements within the step.
      * 
      * @type {object}
      */
    children$() {
      return _.filter(this.elements$, (element$, key) => {
        return this.step.elements.indexOf(key) !== -1
      })
    },

    /**
      * Returns the conditions of the step.
      * 
      * @type {array}
      * @default []
      */
    conditions() {
      return this.step.conditions || []
    },

    /**
      * Returns the index of step within the wizard.
      * 
      * @type {integer}
      */
    index() {
      return _.keys(this.visible$).indexOf(this.name)
    },
  },
  methods: {
    /**
     * Validate the elements within the step.
     *
     * @public
     * @returns {void}
     */
    validate() {
      // only skip validation if the elements
      // are validated and none is invalid
      if (this.validated && !this.invalid) {
        return 
      }

      _.each(this.children$, (element$) => {
        if ((!element$.validated || element$.invalid) && element$.available) {
          element$.validate()
        }
      })
    },

    /**
      * Prepares to proceed to the next step. If [validateOn](reference/frontend-form#prop-validateOn) contains 'step' it first validates any unvalidated element and wait for async validators to finish. Only continues no elements has `invalid` status.
      *
      * @public
      * @param {function} callback callback to call when the form is ready to proceed
      * @returns {void}
      */
    proceed(callback) {
      if (this.busy) {
        return this.$_waitForAsync(callback)
      }

      // prevent next only if the step has invalid
      // elements and they should be validated on step
      if (this.invalid && this.form$.$_shouldValidateOn('step')) {
        return
      }

      callback()
    },

    /**
     * Activates the step.
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
     * Enables the step.
     *
     * @public
     * @returns {void}
     */
    enable() {
      if (!this.disabled) {
        return
      }

      this.disabled = false

      this.handleEnable()
    },

    /**
     * Disables the step.
     *
     * @public
     * @returns {void}
     */
    disable() {
      if (this.disabled) {
        return
      }
      
      this.disabled = true

      this.handleDisable()
    },

    /**
     * Completes the step.
     *
     * @public
     * @returns {void}
     */
    complete() {
      if (this.completed) {
        return
      }

      this.completed = true

      this.handleComplete()
    },

    /**
     * Uncompletes the step.
     *
     * @public
     * @returns {void}
     */
    uncomplete() {
      this.completed = false
    },

    /**
     * Selects the step to become the active step.
     *
     * @public
     * @returns {void}
     */
    select() {
      if (this.disabled) {
        return
      }

      this.$emit('select', this)

      _.each(this.children$, (element$) => {
        element$.activate()
      })

      this.activate()
    },
        
    /**
      * Triggered when the step becomes active using [activate](#method-activate) method.
      *
      * @public
      * @event active
      */
    handleActive(){
      this.fire('active')
    },
        
    /**
      * Triggered when the step becomes inactive using [deactivate](#method-deactivate) method.
      *
      * @public
      * @event inactive
      */
    handleInactive(){
      this.fire('inactive')
    },
        
    /**
      * Triggered when the step becomes commpleted using [complete](#method-complete) method.
      *
      * @public
      * @event complete
      */
    handleComplete(){
      this.fire('complete')
    },
        
    /**
      * Triggered when the step becomes enabled using [enable](#method-enable) method.
      *
      * @public
      * @event enable
      */
    handleEnable(){
      this.fire('enable')
    },
        
    /**
      * Triggered when the step becomes disabled using [disable](#method-disable) method.
      *
      * @public
      * @event disable
      */
    handleDisable(){
      this.fire('disable')
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
        _.each(this.step.conditions, (condition) => {
          element$.conditions.push(condition)
        })
      })
    },

    /**
     * Set event listeners based on the step schema's {eventName} property.
     * 
     * @private
     * @returns {void}
     */
    $_initEvents() {
      _.each(this.events, (event) => {
        var listener = this.step['on' + _.upperFirst(event)]

        if (listener !== undefined) {
          this.on(event, listener)
        }
      })
    },

    /**
      * Waits for all async processes to finish, then invokes a callback.
      * 
      * @private
      * @param {function} callback the function to invoke
      * @returns {void}
      */
    $_waitForAsync(callback) {
      var unwatch = this.$watch('busy', () => {
        unwatch()
        this.proceed(callback)
      })
    },
  },
  mounted() {
    this.$_initEvents()

    // nextTick is required because elements$
    // only available after form is mounted,
    // which is later than the wizard mount
    this.$nextTick(() => {
      this.$_forwardConditions()
    })
  }
}