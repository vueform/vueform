import useChildrenObject from './useChildrenObject'

export default function(props, context, dependencies)
{
  // ============ DEPENDENCIES ============

  const children = useChildrenObject(props, context, dependencies)

  return {
    ...children,
  }
}