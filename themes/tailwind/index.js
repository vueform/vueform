/**
 * =========
 * Templates
 * =========
 */
import Vueform from './../blank/templates/Vueform.vue'
import FormErrors from './../blank/templates/FormErrors.vue'
import FormMessages from './../blank/templates/FormMessages.vue'
import FormLanguages from './../blank/templates/FormLanguages.vue'
import FormLanguage from './../blank/templates/FormLanguage.vue'
import FormTabs from './../blank/templates/FormTabs.vue'
import FormTab from './../blank/templates/FormTab.vue'
import FormSteps from './../blank/templates/FormSteps.vue'
import FormStepsControls from './../blank/templates/FormStepsControls.vue'
import FormStepsControl from './../blank/templates/FormStepsControl.vue'
import FormStep from './../blank/templates/FormStep.vue'
import FormElements from './../blank/templates/FormElements.vue'
import ElementLayout from './../blank/templates/ElementLayout.vue'
import ElementLayoutInline from './../blank/templates/ElementLayoutInline.vue'
import ElementLoader from './../blank/templates/ElementLoader.vue'
import ElementLabelFloating from './../blank/templates/ElementLabelFloating.vue'
import ElementLabel from './../blank/templates/ElementLabel.vue'
import ElementInfo from './../blank/templates/ElementInfo.vue'
import ElementDescription from './../blank/templates/ElementDescription.vue'
import ElementError from './../blank/templates/ElementError.vue'
import ElementMessage from './../blank/templates/ElementMessage.vue'
import ElementText from './../blank/templates/ElementText.vue'
import ElementAddon from './../blank/templates/ElementAddon.vue'

import ButtonElement from './../blank/templates/elements/ButtonElement.vue'
import CheckboxElement from './../blank/templates/elements/CheckboxElement.vue'
import CheckboxgroupElement from './../blank/templates/elements/CheckboxgroupElement.vue'
import CheckboxgroupElement_blocks from './../blank/templates/elements/CheckboxgroupElement.vue'
import CheckboxgroupElement_tabs from './../blank/templates/elements/CheckboxgroupElement.vue'
import DateElement from './../blank/templates/elements/DateElement.vue'
import DatesElement from './../blank/templates/elements/DatesElement.vue'
import FileElement from './../blank/templates/elements/FileElement.vue'
import GroupElement from './../blank/templates/elements/GroupElement.vue'
import HiddenElement from './../blank/templates/elements/HiddenElement.vue'
import ListElement from './../blank/templates/elements/ListElement.vue'
import LocationElement from './templates/elements/LocationElement.vue'
import MultifileElement from './../blank/templates/elements/MultifileElement.vue'
import MultiselectElement from './../blank/templates/elements/MultiselectElement.vue'
import ObjectElement from './../blank/templates/elements/ObjectElement.vue'
import RadioElement from './../blank/templates/elements/RadioElement.vue'
import RadiogroupElement from './../blank/templates/elements/RadiogroupElement.vue'
import RadiogroupElement_blocks from './../blank/templates/elements/RadiogroupElement.vue'
import RadiogroupElement_tabs from './../blank/templates/elements/RadiogroupElement.vue'
import SelectElement from './../blank/templates/elements/SelectElement.vue'
import SliderElement from './../blank/templates/elements/SliderElement.vue'
import StaticElement from './../blank/templates/elements/StaticElement.vue'
import TagsElement from './../blank/templates/elements/TagsElement.vue'
import TextareaElement from './../blank/templates/elements/TextareaElement.vue'
import TextElement from './../blank/templates/elements/TextElement.vue'
import ToggleElement from './../blank/templates/elements/ToggleElement.vue'
import EditorElement from './../blank/templates/elements/EditorElement.vue'
import TTextareaElement from './../blank/templates/elements/TTextareaElement.vue'
import TTextElement from './../blank/templates/elements/TTextElement.vue'
import TEditorElement from './../blank/templates/elements/TEditorElement.vue'

import CheckboxgroupCheckbox from './../blank/templates/elements/partials/CheckboxgroupCheckbox.vue'
import CheckboxgroupCheckbox_tabs from './../blank/templates/elements/partials/CheckboxgroupCheckbox_tabs.vue'
import CheckboxgroupCheckbox_blocks from './../blank/templates/elements/partials/CheckboxgroupCheckbox_blocks.vue'
import DragAndDrop from './../blank/templates/elements/partials/DragAndDrop.vue'
import FilePreview from './../blank/templates/elements/partials/FilePreview.vue'
import FilePreview_image from './../blank/templates/elements/partials/FilePreview_image.vue'
import FilePreview_gallery from './../blank/templates/elements/partials/FilePreview_gallery.vue'
import RadiogroupRadio from './../blank/templates/elements/partials/RadiogroupRadio.vue'
import RadiogroupRadio_tabs from './../blank/templates/elements/partials/RadiogroupRadio_tabs.vue'
import RadiogroupRadio_blocks from './../blank/templates/elements/partials/RadiogroupRadio_blocks.vue'

import DatepickerWrapper from './templates/wrappers/DatepickerWrapper.vue'
import EditorWrapper from './templates/wrappers/EditorWrapper.vue'

import columns from './columns'
import classes from './classes'

const theme = {
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
    ElementText,
    ElementAddon,

    ButtonElement,
    CheckboxElement,
    CheckboxgroupElement,
    CheckboxgroupElement_tabs,
    CheckboxgroupElement_blocks,
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
    RadiogroupElement_tabs,
    RadiogroupElement_blocks,
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
}

export default theme

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
  ElementText,
  ElementAddon,

  ButtonElement,
  CheckboxElement,
  CheckboxgroupElement,
  CheckboxgroupElement_tabs,
  CheckboxgroupElement_blocks,
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
  RadiogroupElement_tabs,
  RadiogroupElement_blocks,
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
}

const prefixer = function (classes, prefix) {
  let prefixedClasses = {}

  const prefixClass = (class_) => {
    let res

    try {
      res = class_.split(' ').map((c) => {
        if (c.match(/:/)) {
          return c.replace(':', `:${prefix}`)
        }
        if (c.match(/!/)) {
          return c.replace('!', `!${prefix}`)
        }
        
        return (c.length ? `${prefix}${c}` : c)
      }).join(' ')
    } catch (e) {
      console.error('Couldn\'t prefix class: ', class_, e)
    }

    return res
  } 

  for (const componentName in classes) {
    if (classes.hasOwnProperty(componentName)) {
      prefixedClasses[componentName] = {};

      for (const className in classes[componentName]) {
        if (classes[componentName].hasOwnProperty(className)) {
          const class_ = classes[componentName][className];
          
          if (typeof class_ === 'object' && !Array.isArray(class_)) {
            prefixedClasses[componentName][className] = {};

            for (const subclassName in class_) {
              if (class_.hasOwnProperty(subclassName)) {
                const subclass = class_[subclassName];
                if (typeof subclass !== 'function') {
                  prefixedClasses[componentName][className][subclassName] = prefixClass(subclass);
                } else {
                  prefixedClasses[componentName][className][subclassName] = subclass;
                }
              }
            }
          } else if (typeof class_ !== 'function') {
            prefixedClasses[componentName][className] = prefixClass(class_);
          } else {
            prefixedClasses[componentName][className] = class_;
          }
        }
      }
    }
  }

  return prefixedClasses
}

const prefix = function (prefix) {
  return Object.assign({}, theme, {
    classes: prefixer(classes, prefix),
    columns: (breakpoint, size) => {
      return columns(breakpoint, size, prefix)
    }
  })
}

export {
  prefixer,
  prefix,
}