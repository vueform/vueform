import Laraform from './components/Laraform'
import FormErrors from './components/FormErrors'
import FormMessages from './components/FormMessages'
import FormLanguages from './components/FormLanguages'
import FormLanguage from './components/FormLanguage'
import FormTabs from './components/FormTabs'
import FormTab from './components/FormTab'
import FormSteps from './components/FormSteps'
import FormStepsControls from './components/FormStepsControls'
import FormStepsControl from './components/FormStepsControl'
import FormStep from './components/FormStep'
import FormElements from './components/FormElements'
import ElementLayout from './components/ElementLayout'
import ElementLayoutInline from './components/ElementLayoutInline'
import ElementLoader from './components/ElementLoader'
import ElementLabelFloating from './components/ElementLabelFloating'
import ElementLabel from './components/ElementLabel'
import ElementInfo from './components/ElementInfo'
import ElementDescription from './components/ElementDescription'
import ElementError from './components/ElementError'
import ElementMessage from './components/ElementMessage'
import ElementText from './components/ElementText'
import DragAndDrop from './components/DragAndDrop'
import ElementAddon from './components/ElementAddon'

import FlatpickrWrapper from './components/wrappers/FlatpickrWrapper'
import EditorWrapper from './components/wrappers/EditorWrapper'

import AddressElement from './components/elements/AddressElement'
import ButtonElement from './components/elements/ButtonElement'
import CheckboxElement from './components/elements/CheckboxElement'
import CheckboxgroupElement from './components/elements/CheckboxgroupElement'
import DateElement from './components/elements/DateElement'
import DatesElement from './components/elements/DatesElement'
import FileElement from './components/elements/FileElement'
import GroupElement from './components/elements/GroupElement'
import HiddenElement from './components/elements/HiddenElement'
import ListElement from './components/elements/ListElement'
import LocationElement from './components/elements/LocationElement'
import MultifileElement from './components/elements/MultifileElement'
import MultiselectElement from './components/elements/MultiselectElement'
import ObjectElement from './components/elements/ObjectElement'
import RadioElement from './components/elements/RadioElement'
import RadiogroupElement from './components/elements/RadiogroupElement'
import SelectElement from './components/elements/SelectElement'
import SliderElement from './components/elements/SliderElement'
import StaticElement from './components/elements/StaticElement'
import TagsElement from './components/elements/TagsElement'
import TextareaElement from './components/elements/TextareaElement'
import TextElement from './components/elements/TextElement'
import ToggleElement from './components/elements/ToggleElement'
import EditorElement from './components/elements/EditorElement'
import TTextareaElement from './components/elements/TTextareaElement'
import TTextElement from './components/elements/TTextElement'
import TEditorElement from './components/elements/TEditorElement'

import CheckboxgroupCheckbox from './components/elements/partials/CheckboxgroupCheckbox'
import FilePreview from './components/elements/partials/FilePreview'
import ImagePreview from './components/elements/partials/ImagePreview'
import GalleryPreview from './components/elements/partials/GalleryPreview'
import RadiogroupRadio from './components/elements/partials/RadiogroupRadio'

import columns from './columns'
import classes from './classes'

const components = {
  Laraform,
  FormErrors,
  FormMessages,
  FormLanguages,
  FormLanguage,
  FormTabs,
  FormTab,
  FormSteps,
  FormStepsControls,
  FormStepsControl,
  FormStep,
  FormElements,
  ElementLayout,
  ElementLayoutInline,
  ElementLoader,
  ElementLabelFloating,
  ElementLabel,
  ElementInfo,
  ElementDescription,
  ElementError,
  ElementMessage,
  ElementText,
  DragAndDrop,
  ElementAddon,

  // Wrappers
  FlatpickrWrapper,
  EditorWrapper,

  // Element partials
  CheckboxgroupCheckbox,
  FilePreview,
  ImagePreview,
  GalleryPreview,
  RadiogroupRadio,

  AddressElement,
  ButtonElement,
  CheckboxElement,
  CheckboxgroupElement,
  DateElement,
  DatesElement,
  FileElement,
  GroupElement,
  HiddenElement,
  ListElement,
  LocationElement,
  MultifileElement,
  MultiselectElement,
  ObjectElement,
  RadioElement,
  RadiogroupElement,
  SelectElement,
  SliderElement,
  StaticElement,
  TagsElement,
  TextareaElement,
  TextElement,
  ToggleElement,
  EditorElement,
  TTextareaElement,
  TTextElement,
  TEditorElement,
}

export default {
  components,
  classes,
  columns,
}

export const core = {
  components,
  classes,
  columns,
}

export {
  components,
}