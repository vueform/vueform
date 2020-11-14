import StaticElement from './StaticElement'
import useButtons from './../../composables/elements/useButtons'

export default {
  name: 'ButtonsElement',
  mixins: [StaticElement],
  init: useButtons,
  computed: {
    buttons() {
      return this.schema.buttons || []
    }
  },
  methods: {
    component(button) {
      if (button.component) {
        return button.component        
      }

      let type = button.type || 'button'

      switch(type) {
        case 'button':
          return this.components.FormButton

        default:
          let component = this.components['FormButton' + _.upperFirst(type)]

          if (!component) {
            throw new TypeError('Button component not found: "FormButton' + _.upperFirst(type) + '"')
          }

          return component
      }
    }
  }
}