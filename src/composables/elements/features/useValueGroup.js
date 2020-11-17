import useValueObject from './useValueObject'

export default function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const value = useValueObject(props, context, dependencies)

  return {
    ...value,
  }
}