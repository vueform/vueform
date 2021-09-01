import _ from 'lodash'
import { computed } from 'composition-api'

const base = function (props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const isDisabled = dependencies.isDisabled
  const add = dependencies.add
  const input = dependencies.input
  const isObject = dependencies.isObject
  const storeFileName = dependencies.storeFileName
  const children$ = dependencies.children$

  // ============== COMPUTED ==============

  /**
   * 
   * 
   * @type {boolean}
   */
  const preparing = computed(() => {
    return _.some(children$.value, { available: true, perparing: true })
  })

  // =============== METHODS ==============

  /**
   * 
   * 
   * @private
   */
  const handleChange = (e) => {
    if (!e.target || !e.target.files || e.target.files.length == 0 || isDisabled.value) {
      return
    }

    _.each(e.target.files, (file) => {
      add(isObject.value ? {
        [storeFileName.value]: file
      } : file)
    })

    input.value.value = ''
  }

  /**
   * 
   * 
   * @private
   */
  const handleClick = () => {
    if (isDisabled.value) {
      return
    }

    input.value.click()
  }

  return {
    preparing,
    handleChange,
    handleClick,
  }
}

export default base