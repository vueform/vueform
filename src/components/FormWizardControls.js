import BaseComponent from './../mixins/BaseComponent'
import Localized from './../mixins/Localized'

export default {
  name: 'FormWizardControls',
  mixins: [BaseComponent, Localized],
  props: {
    wizard$: {
      type: Object,
      required: true,
    },
  },
}