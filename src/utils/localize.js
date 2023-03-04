export default function localize (object, $config) {
  return object?.[$config.i18n.locale] || object?.[$config.i18n.fallbackLocale] || object?.[Object.keys(object)[0]]
}