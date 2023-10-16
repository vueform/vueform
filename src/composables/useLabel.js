import { computed, ref, inject } from 'vue'
import isVueComponent from './../utils/isVueComponent'
import localize from './../utils/localize'

const base = function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const labelDefinition = dependencies.labelDefinition
  const component$ = dependencies.component$ || ref(null)

  // =============== INJECT ===============

  const form$ = inject('form$')
  const config$ = inject('config$')

  // ============== COMPUTED ==============
  
  /**
  * The label definition of the component.
  * 
  * @type {string|function|Component}
  * @private
  */
  const baseLabel = computed(() => {
    return labelDefinition.value
  })

  /**
  * Whether the label is provided as a function.
  * 
  * @type {boolean}
  * @private
  */
  const isLabelFunction = computed(() => {
    return typeof baseLabel.value === 'function' && (!baseLabel.value.prototype || !baseLabel.value.prototype.constructor || (baseLabel.value.prototype.constructor && baseLabel.value.prototype.constructor.name !== 'VueComponent'))
  })

  /**
  * Whether label is provided as a Vue component.
  * 
  * @type {boolean}
  * @private
  */
  const isLabelComponent = computed(() => {
    return isVueComponent(baseLabel.value)
  })
  
  /**
  * The label of the component.
  * 
  * @type {string|Component}
  */
  const label = computed(() => {
    let label = isLabelFunction.value ? baseLabel.value(component$.value) : baseLabel.value || null

    if (!isLabelComponent.value) {
      label = localize(label, config$.value, form$.value)
    }

    return label
  })

  return {
    label,
    isLabelComponent,
  }
}

export default base