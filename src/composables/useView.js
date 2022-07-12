import { inject, ref, computed, toRefs } from 'vue'

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
   * The name of the resolved view for the component. This one should be used to determine the component's view in class functions.
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