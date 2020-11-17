import { ref } from 'composition-api'

export default function(props, context, dependencies)
{
  // ================ DATA ================

  const input = ref(null)

  return {
    input,
  }
}