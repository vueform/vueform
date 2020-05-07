import Laraform from './components/Laraform'
import FormElements from './components/FormElements'
import BaseElementLayout from './components/BaseElementLayout'
import ElementLabel from './components/ElementLabel'
import ExportConsole from './components/ExportConsole'

export default {
  presets: {
    input: 'form-control'
  },
  classes: {
    Laraform: {
      form: 'laraform-bs4',
    },

    FormElements: {
      container: 'row',
    },

    BaseElementLayout: {
      container: 'col-lg-12',
      outerWrapper: 'form-group',
      innerWrapper: 'row',
      labelWrapper: 'col-lg-12',
      fieldWrapper: 'col-lg-12',
    },

    ElementLabel: {
      label: 'control-label',
    },

    TextElement: {
      input: this.presets.input,
    },

  },
  components: {
    Laraform,
    FormElements,
    BaseElementLayout,
    ElementLabel,
    ExportConsole,
  },
  elements: {
  },
  breakpoints: [
    'xl', 'lg', 'md', 'sm', 'xs'
  ],
}