import Laraform from './templates/Laraform'
import FormErrors from './templates/FormErrors'
import FormMessages from './templates/FormMessages'
import FormLanguages from './templates/FormLanguages'
import FormLanguage from './templates/FormLanguage'
import FormTabs from './templates/FormTabs'
import FormTab from './templates/FormTab'
import FormSteps from './templates/FormSteps'
import FormStepsControls from './templates/FormStepsControls'
import FormStepsControl from './templates/FormStepsControl'
import FormStep from './templates/FormStep'
import FormElements from './templates/FormElements'
import ElementLayout from './templates/ElementLayout'
import ElementLayoutInline from './templates/ElementLayoutInline'
import ElementLoader from './templates/ElementLoader'
import ElementLabelFloating from './templates/ElementLabelFloating'
import ElementLabel from './templates/ElementLabel'
import ElementInfo from './templates/ElementInfo'
import ElementDescription from './templates/ElementDescription'
import ElementError from './templates/ElementError'
import ElementMessage from './templates/ElementMessage'
import ElementText from './templates/ElementText'
import DragAndDrop from './templates/DragAndDrop'
import ElementAddon from './templates/ElementAddon'

import DatepickerWrapper from './templates/wrappers/DatepickerWrapper'
import EditorWrapper from './templates/wrappers/EditorWrapper'

import AddressElement from './templates/elements/AddressElement'
import ButtonElement from './templates/elements/ButtonElement'
import CheckboxElement from './templates/elements/CheckboxElement'
import CheckboxgroupElement from './templates/elements/CheckboxgroupElement'
import DateElement from './templates/elements/DateElement'
import DatesElement from './templates/elements/DatesElement'
import FileElement from './templates/elements/FileElement'
import GroupElement from './templates/elements/GroupElement'
import HiddenElement from './templates/elements/HiddenElement'
import ListElement from './templates/elements/ListElement'
import LocationElement from './templates/elements/LocationElement'
import MultifileElement from './templates/elements/MultifileElement'
import MultiselectElement from './templates/elements/MultiselectElement'
import ObjectElement from './templates/elements/ObjectElement'
import RadioElement from './templates/elements/RadioElement'
import RadiogroupElement from './templates/elements/RadiogroupElement'
import SelectElement from './templates/elements/SelectElement'
import SliderElement from './templates/elements/SliderElement'
import StaticElement from './templates/elements/StaticElement'
import TagsElement from './templates/elements/TagsElement'
import TextareaElement from './templates/elements/TextareaElement'
import TextElement from './templates/elements/TextElement'
import ToggleElement from './templates/elements/ToggleElement'
import EditorElement from './templates/elements/EditorElement'
import TTextareaElement from './templates/elements/TTextareaElement'
import TTextElement from './templates/elements/TTextElement'
import TEditorElement from './templates/elements/TEditorElement'

import CheckboxgroupCheckbox from './templates/elements/partials/CheckboxgroupCheckbox'
import FilePreview from './templates/elements/partials/FilePreview'
import ImagePreview from './templates/elements/partials/ImagePreview'
import GalleryPreview from './templates/elements/partials/GalleryPreview'
import RadiogroupRadio from './templates/elements/partials/RadiogroupRadio'

import columns from './columns'
import classes from './classes'

const templates = {
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
  DatepickerWrapper,
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
  templates,
  classes,
  columns,
}

export const core = {
  templates,
  classes,
  columns,
}

export {
  templates,
}