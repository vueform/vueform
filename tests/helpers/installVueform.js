import { createVueformInstaller } from './index'

export default function installVueform (options = {}) {
  const { VueformInstaller, config } = createVueformInstaller(options)

  // const LocalVue = createLocalVue()

  let store = null

  // if (options.vuex) {
  //   LocalVue.use(Vuex)

  //   store = new Vuex.Store({
  //     state: options.vuex,
  //   })

  //   if (options.vueformStore !== false) {
  //     VueformInstaller.store(store)
  //   }
  // }

  // LocalVue.use(VueformInstaller)

  return {
    VueformInstaller,
    config,
    store
  }
}