import fields from './fields'
import { toRefs, inject, computed } from 'composition-api'

const ignoreProps = ['class', 'slots']

export default () => {
  const components = {}

  _.each(fields, (field, name) => {
    let elementName = `${_.upperFirst(name)}Element`
    let componentName = `${_.upperFirst(name)}Field`

    let slots = ''

    if(['object', 'group'].indexOf(name) !== -1) {
      slots += '<template v-slot><slot></slot></template>'
    } 

    if(['list'].indexOf(name) !== -1) {
      slots += '<template v-slot="{ index }"><slot :index="index"></slot></template>'
    } 

    field.slots.forEach((slot) => {
      switch(slot) {
        case 'before':
        case 'between':
        case 'after':
          slots += `<template v-slot:${slot}="{ el$ }"><slot name="${slot}" :el$="el$"><component :is="el$.slots.${slot}" type="${slot}" /></slot></template>`
          break

        default:
          slots += `<template v-slot:${slot}="{ el$ }"><slot name="${slot}" :el$="el$"><component :is="el$.slots.${slot}" /></slot></template>`
      }
    })

    let events = ''

    field.events.forEach((event) => {
      events += `@${event}="handle${_.upperFirst(event)}" `
    })

    let component = {
      name: componentName,
      emits: field.events,
      props: {},
      setup(props, context) {
        const propRefs = toRefs(props)

        const theme = inject('theme')

        const schema = computed(() => {
          let schema ={
            type: name,
          }

          _.each(field.props, (propObject, propName) => {
            if (['name'].indexOf(propName) !== -1 || propRefs[propName] === undefined || propRefs[propName].value === undefined) {
              return
            }

            schema[propName] = propRefs[propName].value
          })

          return schema
        })

        const events = {}

        field.events.forEach((event) => {
          events[`handle${_.upperFirst(event)}`] = function() {
            let args = [].slice.call(arguments)

            context.emit(event, ...args)
          }
        })

        return {
          theme,
          schema,
          ...events,
        } 
      },
      template: `<component :is="theme.elements.${elementName}" :name="name" :schema="schema" ${events}>${slots}</component>`,
    }

    _.each(field.props, (propConfig, propName) => {
      if (ignoreProps.indexOf(propName) !== -1) {
        return
      }

      component.props[propName] = propConfig
    })

    components[componentName] = component
  })

  return components
}