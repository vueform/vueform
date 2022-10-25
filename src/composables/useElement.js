import _ from 'lodash'
import { onMounted } from 'vue'
import useWatchValue from './elements/useWatchValue'
import resolveDeps from './../utils/resolveDeps'

const base = function(props, context, options = {})
{
  let deps = resolveDeps(props, context, options)

  useWatchValue(props, context, deps)

  onMounted(() => {
    deps.initMessageBag()
    deps.initValidation()
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

  useWatchValue(props, context, deps)

  onMounted(() => {
    element.initState()
    deps.initMessageBag()
    deps.initValidation()
  })

  return {
    ...deps
  }
}

const location = function(props, context, options = {})
{
  let deps = resolveDeps(props, context, options)

  onMounted(() => {
    if (deps.value.value[displayKey.value]) {
      deps.input.value.value = deps.value.value[displayKey.value]
    }
  })

  useWatchValue(props, context, deps)

  onMounted(() => {
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