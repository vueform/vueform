import { components, elements } from './../blank'

import LocationElement from './components/elements/LocationElement'
import FlatpickrWrapper from './components/wrappers/FlatpickrWrapper'
import TrixWrapper from './components/wrappers/TrixWrapper'

import columns from './columns'
import classes from './classes'

elements.LocationElement = LocationElement
components.FlatpickrWrapper = FlatpickrWrapper
components.TrixWrapper = TrixWrapper

export default {
  components,
  elements,
  classes,
  columns,
}

export const core = {
  components,
  elements: {},
  classes,
  columns,
}

export {
  components,
  elements,
}