import { ref } from 'composition-api'

const base = function(props, context, dependencies)
{
  // ================ DATA ================

  const sorting = ref(false)

  return {
    sorting,
  }
}

export default base