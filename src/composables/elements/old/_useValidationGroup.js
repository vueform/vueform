import useValidationObject from './useValidationObject'

export default function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const validation = useValidationObject(props, context, dependencies)

  return {
    ...validation,
  }
}