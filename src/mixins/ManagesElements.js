import sortable from '../directives/sortable'

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

      this.insertAfter(count - 1, `text${count+1}`, {
        type: 'text',
        label: `Text${count+1}`
      })
    },
    remove(name) {
      var schema = Object.assign({}, this.schema)

      delete schema[name]

      this.updateSchema(schema)
    },
    insertAfter(after, elementName, element) {
      let schema = {}
      let afterName = this.getNameByIndex(after)

      _.each(this.schema, (item, itemName) => {
        schema[itemName] = item

        if (afterName == itemName) {
          schema[elementName] = element
        }
      })
      
      this.updateSchema(schema)
    },
    insertBefore(before, elementName, element) {
      let schema = {}
      let beforeName = this.elementName(before)

      _.each(this.schema, (item, itemName) => {
        if (beforeName == itemName) {
          schema[elementName] = element
        }

        schema[itemName] = item
      })

      this.updateSchema(schema)
    },
    handleSort(indexes) {
      let oldIndex = indexes.oldIndex
      let newIndex = indexes.newIndex

      let elementName = this.elementName(oldIndex)
      let element = this.element(oldIndex)

      this.remove(elementName)

      if (newIndex == _.keys(this.editableSchema).length) {
        this.insertAfter(newIndex - 1, elementName, element)
      }
      else {
        this.insertBefore(newIndex, elementName, element)
      }
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