import useValidationObject from './useValidationObject'

export default function useValidationGroup (props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const validation = useValidationObject(props, context, dependencies)

  return {
    ...validation,
  }
}