import { computed, toRefs, ref, watch, nextTick } from 'composition-api'
import computedOption from './../../../utils/computedOption'

export default function useListChildren(props, context, dependencies, options)
{
  const { schema } = toRefs(props)

  // ============ DEPENDENCIES ============

  const form$ = dependencies.form$
  const default_ = dependencies.default
  const disabled = dependencies.disabled
  const fireRemove = dependencies.fireRemove
  const fireAdd = dependencies.fireAdd
  const handleChange = dependencies.handleChange
  const refreshOrderStore = dependencies.refreshOrderStore

  // ============== OPTIONS ===============

  const defaultInitial = options.initial

  // ================ DATA ================
  
  const child$ = ref([])

  const instances = ref([])
      
  // ============== COMPUTED ==============

  /**
   * Schema of child elements.
   * 
   * @type {object}
   * @ignore
   */
  const children = computed({
    get() {
      return schema.value.schema
    },
    set(val) {
      form$.value.$set(schema.value, 'schema', val)
    }
  })

  const children$ = computed(() => {
    const elements$ = {}

    _.each(child$.value, (element$) => {
      elements$[element$.name] = element$
    })

    return elements$
  })

  /**
  * Initial number of child instances.
  * 
  * @type {number}
  * @default 1
  */
  const initial = computed({
    get() {
      if (default_.value && default_.value.length > (schema.value.initial || defaultInitial)) {
        return default_.value.length
      }

      return schema.value.initial !== undefined ? schema.value.initial : defaultInitial
    },
    set(val) {
      form$.value.$set(schema.value, 'initial', val)
    }
  })

  /**
    * The schema of a child.
    * 
    * @type {object}
    */
  const prototype = computed(() => {
    return isObject.value
      ? Object.assign({}, schema.value.object, {type: 'object'})
      : schema.value.element
  })

  /**
   * Determines if the list items are objects.
   *
   * @type {boolean}
   */
  const isObject = computed(() => {
    return schema.value.object !== undefined
  })

  /**
   * Helper method used to retrieve the next key for a new instance.
   *
   * @type {number}
   */
  const next = computed(() => {
    return instances.value.length
      ? _.max(_.map(_.keys(_.keyBy(instances.value, 'key')), Number)) + 1
      : 0
  })

  // Methods
  /**
   * Adds a child to the `instances`. Returns the index of the added children.
   *
   * @public
   * @param {any} data data to be set for added child.
   * @returns {number}
   */
  const add = (data = null) => {
    if (disabled.value) {
      return
    }

    var index = insert(data)

    nextTick(() => {
      let child$ = children$.value[index]

      handleAdd(child$, index)
    })

    // handleChange(null, null, 'add')

    return index
  }

  /**
   * Removes a child by it's index.
   *
   * @public
   * @param {index} index index of child to be removed.
   * @returns {void}
   */
  const remove = (index) => {
    if (disabled.value) {
      return
    }

    handleRemove(index)

    instances.value.splice(index, 1)

    // refreshes children's order store value
    refreshOrderStore()

    // handleChange(null, null, 'remove')
  }

  /**
   * Inserts a new child to `instances` with data. Returns the index of the inserted children.
   *
   * @private
   * @param {any} data data for child to be inserted.
   * @returns {number}
   */
  const insert = (data) => {
    if (data === undefined) {
      data = null
    }

    // Key is used for v-for :key
    let key = next.value

    // Index is the index of new element
    // in the array and also its :name
    let index = instances.value.length

    var schema = Object.assign({}, _.cloneDeep(prototype.value), {
      key,
    })

    // adding order data if it should be stored
    if (isObject.value && storeOrder.value) {
      let order = instances.value.length + 1

      // should load to data otherwise `order` would
      // be nulled because of `load` method
      if (data !== null) {
        data[storeOrder.value] = order
      } else {
      
      // if we don't have date just set it as a
      // default to not null other values
        schema.schema[storeOrder.value].default = order
      }
    }

    instances.value.push(schema)
    
    if (data !== null) {
      nextTick(() => {
        var child$ = children$.value[index]

        child$.load({
          [child$.name]: data
        })
      })
    }

    return index
  }

  /**
   * Triggered when the user adds a new list item or `.add()` method is invoked.
   *
   * @public
   * @param {object} child$ the child element's component that has been added.
   * @param {array} index index of added list item.
   * @event add
   */
  const handleAdd = (child$, index) => {
    fireAdd(child$, index)
  }

  /**
   * Triggered when the user removes a list item or `.remove()` method is invoked.
   *
   * @public
   * @param {number} index index of child to be removed.
   * @event remove
   */
  const handleRemove = (index) => {
    fireRemove(index)
  }

  /**
   * Sets initial instances when the element is initalized.
   * 
   * @private 
   * @returns {void}
   */
  const setInitialInstances = () => {
    let count = default_.value.length > initial.value ? default_.value.length : initial.value

    for (let i = 0; i < count; i++) {
      insert(default_.value && default_.value[i] ? default_.value[i] : null)
    }
  }

  // ============== WATCHERS ==============

  watch(prototype, () => {
    let value = value.value

    clear()

    _.each(value, (one) => {
      insert(one)
    })
  }, { lazy: false, deep: true })

  // ================ HOOKS ===============

  if (prototype.value !== undefined) {
    setInitialInstances()
  }

  return {
    // Data
    child$,
    instances,

    // Computed
    children,
    children$,
    initial,
    prototype,
    isObject,
    next,

    // Methods
    add,
    remove,
    insert,
    handleAdd,
    handleRemove,
    setInitialInstances,
  }
}