import Vue from 'vue'
import ref from './../../directives/ref'
import _ from 'lodash'

export default {
  name: 'Laraform',
  setup(props, { root }) {
    let setup = {}

    _.each(root.$laraform.plugins, (plugin) => {
      setup = Object.assign({}, setup, plugin.setup())
    })

    return setup
  },
  render() {
    return this.extendedTheme.components.Laraform.render.apply(this)
  },
  directives: {
    ref,
  },
  provide() {
    const _this = this
  
    return {
      get form$ () {
        return _this.form$
      },

      get theme () {
        return _this.extendedTheme
      }
    }
  },
  props: {
    form: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  data() {
    return {
      schema: {},

      theme: null,

      components: {},

      classes: {},

      addClasses: {},
    }
  },
  computed: {
    extendedTheme() {
      let theme = !_.isEmpty(this.theme)
        ? this.theme
        : (this.form.theme || this.$laraform.config.theme)

      let elements = Object.assign({},this.$laraform.themes[theme].elements, this.$laraform.elements)

      let classes = _.merge({}, this.$laraform.themes[theme].classes, this.classes)

      _.each(this.addClasses, (classes_, component) => {
        _.each(classes_, (class_, key) => {
          if (classes[component] === undefined) {
            classes[component] = {}
          }

          classes[component][key] = [classes[component][key], class_]
        })
      })

      return Vue.observable(Object.assign({}, this.$laraform.themes[theme], {
        elements: elements,
        classes: classes
      }))
    },

    elements$() {
      let elements$ = {}
      let components$ =  this.$refs.elements$

      // Retrieving elements from FormElements component
      if (!_.isArray(components$)) {
        components$ = components$.$refs.elements$
      }

      _.each(components$, (component$) => {
        elements$[component$.name] = component$
      })

      return elements$
    },

    form$() {
      return this
    },
  },
  methods: {

    /**
     * Returns an element by its path.
     * 
     * @public
     * @param {string} path path of the element
     * @param {string} elements elements$ object to look elements for (leave blank)
     * @returns {void}
     */
    el$(path, elements) {
      if (elements === undefined) {
        elements = this.elements$
      }

      if (_.isEmpty(elements) || !path) {
        return null
      }
      
      var matches = path.match(/^[^.]+\./)

      if (matches) {
        var current = matches[0].replace('.', '')

        if (!elements[current]) {
          return null
        }

        return this.el$(
          path.replace(matches[0], ''),
          elements[current].children$
        )
      }
      else if (elements[path] !== undefined) {
        return elements[path]
      }

      return null
    },

    updateSchema(schema) {
      this.$set(this, 'schema', schema)
    }
  },
  beforeCreate() {
    _.each(this.$laraform.plugins, (plugin) => {
      plugin.install(this)
    })
  },
  created() {
    if (this.form.schema) {
      this.schema = this.form.schema
    }
  },
  beforeMount() {
    let components = Object.assign({}, this.extendedTheme.components, this.components)

    _.each(components, (component, name) => {
      if (this.$options.components[name] !== undefined) {
        return
      }

      this.$options.components[name] = component
    })

    let elements = Object.assign({}, this.extendedTheme.elements, this.elements)

    _.each(elements, (component, name) => {
      if (this.$options.components[name] !== undefined) {
        return
      }
      
      this.$options.components[name] = component
    })
  },
}