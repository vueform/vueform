import DOMPurify from 'dompurify'

export default function(options, init, enabled) {
  return (input) => {
    if (!enabled || typeof input !== 'string') {
      return input
    }

    const purify = typeof init === 'function' ? init(DOMPurify) : DOMPurify

    return purify.sanitize(input, options)
  }
}