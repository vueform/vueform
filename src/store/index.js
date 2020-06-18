const store = {
  namespaced: true,
  
  mutations: {
    LARAFORM_UPDATE_STORE(state, value) {
      // Bit of a hacky solution but Vue does not provide
      // any other solution for registering global mutations
      // on the flight...
      this.dispatch('laraform/LARAFORM_UPDATE_STORE', value)
    }
  },

  actions: {
    LARAFORM_UPDATE_STORE({ rootState }, { path, value }) {
     _.set(rootState, path, Object.assign({}, _.get(rootState, path), value))
    }
  }
}

export default store