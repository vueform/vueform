export default function localize (object, $config) {
  return object && typeof object === 'object'
    ? object?.[$config.i18n.locale] || object?.[$config.i18n.locale.toUpperCase()] || object?.[$config.i18n.fallbackLocale] || object?.[$config.i18n.fallbackLocale.toUpperCase()] || object?.[Object.keys(object)[0]]
    : object
}