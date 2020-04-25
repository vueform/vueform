import Laraform from './components/Laraform'
import FormElements from './components/FormElements'
import BaseElementLayout from './components/BaseElementLayout'
import ElementLabel from './components/ElementLabel'
import ExportConsole from './components/ExportConsole'

import TextElement from './components/elements/TextElement'
import TextareaElement from './components/elements/TextareaElement'

export default {
  classes: {
    form: 'vuetify-form',
    label: 'lf-label',
    element: 'lf-element',

    formElements: {
      container: 'lf-elements',
    },

    baseElementLayout: {
      container: 'row',
      labelWrapper: 'col-lg-3',
      fieldWrapper: 'col-lg-9',
    },
  },
  preset: {
    primary: '--brand-primary-v',
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