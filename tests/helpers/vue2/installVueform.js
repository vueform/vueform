import { createLocalVue } from '@vue/test-utils'
// import Vuex from 'vuex'

import { createVueformInstaller } from './index'

export default function installVueform (options = {}) {
  const { VueformInstaller, config } = createVueformInstaller(options)

  const LocalVue = createLocalVue()

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

  LocalVue.use(VueformInstaller, {
    apiKey: 'dvzr-74zl-w99t-dmdv-syr7',
  })

  return {
    LocalVue,
    config,
    store
  }
}