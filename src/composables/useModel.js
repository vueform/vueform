import { computed, ref, toRefs,  onMounted, watch, } from 'composition-api'

export default function (props, context, dependencies)
{
  const {
    value: v,
    modelValue: mv,
  } = toRefs(props)

  const $this = dependencies.$this
  const fire = dependencies.fire

  const externalValue = context.expose !== undefined ? mv : v

  /**
   * Clone value of model container: v-model or internal data
   * 
   * @private
   */
  const model = computed(() => {
    return _.cloneDeep(externalValue.value || internalData.value)
  })

  /**
   * If v-model is defined it is always equal to that. Otherwise used as model container.
   * 
   * @private
   */
  const internalData = ref({})

  /**
   * 
   * 
   * @private
   */
  const intermediaryValue = ref(externalValue.value ? _.cloneDeep(externalValue.value) : null)

  /**
   * 
   * 
   * @private
   */
  const updateModel = (path, val) => {
    // When using v-model as model
    if (externalValue.value) {
      // Non-flat elements
      if (path) {
        let parts = path.split('.')
        let element = parts.pop()
        let parent = parts.join('.') || null

        let externalValueObject = parent ? _.get(externalValue.value, parent) : externalValue.value

        // Thinking about cases when it tries to to set an element 
        // which no longer exists in the same tick (eg. when removing
        // a list element with order and tries to refresh its order field)
        if (externalValueObject !== undefined) {
          // We are setting externalValue (v-model) to instantly reflect changes in field value
          $this.$set(externalValueObject, element, val)
        }
        
        // Setting directly because externalValue might contain changes
        // that intermediary does not have yet, so it would overwrite
        // external model with old value
        intermediaryValue.value = _.cloneDeep(externalValue.value)
      }

      // Group element
      else {
        _.each(val, (v, key) => {
          if (externalValue.value !== undefined) {
            $this.$set(externalValue.value, key, v)
          }

          if (intermediaryValue.value !== undefined) {
            $this.$set(intermediaryValue.value, key, v)
          }

        })
      }

    // When using this.data as model
    } else {
      // We need a different clone than this.valueValue clone to not effect children watching model
      let model = _.cloneDeep(externalValue.value || internalData.value)

      // Non-flat elements
      if (path) {
        _.set(model, path, val)

      // Group element
      } else {
        model = Object.assign({}, model, val)
      }

      internalData.value = model
    }
  }

  if (externalValue.value) {
    watch(intermediaryValue, (n, o) => {
      context.emit('input', n)
      context.emit('update:modelValue', n)
    }, { deep: true, immediate: false })
    
    watch(model, (n, o) => {
      if (_.isEqual(n, o)) {
        return
      }

      internalData.value = n
    }, { deep: true, immediate: false })
  }

  onMounted(() => {
    // Watching model to track old/new values
    watch(model, (n, o) => {
      if (_.isEqual(n, o)) {
        return
      }

      fire('change', n, o)
    }, { deep: true, immediate: false })
  })

  return {
    model,
    internalData,
    intermediaryValue,
    externalValue,
    updateModel,
  }
}