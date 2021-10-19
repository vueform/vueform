import { components } from './../blank'

import LocationElement from './components/elements/LocationElement'
import FlatpickrWrapper from './components/wrappers/FlatpickrWrapper'
import TrixWrapper from './components/wrappers/TrixWrapper'

import columns from './columns'
import classes from './classes'

components.FlatpickrWrapper = FlatpickrWrapper
components.TrixWrapper = TrixWrapper
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