import each from 'lodash-es/each'

export default function resolveDeps (props, context, options) {
  let deps = options.deps || {}
  options = {
    ...options,
    events: context.emits,
    slots: context.slots,
  }

  context.features.forEach((feature) => {
    each(feature(props, context, deps, options), (featureDep, key) => {
      deps[key] = featureDep
    })
  })

  return deps
}