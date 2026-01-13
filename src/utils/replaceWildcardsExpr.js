export default function replaceWildcardsExpr (fillable, fill, brackets = true) {
  if (!fillable.includes('[*]')) {
    return fillable
  }

  const fillParts = fill.split('.')
  const keys = {}

  fillParts.forEach((part, i) => {
    if (!/^[0-9]+$/.test(part)) {
      return
    }

    keys[fillParts[i-1]] = part
  })

  Object.keys(keys).forEach((key) => {
    fillable = fillable.replace(
      new RegExp(`(?<![a-zA-Z0-9_\-])${key}\\[\\*\\]`, 'g'),
      brackets
        ? `${key}[${keys[key]}]`
        : `${key}.${keys[key]}`
    )
  })

  return fillable
}