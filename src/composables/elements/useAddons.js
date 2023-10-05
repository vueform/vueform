import { toRefs, computed } from 'vue'

const base = function(props, context, dependencies)
{
  const { addons, slots } = toRefs(props)
  
  // ============ DEPENDENCIES ============
  
  const el$ = dependencies.el$
  const form$ = dependencies.form$
  
  // ============== COMPUTED ==============
  
  const hasAddonBefore = computed(() => {
    return !!(addons.value.before || el$.value.$slots?.['addon-before'] || /* istanbul ignore next */ (form$.value.$vueform.vueVersion === 2 && el$.value.$scopedSlots?.['addon-before']) || slots.value['addon-before'])
  })
  
  const hasAddonAfter = computed(() => {
    return !!(addons.value.after || el$.value.$slots?.['addon-after'] || /* istanbul ignore next */ (form$.value.$vueform.vueVersion === 2 && el$.value.$scopedSlots?.['addon-after']) || slots.value['addon-after'])
  })
  
  return {
    hasAddonBefore,
    hasAddonAfter,
  }
}

export default base