import { toRefs, computed } from 'composition-api'

const base = function(props, context, dependencies)
{
  const { addons, slots } = toRefs(props)

  // ============ DEPENDENCIES ============

  const el$ = dependencies.el$

  // ============== COMPUTED ==============

  const hasAddonBefore = computed(() => {
    return !!(addons.value.before || el$.value.$slots?.['addon-before'] || (context.expose === undefined && el$.value.$scopedSlots?.['addon-before']) || slots.value['addon-before'])
  })

  const hasAddonAfter = computed(() => {
    return !!(addons.value.after || el$.value.$slots?.['addon-after'] || (context.expose === undefined && el$.value.$scopedSlots?.['addon-after']) || slots.value['addon-after'])
  })

  return {
    hasAddonBefore,
    hasAddonAfter,
  }
}

export default base