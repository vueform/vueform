module.exports = function vitePluginVueform() {
  return {
    name: 'vueform',
    config: () => ({
      optimizeDeps: {
        include: [
          'wnumb',
          'nouislider',
          'trix',
          'lodash',
          'axios',
        ]
      }
    })
  }
}