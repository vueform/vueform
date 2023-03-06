import _ from 'lodash'
import { computed, toRefs, inject } from 'vue'
import localize from '../../utils/localize'

const base = function(props, context, dependencies)
{
  const {
    default: default_,
    name,
  } = toRefs(props)

  // ============ DEPENDENCIES =============

  const nullValue = dependencies.nullValue
  const form$ = dependencies.form$
  const parent = dependencies.parent

  // ============== COMPUTED ===============

  /**
  * The default value of the element.
  * 
  * @type {any}
  * @private
  */
  const defaultValue = computed(() => {
    let parentDefaultValue

    if (parent && parent.value && !parent.value.mounted) {
      parentDefaultValue = parent.value.defaultValue[name.value]
    }
    else if (!form$.value.mounted && form$.value.options.default[name.value]) {
      parentDefaultValue = form$.value.options.default[name.value]
    }

    if (parentDefaultValue !== undefined) {
      return parentDefaultValue instanceof File
        ? new File([parentDefaultValue], parentDefaultValue.name, parentDefaultValue)
        : _.cloneDeep(parentDefaultValue)
    }

    if (default_.value !== undefined) {
      return default_.value instanceof File
        ? new File([default_.value], default_.value.name, default_.value)
        : _.cloneDeep(default_.value)
    }

    return _.cloneDeep(nullValue.value)
  })

  return {
    defaultValue,
  }
}

const text = function(props, context, dependencies)
{
  const {
    default: default_,
    name,
  } = toRefs(props)

  // ============ DEPENDENCIES =============

  const nullValue = dependencies.nullValue
  const form$ = dependencies.form$
  const parent = dependencies.parent

  // =============== INJECT ===============

  const config$ = inject('config$')

  // ============== COMPUTED ===============

  /**
  * The default value of the element.
  * 
  * @type {any}
  * @private
  */
  const defaultValue = computed(() => {
    let parentDefaultValue

    if (parent && parent.value && !parent.value.mounted) {
      parentDefaultValue = parent.value.defaultValue[name.value]
    }
    else if (!form$.value.mounted && form$.value.options.default[name.value]) {
      parentDefaultValue = form$.value.options.default[name.value]
    }

    if (parentDefaultValue !== undefined) {
      return parentDefaultValue instanceof File
        ? new File([parentDefaultValue], parentDefaultValue.name, parentDefaultValue)
        : localize(_.cloneDeep(parentDefaultValue), config$.value)
    }

    if (default_.value !== undefined) {
      return default_.value instanceof File
        ? new File([default_.value], default_.value.name, default_.value)
        : localize(_.cloneDeep(default_.value), config$.value)
    }

    return _.cloneDeep(nullValue.value)
  })

  return {
    defaultValue,
  }
}

const object = function(props, context, dependencies)
{
  const {
    default: default_,
    name,
  } = toRefs(props)

  // ============ DEPENDENCIES =============

  const nullValue = dependencies.nullValue
  const form$ = dependencies.form$
  const parent = dependencies.parent

  // ============== COMPUTED ===============

  const defaultValue = computed(() => {
    let parentDefaultValue

    if (parent && parent.value && !parent.value.mounted) {
      parentDefaultValue = parent.value.defaultValue[name.value]
    }
    else if (!form$.value.mounted && form$.value.options.default[name.value]) {
      parentDefaultValue = form$.value.options.default[name.value]
    }

    if (parentDefaultValue !== undefined) {
      return _.cloneDeep(_.merge({}, default_.value || nullValue.value, parentDefaultValue))
    }

    if (Object.keys(default_.value).length > 0) {
      return _.cloneDeep(default_.value)
    }

    return _.cloneDeep(nullValue.value)
  })

  return {
    defaultValue,
  }
}

const group = function(props, context, dependencies)
{
  const {
    default: default_,
  } = toRefs(props)

  // ============ DEPENDENCIES =============

  const form$ = dependencies.form$
  const parent = dependencies.parent

  // ============== COMPUTED ===============

  const defaultValue = computed(() => {
    let parentDefaultValue = {}

    if (parent && parent.value && !parent.value.mounted) {
      parentDefaultValue = parent.value.defaultValue
    }
    else if (!form$.value.mounted && form$.value.options.default) {
      parentDefaultValue = form$.value.options.default
    }

    return _.cloneDeep(_.merge({}, default_.value, parentDefaultValue))
  })

  return {
    defaultValue,
  }
}

const multilingual = function(props, context, dependencies)
{
  const {
    default: default_,
    name,
  } = toRefs(props)

  // ============ DEPENDENCIES =============

  const nullValue = dependencies.nullValue
  const form$ = dependencies.form$
  const parent = dependencies.parent

  // ============== COMPUTED ===============

  const defaultValue = computed(() => {
    let parentDefaultValue

    if (parent && parent.value && !parent.value.mounted) {
      parentDefaultValue = parent.value.defaultValue[name.value]
    }
    else if (!form$.value.mounted && form$.value.options.default[name.value]) {
      parentDefaultValue = form$.value.options.default[name.value]
    }

    if (parentDefaultValue !== undefined) {
      return _.cloneDeep(Object.assign({}, _.clone(nullValue.value), parentDefaultValue))
    }

    if (default_.value === undefined) {
      return _.clone(nullValue.value)
    }
    
    let def = _.clone(default_.value)

    if (!_.isPlainObject(def)) {
      let tempDefault = {}

      _.each(nullValue.value, (v, language) => {
        tempDefault[language] = def
      })

      def = tempDefault
    }

    return Object.assign({}, _.clone(nullValue.value), def)
  })

  return {
    defaultValue,
  }
}

export {
  object,
  group,
  multilingual,
  text,
}

export default base