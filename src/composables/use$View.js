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
  const $views = inject('$views') || ref({})

  /**
  * The view.
  * 
  * @type {string}
  * @private
  */
  const $viewInject = inject('$view') || ref(undefined)

  // ============== COMPUTED ==============

  const $view = computed(() => {
    if (view && view.value) {
      return view.value
    }

    if ($views.value[componentName.value]) {
      return $views.value[componentName.value]
    }

    return $viewInject.value
  })

  return {
    $view,
  }
}

export default base