import computedOption from './../../../utils/computedOption'
import { computed } from 'composition-api'
import useValidation from './useValidation'

export default function useChildrenValidation (props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const { 
    // Data
    messageBag,
  } = useValidation(props, context, dependencies)

  const children$ = dependencies.children$

  // ============== COMPUTED ==============

  /**
   * Whether the element's value has been modified by the user.
   * 
   * @type {boolean}
   */
  const dirty = computed(() => {
    return _.some(children$.value, { available: true, dirty: true })
  })

  /**
   * Whether the element's input has already been validated at least once.
   * 
   * @type {boolean}
   */
  const validated = computed(() => {
    return !_.some(children$.value, { available: true, validated: false })
  })

  /**
   * Whether the element has any failing rules.
   * 
   * @type {boolean}
   */
  const invalid = computed(() => {
    return _.some(children$.value, { available: true, invalid: true })
  })

  /**
   * Whether the element has any async rules in progress.
   * 
   * @type {boolean}
   */
  const pending = computed(() => {
    return _.some(children$.value, { available: true, pending: true })
  })

  /**
   * Whether the element has an ongoing debounce.
   * 
   * @type {boolean}
   */
  const debouncing = computed(() => {
    return _.some(children$.value, { available: true, debouncing: true })
  })

  /**
   * Whether the element is `pending` or `debouncing`.
   * 
   * @type {boolean}
   */
  const busy = computed(() => {
    return _.some(children$.value, { available: true, busy: true })
  })

  /**
   * List of errors of failing rules.
   * 
   * @type {array}
   */
  const errors = computed(() => {
    var errors = []

    _.each(children$.value, (element$) => {
      if (!element$.available) {
        return
      }

      _.each(element$.errors, (error) => {
        errors.push(error)
      })
    })

    return errors
  })


  // =============== METHODS ==============

  /**
   * Validates the element.
   * 
   * @public
   * @returns {void}
   */
  const validate = () => {
    _.each(children$.value, (element$) => {
      element$.validate()
    })
  }

  /**
   * Cleans the element.
   * 
   * @public
   * @returns {void}
   */
  const clean = () => {
    _.each(children$.value, (element$) => {
      element$.clean()
    })
  }

  /**
   * Resets validators for children.
   * 
   * @public
   * @returns {void}
   */
  const resetValidators = () => {
    _.each(children$.value, (element$) => {
      element$.resetValidators()
    })
  }
  
  const initMessageBag = (el$) => {
    messageBag.value = new form$.value.$laraform.services.messageBag(elements)
  }
  
  onMounted(() => {
    initMessageBag()  
  })

  return {
    // Data
    messageBag,

    // Computed
    dirty,
    validated,
    invalid,
    pending,
    debouncing,
    busy,
    errors,

    // Methods
    validate,
    clean,
    resetValidators,
    initMessageBag,
  }
}