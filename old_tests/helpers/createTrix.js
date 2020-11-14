export default function createTrix (details) {
  const originalConsoleError = console.error

  console.error = (e) => { if (!e.toString().includes('Unknown custom element: <trix-editor>')) throw new Error(e) }

  let form = createForm(details)
  
  console.error = originalConsoleError

  return form
}