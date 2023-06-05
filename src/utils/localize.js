export default function localize (object, $config, form$) {
  let locale = form$.locale$ || $config.i18n.locale

  if (!locale) {
    return object
  }

  return object && typeof object === 'object'
    ? object?.[locale] || object?.[locale.toUpperCase()] || object?.[$config.i18n.fallbackLocale] || object?.[$config.i18n.fallbackLocale.toUpperCase()] || object?.[Object.keys(object)[0]] || ''
    : object
}