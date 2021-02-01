import computedOption from './../../../utils/computedOption'
import { toRefs } from 'composition-api'

const base = function (props, context, dependencies)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const disabled = dependencies.disabled
  const add = dependencies.add
  const input = dependencies.input
  const isObject = dependencies.isObject
  const storeFile = dependencies.storeFile

  // ============== COMPUTED ==============

  /**
   * 
   * 
   * @private
   */
  const accept = computedOption('accept', schema, null)

  // =============== METHODS ==============

  /**
   * 
   * 
   * @private
   */
  const handleChange = (e) => {
    if (!e.target || !e.target.files || e.target.files.length == 0 || disabled.value) {
      return
    }

    _.each(e.target.files, (file) => {
      add(isObject.value ? {
        [storeFile.value]: file
      } : file)
    })
  }

  /**
   * 
   * 
   * @private
   */
  const handleClick = () => {
    if (disabled.value) {
      return
    }

    input.value.click()
  }

  return {
    accept,
    handleChange,
    handleClick,
  }
}

export default base