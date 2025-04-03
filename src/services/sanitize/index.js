import DOMPurify from 'dompurify'

export default function(options, init, enabled) {
  return (str) => {
    if (!enabled) {
      return str
    }

    const purify = typeof init === 'function' ? init(DOMPurify) : DOMPurify

    return purify.sanitize(str, options)
  }
}