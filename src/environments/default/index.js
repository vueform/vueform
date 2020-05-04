import Laraform from './components/Laraform'
import FormElements from './components/FormElements'
import BaseElementLayout from './components/BaseElementLayout'
import ElementLabel from './components/ElementLabel'
import ExportConsole from './components/ExportConsole'

import TextElement from './components/elements/TextElement'
import TextareaElement from './components/elements/TextareaElement'

export default {
  classes: {
    form: 'lf-form',

    formElements: {
      container: 'lf-row',
    },

    baseElementLayout: {
      container: 'lf-col-lg-12 lf-element',
      outerWrapper: 'lf-form-group',
      innerWrapper: 'lf-row',
      labelWrapper: 'lf-col-lg-12',
      fieldWrapper: 'lf-col-lg-12',
    },

    label: 'lf-label',

    elements: {
      text: {
        container: 'lf-text',
        input: 'lf-input'
      },
      textarea: {
        container: 'lf-textarea',
        input: 'lf-input'
      },
    }
  },
  preset: {
    gutters: {
      x: 30,
      y: 0
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
    TextElement,
    TextareaElement,
  },
}