import Vue from 'vue'
import ref from './../directives/ref'
import _ from 'lodash'
import { mergeClass, mergeComponentClasses } from './../utils/mergeClasses'

export default {
  name: 'Laraform',
  setup(props, { root }) {
    // let setup = {}

    // _.each(root.$laraform.plugins, (plugin) => {
    //   setup = Object.assign({}, setup, plugin.setup())
    // })

    // return setup
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

      class: null,

      elements: {},
    }
  },
  computed: {
    mainClass() {
      return _.keys(this.defaultClasses)[0]
    },

    defaultClasses() {
      return this.extendedTheme.components.Laraform.data().defaultClasses
    },

    extendedClasses() {
      let classes = Object.assign({},
        this.defaultClasses,
        this.extendedTheme.classes.Laraform
      )

      classes = mergeComponentClasses(classes, this.addClasses.Laraform || null)

      if (this.class !== null || this.form.class) {
        classes[this.mainClass] = mergeClass(classes[this.mainClass], this.class || this.form.class)
      }

      return classes
    },

    selectedTheme() {
      let theme = !_.isEmpty(this.theme) ? this.theme : (this.form.theme || this.$laraform.config.theme)

      return this.$laraform.themes[theme]
    },

    extendedTheme() {
      return Vue.observable(Object.assign({}, this.selectedTheme, {
        // Add registered elements to theme elements (or overwrite)
        elements: Object.assign({},
          this.selectedTheme.elements,
          this.$laraform.elements,
          this.elements,
        ),

        // Add registered component to theme (or overwrite)
        components: _.merge({},
          this.selectedTheme.components,
          this.$laraform.components,
          this.components,
        ),
        
        // Ovewrite theme classes with form's classes definition
        classes: _.merge({},
          this.selectedTheme.classes,
          this.classes
        ),
      }))
    },

    elements$() {
      let elements$ = {}
      let elementsRef$ =  this.$refs.elements$

      // Retrieving elements from FormElements component
      if (!_.isArray(elementsRef$)) {
        elementsRef$ = elementsRef$.$refs.elements$
      }

      _.each(elementsRef$, (element$) => {
        elements$[element$.name] = element$
      })

      return elements$
    },

    form$() {
      return this
    },
  },
  watch: {
    'form.schema': {
      handler(schema) {
        if (_.isEmpty(schema)) {
          return
        }

        this.schema = schema
      },
      deep: true,
      immediate: true
    }
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