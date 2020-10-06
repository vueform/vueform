export default function computedOption(name, schema, def) {
  return {
    get() {
      return schema[name] !== undefined ? schema[name] : def
    },
    set(value) {
      schema[name] = value
    },
  }
}