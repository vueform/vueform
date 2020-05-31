import Laraform from './components/Laraform'
import FormElements from './components/FormElements'
import FormButtons from './components/FormButtons'
import FormButton from './components/FormButton'
import BaseElementLayout from './components/BaseElementLayout'
import ElementLabel from './components/ElementLabel'
import ElementError from './components/ElementError'

import TextElement from './components/elements/TextElement'

import columns from './utils/columns'

export default {
  components: {
    Laraform,
    FormElements,
    FormButtons,
    FormButton,
    BaseElementLayout,
    ElementLabel,
    ElementError,
  },
  elements: {
    TextElement,
  },
  classes: {
    
  },
  utils: {
    columns,
  },
}

export const core = {
  components: {
    Laraform,
    FormElements,
    FormButtons,
    FormButton,
    BaseElementLayout,
    ElementLabel,
    ElementError,
  },
  elements: {
    
  },
  classes: {
    
  }
}

export {
  TextElement,
}