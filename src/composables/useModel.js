import cloneDeep from 'lodash/cloneDeep'
import get from 'lodash/get'
import each from 'lodash/each'
import set from 'lodash/set'
import { computed, ref, toRefs, watch, } from 'vue'
import dataEquals from './../utils/dataEquals'

export default function (props, context, dependencies)
{
  const {
    value: v,
    modelValue: mv,
    sync,
  } = toRefs(props)

  const $this = dependencies.$this

  /**
   * Any `v-model` / `value` / `modelValue` prop provided for the form.
   * 
   * @type {object}
   * @private
   */
  const externalValue = $this.$vueform.vueVersion === 3 ? mv : v

  // ================ DATA =================

  /**
   * The internal store for the form's model. 
   * 
   * @type {object}
   * @default {}
   * @private
   */
  const internalData = ref({})

  /**
   * The intermediary value.
   * 
   * @type {object}
   * @private
   */
  const intermediaryValue = ref(externalValue && externalValue.value ? cloneDeep(externalValue.value) : null)

  // ============== COMPUTED ===============

  /**
   * Whether form data should be synced when the external value changes (when external value is used).
   * 
   * @type {boolean}
   * @private
   */
  const isSync = computed(() => {
    return sync.value && externalValue && externalValue.value !== undefined
  })

  /**
   * The form's model, which either comes from `externalValue` or `internalData`.
   * 
   * @type {object}
   * @private
   */
  const model = computed(() => {
    return cloneDeep(externalValue.value || internalData.value)
  })

  // =============== METHODS ==============

  /**
   * Updates an element's data in the form model.
   * 
   * @param {string} dataPath* the `dataPath` property of the element to update
   * @param {any} val* value to update with
   * @returns {void}
   * @private
   */
  const updateModel = (dataPath, val) => {
    // When using v-model as model
    if (externalValue.value) {
      // Non-flat elements
      if (dataPath) {
        let parts = dataPath.split('.')
        let element = parts.pop()
        let parent = parts.join('.') || null

        let externalValueObject = parent ? get(externalValue.value, parent) : externalValue.value

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
        intermediaryValue.value = cloneDeep(externalValue.value)
      }

      // Group element
      else {
        each(val, (v, key) => {
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
      let model = cloneDeep(externalValue.value || internalData.value)

      // Non-flat elements
      if (dataPath) {
        set(model, dataPath, val)

      // Flat elements (eg. Group)
      } else {
        model = Object.assign({}, model, val)
      }

      internalData.value = model
    }
  }

  if (externalValue && externalValue.value) {
    watch(model, (n, o) => {
      if (dataEquals(n, o)) {
        return
      }

      internalData.value = n
    }, { deep: true, immediate: false })
  }

  return {
    model,
    internalData,
    intermediaryValue,
    externalValue,
    isSync,
    updateModel,
  }
}