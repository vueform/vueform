import { onMounted, toRefs } from 'vue'
import resolveDeps from './../utils/resolveDeps'

const base = function(props, context, options = {})
{
  let deps = resolveDeps(props, context, options)

  onMounted(() => {
    if (deps.initWatcher) {
      deps.initWatcher()
    }

    if (deps.initMessageBag) {
      deps.initMessageBag()
    }

    if (deps.initValidation) {
      deps.initValidation()
    }
  })

  return {
    ...deps
  }
}

const static_ = function(props, context, options = {})
{
  let deps = resolveDeps(props, context, options)

  return {
    ...deps
  }
}

const multilingual = function(props, context, options = {})
{
  let deps = resolveDeps(props, context, options)

  onMounted(() => {
    deps.initWatcher()
    deps.initState()
    deps.initMessageBag()
    deps.initValidation()
  })

  return {
    ...deps
  }
}

const location = function(props, context, options = {})
{
  const { displayKey } = toRefs(props)

  let deps = resolveDeps(props, context, options)

  onMounted(() => {
    if (deps.value.value[displayKey.value]) {
      deps.input.value.value = deps.value.value[displayKey.value]
    }
  })

  onMounted(() => {
    deps.initWatcher()
    deps.initMessageBag()
    deps.initValidation()
  })

  return {
    ...deps
  }
}

export {
  static_,
  multilingual,
  location,
}

export default base