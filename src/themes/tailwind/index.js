import { components } from './../blank'

import LocationElement from './components/elements/LocationElement'
import DatepickerWrapper from './components/wrappers/DatepickerWrapper'
import EditorWrapper from './components/wrappers/EditorWrapper'

import columns from './columns'
import classes from './classes'

components.DatepickerWrapper = DatepickerWrapper
components.EditorWrapper = EditorWrapper
components.LocationElement = LocationElement

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