import computedOption from './../../../utils/computedOption'
import { computed, toRefs } from 'composition-api'

export default function useOptionsTogle (props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const disabled = dependencies.disabled

  // ============== COMPUTED ==============

  /**
  * Labels to be displayed for the toggle. If `false` no labels are displayed.
  * 
  * @type {object} 
  * @default false
  */
  const labels = computedOption('labels', schema, false)
  
  /**
  * The speed of toggle animation in milliseconds.
  * 
  * @type {number} 
  * @default 300
  */
  const speed = computedOption('speed', schema, 300)

  /**
  * Whether the toggle should use CSS colors. Turns to `false` if `colors` is defined.
  * 
  * @type {boolean} 
  * @default true
  * @ignore
  */
  const cssColors = computedOption('cssColors', schema, true)

  /**
  * Dimensions of the toggle input. Default: `{ width: 50, height: 22 }`
  * 
  * @type {object} 
  * @default {...}
  */
  const dimensions = computed({
    get() {
      return Object.assign({}, {
        width: 50,
        height: 22,
      }, schema.value.dimensions || {})
    },
    set(val) {
      form$.value.$set(schema.value, 'dimensions', val)
    }
  })

  /**
  * Colors of the toggle input. Default: `{ background: '#777777', handle: '#FFFFFF' }`
  * 
  * @type {object} 
  * @default {...}
  */
  const colors = computed({
    get() {
      return Object.assign({}, {
        background: '#777777',
        handle: '#FFFFFF',
      }, schema.value.colors || {})
    },
    set(val) {
      form$.value.$set(schema.value, 'colors', val)
    }
  })

  /**
  * Default options for vue-js-toggle-button.
  * 
  * @type {object} 
  * @default {}
  * @ignore
  */
  const defaultOptions = computed(() => {
    return {
      labels: labels.value,
      speed: speed.value,
      width: dimensions.value.width,
      height: dimensions.value.height,
      color: colors.value.background,
      switchColor: colors.value.handle,
      cssColors: cssColors.value,
      disabled: disabled.value,
    }
  })

  /**
  * Additional [options](https://github.com/euvl/vue-js-toggle-button#properties) for vue-js-toggle-button.
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
    labels,
    speed,
    cssColors,
    dimensions,
    colors,
    options,
  }
}