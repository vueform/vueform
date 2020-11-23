import computedOption from './../../../utils/computedOption'
import { computed, toRefs } from 'composition-api'

export default function (props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============
  
  const disabled = dependencies.disabled

  // ============== COMPUTED ==============

  const min = computedOption('min', schema, 0)

  const max = computedOption('max', schema, 100)

  /**
  * Default options for vue-js-toggle-button.
  * 
  * @type {object} 
  * @default {}
  * @ignore
  */
  const defaultOptions = computed(() => {
    return {
      min: min.value,
      max: max.value,
      disabled: disabled.value,
    }
  })

  /**
  * Additional [options](https://nightcatsama.github.io/vue-slider-component/#/api/props) for slider.
  * 
  * @type {object} 
  * @default {}
  */
  const options = computed({
    get() {
      return Object.assign({}, defaultOptions.value, schema.value.options || {})
    },
    set(val) {
      form$.value.$set(schema.value, 'options', val)
    }
  })

  return {
    min,
    max,
    options,
  }
}