export default function createEditor (details, options = {}) {
  const originalConsoleError = console.error

  console.error = (e) => { if (!e.toString().includes('Unknown custom element: <trix-editor>')) throw new Error(e) }

  let form = createForm(details, options)
  
  console.error = originalConsoleError

  return form
}