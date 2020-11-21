import { computed } from 'composition-api'
import useValue from './useValue'
import normalize from './../../../utils/normalize'

export default function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const isNative = dependencies.isNative
  const trackBy = dependencies.trackBy
  const items = dependencies.items
  const { previousValue, currentValue, value } = useValue(props, context, dependencies)

  // ============== COMPUTED ==============
  
  /**
   * Helper property used for tracking the field's value.
   * 
   * @type {any}
   * @ignore
   */
  const model = computed({
    get() {
      return isNative.value ? value.value : getOption(value.value)
    },
    set(val) {
      if (!_.isObject(val) && val !== null && !isNative.value) {
        throw new Error('Model "set" must be an object when using non-native type. Try `getOption` to retrieve option object.')
      }

      value.value = isNative.value || val === null ? val : val['value']
    }
  })

  /**
   * List of select options converted to an array of objects.
   * 
   * @type {array}
   */
  const selectOptions = computed(() => {
    let options = []

    _.each(items.value, (item, key) => {
      let val = key
      let label = item

      if (_.isPlainObject(item)) {
        if (item.value !== undefined) {
          val = item.value
        }

        if (item.label !== undefined) {
          label = item.label
        } else if (item[trackBy.value] !== undefined) {
          label = item[trackBy.value]
        } else {
          throw new Error('When providing an object value for SelectElement either `label` key or a key equal to `trackBy` must be present.')
        }
      }

      options.push(Object.assign({}, _.isPlainObject(item) ? item : {}, {
        value: normalize(val),
        label: label,
      }))
    })

    return options
  })

  /**
   * Retrieves the selected option.
   * 
   * @type {object}
   */
  const selectedOption = computed(() => {
    return getOption(value.value) || {}
  })

  /**
   * Retrieves the selected option's label.
   * 
   * @type {string}
   */
  const textValue = computed(() => {
    var val = getOption(value.value)

    if (val === undefined) {
      return ''
    }

    return val[trackBy.value]
  })

  // =============== METHODS ==============
  
  const getOption = (val) => {
    return _.find(selectOptions.value, { value: normalize(val) })
  }

  return {
    value,
    model,
    previousValue,
    currentValue,
    selectOptions,
    selectedOption,
    textValue,

    getOption,
  }
}