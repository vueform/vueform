export default function testThemeComponents (name, expect) {
  let components = _.keys(defaultTheme.templates)

  const originalConsoleError = console.error

  console.error = () => {}

  expect(() => {
    _.each(components, (component) => {
      let comp

      try {
        comp = require(`./../themes/${name}/components/${component}.vue`).default
      } catch (e) {
          try {
          comp = require(`./../themes/${name}/components/wrappers/${component}.vue`).default
        } catch (e) {
          comp = require(`./../themes/${name}/components/elements/slots/${component}.vue`).default
        }
      }

      if (comp.data) {
        expect(_.keys(comp.data().defaultClasses)).toBeTruthy()
      }
    })
  }).not.toThrowError()
  
  console.error = originalConsoleError
}