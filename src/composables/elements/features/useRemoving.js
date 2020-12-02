import { ref } from 'composition-api'

const base = function (props, context, dependencies)
{
  // ================ DATA ================

  const removing = ref(false)

  return {
    removing,
  }
}

export default base