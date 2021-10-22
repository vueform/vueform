export default function testThemeElements (name, expect) {
  let components = _.keys(defaultTheme.templates)

  const originalConsoleError = console.error

  console.error = () => {}

  expect(() => {
    _.each(components, (component) => {
      let comp = require(`./../themes/${name}/components/elements/${component}.vue`).default

      if (comp.data) {
        expect(_.keys(comp.data().defaultClasses)).toBeTruthy()
      }
    })
  }).not.toThrowError()
  
  console.error = originalConsoleError
}