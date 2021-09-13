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
   * Whether any of the file are preparing (being uploaded before submit).
   * 
   * @type {boolean}
   */
  const preparing = computed(() => {
    return _.some(children$.value, { available: true, perparing: true })
  })

  // =============== METHODS ==============

  /**
   * Handles `change` event.
   * 
   * @param {Event} e* 
   * @returns {void}
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
   * Handles `click` event.
   * 
   * @returns {void}
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