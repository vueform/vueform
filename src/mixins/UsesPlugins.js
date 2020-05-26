import initPlugin from './../utils/initPlugin'

export default {
  setup(props, context) {
    let setup = {}

    _.each(context.root.$laraform.plugins, (plugin) => {
      if (plugin.setup) {
        setup = Object.assign({}, setup, plugin.setup(props, context))
      }
    })

    return setup
  },

  beforeCreate() {
    initPlugin('beforeCreate', this.$options.name, this.$laraform.plugins, this)
  },

  created() {
    this.$_initPluginFor('created')
  },

  beforeMount() {
    this.$_initPluginFor('beforeMount')
  },

  mounted() {
    this.$_initPluginFor('mounted')
  },

  beforeUpdate() {
    this.$_initPluginFor('beforeUpdate')
  },

  updated() {
    this.$_initPluginFor('updated')
  },

  beforeDestroy() {
    this.$_initPluginFor('beforeDestroy')
  },

  destroyed() {
    this.$_initPluginFor('destroyed')
  },

  methods: {
    $_initPluginFor(hook) {
      initPlugin(hook, this.$options.name, this.$laraform.plugins, this)
    }
  },
}