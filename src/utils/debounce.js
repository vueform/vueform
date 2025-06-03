export default function debounce(func, wait, onStart) {
  let timeout
  return function(...args) {
    if (!timeout) {
      if (typeof onStart === 'function') {
        onStart()
      }
    } else {
      clearTimeout(timeout)
    }
    
    timeout = setTimeout(() => {
      timeout = null
      func.apply(this, args)
    }, wait)
  }
}