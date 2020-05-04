import Laraform from './components/Laraform'
import FormElements from './components/FormElements'
import BaseElementLayout from './components/BaseElementLayout'
import ElementLabel from './components/ElementLabel'
import ExportConsole from './components/ExportConsole'

import TextElement from './components/elements/TextElement'
import TextareaElement from './components/elements/TextareaElement'

export default {
  classes: {
    form: 'laraform-bs4',

    formElements: {
      container: 'row',
    },

    baseElementLayout: {
      container: 'col-lg-12',
      outerWrapper: 'form-group',
      innerWrapper: 'row',
      labelWrapper: 'col-lg-12',
      fieldWrapper: 'col-lg-12',
    },

    label: 'control-label',

    elements: {
      text: {
        input: 'form-control'
      },
      textarea: {
        input: 'form-control'
      },
    }
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