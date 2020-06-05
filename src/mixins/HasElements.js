import _ from 'lodash'

export default {
  methods: {
    component(element) {
      if (element.component) {
        return element.component
      }

      let name = `${_.upperFirst(_.camelCase(element.type))}Element`

      let component = this.theme.elements[name]

      if (component === undefined) {
        throw new TypeError('[Laraform] Unknown element type: ' + element.type)
      }

      return component
    }
  }
}