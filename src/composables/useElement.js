import _ from 'lodash'
import { onMounted } from 'vue'
import useWatchValue from './elements/useWatchValue'

const base = function(props, context, options_ = {})
{
  // =============== INJECT ===============

  let deps = options_.deps || {}
  let options = {
    ...options_,
    events: context.emits,
    slots: context.slots,
  }
  let features = context.features

  features.forEach((feature) => {
    _.each(feature(props, context, deps, options), (featureDep, key) => {
      deps[key] = featureDep
    })
  })

  if (context.watchValue !== false) {
    useWatchValue(props, context, deps)
  }

  if (context.initValidation !== false) {
    onMounted(() => {
      deps.initMessageBag()
      deps.initValidation()
    })
  }

  return {
    ...deps
  }
}

export default base