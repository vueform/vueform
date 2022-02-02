import { inject, ref, computed, toRefs } from 'composition-api'

const base = function(props, context, dependencies)
{
  const {
    view
  } = toRefs(props)

  const componentName = context.name

  // =============== INJECT ===============

  /**
  * The name of the views for the components.
  * 
  * @type {object}
  * @private
  */
  const Views = inject('Views') || ref({})

  /**
  * The injected view.
  * 
  * @type {string}
  * @private
  */
  const ViewInject = inject('View', ref(undefined))

  // ============== COMPUTED ==============

  /**
   * The name of the view to be used for the component. If `undefined` or the view is not registered the default view will be used.
   * 
   * @type {string}
   */
  const View = computed(() => {
    if (view && view.value) {
      return view.value
    }

    if (Views.value[componentName.value]) {
      return Views.value[componentName.value]
    }

    return ViewInject.value
  })

  return {
    View,
  }
}

export default base