import { onMounted, ref } from 'composition-api'

const base = function (props, context, dependencies)
{
  // ============ DEPENDENCIES ============
  
  const input = dependencies.input

  // ================ DATA ================

  /**
   * Whether the editor is focused.
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
   * Whether the editor is focused.
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

const dates = date

export {
  date,
  dates,
}

export default base