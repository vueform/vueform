import BaseComponent from './../mixins/BaseComponent'
import Localized from './../mixins/Localized'

export default {
  name: 'FormWizardFinish',
  mixins: [BaseComponent, Localized],
  props: {
    wizard$: {
      type: Object,
      required: true,
    },
  },
  computed: {
    visible() {
      return this.wizard$.isAtLastStep
    },
    disabled() {
      // only disable finish because of invalidity
      // if element validations are triggered on
      // change, otherwise it might occur that the
      // form has invalid fields, which values have
      // changed to valid, but still marked as invalid
      return (this.wizard$.invalid && this.form$.$_shouldValidateOn('change')) ||
            this.wizard$.busy || this.form$.submitting || this.form$.disabled
    },
    label() {
      if (this.current$ && this.current$.labels && this.current$.labels.finish) {
        return this.current$.labels.finish
      }
      
      return this.__('laraform.wizard.finish')
    },
    current$() {
      return this.wizard$.current$
    },
    visible$() {
      return this.wizard$.visible$
    },
  },
  methods: {
    finish() {
      if (this.wizard$.fire('finish') === false) {
        return
      }

      if (this.form$.$_shouldValidateOn('submit')) {
        _.each(this.visible$, (step$) => {
          step$.validate()
        })
      }

      this.wizard$.finish(() => {
        this.wizard$.submit()
      })
    },
  },

}