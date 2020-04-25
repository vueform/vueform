import FormElements from './components/FormElements'
import BaseElementLayout from './components/BaseElementLayout'
import ElementLabel from './components/ElementLabel'
import ExportConsole from './components/ExportConsole'

import TextElement from './components/elements/TextElement'
import TextareaElement from './components/elements/TextareaElement'

export default {
  classes: {
    form: 'lf-form',
  },
  components: {
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