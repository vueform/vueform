
import FormElements from './components/FormElements'

export default {
  install(form$) {
    form$.$once('hook:mounted', () => {
      var component = Vue.extend(FormElements)

      var instance = new component({
        propsData: {
          form$: form$
        }
      }).$mount()

      form$.$refs.self$.prepend(instance.$el)
    })
  }
}