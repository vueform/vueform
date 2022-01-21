import { inject, ref, computed, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const {
    view
  } = toRefs(props)

  const componentName = context.name

  // =============== INJECT ===============

  /**
  * The views object.
  * 
  * @type {component}
  * @private
  */
  const Views = inject('Views') || ref({})

  /**
  * The view.
  * 
  * @type {string}
  * @private
  */
  const $viewInject = inject('View', ref(undefined))

  // ============== COMPUTED ==============

  const View = computed(() => {
    if (view && view.value) {
      return view.value
    }

    if (Views.value[componentName.value]) {
      return Views.value[componentName.value]
    }

    return $viewInject.value
  })

  return {
    View,
  }
}

export default base