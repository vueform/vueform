import fields from './fields'
import { toRefs, inject, computed } from 'composition-api'

export default () => {
  const components = {}

  _.each(fields, (field, name) => {
    let elementName = `${_.upperFirst(name)}Element`
    let componentName = `${_.upperFirst(name)}Field`
    let component = {
      name: componentName,
      props: {},
      setup(props, context) {
        const propRefs = toRefs(props)

        const theme = inject('theme')

        const schema = computed(() => {
          let schema ={
            type: name,
          }

          _.each(field.options, (option) => {
            schema[option] = propRefs[option].value
          })

          return schema
        })

        return {
          theme,
          schema,
        } 
      },
      template: `<component :is="theme.elements.${elementName}" :name="name" :schema="schema"/>`
    }

    _.each(field.props, (propConfig, propName) => {
      component.props[propName] = propConfig
    })

    components[componentName] = component
  })

  return components
}