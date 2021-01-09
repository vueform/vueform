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
import FormButtonSubmit from './components/FormButtonSubmit'
import FormButtonAnchor from './components/FormButtonAnchor'
import ElementLayout from './components/ElementLayout'
import ElementLabelFloating from './components/ElementLabelFloating'
import ElementLabel from './components/ElementLabel'
import ElementInfo from './components/ElementInfo'
import ElementDescription from './components/ElementDescription'
import ElementError from './components/ElementError'
import ElementMessage from './components/ElementMessage'
import ElementText from './components/ElementText'
import DragAndDrop from './components/DragAndDrop'
import InputAddon from './components/InputAddon'

import Flatpickr from './components/wrappers/Flatpickr'
import Trix from './components/wrappers/Trix'

import AddressElement from './components/elements/AddressElement'
import ButtonElement from './components/elements/ButtonElement'
import ButtonsElement from './components/elements/ButtonsElement'
import CheckboxElement from './components/elements/CheckboxElement'
import CheckboxgroupElement from './components/elements/CheckboxgroupElement'
import DateElement from './components/elements/DateElement'
import DatesElement from './components/elements/DatesElement'
import DatetimeElement from './components/elements/DatetimeElement'
import FileElement from './components/elements/FileElement'
import GalleryElement from './components/elements/GalleryElement'
import GroupElement from './components/elements/GroupElement'
import HiddenElement from './components/elements/HiddenElement'
import ImageElement from './components/elements/ImageElement'
import KeyElement from './components/elements/KeyElement'
import ListElement from './components/elements/ListElement'
import LocationElement from './components/elements/LocationElement'
import MetaElement from './components/elements/MetaElement'
import MultifileElement from './components/elements/MultifileElement'
import MultiselectElement from './components/elements/MultiselectElement'
import ObjectElement from './components/elements/ObjectElement'
import PasswordElement from './components/elements/PasswordElement'
import RadioElement from './components/elements/RadioElement'
import RadiogroupElement from './components/elements/RadiogroupElement'
import SelectElement from './components/elements/SelectElement'
import SliderElement from './components/elements/SliderElement'
import StaticElement from './components/elements/StaticElement'
import TagsElement from './components/elements/TagsElement'
import TextareaElement from './components/elements/TextareaElement'
import TextElement from './components/elements/TextElement'
import TimeElement from './components/elements/TimeElement'
import ToggleElement from './components/elements/ToggleElement'
import TrixElement from './components/elements/TrixElement'
import TTextareaElement from './components/elements/TTextareaElement'
import TTextElement from './components/elements/TTextElement'
import TTrixElement from './components/elements/TTrixElement'

import CheckboxgroupSlotCheckbox from './components/elements/slots/CheckboxgroupSlotCheckbox'
import FileSlotProgress from './components/elements/slots/FileSlotProgress'
import FileSlotPreview from './components/elements/slots/FileSlotPreview'
import ImageSlotPreview from './components/elements/slots/ImageSlotPreview'
import MultiselectSlotNoOptions from './components/elements/slots/MultiselectSlotNoOptions'
import MultiselectSlotNoResults from './components/elements/slots/MultiselectSlotNoResults'
import MultiselectSlotOption from './components/elements/slots/MultiselectSlotOption'
import MultiselectSlotMultipleLabel from './components/elements/slots/MultiselectSlotMultipleLabel'
import MultiselectSlotSingleLabel from './components/elements/slots/MultiselectSlotSingleLabel'
import MultiselectSlotTag from './components/elements/slots/MultiselectSlotTag'
import RadiogroupSlotRadio from './components/elements/slots/RadiogroupSlotRadio'

import columns from './utils/columns'

const components = {
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
  FormButtonSubmit,
  FormButtonAnchor,
  ElementLayout,
  ElementLabelFloating,
  ElementLabel,
  ElementInfo,
  ElementDescription,
  ElementError,
  ElementMessage,
  ElementText,
  DragAndDrop,
  InputAddon,

  // Wrappers
  Flatpickr,
  Trix,

  // Element slots
  CheckboxgroupSlotCheckbox,
  FileSlotProgress,
  FileSlotPreview,
  ImageSlotPreview,
  MultiselectSlotNoOptions,
  MultiselectSlotNoResults,
  MultiselectSlotOption,
  MultiselectSlotMultipleLabel,
  MultiselectSlotSingleLabel,
  MultiselectSlotTag,
  RadiogroupSlotRadio,
}

export default {
  components,
  elements: {
    AddressElement,
    ButtonElement,
    ButtonsElement,
    CheckboxElement,
    CheckboxgroupElement,
    DateElement,
    DatesElement,
    DatetimeElement,
    FileElement,
    GroupElement,
    GalleryElement,
    HiddenElement,
    ImageElement,
    KeyElement,
    ListElement,
    LocationElement,
    MetaElement,
    MultifileElement,
    MultiselectElement,
    ObjectElement,
    PasswordElement,
    RadioElement,
    RadiogroupElement,
    SelectElement,
    SliderElement,
    StaticElement,
    TagsElement,
    TextareaElement,
    TextElement,
    TimeElement,
    ToggleElement,
    TrixElement,
    TTextareaElement,
    TTextElement,
    TTrixElement,
  },
  classes: {
  },
  utils: {
    columns,
  },
}

export const core = {
  components,
  elements: {},
  classes: {}
}

export {
  TextElement,
}