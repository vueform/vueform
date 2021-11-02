import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import CompositionApi from 'composition-api'

import { createVueformInstaller } from './index'

export default function installVueform (options = {}) {
  const { VueformInstaller, config } = createVueformInstaller(options)

  const LocalVue = createLocalVue()

  LocalVue.use(CompositionApi)

  let store = null

  if (options.vuex) {
    LocalVue.use(Vuex)

    store = new Vuex.Store({
      state: options.vuex,
    })

    if (options.vueformStore !== false) {
      VueformInstaller.store(store)
    }
  }

  LocalVue.use(VueformInstaller)

  return {
    LocalVue,
    config,
    store
  }
}