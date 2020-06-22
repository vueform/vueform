import StaticElement from './StaticElement'

export default {
  name: 'ButtonsElement',
  mixins: [StaticElement],
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
          break

        default:
          let component = this.components['FormButton' + _.upperFirst(type)]

          if (!component) {
            throw new Error('Button component not found: "FormButton' + _.upperFirst(type) + '"')
          }

          return component
      }
    }
  }
}