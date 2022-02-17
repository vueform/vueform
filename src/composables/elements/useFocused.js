import { onMounted, ref, watch, computed } from 'composition-api'

const base = function (props, context, dependencies)
{
  // ============ DEPENDENCIES ============
  
  const input = dependencies.input

  // ================ DATA ================

  /**
   * Whether the element is focused.
   * 
   * @type {boolean}
   */
  const focused = ref(false)


  // =============== HOOKS ================

  onMounted(() => {
    input.value.addEventListener('focus', () => {
      focused.value = true
    })

    input.value.addEventListener('blur', () => {
      focused.value = false
    })
  })

  return {
    focused,
  }
}

const date = function (props, context, dependencies)
{
  // ============ DEPENDENCIES ============
  
  const input = dependencies.input

  // ================ DATA ================

  /**
   * Whether the element is focused.
   * 
   * @type {boolean}
   */
  const focused = ref(false)


  // =============== HOOKS ================

  onMounted(() => {
    input.value.input.addEventListener('focus', () => {
      focused.value = true
    })

    input.value.input.addEventListener('blur', () => {
      focused.value = false
    })
  })

  return {
    focused,
  }
}

const select = function (props, context, dependencies)
{
  // ============ DEPENDENCIES ============
  
  const input = dependencies.input
  const isNative = dependencies.isNative

  // ================ DATA ================

  /**
   * Whether the element is focused.
   * 
   * @type {boolean}
   */
  const focused = ref(false)


  // =============== HOOKS ================

  onMounted(() => {
    if (isNative.value) {
      input.value.addEventListener('focus', () => {
        focused.value = true
      })

      input.value.addEventListener('blur', () => {
        focused.value = false
      })
    } else {
      watch(computed(() => input.value.isOpen), (open) => {
        focused.value = open
      })
    }
  })

  return {
    focused,
  }
}

const dates = date
const multiselect = select
const tags = select

export {
  date,
  dates,
  select,
  multiselect,
  tags,
}

export default base