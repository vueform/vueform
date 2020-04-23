import utils from './../../utils'

import baseTheme from './../default/base'

import BaseElementLayout from './components/BaseElementLayout'
import FormElements from './components/FormElements'
import FormButtons from './components/FormButtons'

export default utils.extendTheme(baseTheme, {
  components: {
    BaseElementLayout,
    FormElements,
    FormButtons,
  },
  classes: {
    form: 'laraform-bs3',
    fieldDescription: 'help-block',
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