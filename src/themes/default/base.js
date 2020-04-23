import BaseElementLayout from './components/BaseElementLayout'
import ElementError from './components/ElementError'
import ElementInfo from './components/ElementInfo'
import ElementLabel from './components/ElementLabel'
import ElementLabelFloating from './components/ElementLabelFloating'
import ElementLoader from './components/ElementLoader'
import FormButton from './components/FormButton'
import FormButtons from './components/FormButtons'
import FormElements from './components/FormElements'
import FormErrors from './components/FormErrors'
import FormLanguageSelector from './components/FormLanguageSelector'
import FormTab from './components/FormTab'
import FormTabs from './components/FormTabs'
import FormWizard from './components/FormWizard'
import FormWizardControls from './components/FormWizardControls'
import FormWizardFinish from './components/FormWizardFinish'
import FormWizardNext from './components/FormWizardNext'
import FormWizardPrevious from './components/FormWizardPrevious'
import FormWizardStep from './components/FormWizardStep'
import InputAddon from './components/InputAddon'
import NestedElementLayout from './components/NestedElementLayout'
import DragAndDrop from './components/elements/partials/DragAndDrop'
import FilePreview from './components/elements/partials/FilePreview'
import ImagePreview from './components/elements/partials/ImagePreview'
import MultiselectSlotNoResult from './components/elements/slots/MultiselectSlotNoResult'
import MultiselectSlotNoOptions from './components/elements/slots/MultiselectSlotNoOptions'
import MultiselectSlotOption from './components/elements/slots/MultiselectSlotOption'
import MultiselectSlotSelection from './components/elements/slots/MultiselectSlotSelection'
import MultiselectSlotTag from './components/elements/slots/MultiselectSlotTag'
import MultiselectSlotTagsSelection from './components/elements/slots/MultiselectSlotTagsSelection'
import RadiogroupSlotRadio from './components/elements/slots/RadiogroupSlotRadio'
import CheckboxgroupSlotCheckbox from './components/elements/slots/CheckboxgroupSlotCheckbox'

export default {
  classes: {
    /*
    * Form
    */

    form: 'lf-form',

    /*
    * Form Sub-Components
    */

    elementsContainer: 'row',
    formErrors: 'alert alert-danger',
    formError: '',
    formLanguageSelectors: 'nav nav-pills nav-justified form-language-selectors',
    formLanguageSelector: '',
    formLanguageSelectorActive: 'active',
    formLanguageSelectorInactive: '',
    formTabs: 'nav nav-tabs form-tabs',
    formTab: '',
    formTabActive: 'active',
    formTabInactive: '',
    formTabInvalid: 'has-error',
    formWizard: 'form-wizard',
    formWizardStep: 'wizard-step',
    formWizardStepActive: 'wizard-step-active',
    formWizardStepInactive: '',
    formWizardStepInvalid: 'wizard-step-errors',
    formWizardStepDisabled: 'wizard-step-disabled',
    formWizardStepCompleted: 'wizard-step-completed',
    formWizardStepPending: 'wizard-step-pending',
    formWizardStepLink: '',
    formWizardControls: 'form-wizard-controls',
    formWizardControlNext: 'btn btn-primary',
    formWizardControlPrevious: 'btn btn-secondary',
    formWizardControlFinish: 'btn btn-primary',
    buttonsContainer: 'buttons-container',
    button: 'btn',

    /*
    * Element Layout
    */
    elementPrefix: '',
    elementContainer: 'element-container',
    element: 'form-group',
    elementInner: 'row',
    elementGroupContainer: 'element-group',
    elementGroup: 'row',
    elementHasValue: 'has-value',
    elementHasError: 'has-danger',
    labelContainer: '',
    label: 'control-label',
    floatingLabel: 'floating-label',
    floatingLabelVisible: 'floating-label-visible',
    fieldContainer: '',
    info: 'element-info',
    tooltip: 'element-tooltip',

    /*
    * Element Fields
    */
    inputContainer: 'input-group',
    input: 'form-control',
    textarea: 'form-control',
    checkboxGroup: 'checkbox-group',
    checkboxContainer: 'checkbox',
    checkbox: '',
    checkboxLabel: '',
    radioGroup: 'radio-group',
    radioContainer: 'radio',
    radio: '',
    radioLabel: '',
    select: 'form-control',
    selectNativePlaceholder: 'native-select-placeholder',
    date: '',
    toggleText: 'toggle-text',
    trixDisabled: 'trix-disabled',
    listElementContainer: 'list-element-container',
    listElementContainerSortable: 'list-element-container-sortable',
    listAdd: 'list-add',
    listRemove: 'list-remove',
    uploaderButton: 'btn btn-light uploader-button',
    uploaderDragndrop: 'uploader-dragndrop',
    uploaderDragndropOver: 'uploader-dragndrop-over',
    uploaderDragndropIcon: 'dragndrop-icon',
    uploaderDragndropTitle: 'dragndrop-title',
    uploaderDragndropDescription: 'dragndrop-description',
    uploaderPreviews: 'previews',
    uploaderPreviewsView: 'previews-view-',
    uploaderPreviewsSortable: 'previews-sortable',
    uploaderPreview: 'preview',
    uploaderPreviewFile: 'preview-file',
    uploaderPreviewFileViewPrefix: 'preview-file-',
    uploaderPreviewImage: 'preview-image',
    uploaderPreviewImageViewPrefix: 'preview-image-',
    uploaderPreviewImagePicture: 'picture',
    uploaderPreviewImageFilename: 'filename',
    avatarPreview: 'avatar-preview',
    avatarImage: 'avatar-image',
    avatarPlaceholder: 'avatar-placeholder',
    uploaderIconRemove: 'remove',
    uploaderIconClip: 'icon-clip',
    trixDisabled: 'trix-disabled',

    /*
    * Element Sub-Components
    */
    elementLoader: 'element-loader',
    addonBefore: 'input-group-addon',
    addonAfter: 'input-group-addon',
    elementError: 'text-danger',
    fieldDescription: 'field-description',
  },
  components: {
    BaseElementLayout,
    ElementError,
    ElementInfo,
    ElementLabel,
    ElementLabelFloating,
    ElementLoader,
    FormButton,
    FormButtons,
    FormElements,
    FormErrors,
    FormLanguageSelector,
    FormTab,
    FormTabs,
    FormWizard,
    FormWizardControls,
    FormWizardFinish,
    FormWizardNext,
    FormWizardPrevious,
    FormWizardStep,
    InputAddon,
    NestedElementLayout,
    DragAndDrop,
    FilePreview,
    ImagePreview,
    MultiselectSlotNoResult,
    MultiselectSlotNoOptions,
    MultiselectSlotOption,
    MultiselectSlotSelection,
    MultiselectSlotTag,
    MultiselectSlotTagsSelection,
    RadiogroupSlotRadio,
    CheckboxgroupSlotCheckbox,
  },
  elements: {},
  grid: {},
  layouts: {}
}