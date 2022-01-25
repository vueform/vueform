import { onMounted } from 'composition-api'
import useWatchValue from './elements/useWatchValue'

const base = function(props, context)
{
  // =============== INJECT ===============

  let deps = {}
  let options = {
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
    useWatchValue(props, context, {
      form$: deps.form$,
      value: deps.value,
      fire: deps.fire,
      dirt: deps.dirt,
      validate: deps.validate,
    })
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