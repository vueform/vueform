import computedOption from './../../../utils/computedOption'
import { computed, onMounted, nextTick, toRefs } from 'composition-api'

export default function(props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const placeholder = dependencies.placeholder
  const input = dependencies.input
  const update = dependencies.update

  // ============== COMPUTED ==============

  /**
   * Mask to be applied for the field using [text-mask](https://github.com/text-mask/text-mask). If `false` no mask is used.
   * 
   * @type {array|false}
   * @default false
   */
  const mask = computedOption('mask', schema, false)

  /**
   * Whether the mask is in in *guide* or *no guide* mode.
   * 
   * @type boolean
   * @default true
   */
  const guide = computedOption('guide', schema, true)

  /**
   * Placeholder character represents the fillable spot in the mask.
   * 
   * @type {string}
   * @default '_'
   */
  const placeholderChar = computedOption('placeholderChar', schema, '_')

  /**
   * If `true`, adding or deleting characters will not affect the positions of existing characters. If `false`, adding characters causes existing characters to advance and deleting characters causes existing characters to move back.
   * 
   * @type {boolean}
   * @default false
   */
  const keepCharPositions = computedOption('keepCharPositions', schema, false)

  /**
   * A function that will give you the opportunity to modify the conformed value before it is displayed on the screen when masked.
   * 
   * @type {function}
   * @default null
   */
  const pipe = computedOption('pipe', schema, null)

  /**
   * Whether to display the mask as a placeholder in place of the regular placeholder when the input element value is empty.
   * 
   * @type {boolean}
   * @default true
   */
  const showMask = computedOption('showMask', schema, !placeholder.value)

  /**
   * Determines if the element is masked.
   * 
   * @type {boolean}
   */
  const masked = computed(() => {
    return mask.value !== false
  })

  // =============== METHODS ===============

  const modifiedUpdate = (val, triggerChange, shouldValidate) => {
    update(val, triggerChange, shouldValidate)

    if (masked.value === true) {
      nextTick(() => {
        // input.value.initMask()
      })
    }
  }

  // =============== HOOKS ================

  onMounted(() => {
    if (masked.value === true) {
      nextTick(() => {
        // input.value.initMask()
      })
    }
  })

  return {
    // Computed
    mask,
    guide,
    placeholderChar,
    keepCharPositions,
    pipe,
    showMask,
    masked,

    // Methods
    update: modifiedUpdate,
  }
}