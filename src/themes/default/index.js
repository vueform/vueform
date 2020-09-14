import Laraform from './components/Laraform'
import FormErrors from './components/FormErrors'
import FormMessages from './components/FormMessages'
import FormLanguageSelector from './components/FormLanguageSelector'
import FormLanguageSelectorTab from './components/FormLanguageSelectorTab'
import FormTabs from './components/FormTabs'
import FormTab from './components/FormTab'
import FormWizard from './components/FormWizard'
import FormWizardControls from './components/FormWizardControls'
import FormWizardFinish from './components/FormWizardFinish'
import FormWizardNext from './components/FormWizardNext'
import FormWizardPrevious from './components/FormWizardPrevious'
import FormWizardStep from './components/FormWizardStep'
import FormElements from './components/FormElements'
import FormButton from './components/FormButton'
import FormButtonAnchor from './components/FormButtonAnchor'
import FormButtonSubmit from './components/FormButtonSubmit'
import BaseElementLayout from './components/BaseElementLayout'
import NestedElementLayout from './components/NestedElementLayout'
import ElementLabelFloating from './components/ElementLabelFloating'
import ElementLabel from './components/ElementLabel'
import ElementError from './components/ElementError'
import ElementMessage from './components/ElementMessage'

import Flatpickr from './components/wrappers/Flatpickr'

import ButtonsElement from './components/elements/ButtonsElement'
import CheckboxElement from './components/elements/CheckboxElement'
import CheckboxgroupElement from './components/elements/CheckboxgroupElement'
import DateElement from './components/elements/DateElement'
import DatetimeElement from './components/elements/DatetimeElement'
import GroupElement from './components/elements/GroupElement'
import ListElement from './components/elements/ListElement'
import ObjectElement from './components/elements/ObjectElement'
import RadioElement from './components/elements/RadioElement'
import RadiogroupElement from './components/elements/RadiogroupElement'
import StaticElement from './components/elements/StaticElement'
import TextElement from './components/elements/TextElement'
import TimeElement from './components/elements/TimeElement'
import ToggleElement from './components/elements/ToggleElement'
import TTextElement from './components/elements/TTextElement'

import CheckboxgroupSlotCheckbox from './components/elements/slots/CheckboxgroupSlotCheckbox'
import RadiogroupSlotRadio from './components/elements/slots/RadiogroupSlotRadio'

import columns from './utils/columns'

export default {
  components: {
    Laraform,
    FormErrors,
    FormMessages,
    FormLanguageSelector,
    FormLanguageSelectorTab,
    FormTabs,
    FormTab,
    FormWizard,
    FormWizardControls,
    FormWizardFinish,
    FormWizardNext,
    FormWizardPrevious,
    FormWizardStep,
    FormElements,
    FormButton,
    FormButtonAnchor,
    FormButtonSubmit,
    BaseElementLayout,
    NestedElementLayout,
    ElementLabelFloating,
    ElementLabel,
    ElementError,
    ElementMessage,

    // Wrappers
    Flatpickr,

    // Element slots
    CheckboxgroupSlotCheckbox,
    RadiogroupSlotRadio,
  },
  elements: {
    ButtonsElement,
    CheckboxElement,
    CheckboxgroupElement,
    DateElement,
    DatetimeElement,
    GroupElement,
    ListElement,
    ObjectElement,
    RadioElement,
    RadiogroupElement,
    StaticElement,
    TextElement,
    TimeElement,
    ToggleElement,
    TTextElement,
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
    FormLanguageSelector,
    FormLanguageSelectorTab,
    FormTabs,
    FormTab,
    FormWizard,
    FormWizardControls,
    FormWizardFinish,
    FormWizardNext,
    FormWizardPrevious,
    FormWizardStep,
    FormElements,
    FormButton,
    FormButtonAnchor,
    FormButtonSubmit,
    BaseElementLayout,
    NestedElementLayout,
    ElementLabelFloating,
    ElementLabel,
    ElementError,

    // Wrappers
    Flatpickr,

    // Element slots
    CheckboxgroupSlotCheckbox,
    RadiogroupSlotRadio,
  },
  elements: {
    
  },
  classes: {
    
  }
}

export {
  TextElement,
}