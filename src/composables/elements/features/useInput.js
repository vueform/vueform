import { ref } from 'composition-api'

export default function useInput(props, context, dependencies)
{
  // ================ DATA ================

  const input = ref(null)

  return {
    input,
  }
}