import BaseComponent from './../mixins/BaseComponent'
import Localized from './../mixins/Localized'

export default {
  name: 'FormWizardPrevious',
  mixins: [BaseComponent, Localized],
  props: {
    wizard$: {
      type: Object,
      required: true,
    }
  },
  computed: {
    visible() {
      if (this.current$ && this.current$.buttons && this.current$.buttons.previous === false) {
        return false
      }

      return true
    },
    disabled() {
      return this.wizard$.isAtFirstStep
    },
    label() {
      if (this.current$ && this.current$.labels && this.current$.labels.previous) {
        return this.current$.labels.previous
      }

      return this.__('laraform.wizard.previous')
    },
    current$() {
      return this.wizard$.current$
    },
  },
  methods: {
    previous() {
      this.wizard$.previous()
    }
  },
}