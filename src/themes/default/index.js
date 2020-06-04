import Laraform from './components/Laraform'
import FormTabs from './components/FormTabs'
import FormTab from './components/FormTab'
import FormElements from './components/FormElements'
import FormButtons from './components/FormButtons'
import FormButton from './components/FormButton'
import BaseElementLayout from './components/BaseElementLayout'
import NestedElementLayout from './components/NestedElementLayout'
import ElementLabel from './components/ElementLabel'
import ElementError from './components/ElementError'

import TextElement from './components/elements/TextElement'
import ObjectElement from './components/elements/ObjectElement'
import GroupElement from './components/elements/GroupElement'
import ListElement from './components/elements/ListElement'

import columns from './utils/columns'

export default {
  components: {
    Laraform,
    FormTabs,
    FormTab,
    FormElements,
    FormButtons,
    FormButton,
    BaseElementLayout,
    NestedElementLayout,
    ElementLabel,
    ElementError,
  },
  elements: {
    TextElement,
    ObjectElement,
    GroupElement,
    ListElement,
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
    FormTabs,
    FormTab,
    FormElements,
    FormButtons,
    FormButton,
    BaseElementLayout,
    NestedElementLayout,
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