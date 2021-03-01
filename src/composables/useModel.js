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
  const internalData = ref(externalValue.value ? model.value : {})

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
      let parts = path.split('.')
      let element = parts.pop()
      let parent = parts.join('.') || null

      // We are setting externalValue (v-model) to instantly reflect changes in field value
      $this.$set(parent ? _.get(externalValue.value, parent) : externalValue.value, element, val)

      // We are setting intermediaryValue to collect changes in a tick which will later be emitted in `input`
      $this.$set(parent ? _.get(intermediaryValue.value, parent) : intermediaryValue.value, element, val)

    // When using this.data as model
    } else {
      // We need a different clone than this.valueValue clone to not effect children watching model
      let model = _.cloneDeep(externalValue.value || internalData.value)
      _.set(model, path, val)
      internalData.value = model
    }
  }

  if (externalValue.value) {
    watch(intermediaryValue, (n, o) => {
      context.emit('input', n)
      context.emit('update:modelValue', n)
    }, { deep: true, immediate: false })
    
    watch(model, (n, o) => {
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
    updateModel,
  }
}