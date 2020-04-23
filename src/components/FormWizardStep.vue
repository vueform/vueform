<script>
  import HasConditions from './../mixins/HasConditions'
  import HasEvents from './../mixins/HasEvents'
  import Localized from './../mixins/Localized'

  export default {
    mixins: [HasConditions, HasEvents, Localized],
    inject: ['form$', 'theme', 'layout'],
  	  name: 'FormWizardStep',
    props: {
      name: [String, Number],
      step: Object,
      elements$: Object,
      visible$: Object,
    },
    data() {
      return {
        active: false,
        disabled: true,
        completed: false,
        events: [
          'active', 'inactive', 'complete', 'enable',
        ]
      }
    },
    computed: {
      visible() {
        return this.available
      },
      label() {
        return this.step.label
      },
      labels() {
        return this.step.labels || {}
      },
      buttons() {
        return this.step.buttons || {}
      },
      invalid() {
        return _.some(this.children$, { available: true, invalid: true })   
      },
      pending() {
        return _.some(this.children$, { available: true, pending: true })   
      },
      debouncing() {
        return _.some(this.children$, { available: true, debouncing: true })   
      },
      validated() {
        return !_.some(this.children$, { available: true, validated: false })
      },
      busy() {
        return this.pending || this.debouncing
      },
      done() {
        return this.completed
          && this.validated
          && !this.invalid
          && !this.pending
      },
      children$() {
        return _.filter(this.elements$, (element$, key) => {
          return this.step.elements.indexOf(key) !== -1
        })
      },
      conditions() {
        return this.step.conditions || []
      },
      index() {
        return _.keys(this.visible$).indexOf(this.name)
      },
    },
    watch: {
      visible(visible) {
        // if a revealed step is earlier than the
        // current step, it should be enabled
        if (visible && this.index < this.form$.wizard$.current$.index) {
          this.enable()
        }
      }
    },
    methods: {
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
      activate() {
        if (this.active) {
          return
        }

        this.active = true

        this.fire('active')
      },
      deactivate() {
        if (!this.active) {
          return
        }

        this.active = false

        this.fire('inactive')
      },
      enable() {
        if (!this.disabled) {
          return
        }

        this.disabled = false

        this.fire('enable')
      },
      disable() {
        this.disabled = true
      },
      complete() {
        if (this.completed) {
          return
        }

        this.completed = true

        this.fire('complete')
      },
      uncomplete() {
        this.completed = false
      },
      select() {
        if (this.disabled) {
          return
        }

        this.$emit('select', this.name)

        _.each(this.children$, (element$) => {
          element$.activate()
        })

        this.activate()
      },
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
      $_waitForAsync(callback) {
        var unwatch = this.$watch('busy', () => {
          unwatch()
          this.proceed(callback)
        })
      },
    },
    mounted() {
      // nextTick is required because elements$
      // only available after form is mounted,
      // which is later than the wizard mount
      this.$nextTick(() => {
        this.$_forwardConditions()
      })
    }
  }
</script>