import { ref } from 'composition-api'
import HasEvents from './../mixins/HasEvents'
import useFormComponent from './../composables/useFormComponent'

export default {
  name: 'FormWizard',
  mixins: [HasEvents],
  props: {
    /**
     * Steps definition.
     */
    steps: {
      type: Object,
      required: true
    },

    /**
     * Form element components.
     */
    elements$: {
      type: Object,
      required: true
    },
  },
  init(props, context) {
    
    // ============ DEPENDENCIES ============

    const formComponent = useFormComponent(props, context)

    // // ================ DATA ================

    const wizardSteps$ = ref([])

    return {
      ...formComponent,
      wizardSteps$,
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
        'next', 'previous', 'finish', 'select',
      ]
    }
  },
  watch: {
    elements$: {
      handler(newValue, oldValue) {
        let newElements$ = _.difference(_.keys(newValue), _.keys(oldValue))

        _.each(newElements$, (newElement$) => {
          this.elements$[newElement$].deactivate()
        })
      },
      deep: false,
      immediate: false
    },
    steps: {
      handler() {
        this.$nextTick(() => {
          
          if (_.isEmpty(this.lastEnabled$)) {
            this.first$.enable()
          }

          if (_.isEmpty(this.current$)) {
            this.first$.select()
          }
        })
      },
      deep: true,
      immediate: false,
    }
  },
  computed: {
    /**
     * Object of wizardStep$ components.
     * 
     * @type {object}
     * @default {}
     */
    steps$() {
      let steps$ = {}

      _.each(this.wizardSteps$, (step$) => {
        steps$[step$.name] = step$
      })

      return steps$
    },

    /**
     * Determines whether the wizard has any pending elements.
     * 
     * @type {boolean}
     */
    pending() {
      return _.some(this.visible$, { pending: true })
    },

    /**
     * Determines whether the wizard has any debouncing elements.
     * 
     * @type {boolean}
     */
    debouncing() {
      return _.some(this.visible$, { debouncing: true })
    },

    /**
     * Determines whether the wizard has any invalid elements.
     * 
     * @type {boolean}
     */
    invalid() {
      return _.some(this.visible$, { invalid: true })
    },

    /**
     * Determines whether all the steps are completetly filled out.
     * 
     * @type {boolean}
     */
    done() {
      return !_.some(this.visible$, { done: false })
    },

    /**
     * Determines whether the wizard has any pending or debouncing elements.
     * 
     * @type {boolean}
     */
    busy() {
      return this.pending || this.debouncing
    },

    /**
     * Returns the visible [wizardStep$](reference/frontend-wizard-step) components.
     * 
     * @type {object}
     */
    visible$() {
      var steps$ = {}

      _.each(this.steps$, (step$) => {
        if (step$.visible) {
          steps$[step$.name] = step$
        }
      })

      return steps$
    },

    /**
     * Returns the first [wizardStep$](reference/frontend-wizard-step) component.
     * 
     * @type {wizardStep$}
     */
    first$() {
      return this.visible$[_.head(_.keys(this.visible$))]
    },

    /**
     * Returns the current [wizardStep$](reference/frontend-wizard-step) component.
     * 
     * @type {wizardStep$}
     */
    current$() {
      var current = _.find(this.steps$, { active: true })

      return current !== undefined ? current : {}
    },

    /**
     * Returns the next [wizardStep$](reference/frontend-wizard-step) component.
     * 
     * @type {wizardStep$}
     */
    next$() {
      return this.visible$[_.keys(this.visible$)[this.current$.index + 1]]
    },

    /**
     * Returns the previous [wizardStep$](reference/frontend-wizard-step) component.
     * 
     * @type {wizardStep$}
     */
    previous$() {
      return this.visible$[_.keys(this.visible$)[this.current$.index - 1]]
    },

    /**
     * Returns the first invalid [wizardStep$](reference/frontend-wizard-step) component.
     * 
     * @type {wizardStep$}
     */
    firstInvalid$() {
      return _.find(this.visible$, { invalid: true })
    },

    /**
     * Returns the first [wizardStep$](reference/frontend-wizard-step) component which is not done yet.
     * 
     * @type {wizardStep$}
     */
    firstNonDone$() {
      return _.find(this.visible$, { done: false })
    },

    /**
     * Returns the last enabled [wizardStep$](reference/frontend-wizard-step) component.
     * 
     * @type {wizardStep$}
     */
    lastEnabled$() {
      return _.findLast(this.visible$, { disabled: false })
    },

    /**
     * Determines whether the wizard is at the last step.
     * 
     * @type {boolean}
     */
    isAtLastStep() {
      return _.size(this.visible$) === this.current$.index + 1
    },

    /**
     * Determines whether the wizard is at the first step.
     * 
     * @type {boolean}
     */
    isAtFirstStep() {
      return this.current$.index === 0
    },
  },
  methods: {
    /**
     * Moves to a step. If it is disabled, enables it.
     *
     * @public
     * @param {object} step key of step in [wizard](reference/frontend-form#prop-wizard)
     * @param {boolean} enableUntil whether steps should be enabled before destination step (default: false)
     * @returns {void}
     */
    goTo(step, enableUntil) {
      if (enableUntil === undefined) {
        let enableUntil = false
      }

      var step = this.visible$[step]
      
      step.enable()
      step.select()

      if (enableUntil) {
        this.$nextTick(() => {
          this.$_enableUntilLastEnabled()
        })
      }
    },

    /**
     * Moves to next step and enables it.
     *
     * @public
     * @returns {void}
     */
    next() {
      if (this.handleNext(this.$next) === false) {
        return
      }

      this.next$.enable()
      this.next$.select()
    },

    /**
     * Moves to previous step.
     *
     * @public
     * @returns {void}
     */
    previous() {
      if (this.handlePrevious(this.$previous) === false) {
        return
      }

      this.previous$.select()
    },

    /**
     * Validates all elements and if everything is fine marks all steps as complete and initiates submission. If the form is invalid it will jump to the first step which has invalid elements.
     *
     * @public
     * @param {function} callback callback to call when the form is ready to submit
     * @returns {void}
     */
    finish(callback) {
      if (this.pending) {
        return this.$_waitForAsync(callback)
      }

      if (this.invalid) {
        this.firstInvalid$.select()
        return
      }

      this.complete()

      // This will never be called
      // if (!this.done) {
      //   this.firstNonDone$.select()
      //   return
      // }

      callback()
    },

    /**
     * Marks each [wizardStep$](reference/frontend-wizard-step) as complete.
     *
     * @public
     * @returns {void}
     */
    complete() {
      _.each(this.steps$, (step$) => {
        step$.complete()
      })
    },

    /**
     * Returns a specific [wizardStep$](reference/frontend-wizard-step).
     *
     * @public
     * @param {object} step key of step in [wizard](reference/frontend-form#prop-wizard)
     * @returns {wizardStep$}
     */
    step$(step) {
      return _.find(this.visible$, { name: step })
    },

    /**
     * Resets form and goes back to first step while disabling all others.
     *
     * @public
     * @returns {void}
     */
    reset() {
      _.each(this.steps$, (step$) => {
        step$.uncomplete()
        step$.disable()
      })

      this.first$.enable()
      this.first$.select()
    },

    /**
     * Enables all steps.
     *
     * @public
     * @returns {void}
     */
    enableAllSteps() {
      _.each(this.steps$, (step$) => {
        step$.enable()
      })
    },

    /**
     * Su
     *
     * @public
     * @returns {void}
     */
    submit() {
      this.$emit('submit')
    },
        
    /**
     * Triggered when moves to next step. Can prevent further execution if returns `false`.
     *
     * @public
     * @prevents 
     * @param {object} step$ the next step component
     * @event next
     */
    handleNext(step$){
      return this.fire('next', step$)
    },
        
    /**
     * Triggered when moves to previous step. Can prevent further execution if returns `false`.
     *
     * @public
     * @prevents 
     * @param {object} step$ the previous step component
     * @event previous
     */
    handlePrevious(step$){
      return this.fire('previous', step$)
    },
        
    /**
     * Triggered when finishes. Can prevent further execution if returns `false`.
     *
     * @public
     * @prevents 
     * @event finish
     */
    handleFinish(){
      return this.fire('finish')
    },

    /**
     * Triggered when a step is selected.
     *
     * @public
     * @param {object} step$ the selected step component
     * @event select
     */
    handleSelect(step$) {
      _.each(this.elements$, (element$) => {
        element$.deactivate()
      })

      _.each(this.steps$, (step$) => {
        step$.deactivate()
      })

      this.fire('select', step$)
    },

    /**
     * Enable steps until a certain index.
     * 
     * @private
     * @param {integer} index index of step
     * @returns {void}
     */
    $_enableUntil(index) {
      _.each(this.steps$, (step$) => {
        if (step$.index <= index && step$.visible) {
          step$.enable()
        }
      })
    },

    /**
     * Enable steps until current step.
     * 
     * @private
     * @returns {void}
     */
    $_enableUntilCurrent() {
      this.$_enableUntil(this.current$.index)
    },

    /**
     * Enable steps until last enabled.
     * 
     * @private
     * @returns {void}
     */
    $_enableUntilLastEnabled() {
      this.$_enableUntil(this.lastEnabled$.index)
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
        this.finish(callback)
      })
    },
  },
  mounted() {
    if (_.isEmpty(this.steps)) {
      return
    }

    // nextTick is required because elements$
    // only available after form is mounted,
    // which is later than the wizard mount
    this.$nextTick(() => {
      if (_.isEmpty(this.current$)) {
        this.first$.enable()
        this.first$.select()
      }
      
      this.$_enableUntilCurrent()
      // if new steps are shown because of
      // changing conditions the ones before
      // the last active should be enabled
      this.$watch('visible$', () => {
        this.$_enableUntilLastEnabled()
      })
    })
  }
}