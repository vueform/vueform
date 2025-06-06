/**
 * =========
 * Templates
 * =========
 */
import Vueform from './templates/Vueform.vue'
import FormErrors from './templates/FormErrors.vue'
import FormMessages from './templates/FormMessages.vue'
import FormLanguages from './templates/FormLanguages.vue'
import FormLanguage from './templates/FormLanguage.vue'
import FormTabs from './templates/FormTabs.vue'
import FormTab from './templates/FormTab.vue'
import FormSteps from './templates/FormSteps.vue'
import FormStepsControls from './templates/FormStepsControls.vue'
import FormStepsControl from './templates/FormStepsControl.vue'
import FormStep from './templates/FormStep.vue'
import FormElements from './templates/FormElements.vue'
import ElementLayout from './templates/ElementLayout.vue'
import ElementLayoutInline from './templates/ElementLayoutInline.vue'
import ElementLoader from './templates/ElementLoader.vue'
import ElementLabelFloating from './templates/ElementLabelFloating.vue'
import ElementLabel from './templates/ElementLabel.vue'
import ElementInfo from './templates/ElementInfo.vue'
import ElementDescription from './templates/ElementDescription.vue'
import ElementError from './templates/ElementError.vue'
import ElementMessage from './templates/ElementMessage.vue'
import ElementRequired from './templates/ElementRequired.vue'
import ElementText from './templates/ElementText.vue'
import ElementAddon from './templates/ElementAddon.vue'
import ElementAddonOptions from './templates/ElementAddonOptions.vue'

import ButtonElement from './templates/elements/ButtonElement.vue'
import CaptchaElement from './templates/elements/CaptchaElement.vue'
import CheckboxElement from './templates/elements/CheckboxElement.vue'
import CheckboxgroupElement from './templates/elements/CheckboxgroupElement.vue'
import CheckboxgroupElement_tabs from './templates/elements/CheckboxgroupElement_tabs.vue'
import CheckboxgroupElement_blocks from './templates/elements/CheckboxgroupElement_blocks.vue'
import DateElement from './templates/elements/DateElement.vue'
import DatesElement from './templates/elements/DatesElement.vue'
import FileElement from './templates/elements/FileElement.vue'
import GridElement from './templates/elements/GridElement.vue'
import GroupElement from './templates/elements/GroupElement.vue'
import HiddenElement from './templates/elements/HiddenElement.vue'
import ListElement from './templates/elements/ListElement.vue'
import LocationElement from './templates/elements/LocationElement.vue'
import MatrixElement from './templates/elements/MatrixElement.vue'
import MultifileElement from './templates/elements/MultifileElement.vue'
import MultiselectElement from './templates/elements/MultiselectElement.vue'
import ObjectElement from './templates/elements/ObjectElement.vue'
import PhoneElement from './templates/elements/PhoneElement.vue'
import RadioElement from './templates/elements/RadioElement.vue'
import RadiogroupElement from './templates/elements/RadiogroupElement.vue'
import RadiogroupElement_tabs from './templates/elements/RadiogroupElement_tabs.vue'
import RadiogroupElement_blocks from './templates/elements/RadiogroupElement_blocks.vue'
import SelectElement from './templates/elements/SelectElement.vue'
import SignatureElement from './templates/elements/SignatureElement.vue'
import SliderElement from './templates/elements/SliderElement.vue'
import StaticElement from './templates/elements/StaticElement.vue'
import TagsElement from './templates/elements/TagsElement.vue'
import TextareaElement from './templates/elements/TextareaElement.vue'
import TextElement from './templates/elements/TextElement.vue'
import ToggleElement from './templates/elements/ToggleElement.vue'
import EditorElement from './templates/elements/EditorElement.vue'
import TTextareaElement from './templates/elements/TTextareaElement.vue'
import TTextElement from './templates/elements/TTextElement.vue'
import TEditorElement from './templates/elements/TEditorElement.vue'

import CheckboxgroupCheckbox from './templates/elements/partials/CheckboxgroupCheckbox.vue'
import CheckboxgroupCheckbox_tabs from './templates/elements/partials/CheckboxgroupCheckbox_tabs.vue'
import CheckboxgroupCheckbox_blocks from './templates/elements/partials/CheckboxgroupCheckbox_blocks.vue'
import DragAndDrop from './templates/elements/partials/DragAndDrop.vue'
import FilePreview from './templates/elements/partials/FilePreview.vue'
import FilePreview_image from './templates/elements/partials/FilePreview_image.vue'
import FilePreview_gallery from './templates/elements/partials/FilePreview_gallery.vue'
import RadiogroupRadio from './templates/elements/partials/RadiogroupRadio.vue'
import RadiogroupRadio_tabs from './templates/elements/partials/RadiogroupRadio_tabs.vue'
import RadiogroupRadio_blocks from './templates/elements/partials/RadiogroupRadio_blocks.vue'

import DatepickerWrapper from './templates/wrappers/DatepickerWrapper.vue'
import EditorWrapper from './templates/wrappers/EditorWrapper.vue'

import columns from './columns'
import classes from './classes'
import presets from './presets'

export default {
  templates: {
    Vueform,
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
    ElementRequired,
    ElementText,
    ElementAddon,
    ElementAddonOptions,

    ButtonElement,
    CaptchaElement,
    CheckboxElement,
    CheckboxgroupElement,
    CheckboxgroupElement_tabs,
    CheckboxgroupElement_blocks,
    DateElement,
    DatesElement,
    FileElement,
    GridElement,
    GroupElement,
    HiddenElement,
    ListElement,
    LocationElement,
    MatrixElement,
    MultifileElement,
    MultiselectElement,
    ObjectElement,
    PhoneElement,
    RadioElement,
    RadiogroupElement,
    RadiogroupElement_tabs,
    RadiogroupElement_blocks,
    SelectElement,
    SignatureElement,
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

    CheckboxgroupCheckbox,
    CheckboxgroupCheckbox_tabs,
    CheckboxgroupCheckbox_blocks,
    DragAndDrop,
    FilePreview,
    FilePreview_image,
    FilePreview_gallery,
    RadiogroupRadio,
    RadiogroupRadio_tabs,
    RadiogroupRadio_blocks,

    DatepickerWrapper,
    EditorWrapper,
  },
  classes,
  columns,
  presets,
}

export {
  Vueform,
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
  ElementRequired,
  ElementText,
  ElementAddon,
  ElementAddonOptions,

  ButtonElement,
  CaptchaElement,
  CheckboxElement,
  CheckboxgroupElement,
  CheckboxgroupElement_tabs,
  CheckboxgroupElement_blocks,
  DateElement,
  DatesElement,
  FileElement,
  GridElement,
  GroupElement,
  HiddenElement,
  ListElement,
  LocationElement,
  MatrixElement,
  MultifileElement,
  MultiselectElement,
  ObjectElement,
  PhoneElement,
  RadioElement,
  RadiogroupElement,
  RadiogroupElement_tabs,
  RadiogroupElement_blocks,
  SelectElement,
  SignatureElement,
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

  CheckboxgroupCheckbox,
  CheckboxgroupCheckbox_tabs,
  CheckboxgroupCheckbox_blocks,
  DragAndDrop,
  FilePreview,
  FilePreview_image,
  FilePreview_gallery,
  RadiogroupRadio,
  RadiogroupRadio_tabs,
  RadiogroupRadio_blocks,

  DatepickerWrapper,
  EditorWrapper,
  
  classes,
  columns,
  presets,
}