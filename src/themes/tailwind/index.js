import { templates } from './../blank'

import LocationElement from './templates/elements/LocationElement'
import DatepickerWrapper from './templates/wrappers/DatepickerWrapper'
import EditorWrapper from './templates/wrappers/EditorWrapper'

import columns from './columns'
import classes from './classes'

templates.DatepickerWrapper = DatepickerWrapper
templates.EditorWrapper = EditorWrapper
templates.LocationElement = LocationElement

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