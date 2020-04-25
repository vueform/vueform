import sortable from './../directives/sortable'

export default {
  directives: {
    sortable,
  },
  data() {
    return {
      sortable: {
        sort: true,
        onUpdate: this.handleSort,
      },
    }
  },
  methods: {
    add() {
      var count = _.keys(this.schema).length

      var schema = Object.assign({}, this.schema)

      schema[`text${count+1}`] = {
        type: 'text',
        label: `Text${count+1}`
      }

      this.updateSchema(schema)
    },
    remove(name) {
      var schema = Object.assign({}, this.schema)

      delete schema[name]

      this.updateSchema(schema)
    },
    handleSort(indexes) {
      let oldIndex = indexes.oldIndex
      let newIndex = indexes.newIndex

      let keys = _.keys(this.schema)

      keys.splice(newIndex, 0, keys.splice(oldIndex, 1)[0])

      let schema = {}

      _.each(keys, (key) => {
        schema[key] = this.schema[key]
      })

      this.updateSchema(schema)
    },
    elementName(index) {
      return _.keys(this.schema)[index]
    },
    element(index) {
      return this.schema[this.elementName(index)]
    },
    updateSchema(schema) {
      this.$emit('updateSchema', schema)
    }
  }
}