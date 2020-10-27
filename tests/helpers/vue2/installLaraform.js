import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import CompositionApi from 'composition-api'

import { createLaraformInstaller } from './index'

export default function installLaraform (options = {}) {
  const { LaraformInstaller, config } = createLaraformInstaller(options)

  const LocalVue = createLocalVue()

  LocalVue.use(CompositionApi)

  let store = null

  if (options.vuex) {
    LocalVue.use(Vuex)

    store = new Vuex.Store({
      state: options.vuex,
    })

    if (options.laraformStore !== false) {
      LaraformInstaller.store(store)
    }
  }

  LocalVue.use(LaraformInstaller)

  return {
    LocalVue,
    config,
    store
  }
}