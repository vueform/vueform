import { createLocalVue, mount } from '@vue/test-utils'
import installer from './installer'
import bootstrap from './themes/bootstrap'

let config = {
  plugins: [],
  
  themes: {
    bootstrap,
  },

  theme: 'bootstrap',

  elements: {},
}

const LaraformInstaller = installer(config)

let schema = {
  name: {
    type: 'text',
    label: 'Name'
  }
}

const LocalVue = createLocalVue()

LocalVue.use(LaraformInstaller)

let TestForm = LocalVue.extend({
  mixins: [Laraform],
  data() {
    return {
      schema,
    }
  }
})

describe('Laraform', () => {
  it('renders text element', () => {
    const form = mount(TestForm, {
      LocalVue
    })

    expect(form.findComponent({ name: 'TextElement' }).exists()).toBe(true)
  })
})