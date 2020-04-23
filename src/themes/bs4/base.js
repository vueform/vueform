import utils from './../../utils'

import baseTheme from './../default/base'

import BaseElementLayout from './components/BaseElementLayout'
import FormElements from './components/FormElements'
import FormButtons from './components/FormButtons'

import FormLanguageSelector from './components/FormLanguageSelector'
import FormTab from './components/FormTab'
import InputAddon from './components/InputAddon'

export default utils.extendTheme(baseTheme, {
  classes: {
    form: 'laraform-bs4',
    formTabContainer: 'nav-item',
    formTab: 'nav-link',
    formLanguageSelectorContainer: 'nav-item',
    formLanguageSelector: 'nav-link',

    checkboxContainer: 'checkbox form-check',
    checkbox: 'form-check-input',
    checkboxLabel: 'form-check-label',
    radioContainer: 'checkbox form-check',
    radio: 'form-check-input',
    radioLabel: 'form-check-label',

    addonBefore: 'input-group-prepend',
    addonAfter: 'input-group-append',
    addonInner: 'input-group-text',
    fieldDescription: 'form-text text-muted',
  },
  components: {
    FormLanguageSelector,
    FormTab,
    InputAddon,
    BaseElementLayout,
    FormElements,
    FormButtons,
  },
  grid: {
    columns: 12,
    defaultBreakpoint: 'sm',
    column: 'col-:breakpoint-:size',
  },
  layouts: {
    inline: 'form-inline',
    horizontal: 'form-horizontal'
  }
})