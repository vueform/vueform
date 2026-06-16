export function isEmpty (value, lang) {
  if (typeof value === 'string') return !value.length
  if (typeof value === 'number') return false
  if (typeof value === 'boolean') return value
  if (Array.isArray(value)) return !value.length
  if (value === '' || value === null || value === undefined) return true
  if (typeof value !== 'object') return false
  if (value?.[lang] !== undefined) return isEmpty(value[lang], lang)
  return Object.values(value).every(v => isEmpty(v, lang))
}

export function isNotEmpty (value, lang) {
  if (typeof value === 'string') return !!value.length
  if (typeof value === 'number') return true
  if (typeof value === 'boolean') return value
  if (Array.isArray(value)) return !!value.length
  if (value === '' || value === null || value === undefined) return false
  if (typeof value !== 'object') return true
  if (value?.[lang] !== undefined) return isNotEmpty(value[lang], lang)
  return Object.values(value).some(v => isNotEmpty(v, lang))
}