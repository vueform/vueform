import { ref, toRefs, computed, watch, getCurrentInstance, provide, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, inject, nextTick, markRaw, reactive } from 'vue';
import _ from 'lodash';
import moment from 'moment';

function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) {
      _defineProperty$1(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var config = {
  /**
   * General
   */
  env: 'development',
  plugins: [],
  elements: [],
  /**
   * Theme & layout
   */
  theme: {},
  templates: {},
  views: {},
  size: 'md',
  addClasses: {},
  removeClasses: {},
  replaceClasses: {},
  overrideClasses: {},
  presets: {},
  usePresets: [],
  classHelpers: false,
  columns: {},
  forceLabels: false,
  floatPlaceholders: true,
  displayErrors: true,
  displayMessages: true,
  /**
   * Localization
   */
  languages: {
    en: 'English'
  },
  language: 'en',
  locales: {},
  locale: null,
  fallbackLocale: 'en',
  /**
   * Sorting
   */
  orderFrom: 1,
  /**
   * Validation
   */
  rules: {},
  validateOn: 'change|step',
  /**
   * Submitting
   */
  endpoints: {
    submit: {
      url: '/vueform/process',
      method: 'post'
    },
    uploadTempFile: {
      url: '/vueform/file/upload-temp',
      method: 'post'
    },
    removeTempFile: {
      url: '/vueform/file/remove-temp',
      method: 'post'
    },
    removeFile: {
      url: '/vueform/file/remove',
      method: 'post'
    },
    attachment: {
      url: '/vueform/editor/attachment',
      method: 'post'
    },
    activeUrl: {
      url: '/vueform/validators/active_url',
      method: 'post'
    },
    unique: {
      url: '/vueform/validators/unique',
      method: 'post'
    },
    exists: {
      url: '/vueform/validators/exists',
      method: 'post'
    }
  },
  formData(form$) {
    return form$.convertFormData(_objectSpread2$1(_objectSpread2$1({}, form$.requestData), form$.formKey ? {
      formKey: form$.formKey
    } : {}));
  },
  beforeSend: null,
  axios: {},
  /**
   * Location
   */
  locationProvider: 'google',
  services: {
    algolia: {
      app_id: '',
      api_key: ''
    }
  }
};

var MERGE_KEYS = ['presets', 'usePresets', 'addClasses', 'prependClasses', 'removeClasses', 'replaceClasses', 'overrideClasses'];
var LOCALS_KEYS = ['addClass', 'removeClass', 'replaceClass', 'overrideClass'];
class MergeClasses {
  constructor() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.options = options;
    if (this.shouldMergeTemplateClasses) {
      this.componentClasses = this.templateClasses;
      this.merge({
        overrideClasses: {
          [this.component]: this.themeClasses
        }
      });
    } else {
      this.componentClasses = this.templateClasses;
    }
    this.merge(this.config);
    _.each(options.merge, merge => {
      this.merge(merge);
    });
    this.merge(this.locals || this.component$.value, true);
    if (this.config.classHelpers && this.config.env !== 'production') {
      this.merge({
        prependClasses: {
          [this.component]: this.getClassHelpers(this.componentClasses, [this.component])
        }
      });
    }
  }
  get classes() {
    return new Proxy(this.componentClasses, {
      get: (target, prop) => {
        if (typeof prop !== 'string') {
          return target[prop];
        }
        return this.getDynamicClasses(target, prop);
      }
    });
  }
  get config() {
    return this.options.config || {};
  }
  get component() {
    return this.options.component;
  }
  get component$() {
    return this.options.component$;
  }
  get locals() {
    return this.options.locals;
  }
  get view() {
    return this.options.view;
  }
  get theme() {
    return this.options.theme;
  }
  get presets() {
    return this.config.presets;
  }
  get templates() {
    return this.options.templates || {};
  }
  get template() {
    return this.view && this.templates["".concat(this.component, "_").concat(this.view)] ? this.templates["".concat(this.component, "_").concat(this.view)] : this.templates[this.component] || {};
  }
  get themeClasses() {
    return _.cloneDeep(this.toArray(this.view && this.theme.classes["".concat(this.component, "_").concat(this.view)] ? this.theme.classes["".concat(this.component, "_").concat(this.view)] : this.theme.classes[this.component]));
  }
  get templateClasses() {
    return _.cloneDeep(this.toArray(this.defaultClasses));
  }
  get shouldMergeTemplateClasses() {
    var merge = typeof this.template.data === 'function' && this.template.data().merge !== undefined ? this.template.data().merge : this.component$.value.merge;
    return merge !== undefined ? merge : false;
  }
  get defaultClasses() {
    return typeof this.template.data === 'function' && this.template.data().defaultClasses ? this.template.data().defaultClasses : this.component$.value.defaultClasses;
  }
  get mainClass() {
    var defaultClasses = typeof this.template.data === 'function' && this.template.data().defaultClasses ? this.template.data().defaultClasses : this.component$.value.defaultClasses;
    return Object.keys(defaultClasses)[0];
  }
  merge(merge) {
    var locals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    _.each(this.pick(merge, locals ? LOCALS_KEYS : MERGE_KEYS), (mergables, key) => {
      switch (key) {
        case 'addClasses':
        case 'prependClasses':
        case 'overrideClasses':
          if (!mergables || mergables[this.component] === undefined) {
            return;
          }
          this.mergeComponentClasses(this.toArray(mergables[this.component]), key);
          break;
        case 'removeClasses':
        case 'replaceClasses':
          if (!mergables || mergables[this.component] === undefined) {
            return;
          }
          this.mergeComponentClasses(mergables[this.component], key);
          break;
        case 'addClass':
        case 'removeClass':
        case 'replaceClass':
        case 'overrideClass':
          if (!mergables) {
            return;
          }
          if (typeof mergables === 'string' || Array.isArray(mergables)) {
            if (!Array.isArray(mergables)) {
              mergables = mergables.length > 0 ? mergables.split(' ') : [];
            }
            this.mergeComponentClasses({
              [this.mainClass]: mergables
            }, "".concat(key, "es"));
          } else if (key === 'replaceClass') {
            this.mergeComponentClasses(mergables, "".concat(key, "es"));
          } else if (_.isPlainObject(mergables)) {
            this.mergeComponentClasses(this.toArray(mergables), "".concat(key, "es"));
          } else ;
          break;
        case 'presets':
        case 'usePresets':
          if (!Array.isArray(mergables)) {
            return;
          }
          _.each(mergables, presetName => {
            this.merge(this.presets[presetName]);
          });
          break;
      }
    });
  }
  mergeComponentClasses(componentClasses, key) {
    _.each(componentClasses, (classes, className) => {
      this[key](classes, [className]);
    });
  }
  addClasses(add, levels) {
    var base = _.get(this.componentClasses, levels.join('.'));
    if (add.length == 1 && !add[0]) {
      return;
    }
    if (_.isPlainObject(base)) {
      _.each(add, (subclasses, subclassName) => {
        this.addClasses(subclasses, levels.concat(subclassName));
      });
    } else {
      _.set(this.componentClasses, levels.join('.'), _.union(base, add));
    }
  }
  prependClasses(prepend, levels) {
    var base = _.get(this.componentClasses, levels.join('.'));
    if (prepend.length == 1 && !prepend[0]) {
      return;
    }
    if (_.isPlainObject(base)) {
      _.each(prepend, (subclasses, subclassName) => {
        this.prependClasses(subclasses, levels.concat(subclassName));
      });
    } else {
      _.set(this.componentClasses, levels.join('.'), _.union(prepend, base));
    }
  }
  removeClasses(remove, levels) {
    var base = _.get(this.componentClasses, levels.join('.'));
    if (_.isPlainObject(base)) {
      _.each(remove, (subclasses, subclassName) => {
        this.removeClasses(subclasses, levels.concat(subclassName));
      });
    } else if (Array.isArray(base)) {
      _.set(this.componentClasses, levels.join('.'), base.filter(c => {
        return typeof c !== 'string' || remove.indexOf(c) === -1;
      }));
    }
  }
  replaceClasses(replace, levels) {
    var base = _.get(this.componentClasses, levels.join('.'));
    if (Array.isArray(replace)) {
      var tempReplace = {};
      replace.forEach(r => {
        tempReplace = _objectSpread2$1(_objectSpread2$1({}, tempReplace), r);
      });
      replace = tempReplace;
    }
    if (_.isPlainObject(base)) {
      _.each(replace, (subclasses, subclassName) => {
        this.replaceClasses(subclasses, levels.concat(subclassName));
      });
    } else if (Array.isArray(base)) {
      _.set(this.componentClasses, levels.join('.'), base.map(c => {
        return typeof c !== 'string' || Object.keys(replace).indexOf(c) === -1 ? c : replace[c];
      }));
    }
  }
  overrideClasses(override, levels) {
    var base = _.get(this.componentClasses, levels.join('.'));
    if (_.isPlainObject(base)) {
      _.each(override, (subclasses, subclassName) => {
        this.overrideClasses(subclasses, levels.concat(subclassName));
      });
    } else {
      _.set(this.componentClasses, levels.join('.'), override);
    }
  }
  toArray(componentClasses) {
    var arrayClasses = {};
    _.each(componentClasses, (classes, className) => {
      arrayClasses[className] = this.classesToArray(classes, [className]);
    });
    return arrayClasses;
  }
  classesToArray(classes, path) {
    var _classes$constructor;
    var arrayClasses = classes;
    var base = path ? _.get(this.componentClasses, path.join('.')) : undefined;
    if (typeof classes === 'string') {
      arrayClasses = classes.length > 0 ? classes.split(' ') : [];
    } else if (_.isPlainObject(classes)) {
      if (base && Array.isArray(base)) {
        arrayClasses = [classes];
      } else if (!base || _.isPlainObject(base)) {
        arrayClasses = {};
        _.each(classes, (subclasses, subclassName) => {
          arrayClasses[subclassName] = this.classesToArray(subclasses, path.concat([subclassName]));
        });
      }
    } else if (typeof classes === 'boolean' || typeof classes === 'object' && ['ComputedRefImpl', 'RefImpl'].indexOf(classes === null || classes === void 0 ? void 0 : (_classes$constructor = classes.constructor) === null || _classes$constructor === void 0 ? void 0 : _classes$constructor.name) !== -1) {
      throw Error("Cannot add conditional class to ".concat(this.component, ": '").concat(path.join('.'), "'"));
    }
    return arrayClasses;
  }
  getDynamicClasses(target, prop, mainTarget) {
    if (!mainTarget) {
      mainTarget = target;
    }
    var classes = Array.isArray(target[prop]) ? _.flattenDeep(target[prop]) : target[prop];
    if (target["$".concat(prop)]) {
      return _.flattenDeep(target["$".concat(prop)](mainTarget, this.component$.value));
    }
    if (_.isPlainObject(classes)) {
      classes = _.cloneDeep(classes);
      _.each(classes, (classList, className) => {
        classes[className] = this.getDynamicClasses(classes, className, target);
      });
    }
    return classes;
  }
  getClassHelpers(componentClasses, path) {
    var classHelpers = {};
    _.each(componentClasses, (classes, className) => {
      if (className.match(/[$]/)) {
        return;
      }

      // let name = componentClasses[`$${className}`] !== undefined ? `$${className}` : className

      if (_.isPlainObject(classes)) {
        classHelpers[className] = this.getClassHelpers(componentClasses[className], path.concat([className]));
      } else {
        classHelpers[className] = ["".concat(path.join('.'), ".").concat(className, "-->")];
      }
    });
    return classHelpers;
  }
  pick(from, picks) {
    var picked = {};
    if (!from) {
      return picked;
    }
    _.each(picks, pick => {
      if (pick in from) {
        picked[pick] = from[pick];
      }
    });
    return picked;
  }
}

var getFormData = function getFormData(data, formData, namespace) {
  if (formData === undefined) {
    formData = new FormData();
  }
  if (namespace === undefined) {
    namespace = '';
  }
  if (_.isArray(data)) {
    _.each(data, (value, key) => {
      getFormData(value, formData, namespace + '[' + key + ']');
    });
  } else if (_.isPlainObject(data)) {
    _.each(data, (value, key) => {
      getFormData(value, formData, namespace ? namespace + '[' + key + ']' : key);
    });
  } else {
    formData.append(namespace, data === null ? '' : data);
  }
  return formData;
};

function asyncForEach(_x, _x2) {
  return _asyncForEach.apply(this, arguments);
}
function _asyncForEach() {
  _asyncForEach = _asyncToGenerator(function* (array, callback) {
    for (var index = 0; index < (_.isPlainObject(array) ? _.values(array) : array).length; index++) {
      var key = _.isPlainObject(array) ? _.keys(array)[index] : index;
      yield callback(array[key], key, array);
    }
  });
  return _asyncForEach.apply(this, arguments);
}

var fileToObject = function fileToObject(file) {
  return {
    lastModified: file.lastModified,
    name: file.name,
    size: file.size,
    type: file.type
  };
};
var dataToComperable = function dataToComperable(data) {
  if (data instanceof File) {
    return fileToObject(data);
  } else if (data instanceof Date) {
    return data.toString();
  } else if (Array.isArray(data)) {
    return data.map(dataToComperable);
  } else if (typeof data === 'object' && data !== null) {
    return _.mapValues(data, dataToComperable);
  }
  return data;
};
function dataEquals(a, b) {
  return _.isEqual(dataToComperable(a), dataToComperable(b));
}

var flatten = source => {
  var collection = [];
  source.forEach(item => {
    collection.push(item.path);
    if (item.children) {
      flatten(item.children).forEach(child => {
        collection.push(child);
      });
    }
  });
  return collection;
};
var collect = function collect(elements) {
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var children = [];
  Object.keys(elements).forEach(name => {
    var element = elements[name];
    var path = prefix.length ? "".concat(prefix, ".").concat(name) : name;
    var member = {
      name,
      path,
      type: element.type
    };
    if (['group', 'object'].indexOf(element.type) !== -1 && Object.keys(element.schema || {}).length) {
      member.children = collect(element.schema, path);
    }
    if (element.type === 'list' && Object.keys((element === null || element === void 0 ? void 0 : element.element) || {}).length) {
      member.children = collect({
        0: element.element
      }, path);
    }
    children.push(member);
  });
  return children;
};

var base$16 = function base(props, context, dependencies) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  if (!options.events) {
    throw new Error('`events` option is required for useEvents');
  }

  // ================ DATA ================

  /**
   * Helper property used to store available events for the element.
   * 
   * @type {array}
   * @default []
   * @private
   */
  var events = ref(options.events);

  /**
   * Helper property used to store listeners for events.
   * 
   * @type {object}
   * @default {}
   * @private
   */
  var listeners = ref({});

  // =============== METHODS ==============

  /**
   * Adds a listener for an event.
   *
   * @param {string} event name of the event to listen for
   * @param {function} callback callback to run when the event is triggered
   * @returns {void}
   */
  var on = (evt, callback) => {
    if (!listeners.value[evt]) {
      listeners.value[evt] = [];
    }
    listeners.value[evt].push(callback);
  };

  /**
   * Removes all listeners for an event.
   *
   * @param {string} event name of the event to remove
   * @returns {void}
   */
  var off = evt => {
    delete listeners.value[evt];
  };

  /**
   * Fires and emits an event.
   *
   * @param {any} args list of arguments to pass over to the event callback 
   * @returns {void}
   */
  var fire = function fire() {
    var evt = arguments[0];
    var args = [].slice.call(arguments).splice(1);
    _.each(listeners.value[evt], callback => {
      callback(...args);
    });
    if (!listeners.value[evt] || !listeners.value[evt].length) {
      context.emit(...[evt].concat(args));
    }
  };

  // =============== HOOKS ================

  // If component has descriptor subscribe upfront
  // for events using `onEvent` format 
  _.each(events.value, evt => {
    var callback = props['on' + _.upperFirst(_.camelCase(evt))];
    if (callback) {
      on(evt, callback);
    }
  });
  return {
    events,
    listeners,
    on,
    off,
    fire
  };
};

function useModel (props, context, dependencies) {
  var {
    value: v,
    modelValue: mv,
    sync
  } = toRefs(props);
  var $this = dependencies.$this;

  /**
   * Any `v-model` / `value` / `modelValue` prop provided for the form.
   * 
   * @type {object}
   * @private
   */
  var externalValue = $this.$vueform.vueVersion === 3 ? mv : v;

  // ================ DATA =================

  /**
   * The internal store for the form's model. 
   * 
   * @type {object}
   * @default {}
   * @private
   */
  var internalData = ref({});

  /**
   * 
   * 
   * @private
   */
  var intermediaryValue = ref(externalValue && externalValue.value ? _.cloneDeep(externalValue.value) : null);

  // ============== COMPUTED ===============

  /**
   * Whether form data should be synced when the external value changes (when external value is used).
   * 
   * @type {boolean}
   * @private
   */
  var isSync = computed(() => {
    return sync.value && externalValue && externalValue.value !== undefined;
  });

  /**
   * The form's model, which either comes from `externalValue` or `internalData`.
   * 
   * @type {object}
   * @private
   */
  var model = computed(() => {
    return _.cloneDeep(externalValue.value || internalData.value);
  });

  // =============== METHODS ==============

  /**
   * Updates an element's data in the form model.
   * 
   * @param {string} dataPath the `dataPath` property of the element to update
   * @param {any} val value to update with
   * @returns {void}
   * @private
   */
  var updateModel = (dataPath, val) => {
    // When using v-model as model
    if (externalValue.value) {
      // Non-flat elements
      if (dataPath) {
        var parts = dataPath.split('.');
        var element = parts.pop();
        var parent = parts.join('.') || null;
        var externalValueObject = parent ? _.get(externalValue.value, parent) : externalValue.value;

        // Thinking about cases when it tries to to set an element 
        // which no longer exists in the same tick (eg. when removing
        // a list element with order and tries to refresh its order field)
        if (externalValueObject !== undefined) {
          // We are setting externalValue (v-model) to instantly reflect changes in field value
          $this.$set(externalValueObject, element, val);
        }

        // Setting directly because externalValue might contain changes
        // that intermediary does not have yet, so it would overwrite
        // external model with old value
        intermediaryValue.value = _.cloneDeep(externalValue.value);
      }

      // Group element
      else {
        _.each(val, (v, key) => {
          if (externalValue.value !== undefined) {
            $this.$set(externalValue.value, key, v);
          }
          if (intermediaryValue.value !== undefined) {
            $this.$set(intermediaryValue.value, key, v);
          }
        });
      }

      // When using this.data as model
    } else {
      // We need a different clone than this.valueValue clone to not effect children watching model
      var _model = _.cloneDeep(externalValue.value || internalData.value);

      // Non-flat elements
      if (dataPath) {
        _.set(_model, dataPath, val);

        // Flat elements (eg. Group)
      } else {
        _model = Object.assign({}, _model, val);
      }
      internalData.value = _model;
    }
  };
  if (externalValue && externalValue.value) {
    watch(model, (n, o) => {
      if (dataEquals(n, o)) {
        return;
      }
      internalData.value = n;
    }, {
      deep: true,
      immediate: false
    });
  }
  return {
    model,
    internalData,
    intermediaryValue,
    externalValue,
    isSync,
    updateModel
  };
}

var base$15 = function base(props, context) {
  var {
    schema,
    tabs,
    steps,
    size,
    view,
    views,
    addClass,
    removeClass,
    replaceClass,
    overrideClass,
    addClasses,
    removeClasses,
    replaceClasses,
    overrideClasses,
    presets,
    templates,
    theme,
    messages,
    columns,
    languages,
    formKey,
    endpoint,
    method,
    formData,
    language,
    validateOn,
    forceLabels,
    floatPlaceholders,
    multilingual,
    stepsControls,
    displayErrors,
    displayMessages,
    formatLoad,
    formatData,
    prepare,
    default: default_,
    disabled,
    loading,
    onChange: _onChange,
    onReset: _onReset,
    onClear: _onClear,
    onSubmit: _onSubmit,
    onSuccess: _onSuccess,
    onError: _onError,
    onLanguage: _onLanguage,
    onBeforeMount: _onBeforeMount,
    onMounted: _onMounted,
    onBeforeUpdate: _onBeforeUpdate,
    onUpdated: _onUpdated,
    onBeforeUnmount: _onBeforeUnmount,
    onUnmounted: _onUnmounted
  } = toRefs(props);
  var evts = ['change', 'reset', 'clear', 'submit', 'success', 'error', 'language', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'];
  var $this = getCurrentInstance().proxy;

  // ============ DEPENDENCIES ============

  var {
    events,
    listeners,
    fire,
    on,
    off
  } = base$16(props, context, {
    form$: $this
  }, {
    events: evts
  });
  var {
    externalValue,
    model,
    internalData,
    intermediaryValue,
    isSync,
    updateModel
  } = useModel(props, context, {
    $this,
    fire
  });

  // ================ DATA ================

  /**
  * The components of highest level form elements.
  * 
  * @type {object}
  * @default {}
  * @private
  */
  var elements$ = ref({});

  /**
  * The FormTabs component.
  * 
  * @type {component}
  * @private
  */
  var tabs$ = ref(null);

  /**
  * The FormSteps component.
  * 
  * @type {component}
  * @private
  */
  var steps$ = ref(null);

  /**
   * Enables/disables validation for the form globally.
   * 
   * @type {boolean}
   * @default true
   */
  var validation = ref(true);

  /**
   * Enables/disables conditions for the form globally.
   * 
   * @type {boolean}
   * @default true
   */
  var conditions = ref(true);

  /**
   * Instance of MessageBag service. It can be used to add [custom errors and messages](/docs/1.x/validating-elements#custom-errors-and-messages).
   * 
   * @type {MessageBag}
   * @default MessageBag
   */
  var messageBag = ref({});

  /**
   * Whether the async process of submitting the form is currently in progress.
   * 
   * @type {boolean}
   * @default false
   */
  var submitting = ref(false);

  /**
   * Whether the async process of preparing the elements for submit is currently in progress.
   * 
   * @type {boolean}
   * @default false
   */
  var preparing = ref(false);

  /**
   * The code of the currently selected language (eg. `en`).
   * 
   * @type {string}
   * @default config.language
   */
  var selectedLanguage = ref(null);

  /**
   * The configuration object of the user when using SFC mode. Basically the value of the component's `data.vueform` object.
   * 
   * @type {object}
   * @default {}
   * @private
   */
  var userConfig = ref({});

  /**
   * Whether the form has been mounted.
   * 
   * @type {boolean}
   * @default false
   */
  var mounted = ref(false);

  // ============== COMPUTED ==============

  /**
   * The form component instance (self).
   * 
   * @type {component}
   */
  var form$ = computed(() => {
    return $this;
  });

  /**
   * The default configuration object.
   * 
   * @type {object}
   */
  var baseConfig = computed(() => {
    return $this.$vueform;
  });

  /**
   * Registered services.
   * 
   * @type {object}
   */
  var services = computed(() => {
    return $this.$vueform.services;
  });

  /**
   * Form options merged from config, component props & the component's `data.vueform` options.
   * 
   * @type {object}
   * @private
   */
  var options = computed(() => {
    var options = {
      schema: orderedSchema.value,
      tabs: formTabs.value,
      steps: formSteps.value
    };

    // Prop options will override Component.data() options
    var override = {
      columns,
      languages,
      language,
      theme,
      method,
      validateOn,
      messages,
      formKey,
      multilingual,
      formatLoad,
      formatData,
      prepare,
      default: default_,
      formData,
      templates,
      addClass,
      removeClass,
      replaceClass,
      overrideClass,
      addClasses,
      removeClasses,
      replaceClasses,
      overrideClasses,
      presets,
      size,
      view,
      views
    };

    // Only set from prop option if it is not `null` - means the prop is set
    // (otherwise will use the value defined in `defaults` or `undefined` if not)
    var ifPropSet = {
      stepsControls,
      displayErrors,
      displayMessages,
      forceLabels,
      disabled,
      loading,
      floatPlaceholders,
      endpoint,
      onChange: _onChange.value,
      onReset: _onReset.value,
      onClear: _onClear.value,
      onSubmit: _onSubmit.value,
      onSuccess: _onSuccess.value,
      onError: _onError.value,
      onLanguage: _onLanguage.value,
      onBeforeMount: _onBeforeMount.value,
      onMounted: _onMounted.value,
      onBeforeUpdate: _onBeforeUpdate.value,
      onUpdated: _onUpdated.value,
      onBeforeUnmount: _onBeforeUnmount.value,
      onUnmounted: _onUnmounted.value
    };
    var defaults = {
      languages: baseConfig.value.config.languages,
      language: baseConfig.value.config.language,
      endpoint: typeof baseConfig.value.config.endpoints.submit === 'function' ? baseConfig.value.config.endpoints.submit : baseConfig.value.config.endpoints.submit.url,
      method: typeof baseConfig.value.config.endpoints.submit === 'function' ? null : baseConfig.value.config.endpoints.submit.method,
      validateOn: baseConfig.value.config.validateOn,
      displayErrors: baseConfig.value.config.displayErrors,
      displayMessages: baseConfig.value.config.displayMessages,
      forceLabels: baseConfig.value.config.forceLabels,
      floatPlaceholders: baseConfig.value.config.floatPlaceholders,
      formData: baseConfig.value.config.formData,
      theme: baseConfig.value.theme,
      view: baseConfig.value.config.view,
      views: {},
      columns: {},
      size: null,
      addClass: null,
      removeClass: null,
      replaceClass: null,
      overrideClass: null,
      addClasses: {},
      removeClasses: {},
      replaceClasses: {},
      overrideClasses: {},
      presets: [],
      templates: {},
      messages: {},
      default: {},
      formKey: null,
      formatLoad: null,
      formatData: null,
      prepare: null,
      multilingual: false,
      stepsControls: true,
      disabled: false,
      loading: false
    };
    _.each(override, (val, key) => {
      options[key] = userConfig.value[key] !== undefined ? userConfig.value[key] : (val && val.value ? val.value : undefined) || defaults[key];
    });
    _.each(ifPropSet, (val, key) => {
      options[key] = userConfig.value[key] !== undefined ? userConfig.value[key] : val && val.value !== null ? val.value : defaults[key];
    });
    return options;
  });

  /**
  * The global schema which has already been ordered based on tabs/steps element order.
  * 
  * @type {object}
  * @private
  */
  var orderedSchema = computed(() => {
    var blocks;
    var orderedSchema = formSchema.value;
    if (Object.keys(formSteps.value).length > 0) {
      blocks = formSteps.value;
    }
    if (Object.keys(formTabs.value).length > 0) {
      blocks = formTabs.value;
    }
    if (blocks) {
      orderedSchema = {};
      _.each(blocks, block => {
        _.each(block.elements, name => {
          if (formSchema.value[name]) {
            orderedSchema[name] = formSchema.value[name];
          }
        });
      });
      _.each(Object.keys(formSchema.value), name => {
        if (orderedSchema[name] === undefined) {
          orderedSchema[name] = formSchema.value[name];
        }
      });
    }
    return orderedSchema;
  });

  /**
   * The form's schema merged from `schema` prop and the component's `data.vueform.schema` object.
   * 
   * @type {object}
   * @private
   */
  var formSchema = computed(() => {
    return _.merge({}, schema && schema.value ? schema.value : {}, userConfig.value.schema || {});
  });

  /**
   * The form's tabs merged from `tabs` prop and the component's `data.vueform.tabs` object.
   * 
   * @type {object}
   * @private
   */
  var formTabs = computed(() => {
    return _.merge({}, tabs && tabs.value ? tabs.value : {}, userConfig.value.tabs || {});
  });

  /**
   * The form's steps merged from `steps` prop and the component's `data.vueform.steps` object.
   * 
   * @type {object}
   * @private
   */
  var formSteps = computed(() => {
    return _.merge({}, steps && steps.value ? steps.value : {}, userConfig.value.steps || {});
  });

  /**
   * The tree representation of the form schema.
   * 
   * @type {array}
   * @private
   */
  var tree = computed(() => {
    return collect(formSchema.value);
  });

  /**
   * The flat tree representation of the form schema.
   * 
   * @type {array}
   * @private
   */
  var flatTree = computed(() => {
    return flatten(tree.value);
  });

  /**
   * The form data including the data of all elements even the ones with `available: false` and `submit: false`.
   * 
   * @type {object}
   */
  var data = computed(() => {
    var data = {};
    _.each(elements$.value, e$ => {
      if (e$.isStatic) {
        return;
      }
      data = Object.assign({}, data, e$.data);
    });
    return data;
  });

  /**
   * The form data excluding elements with `available: false` and `submit: false`. This one gets submitted by default, but can be changed with [`formData`](#option-form-data)
   * 
   * @type {object}
   */
  var requestData = computed(() => {
    var requestData = {};
    _.each(elements$.value, e$ => {
      if (e$.isStatic) {
        return;
      }
      requestData = Object.assign({}, requestData, e$.requestData);
    });
    return formatData.value ? formatData.value(requestData) : requestData;
  });

  /**
   * Whether the form has any elements which were modified.
   * 
   * @type {boolean}
   */
  var dirty = computed(() => {
    return _.some(elements$.value, element$ => {
      return element$.isStatic === false && element$.available === true && element$.dirty === true;
    });
  });

  /**
   * Whether the form has any invalid elements.
   * 
   * @type {boolean}
   */
  var invalid = computed(() => {
    return _.some(elements$.value, element$ => {
      return element$.isStatic === false && element$.available === true && element$.invalid === true;
    });
  });

  /**
   * Whether the form has any elements with active debounce process.
   * 
   * @type {boolean}
   */
  var debouncing = computed(() => {
    return _.some(elements$.value, element$ => {
      return element$.isStatic === false && element$.available === true && element$.debouncing === true;
    });
  });

  /**
   * Whether the form has any elements with pending async validation.
   * 
   * @type {boolean}
   */
  var pending = computed(() => {
    return _.some(elements$.value, element$ => {
      return element$.isStatic === false && element$.available === true && element$.pending === true;
    });
  });

  /**
   * Whether each element in the form has been validated at least once.
   * 
   * @type {boolean}
   */
  var validated = computed(() => {
    return !_.some(elements$.value, element$ => {
      return element$.isStatic === false && element$.available === true && element$.validated === false;
    });
  });

  /**
   * Whether the form has any elements with `busy: true` or the [`isLoading`](#property-is-loading), [`preparing`](#property-preparing) or [`submitting`](#property-submitting) property is `true`.
   * 
   * @type {boolean}
   */
  var busy = computed(() => {
    return _.some(elements$.value, element$ => {
      return element$.isStatic === false && element$.available === true && element$.busy === true;
    }) || submitting.value || preparing.value || isLoading.value;
  });

  // no export
  /**
   * Errors collected from elements.
   * 
   * @type {array}
   * @private
   */
  var elementErrors = computed(() => {
    var errors = [];
    _.each(_.filter(elements$.value, {
      available: true,
      isStatic: false
    }), element$ => {
      _.each(element$.errors, error => {
        errors.push(error);
      });
    });
    return errors;
  });

  /**
   * Form errors including element errors and the ones added to [`messageBag`](#property-message-bag) manually.
   * 
   * @type {array}
   */
  var formErrors = computed(() => {
    return messageBag.value.errors;
  });

  /**
   * Whether the form has any errors.
   * 
   * @type {boolean}
   */
  var hasErrors = computed(() => {
    return formErrors.value.length > 0;
  });

  /**
   * Whether the form should display errors above the form with [`FormErrors`](form-errors) component. Can be disabled by [`displayErrors`](#option-display-errors) or in `config.displayErrors`.
   * 
   * @type {boolean}
   */
  var showErrors = computed(() => {
    return hasErrors.value && options.value.displayErrors;
  });

  /**
   * Form messages including element messages and the ones added to [`messageBag`](#property-message-bag) manually.
   * 
   * @type {array}
   */
  var formMessages = computed(() => {
    return messageBag.value.messages;
  });

  /**
   * Whether the form has any messages.
   * 
   * @ignore
   * @type {boolean}
   */
  var hasMessages = computed(() => {
    return formMessages.value.length > 0;
  });

  /**
   * Whether the form should display messages above the form with [`FormMessages`](form-messages) component. Can be disabled by [`displayMessages`](#option-display-messages) or in `config.displayMessages`.
   * 
   * @type {boolean}
   */
  var showMessages = computed(() => {
    return hasMessages.value && options.value.displayMessages;
  });

  /**
   * Whether the form is multilingual and should show [`FormLanguages`](form-languages) component. Returns `true` if [`multilingual`](#option-multilingual) is enabled.
   * 
   * @type {boolean}
   */
  var isMultilingual = computed(() => {
    return options.value.multilingual;
  });

  /**
   * Whether the form should show langauge selectors.
   * 
   * @type {boolean}
   */
  var showLanguages = computed(() => {
    return isMultilingual.value;
  });

  /**
   * Whether submitting the form is disabled. Returns `true` if:
   * * the form has any invalid elements and [`validateOn`](#option-validate-on) contains `change`
   * * the form is [`busy`](#property-busy)
   * * manually disabled with [`disabled`](#option-disabled) option.
   * 
   * @type {boolean}
   */
  var isDisabled = computed(() => {
    return invalid.value && shouldValidateOnChange.value || busy.value || options.value.disabled;
  });

  /**
   * Whether loading state is triggered manually via [`loading`](#option-loading) option.
   * 
   * @type {boolean}
   */
  var isLoading = computed(() => {
    return options.value.loading;
  });

  /**
   * Whether the `validateOn` prop or `config.validateOn` contains `'change'`.
   * 
   * @type {boolean}
   * @private
   */
  var shouldValidateOnChange = computed(() => {
    return options.value.validateOn.split('|').indexOf('change') !== -1;
  });

  /**
   * Whether the `validateOn` prop or `config.validateOn` contains `'step'`.
   * 
   * @type {boolean}
   * @private
   */
  var shouldValidateOnStep = computed(() => {
    return options.value.validateOn.split('|').indexOf('step') !== -1;
  });

  /**
   * Whether the form has any steps.
   * 
   * @type {boolean}
   * @private
   */
  var hasSteps = computed(() => {
    return !_.isEmpty(options.value.steps);
  });

  /**
   * Whether the form should show [`FormSteps`](form-steps) component. Returns `true` if [`steps`](#option-steps) has value.
   * 
   * @type {boolean}
   */
  var showSteps = computed(() => {
    return hasSteps.value;
  });

  /**
   * Whether the form should display steps controls below form with [`FormStepsControls`](form-steps-control) component when it has [`steps`](#option-steps). Can be disabled with [`stepsControls`](#option-steps-controls).
   * 
   * @type {boolean}
   */
  var showStepsControls = computed(() => {
    return hasSteps.value && options.value.stepsControls;
  });

  /**
   * Whether the form has any tabs.
   * 
   * @ignore
   * @type {boolean}
   */
  var hasTabs = computed(() => {
    return !_.isEmpty(options.value.tabs);
  });

  /**
   * Whether the form should show [`FormTabs`](form-tabs) component. Returns `true` if [`tabs`](#option-tabs) has value.
   * 
   * @type {boolean}
   */
  var showTabs = computed(() => {
    return hasTabs.value;
  });

  /**
   * The selected theme, extended by local template and class overrides, using [`templates`](#option-replace-templates), [`addClasses`](#option-add-classes) and [`replaceClasses`](#option-replace-classes).
   * 
   * @type {object}
   */
  var extendedTheme = computed(() => {
    var presetTemplates = {};
    _.each(baseConfig.value.config.usePresets.concat(options.value.presets), presetName => {
      var preset = baseConfig.value.config.presets[presetName];
      if (!preset || !preset.templates) {
        return;
      }
      presetTemplates = Object.assign({}, presetTemplates, preset.templates);
    });
    return Object.assign({}, options.value.theme, {
      // Add registered component to theme (or overwrite)
      templates: Object.assign({}, options.value.theme.templates, baseConfig.value.templates, presetTemplates, options.value.templates || {})
    });
  });

  /**
   * The default list of templates available to the form components.
   * 
   * @type {object}
   * @private
   */
  var Templates = computed(() => {
    return extendedTheme.value.templates;
  });

  /**
   * The component's template.
   * 
   * @type {object}
   */
  var template = computed(() => {
    return View.value && Templates.value["Vueform_".concat(View.value)] ? Templates.value["Vueform_".concat(View.value)] : Templates.value.Vueform;
  });

  /**
   * The component's classes.
   * 
   * @type {object}
   */
  var classes = computed(() => {
    return new MergeClasses({
      component: 'Vueform',
      component$: form$,
      theme: extendedTheme.value,
      config: baseConfig.value.config,
      templates: Templates.value,
      view: View.value,
      locals: options.value,
      merge: [options.value]
    }).classes;
  });

  /**
   * The resolved default size for each element and component within the form.
   *
   * @type {string}
   */
  var Size = computed(() => {
    var Size;
    if (options.value.size) {
      Size = options.value.size;
    } else {
      _.each(baseConfig.value.config.usePresets.concat(options.value.presets), presetName => {
        var preset = baseConfig.value.config.presets[presetName];
        if (!preset || !preset.size) {
          return;
        }
        Size = preset.size;
      });
    }
    if (!Size) {
      Size = baseConfig.value.config.size;
    }
    return Size;
  });

  /**
   * The name of the views for the components within the form.
   *
   * @type {object}
   * @private
   */
  var Views = computed(() => {
    var Views = baseConfig.value.config.views;
    _.each(baseConfig.value.config.usePresets.concat(options.value.presets), presetName => {
      var preset = baseConfig.value.config.presets[presetName];
      if (!preset || !preset.views) {
        return;
      }
      Views = Object.assign({}, Views, preset.views);
    });
    Views = Object.assign({}, Views, options.value.views);
    return Views;
  });

  /**
   * The name of the resolved view for Vueform component. This one should be used to determine the component's view in class functions.
   *
   * @type {string}
   */
  var View = computed(() => {
    if (options.value.view) {
      return options.value.view;
    }
    return Views.value.Vueform;
  });

  // =============== METHODS ==============

  /**
   * Updates the form data. Can be used to update a single element by providing the element's `path` as second option.
   * 
   * @param {object} data* data to update with
   * @param {object} path the `path` of the element to update (default: `null`)
   * @returns {void}
   */
  var update = function update(data) {
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    if (path) {
      el$(path).update(data);
      return;
    }
    _.each(elements$.value, element$ => {
      if (element$.isStatic) {
        return;
      }
      if (data[element$.name] === undefined && !element$.flat) {
        return;
      }
      element$.update(element$.flat ? data : data[element$.name]);
    });
  };

  /**
   * Loads data to the form using optional [`formatLoad`](#option-format-load) formatter.
   * 
   * @param {string} value* the value to be loaded
   * @param {boolean} format whether the loaded value should be formatted with [`formatLoad`](#option-format-load) (default: `false`)
   * @returns {void}
   */
  var load = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* (data) {
      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (steps$.value !== null) {
        steps$.value.enableAllSteps();
      }
      var formatted = format && options.value.formatLoad !== null ? options.value.formatLoad(data) : data;
      yield asyncForEach(elements$.value, /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator(function* (e$) {
          if (e$.isStatic) {
            return;
          }
          var loadValue = e$.flat ? formatted : formatted[e$.name];
          if (loadValue === undefined) {
            e$.clear();
            return;
          }
          yield e$.load(loadValue, format);
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    });
    return function load(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Resets the form's data to default state. Also resets all the validation state for the elements.
   * 
   * @returns {void}
   */
  var reset = () => {
    _.each(elements$.value, e$ => {
      if (e$.isStatic) {
        return;
      }
      e$.reset();
    });
    if (steps$.value !== null) {
      steps$.value.reset();
    }
    if (tabs$.value !== null) {
      tabs$.value.reset();
    }
    fire('reset');
  };

  /**
   * Clears the forms data.
   * 
   * @returns {void}
   */
  var clear = () => {
    _.each(elements$.value, e$ => {
      if (e$.isStatic) {
        return;
      }
      e$.clear();
    });
    if (steps$.value !== null) {
      steps$.value.reset();
    }
    if (tabs$.value !== null) {
      tabs$.value.reset();
    }
    fire('clear');
  };

  /**
   * Sets all elements' `dirty` to `false`.
   * 
   * @returns {void}
   */
  var clean = () => {
    _.each(elements$.value, e$ => {
      if (e$.isStatic) {
        return;
      }
      e$.clean();
    });
  };

  /**
   * Validates all elements (async).
   * 
   * @public
   * @returns {void}
   */
  var validate = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(function* () {
      if (!invalid.value && validated.value && shouldValidateOnChange.value) {
        return;
      }
      var validatableElements = Object.values(elements$.value).filter(e$ => {
        return e$.available && !e$.isStatic && (!e$.validated || !shouldValidateOnChange.value);
      });
      yield asyncForEach(validatableElements, /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator(function* (e$) {
          yield e$.validate();
        });
        return function (_x3) {
          return _ref4.apply(this, arguments);
        };
      }());
    });
    return function validate() {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
   * Sets all element validators to default state.
   * 
   * @returns {void}
   */
  var resetValidators = () => {
    _.each(elements$.value, e$ => {
      if (e$.isStatic) {
        return;
      }
      e$.resetValidators();
    });
  };

  /**
   * Validates and prepares elements then submits the form (async).
   * 
   * @returns {void}
   */
  var submit = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(function* () {
      if (isDisabled.value) {
        return;
      }
      yield validate();
      if (invalid.value) {
        return;
      }
      preparing.value = true;
      try {
        yield prepareElements();
        if (typeof options.value.prepare === 'function') {
          yield options.value.prepare(form$.value);
        }
        if (typeof $this.$vueform.config.beforeSend === 'function') {
          yield $this.$vueform.config.beforeSend(form$.value);
        }
      } catch (error) {
        fire('error', error, {
          type: 'prepare'
        }, form$.value);
        console.error(error);
        return;
      } finally {
        preparing.value = false;
      }
      fire('submit', form$.value);
      if (!options.value.endpoint) {
        return;
      }
      send();
    });
    return function submit() {
      return _ref5.apply(this, arguments);
    };
  }();

  /**
   * Sends form data to [`endpoint`](#option-endpoint) with the selected [`method`](#option-method) (async).
   * 
   * @returns {void}
   */
  var send = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(function* () {
      submitting.value = true;
      var response = {};
      try {
        var _response2, _response3;
        resetValidators();
        var _data = options.value.formData(form$.value);
        if (typeof options.value.endpoint === 'function') {
          response = yield options.value.endpoint(_data, form$.value);
        } else {
          var _$this$$vueform$confi, _$this$$vueform$confi2;
          var url = ((_$this$$vueform$confi = $this.$vueform.config.endpoints[options.value.endpoint]) === null || _$this$$vueform$confi === void 0 ? void 0 : _$this$$vueform$confi.url) || options.value.endpoint;
          var _method = ((_$this$$vueform$confi2 = $this.$vueform.config.endpoints[options.value.endpoint]) === null || _$this$$vueform$confi2 === void 0 ? void 0 : _$this$$vueform$confi2.method) || options.value.method;
          response = yield services.value.axios.request({
            url,
            method: _method.toLowerCase(),
            [_method.toLowerCase() === 'get' ? 'params' : 'data']: _data
          });
        }
        if (response && !(response instanceof Promise)) {
          var _response, _response$data, _response$data$payloa;
          if ((_response = response) !== null && _response !== void 0 && (_response$data = _response.data) !== null && _response$data !== void 0 && (_response$data$payloa = _response$data.payload) !== null && _response$data$payloa !== void 0 && _response$data$payloa.updates) {
            update(response.data.payload.updates);
          }
        }
        if (((_response2 = response) === null || _response2 === void 0 ? void 0 : _response2.status) >= 200 && ((_response3 = response) === null || _response3 === void 0 ? void 0 : _response3.status) < 300) {
          fire('success', response, form$.value);
        } else {
          fire('error', null, {
            type: 'submit'
          }, form$.value);
        }
      } catch (error) {
        fire('error', error, {
          type: 'submit'
        }, form$.value);
        console.error(error);
      } finally {
        fire('response', response, form$.value);
        submitting.value = false;
      }
    });
    return function send() {
      return _ref6.apply(this, arguments);
    };
  }();

  /**
  * Prepares all elements to submit (async).
  * 
  * @returns {void}
  * @private
  */
  var prepareElements = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(function* () {
      try {
        yield asyncForEach(elements$.value, /*#__PURE__*/function () {
          var _ref8 = _asyncToGenerator(function* (e$) {
            if (e$.prepare) {
              yield e$.prepare();
            }
          });
          return function (_x4) {
            return _ref8.apply(this, arguments);
          };
        }());
      } catch (e) {
        throw new Error(e);
      }
    });
    return function prepareElements() {
      return _ref7.apply(this, arguments);
    };
  }();

  /**
   * Disabled form validation globally.
   * 
   * @returns {void}
   */
  var disableValidation = () => {
    validation.value = false;
  };

  /**
   * Enables form validation globally.
   * 
   * @returns {void}
   */
  var enableValidation = () => {
    validation.value = true;
  };

  /**
  * Enables conditions globally.
  * 
  * @returns {void}
  */
  var enableConditions = () => {
    conditions.value = true;
  };

  /**
  * Disables conditions globally.
  * 
  * @returns {void}
  */
  var disableConditions = () => {
    conditions.value = false;
  };

  /**
  * Sets current language when using [`multilingual`](#option-multilingual).
  * 
  * @param {string} code* the language code to be selected
  * @returns {void}
  */
  var setLanguage = code => {
    selectedLanguage.value = code;
    fire('language', code);
  };

  /**
   * Handles `submit` event.
   *
   * @returns {void}
   */
  var handleSubmit = () => {
    submit();
  };

  /**
  * Converts form data to [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData).
  * 
  * @param {object} data* the data to be converted
  * @returns {FormData}
  */
  var convertFormData = data => {
    return getFormData(data);
  };

  /**
   * Returns an element by its path.
   * 
   * @param {string} path path of the element
   * @returns {component|null}
   */
  var el$ = (path, elements) => {
    if (elements === undefined) {
      elements = elements$.value;
    }
    if (_.isEmpty(elements) || !path) {
      return null;
    }
    var matches = String(path).match(/^[^.]+\./);
    if (matches) {
      var current = matches[0].replace('.', '');
      if (!elements[current]) {
        return null;
      }
      return el$(path.replace(matches[0], ''), elements[current].children$);
    } else if (elements[path] !== undefined) {
      return elements[path];
    }
    return null;
  };

  /**
   * Returns the siblings of an element.
   * 
   * @param {string} path path of the element
   * @returns {void}
   */
  var siblings$ = path => {
    if (!/\.+/.test(path)) {
      return elements$.value;
    }
    return el$(path.match(/.*(?=\.)/)[0]).children$;
  };

  /**
  * Inits MessageBag service.
  * 
  * @returns {void}
  * @private
  */
  var initMessageBag = () => {
    messageBag.value = new services.value.messageBag(elementErrors);
  };

  // ============== PROVIDES ==============

  provide('form$', form$);
  provide('theme', extendedTheme);
  provide('Size', Size);
  provide('Views', Views);

  // ================ HOOKS ===============

  initMessageBag();
  setLanguage(options.value.language);
  onBeforeMount(() => {
    userConfig.value = $this.vueform || {};

    // Manually subscribe to events defined in options object
    _.each(evts, evt => {
      var callback = options.value['on' + _.upperFirst(evt)];
      if (callback) {
        on(evt, callback);
      }
    });
    fire('beforeMount', $this);
  });
  onMounted(() => {
    mounted.value = true;

    // Watching model to track old/new values
    watch(data, (n, o) => {
      if (dataEquals(n, o)) {
        return;
      }
      fire('change', n, o, $this);
      if (externalValue && externalValue.value !== undefined) {
        context.emit('input', n);
        context.emit('update:modelValue', n);
      }
    }, {
      deep: true,
      immediate: false
    });

    // If has v-model & not equals to form data
    if (externalValue && externalValue.value !== undefined && JSON.stringify(externalValue.value) !== JSON.stringify(data.value)) {
      context.emit('input', data.value);
      context.emit('update:modelValue', data.value);
    }
    fire('mounted', $this);
  });
  onBeforeUpdate(() => fire('beforeUpdate', $this));
  onUpdated(() => fire('updated', $this));
  onBeforeUnmount(() => fire('beforeUnmount', $this));
  onUnmounted(() => fire('unmounted', $this));
  return {
    tabs$,
    steps$,
    elements$,
    options,
    validation,
    conditions,
    messageBag,
    selectedLanguage,
    submitting,
    preparing,
    events,
    listeners,
    internalData,
    data,
    requestData,
    dirty,
    invalid,
    debouncing,
    pending,
    validated,
    busy,
    formErrors,
    formMessages,
    isDisabled,
    isLoading,
    shouldValidateOnChange,
    shouldValidateOnStep,
    hasSteps,
    hasTabs,
    hasErrors,
    hasMessages,
    isMultilingual,
    showErrors,
    showMessages,
    showLanguages,
    showSteps,
    showTabs,
    showStepsControls,
    classes,
    Templates,
    template,
    extendedTheme,
    Size,
    View,
    Views,
    form$,
    model,
    intermediaryValue,
    userConfig,
    isSync,
    tree,
    flatTree,
    updateModel,
    update,
    load,
    reset,
    clear,
    clean,
    validate,
    resetValidators,
    convertFormData,
    submit,
    send,
    disableValidation,
    enableValidation,
    enableConditions,
    disableConditions,
    setLanguage,
    handleSubmit,
    el$,
    siblings$,
    initMessageBag,
    fire,
    on,
    off
  };
};

var Vueform = {
  name: 'Vueform',
  emits: ['input', 'update:modelValue', 'change', 'reset', 'clear', 'submit', 'success', 'error', 'response', 'language', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  slots: ['default', 'empty'],
  setup: (props, context) => {
    context.emits = ['input', 'update:modelValue', 'change', 'reset', 'clear', 'submit', 'success', 'error', 'response', 'language', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'];
    context.name = ref('Vueform');
    var {
      tabs$,
      steps$,
      elements$,
      options,
      validation,
      conditions,
      messageBag,
      selectedLanguage,
      submitting,
      preparing,
      events,
      listeners,
      internalData,
      data,
      requestData,
      dirty,
      invalid,
      debouncing,
      pending,
      validated,
      busy,
      formErrors,
      formMessages,
      isDisabled,
      isLoading,
      shouldValidateOnChange,
      shouldValidateOnStep,
      hasSteps,
      hasTabs,
      hasErrors,
      hasMessages,
      isMultilingual,
      showErrors,
      showMessages,
      showLanguages,
      showSteps,
      showTabs,
      showStepsControls,
      classes,
      Templates,
      template,
      extendedTheme,
      Size,
      View,
      Views,
      form$,
      model,
      intermediaryValue,
      userConfig,
      isSync,
      tree,
      flatTree,
      updateModel,
      update,
      load,
      reset,
      clear,
      clean,
      validate,
      resetValidators,
      convertFormData,
      submit,
      send,
      disableValidation,
      enableValidation,
      enableConditions,
      disableConditions,
      setLanguage,
      handleSubmit,
      el$,
      siblings$,
      initMessageBag,
      fire,
      on,
      off
    } = base$15(props, context);
    return {
      tabs$,
      steps$,
      elements$,
      options,
      validation,
      conditions,
      messageBag,
      selectedLanguage,
      submitting,
      preparing,
      events,
      listeners,
      internalData,
      data,
      requestData,
      dirty,
      invalid,
      debouncing,
      pending,
      validated,
      busy,
      formErrors,
      formMessages,
      isDisabled,
      isLoading,
      shouldValidateOnChange,
      shouldValidateOnStep,
      hasSteps,
      hasTabs,
      hasErrors,
      hasMessages,
      isMultilingual,
      showErrors,
      showMessages,
      showLanguages,
      showSteps,
      showTabs,
      showStepsControls,
      classes,
      Templates,
      template,
      extendedTheme,
      Size,
      View,
      Views,
      form$,
      model,
      intermediaryValue,
      userConfig,
      isSync,
      tree,
      flatTree,
      updateModel,
      update,
      load,
      reset,
      clear,
      clean,
      validate,
      resetValidators,
      convertFormData,
      submit,
      send,
      disableValidation,
      enableValidation,
      enableConditions,
      disableConditions,
      setLanguage,
      handleSubmit,
      el$,
      siblings$,
      initMessageBag,
      fire,
      on,
      off
    };
  },
  props: {
    schema: {
      type: Object,
      required: false,
      default: null
    },
    name: {
      type: String,
      required: false,
      default: null,
      private: true
    },
    tabs: {
      type: Object,
      required: false,
      default: null
    },
    steps: {
      type: Object,
      required: false,
      default: null
    },
    stepsControls: {
      type: Boolean,
      required: false,
      default: null,
      '@default': true
    },
    validateOn: {
      type: String,
      required: false,
      default: null
    },
    displayErrors: {
      type: Boolean,
      required: false,
      default: null
    },
    displayMessages: {
      type: Boolean,
      required: false,
      default: null
    },
    messages: {
      type: Object,
      required: false,
      default: null
    },
    endpoint: {
      type: [String, Boolean],
      required: false,
      default: null
    },
    method: {
      type: String,
      required: false,
      default: null
    },
    prepare: {
      type: Function,
      required: false,
      default: null
    },
    formKey: {
      type: [String, Number],
      required: false,
      default: null
    },
    formData: {
      type: Function,
      required: false,
      default: null
    },
    value: {
      type: Object,
      required: false,
      default: undefined
    },
    modelValue: {
      type: Object,
      required: false,
      default: undefined
    },
    sync: {
      type: Boolean,
      required: false,
      default: false
    },
    default: {
      type: Object,
      required: false,
      default: null
    },
    formatData: {
      type: Function,
      required: false,
      default: null
    },
    formatLoad: {
      type: Function,
      required: false,
      default: null
    },
    loading: {
      type: Boolean,
      required: false,
      default: null
    },
    disabled: {
      type: Boolean,
      required: false,
      default: null
    },
    columns: {
      type: Object,
      required: false,
      default: null
    },
    forceLabels: {
      type: Boolean,
      required: false,
      default: null
    },
    floatPlaceholders: {
      type: Boolean,
      required: false,
      default: null
    },
    size: {
      required: false,
      type: [String],
      default: null
    },
    view: {
      required: false,
      type: [String],
      default: null
    },
    views: {
      required: false,
      type: [Object],
      default: null
    },
    addClasses: {
      required: false,
      type: [Object],
      default: null
    },
    addClass: {
      required: false,
      type: [Array, Object, String],
      default: null
    },
    removeClasses: {
      required: false,
      type: [Object],
      default: null
    },
    removeClass: {
      required: false,
      type: [Array, Object],
      default: null
    },
    replaceClasses: {
      required: false,
      type: [Object],
      default: null
    },
    replaceClass: {
      required: false,
      type: [Object],
      default: null
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: null
    },
    overrideClass: {
      required: false,
      type: [Array, Object, String],
      default: null
    },
    templates: {
      type: Object,
      required: false,
      default: null
    },
    presets: {
      required: false,
      type: [Array],
      default: null
    },
    multilingual: {
      type: Boolean,
      required: false,
      default: null
    },
    languages: {
      type: Object,
      required: false,
      default: null
    },
    language: {
      type: String,
      required: false,
      default: null
    },
    onChange: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onReset: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onClear: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onSubmit: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onSuccess: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onError: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onLanguage: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onBeforeMount: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onMounted: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onBeforeUpdate: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onUpdated: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onBeforeUnmount: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onUnmounted: {
      required: false,
      type: [Function],
      default: null,
      private: true
    }
  },
  render() {
    return this.template.render.apply(this, arguments);
  }
  // staticRenderFns() {
  //   return this.templates.Vueform.staticRenderFns
  // }
};

var base$14 = function base(props, context, dependencies) {
  // =============== INJECT ===============

  /**
  * The root form's component.
  * 
  * @type {component}
  */
  var form$ = inject('form$');
  return {
    form$
  };
};

var base$13 = function base(props, context, dependencies) {
  // =============== INJECT ===============

  /**
  * The global theme object, which contains all the default templates and classes.
  * 
  * @type {object}
  */
  var theme = inject('theme');
  return {
    theme
  };
};

var base$12 = function base(props, context, dependencies) {
  // =============== INJECT ===============

  /**
  * The size of the component.
  * 
  * @type {component}
  */
  var Size = inject('Size');
  return {
    Size
  };
};

var base$11 = function base(props, context, dependencies) {
  var {
    view
  } = toRefs(props);
  var componentName = context.name;

  // =============== INJECT ===============

  /**
  * The name of the views for the components.
  * 
  * @type {object}
  * @private
  */
  var Views = inject('Views') || ref({});

  /**
  * The injected view.
  * 
  * @type {string}
  * @private
  */
  var ViewInject = inject('View', ref(undefined));

  // ============== COMPUTED ==============

  /**
   * The name of the resolved view for the component. This one should be used to determine the component's view in class functions.
   * 
   * @type {string}
   */
  var View = computed(() => {
    if (view && view.value) {
      return view.value;
    }
    if (Views.value[componentName.value]) {
      return Views.value[componentName.value];
    }
    return ViewInject.value;
  });
  return {
    View
  };
};

var base$10 = function base(props, context, dependencies) {
  var componentName = context.name;

  // =============== INJECT ===============

  var {
    form$
  } = base$14();
  var {
    theme
  } = base$13();
  var {
    Size
  } = base$12();
  var {
    View
  } = base$11(props, context);

  // ============== COMPUTED ===============

  /**
   * The component instance (self).
   * 
   * @type {component}
   */
  var component$ = computed(() => {
    return getCurrentInstance().proxy;
  });

  /**
   * An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides.
   * 
   * @type {object}
   * @private
   */
  var classesInstance = computed(() => {
    return new MergeClasses({
      component: componentName.value,
      component$: component$,
      theme: theme.value,
      config: form$.value.$vueform.config,
      templates: Templates.value,
      view: View.value,
      merge: [form$.value.options]
    });
  });

  /**
   * The component's classes.
   * 
   * @type {object}
   */
  var classes = computed(() => {
    return classesInstance.value.classes;
  });

  /**
   * The list of templates available to the component.
   * 
   * @type {object}
   * @private
   */
  var Templates = computed(() => {
    return theme.value.templates;
  });

  /**
   * The component's template.
   * 
   * @type {object}
   */
  var template = computed(() => {
    return View.value && Templates.value["".concat(componentName.value, "_").concat(View.value)] ? Templates.value["".concat(componentName.value, "_").concat(View.value)] : Templates.value[componentName.value];
  });
  return {
    form$,
    theme,
    Size,
    View,
    classesInstance,
    classes,
    Templates,
    template
  };
};

var FormErrors = {
  name: 'FormErrors',
  props: {
    view: {
      required: false,
      type: [String],
      default: undefined
    }
  },
  setup(props, context) {
    // ============ DEPENDENCIES ============

    var {
      form$,
      Size,
      View,
      classesInstance,
      theme,
      classes,
      Templates,
      template
    } = base$10(props, context);

    // ============== COMPUTED ==============

    /**
     * Form errors including element errors and the ones added to `messageBag` manually.
     * 
     * @type {array}
     */
    var errors = computed(() => {
      return form$.value.formErrors;
    });
    return {
      form$,
      Size,
      View,
      classesInstance,
      theme,
      classes,
      Templates,
      template,
      errors
    };
  }
};

var FormMessages = {
  name: 'FormMessages',
  props: {
    view: {
      required: false,
      type: [String],
      default: undefined
    }
  },
  setup(props, context) {
    // ============ DEPENDENCIES ============

    var {
      form$,
      Size,
      View,
      classesInstance,
      theme,
      classes,
      Templates,
      template
    } = base$10(props, context);

    // ============== COMPUTED ==============

    /**
     * Form messages including element messages and the ones added to `messageBag` manually.
     * 
     * @type {array}
     */
    var messages = computed(() => {
      return form$.value.formMessages;
    });
    return {
      form$,
      Size,
      View,
      classesInstance,
      theme,
      classes,
      Templates,
      template,
      messages
    };
  }
};

var FormLanguages = {
  name: 'FormLanguages',
  props: {
    view: {
      required: false,
      type: [String],
      default: undefined
    }
  },
  setup(props, context) {
    // ============ DEPENDENCIES ============

    var {
      form$,
      Size,
      View,
      classesInstance,
      theme,
      classes,
      Templates,
      template
    } = base$10(props, context);

    // ============== COMPUTED ==============

    /**
     * The language code of the currently selected language (2 letters).
     * 
     * @type {string}
     */
    var language = computed(() => {
      return form$.value.selectedLanguage;
    });

    /**
     * The available languages.
     * 
     * @type {object}
     */
    var languages = computed(() => {
      return form$.value.options.languages;
    });

    // =============== METHODS ==============

    /**
     * Selects a language.
     * 
     * @param {string} code* the language code to be selected
     * @returns {void}
     */
    var select = code => {
      form$.value.setLanguage(code);
    };

    /**
     * Handles `select` event.
     *
     * @param {string} code* the language code to be selected
     * @returns {void}
     * @private
     */
    var handleSelect = code => {
      select(code);
    };

    // ============== PROVIDE ===============

    provide('View', View);
    return {
      form$,
      Size,
      View,
      classesInstance,
      theme,
      classes,
      Templates,
      template,
      language,
      languages,
      select,
      handleSelect
    };
  }
};

var FormLanguage = {
  name: 'FormLanguage',
  emits: ['select'],
  props: {
    language: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    },
    view: {
      required: false,
      type: [String],
      default: undefined
    }
  },
  setup(props, context) {
    var {
      code
    } = toRefs(props);

    // ============ DEPENDENCIES ============

    var {
      form$,
      Size,
      View,
      classesInstance,
      theme,
      classes,
      Templates,
      template
    } = base$10(props, context);

    // ============== COMPUTED ==============

    /**
     * The language code of the currently selected language (2 letters).
     * 
     * @type {string}
     */
    var selectedLanguage = computed(() => {
      return form$.value.selectedLanguage;
    });

    /**
     * Whether the current language is the selected one.
     * 
     * @type {boolean}
     */
    var selected = computed(() => {
      return selectedLanguage.value == code.value;
    });

    // =============== METHODS ==============

    /**
     * Select the language.
     * 
     * @return {void}
     */
    var select = () => {
      context.emit('select', code.value);
    };
    return {
      form$,
      Size,
      View,
      classesInstance,
      theme,
      selectedLanguage,
      selected,
      classes,
      Templates,
      template,
      select
    };
  }
};

var normalize = function normalize(value) {
  if (value === undefined || typeof value != 'string') {
    return value;
  }

  // is number
  if (value.match(/^-*\d+$/)) {
    return parseInt(value, 10);

    // is float
  } else if (value.match(/^\d+\.\d+$/)) {
    return parseFloat(value);

    // everything else
  } else {
    return value;
  }
};

var FormTabs = {
  name: 'FormTabs',
  emits: ['select'],
  props: {
    view: {
      required: false,
      type: [String],
      default: undefined
    }
  },
  setup(props, context) {
    var $this = getCurrentInstance().proxy;

    // ============ DEPENDENCIES ============

    var {
      form$,
      Size,
      View,
      classesInstance,
      theme,
      classes,
      Templates,
      template
    } = base$10(props, context);
    var {
      events,
      listeners,
      on,
      off,
      fire
    } = base$16(props, context, {
      form$
    }, {
      events: context.emits
    });

    // ================ DATA ================

    /**
     * The child [`FormTab`](form-tab) components.
     * 
     * @type {array}
     * @default []
     */
    var tabs$Array = ref([]);

    /**
     * Helper prop used for checking if the component exists.
     * 
     * @type {boolean}
     * @private
     */
    var exists = ref(true);

    // ============== COMPUTED ==============

    /**
     * The form elements' components.
     * 
     * @type {object}
     */
    var elements$ = computed(() => {
      return form$.value.elements$;
    });

    /**
     * The object containing tabs defined in [`Vueform`](vueform#option-tabs). 
     * 
     * @type {object}
     */
    var tabs = computed(() => {
      return form$.value.options.tabs;
    });

    /**
     * The child [`FormTab`](form-tab) components with indexed keys.
     * 
     * @type {object}
     */
    var tabs$ = computed(() => {
      var tabList$ = {};
      _.each(tabs$Array.value, formTab$ => {
        tabList$[formTab$.name] = formTab$;
      });
      return tabList$;
    });

    /**
     * All the visible [`FormTab`](form-tab) components.
     * 
     * @type {object}
     */
    var visible$ = computed(() => {
      var tabList$ = {};
      _.each(tabs$.value, tab$ => {
        if (tab$.visible) {
          tabList$[tab$.name] = tab$;
        }
      });
      return tabList$;
    });

    /**
     * The current [`FormTab`](form-tab) component.
     * 
     * @type {component}
     */
    var current$ = computed(() => {
      var current = _.find(tabs$.value, {
        active: true
      });
      return current !== undefined ? current : {};
    });

    /**
     * The first visible [`FormTab`](form-tab) component.
     * 
     * @type {component}
     */
    var first$ = computed(() => {
      return _.find(visible$.value, tab => {
        return tab.visible;
      });
    });

    /**
     * The next visible [`FormTab`](form-tab) component.
     * 
     * @type {component}
     */
    var next$ = computed(() => {
      return _.find(visible$.value, tab => {
        return tab.index > current$.value.index && tab.visible;
      });
    });

    /**
     * The previous visible [`FormTab`](form-tab) component.
     * 
     * @type {component}
     */
    var previous$ = computed(() => {
      return _.findLast(visible$.value, tab => {
        return tab.index < current$.value.index && tab.visible;
      });
    });

    // =============== METHODS ==============

    /**
     * Go to a tab.
     *
     * @param {string} name* name of tab to go to
     * @returns {void}
     */
    var goTo = name => {
      var tab$ = visible$.value[name];
      tab$.select();
    };

    /**
     * Select a tab.
     *
     * @param {component} tab$ the [`FormTab`](form-tab) component to select
     * @returns {void}
     * @private
     */
    var select = tab$ => {
      var curr$ = current$.value;
      _.each(elements$.value, element$ => {
        element$.deactivate();
      });
      _.each(tabs$.value, tab$ => {
        tab$.deactivate();
      });
      fire('select', tab$, curr$);
    };

    /**
     * Returns a specific [`FormTab`](form-tab) by index.
     *
     * @param {string} tab* name of the tab
     * @returns {component}
     */
    var tab$ = name => {
      return _.find(tabs$.value, {
        name: name
      });
    };

    /**
     * Jump back to the first visible tab.
     *
     * @returns {void}
     */
    var reset = () => {
      first$.value.select();
    };

    /**
     * Set the component to the parent as if `refs` were used.
     * 
     * @param {component} $parent parent component
     * @param {function} assignToParent the assignToParent function for recursion
     * @returns {void}
     * @private
     */
    var assignToParent = ($parent, assignToParent) => {
      if ($parent.tabs$ !== undefined) {
        form$.value.$set($parent, 'tabs$', $this);
      } else {
        assignToParent($parent.$parent, assignToParent);
      }
    };

    /**
    * Removes the component from the parent.
    * 
    * @param {component} $parent parent component
    * @param {function} removeFromParent the removeFromParent function for recursion
    * @private
    */
    var removeFromParent = ($parent, removeFromParent) => {
      if ($parent.tabs$ !== undefined) {
        form$.value.$set($parent, 'tabs$', null);
      } else {
        removeFromParent($parent.$parent, removeFromParent);
      }
    };

    // ============== PROVIDE ===============

    provide('View', View);

    // ============== WATCHERS ==============

    watch(elements$, (newValue, oldValue) => {
      var newElements$ = _.difference(_.keys(newValue), _.keys(oldValue));
      _.each(newElements$, newElement$ => {
        elements$.value[newElement$].deactivate();
      });
    }, {
      deep: false,
      lazy: true
    });
    watch(tabs, /*#__PURE__*/_asyncToGenerator(function* () {
      yield nextTick();
      yield nextTick();
      if (current$.value === undefined || current$.value.index === undefined) {
        first$.value.select();
      }
    }), {
      deep: true,
      lazy: true
    });

    // Resort tabs$Array when tabs
    // order changes or a tab is removed
    watch(tabs, newValue => {
      var newTabs$Array = [];
      _.each(newValue, (t, name) => {
        newTabs$Array.push(tabs$Array.value[tabs$Array.value.map(t$ => normalize(t$.name)).indexOf(normalize(name))]);
      });
      tabs$Array.value = newTabs$Array;
    }, {
      flush: 'post'
    });

    // =============== HOOKS ================

    onBeforeMount(() => {
      assignToParent($this.$parent, assignToParent);
    });
    onBeforeUnmount(() => {
      removeFromParent($this.$parent, removeFromParent);
    });
    onMounted(() => {
      nextTick(() => {
        if (!_.find(tabs$.value, {
          active: true
        })) {
          first$.value.select();
        }
      });
    });
    return {
      form$,
      Size,
      View,
      classesInstance,
      theme,
      tabs,
      elements$,
      tabs$Array,
      events,
      listeners,
      exists,
      classes,
      Templates,
      template,
      tabs$,
      visible$,
      current$,
      first$,
      next$,
      previous$,
      goTo,
      select,
      tab$,
      reset,
      on,
      off,
      fire
    };
  }
};

var base$$ = function base(props, context, dependencies) {
  var {
    parent,
    conditions: conditionList
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;
  var path = dependencies.path || ref(null);
  var el$ = dependencies.el$ || ref(undefined);

  // ================ DATA ================

  /**
   * The frozen conditions of the element.
   * 
   * @type {array}
   * @private
   */
  var conditions = ref(conditionList.value);

  // ============== COMPUTED ==============

  /**
   * Whether no [`conditions`](#option-conditions) are defined or they are all fulfilled.
   * 
   * @type {boolean}
   */
  var available = computed(() => {
    if (!form$.value.conditions) {
      return true;
    }
    if (parent && parent.value && parent.value.available !== undefined && !parent.value.available) {
      return false;
    }
    if (!conditions.value || !conditions.value.length) {
      return true;
    }
    return !_.some(conditions.value, condition => {
      return !form$.value.$vueform.services.condition.check(condition, path.value, form$.value, el$.value);
    });
  });

  /**
   * Updates element conditions after they have been changed.
   * 
   * @returns {void}
   * @private
   */
  var updateConditions = () => {
    conditions.value = conditionList.value;
  };
  return {
    available,
    updateConditions
  };
};

/**
 * From: https://github.com/fengyuanchen/is-vue-component/blob/master/src/index.js
 */

var {
  hasOwnProperty,
  toString
} = Object.prototype;

/**
 * Check if the given value is a non-empty string.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a non-empty string, else `false`.
 */
function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

/**
 * Check if the given value is a function.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a function, else `false`.
 */
function isFunction(value) {
  return typeof value === 'function';
}

/**
 * Check if the given value is a non-empty array.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a non-empty array, else `false`.
 */
/* istanbul ignore next */
function isNonEmptyArray(value) {
  return Array.isArray(value) && value.length > 0;
}

/**
 * Check if the given value is an element.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is an element, else `false`.
 */
/* istanbul ignore next */
function isElement(value) {
  return isNonNullObject(value) && value.nodeType === 1 && toString.call(value).indexOf('Element') > -1;
}

/**
 * Check if the given value is a valid Vue component.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a valid Vue component, else `false`.
 */
function isVueComponent(value) {
  /* istanbul ignore next */
  return _.isPlainObject(value) && (isNonEmptyString(value.template) || isFunction(value.render) || isNonEmptyString(value.el) || isElement(value.el) || isVueComponent(value.extends) || isNonEmptyArray(value.mixins) && value.mixins.some(val => isVueComponent(val))) || typeof value === 'function' && value.prototype && value.prototype.constructor.name === 'VueComponent';
}

var base$_ = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============

  var labelDefinition = dependencies.labelDefinition;
  var component$ = dependencies.component$ || ref(null);

  // ============== COMPUTED ==============

  /**
  * The label definition of the component.
  * 
  * @type {string|function|component}
  * @private
  */
  var baseLabel = computed(() => {
    return labelDefinition.value;
  });

  /**
  * Whether the label is provided as a function.
  * 
  * @type {boolean}
  * @private
  */
  var isLabelFunction = computed(() => {
    return typeof baseLabel.value === 'function' && (!baseLabel.value.prototype || !baseLabel.value.prototype.constructor || baseLabel.value.prototype.constructor && baseLabel.value.prototype.constructor.name !== 'VueComponent');
  });

  /**
  * Whether label is provided as a Vue component.
  * 
  * @type {boolean}
  * @private
  */
  var isLabelComponent = computed(() => {
    return isVueComponent(baseLabel.value);
  });

  /**
  * The label of the component. If the label is provided as a `function` this contains the resolved value.
  * 
  * @type {string|component}
  */
  var label = computed(() => {
    return isLabelFunction.value ? baseLabel.value(component$.value) : baseLabel.value || null;
  });
  return {
    label,
    isLabelComponent
  };
};

var FormTab = {
  name: 'FormTab',
  emits: ['activate', 'inactivate'],
  slots: ['default'],
  props: {
    /**
     * Name of tab within [tabs](reference/frontend-form#prop-tabs) object.
     */
    name: {
      type: [String, Number],
      required: true
    },
    label: {
      type: [String, Object, Function],
      required: false,
      default: null
    },
    elements: {
      type: [Array],
      required: false,
      default: () => []
    },
    conditions: {
      type: [Array],
      required: false,
      default: () => []
    },
    addClass: {
      required: false,
      type: [Array, Object, String],
      default: null
    },
    removeClass: {
      required: false,
      type: [Array, Object],
      default: null
    },
    replaceClass: {
      required: false,
      type: [Object],
      default: null
    },
    overrideClass: {
      required: false,
      type: [Array, Object, String],
      default: null
    },
    view: {
      required: false,
      type: [String],
      default: undefined
    },
    onActivate: {
      type: [Function],
      required: false,
      default: null,
      private: true
    },
    onInactivate: {
      type: [Function],
      required: false,
      default: null,
      private: true
    }
  },
  setup(props, context) {
    var {
      name,
      label,
      elements,
      conditions,
      addClass
    } = toRefs(props);
    var $this = getCurrentInstance().proxy;

    // ============ DEPENDENCIES ============

    var {
      form$,
      Size,
      View,
      classesInstance,
      theme,
      classes,
      Templates,
      template
    } = base$10(props, context);
    var {
      available
    } = base$$(props, context, {
      form$
    });
    var {
      isLabelComponent,
      label: tabLabel_
    } = base$_(props, context, {
      component$: form$,
      labelDefinition: label
    });
    var {
      events,
      listeners,
      on,
      off,
      fire
    } = base$16(props, context, {
      form$
    }, {
      events: context.emits
    });

    // ================ DATA ================

    /**
     * Whether the tab is active.
     * 
     * @type {boolean}
     * @default false
     */
    var active = ref(false);

    /**
     * The label of the tab.
     * 
     * @type {string|component}
     * @default null
     */
    var tabLabel = ref(tabLabel_.value && typeof tabLabel_.value === 'object' ? markRaw(tabLabel_.value) : tabLabel_.value);

    // ============== COMPUTED ==============

    /**
     * The components of highest level form elements.
     * 
     * @type {object}
     */
    var elements$ = computed(() => {
      return form$.value.elements$;
    });

    /**
     * The parent [`FormTabs`](form-tabs) component.
     * 
     * @type {component}
     */
    var tabs$ = computed(() => {
      return form$.value.tabs$;
    });

    /**
     * Index of this tab among the other tabs which are not hidden by unmet conditions.
     * 
     * @type {number}
     */
    var index = computed(() => {
      return Object.keys(tabs$.value.tabs$).indexOf(name.value);
    });

    /**
     * The components of form elements within the tab.
     * 
     * @type {object}
     */
    var children$ = computed(() => {
      return _.filter(elements$.value, (element$, key) => {
        return elements.value.indexOf(key) !== -1;
      });
    });

    /**
     * Whether the tab should be visible.
     * 
     * @type {boolean}
     */
    var visible = computed(() => {
      return available.value;
    });

    /**
     * Whether the tab has any invalid elements.
     * 
     * @type {boolean}
     */
    var invalid = computed(() => {
      return _.some(children$.value, {
        available: true,
        invalid: true
      });
    });

    /**
     * The tab's component.
     * 
     * @type {component}
     */
    var tab$ = computed(() => {
      return form$.value.tabs$.tabs$[name.value];
    });

    // =============== METHODS ==============

    /**
     * Deactivate all other tabs and set the current one as active.
     *
     * @returns {void}
     */
    var select = () => {
      if (active.value) {
        return;
      }
      tabs$.value.select(tab$.value);
      activate();
    };

    /**
     * Activate the tab.
     *
     * @returns {void}
     */
    var activate = () => {
      if (active.value) {
        return;
      }
      active.value = true;
      _.each(children$.value, element$ => {
        element$.activate();
      });
      fire('activate');
    };

    /**
     * Deactivate the tab.
     *
     * @returns {void}
     */
    var deactivate = () => {
      if (!active.value) {
        return;
      }
      active.value = false;
      _.each(children$.value, element$ => {
        element$.deactivate();
      });
      fire('inactivate');
    };

    /**
     * Set the component to the parent as if `refs` were used.
     * 
     * @param {component} $parent parent component
     * @param {function} assignToParent the assignToParent function for recursion
     * @returns {void}
     * @private
     */
    var assignToParent = ($parent, assignToParent) => {
      if ($parent.tabs$Array) {
        $parent.tabs$Array.push($this);
      } else {
        assignToParent($parent.$parent, assignToParent);
      }
    };

    /**
    * Removes the component from the parent.
    * 
    * @param {component} $parent parent component
    * @param {function} removeFromParent the removeFromParent function for recursion
    * @private
    */
    var removeFromParent = ($parent, removeFromParent) => {
      if ($parent.tabs$Array) {
        $parent.tabs$Array.splice($parent.tabs$Array.map(t$ => normalize(t$.name)).indexOf(normalize(name.value)), 1);
      } else {
        removeFromParent($parent.$parent, removeFromParent);
      }
    };

    // ============== WATCHERS ==============

    watch(children$, () => {
      if (!active.value) {
        return;
      }
      _.each(children$.value, element$ => {
        element$.activate();
      });
    }, {
      deep: false,
      lazy: true
    });
    watch(tabLabel_, () => {
      tabLabel.value = tabLabel_.value && typeof tabLabel_.value === 'object' ? markRaw(tabLabel_.value) : tabLabel_.value;
    });

    // ================ HOOKS ===============

    onMounted(() => {
      // nextTick is required because elements$
      // only available after form is mounted,
      // which is later than the tab mount
      nextTick(() => {
        if (conditions.value.length == 0) {
          return;
        }
        _.each(children$.value, element$ => {
          _.each(conditions.value, condition => {
            element$.conditions.push(condition);
          });
        });
      });
    });
    onBeforeMount(() => {
      assignToParent($this.$parent, assignToParent);
    });
    onBeforeUnmount(() => {
      removeFromParent($this.$parent, removeFromParent);
    });
    return {
      form$,
      Size,
      View,
      classesInstance,
      theme,
      elements$,
      index,
      active,
      events,
      listeners,
      children$,
      visible,
      invalid,
      classes,
      Templates,
      template,
      available,
      isLabelComponent,
      tabLabel,
      tab$,
      select,
      activate,
      deactivate,
      on,
      off,
      fire
    };
  }
};

var FormSteps = {
  name: 'FormSteps',
  emits: ['select', 'next', 'previous', 'finish'],
  props: {
    view: {
      required: false,
      type: [String],
      default: undefined
    }
  },
  setup(props, context) {
    var $this = getCurrentInstance().proxy;

    // ============ DEPENDENCIES ============

    var {
      form$,
      Size,
      View,
      classesInstance,
      theme,
      classes,
      Templates,
      template
    } = base$10(props, context);
    var {
      events,
      listeners,
      on,
      off,
      fire
    } = base$16(props, context, {
      form$
    }, {
      events: context.emits
    });

    // ================ DATA ================

    /**
     * The child [`FormStep`](form-step) components.
     * 
     * @type {array}
     * @default []
     */
    var steps$Array = ref([]);

    /**
     * Helper to store a watcher.
     * 
     * @type {object}
     * @default null
     */
    var unwatchInvalid = ref(null);

    /**
     * Helper prop used for checking if the component exists.
     * 
     * @type {boolean}
     * @private
     */
    var exists = ref(true);

    // ============== COMPUTED ==============

    /**
     * The object containing steps defined in [`Vueform`](vueform#option-steps). 
     * 
     * @type {object}
     */
    var steps = computed(() => {
      return form$.value.options.steps;
    });

    /**
     * The form elements' components.
     * 
     * @type {object}
     */
    var elements$ = computed(() => {
      return form$.value.elements$;
    });

    /**
     * Whether there are any steps in [`pending`](form-step#property-pending) state.
     * 
     * @type {boolean}
     */
    var pending = computed(() => {
      return _.some(visible$.value, {
        pending: true
      });
    });

    /**
     * Whether there are any steps in [`debouncing`](form-step#property-debouncing) state.
     * 
     * @type {boolean}
     */
    var debouncing = computed(() => {
      return _.some(visible$.value, {
        debouncing: true
      });
    });

    /**
     * Whether there are any steps in [`invalid`](form-step#property-invalid) state.
     * 
     * @type {boolean}
     */
    var invalid = computed(() => {
      return _.some(visible$.value, {
        invalid: true
      });
    });

    /**
     * Whether all the steps are [`done`](form-step#property-done).
     * 
     * @type {boolean}
     */
    var done = computed(() => {
      return !_.some(visible$.value, {
        done: false
      });
    });

    /**
     * Whether there are any steps in [`busys`](form-step#property-busys) state.
     * 
     * @type {boolean}
     */
    var busy = computed(() => {
      return pending.value || debouncing.value;
    });

    /**
     * The child [`FormStep`](form-step) components with indexed keys.
     * 
     * @type {object}
     */
    var steps$ = computed(() => {
      var steps$ = {};
      _.each(steps$Array.value, step$ => {
        steps$[step$.name] = step$;
      });
      return steps$;
    });

    /**
     * All the visible [`FormStep`](form-step) components.
     * 
     * @type {object}
     */
    var visible$ = computed(() => {
      var stepList$ = {};
      _.each(steps$.value, step$ => {
        if (step$.visible) {
          stepList$[step$.name] = step$;
        }
      });
      return stepList$;
    });

    /**
     * The first visible [`FormStep`](form-step) component.
     * 
     * @type {component}
     */
    var first$ = computed(() => {
      return _.find(visible$.value, step => {
        return step.visible;
      });
    });

    /**
     * The current [`FormStep`](form-step) component.
     * 
     * @type {component}
     */
    var current$ = computed(() => {
      var current = _.find(steps$.value, {
        active: true
      });
      return current !== undefined ? current : {};
    });

    /**
     * The next visible [`FormStep`](form-step) component.
     * 
     * @type {component}
     */
    var next$ = computed(() => {
      return _.find(visible$.value, step => {
        return step.index > current$.value.index && step.visible;
      });
    });

    /**
     * The previous visible [`FormStep`](form-step) component.
     * 
     * @type {component}
     */
    var previous$ = computed(() => {
      return _.findLast(visible$.value, step => {
        return step.index < current$.value.index && step.visible;
      });
    });

    /**
     * The first invalid & visible [`FormStep`](form-step) component.
     * 
     * @type {component}
     */
    var firstInvalid$ = computed(() => {
      return _.find(visible$.value, {
        invalid: true
      });
    });

    /**
     * The first visible [`FormStep`](form-step) component which is not done yet.
     * 
     * @type {component}
     */
    var firstNonDone$ = computed(() => {
      return _.find(visible$.value, {
        done: false
      });
    });

    /**
     * The last enabled & visible [`FormStep`](form-step) component.
     * 
     * @type {component}
     */
    var lastEnabled$ = computed(() => {
      return _.findLast(visible$.value, {
        isDisabled: false
      });
    });

    /**
     * Whether is at the last step.
     * 
     * @type {boolean}
     */
    var isAtLastStep = computed(() => {
      var last = _.findLast(visible$.value, {
        visible: true
      });
      if (!current$.value || !last) {
        return false;
      }
      return last.index === current$.value.index;
    });

    /**
     * Whether is at the first step.
     * 
     * @type {boolean}
     */
    var isAtFirstStep = computed(() => {
      return current$.value.index === 0;
    });

    // =============== METHODS ==============

    /**
     * Go to a step and enable it. Optionally enable all steps up to it.
     *
     * @param {string} name* name of step to go to
     * @param {boolean} enableUntil whether steps should be enabled up to the selected step (default: `false`)
     * @returns {void}
     */
    var goTo = function goTo(name) {
      var enableUntil = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var step = visible$.value[name];
      step.enable();
      step.select();
      if (enableUntil) {
        nextTick(() => {
          enableUntilLastEnabled();
        });
      }
    };

    /**
     * Move to next step and enable it.
     *
     * @returns {void}
     */
    var next = () => {
      fire('next', next$.value);
      next$.value.enable();
      next$.value.select();
    };

    /**
     * Move to previous step.
     *
     * @returns {void}
     */
    var previous = () => {
      fire('previous', previous$.value);
      previous$.value.select();
    };

    /**
     * Mark each [`FormStep`](form-step) as complete.
     *
     * @returns {void}
     */
    var complete = () => {
      _.each(steps$.value, step$ => {
        step$.complete();
      });
    };

    /**
     * Returns a specific [`FormStep`](form-step) component by index.
     *
     * @param {string} name* name of the step
     * @returns {component}
     */
    var step$ = name => {
      return _.find(visible$.value, {
        name: name
      });
    };

    /**
     * Jump back to first visible step and disable all others.
     *
     * @returns {void}
     */
    var reset = () => {
      _.each(steps$.value, step$ => {
        step$.uncomplete();
        step$.disable();
      });
      first$.value.enable();
      first$.value.select();
    };

    /**
     * Enables all steps.
     *
     * @returns {void}
     */
    var enableAllSteps = () => {
      _.each(steps$.value, step$ => {
        step$.enable();
      });
    };

    /**
     * Invokes the form's `submit` event. If the form has any validation errors it will jump to the first step with error.
     *
     * @returns {void}
     */
    var submit = () => {
      // manually triggering form's submit event
      var form = form$.value.$el.nodeName === 'FORM' ? form$.value.$el : form$.value.$el.querySelector('form');
      form.dispatchEvent(new Event('submit'));
      if (invalid.value) {
        firstInvalid$.value.select();
        return;
      }
      unwatchInvalid.value = watch(invalid, isInvalid => {
        if (isInvalid) {
          firstInvalid$.value.select();
        }
        unwatchInvalid.value();
      });
    };

    /**
     * Select a step.
     *
     * @param {component} step$ the [`FormStep`](form-step) component to select
     * @returns {void}
     * @private
     */
    var select = step$ => {
      var curr$ = current$.value;
      _.each(elements$.value, element$ => {
        element$.deactivate();
      });
      _.each(steps$.value, step$ => {
        step$.deactivate();
      });
      fire('select', step$, curr$);
    };

    /**
     * Enable steps until a certain index.
     * 
     * @param {integer} index index of the step
     * @returns {void}
     */
    var enableUntil = index => {
      _.each(steps$.value, step$ => {
        if (step$.index <= index && step$.visible) {
          step$.enable();
        }
      });
    };

    /**
     * Enable all steps up to the current step.
     * 
     * @returns {void}
     */
    var enableUntilCurrent = () => {
      enableUntil(current$.value.index);
    };

    /**
     * Enable all steps up to the last enabled.
     * 
     * @returns {void}
     */
    var enableUntilLastEnabled = () => {
      if (!lastEnabled$.value && !first$.value) {
        return;
      }
      enableUntil(lastEnabled$.value !== undefined ? lastEnabled$.value.index : first$.value.index);
    };

    /**
     * Set the component to the parent as if `refs` were used.
     * 
     * @param {component} $parent parent component
     * @param {function} assignToParent the assignToParent function for recursion
     * @returns {void}
     * @private
     */
    var assignToParent = ($parent, assignToParent) => {
      if ($parent.steps$ !== undefined) {
        form$.value.$set($parent, 'steps$', $this);
      } else {
        assignToParent($parent.$parent, assignToParent);
      }
    };

    /**
    * Removes the component from the parent.
    * 
    * @param {component} $parent parent component
    * @param {function} removeFromParent the removeFromParent function for recursion
    * @private
    */
    var removeFromParent = ($parent, removeFromParent) => {
      if ($parent.steps$ !== undefined) {
        form$.value.$set($parent, 'steps$', null);
      } else {
        removeFromParent($parent.$parent, removeFromParent);
      }
    };

    // ============== PROVIDE ===============

    provide('View', View);

    // ============== WATCHERS ==============

    watch(elements$, (newValue, oldValue) => {
      var newElements$ = _.difference(_.keys(newValue), _.keys(oldValue));
      _.each(newElements$, newElement$ => {
        elements$.value[newElement$].deactivate();
      });
    }, {
      deep: false,
      lazy: true
    });
    watch(steps, () => {
      nextTick(() => {
        if (lastEnabled$.value === undefined) ;
        if (current$.value.index === undefined && first$.value) {
          first$.value.select();
        }
      });
    }, {
      deep: true,
      lazy: true
    });

    // Resort steps$Array when steps
    // order changes or a tab is removed
    watch(steps, newValue => {
      var newSteps$Array = [];
      _.each(newValue, (t, name) => {
        newSteps$Array.push(steps$Array.value[steps$Array.value.map(t$ => normalize(t$.name)).indexOf(normalize(name))]);
      });
      steps$Array.value = newSteps$Array;
    }, {
      flush: 'post'
    });

    // =============== HOOKS ================

    onBeforeMount(() => {
      assignToParent($this.$parent, assignToParent);
    });
    onBeforeUnmount(() => {
      removeFromParent($this.$parent, removeFromParent);
    });
    onMounted(() => {
      // nextTick is required because elements$
      // only available after form is mounted,
      // which is later than the steps mount
      nextTick(() => {
        if (current$.value === undefined || current$.value.index === undefined) {
          first$.value.enable();
          first$.value.select();
        }
        enableUntilCurrent();
        // if new steps are shown because of
        // changing conditions the ones before
        // the last active should be enabled
        watch(visible$, () => {
          enableUntilLastEnabled();
        }, {
          flush: 'post'
        });
      });
    });
    return {
      form$,
      Size,
      View,
      classesInstance,
      theme,
      steps,
      elements$,
      steps$Array,
      events,
      listeners,
      exists,
      classes,
      Templates,
      template,
      steps$,
      pending,
      debouncing,
      invalid,
      done,
      busy,
      visible$,
      first$,
      current$,
      next$,
      previous$,
      firstInvalid$,
      firstNonDone$,
      lastEnabled$,
      isAtLastStep,
      isAtFirstStep,
      goTo,
      next,
      previous,
      complete,
      step$,
      reset,
      enableAllSteps,
      submit,
      select,
      enableUntil,
      enableUntilCurrent,
      enableUntilLastEnabled,
      on,
      off,
      fire
    };
  }
};

var FormStepsControls = {
  name: 'FormStepsControls',
  slots: ['previous', 'next', 'finish'],
  props: {
    labels: {
      type: Boolean,
      required: false,
      default: true
    },
    view: {
      required: false,
      type: [String],
      default: undefined
    }
  },
  setup(props, context) {
    // ============ DEPENDENCIES ============

    var {
      form$,
      Size,
      View,
      classesInstance,
      theme,
      classes,
      Templates,
      template
    } = base$10(props, context);

    // ============== PROVIDE ===============

    provide('View', View);
    return {
      form$,
      Size,
      View,
      classesInstance,
      theme,
      classes,
      Templates,
      template
    };
  }
};

var FormStepsControl = {
  name: 'FormStepsControl',
  slots: ['default'],
  props: {
    type: {
      type: [String],
      required: true
    },
    labels: {
      type: [Boolean],
      required: false,
      default: true,
      private: true
    },
    view: {
      required: false,
      type: [String],
      default: undefined
    }
  },
  setup(props, context) {
    var {
      type,
      labels
    } = toRefs(props);

    // ============ DEPENDENCIES ============

    var {
      form$,
      Size,
      View,
      classesInstance,
      theme,
      classes,
      Templates,
      template
    } = base$10(props, context);

    // ============== COMPUTED ==============

    /**
     * The label definition of the component.
     * 
     * @type {string|function|component}
     * @private
     */
    var baseLabel = computed(() => {
      if (!labels.value) {
        return null;
      }
      var stepLabels = current$ && current$.value ? current$.value.labels : null;
      switch (type.value) {
        case 'previous':
          return stepLabels && stepLabels.previous ? stepLabels.previous : form$.value.__('vueform.steps.previous');
        case 'next':
          return stepLabels && stepLabels.next ? stepLabels.next : form$.value.__('vueform.steps.next');
        case 'finish':
          return stepLabels && stepLabels.finish ? stepLabels.finish : form$.value.__('vueform.steps.finish');
      }
    });
    var {
      isLabelComponent,
      label
    } = base$_(props, context, {
      component$: form$,
      labelDefinition: baseLabel
    });

    // ============== COMPUTED ==============

    /**
     * The [`FormSteps`](form-steps) component.
     * 
     * @private
     */
    var steps$ = computed(() => {
      return form$.value.steps$;
    });

    /**
     * The currently active [`FormStep`](form-step) component.
     * 
     * @private
     */
    var current$ = computed(() => {
      return steps$.value ? steps$.value.current$ : undefined;
    });

    /**
     * Whether the control should be visible.
     * 
     * @type {boolean}
     */
    var visible = computed(() => {
      var buttons = current$ && current$.value ? current$.value.buttons : null;
      switch (type.value) {
        case 'previous':
          return !buttons ? true : buttons.previous !== false;
        case 'next':
          return steps$.value && !steps$.value.isAtLastStep && (!buttons || buttons.next !== false);
        case 'finish':
          return steps$.value && steps$.value.isAtLastStep;
      }
    });

    /**
     * Whether the control should be disabled.
     * 
     * @type {boolean}
     */
    var isDisabled = computed(() => {
      switch (type.value) {
        case 'previous':
          return steps$.value && steps$.value.isAtFirstStep;
        case 'next':
          return current$.value !== undefined && current$.value.index !== undefined && (
          // only disable next because of invalidity
          // if element validations are triggered on
          // change, otherwise it might occur that the
          // step has invalid fields, which values have
          // changed to valid, but still marked as invalid

          current$.value.invalid && form$.value.shouldValidateOnChange || current$.value.busy || form$.value.isDisabled || form$.value.isLoading);
        case 'finish':
          // only disable finish because of invalidity
          // if element validations are triggered on
          // change, otherwise it might occur that the
          // form has invalid fields, which values have
          // changed to valid, but still marked as invalid
          return steps$.value.invalid && form$.value.shouldValidateOnChange || steps$.value.busy || form$.value.submitting || form$.value.isDisabled || form$.value.isLoading;
      }
    });

    /**
     * Whether the control is in loading state (except for previous).
     * 
     * @type {boolean}
     */
    var isLoading = computed(() => {
      return type.value === 'previous' ? false : form$.value.isLoading || form$.value.submitting;
    });

    // =============== METHODS ==============

    /**
     * Go to the previous form step.
     * 
     * @returns {void}
     */
    var previous = () => {
      steps$.value.previous();
    };

    /**
     * Complete the current step and go to the next one (async). If the form's [`validateOn`](vueform#option-validate-on) prop or `config.validateOn` contains `'step'` also validates the elements within the step before moving forward (and stay if there's any error).
     * 
     * @returns {void}
     */
    var next = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(function* () {
        if (form$.value.shouldValidateOnStep) {
          yield current$.value.validate();
        }
        if (current$.value.invalid) {
          return;
        }
        current$.value.complete();
        steps$.value.next();
      });
      return function next() {
        return _ref.apply(this, arguments);
      };
    }();

    /**
     * Complete the final step and submit the form (async).
     * 
     * @returns {void}
     */
    var finish = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(function* () {
        steps$.value.fire('finish');
        steps$.value.complete();
        steps$.value.submit();
      });
      return function finish() {
        return _ref2.apply(this, arguments);
      };
    }();

    /**
     * Handles `click` event.
     * 
     * @returns {void}
     * @private
     */
    var handleClick = () => {
      switch (type.value) {
        case 'previous':
          previous();
          break;
        case 'next':
          next();
          break;
        case 'finish':
          finish();
          break;
      }
    };
    return {
      form$,
      Size,
      View,
      classesInstance,
      theme,
      steps$,
      classes,
      Templates,
      template,
      visible,
      isDisabled,
      isLoading,
      current$,
      label,
      isLabelComponent,
      previous,
      next,
      finish,
      handleClick
    };
  }
};

var FormStep = {
  name: 'FormStep',
  emits: ['activate', 'inactivate', 'enable', 'disable', 'complete'],
  slots: ['default'],
  props: {
    name: {
      type: [String, Number],
      required: true
    },
    label: {
      type: [String, Object, Function],
      required: false,
      default: null
    },
    labels: {
      type: [Object],
      required: false,
      default: () => ({})
    },
    buttons: {
      type: [Object],
      required: false,
      default: () => ({})
    },
    elements: {
      type: [Array],
      required: false,
      default: () => []
    },
    conditions: {
      type: [Array],
      required: false,
      default: () => []
    },
    addClass: {
      required: false,
      type: [Array, Object, String],
      default: null
    },
    removeClass: {
      required: false,
      type: [Array, Object],
      default: null
    },
    replaceClass: {
      required: false,
      type: [Object],
      default: null
    },
    overrideClass: {
      required: false,
      type: [Array, Object, String],
      default: null
    },
    view: {
      required: false,
      type: [String],
      default: undefined
    },
    onActivate: {
      type: [Function],
      required: false,
      default: null,
      private: true
    },
    onInactivate: {
      type: [Function],
      required: false,
      default: null,
      private: true
    },
    onDisable: {
      type: [Function],
      required: false,
      default: null,
      private: true
    },
    onEnable: {
      type: [Function],
      required: false,
      default: null,
      private: true
    }
  },
  setup(props, context) {
    var {
      name,
      label,
      elements,
      conditions,
      addClass
    } = toRefs(props);
    var $this = getCurrentInstance().proxy;

    // ============ DEPENDENCIES ============

    var {
      form$,
      Size,
      View,
      classesInstance,
      theme,
      classes,
      Templates,
      template
    } = base$10(props, context);
    var {
      available
    } = base$$(props, context, {
      form$
    });
    var {
      isLabelComponent,
      label: stepLabel_
    } = base$_(props, context, {
      component$: form$,
      labelDefinition: label
    });
    var {
      events,
      listeners,
      on,
      off,
      fire
    } = base$16(props, context, {
      form$
    }, {
      events: context.emits
    });

    // ================ DATA ================

    /**
     * The label of the step.
     * 
     * @type {string|component}
     * @default null
     */
    var stepLabel = ref(stepLabel_.value && typeof stepLabel_.value === 'object' ? markRaw(stepLabel_.value) : stepLabel_.value);

    /**
     * Whether the step is active.
     * 
     * @type {boolean}
     * @default false
     */
    var active = ref(false);

    /**
     * Whether the step is disabled.
     * 
     * @type {boolean}
     * @default true
     */
    var isDisabled = ref(true);

    /**
     * Whether the step is completed.
     * 
     * @type {boolean}
     * @default false
     */
    var completed = ref(false);

    // ============== COMPUTED ==============

    /**
     * The form elements' components.
     * 
     * @type {object}
     */
    var elements$ = computed(() => {
      return form$.value.elements$;
    });

    /**
     * The parent [`FormSteps`](form-steps) component.
     * 
     * @type {component}
     */
    var steps$ = computed(() => {
      return form$.value.steps$ || {};
    });

    /**
     * The label definition of the component.
     * 
     * @type {string}
     * @private
     */
    var baseLabel = computed(() => {
      return label.value;
    });

    /**
     * Index of this step among the other steps which are not hidden by unmet conditions.
     * 
     * @type {number}
     */
    var index = computed(() => {
      if (!steps$.value || !steps$.value.steps$) {
        return undefined;
      }
      return Object.keys(steps$.value.steps$).indexOf(name.value);
    });

    /**
     * The elements' components in the step.
     * 
     * @type {object}
     */
    var children$ = computed(() => {
      return _.filter(elements$.value, (element$, key) => {
        return elements.value.indexOf(key) !== -1;
      });
    });

    /**
     * Whether the step should be visible.
     * 
     * @type {boolean}
     */
    var visible = computed(() => {
      return available.value;
    });

    /**
      * Whether the step has any invalid elements.
      * 
      * @type {boolean}
      */
    var invalid = computed(() => {
      return _.some(children$.value, {
        available: true,
        invalid: true
      });
    });

    /**
      * Whether the step has any pending elements.
      * 
      * @type {boolean}
      */
    var pending = computed(() => {
      return _.some(children$.value, {
        available: true,
        pending: true
      });
    });

    /**
      * Whether the step has any debouncing elements.
      * 
      * @type {boolean}
      */
    var debouncing = computed(() => {
      return _.some(children$.value, {
        available: true,
        debouncing: true
      });
    });

    /**
      * Whether all the elements in the step were already validated at least once.
      * 
      * @type {boolean}
      */
    var validated = computed(() => {
      return !_.some(children$.value, {
        available: true,
        validated: false
      });
    });

    /**
      * Whether the step has any busy elements.
      * 
      * @type {boolean}
      */
    var busy = computed(() => {
      return pending.value || debouncing.value;
    });

    /**
      * Whether the step is done (completed, validated has no invalid or pending elements).
      * 
      * @type {boolean}
      */
    var done = computed(() => {
      return completed.value && validated.value && !invalid.value && !pending.value;
    });

    /**
     * The step's component.
     * 
     * @type {component}
     */
    var step$ = computed(() => {
      return form$.value.steps$.steps$[name.value];
    });

    // =============== METHODS ==============

    /**
     * Validate all elements within the step (async).
     *
     * @returns {void}
     */
    var validate = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(function* () {
        // only skip validation if the elements
        // are validated and none is invalid and
        // elements get revalidated on change
        if (validated.value && !invalid.value && form$.value.shouldValidateOnChange) {
          return;
        }
        yield asyncForEach(children$.value, /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator(function* (element$) {
            if ((!element$.validated || element$.invalid || !form$.value.shouldValidateOnChange) && element$.available && !element$.isStatic) {
              yield element$.validate();
            }
          });
          return function (_x) {
            return _ref2.apply(this, arguments);
          };
        }());
      });
      return function validate() {
        return _ref.apply(this, arguments);
      };
    }();

    /**
     * Activate the step.
     *
     * @returns {void}
     */
    var activate = () => {
      if (active.value) {
        return;
      }
      active.value = true;
      fire('activate');
    };

    /**
     * Deactivate the step.
     *
     * @returns {void}
     */
    var deactivate = () => {
      if (!active.value) {
        return;
      }
      active.value = false;
      fire('inactivate');
    };

    /**
     * Enable the step.
     *
     * @returns {void}
     */
    var enable = () => {
      if (!isDisabled.value) {
        return;
      }
      isDisabled.value = false;
      fire('enable');
    };

    /**
     * Disable the step.
     *
     * @returns {void}
     */
    var disable = () => {
      if (isDisabled.value) {
        return;
      }
      isDisabled.value = true;
      fire('disable');
    };

    /**
     * Complete the step.
     *
     * @returns {void}
     */
    var complete = () => {
      if (completed.value) {
        return;
      }
      completed.value = true;
      fire('complete');
    };

    /**
     * Uncomplete the step.
     *
     * @returns {void}
     */
    var uncomplete = () => {
      completed.value = false;
    };

    /**
     * Deactivate all other steps and set the current one as active.
     *
     * @returns {void}
     */
    var select = () => {
      if (isDisabled.value) {
        return;
      }
      steps$.value.select(step$.value);
      _.each(children$.value, element$ => {
        element$.activate();
      });
      activate();
    };

    /**
      * Apply conditions of the step to its elements.
      * 
      * @returns {void}
      * @private
      */
    var forwardConditions = () => {
      if (conditions.value.length == 0) {
        return;
      }
      _.each(children$.value, element$ => {
        _.each(conditions.value, condition => {
          element$.conditions.push(condition);
        });
      });
    };

    /**
     * Set the component to the parent as if `refs` were used.
     * 
     * @param {component} $parent parent component
     * @param {function} assignToParent the assignToParent function for recursion
     * @returns {void}
     * @private
     */
    var assignToParent = ($parent, assignToParent) => {
      if ($parent.steps$Array) {
        $parent.steps$Array.push($this);
      } else {
        assignToParent($parent.$parent, assignToParent);
      }
    };

    /**
    * Removes the component from the parent.
    * 
    * @param {component} $parent parent component
    * @param {function} removeFromParent the removeFromParent function for recursion
    * @private
    */
    var removeFromParent = ($parent, removeFromParent) => {
      if ($parent.steps$Array) {
        $parent.steps$Array.splice($parent.steps$Array.map(t$ => normalize(t$.name)).indexOf(normalize(name.value)), 1);
      } else {
        removeFromParent($parent.$parent, removeFromParent);
      }
    };

    // ============== WATCHERS ==============

    watch(visible, val => {
      // if a revealed step is earlier than the
      // current step, it should be enabled
      if (val && index.value < form$.value.steps$.current$.index) {
        enable();
      }
    });
    watch(children$, () => {
      if (!active.value) {
        return;
      }
      _.each(children$.value, element$ => {
        element$.activate();
      });
    }, {
      deep: false,
      lazy: true
    });
    watch(stepLabel_, () => {
      stepLabel.value = stepLabel_.value && typeof stepLabel_.value === 'object' ? markRaw(stepLabel_.value) : stepLabel_.value;
    });

    // ================ HOOKS ===============

    onMounted(() => {
      // nextTick is required because elements$
      // only available after form is mounted,
      // which is later than the steps mount
      nextTick(() => {
        forwardConditions();
      });
    });
    onBeforeMount(() => {
      assignToParent($this.$parent, assignToParent);
    });
    onBeforeUnmount(() => {
      removeFromParent($this.$parent, removeFromParent);
    });
    return {
      form$,
      Size,
      View,
      classesInstance,
      theme,
      steps$,
      elements$,
      active,
      isDisabled,
      completed,
      events,
      listeners,
      children$,
      visible,
      invalid,
      pending,
      classes,
      Templates,
      template,
      available,
      baseLabel,
      debouncing,
      validated,
      busy,
      done,
      step$,
      isLabelComponent,
      stepLabel,
      index,
      validate,
      activate,
      deactivate,
      enable,
      disable,
      complete,
      uncomplete,
      select,
      forwardConditions,
      on,
      off,
      fire
    };
  }
};

var base$Z = function base(props, context, dependencies) {
  // ============== METHODS ===============

  /**
  * Transforms an element `type` into the element's component name.
  * 
  * @param {string} element* element `type`
  * @returns {string}
  * @private
  */
  var component = element => {
    return "".concat(_.upperFirst(_.camelCase(element.type)), "Element");
  };
  return {
    component
  };
};

var FormElements = {
  name: 'FormElements',
  slots: ['default'],
  props: {
    view: {
      required: false,
      type: [String],
      default: undefined
    }
  },
  setup(props, context) {
    // ============ DEPENDENCIES ============

    var {
      form$,
      Size,
      View,
      classesInstance,
      theme,
      classes,
      Templates,
      template
    } = base$10(props, context);
    var {
      component
    } = base$Z();

    // ============ COMPUTED ============

    /**
     * The form schema.
     * 
     * @type {object}
     * @private
     */
    var schema = computed(() => {
      return form$.value.options.schema;
    });
    return {
      form$,
      Size,
      View,
      classesInstance,
      theme,
      classes,
      Templates,
      template,
      schema,
      component
    };
  }
};

var base$Y = function base(props, context, dependencies) {
  // =============== INJECT ===============

  /**
  * The parent element's component.
  * 
  * @type {component}
  */
  var el$ = inject('el$');
  return {
    el$
  };
};

var base$X = function base(props, context, dependencies) {
  var componentName = context.name;

  // =============== INJECT ===============

  var {
    form$
  } = base$14();
  var {
    el$
  } = base$Y();
  var {
    theme
  } = base$13();
  var {
    Size
  } = base$12();
  var {
    View
  } = base$11(props, context);

  // ============== COMPUTED ===============

  /**
   * The component instance (self).
   * 
   * @type {component}
   */
  var component$ = computed(() => {
    return getCurrentInstance().proxy;
  });

  /**
   * The classes instance (for testing purpose).
   * 
   * @type {MergeClasses}
   * @private
   */
  var classesInstance = computed(() => {
    return new MergeClasses({
      component: componentName.value,
      component$: component$,
      theme: theme.value,
      config: form$.value.$vueform.config,
      templates: Templates.value,
      view: View.value,
      merge: [form$.value.options, el$.value]
    });
  });

  /**
   * The component's classes.
   * 
   * @type {object}
   */
  var classes = computed(() => {
    return classesInstance.value.classes;
  });

  /**
   * The list of templates available to the component.
   * 
   * @type {object}
   * @private
   */
  var Templates = computed(() => {
    return el$.value.Templates;
  });

  /**
   * The component's template.
   * 
   * @type {object}
   */
  var template = computed(() => {
    return View.value && Templates.value["".concat(componentName.value, "_").concat(View.value)] ? Templates.value["".concat(componentName.value, "_").concat(View.value)] : Templates.value[componentName.value];
  });
  return {
    el$,
    form$,
    theme,
    Size,
    View,
    classesInstance,
    classes,
    Templates,
    template
  };
};

var ElementLayout = {
  name: 'ElementLayout',
  slots: ['field', 'label', 'info', 'description', 'before', 'between', 'after'],
  props: {
    multiple: {
      type: [Boolean],
      required: false,
      default: false
    },
    view: {
      type: [String],
      required: false,
      default: undefined
    }
  },
  setup(props, context) {
    // ============ DEPENDENCIES ============

    var {
      form$,
      el$,
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme
    } = base$X(props, context);

    // ============== COMPUTED ==============

    /**
     * Whether the element should be visible.
     * 
     * @type {boolean}
     */
    var visible = computed(() => {
      return el$.value.visible;
    });
    return {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      theme,
      Templates,
      template,
      classes,
      visible
    };
  }
};

var ElementLayoutInline = {
  name: 'ElementLayoutInline',
  slots: ['field', 'label', 'info', 'description', 'before', 'between', 'after'],
  setup(props, context) {
    // ============ DEPENDENCIES ============

    var {
      form$,
      el$,
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme
    } = base$X(props, context);

    // ============== COMPUTED ==============

    /**
     * Whether the element should be visible.
     * 
     * @type {boolean}
     */
    var visible = computed(() => {
      return el$.value.visible;
    });
    return {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      theme,
      Templates,
      template,
      classes,
      visible
      // hasLabel,
    };
  }
};

var ElementLoader = {
  name: 'ElementLoader',
  setup(props, context) {
    // ============ DEPENDENCIES ============

    var {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme
    } = base$X(props, context);
    return {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      theme,
      classes,
      Templates,
      template
    };
  }
};

var ElementLabelFloating = {
  name: 'ElementLabelFloating',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    // ============ DEPENDENCIES ============

    var {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme
    } = base$X(props, context);

    // ============== COMPUTED ==============

    /**
     * The floating label of the element, defined via `floating` prop.
     * 
     * @type {string}
     */
    var floating = computed(() => {
      return el$.value.floating || (form$.value.options.floatPlaceholders ? el$.value.placeholder : null);
    });
    return {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      theme,
      classes,
      Templates,
      template,
      floating
    };
  }
};

var ElementLabel = {
  name: 'ElementLabel',
  slots: ['default', 'info'],
  setup(props, context) {
    // ============ DEPENDENCIES ============

    var {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme
    } = base$X(props, context);
    var {
      label,
      isLabelComponent
    } = base$_(props, context, {
      labelDefinition: computed(() => {
        return el$.value.label;
      }),
      component$: el$
    });

    // ============== COMPUTED ==============

    /**
     * The name of the element.
     * 
     * @type {string}
     * @private
     */
    var name = computed(() => {
      return el$.value.fieldId;
    });

    /**
     * The `id` attribute of the container.
     * 
     * @type {string}
     */
    var id = computed(() => {
      return el$.value.labelId;
    });

    /**
     * Whether the element has a `label` option, a `#label` slot or `Vueform` component's [`forceLabels`](vueform#force-labels) option is `true`.
     * 
     * @type {boolean}
     * 
     */
    var hasLabel = computed(() => {
      return el$.value.hasLabel;
    });

    /**
     * Whether the label is provided as a slot.
     * 
     * @type {boolean}
     * @private
     */
    var isSlot = computed(() => {
      var _el$$value$slots, _el$$value$$slots, _el$$value$$scopedSlo;
      return !!((_el$$value$slots = el$.value.slots) !== null && _el$$value$slots !== void 0 && _el$$value$slots.label || (_el$$value$$slots = el$.value.$slots) !== null && _el$$value$$slots !== void 0 && _el$$value$$slots.label || form$.value.$vueform.vueVersion === 2 && (_el$$value$$scopedSlo = el$.value.$scopedSlots) !== null && _el$$value$$scopedSlo !== void 0 && _el$$value$$scopedSlo.label);
    });
    return {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      theme,
      classes,
      Templates,
      template,
      label,
      isLabelComponent,
      name,
      id,
      hasLabel,
      isSlot
    };
  }
};

function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

var ElementInfo = {
  name: 'ElementInfo',
  slots: ['default'],
  setup(props, context) {
    // ============ DEPENDENCIES ============

    var {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme
    } = base$X(props, context);

    // ================ DATA ================

    /**
     * The position of the info.
     * 
     * @type {boolean}
     * @default false
     * @private
     */
    var position = ref(el$.value.infoPosition);

    // ============== COMPUTED ==============

    /**
     * The info for the element, defined via the element's `info` prop.
     * 
     * @type {string}
     */
    var info = computed(() => {
      return el$.value.info;
    });

    /**
     * The `id` attribute of the container.
     * 
     * @type {string}
     */
    var id = computed(() => {
      return el$.value.infoId;
    });

    /**
     * Whether the info is provided as a slot.
     * 
     * @type {boolean}
     * @private
     */
    var isSlot = computed(() => {
      var _el$$value$slots, _el$$value$$slots, _el$$value$$scopedSlo;
      return !!((_el$$value$slots = el$.value.slots) !== null && _el$$value$slots !== void 0 && _el$$value$slots.info || (_el$$value$$slots = el$.value.$slots) !== null && _el$$value$$slots !== void 0 && _el$$value$$slots.info || form$.value.$vueform.vueVersion === 2 && (_el$$value$$scopedSlo = el$.value.$scopedSlots) !== null && _el$$value$$scopedSlo !== void 0 && _el$$value$$scopedSlo.info);
    });

    // =============== METHODS ==============

    /**
     * Handles the info hover.
     * 
     * @param {Event} e 
     * @return {void}
     * @private
     */
    var handleMouseOver = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(function* (e) {
        if (position.value !== el$.value.infoPosition) {
          return;
        }
        yield nextTick();
        var wrapper = e.target.querySelector('div');
        if (!wrapper) {
          return;
        }
        if (!isInViewport(wrapper)) {
          position.value = 'right';
        }
        yield nextTick();
        if (!isInViewport(wrapper)) {
          position.value = 'top';
        }
        yield nextTick();
        if (!isInViewport(wrapper)) {
          position.value = 'left';
        }
        yield nextTick();
        if (!isInViewport(wrapper)) {
          position.value = 'bottom';
        }
      });
      return function handleMouseOver(_x) {
        return _ref.apply(this, arguments);
      };
    }();
    return {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      theme,
      classes,
      Templates,
      template,
      info,
      isSlot,
      position,
      id,
      handleMouseOver
    };
  }
};

var ElementDescription = {
  name: 'ElementDescription',
  slots: ['default'],
  setup(props, context) {
    // ============ DEPENDENCIES ============

    var {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme
    } = base$X(props, context);

    // ============== COMPUTED ==============

    /**
     * The element's description, defined via the element's `description` option.
     * 
     * @type {string}
     */
    var description = computed(() => {
      return el$.value.description;
    });

    /**
     * The `id` attribute of the container.
     * 
     * @type {string}
     */
    var id = computed(() => {
      return el$.value.descriptionId;
    });

    /**
     * Whether the description is provided as a slot.
     * 
     * @type {boolean}
     * @private
     */
    var isSlot = computed(() => {
      var _el$$value$slots, _el$$value$$slots, _el$$value$$scopedSlo;
      return !!((_el$$value$slots = el$.value.slots) !== null && _el$$value$slots !== void 0 && _el$$value$slots.description || (_el$$value$$slots = el$.value.$slots) !== null && _el$$value$$slots !== void 0 && _el$$value$$slots.description || form$.value.$vueform.vueVersion === 2 && (_el$$value$$scopedSlo = el$.value.$scopedSlots) !== null && _el$$value$$scopedSlo !== void 0 && _el$$value$$scopedSlo.description);
    });
    return {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      theme,
      classes,
      Templates,
      template,
      description,
      isSlot,
      id
    };
  }
};

var ElementError = {
  name: 'ElementError',
  setup(props, context) {
    // ============ DEPENDENCIES ============

    var {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme
    } = base$X(props, context);

    // ============== COMPUTED ==============

    /**
     * The first error of the element.
     * 
     * @type {string}
     */
    var error = computed(() => {
      return el$.value.error;
    });

    /**
     * The `id` attribute of the container.
     * 
     * @type {string}
     */
    var id = computed(() => {
      return el$.value.errorId;
    });
    return {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      theme,
      classes,
      Templates,
      template,
      error,
      id
    };
  }
};

var ElementMessage = {
  name: 'ElementMessage',
  setup(props, context) {
    // ============ DEPENDENCIES ============

    var {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme
    } = base$X(props, context);

    // ============== COMPUTED ==============

    /**
     * The first message of the element.
     * 
     * @type {string}
     */
    var message = computed(() => {
      return el$.value.messageBag ? el$.value.messageBag.message : null;
    });
    return {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      theme,
      classes,
      Templates,
      template,
      message
    };
  }
};

var ElementText = {
  name: 'ElementText',
  slots: ['default'],
  props: {
    type: {
      type: String,
      required: true
    }
  },
  setup(props, context) {
    var {
      type
    } = toRefs(props);

    // ============ DEPENDENCIES ============

    var {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme
    } = base$X(props, context);

    // ============== COMPUTED ==============

    /**
     * The value of the content type.
     * 
     * @type {string}
     * @private
     */
    var content = computed(() => {
      return el$.value[type.value];
    });

    /**
     * Whether the contents are provided as a slot.
     * 
     * @type {boolean}
     * @private
     */
    var isSlot = computed(() => {
      var _el$$value$slots, _el$$value$$slots, _el$$value$$scopedSlo;
      return !!((_el$$value$slots = el$.value.slots) !== null && _el$$value$slots !== void 0 && _el$$value$slots[type.value] || (_el$$value$$slots = el$.value.$slots) !== null && _el$$value$$slots !== void 0 && _el$$value$$slots[type.value] || form$.value.$vueform.vueVersion === 2 && (_el$$value$$scopedSlo = el$.value.$scopedSlots) !== null && _el$$value$$scopedSlo !== void 0 && _el$$value$$scopedSlo[type.value]);
    });
    return {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      theme,
      classes,
      Templates,
      template,
      content,
      isSlot
    };
  }
};

var DragAndDrop = {
  name: 'DragAndDrop',
  emits: ['click', 'drop'],
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(props, context) {
    var {
      disabled
    } = toRefs(props);

    // ============== DEPENDENCIES ==============

    var {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme
    } = base$X(props, context);

    // ================ DATA ================

    /**
     * Whether the user is currently dragging a file over the drag and drop area.
     * 
     * @type {boolean}
     * @default falyse
     */
    var dragging = ref(false);

    /**
     * The DOM element of the drag and drop area.
     * 
     * @type {HTMLElement}
     * @default null
     */
    var area = ref(null);

    // =============== METHODS ==============

    /**
     * Handles `click` event.
     * 
     * @returns {void}
     * @private
     */
    var handleClick = () => {
      context.emit('click');
    };

    // ================ HOOKS ===============

    onMounted(() => {
      // cancelling all default events
      _.each(['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'], event => {
        area.value.addEventListener(event, e => {
          e.preventDefault();
          e.stopPropagation();
        });
      });

      // listening for the actual drop event
      area.value.addEventListener('drop', e => {
        if (disabled.value) {
          return;
        }
        context.emit('drop', e);
        dragging.value = false;
      });
      area.value.addEventListener('dragover', e => {
        if (disabled.value) {
          return;
        }
        if (dragging.value !== true) {
          dragging.value = true;
        }
      });
      area.value.addEventListener('dragleave', e => {
        if (disabled.value) {
          return;
        }
        dragging.value = false;
      });
      area.value.addEventListener('dragend', e => {
        if (disabled.value) {
          return;
        }
        dragging.value = false;
      });
    });
    return {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme,
      dragging,
      area,
      handleClick
    };
  }
};

var ElementAddon = {
  name: 'ElementAddon',
  slots: ['default'],
  props: {
    type: {
      required: true,
      type: String
    }
  },
  setup(props, context) {
    var {
      type
    } = toRefs(props);

    // ============ DEPENDENCIES ============

    var {
      form$,
      el$,
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme
    } = base$X(props, context);

    // ============== COMPUTED ==============

    /**
     * The addon definition.
     * ponent.
    * 
    * @type {string|function|component}
    * @private
     */
    var baseAddon = computed(() => {
      return el$.value.addons[type.value];
    });

    /**
     * The content of the addon. If the addon is provided ss a `function` this contains the resolved value.
     * 
     * @type {string|component}
     */
    var addon = computed(() => {
      return isAddonFunction.value ? baseAddon.value(el$.value) : baseAddon.value || null;
    });

    /**
    * Whether the addon is provided as a function.
    * 
    * @type {boolean}
    * @private
    */
    var isAddonFunction = computed(() => {
      return typeof baseAddon.value === 'function' && (!baseAddon.value.prototype || !baseAddon.value.prototype.constructor || baseAddon.value.prototype.constructor && baseAddon.value.prototype.constructor.name !== 'VueComponent');
    });

    /**
    * Whether addon is provided as a Vue component.
    * 
    * @type {boolean}
    * @private
    */
    var isAddonComponent = computed(() => {
      return isVueComponent(baseAddon.value);
    });

    /**
     * Whether the label is provided as a slot.
     * 
     * @type {boolean}
     * @private
     */
    var isSlot = computed(() => {
      var _el$$value$slots, _el$$value$$slots, _el$$value$$scopedSlo;
      return !!((_el$$value$slots = el$.value.slots) !== null && _el$$value$slots !== void 0 && _el$$value$slots["addon-".concat(type.value)] || (_el$$value$$slots = el$.value.$slots) !== null && _el$$value$$slots !== void 0 && _el$$value$$slots["addon-".concat(type.value)] || form$.value.$vueform.vueVersion === 2 && (_el$$value$$scopedSlo = el$.value.$scopedSlots) !== null && _el$$value$$scopedSlo !== void 0 && _el$$value$$scopedSlo["addon-".concat(type.value)] || el$.value.slots["addon-".concat(type.value)]);
    });
    return {
      el$,
      form$,
      theme,
      Size,
      View,
      classesInstance,
      Templates,
      template,
      classes,
      addon,
      isAddonComponent,
      isSlot
    };
  }
};

var HOOKS = [
    "onChange",
    "onClose",
    "onDayCreate",
    "onDestroy",
    "onKeyDown",
    "onMonthChange",
    "onOpen",
    "onParseConfig",
    "onReady",
    "onValueUpdate",
    "onYearChange",
    "onPreCalendarPosition",
];
var defaults$1 = {
    _disable: [],
    allowInput: false,
    allowInvalidPreload: false,
    altFormat: "F j, Y",
    altInput: false,
    altInputClass: "form-control input",
    animate: typeof window === "object" &&
        window.navigator.userAgent.indexOf("MSIE") === -1,
    ariaDateFormat: "F j, Y",
    autoFillDefaultTime: true,
    clickOpens: true,
    closeOnSelect: true,
    conjunction: ", ",
    dateFormat: "Y-m-d",
    defaultHour: 12,
    defaultMinute: 0,
    defaultSeconds: 0,
    disable: [],
    disableMobile: false,
    enableSeconds: false,
    enableTime: false,
    errorHandler: function (err) {
        return typeof console !== "undefined" && console.warn(err);
    },
    getWeek: function (givenDate) {
        var date = new Date(givenDate.getTime());
        date.setHours(0, 0, 0, 0);
        date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
        var week1 = new Date(date.getFullYear(), 0, 4);
        return (1 +
            Math.round(((date.getTime() - week1.getTime()) / 86400000 -
                3 +
                ((week1.getDay() + 6) % 7)) /
                7));
    },
    hourIncrement: 1,
    ignoredFocusElements: [],
    inline: false,
    locale: "default",
    minuteIncrement: 5,
    mode: "single",
    monthSelectorType: "dropdown",
    nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
    noCalendar: false,
    now: new Date(),
    onChange: [],
    onClose: [],
    onDayCreate: [],
    onDestroy: [],
    onKeyDown: [],
    onMonthChange: [],
    onOpen: [],
    onParseConfig: [],
    onReady: [],
    onValueUpdate: [],
    onYearChange: [],
    onPreCalendarPosition: [],
    plugins: [],
    position: "auto",
    positionElement: undefined,
    prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
    shorthandCurrentMonth: false,
    showMonths: 1,
    static: false,
    time_24hr: false,
    weekNumbers: false,
    wrap: false,
};

var english = {
    weekdays: {
        shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        longhand: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ],
    },
    months: {
        shorthand: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        longhand: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ],
    },
    daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    firstDayOfWeek: 0,
    ordinal: function (nth) {
        var s = nth % 100;
        if (s > 3 && s < 21)
            return "th";
        switch (s % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    },
    rangeSeparator: " to ",
    weekAbbreviation: "Wk",
    scrollTitle: "Scroll to increment",
    toggleTitle: "Click to toggle",
    amPM: ["AM", "PM"],
    yearAriaLabel: "Year",
    monthAriaLabel: "Month",
    hourAriaLabel: "Hour",
    minuteAriaLabel: "Minute",
    time_24hr: false,
};

var pad = function (number, length) {
    if (length === void 0) { length = 2; }
    return ("000" + number).slice(length * -1);
};
var int = function (bool) { return (bool === true ? 1 : 0); };
function debounce(fn, wait) {
    var t;
    return function () {
        var _this = this;
        var args = arguments;
        clearTimeout(t);
        t = setTimeout(function () { return fn.apply(_this, args); }, wait);
    };
}
var arrayify = function (obj) {
    return obj instanceof Array ? obj : [obj];
};

function toggleClass$1(elem, className, bool) {
    if (bool === true)
        return elem.classList.add(className);
    elem.classList.remove(className);
}
function createElement(tag, className, content) {
    var e = window.document.createElement(tag);
    className = className || "";
    content = content || "";
    e.className = className;
    if (content !== undefined)
        e.textContent = content;
    return e;
}
function clearNode(node) {
    while (node.firstChild)
        node.removeChild(node.firstChild);
}
function findParent(node, condition) {
    if (condition(node))
        return node;
    else if (node.parentNode)
        return findParent(node.parentNode, condition);
    return undefined;
}
function createNumberInput(inputClassName, opts) {
    var wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
    if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
        numInput.type = "number";
    }
    else {
        numInput.type = "text";
        numInput.pattern = "\\d*";
    }
    if (opts !== undefined)
        for (var key in opts)
            numInput.setAttribute(key, opts[key]);
    wrapper.appendChild(numInput);
    wrapper.appendChild(arrowUp);
    wrapper.appendChild(arrowDown);
    return wrapper;
}
function getEventTarget(event) {
    try {
        if (typeof event.composedPath === "function") {
            var path = event.composedPath();
            return path[0];
        }
        return event.target;
    }
    catch (error) {
        return event.target;
    }
}

var doNothing = function () { return undefined; };
var monthToStr = function (monthNumber, shorthand, locale) { return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber]; };
var revFormat = {
    D: doNothing,
    F: function (dateObj, monthName, locale) {
        dateObj.setMonth(locale.months.longhand.indexOf(monthName));
    },
    G: function (dateObj, hour) {
        dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
    },
    H: function (dateObj, hour) {
        dateObj.setHours(parseFloat(hour));
    },
    J: function (dateObj, day) {
        dateObj.setDate(parseFloat(day));
    },
    K: function (dateObj, amPM, locale) {
        dateObj.setHours((dateObj.getHours() % 12) +
            12 * int(new RegExp(locale.amPM[1], "i").test(amPM)));
    },
    M: function (dateObj, shortMonth, locale) {
        dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
    },
    S: function (dateObj, seconds) {
        dateObj.setSeconds(parseFloat(seconds));
    },
    U: function (_, unixSeconds) { return new Date(parseFloat(unixSeconds) * 1000); },
    W: function (dateObj, weekNum, locale) {
        var weekNumber = parseInt(weekNum);
        var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
        date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
        return date;
    },
    Y: function (dateObj, year) {
        dateObj.setFullYear(parseFloat(year));
    },
    Z: function (_, ISODate) { return new Date(ISODate); },
    d: function (dateObj, day) {
        dateObj.setDate(parseFloat(day));
    },
    h: function (dateObj, hour) {
        dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
    },
    i: function (dateObj, minutes) {
        dateObj.setMinutes(parseFloat(minutes));
    },
    j: function (dateObj, day) {
        dateObj.setDate(parseFloat(day));
    },
    l: doNothing,
    m: function (dateObj, month) {
        dateObj.setMonth(parseFloat(month) - 1);
    },
    n: function (dateObj, month) {
        dateObj.setMonth(parseFloat(month) - 1);
    },
    s: function (dateObj, seconds) {
        dateObj.setSeconds(parseFloat(seconds));
    },
    u: function (_, unixMillSeconds) {
        return new Date(parseFloat(unixMillSeconds));
    },
    w: doNothing,
    y: function (dateObj, year) {
        dateObj.setFullYear(2000 + parseFloat(year));
    },
};
var tokenRegex = {
    D: "",
    F: "",
    G: "(\\d\\d|\\d)",
    H: "(\\d\\d|\\d)",
    J: "(\\d\\d|\\d)\\w+",
    K: "",
    M: "",
    S: "(\\d\\d|\\d)",
    U: "(.+)",
    W: "(\\d\\d|\\d)",
    Y: "(\\d{4})",
    Z: "(.+)",
    d: "(\\d\\d|\\d)",
    h: "(\\d\\d|\\d)",
    i: "(\\d\\d|\\d)",
    j: "(\\d\\d|\\d)",
    l: "",
    m: "(\\d\\d|\\d)",
    n: "(\\d\\d|\\d)",
    s: "(\\d\\d|\\d)",
    u: "(.+)",
    w: "(\\d\\d|\\d)",
    y: "(\\d{2})",
};
var formats = {
    Z: function (date) { return date.toISOString(); },
    D: function (date, locale, options) {
        return locale.weekdays.shorthand[formats.w(date, locale, options)];
    },
    F: function (date, locale, options) {
        return monthToStr(formats.n(date, locale, options) - 1, false, locale);
    },
    G: function (date, locale, options) {
        return pad(formats.h(date, locale, options));
    },
    H: function (date) { return pad(date.getHours()); },
    J: function (date, locale) {
        return locale.ordinal !== undefined
            ? date.getDate() + locale.ordinal(date.getDate())
            : date.getDate();
    },
    K: function (date, locale) { return locale.amPM[int(date.getHours() > 11)]; },
    M: function (date, locale) {
        return monthToStr(date.getMonth(), true, locale);
    },
    S: function (date) { return pad(date.getSeconds()); },
    U: function (date) { return date.getTime() / 1000; },
    W: function (date, _, options) {
        return options.getWeek(date);
    },
    Y: function (date) { return pad(date.getFullYear(), 4); },
    d: function (date) { return pad(date.getDate()); },
    h: function (date) { return (date.getHours() % 12 ? date.getHours() % 12 : 12); },
    i: function (date) { return pad(date.getMinutes()); },
    j: function (date) { return date.getDate(); },
    l: function (date, locale) {
        return locale.weekdays.longhand[date.getDay()];
    },
    m: function (date) { return pad(date.getMonth() + 1); },
    n: function (date) { return date.getMonth() + 1; },
    s: function (date) { return date.getSeconds(); },
    u: function (date) { return date.getTime(); },
    w: function (date) { return date.getDay(); },
    y: function (date) { return String(date.getFullYear()).substring(2); },
};

var createDateFormatter = function (_a) {
    var _b = _a.config, config = _b === void 0 ? defaults$1 : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c, _d = _a.isMobile, isMobile = _d === void 0 ? false : _d;
    return function (dateObj, frmt, overrideLocale) {
        var locale = overrideLocale || l10n;
        if (config.formatDate !== undefined && !isMobile) {
            return config.formatDate(dateObj, frmt, locale);
        }
        return frmt
            .split("")
            .map(function (c, i, arr) {
            return formats[c] && arr[i - 1] !== "\\"
                ? formats[c](dateObj, locale, config)
                : c !== "\\"
                    ? c
                    : "";
        })
            .join("");
    };
};
var createDateParser = function (_a) {
    var _b = _a.config, config = _b === void 0 ? defaults$1 : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c;
    return function (date, givenFormat, timeless, customLocale) {
        if (date !== 0 && !date)
            return undefined;
        var locale = customLocale || l10n;
        var parsedDate;
        var dateOrig = date;
        if (date instanceof Date)
            parsedDate = new Date(date.getTime());
        else if (typeof date !== "string" &&
            date.toFixed !== undefined)
            parsedDate = new Date(date);
        else if (typeof date === "string") {
            var format = givenFormat || (config || defaults$1).dateFormat;
            var datestr = String(date).trim();
            if (datestr === "today") {
                parsedDate = new Date();
                timeless = true;
            }
            else if (config && config.parseDate) {
                parsedDate = config.parseDate(date, format);
            }
            else if (/Z$/.test(datestr) ||
                /GMT$/.test(datestr)) {
                parsedDate = new Date(date);
            }
            else {
                var matched = void 0, ops = [];
                for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
                    var token = format[i];
                    var isBackSlash = token === "\\";
                    var escaped = format[i - 1] === "\\" || isBackSlash;
                    if (tokenRegex[token] && !escaped) {
                        regexStr += tokenRegex[token];
                        var match = new RegExp(regexStr).exec(date);
                        if (match && (matched = true)) {
                            ops[token !== "Y" ? "push" : "unshift"]({
                                fn: revFormat[token],
                                val: match[++matchIndex],
                            });
                        }
                    }
                    else if (!isBackSlash)
                        regexStr += ".";
                }
                parsedDate =
                    !config || !config.noCalendar
                        ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)
                        : new Date(new Date().setHours(0, 0, 0, 0));
                ops.forEach(function (_a) {
                    var fn = _a.fn, val = _a.val;
                    return (parsedDate = fn(parsedDate, val, locale) || parsedDate);
                });
                parsedDate = matched ? parsedDate : undefined;
            }
        }
        if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
            config.errorHandler(new Error("Invalid date provided: " + dateOrig));
            return undefined;
        }
        if (timeless === true)
            parsedDate.setHours(0, 0, 0, 0);
        return parsedDate;
    };
};
function compareDates(date1, date2, timeless) {
    if (timeless === void 0) { timeless = true; }
    if (timeless !== false) {
        return (new Date(date1.getTime()).setHours(0, 0, 0, 0) -
            new Date(date2.getTime()).setHours(0, 0, 0, 0));
    }
    return date1.getTime() - date2.getTime();
}
var isBetween = function (ts, ts1, ts2) {
    return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
};
var calculateSecondsSinceMidnight = function (hours, minutes, seconds) {
    return hours * 3600 + minutes * 60 + seconds;
};
var parseSeconds = function (secondsSinceMidnight) {
    var hours = Math.floor(secondsSinceMidnight / 3600), minutes = (secondsSinceMidnight - hours * 3600) / 60;
    return [hours, minutes, secondsSinceMidnight - hours * 3600 - minutes * 60];
};
var duration = {
    DAY: 86400000,
};
function getDefaultHours(config) {
    var hours = config.defaultHour;
    var minutes = config.defaultMinute;
    var seconds = config.defaultSeconds;
    if (config.minDate !== undefined) {
        var minHour = config.minDate.getHours();
        var minMinutes = config.minDate.getMinutes();
        var minSeconds = config.minDate.getSeconds();
        if (hours < minHour) {
            hours = minHour;
        }
        if (hours === minHour && minutes < minMinutes) {
            minutes = minMinutes;
        }
        if (hours === minHour && minutes === minMinutes && seconds < minSeconds)
            seconds = config.minDate.getSeconds();
    }
    if (config.maxDate !== undefined) {
        var maxHr = config.maxDate.getHours();
        var maxMinutes = config.maxDate.getMinutes();
        hours = Math.min(hours, maxHr);
        if (hours === maxHr)
            minutes = Math.min(maxMinutes, minutes);
        if (hours === maxHr && minutes === maxMinutes)
            seconds = config.maxDate.getSeconds();
    }
    return { hours: hours, minutes: minutes, seconds: seconds };
}

if (typeof Object.assign !== "function") {
    Object.assign = function (target) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!target) {
            throw TypeError("Cannot convert undefined or null to object");
        }
        var _loop_1 = function (source) {
            if (source) {
                Object.keys(source).forEach(function (key) { return (target[key] = source[key]); });
            }
        };
        for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
            var source = args_1[_a];
            _loop_1(source);
        }
        return target;
    };
}

var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var DEBOUNCED_CHANGE_MS = 300;
function FlatpickrInstance(element, instanceConfig) {
    var self = {
        config: __assign(__assign({}, defaults$1), flatpickr.defaultConfig),
        l10n: english,
    };
    self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
    self._handlers = [];
    self.pluginElements = [];
    self.loadedPlugins = [];
    self._bind = bind;
    self._setHoursFromDate = setHoursFromDate;
    self._positionCalendar = positionCalendar;
    self.changeMonth = changeMonth;
    self.changeYear = changeYear;
    self.clear = clear;
    self.close = close;
    self.onMouseOver = onMouseOver;
    self._createElement = createElement;
    self.createDay = createDay;
    self.destroy = destroy;
    self.isEnabled = isEnabled;
    self.jumpToDate = jumpToDate;
    self.updateValue = updateValue;
    self.open = open;
    self.redraw = redraw;
    self.set = set;
    self.setDate = setDate;
    self.toggle = toggle;
    function setupHelperFunctions() {
        self.utils = {
            getDaysInMonth: function (month, yr) {
                if (month === void 0) { month = self.currentMonth; }
                if (yr === void 0) { yr = self.currentYear; }
                if (month === 1 && ((yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0))
                    return 29;
                return self.l10n.daysInMonth[month];
            },
        };
    }
    function init() {
        self.element = self.input = element;
        self.isOpen = false;
        parseConfig();
        setupLocale();
        setupInputs();
        setupDates();
        setupHelperFunctions();
        if (!self.isMobile)
            build();
        bindEvents();
        if (self.selectedDates.length || self.config.noCalendar) {
            if (self.config.enableTime) {
                setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj : undefined);
            }
            updateValue(false);
        }
        setCalendarWidth();
        var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        if (!self.isMobile && isSafari) {
            positionCalendar();
        }
        triggerEvent("onReady");
    }
    function getClosestActiveElement() {
        var _a;
        return (((_a = self.calendarContainer) === null || _a === void 0 ? void 0 : _a.getRootNode())
            .activeElement || document.activeElement);
    }
    function bindToInstance(fn) {
        return fn.bind(self);
    }
    function setCalendarWidth() {
        var config = self.config;
        if (config.weekNumbers === false && config.showMonths === 1) {
            return;
        }
        else if (config.noCalendar !== true) {
            window.requestAnimationFrame(function () {
                if (self.calendarContainer !== undefined) {
                    self.calendarContainer.style.visibility = "hidden";
                    self.calendarContainer.style.display = "block";
                }
                if (self.daysContainer !== undefined) {
                    var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
                    self.daysContainer.style.width = daysWidth + "px";
                    self.calendarContainer.style.width =
                        daysWidth +
                            (self.weekWrapper !== undefined
                                ? self.weekWrapper.offsetWidth
                                : 0) +
                            "px";
                    self.calendarContainer.style.removeProperty("visibility");
                    self.calendarContainer.style.removeProperty("display");
                }
            });
        }
    }
    function updateTime(e) {
        if (self.selectedDates.length === 0) {
            var defaultDate = self.config.minDate === undefined ||
                compareDates(new Date(), self.config.minDate) >= 0
                ? new Date()
                : new Date(self.config.minDate.getTime());
            var defaults = getDefaultHours(self.config);
            defaultDate.setHours(defaults.hours, defaults.minutes, defaults.seconds, defaultDate.getMilliseconds());
            self.selectedDates = [defaultDate];
            self.latestSelectedDateObj = defaultDate;
        }
        if (e !== undefined && e.type !== "blur") {
            timeWrapper(e);
        }
        var prevValue = self._input.value;
        setHoursFromInputs();
        updateValue();
        if (self._input.value !== prevValue) {
            self._debouncedChange();
        }
    }
    function ampm2military(hour, amPM) {
        return (hour % 12) + 12 * int(amPM === self.l10n.amPM[1]);
    }
    function military2ampm(hour) {
        switch (hour % 24) {
            case 0:
            case 12:
                return 12;
            default:
                return hour % 12;
        }
    }
    function setHoursFromInputs() {
        if (self.hourElement === undefined || self.minuteElement === undefined)
            return;
        var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== undefined
            ? (parseInt(self.secondElement.value, 10) || 0) % 60
            : 0;
        if (self.amPM !== undefined) {
            hours = ampm2military(hours, self.amPM.textContent);
        }
        var limitMinHours = self.config.minTime !== undefined ||
            (self.config.minDate &&
                self.minDateHasTime &&
                self.latestSelectedDateObj &&
                compareDates(self.latestSelectedDateObj, self.config.minDate, true) ===
                    0);
        var limitMaxHours = self.config.maxTime !== undefined ||
            (self.config.maxDate &&
                self.maxDateHasTime &&
                self.latestSelectedDateObj &&
                compareDates(self.latestSelectedDateObj, self.config.maxDate, true) ===
                    0);
        if (self.config.maxTime !== undefined &&
            self.config.minTime !== undefined &&
            self.config.minTime > self.config.maxTime) {
            var minBound = calculateSecondsSinceMidnight(self.config.minTime.getHours(), self.config.minTime.getMinutes(), self.config.minTime.getSeconds());
            var maxBound = calculateSecondsSinceMidnight(self.config.maxTime.getHours(), self.config.maxTime.getMinutes(), self.config.maxTime.getSeconds());
            var currentTime = calculateSecondsSinceMidnight(hours, minutes, seconds);
            if (currentTime > maxBound && currentTime < minBound) {
                var result = parseSeconds(minBound);
                hours = result[0];
                minutes = result[1];
                seconds = result[2];
            }
        }
        else {
            if (limitMaxHours) {
                var maxTime = self.config.maxTime !== undefined
                    ? self.config.maxTime
                    : self.config.maxDate;
                hours = Math.min(hours, maxTime.getHours());
                if (hours === maxTime.getHours())
                    minutes = Math.min(minutes, maxTime.getMinutes());
                if (minutes === maxTime.getMinutes())
                    seconds = Math.min(seconds, maxTime.getSeconds());
            }
            if (limitMinHours) {
                var minTime = self.config.minTime !== undefined
                    ? self.config.minTime
                    : self.config.minDate;
                hours = Math.max(hours, minTime.getHours());
                if (hours === minTime.getHours() && minutes < minTime.getMinutes())
                    minutes = minTime.getMinutes();
                if (minutes === minTime.getMinutes())
                    seconds = Math.max(seconds, minTime.getSeconds());
            }
        }
        setHours(hours, minutes, seconds);
    }
    function setHoursFromDate(dateObj) {
        var date = dateObj || self.latestSelectedDateObj;
        if (date && date instanceof Date) {
            setHours(date.getHours(), date.getMinutes(), date.getSeconds());
        }
    }
    function setHours(hours, minutes, seconds) {
        if (self.latestSelectedDateObj !== undefined) {
            self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
        }
        if (!self.hourElement || !self.minuteElement || self.isMobile)
            return;
        self.hourElement.value = pad(!self.config.time_24hr
            ? ((12 + hours) % 12) + 12 * int(hours % 12 === 0)
            : hours);
        self.minuteElement.value = pad(minutes);
        if (self.amPM !== undefined)
            self.amPM.textContent = self.l10n.amPM[int(hours >= 12)];
        if (self.secondElement !== undefined)
            self.secondElement.value = pad(seconds);
    }
    function onYearInput(event) {
        var eventTarget = getEventTarget(event);
        var year = parseInt(eventTarget.value) + (event.delta || 0);
        if (year / 1000 > 1 ||
            (event.key === "Enter" && !/[^\d]/.test(year.toString()))) {
            changeYear(year);
        }
    }
    function bind(element, event, handler, options) {
        if (event instanceof Array)
            return event.forEach(function (ev) { return bind(element, ev, handler, options); });
        if (element instanceof Array)
            return element.forEach(function (el) { return bind(el, event, handler, options); });
        element.addEventListener(event, handler, options);
        self._handlers.push({
            remove: function () { return element.removeEventListener(event, handler, options); },
        });
    }
    function triggerChange() {
        triggerEvent("onChange");
    }
    function bindEvents() {
        if (self.config.wrap) {
            ["open", "close", "toggle", "clear"].forEach(function (evt) {
                Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
                    return bind(el, "click", self[evt]);
                });
            });
        }
        if (self.isMobile) {
            setupMobile();
            return;
        }
        var debouncedResize = debounce(onResize, 50);
        self._debouncedChange = debounce(triggerChange, DEBOUNCED_CHANGE_MS);
        if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent))
            bind(self.daysContainer, "mouseover", function (e) {
                if (self.config.mode === "range")
                    onMouseOver(getEventTarget(e));
            });
        bind(self._input, "keydown", onKeyDown);
        if (self.calendarContainer !== undefined) {
            bind(self.calendarContainer, "keydown", onKeyDown);
        }
        if (!self.config.inline && !self.config.static)
            bind(window, "resize", debouncedResize);
        if (window.ontouchstart !== undefined)
            bind(window.document, "touchstart", documentClick);
        else
            bind(window.document, "mousedown", documentClick);
        bind(window.document, "focus", documentClick, { capture: true });
        if (self.config.clickOpens === true) {
            bind(self._input, "focus", self.open);
            bind(self._input, "click", self.open);
        }
        if (self.daysContainer !== undefined) {
            bind(self.monthNav, "click", onMonthNavClick);
            bind(self.monthNav, ["keyup", "increment"], onYearInput);
            bind(self.daysContainer, "click", selectDate);
        }
        if (self.timeContainer !== undefined &&
            self.minuteElement !== undefined &&
            self.hourElement !== undefined) {
            var selText = function (e) {
                return getEventTarget(e).select();
            };
            bind(self.timeContainer, ["increment"], updateTime);
            bind(self.timeContainer, "blur", updateTime, { capture: true });
            bind(self.timeContainer, "click", timeIncrement);
            bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
            if (self.secondElement !== undefined)
                bind(self.secondElement, "focus", function () { return self.secondElement && self.secondElement.select(); });
            if (self.amPM !== undefined) {
                bind(self.amPM, "click", function (e) {
                    updateTime(e);
                });
            }
        }
        if (self.config.allowInput) {
            bind(self._input, "blur", onBlur);
        }
    }
    function jumpToDate(jumpDate, triggerChange) {
        var jumpTo = jumpDate !== undefined
            ? self.parseDate(jumpDate)
            : self.latestSelectedDateObj ||
                (self.config.minDate && self.config.minDate > self.now
                    ? self.config.minDate
                    : self.config.maxDate && self.config.maxDate < self.now
                        ? self.config.maxDate
                        : self.now);
        var oldYear = self.currentYear;
        var oldMonth = self.currentMonth;
        try {
            if (jumpTo !== undefined) {
                self.currentYear = jumpTo.getFullYear();
                self.currentMonth = jumpTo.getMonth();
            }
        }
        catch (e) {
            e.message = "Invalid date supplied: " + jumpTo;
            self.config.errorHandler(e);
        }
        if (triggerChange && self.currentYear !== oldYear) {
            triggerEvent("onYearChange");
            buildMonthSwitch();
        }
        if (triggerChange &&
            (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
            triggerEvent("onMonthChange");
        }
        self.redraw();
    }
    function timeIncrement(e) {
        var eventTarget = getEventTarget(e);
        if (~eventTarget.className.indexOf("arrow"))
            incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
    }
    function incrementNumInput(e, delta, inputElem) {
        var target = e && getEventTarget(e);
        var input = inputElem ||
            (target && target.parentNode && target.parentNode.firstChild);
        var event = createEvent("increment");
        event.delta = delta;
        input && input.dispatchEvent(event);
    }
    function build() {
        var fragment = window.document.createDocumentFragment();
        self.calendarContainer = createElement("div", "flatpickr-calendar");
        self.calendarContainer.tabIndex = -1;
        if (!self.config.noCalendar) {
            fragment.appendChild(buildMonthNav());
            self.innerContainer = createElement("div", "flatpickr-innerContainer");
            if (self.config.weekNumbers) {
                var _a = buildWeeks(), weekWrapper = _a.weekWrapper, weekNumbers = _a.weekNumbers;
                self.innerContainer.appendChild(weekWrapper);
                self.weekNumbers = weekNumbers;
                self.weekWrapper = weekWrapper;
            }
            self.rContainer = createElement("div", "flatpickr-rContainer");
            self.rContainer.appendChild(buildWeekdays());
            if (!self.daysContainer) {
                self.daysContainer = createElement("div", "flatpickr-days");
                self.daysContainer.tabIndex = -1;
            }
            buildDays();
            self.rContainer.appendChild(self.daysContainer);
            self.innerContainer.appendChild(self.rContainer);
            fragment.appendChild(self.innerContainer);
        }
        if (self.config.enableTime) {
            fragment.appendChild(buildTime());
        }
        toggleClass$1(self.calendarContainer, "rangeMode", self.config.mode === "range");
        toggleClass$1(self.calendarContainer, "animate", self.config.animate === true);
        toggleClass$1(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
        self.calendarContainer.appendChild(fragment);
        var customAppend = self.config.appendTo !== undefined &&
            self.config.appendTo.nodeType !== undefined;
        if (self.config.inline || self.config.static) {
            self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
            if (self.config.inline) {
                if (!customAppend && self.element.parentNode)
                    self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
                else if (self.config.appendTo !== undefined)
                    self.config.appendTo.appendChild(self.calendarContainer);
            }
            if (self.config.static) {
                var wrapper = createElement("div", "flatpickr-wrapper");
                if (self.element.parentNode)
                    self.element.parentNode.insertBefore(wrapper, self.element);
                wrapper.appendChild(self.element);
                if (self.altInput)
                    wrapper.appendChild(self.altInput);
                wrapper.appendChild(self.calendarContainer);
            }
        }
        if (!self.config.static && !self.config.inline)
            (self.config.appendTo !== undefined
                ? self.config.appendTo
                : window.document.body).appendChild(self.calendarContainer);
    }
    function createDay(className, date, _dayNumber, i) {
        var dateIsEnabled = isEnabled(date, true), dayElement = createElement("span", className, date.getDate().toString());
        dayElement.dateObj = date;
        dayElement.$i = i;
        dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
        if (className.indexOf("hidden") === -1 &&
            compareDates(date, self.now) === 0) {
            self.todayDateElem = dayElement;
            dayElement.classList.add("today");
            dayElement.setAttribute("aria-current", "date");
        }
        if (dateIsEnabled) {
            dayElement.tabIndex = -1;
            if (isDateSelected(date)) {
                dayElement.classList.add("selected");
                self.selectedDateElem = dayElement;
                if (self.config.mode === "range") {
                    toggleClass$1(dayElement, "startRange", self.selectedDates[0] &&
                        compareDates(date, self.selectedDates[0], true) === 0);
                    toggleClass$1(dayElement, "endRange", self.selectedDates[1] &&
                        compareDates(date, self.selectedDates[1], true) === 0);
                    if (className === "nextMonthDay")
                        dayElement.classList.add("inRange");
                }
            }
        }
        else {
            dayElement.classList.add("flatpickr-disabled");
        }
        if (self.config.mode === "range") {
            if (isDateInRange(date) && !isDateSelected(date))
                dayElement.classList.add("inRange");
        }
        if (self.weekNumbers &&
            self.config.showMonths === 1 &&
            className !== "prevMonthDay" &&
            i % 7 === 6) {
            self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
        }
        triggerEvent("onDayCreate", dayElement);
        return dayElement;
    }
    function focusOnDayElem(targetNode) {
        targetNode.focus();
        if (self.config.mode === "range")
            onMouseOver(targetNode);
    }
    function getFirstAvailableDay(delta) {
        var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
        var endMonth = delta > 0 ? self.config.showMonths : -1;
        for (var m = startMonth; m != endMonth; m += delta) {
            var month = self.daysContainer.children[m];
            var startIndex = delta > 0 ? 0 : month.children.length - 1;
            var endIndex = delta > 0 ? month.children.length : -1;
            for (var i = startIndex; i != endIndex; i += delta) {
                var c = month.children[i];
                if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj))
                    return c;
            }
        }
        return undefined;
    }
    function getNextAvailableDay(current, delta) {
        var givenMonth = current.className.indexOf("Month") === -1
            ? current.dateObj.getMonth()
            : self.currentMonth;
        var endMonth = delta > 0 ? self.config.showMonths : -1;
        var loopDelta = delta > 0 ? 1 : -1;
        for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
            var month = self.daysContainer.children[m];
            var startIndex = givenMonth - self.currentMonth === m
                ? current.$i + delta
                : delta < 0
                    ? month.children.length - 1
                    : 0;
            var numMonthDays = month.children.length;
            for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
                var c = month.children[i];
                if (c.className.indexOf("hidden") === -1 &&
                    isEnabled(c.dateObj) &&
                    Math.abs(current.$i - i) >= Math.abs(delta))
                    return focusOnDayElem(c);
            }
        }
        self.changeMonth(loopDelta);
        focusOnDay(getFirstAvailableDay(loopDelta), 0);
        return undefined;
    }
    function focusOnDay(current, offset) {
        var activeElement = getClosestActiveElement();
        var dayFocused = isInView(activeElement || document.body);
        var startElem = current !== undefined
            ? current
            : dayFocused
                ? activeElement
                : self.selectedDateElem !== undefined && isInView(self.selectedDateElem)
                    ? self.selectedDateElem
                    : self.todayDateElem !== undefined && isInView(self.todayDateElem)
                        ? self.todayDateElem
                        : getFirstAvailableDay(offset > 0 ? 1 : -1);
        if (startElem === undefined) {
            self._input.focus();
        }
        else if (!dayFocused) {
            focusOnDayElem(startElem);
        }
        else {
            getNextAvailableDay(startElem, offset);
        }
    }
    function buildMonthDays(year, month) {
        var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
        var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12, year);
        var daysInMonth = self.utils.getDaysInMonth(month, year), days = window.document.createDocumentFragment(), isMultiMonth = self.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
        var dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
        for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
            days.appendChild(createDay("flatpickr-day " + prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
        }
        for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
            days.appendChild(createDay("flatpickr-day", new Date(year, month, dayNumber), dayNumber, dayIndex));
        }
        for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth &&
            (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
            days.appendChild(createDay("flatpickr-day " + nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
        }
        var dayContainer = createElement("div", "dayContainer");
        dayContainer.appendChild(days);
        return dayContainer;
    }
    function buildDays() {
        if (self.daysContainer === undefined) {
            return;
        }
        clearNode(self.daysContainer);
        if (self.weekNumbers)
            clearNode(self.weekNumbers);
        var frag = document.createDocumentFragment();
        for (var i = 0; i < self.config.showMonths; i++) {
            var d = new Date(self.currentYear, self.currentMonth, 1);
            d.setMonth(self.currentMonth + i);
            frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
        }
        self.daysContainer.appendChild(frag);
        self.days = self.daysContainer.firstChild;
        if (self.config.mode === "range" && self.selectedDates.length === 1) {
            onMouseOver();
        }
    }
    function buildMonthSwitch() {
        if (self.config.showMonths > 1 ||
            self.config.monthSelectorType !== "dropdown")
            return;
        var shouldBuildMonth = function (month) {
            if (self.config.minDate !== undefined &&
                self.currentYear === self.config.minDate.getFullYear() &&
                month < self.config.minDate.getMonth()) {
                return false;
            }
            return !(self.config.maxDate !== undefined &&
                self.currentYear === self.config.maxDate.getFullYear() &&
                month > self.config.maxDate.getMonth());
        };
        self.monthsDropdownContainer.tabIndex = -1;
        self.monthsDropdownContainer.innerHTML = "";
        for (var i = 0; i < 12; i++) {
            if (!shouldBuildMonth(i))
                continue;
            var month = createElement("option", "flatpickr-monthDropdown-month");
            month.value = new Date(self.currentYear, i).getMonth().toString();
            month.textContent = monthToStr(i, self.config.shorthandCurrentMonth, self.l10n);
            month.tabIndex = -1;
            if (self.currentMonth === i) {
                month.selected = true;
            }
            self.monthsDropdownContainer.appendChild(month);
        }
    }
    function buildMonth() {
        var container = createElement("div", "flatpickr-month");
        var monthNavFragment = window.document.createDocumentFragment();
        var monthElement;
        if (self.config.showMonths > 1 ||
            self.config.monthSelectorType === "static") {
            monthElement = createElement("span", "cur-month");
        }
        else {
            self.monthsDropdownContainer = createElement("select", "flatpickr-monthDropdown-months");
            self.monthsDropdownContainer.setAttribute("aria-label", self.l10n.monthAriaLabel);
            bind(self.monthsDropdownContainer, "change", function (e) {
                var target = getEventTarget(e);
                var selectedMonth = parseInt(target.value, 10);
                self.changeMonth(selectedMonth - self.currentMonth);
                triggerEvent("onMonthChange");
            });
            buildMonthSwitch();
            monthElement = self.monthsDropdownContainer;
        }
        var yearInput = createNumberInput("cur-year", { tabindex: "-1" });
        var yearElement = yearInput.getElementsByTagName("input")[0];
        yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
        if (self.config.minDate) {
            yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
        }
        if (self.config.maxDate) {
            yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
            yearElement.disabled =
                !!self.config.minDate &&
                    self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
        }
        var currentMonth = createElement("div", "flatpickr-current-month");
        currentMonth.appendChild(monthElement);
        currentMonth.appendChild(yearInput);
        monthNavFragment.appendChild(currentMonth);
        container.appendChild(monthNavFragment);
        return {
            container: container,
            yearElement: yearElement,
            monthElement: monthElement,
        };
    }
    function buildMonths() {
        clearNode(self.monthNav);
        self.monthNav.appendChild(self.prevMonthNav);
        if (self.config.showMonths) {
            self.yearElements = [];
            self.monthElements = [];
        }
        for (var m = self.config.showMonths; m--;) {
            var month = buildMonth();
            self.yearElements.push(month.yearElement);
            self.monthElements.push(month.monthElement);
            self.monthNav.appendChild(month.container);
        }
        self.monthNav.appendChild(self.nextMonthNav);
    }
    function buildMonthNav() {
        self.monthNav = createElement("div", "flatpickr-months");
        self.yearElements = [];
        self.monthElements = [];
        self.prevMonthNav = createElement("span", "flatpickr-prev-month");
        self.prevMonthNav.innerHTML = self.config.prevArrow;
        self.nextMonthNav = createElement("span", "flatpickr-next-month");
        self.nextMonthNav.innerHTML = self.config.nextArrow;
        buildMonths();
        Object.defineProperty(self, "_hidePrevMonthArrow", {
            get: function () { return self.__hidePrevMonthArrow; },
            set: function (bool) {
                if (self.__hidePrevMonthArrow !== bool) {
                    toggleClass$1(self.prevMonthNav, "flatpickr-disabled", bool);
                    self.__hidePrevMonthArrow = bool;
                }
            },
        });
        Object.defineProperty(self, "_hideNextMonthArrow", {
            get: function () { return self.__hideNextMonthArrow; },
            set: function (bool) {
                if (self.__hideNextMonthArrow !== bool) {
                    toggleClass$1(self.nextMonthNav, "flatpickr-disabled", bool);
                    self.__hideNextMonthArrow = bool;
                }
            },
        });
        self.currentYearElement = self.yearElements[0];
        updateNavigationCurrentMonth();
        return self.monthNav;
    }
    function buildTime() {
        self.calendarContainer.classList.add("hasTime");
        if (self.config.noCalendar)
            self.calendarContainer.classList.add("noCalendar");
        var defaults = getDefaultHours(self.config);
        self.timeContainer = createElement("div", "flatpickr-time");
        self.timeContainer.tabIndex = -1;
        var separator = createElement("span", "flatpickr-time-separator", ":");
        var hourInput = createNumberInput("flatpickr-hour", {
            "aria-label": self.l10n.hourAriaLabel,
        });
        self.hourElement = hourInput.getElementsByTagName("input")[0];
        var minuteInput = createNumberInput("flatpickr-minute", {
            "aria-label": self.l10n.minuteAriaLabel,
        });
        self.minuteElement = minuteInput.getElementsByTagName("input")[0];
        self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
        self.hourElement.value = pad(self.latestSelectedDateObj
            ? self.latestSelectedDateObj.getHours()
            : self.config.time_24hr
                ? defaults.hours
                : military2ampm(defaults.hours));
        self.minuteElement.value = pad(self.latestSelectedDateObj
            ? self.latestSelectedDateObj.getMinutes()
            : defaults.minutes);
        self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
        self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
        self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
        self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
        self.hourElement.setAttribute("maxlength", "2");
        self.minuteElement.setAttribute("min", "0");
        self.minuteElement.setAttribute("max", "59");
        self.minuteElement.setAttribute("maxlength", "2");
        self.timeContainer.appendChild(hourInput);
        self.timeContainer.appendChild(separator);
        self.timeContainer.appendChild(minuteInput);
        if (self.config.time_24hr)
            self.timeContainer.classList.add("time24hr");
        if (self.config.enableSeconds) {
            self.timeContainer.classList.add("hasSeconds");
            var secondInput = createNumberInput("flatpickr-second");
            self.secondElement = secondInput.getElementsByTagName("input")[0];
            self.secondElement.value = pad(self.latestSelectedDateObj
                ? self.latestSelectedDateObj.getSeconds()
                : defaults.seconds);
            self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
            self.secondElement.setAttribute("min", "0");
            self.secondElement.setAttribute("max", "59");
            self.secondElement.setAttribute("maxlength", "2");
            self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
            self.timeContainer.appendChild(secondInput);
        }
        if (!self.config.time_24hr) {
            self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[int((self.latestSelectedDateObj
                ? self.hourElement.value
                : self.config.defaultHour) > 11)]);
            self.amPM.title = self.l10n.toggleTitle;
            self.amPM.tabIndex = -1;
            self.timeContainer.appendChild(self.amPM);
        }
        return self.timeContainer;
    }
    function buildWeekdays() {
        if (!self.weekdayContainer)
            self.weekdayContainer = createElement("div", "flatpickr-weekdays");
        else
            clearNode(self.weekdayContainer);
        for (var i = self.config.showMonths; i--;) {
            var container = createElement("div", "flatpickr-weekdaycontainer");
            self.weekdayContainer.appendChild(container);
        }
        updateWeekdays();
        return self.weekdayContainer;
    }
    function updateWeekdays() {
        if (!self.weekdayContainer) {
            return;
        }
        var firstDayOfWeek = self.l10n.firstDayOfWeek;
        var weekdays = __spreadArrays(self.l10n.weekdays.shorthand);
        if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
            weekdays = __spreadArrays(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
        }
        for (var i = self.config.showMonths; i--;) {
            self.weekdayContainer.children[i].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
        }
    }
    function buildWeeks() {
        self.calendarContainer.classList.add("hasWeeks");
        var weekWrapper = createElement("div", "flatpickr-weekwrapper");
        weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
        var weekNumbers = createElement("div", "flatpickr-weeks");
        weekWrapper.appendChild(weekNumbers);
        return {
            weekWrapper: weekWrapper,
            weekNumbers: weekNumbers,
        };
    }
    function changeMonth(value, isOffset) {
        if (isOffset === void 0) { isOffset = true; }
        var delta = isOffset ? value : value - self.currentMonth;
        if ((delta < 0 && self._hidePrevMonthArrow === true) ||
            (delta > 0 && self._hideNextMonthArrow === true))
            return;
        self.currentMonth += delta;
        if (self.currentMonth < 0 || self.currentMonth > 11) {
            self.currentYear += self.currentMonth > 11 ? 1 : -1;
            self.currentMonth = (self.currentMonth + 12) % 12;
            triggerEvent("onYearChange");
            buildMonthSwitch();
        }
        buildDays();
        triggerEvent("onMonthChange");
        updateNavigationCurrentMonth();
    }
    function clear(triggerChangeEvent, toInitial) {
        if (triggerChangeEvent === void 0) { triggerChangeEvent = true; }
        if (toInitial === void 0) { toInitial = true; }
        self.input.value = "";
        if (self.altInput !== undefined)
            self.altInput.value = "";
        if (self.mobileInput !== undefined)
            self.mobileInput.value = "";
        self.selectedDates = [];
        self.latestSelectedDateObj = undefined;
        if (toInitial === true) {
            self.currentYear = self._initialDate.getFullYear();
            self.currentMonth = self._initialDate.getMonth();
        }
        if (self.config.enableTime === true) {
            var _a = getDefaultHours(self.config), hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds;
            setHours(hours, minutes, seconds);
        }
        self.redraw();
        if (triggerChangeEvent)
            triggerEvent("onChange");
    }
    function close() {
        self.isOpen = false;
        if (!self.isMobile) {
            if (self.calendarContainer !== undefined) {
                self.calendarContainer.classList.remove("open");
            }
            if (self._input !== undefined) {
                self._input.classList.remove("active");
            }
        }
        triggerEvent("onClose");
    }
    function destroy() {
        if (self.config !== undefined)
            triggerEvent("onDestroy");
        for (var i = self._handlers.length; i--;) {
            self._handlers[i].remove();
        }
        self._handlers = [];
        if (self.mobileInput) {
            if (self.mobileInput.parentNode)
                self.mobileInput.parentNode.removeChild(self.mobileInput);
            self.mobileInput = undefined;
        }
        else if (self.calendarContainer && self.calendarContainer.parentNode) {
            if (self.config.static && self.calendarContainer.parentNode) {
                var wrapper = self.calendarContainer.parentNode;
                wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
                if (wrapper.parentNode) {
                    while (wrapper.firstChild)
                        wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
                    wrapper.parentNode.removeChild(wrapper);
                }
            }
            else
                self.calendarContainer.parentNode.removeChild(self.calendarContainer);
        }
        if (self.altInput) {
            self.input.type = "text";
            if (self.altInput.parentNode)
                self.altInput.parentNode.removeChild(self.altInput);
            delete self.altInput;
        }
        if (self.input) {
            self.input.type = self.input._type;
            self.input.classList.remove("flatpickr-input");
            self.input.removeAttribute("readonly");
        }
        [
            "_showTimeInput",
            "latestSelectedDateObj",
            "_hideNextMonthArrow",
            "_hidePrevMonthArrow",
            "__hideNextMonthArrow",
            "__hidePrevMonthArrow",
            "isMobile",
            "isOpen",
            "selectedDateElem",
            "minDateHasTime",
            "maxDateHasTime",
            "days",
            "daysContainer",
            "_input",
            "_positionElement",
            "innerContainer",
            "rContainer",
            "monthNav",
            "todayDateElem",
            "calendarContainer",
            "weekdayContainer",
            "prevMonthNav",
            "nextMonthNav",
            "monthsDropdownContainer",
            "currentMonthElement",
            "currentYearElement",
            "navigationCurrentMonth",
            "selectedDateElem",
            "config",
        ].forEach(function (k) {
            try {
                delete self[k];
            }
            catch (_) { }
        });
    }
    function isCalendarElem(elem) {
        return self.calendarContainer.contains(elem);
    }
    function documentClick(e) {
        if (self.isOpen && !self.config.inline) {
            var eventTarget_1 = getEventTarget(e);
            var isCalendarElement = isCalendarElem(eventTarget_1);
            var isInput = eventTarget_1 === self.input ||
                eventTarget_1 === self.altInput ||
                self.element.contains(eventTarget_1) ||
                (e.path &&
                    e.path.indexOf &&
                    (~e.path.indexOf(self.input) ||
                        ~e.path.indexOf(self.altInput)));
            var lostFocus = !isInput &&
                !isCalendarElement &&
                !isCalendarElem(e.relatedTarget);
            var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
                return elem.contains(eventTarget_1);
            });
            if (lostFocus && isIgnored) {
                if (self.config.allowInput) {
                    self.setDate(self._input.value, false, self.config.altInput
                        ? self.config.altFormat
                        : self.config.dateFormat);
                }
                if (self.timeContainer !== undefined &&
                    self.minuteElement !== undefined &&
                    self.hourElement !== undefined &&
                    self.input.value !== "" &&
                    self.input.value !== undefined) {
                    updateTime();
                }
                self.close();
                if (self.config &&
                    self.config.mode === "range" &&
                    self.selectedDates.length === 1)
                    self.clear(false);
            }
        }
    }
    function changeYear(newYear) {
        if (!newYear ||
            (self.config.minDate && newYear < self.config.minDate.getFullYear()) ||
            (self.config.maxDate && newYear > self.config.maxDate.getFullYear()))
            return;
        var newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
        self.currentYear = newYearNum || self.currentYear;
        if (self.config.maxDate &&
            self.currentYear === self.config.maxDate.getFullYear()) {
            self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
        }
        else if (self.config.minDate &&
            self.currentYear === self.config.minDate.getFullYear()) {
            self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
        }
        if (isNewYear) {
            self.redraw();
            triggerEvent("onYearChange");
            buildMonthSwitch();
        }
    }
    function isEnabled(date, timeless) {
        var _a;
        if (timeless === void 0) { timeless = true; }
        var dateToCheck = self.parseDate(date, undefined, timeless);
        if ((self.config.minDate &&
            dateToCheck &&
            compareDates(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0) ||
            (self.config.maxDate &&
                dateToCheck &&
                compareDates(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0))
            return false;
        if (!self.config.enable && self.config.disable.length === 0)
            return true;
        if (dateToCheck === undefined)
            return false;
        var bool = !!self.config.enable, array = (_a = self.config.enable) !== null && _a !== void 0 ? _a : self.config.disable;
        for (var i = 0, d = void 0; i < array.length; i++) {
            d = array[i];
            if (typeof d === "function" &&
                d(dateToCheck))
                return bool;
            else if (d instanceof Date &&
                dateToCheck !== undefined &&
                d.getTime() === dateToCheck.getTime())
                return bool;
            else if (typeof d === "string") {
                var parsed = self.parseDate(d, undefined, true);
                return parsed && parsed.getTime() === dateToCheck.getTime()
                    ? bool
                    : !bool;
            }
            else if (typeof d === "object" &&
                dateToCheck !== undefined &&
                d.from &&
                d.to &&
                dateToCheck.getTime() >= d.from.getTime() &&
                dateToCheck.getTime() <= d.to.getTime())
                return bool;
        }
        return !bool;
    }
    function isInView(elem) {
        if (self.daysContainer !== undefined)
            return (elem.className.indexOf("hidden") === -1 &&
                elem.className.indexOf("flatpickr-disabled") === -1 &&
                self.daysContainer.contains(elem));
        return false;
    }
    function onBlur(e) {
        var isInput = e.target === self._input;
        var valueChanged = self._input.value.trimEnd() !== getDateStr();
        if (isInput &&
            valueChanged &&
            !(e.relatedTarget && isCalendarElem(e.relatedTarget))) {
            self.setDate(self._input.value, true, e.target === self.altInput
                ? self.config.altFormat
                : self.config.dateFormat);
        }
    }
    function onKeyDown(e) {
        var eventTarget = getEventTarget(e);
        var isInput = self.config.wrap
            ? element.contains(eventTarget)
            : eventTarget === self._input;
        var allowInput = self.config.allowInput;
        var allowKeydown = self.isOpen && (!allowInput || !isInput);
        var allowInlineKeydown = self.config.inline && isInput && !allowInput;
        if (e.keyCode === 13 && isInput) {
            if (allowInput) {
                self.setDate(self._input.value, true, eventTarget === self.altInput
                    ? self.config.altFormat
                    : self.config.dateFormat);
                self.close();
                return eventTarget.blur();
            }
            else {
                self.open();
            }
        }
        else if (isCalendarElem(eventTarget) ||
            allowKeydown ||
            allowInlineKeydown) {
            var isTimeObj = !!self.timeContainer &&
                self.timeContainer.contains(eventTarget);
            switch (e.keyCode) {
                case 13:
                    if (isTimeObj) {
                        e.preventDefault();
                        updateTime();
                        focusAndClose();
                    }
                    else
                        selectDate(e);
                    break;
                case 27:
                    e.preventDefault();
                    focusAndClose();
                    break;
                case 8:
                case 46:
                    if (isInput && !self.config.allowInput) {
                        e.preventDefault();
                        self.clear();
                    }
                    break;
                case 37:
                case 39:
                    if (!isTimeObj && !isInput) {
                        e.preventDefault();
                        var activeElement = getClosestActiveElement();
                        if (self.daysContainer !== undefined &&
                            (allowInput === false ||
                                (activeElement && isInView(activeElement)))) {
                            var delta_1 = e.keyCode === 39 ? 1 : -1;
                            if (!e.ctrlKey)
                                focusOnDay(undefined, delta_1);
                            else {
                                e.stopPropagation();
                                changeMonth(delta_1);
                                focusOnDay(getFirstAvailableDay(1), 0);
                            }
                        }
                    }
                    else if (self.hourElement)
                        self.hourElement.focus();
                    break;
                case 38:
                case 40:
                    e.preventDefault();
                    var delta = e.keyCode === 40 ? 1 : -1;
                    if ((self.daysContainer &&
                        eventTarget.$i !== undefined) ||
                        eventTarget === self.input ||
                        eventTarget === self.altInput) {
                        if (e.ctrlKey) {
                            e.stopPropagation();
                            changeYear(self.currentYear - delta);
                            focusOnDay(getFirstAvailableDay(1), 0);
                        }
                        else if (!isTimeObj)
                            focusOnDay(undefined, delta * 7);
                    }
                    else if (eventTarget === self.currentYearElement) {
                        changeYear(self.currentYear - delta);
                    }
                    else if (self.config.enableTime) {
                        if (!isTimeObj && self.hourElement)
                            self.hourElement.focus();
                        updateTime(e);
                        self._debouncedChange();
                    }
                    break;
                case 9:
                    if (isTimeObj) {
                        var elems = [
                            self.hourElement,
                            self.minuteElement,
                            self.secondElement,
                            self.amPM,
                        ]
                            .concat(self.pluginElements)
                            .filter(function (x) { return x; });
                        var i = elems.indexOf(eventTarget);
                        if (i !== -1) {
                            var target = elems[i + (e.shiftKey ? -1 : 1)];
                            e.preventDefault();
                            (target || self._input).focus();
                        }
                    }
                    else if (!self.config.noCalendar &&
                        self.daysContainer &&
                        self.daysContainer.contains(eventTarget) &&
                        e.shiftKey) {
                        e.preventDefault();
                        self._input.focus();
                    }
                    break;
            }
        }
        if (self.amPM !== undefined && eventTarget === self.amPM) {
            switch (e.key) {
                case self.l10n.amPM[0].charAt(0):
                case self.l10n.amPM[0].charAt(0).toLowerCase():
                    self.amPM.textContent = self.l10n.amPM[0];
                    setHoursFromInputs();
                    updateValue();
                    break;
                case self.l10n.amPM[1].charAt(0):
                case self.l10n.amPM[1].charAt(0).toLowerCase():
                    self.amPM.textContent = self.l10n.amPM[1];
                    setHoursFromInputs();
                    updateValue();
                    break;
            }
        }
        if (isInput || isCalendarElem(eventTarget)) {
            triggerEvent("onKeyDown", e);
        }
    }
    function onMouseOver(elem, cellClass) {
        if (cellClass === void 0) { cellClass = "flatpickr-day"; }
        if (self.selectedDates.length !== 1 ||
            (elem &&
                (!elem.classList.contains(cellClass) ||
                    elem.classList.contains("flatpickr-disabled"))))
            return;
        var hoverDate = elem
            ? elem.dateObj.getTime()
            : self.days.firstElementChild.dateObj.getTime(), initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(), rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
        var containsDisabled = false;
        var minRange = 0, maxRange = 0;
        for (var t = rangeStartDate; t < rangeEndDate; t += duration.DAY) {
            if (!isEnabled(new Date(t), true)) {
                containsDisabled =
                    containsDisabled || (t > rangeStartDate && t < rangeEndDate);
                if (t < initialDate && (!minRange || t > minRange))
                    minRange = t;
                else if (t > initialDate && (!maxRange || t < maxRange))
                    maxRange = t;
            }
        }
        var hoverableCells = Array.from(self.rContainer.querySelectorAll("*:nth-child(-n+" + self.config.showMonths + ") > ." + cellClass));
        hoverableCells.forEach(function (dayElem) {
            var date = dayElem.dateObj;
            var timestamp = date.getTime();
            var outOfRange = (minRange > 0 && timestamp < minRange) ||
                (maxRange > 0 && timestamp > maxRange);
            if (outOfRange) {
                dayElem.classList.add("notAllowed");
                ["inRange", "startRange", "endRange"].forEach(function (c) {
                    dayElem.classList.remove(c);
                });
                return;
            }
            else if (containsDisabled && !outOfRange)
                return;
            ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
                dayElem.classList.remove(c);
            });
            if (elem !== undefined) {
                elem.classList.add(hoverDate <= self.selectedDates[0].getTime()
                    ? "startRange"
                    : "endRange");
                if (initialDate < hoverDate && timestamp === initialDate)
                    dayElem.classList.add("startRange");
                else if (initialDate > hoverDate && timestamp === initialDate)
                    dayElem.classList.add("endRange");
                if (timestamp >= minRange &&
                    (maxRange === 0 || timestamp <= maxRange) &&
                    isBetween(timestamp, initialDate, hoverDate))
                    dayElem.classList.add("inRange");
            }
        });
    }
    function onResize() {
        if (self.isOpen && !self.config.static && !self.config.inline)
            positionCalendar();
    }
    function open(e, positionElement) {
        if (positionElement === void 0) { positionElement = self._positionElement; }
        if (self.isMobile === true) {
            if (e) {
                e.preventDefault();
                var eventTarget = getEventTarget(e);
                if (eventTarget) {
                    eventTarget.blur();
                }
            }
            if (self.mobileInput !== undefined) {
                self.mobileInput.focus();
                self.mobileInput.click();
            }
            triggerEvent("onOpen");
            return;
        }
        else if (self._input.disabled || self.config.inline) {
            return;
        }
        var wasOpen = self.isOpen;
        self.isOpen = true;
        if (!wasOpen) {
            self.calendarContainer.classList.add("open");
            self._input.classList.add("active");
            triggerEvent("onOpen");
            positionCalendar(positionElement);
        }
        if (self.config.enableTime === true && self.config.noCalendar === true) {
            if (self.config.allowInput === false &&
                (e === undefined ||
                    !self.timeContainer.contains(e.relatedTarget))) {
                setTimeout(function () { return self.hourElement.select(); }, 50);
            }
        }
    }
    function minMaxDateSetter(type) {
        return function (date) {
            var dateObj = (self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat));
            var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
            if (dateObj !== undefined) {
                self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] =
                    dateObj.getHours() > 0 ||
                        dateObj.getMinutes() > 0 ||
                        dateObj.getSeconds() > 0;
            }
            if (self.selectedDates) {
                self.selectedDates = self.selectedDates.filter(function (d) { return isEnabled(d); });
                if (!self.selectedDates.length && type === "min")
                    setHoursFromDate(dateObj);
                updateValue();
            }
            if (self.daysContainer) {
                redraw();
                if (dateObj !== undefined)
                    self.currentYearElement[type] = dateObj.getFullYear().toString();
                else
                    self.currentYearElement.removeAttribute(type);
                self.currentYearElement.disabled =
                    !!inverseDateObj &&
                        dateObj !== undefined &&
                        inverseDateObj.getFullYear() === dateObj.getFullYear();
            }
        };
    }
    function parseConfig() {
        var boolOpts = [
            "wrap",
            "weekNumbers",
            "allowInput",
            "allowInvalidPreload",
            "clickOpens",
            "time_24hr",
            "enableTime",
            "noCalendar",
            "altInput",
            "shorthandCurrentMonth",
            "inline",
            "static",
            "enableSeconds",
            "disableMobile",
        ];
        var userConfig = __assign(__assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);
        var formats = {};
        self.config.parseDate = userConfig.parseDate;
        self.config.formatDate = userConfig.formatDate;
        Object.defineProperty(self.config, "enable", {
            get: function () { return self.config._enable; },
            set: function (dates) {
                self.config._enable = parseDateRules(dates);
            },
        });
        Object.defineProperty(self.config, "disable", {
            get: function () { return self.config._disable; },
            set: function (dates) {
                self.config._disable = parseDateRules(dates);
            },
        });
        var timeMode = userConfig.mode === "time";
        if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
            var defaultDateFormat = flatpickr.defaultConfig.dateFormat || defaults$1.dateFormat;
            formats.dateFormat =
                userConfig.noCalendar || timeMode
                    ? "H:i" + (userConfig.enableSeconds ? ":S" : "")
                    : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
        }
        if (userConfig.altInput &&
            (userConfig.enableTime || timeMode) &&
            !userConfig.altFormat) {
            var defaultAltFormat = flatpickr.defaultConfig.altFormat || defaults$1.altFormat;
            formats.altFormat =
                userConfig.noCalendar || timeMode
                    ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K")
                    : defaultAltFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
        }
        Object.defineProperty(self.config, "minDate", {
            get: function () { return self.config._minDate; },
            set: minMaxDateSetter("min"),
        });
        Object.defineProperty(self.config, "maxDate", {
            get: function () { return self.config._maxDate; },
            set: minMaxDateSetter("max"),
        });
        var minMaxTimeSetter = function (type) { return function (val) {
            self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
        }; };
        Object.defineProperty(self.config, "minTime", {
            get: function () { return self.config._minTime; },
            set: minMaxTimeSetter("min"),
        });
        Object.defineProperty(self.config, "maxTime", {
            get: function () { return self.config._maxTime; },
            set: minMaxTimeSetter("max"),
        });
        if (userConfig.mode === "time") {
            self.config.noCalendar = true;
            self.config.enableTime = true;
        }
        Object.assign(self.config, formats, userConfig);
        for (var i = 0; i < boolOpts.length; i++)
            self.config[boolOpts[i]] =
                self.config[boolOpts[i]] === true ||
                    self.config[boolOpts[i]] === "true";
        HOOKS.filter(function (hook) { return self.config[hook] !== undefined; }).forEach(function (hook) {
            self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);
        });
        self.isMobile =
            !self.config.disableMobile &&
                !self.config.inline &&
                self.config.mode === "single" &&
                !self.config.disable.length &&
                !self.config.enable &&
                !self.config.weekNumbers &&
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        for (var i = 0; i < self.config.plugins.length; i++) {
            var pluginConf = self.config.plugins[i](self) || {};
            for (var key in pluginConf) {
                if (HOOKS.indexOf(key) > -1) {
                    self.config[key] = arrayify(pluginConf[key])
                        .map(bindToInstance)
                        .concat(self.config[key]);
                }
                else if (typeof userConfig[key] === "undefined")
                    self.config[key] = pluginConf[key];
            }
        }
        if (!userConfig.altInputClass) {
            self.config.altInputClass =
                getInputElem().className + " " + self.config.altInputClass;
        }
        triggerEvent("onParseConfig");
    }
    function getInputElem() {
        return self.config.wrap
            ? element.querySelector("[data-input]")
            : element;
    }
    function setupLocale() {
        if (typeof self.config.locale !== "object" &&
            typeof flatpickr.l10ns[self.config.locale] === "undefined")
            self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
        self.l10n = __assign(__assign({}, flatpickr.l10ns.default), (typeof self.config.locale === "object"
            ? self.config.locale
            : self.config.locale !== "default"
                ? flatpickr.l10ns[self.config.locale]
                : undefined));
        tokenRegex.D = "(" + self.l10n.weekdays.shorthand.join("|") + ")";
        tokenRegex.l = "(" + self.l10n.weekdays.longhand.join("|") + ")";
        tokenRegex.M = "(" + self.l10n.months.shorthand.join("|") + ")";
        tokenRegex.F = "(" + self.l10n.months.longhand.join("|") + ")";
        tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
        var userConfig = __assign(__assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));
        if (userConfig.time_24hr === undefined &&
            flatpickr.defaultConfig.time_24hr === undefined) {
            self.config.time_24hr = self.l10n.time_24hr;
        }
        self.formatDate = createDateFormatter(self);
        self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
    }
    function positionCalendar(customPositionElement) {
        if (typeof self.config.position === "function") {
            return void self.config.position(self, customPositionElement);
        }
        if (self.calendarContainer === undefined)
            return;
        triggerEvent("onPreCalendarPosition");
        var positionElement = customPositionElement || self._positionElement;
        var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, (function (acc, child) { return acc + child.offsetHeight; }), 0), calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" ||
            (configPosVertical !== "below" &&
                distanceFromBottom < calendarHeight &&
                inputBounds.top > calendarHeight);
        var top = window.pageYOffset +
            inputBounds.top +
            (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
        toggleClass$1(self.calendarContainer, "arrowTop", !showOnTop);
        toggleClass$1(self.calendarContainer, "arrowBottom", showOnTop);
        if (self.config.inline)
            return;
        var left = window.pageXOffset + inputBounds.left;
        var isCenter = false;
        var isRight = false;
        if (configPosHorizontal === "center") {
            left -= (calendarWidth - inputBounds.width) / 2;
            isCenter = true;
        }
        else if (configPosHorizontal === "right") {
            left -= calendarWidth - inputBounds.width;
            isRight = true;
        }
        toggleClass$1(self.calendarContainer, "arrowLeft", !isCenter && !isRight);
        toggleClass$1(self.calendarContainer, "arrowCenter", isCenter);
        toggleClass$1(self.calendarContainer, "arrowRight", isRight);
        var right = window.document.body.offsetWidth -
            (window.pageXOffset + inputBounds.right);
        var rightMost = left + calendarWidth > window.document.body.offsetWidth;
        var centerMost = right + calendarWidth > window.document.body.offsetWidth;
        toggleClass$1(self.calendarContainer, "rightMost", rightMost);
        if (self.config.static)
            return;
        self.calendarContainer.style.top = top + "px";
        if (!rightMost) {
            self.calendarContainer.style.left = left + "px";
            self.calendarContainer.style.right = "auto";
        }
        else if (!centerMost) {
            self.calendarContainer.style.left = "auto";
            self.calendarContainer.style.right = right + "px";
        }
        else {
            var doc = getDocumentStyleSheet();
            if (doc === undefined)
                return;
            var bodyWidth = window.document.body.offsetWidth;
            var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
            var centerBefore = ".flatpickr-calendar.centerMost:before";
            var centerAfter = ".flatpickr-calendar.centerMost:after";
            var centerIndex = doc.cssRules.length;
            var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
            toggleClass$1(self.calendarContainer, "rightMost", false);
            toggleClass$1(self.calendarContainer, "centerMost", true);
            doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
            self.calendarContainer.style.left = centerLeft + "px";
            self.calendarContainer.style.right = "auto";
        }
    }
    function getDocumentStyleSheet() {
        var editableSheet = null;
        for (var i = 0; i < document.styleSheets.length; i++) {
            var sheet = document.styleSheets[i];
            if (!sheet.cssRules)
                continue;
            try {
                sheet.cssRules;
            }
            catch (err) {
                continue;
            }
            editableSheet = sheet;
            break;
        }
        return editableSheet != null ? editableSheet : createStyleSheet();
    }
    function createStyleSheet() {
        var style = document.createElement("style");
        document.head.appendChild(style);
        return style.sheet;
    }
    function redraw() {
        if (self.config.noCalendar || self.isMobile)
            return;
        buildMonthSwitch();
        updateNavigationCurrentMonth();
        buildDays();
    }
    function focusAndClose() {
        self._input.focus();
        if (window.navigator.userAgent.indexOf("MSIE") !== -1 ||
            navigator.msMaxTouchPoints !== undefined) {
            setTimeout(self.close, 0);
        }
        else {
            self.close();
        }
    }
    function selectDate(e) {
        e.preventDefault();
        e.stopPropagation();
        var isSelectable = function (day) {
            return day.classList &&
                day.classList.contains("flatpickr-day") &&
                !day.classList.contains("flatpickr-disabled") &&
                !day.classList.contains("notAllowed");
        };
        var t = findParent(getEventTarget(e), isSelectable);
        if (t === undefined)
            return;
        var target = t;
        var selectedDate = (self.latestSelectedDateObj = new Date(target.dateObj.getTime()));
        var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth ||
            selectedDate.getMonth() >
                self.currentMonth + self.config.showMonths - 1) &&
            self.config.mode !== "range";
        self.selectedDateElem = target;
        if (self.config.mode === "single")
            self.selectedDates = [selectedDate];
        else if (self.config.mode === "multiple") {
            var selectedIndex = isDateSelected(selectedDate);
            if (selectedIndex)
                self.selectedDates.splice(parseInt(selectedIndex), 1);
            else
                self.selectedDates.push(selectedDate);
        }
        else if (self.config.mode === "range") {
            if (self.selectedDates.length === 2) {
                self.clear(false, false);
            }
            self.latestSelectedDateObj = selectedDate;
            self.selectedDates.push(selectedDate);
            if (compareDates(selectedDate, self.selectedDates[0], true) !== 0)
                self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
        }
        setHoursFromInputs();
        if (shouldChangeMonth) {
            var isNewYear = self.currentYear !== selectedDate.getFullYear();
            self.currentYear = selectedDate.getFullYear();
            self.currentMonth = selectedDate.getMonth();
            if (isNewYear) {
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
            triggerEvent("onMonthChange");
        }
        updateNavigationCurrentMonth();
        buildDays();
        updateValue();
        if (!shouldChangeMonth &&
            self.config.mode !== "range" &&
            self.config.showMonths === 1)
            focusOnDayElem(target);
        else if (self.selectedDateElem !== undefined &&
            self.hourElement === undefined) {
            self.selectedDateElem && self.selectedDateElem.focus();
        }
        if (self.hourElement !== undefined)
            self.hourElement !== undefined && self.hourElement.focus();
        if (self.config.closeOnSelect) {
            var single = self.config.mode === "single" && !self.config.enableTime;
            var range = self.config.mode === "range" &&
                self.selectedDates.length === 2 &&
                !self.config.enableTime;
            if (single || range) {
                focusAndClose();
            }
        }
        triggerChange();
    }
    var CALLBACKS = {
        locale: [setupLocale, updateWeekdays],
        showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
        minDate: [jumpToDate],
        maxDate: [jumpToDate],
        positionElement: [updatePositionElement],
        clickOpens: [
            function () {
                if (self.config.clickOpens === true) {
                    bind(self._input, "focus", self.open);
                    bind(self._input, "click", self.open);
                }
                else {
                    self._input.removeEventListener("focus", self.open);
                    self._input.removeEventListener("click", self.open);
                }
            },
        ],
    };
    function set(option, value) {
        if (option !== null && typeof option === "object") {
            Object.assign(self.config, option);
            for (var key in option) {
                if (CALLBACKS[key] !== undefined)
                    CALLBACKS[key].forEach(function (x) { return x(); });
            }
        }
        else {
            self.config[option] = value;
            if (CALLBACKS[option] !== undefined)
                CALLBACKS[option].forEach(function (x) { return x(); });
            else if (HOOKS.indexOf(option) > -1)
                self.config[option] = arrayify(value);
        }
        self.redraw();
        updateValue(true);
    }
    function setSelectedDate(inputDate, format) {
        var dates = [];
        if (inputDate instanceof Array)
            dates = inputDate.map(function (d) { return self.parseDate(d, format); });
        else if (inputDate instanceof Date || typeof inputDate === "number")
            dates = [self.parseDate(inputDate, format)];
        else if (typeof inputDate === "string") {
            switch (self.config.mode) {
                case "single":
                case "time":
                    dates = [self.parseDate(inputDate, format)];
                    break;
                case "multiple":
                    dates = inputDate
                        .split(self.config.conjunction)
                        .map(function (date) { return self.parseDate(date, format); });
                    break;
                case "range":
                    dates = inputDate
                        .split(self.l10n.rangeSeparator)
                        .map(function (date) { return self.parseDate(date, format); });
                    break;
            }
        }
        else
            self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
        self.selectedDates = (self.config.allowInvalidPreload
            ? dates
            : dates.filter(function (d) { return d instanceof Date && isEnabled(d, false); }));
        if (self.config.mode === "range")
            self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
    }
    function setDate(date, triggerChange, format) {
        if (triggerChange === void 0) { triggerChange = false; }
        if (format === void 0) { format = self.config.dateFormat; }
        if ((date !== 0 && !date) || (date instanceof Array && date.length === 0))
            return self.clear(triggerChange);
        setSelectedDate(date, format);
        self.latestSelectedDateObj =
            self.selectedDates[self.selectedDates.length - 1];
        self.redraw();
        jumpToDate(undefined, triggerChange);
        setHoursFromDate();
        if (self.selectedDates.length === 0) {
            self.clear(false);
        }
        updateValue(triggerChange);
        if (triggerChange)
            triggerEvent("onChange");
    }
    function parseDateRules(arr) {
        return arr
            .slice()
            .map(function (rule) {
            if (typeof rule === "string" ||
                typeof rule === "number" ||
                rule instanceof Date) {
                return self.parseDate(rule, undefined, true);
            }
            else if (rule &&
                typeof rule === "object" &&
                rule.from &&
                rule.to)
                return {
                    from: self.parseDate(rule.from, undefined),
                    to: self.parseDate(rule.to, undefined),
                };
            return rule;
        })
            .filter(function (x) { return x; });
    }
    function setupDates() {
        self.selectedDates = [];
        self.now = self.parseDate(self.config.now) || new Date();
        var preloadedDate = self.config.defaultDate ||
            ((self.input.nodeName === "INPUT" ||
                self.input.nodeName === "TEXTAREA") &&
                self.input.placeholder &&
                self.input.value === self.input.placeholder
                ? null
                : self.input.value);
        if (preloadedDate)
            setSelectedDate(preloadedDate, self.config.dateFormat);
        self._initialDate =
            self.selectedDates.length > 0
                ? self.selectedDates[0]
                : self.config.minDate &&
                    self.config.minDate.getTime() > self.now.getTime()
                    ? self.config.minDate
                    : self.config.maxDate &&
                        self.config.maxDate.getTime() < self.now.getTime()
                        ? self.config.maxDate
                        : self.now;
        self.currentYear = self._initialDate.getFullYear();
        self.currentMonth = self._initialDate.getMonth();
        if (self.selectedDates.length > 0)
            self.latestSelectedDateObj = self.selectedDates[0];
        if (self.config.minTime !== undefined)
            self.config.minTime = self.parseDate(self.config.minTime, "H:i");
        if (self.config.maxTime !== undefined)
            self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
        self.minDateHasTime =
            !!self.config.minDate &&
                (self.config.minDate.getHours() > 0 ||
                    self.config.minDate.getMinutes() > 0 ||
                    self.config.minDate.getSeconds() > 0);
        self.maxDateHasTime =
            !!self.config.maxDate &&
                (self.config.maxDate.getHours() > 0 ||
                    self.config.maxDate.getMinutes() > 0 ||
                    self.config.maxDate.getSeconds() > 0);
    }
    function setupInputs() {
        self.input = getInputElem();
        if (!self.input) {
            self.config.errorHandler(new Error("Invalid input element specified"));
            return;
        }
        self.input._type = self.input.type;
        self.input.type = "text";
        self.input.classList.add("flatpickr-input");
        self._input = self.input;
        if (self.config.altInput) {
            self.altInput = createElement(self.input.nodeName, self.config.altInputClass);
            self._input = self.altInput;
            self.altInput.placeholder = self.input.placeholder;
            self.altInput.disabled = self.input.disabled;
            self.altInput.required = self.input.required;
            self.altInput.tabIndex = self.input.tabIndex;
            self.altInput.type = "text";
            self.input.setAttribute("type", "hidden");
            if (!self.config.static && self.input.parentNode)
                self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
        }
        if (!self.config.allowInput)
            self._input.setAttribute("readonly", "readonly");
        updatePositionElement();
    }
    function updatePositionElement() {
        self._positionElement = self.config.positionElement || self._input;
    }
    function setupMobile() {
        var inputType = self.config.enableTime
            ? self.config.noCalendar
                ? "time"
                : "datetime-local"
            : "date";
        self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
        self.mobileInput.tabIndex = 1;
        self.mobileInput.type = inputType;
        self.mobileInput.disabled = self.input.disabled;
        self.mobileInput.required = self.input.required;
        self.mobileInput.placeholder = self.input.placeholder;
        self.mobileFormatStr =
            inputType === "datetime-local"
                ? "Y-m-d\\TH:i:S"
                : inputType === "date"
                    ? "Y-m-d"
                    : "H:i:S";
        if (self.selectedDates.length > 0) {
            self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
        }
        if (self.config.minDate)
            self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
        if (self.config.maxDate)
            self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
        if (self.input.getAttribute("step"))
            self.mobileInput.step = String(self.input.getAttribute("step"));
        self.input.type = "hidden";
        if (self.altInput !== undefined)
            self.altInput.type = "hidden";
        try {
            if (self.input.parentNode)
                self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
        }
        catch (_a) { }
        bind(self.mobileInput, "change", function (e) {
            self.setDate(getEventTarget(e).value, false, self.mobileFormatStr);
            triggerEvent("onChange");
            triggerEvent("onClose");
        });
    }
    function toggle(e) {
        if (self.isOpen === true)
            return self.close();
        self.open(e);
    }
    function triggerEvent(event, data) {
        if (self.config === undefined)
            return;
        var hooks = self.config[event];
        if (hooks !== undefined && hooks.length > 0) {
            for (var i = 0; hooks[i] && i < hooks.length; i++)
                hooks[i](self.selectedDates, self.input.value, self, data);
        }
        if (event === "onChange") {
            self.input.dispatchEvent(createEvent("change"));
            self.input.dispatchEvent(createEvent("input"));
        }
    }
    function createEvent(name) {
        var e = document.createEvent("Event");
        e.initEvent(name, true, true);
        return e;
    }
    function isDateSelected(date) {
        for (var i = 0; i < self.selectedDates.length; i++) {
            var selectedDate = self.selectedDates[i];
            if (selectedDate instanceof Date &&
                compareDates(selectedDate, date) === 0)
                return "" + i;
        }
        return false;
    }
    function isDateInRange(date) {
        if (self.config.mode !== "range" || self.selectedDates.length < 2)
            return false;
        return (compareDates(date, self.selectedDates[0]) >= 0 &&
            compareDates(date, self.selectedDates[1]) <= 0);
    }
    function updateNavigationCurrentMonth() {
        if (self.config.noCalendar || self.isMobile || !self.monthNav)
            return;
        self.yearElements.forEach(function (yearElement, i) {
            var d = new Date(self.currentYear, self.currentMonth, 1);
            d.setMonth(self.currentMonth + i);
            if (self.config.showMonths > 1 ||
                self.config.monthSelectorType === "static") {
                self.monthElements[i].textContent =
                    monthToStr(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
            }
            else {
                self.monthsDropdownContainer.value = d.getMonth().toString();
            }
            yearElement.value = d.getFullYear().toString();
        });
        self._hidePrevMonthArrow =
            self.config.minDate !== undefined &&
                (self.currentYear === self.config.minDate.getFullYear()
                    ? self.currentMonth <= self.config.minDate.getMonth()
                    : self.currentYear < self.config.minDate.getFullYear());
        self._hideNextMonthArrow =
            self.config.maxDate !== undefined &&
                (self.currentYear === self.config.maxDate.getFullYear()
                    ? self.currentMonth + 1 > self.config.maxDate.getMonth()
                    : self.currentYear > self.config.maxDate.getFullYear());
    }
    function getDateStr(specificFormat) {
        var format = specificFormat ||
            (self.config.altInput ? self.config.altFormat : self.config.dateFormat);
        return self.selectedDates
            .map(function (dObj) { return self.formatDate(dObj, format); })
            .filter(function (d, i, arr) {
            return self.config.mode !== "range" ||
                self.config.enableTime ||
                arr.indexOf(d) === i;
        })
            .join(self.config.mode !== "range"
            ? self.config.conjunction
            : self.l10n.rangeSeparator);
    }
    function updateValue(triggerChange) {
        if (triggerChange === void 0) { triggerChange = true; }
        if (self.mobileInput !== undefined && self.mobileFormatStr) {
            self.mobileInput.value =
                self.latestSelectedDateObj !== undefined
                    ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr)
                    : "";
        }
        self.input.value = getDateStr(self.config.dateFormat);
        if (self.altInput !== undefined) {
            self.altInput.value = getDateStr(self.config.altFormat);
        }
        if (triggerChange !== false)
            triggerEvent("onValueUpdate");
    }
    function onMonthNavClick(e) {
        var eventTarget = getEventTarget(e);
        var isPrevMonth = self.prevMonthNav.contains(eventTarget);
        var isNextMonth = self.nextMonthNav.contains(eventTarget);
        if (isPrevMonth || isNextMonth) {
            changeMonth(isPrevMonth ? -1 : 1);
        }
        else if (self.yearElements.indexOf(eventTarget) >= 0) {
            eventTarget.select();
        }
        else if (eventTarget.classList.contains("arrowUp")) {
            self.changeYear(self.currentYear + 1);
        }
        else if (eventTarget.classList.contains("arrowDown")) {
            self.changeYear(self.currentYear - 1);
        }
    }
    function timeWrapper(e) {
        e.preventDefault();
        var isKeyDown = e.type === "keydown", eventTarget = getEventTarget(e), input = eventTarget;
        if (self.amPM !== undefined && eventTarget === self.amPM) {
            self.amPM.textContent =
                self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
        }
        var min = parseFloat(input.getAttribute("min")), max = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e.delta ||
            (isKeyDown ? (e.which === 38 ? 1 : -1) : 0);
        var newValue = curValue + step * delta;
        if (typeof input.value !== "undefined" && input.value.length === 2) {
            var isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
            if (newValue < min) {
                newValue =
                    max +
                        newValue +
                        int(!isHourElem) +
                        (int(isHourElem) && int(!self.amPM));
                if (isMinuteElem)
                    incrementNumInput(undefined, -1, self.hourElement);
            }
            else if (newValue > max) {
                newValue =
                    input === self.hourElement ? newValue - max - int(!self.amPM) : min;
                if (isMinuteElem)
                    incrementNumInput(undefined, 1, self.hourElement);
            }
            if (self.amPM &&
                isHourElem &&
                (step === 1
                    ? newValue + curValue === 23
                    : Math.abs(newValue - curValue) > step)) {
                self.amPM.textContent =
                    self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
            }
            input.value = pad(newValue);
        }
    }
    init();
    return self;
}
function _flatpickr(nodeList, config) {
    var nodes = Array.prototype.slice
        .call(nodeList)
        .filter(function (x) { return x instanceof HTMLElement; });
    var instances = [];
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        try {
            if (node.getAttribute("data-fp-omit") !== null)
                continue;
            if (node._flatpickr !== undefined) {
                node._flatpickr.destroy();
                node._flatpickr = undefined;
            }
            node._flatpickr = FlatpickrInstance(node, config || {});
            instances.push(node._flatpickr);
        }
        catch (e) {
            console.error(e);
        }
    }
    return instances.length === 1 ? instances[0] : instances;
}
if (typeof HTMLElement !== "undefined" &&
    typeof HTMLCollection !== "undefined" &&
    typeof NodeList !== "undefined") {
    HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
        return _flatpickr(this, config);
    };
    HTMLElement.prototype.flatpickr = function (config) {
        return _flatpickr([this], config);
    };
}
var flatpickr = function (selector, config) {
    if (typeof selector === "string") {
        return _flatpickr(window.document.querySelectorAll(selector), config);
    }
    else if (selector instanceof Node) {
        return _flatpickr([selector], config);
    }
    else {
        return _flatpickr(selector, config);
    }
};
flatpickr.defaultConfig = {};
flatpickr.l10ns = {
    en: __assign({}, english),
    default: __assign({}, english),
};
flatpickr.localize = function (l10n) {
    flatpickr.l10ns.default = __assign(__assign({}, flatpickr.l10ns.default), l10n);
};
flatpickr.setDefaults = function (config) {
    flatpickr.defaultConfig = __assign(__assign({}, flatpickr.defaultConfig), config);
};
flatpickr.parseDate = createDateParser({});
flatpickr.formatDate = createDateFormatter({});
flatpickr.compareDates = compareDates;
if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
    jQuery.fn.flatpickr = function (config) {
        return _flatpickr(this, config);
    };
}
Date.prototype.fp_incr = function (days) {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
};
if (typeof window !== "undefined") {
    window.flatpickr = flatpickr;
}

var DatepickerWrapper = {
  name: 'DatepickerWrapper',
  emits: ['change'],
  props: {
    value: {
      required: true
    },
    options: {
      type: [Object],
      required: true
    },
    id: {
      type: [Number, String],
      required: true
    },
    placeholder: {
      type: [Number, String],
      required: false
    },
    attrs: {
      required: false,
      type: [Object],
      default: () => ({})
    }
  },
  setup(props, context) {
    var {
      id,
      options,
      value
    } = toRefs(props);

    // ============ DEPENDENCIES ============

    var {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme
    } = base$X(props, context);
    var $this = getCurrentInstance().proxy;

    // ================ DATA ================

    /**
     * The [flatpickr instance](https://flatpickr.js.org/instance-methods-properties-elements).
     * 
     * @type {object}
     * @default null
     */
    var datepicker$ = ref(null);

    /**
     * The date input DOM element.
     * 
     * @type {HTMLElement}
     */
    var input = ref(null);

    // ============== COMPUTED ==============

    /**
     * The current locale object for flatpickr.
     * 
     * @type {object}
     * @private
     */
    var locale = computed(() => {
      var _$this$$vueform$i18n$, _$this$$vueform$i18n$2, _$this$$vueform$i18n$3, _$this$$vueform$i18n$4;
      return ((_$this$$vueform$i18n$ = $this.$vueform.i18n.locales[$this.$vueform.i18n.locale]) === null || _$this$$vueform$i18n$ === void 0 ? void 0 : (_$this$$vueform$i18n$2 = _$this$$vueform$i18n$.vueform) === null || _$this$$vueform$i18n$2 === void 0 ? void 0 : _$this$$vueform$i18n$2.datepicker) || ((_$this$$vueform$i18n$3 = $this.$vueform.i18n.locales[$this.$vueform.i18n.fallbackLocale]) === null || _$this$$vueform$i18n$3 === void 0 ? void 0 : (_$this$$vueform$i18n$4 = _$this$$vueform$i18n$3.vueform) === null || _$this$$vueform$i18n$4 === void 0 ? void 0 : _$this$$vueform$i18n$4.datepicker) || {};
    });

    /**
     * The current `options.mode`.
     * 
     * @type {string}
     */
    var mode = computed(() => {
      return options.value.mode || 'single';
    });

    /**
     * The flatpickr configuration object. Can be extended via [`options`](#options) with [flatpickr options](https://flatpickr.js.org/options/).
     * 
     * @type {object}
     */
    var config = computed(() => {
      var config = {};
      _.each(options.value, (val, option) => {
        if (val !== null && val !== undefined) {
          config[option] = val;
        }
      });

      // Append the form to main form instead of end of the body
      // Update: Experimental removal, because enter was disabled
      // when appended to form config.appendTo = this.form$.$refs.form$

      // according to:
      // https://github.com/flatpickr/flatpickr/issues/1019
      config.static = true;
      return config;
    });

    // =============== METHODS ==============

    /**
     * Emits `change` event.
     * 
     * @param {array|Date} value* the value to emit with change
     * @returns {void}
     * @private
     */
    var update = val => {
      context.emit('change', mode.value == 'single' ? val[0] || null : val);
    };

    /**
     * Sets's the datepicker input parent's `id` attribute.
     * 
     * @returns {void}
     * @private
     */
    var setDatepickerId = () => {
      datepicker$.value.input.parentElement.id = 'datepicker-' + id.value;
    };

    /**
     * Initalizes the flatpickr.
     * 
     * @returns {void}
     * @private
     */
    var init = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(function* () {
        if (!input.value) {
          yield nextTick();
        }
        datepicker$.value = flatpickr(input.value, Object.assign({}, config.value, {
          onChange: val => {
            update(val);
          },
          onClose: val => {
            val = mode.value == 'range' && val.length < 2 ? [] : val;
            update(val);
          },
          // creating a date object from a string date provided in displayFormat (to value)
          parseDate: (dateStr, format) => {
            return moment(dateStr, format, true).toDate();
          },
          // creating a date string according to displayFormat (to display)
          formatDate: (date, format) => {
            return moment(date).format(format);
          },
          ariaDateFormat: 'MMMM D, YYYY',
          disableMobile: true,
          locale: locale.value
        }));
        if (datepicker$.value.calendarContainer) {
          classes.value.calendarContainer.forEach(c => {
            datepicker$.value.calendarContainer.classList.add(c);
          });
        }
        setDatepickerId();
        if (value.value !== null) {
          datepicker$.value.setDate(value.value, false);
        }
      });
      return function init() {
        return _ref.apply(this, arguments);
      };
    }();

    // ============== WATCHERS ==============

    watch(value, (n, o) => {
      var _datepicker$$value;
      (_datepicker$$value = datepicker$.value) === null || _datepicker$$value === void 0 ? void 0 : _datepicker$$value.setDate(n, false);
    });
    watch(id, (n, o) => {
      setDatepickerId();
    }, {
      immediate: false
    });
    watch(options, (n, o) => {
      if (_.isEqual(n, o)) {
        return;
      }
      init();
    }, {
      deep: true
    });
    watch(locale, (n, o) => {
      init();
    }, {
      deep: true
    });

    // ================ HOOKS ===============

    onMounted(() => {
      init();
    });

    // // Required because if static == true the picker does
    // // not close properly when clicking outside of it.
    // document.addEventListener('click', () => {
    //   if(clickedOutsideElement('datepicker-' + this.id)) {
    //     if (this.datepicker$.isOpen) {
    //       this.datepicker$.close()
    //     }
    //   }
    // })

    return {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      theme,
      classes,
      Templates,
      template,
      datepicker$,
      input,
      config,
      mode,
      locale,
      update
    };
  }
};

var EditorWrapper = {
  name: 'EditorWrapper',
  emits: ['input', 'alert', 'error', 'blur'],
  props: {
    value: {
      required: false,
      default: null
    },
    placeholder: {
      required: false,
      type: [String, Number],
      default: null
    },
    name: {
      required: false,
      type: [String, Number],
      default: null
    },
    id: {
      required: false,
      type: [String, Number],
      default: null
    },
    accept: {
      required: false,
      type: Array,
      default: () => []
    },
    acceptMimes: {
      required: false,
      type: Array,
      default: () => []
    },
    endpoint: {
      required: false,
      type: [String, Function],
      default: null
    },
    method: {
      required: false,
      type: String,
      default: 'post'
    },
    disabled: {
      required: false,
      type: Boolean,
      default: false
    },
    hideTools: {
      required: false,
      type: [Array],
      default: () => []
    },
    attrs: {
      required: false,
      type: [Object],
      default: () => ({})
    }
  },
  setup(props, context) {
    var {
      value,
      disabled,
      acceptMimes,
      accept,
      endpoint,
      method
    } = toRefs(props);

    // ============ DEPENDENCIES ============

    var {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme
    } = base$X(props, context);

    // ================ DATA ================

    /**
     * The [`Trix`](https://github.com/basecamp/trix) instance.
     * 
     * @type {HTMLElement}
     * @default null
     */
    var editor$ = ref(null);

    // ============== COMPUTED ==============

    var resolvedEndpoint = computed(() => {
      if (endpoint.value) {
        return typeof endpoint.value === 'function' ? endpoint.value : form$.value.$vueform.config.endpoints[endpoint.value] || endpoint.value;
      }
      return typeof form$.value.$vueform.config.endpoints.attachment === 'function' ? form$.value.$vueform.config.endpoints.attachment : form$.value.$vueform.config.endpoints.attachment.url;
    });
    var resolvedMethod = computed(() => {
      if (typeof resolvedEndpoint.value === 'function') {
        return null;
      }
      if (endpoint.value && form$.value.$vueform.config.endpoints[endpoint.value]) {
        return form$.value.$vueform.config.endpoints[endpoint.value];
      }
      return method.value || form$.value.$vueform.config.endpoints.attachment.method;
    });

    // =============== METHODS ==============

    /**
     * Updates the value of editor.
     * 
     * @param {string} value* the value to update with
     * @returns {void}
     */
    var update = val => {
      if (typeof val == 'number') {
        val = String(val);
      }
      editor$.value.editor.loadHTML(val);
    };

    /**
     * Sets an option for editor.
     * 
     * @param {string} key* the option key
     * @param {string} value* the option value
     * @returns {void}
     */
    var setOption = (key, val) => {
      editor$.value[key] = val;
    };

    /**
     * Handles `change` event.
     * 
     * @returns {void}
     * @private
     */
    var handleChange = () => {
      // If the change is only triggered because of `update`
      // method (which implies an external call) we should
      // not emit any events because that would duplicate the
      // effects of the value change.
      if (editor$.value.value == value.value || !editor$.value.value && !value.value) {
        return;
      }
      context.emit('input', {
        target: {
          value: editor$.value.value
        }
      });
    };

    /**
     * Handles `fileAccept` event.
     * 
     * @param {Event} e event
     * @returns {void}
     * @private
     */
    var handleFileAccept = e => {
      if (disabled.value) {
        e.preventDefault();
        return;
      }
      if (!e.file) {
        e.preventDefault();
        return;
      }
      if (acceptMimes.value && acceptMimes.value.length && acceptMimes.value.indexOf(e.file.type) === -1) {
        e.preventDefault();
        context.emit('alert', form$.value.__('vueform.editor.acceptedMimesError', {
          mimes: acceptMimes.value.join(', ')
        }));
      }
      var extension = e.file.name.split('.').pop();
      if (accept.value && accept.value.length && accept.value.indexOf(extension) === -1) {
        e.preventDefault();
        context.emit('alert', form$.value.__('vueform.editor.acceptedExtensionsError', {
          extensions: accept.value.join(', ')
        }));
      }
    };

    /**
     * Handles `attachmentAdd` event.
     * 
     * @param {Event} e event
     * @returns {void}
     * @private
     */
    var handleAttachmentAdd = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(function* (e) {
        if (!e.attachment.file) {
          return;
        }
        var data = new FormData();
        data.append('Content-Type', e.attachment.file.type);
        data.append('file', e.attachment.file);
        var response;
        try {
          if (typeof resolvedEndpoint.value === 'function') {
            response = yield resolvedEndpoint.value(e.attachment, el$.value);
          } else {
            response = yield el$.value.$vueform.services.axios.request({
              url: resolvedEndpoint.value,
              method: resolvedMethod.value,
              [resolvedMethod.value.toLowerCase() === 'get' ? 'params' : 'data']: data,
              onUploadProgress: progress => {
                e.attachment.setUploadProgress(Math.round(progress.loaded * 100 / progress.total));
              }
            });
            response = response.data;
          }
          e.attachment.setAttributes({
            url: response.url,
            href: response.href
          });
        } catch (error) {
          context.emit('error', error);
        }
      });
      return function handleAttachmentAdd(_x) {
        return _ref.apply(this, arguments);
      };
    }();

    /**
     * Handles `blur` event.
     * 
     * @returns {void}
     * @private
     */
    var handleBlur = () => {
      context.emit('blur');
    };

    // ============== WATCHERS ==============

    watch(disabled, val => {
      editor$.value.contentEditable = !val;
    });

    // ================ HOOKS ===============

    onMounted(() => {
      if (disabled.value) {
        editor$.value.contentEditable = false;
      }
    });
    return {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      resolvedEndpoint,
      theme,
      classes,
      Templates,
      template,
      editor$,
      update,
      setOption,
      handleChange,
      handleFileAccept,
      handleAttachmentAdd,
      handleBlur
    };
  }
};

var base$W = function base(props, context, dependencies) {
  var {
    label
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;
  var el$ = dependencies.el$;

  // ============== COMPUTED ==============

  /**
   * Whether the element has a [`label`](#option-label) option, a [#label](#slot-label) slot or `Vueform` component's [`forceLabels`](vueform#option-force-labels) option is `true`.
   * 
   * @type {boolean}
   * 
   */
  var hasLabel = computed(() => {
    var _el$$value$$slots, _el$$value$$scopedSlo;
    return !!(form$.value.options.forceLabels || label.value || el$.value.slots.label || (_el$$value$$slots = el$.value.$slots) !== null && _el$$value$$slots !== void 0 && _el$$value$$slots.label || form$.value.$vueform.vueVersion === 2 && (_el$$value$$scopedSlo = el$.value.$scopedSlots) !== null && _el$$value$$scopedSlo !== void 0 && _el$$value$$scopedSlo.label);
  });
  return {
    hasLabel
  };
};

var base$V = function base(props, context, dependencies) {
  var {
    columns,
    presets
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;
  var theme = dependencies.theme;
  var hasLabel = dependencies.hasLabel;

  // ================ DATA ================

  var Columns = ref(_.cloneDeep(columns.value));

  // ============== COMPUTED ==============

  /**
   * Calulated column sizes and classes for the element.
   * 
   * @type {object}
   * @private
   */
  var columnsClasses = computed(() => {
    var config = form$.value.$vueform.config;
    return new form$.value.$vueform.services.columns({
      configPresetColumns: config.usePresets,
      configColumns: config.columns,
      formPresetColumns: form$.value.options.presets,
      formColumns: form$.value.options.columns,
      elementPresetColumns: presets.value,
      elementColumns: Columns.value
    }, hasLabel.value, theme.value.columns, config.presets).classes;
  });

  // =============== METHODS ==============

  /**
   * Update columns programmatically.
   * 
   * @param {number|array} value* the new value for columns option
   * @private
   */
  var updateColumns = v => {
    Columns.value = _.cloneDeep(v);
  };
  watch(columns, v => {
    Columns.value = _.cloneDeep(v);
  }, {
    immediate: false,
    deep: true
  });
  return {
    columnsClasses,
    updateColumns
  };
};

var base$U = function base(props, context, dependencies) {
  var {
    size,
    view,
    views,
    presets
  } = toRefs(props);
  var componentName = context.name;

  // ============ DEPENDENCIES ============

  var available = dependencies.available;
  var active = dependencies.active;
  var form$ = dependencies.form$;
  var parent = dependencies.parent;

  // ================ DATA ================

  /**
   * Whether the element was hidden programmatically with [`show()`](#method-show) or [`hide()`](#method-hide) methods.
   * 
   * @type {boolean} 
   * @default false
   */
  var hidden = ref(false);

  // ============== COMPUTED ==============

  /**
   * Whether the element is visible. It's `false` when `available` or `active` is `false` or `hidden` is `true`.
   * 
   * @type {boolean} 
   */
  var visible = computed(() => {
    return available.value && !hidden.value && active.value;
  });

  /**
   * The resolved size of the element and all of its child components.
   *
   * @type {string}
   */
  var Size = computed(() => {
    var Size;
    if (size.value) {
      Size = size.value;
    } else {
      _.each(presets.value, presetName => {
        var preset = form$.value.$vueform.config.presets[presetName];
        if (!preset || !preset.size) {
          return;
        }
        Size = preset.size;
      });
    }
    if (!Size) {
      if (parent.value) {
        Size = parent.value.Size;
      } else {
        Size = form$.value.Size;
      }
    }
    return Size;
  });

  /**
   * The name of the resolved view for the component and the default view for its child components. Child component views can be overridden with [`views`](#option-views) option. This one should be used to determine the component's view in class functions.
   *
   * @type {string}
   */
  var View = computed(() => {
    if (view.value) {
      return view.value;
    }
    return Views.value[componentName.value];
  });

  /**
   * The name of the views for the components.
   *
   * @type {object}
   * @private
   */
  var Views = computed(() => {
    var Views = form$.value.Views;
    _.each(presets.value, presetName => {
      var preset = form$.value.$vueform.config.presets[presetName];
      if (!preset || !preset.views) {
        return;
      }
      Views = Object.assign({}, Views, preset.views);
    });
    Views = Object.assign({}, Views, views.value);
    return Views;
  });

  // =============== METHODS ==============

  /**
   * Hides the element.
   *
   * @returns {void}
   */
  var hide = () => {
    hidden.value = true;
  };

  /**
   * Shows the element if it was hidden with [`hide()`](#method-hide) method.
   *
   * @returns {void}
   */
  var show = () => {
    hidden.value = false;
  };

  // ============== PROVIDES ==============

  provide('Size', Size);
  provide('View', View);
  provide('Views', Views);
  return {
    hidden,
    visible,
    Size,
    View,
    Views,
    hide,
    show
  };
};

var base$T = function base(props, context, dependencies) {
  var {
    templates,
    presets
  } = toRefs(props);
  var componentName = context.name;

  // ============ DEPENDENCIES ============

  var theme = dependencies.theme;
  var View = dependencies.View;
  var form$ = dependencies.form$;

  // ============== COMPUTED ==============

  /**
   * The list of templates available to the element.
   * 
   * @type {object}
   * @private
   */
  var Templates = computed(() => {
    var presetTemplates = {};
    _.each(presets ? presets.value : [], presetName => {
      var preset = form$.value.$vueform.config.presets[presetName];
      if (!preset || !preset.templates) {
        return;
      }
      presetTemplates = Object.assign({}, presetTemplates, preset.templates);
    });
    return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, theme.value.templates), presetTemplates), templates ? templates.value : {});
  });

  /**
   * The component's template.
   * 
   * @type {object}
   */
  var template = computed(() => {
    return View && View.value && Templates.value["".concat(componentName.value, "_").concat(View.value)] ? Templates.value["".concat(componentName.value, "_").concat(View.value)] : Templates.value[componentName.value];
  });
  return {
    Templates,
    template
  };
};

var base$S = function base(props, context, dependencies) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  toRefs(props);

  // ============ DEPENDENCIES ============

  var el$ = dependencies.el$;

  // =============== OPTIONS ==============

  var defaultElementSlots = ['label', 'info', 'description', 'before', 'between', 'after'];
  var defaultFieldSlots = ['checkbox', 'radio', 'option', 'single-label', 'multiple-label', 'tag', 'no-results', 'no-options', 'after-list', 'before-list', 'placeholder', 'group-label', 'caret', 'clear', 'spinner', 'option', 'default'];

  // ============== COMPUTED ==============

  /**
   * Slots of the element.
   * 
   * @type {object}
   * @private
   */
  var elementSlots = computed(() => {
    var elementSlots = {};
    defaultElementSlots.filter(s => options.slots.indexOf(s) !== -1).forEach(s => {
      var slot = el$.value.slots[s] || el$.value.slots[_.camelCase(s)];
      if (typeof slot === 'object') {
        if (slot.props && slot.props.indexOf('el$') === -1) {
          slot.props.push('el$');
        } else if (!slot.props) {
          slot.props = ['el$'];
        }
      }
      elementSlots[s] = slot;
    });
    return elementSlots;
  });

  /**
   * Slots related to the element's field. Eg. an "elementSlot" is something related to the element, like `label`, `description`, etc. A "fieldSlot" is something that related to the field within the element, eg. `option` or `singlelabel` for `SelectElement`.
   * 
   * @type {object}
   * @private
   */
  var fieldSlots = computed(() => {
    var fieldSlots = {};
    defaultFieldSlots.filter(s => options.slots.indexOf(s) !== -1).forEach(s => {
      var slot = el$.value.slots[s] || el$.value.slots[_.camelCase(s)];

      // Add `el$` prop to `default` slot
      if (typeof slot === 'object') {
        if (slot.props && (Array.isArray(slot.props) && slot.props.indexOf('el$') === -1 || !Array.isArray(slot.props) && Object.keys(slot.props).indexOf('el$') === -1)) {
          slot.props.push('el$');
        } else if (!slot.props) {
          slot.props = ['el$'];
        }
      }
      fieldSlots[s] = slot;
    });
    return fieldSlots;
  });
  return {
    elementSlots,
    fieldSlots
  };
};

var base$R = function base(props, context, dependencies) {
  var {
    buttonLabel,
    buttonType,
    href,
    target,
    loading,
    onClick,
    resets,
    submits
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;
  var isDisabled = dependencies.isDisabled;
  var fieldId = dependencies.fieldId;
  var fire = dependencies.fire;
  var el$ = dependencies.el$;

  // ============== COMPUTED ==============

  /**
   * Whether the button is in loading state.
   * 
   * @type {boolean}
   */
  var isLoading = computed(() => {
    if (typeof loading.value === 'function') {
      return loading.value(form$.value, el$.value);
    }
    if (submits.value && (form$.value.submitting || form$.value.preparing || form$.value.isLoading)) {
      return true;
    }
    return loading.value;
  });

  /**
   * Whether the button's label is a component.
   * 
   * @type {boolean}
   * @private
   */
  var isButtonLabelComponent = computed(() => {
    return buttonLabel.value !== null && typeof buttonLabel.value === 'object';
  });

  /**
   * Attributes of the button.
   * 
   * @type {object}
   * @private
   */
  var button = computed(() => {
    var button = {
      id: fieldId.value
    };
    switch (buttonType.value) {
      case 'anchor':
        button.href = href.value;
        button.target = target.value;
        break;
      case 'button':
        button.disabled = isDisabled.value;
        break;
    }
    if (isLoading.value) {
      button.tabindex = undefined;
    }
    return button;
  });

  // =============== METHODS ==============

  /**
   * Handles the button's click event.
   *
   * @param {Event} e* event
   * @returns {void}
   * @private
   */
  var handleClick = e => {
    if (buttonType.value === 'anchor' && !href.value) {
      e.preventDefault();
    }
    if (isDisabled.value || isLoading.value) {
      e.preventDefault();
      return;
    }
    if (resets.value) {
      form$.value.reset();
    }
    if (submits.value) {
      form$.value.submit();
    }
    if (typeof onClick.value == 'function') {
      fire('click', form$.value, el$.value, e);
    }
  };
  return {
    isButtonLabelComponent,
    button,
    isLoading,
    handleClick
  };
};

var base$Q = function base(props, context, dependencies) {
  var {
    layout,
    inline
  } = toRefs(props);

  // ============== COMPUTED ==============

  /**
   * The current layout of the element.
   * 
   * @type {string|component}
   * @private
   */
  var elementLayout = computed(() => {
    return inline.value || !layout.value ? 'ElementLayoutInline' : layout.value;
  });
  return {
    elementLayout
  };
};

var base$P = function base(props, context, dependencies) {
  var componentName = context.name;

  // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;
  var el$ = dependencies.el$;
  var theme = dependencies.theme;
  var Templates = dependencies.Templates;
  var View = dependencies.View;

  // ============== COMPUTED ==============

  /**
   * The classes instance (for testing purpose).
   * 
   * @type {MergeClasses}
   * @private
   */
  var classesInstance = computed(() => {
    return new MergeClasses({
      component: componentName.value,
      component$: el$,
      theme: theme.value,
      config: form$.value.$vueform.config,
      templates: Templates.value,
      view: View.value,
      merge: [form$.value.options, el$.value]
    });
  });

  /**
   * The component's classes.
   * 
   * @type {object}
   */
  var classes = computed(() => {
    return _objectSpread2$1({}, classesInstance.value.classes);
  });
  return {
    classes,
    classesInstance
  };
};

var base$O = function base(props, context, dependencies) {
  var {
    id
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var path = dependencies.path;

  // ============== COMPUTED ==============

  /**
   * The `id` of the <%field%>. If [`id`](#option-id) is not provided [`path`](#option-path) will be used.
   * 
   * @type {string}
   */
  var fieldId = computed(() => {
    return id.value || path.value;
  });
  return {
    fieldId
  };
};

var base$N = function base(props, context, dependencies) {
  var {
    disabled
  } = toRefs(props);

  // ================ DATA ================

  /**
   * Helper to store whether the element is disabled via api (with .disable()).
   * 
   * @type {boolean|null}
   * @default null
   * @private
   */
  var localDisabled = ref(null);

  // ============== COMPUTED ==============

  /**
   * Whether the element is disabled.
   * 
   * @type {boolean}
   */
  var isDisabled = computed(() => {
    return disabled.value && localDisabled.value !== false || localDisabled.value === true;
  });

  // =============== METHODS ==============

  /**
   * Disables the element.
   *
   * @returns {void}
   */
  var disable = () => {
    localDisabled.value = true;
  };

  /**
   * Enables the element even if it is disabled by [`disabled`](#disabled) option.
   *
   * @returns {void}
   */
  var enable = () => {
    localDisabled.value = false;
  };
  return {
    localDisabled,
    isDisabled,
    disable,
    enable
  };
};
var checkboxgroup$3 = function checkboxgroup(props, context, dependencies) {
  var {
    disables
  } = toRefs(props);
  var {
    localDisabled,
    isDisabled
  } = base$N(props);

  // ================ DATA ================

  /**
   * List of option keys to be disabled.
   * 
   * @type {array} 
   * @default []
   * @private
   */
  var disabledItems = ref([]);

  // =============== METHODS ==============

  /**
   * Disables one item or more items.
   *
   * @param {array|string|number} values* value(s) to disable
   * @returns {void}
   */
  var disable = values => {
    if (!_.isArray(values)) {
      values = [values];
    }
    var disablesList = _.clone(disabledItems.value);
    _.each(values, item => {
      item = String(item);
      if (disablesList.indexOf(item) === -1) {
        disablesList.push(item);
      }
    });
    disabledItems.value = disablesList;
  };

  /**
   * Disables one item or more disabled items.
   *
   * @param {array|string|number} values* value(s) to enable
   * @returns {void}
   */
  var enable = values => {
    if (!_.isArray(values)) {
      values = [values];
    }
    var disablesList = _.clone(disabledItems.value);
    _.each(values, item => {
      item = String(item);
      var index = disablesList.indexOf(item);
      if (index !== -1) {
        disablesList.splice(index, 1);
      }
    });
    disabledItems.value = disablesList;
  };

  /**
   * Disables all items.
   *
   * @returns {void}
   */
  var disableAll = () => {
    localDisabled.value = true;
  };

  /**
   * Enables all items.
   *
   * @returns {void}
   */
  var enableAll = () => {
    localDisabled.value = false;
    disabledItems.value = [];
  };

  // ================ HOOKS ===============

  disabledItems.value = _.map(disables.value || [], d => {
    return String(d);
  });
  return {
    disabledItems,
    isDisabled,
    disableAll,
    enableAll,
    disable,
    enable
  };
};
var button = function button(props, context, dependencies) {
  var {
    disabled,
    submits
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;
  var el$ = dependencies.el$;

  // ============== COMPUTED ==============

  /**
   * Whether the button is disabled.
   * 
   * @type {boolean}
   */
  var isDisabled = computed(() => {
    if (typeof disabled.value === 'function') {
      return disabled.value(el$.value, form$.value);
    }
    if (submits.value && (form$.value.invalid && form$.value.shouldValidateOnChange || form$.value.busy || form$.value.isDisabled)) {
      return true;
    }
    return disabled.value;
  });
  return {
    isDisabled
  };
};
var radiogroup$2 = checkboxgroup$3;

var base$M = function base(props, context, dependencies) {
  var {
    name
  } = toRefs(props);
  var currentInstance = getCurrentInstance();

  // ============ DEPENDENCIES =============

  var form$ = dependencies.form$;

  // =============== METHODS ==============

  /**
  * Sets the component to the parent as if `refs` were used.
  * 
  * @param {component} $parent parent component
  * @param {function} assignToParent the assignToParent function for recursion
  * @returns {void}
  * @private
  */
  var assignToParent = ($parent, assignToParent) => {
    if ($parent.children$Array) {
      $parent.children$Array.push(currentInstance.proxy);
    } else if ($parent.elements$) {
      form$.value.$set($parent.elements$, name.value, currentInstance.proxy);
    } else {
      assignToParent($parent.$parent, assignToParent);
    }
  };

  /**
  * Removes the component from the parent.
  * 
  * @param {component} $parent parent component
  * @param {function} removeFromParent the removeFromParent function for recursion
  * @private
  */
  var removeFromParent = ($parent, removeFromParent) => {
    if ($parent.children$Array) {
      $parent.children$Array.splice($parent.children$Array.map(e$ => normalize(e$.name)).indexOf(normalize(name.value)), 1);
    } else if ($parent.elements$) {
      form$.value.$delete($parent.elements$, name.value);
    } else {
      removeFromParent($parent.$parent, removeFromParent);
    }
  };
  return {
    assignToParent,
    removeFromParent
  };
};

var base$L = function base(props, context, dependencies) {
  var instantHooks = ['onBeforeCreate', 'onCreated'];
  var hooks = {
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted
  };
  var currentInstance = getCurrentInstance();

  // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;
  var fire = dependencies.fire;
  var {
    assignToParent,
    removeFromParent
  } = base$M(props, context, {
    form$
  });

  // ================= DATA ================

  /**
   * Whether the element has been already mounted.
   * 
   * @type {boolean}
   * @default true
   */
  var mounted = ref(false);

  /**
   * Whether the element is hidden internally by core components like tabs or steps steps. Only intended for reading.
   * 
   * @type {boolean} 
   * @default true
   * @private
   */
  var active = ref(true);

  // ============== COMPUTED ==============

  /**
   * Whether the element is static (does not have any data or validation).
   * 
   * @type {boolean}
   * @private
   */
  var isStatic = computed(() => {
    return false;
  });

  /**
   * Whether the element's value is a file.
   *
   * @type {boolean}
   * @private
   */
  var isFileType = computed(() => {
    return false;
  });

  /**
   * Whether the element's value is an image.
   *
   * @type {boolean}
   * @private
   */
  var isImageType = computed(() => {
    return false;
  });

  /**
   * Whether the element's value is an array.
   *
   * @type {boolean}
   * @private
   */
  var isArrayType = computed(() => {
    return false;
  });

  /**
   * Whether the element should be visible when using `tabs` or `steps`.
   * 
   * @type {boolean}
   * @private
   */
  var isActive = computed(() => {
    return active.value;
  });

  /**
   * The element's component.
   *
   * @type {component}
   */
  var el$ = computed(() => {
    return currentInstance.proxy;
  });

  // ============== METHODS ===============

  /**
   * Sets the `active` property of the element to `true`.
   *
   * @returns {void}
   * @private
   */
  var activate = () => {
    active.value = true;
  };

  /**
   * Sets the `active` property of the element to `false`.
   *
   * @returns {void}
   * @private
   */
  var deactivate = () => {
    active.value = false;
  };

  // ============== PROVIDES ==============

  /**
   * The element's component.
   *
   * @type {component}
   */
  provide('el$', el$);

  // ================ HOOKS ===============

  onBeforeMount(() => {
    assignToParent(currentInstance.proxy.$parent, assignToParent);
  });
  onMounted(() => {
    mounted.value = true;
  });
  onBeforeUnmount(() => {
    removeFromParent(currentInstance.proxy.$parent, removeFromParent);
  });
  Object.values(instantHooks).forEach(hook => {
    fire(_.lowerFirst(hook.replace('on', '')), el$.value);
  });
  Object.keys(hooks).forEach(hook => {
    hooks[hook](() => {
      fire(_.lowerFirst(hook.replace('on', '')), el$.value);
    });
  });
  return {
    el$,
    isStatic,
    isFileType,
    isArrayType,
    isImageType,
    isActive,
    active,
    mounted,
    activate,
    deactivate
  };
};
var list$2 = function list(props, context, dependencies) {
  var {
    el$,
    isStatic,
    isFileType,
    isImageType,
    isActive,
    active,
    mounted,
    activate,
    deactivate
  } = base$L(props, context, dependencies);

  // ============== COMPUTED ==============

  var isArrayType = computed(() => {
    return true;
  });
  return {
    el$,
    isStatic,
    isFileType,
    isArrayType,
    isImageType,
    isActive,
    active,
    mounted,
    activate,
    deactivate
  };
};
var file$4 = function file(props, context, dependencies) {
  var {
    view
  } = toRefs(props);
  var {
    el$,
    isStatic,
    isArrayType,
    isActive,
    active,
    mounted,
    activate,
    deactivate
  } = base$L(props, context, dependencies);

  // ============== COMPUTED ==============

  var isFileType = computed(() => {
    return true;
  });
  var isImageType = computed(() => {
    return ['gallery', 'image'].indexOf(view.value) !== -1;
  });
  return {
    el$,
    isStatic,
    isFileType,
    isArrayType,
    isImageType,
    isActive,
    active,
    mounted,
    activate,
    deactivate
  };
};
var static_$3 = function static_(props, context, dependencies) {
  var {
    el$,
    isArrayType,
    isFileType,
    isImageType,
    isActive,
    active,
    mounted,
    activate,
    deactivate
  } = base$L(props, context, dependencies);

  // ============== COMPUTED ==============

  var isStatic = computed(() => {
    return true;
  });
  return {
    el$,
    isStatic,
    isFileType,
    isArrayType,
    isImageType,
    isActive,
    active,
    mounted,
    activate,
    deactivate
  };
};
var checkboxgroup$2 = list$2;
var dates$5 = list$2;
var multiselect$2 = list$2;
var tags$2 = list$2;

var base$K = function base(props, context, dependencies) {
  var {
    name
  } = toRefs(props);
  var currentInstance = getCurrentInstance();

  // ============ DEPENDENCIES ============

  var {
    form$
  } = dependencies;

  // ============== COMPUTED ==============

  /**
   * The parent component of the element.
   * 
   * @type {component}
   * @private
   */
  var parent = computed(() => {
    var getParent = (parent, getParent) => {
      if (parent && (form$.value.$vueform.vueVersion === 3 && parent.$options.name && parent.$options.name.match(/^[a-zA-Z\-]*Element$/) || form$.value.$vueform.vueVersion === 2 && parent.hasOwnProperty('el$') && typeof parent.el$ !== 'function')) {
        return parent.el$;
      } else if (parent.$parent) {
        return getParent(parent.$parent, getParent);
      } else {
        return null;
      }
    };
    return getParent(form$.value.$vueform.vueVersion === 3 ? currentInstance.parent.proxy : currentInstance.proxy.$parent, getParent);
  });

  /**
   * The path of the element using dot `.` syntax.
   * 
   * @type {string}
   */
  var path = computed(() => {
    return parent.value && parent.value.path ? parent.value.path + '.' + name.value : name.value;
  });

  /**
   * The path of the element's data using dot `.` syntax.
   * 
   * @type {string} 
   */
  var dataPath = computed(() => {
    return parent.value && parent.value.dataPath ? parent.value.dataPath + '.' + name.value : name.value;
  });

  /**
   * Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))
   * 
   * @type {boolean}
   * @private
   */
  var flat = computed(() => {
    return false;
  });
  return {
    parent,
    path,
    dataPath,
    flat
  };
};
var group$5 = function group(props, context, dependencies) {
  // ============ DEPENDENCIES ============

  var {
    path,
    parent
  } = base$K(props, context, dependencies);

  // ============== COMPUTED ==============

  var dataPath = computed(() => {
    return parent.value && parent.value.dataPath ? parent.value.dataPath : null;
  });
  var flat = computed(() => {
    return true;
  });
  return {
    path,
    dataPath,
    flat,
    parent
  };
};
var static_$2 = function static_(props, context, dependencies) {
  // ============ DEPENDENCIES ============

  var {
    path,
    parent,
    flat
  } = base$K(props, context, dependencies);

  // ============== COMPUTED ==============

  return {
    path,
    flat,
    parent
  };
};

var base$J = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============

  var fieldId = dependencies.fieldId;
  var invalid = dependencies.invalid;
  var isDisabled = dependencies.isDisabled;
  var busy = dependencies.busy;

  // ============== COMPUTED ==============

  /**
   * The `id` of the related label component.
   * 
   * @type {string}
   * @private
   */
  var labelId = computed(() => {
    return "".concat(fieldId.value, "__label");
  });

  /**
   * The `id` of the related description component.
   * 
   * @type {string}
   * @private
   */
  var descriptionId = computed(() => {
    return "".concat(fieldId.value, "__description");
  });

  /**
   * The `id` of the related description component.
   * 
   * @type {string}
   * @private
   */
  var infoId = computed(() => {
    return "".concat(fieldId.value, "__info");
  });

  /**
   * The `id` of the related error component.
   * 
   * @type {string}
   * @private
   */
  var errorId = computed(() => {
    return "".concat(fieldId.value, "__error");
  });

  /**
   * The `aria-*` attributes of the input.
   * 
   * @type {object}
   */
  var aria = computed(() => {
    return {
      'aria-labelledby': labelId.value,
      'aria-describedby': "".concat(descriptionId.value, " ").concat(infoId.value),
      'aria-invalid': invalid.value,
      'aria-errormessage': errorId.value,
      'aria-disabled': isDisabled === null || isDisabled === void 0 ? void 0 : isDisabled.value,
      'aria-busy': busy.value
    };
  });
  return {
    descriptionId,
    labelId,
    infoId,
    errorId,
    aria
  };
};
var checkbox$1 = function checkbox(props, context, dependencies) {
  var {
    text
  } = toRefs(props);
  var {
    descriptionId,
    labelId,
    infoId,
    errorId
  } = base$J(props, context, dependencies);

  // ============ DEPENDENCIES ============

  var invalid = dependencies.invalid;
  var isDisabled = dependencies.isDisabled;
  var busy = dependencies.busy;

  // ============== COMPUTED ==============

  var aria = computed(() => {
    return {
      'aria-label': text.value,
      'aria-describedby': "".concat(labelId.value, " ").concat(descriptionId.value, " ").concat(infoId.value),
      'aria-invalid': invalid.value,
      'aria-errormessage': errorId.value,
      'aria-disabled': isDisabled.value,
      'aria-busy': busy.value
    };
  });
  return {
    descriptionId,
    labelId,
    infoId,
    errorId,
    aria
  };
};
var checkboxgroup$1 = function checkboxgroup(props, context, dependencies) {
  var {
    descriptionId,
    labelId,
    infoId,
    errorId
  } = base$J(props, context, dependencies);

  // ============ DEPENDENCIES ============

  var invalid = dependencies.invalid;
  var isDisabled = dependencies.isDisabled;
  var busy = dependencies.busy;

  // ============== COMPUTED ==============

  var aria = computed(() => {
    return {
      'aria-describedby': "".concat(descriptionId.value, " ").concat(infoId.value),
      'aria-invalid': invalid.value,
      'aria-errormessage': errorId.value,
      'aria-disabled': isDisabled.value,
      'aria-busy': busy.value
    };
  });
  return {
    descriptionId,
    labelId,
    infoId,
    errorId,
    aria
  };
};
var static_$1 = function static_(props, context, dependencies) {
  var {
    descriptionId,
    labelId,
    infoId,
    errorId
  } = base$J(props, context, dependencies);

  // ============ DEPENDENCIES ============

  var isDisabled = dependencies.isDisabled;

  // ============== COMPUTED ==============

  var aria = computed(() => {
    return {
      'aria-labelledby': labelId.value,
      'aria-describedby': "".concat(descriptionId.value, " ").concat(infoId.value),
      'aria-disabled': isDisabled.value
    };
  });
  return {
    descriptionId,
    labelId,
    infoId,
    errorId,
    aria
  };
};
var radiogroup$1 = checkboxgroup$1;
var radio = checkbox$1;
var toggle$1 = checkbox$1;
var file$3 = checkboxgroup$1;

var base$I = function base(props, context, dependencies) {
  // ============ DEPENDENCIES =============

  var form$ = dependencies.form$;
  var el$ = dependencies.el$;
  var fire = dependencies.fire;
  var dirt = dependencies.dirt;
  var validate = dependencies.validate;
  var value = dependencies.value;

  // ============== WATCHERS ===============

  onMounted(() => {
    watch(value, (n, o) => {
      if (dataEquals(n, o)) {
        return;
      }
      fire('change', n, o, el$.value);
      if (dirt) {
        dirt();
      }
      if (validate && form$.value.shouldValidateOnChange) {
        validate();
      }
    }, {
      immediate: false,
      deep: true
    });
  });
};

function resolveDeps(props, context, options) {
  var deps = options.deps || {};
  options = _objectSpread2$1(_objectSpread2$1({}, options), {}, {
    events: context.emits,
    slots: context.slots
  });
  context.features.forEach(feature => {
    _.each(feature(props, context, deps, options), (featureDep, key) => {
      deps[key] = featureDep;
    });
  });
  return deps;
}

var base$H = function base(props, context) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var deps = resolveDeps(props, context, options);
  base$I(props, context, deps);
  onMounted(() => {
    deps.initMessageBag();
    deps.initValidation();
  });
  return _objectSpread2$1({}, deps);
};
var static_ = function static_(props, context) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var deps = resolveDeps(props, context, options);
  return _objectSpread2$1({}, deps);
};
var multilingual$7 = function multilingual(props, context) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var deps = resolveDeps(props, context, options);
  base$I(props, context, deps);
  onMounted(() => {
    element.initState();
    deps.initMessageBag();
    deps.initValidation();
  });
  return _objectSpread2$1({}, deps);
};

var BaseElement = {
  props: {
    name: {
      required: true,
      type: [String, Number]
    },
    conditions: {
      required: false,
      type: [Array],
      default: () => []
    },
    onBeforeCreate: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onCreated: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onBeforeMount: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onMounted: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onBeforeUpdate: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onUpdated: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onBeforeUnmount: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onUnmounted: {
      required: false,
      type: [Function],
      default: null,
      private: true
    }
  }
};

var HasView = {
  props: {
    inline: {
      required: false,
      type: [Boolean],
      default: false
    },
    layout: {
      required: false,
      type: [String, Object, Boolean],
      default: 'ElementLayout',
      private: true
    },
    addClass: {
      required: false,
      type: [Array, Object, String],
      default: null
    },
    removeClass: {
      required: false,
      type: [Array, Object],
      default: null
    },
    replaceClass: {
      required: false,
      type: [Object],
      default: null
    },
    overrideClass: {
      required: false,
      type: [Array, Object, String],
      default: null
    },
    addClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    replaceClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    removeClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    overrideClasses: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    presets: {
      required: false,
      type: [Array],
      default: () => []
    },
    view: {
      required: false,
      type: [String],
      default: undefined
    },
    views: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    size: {
      required: false,
      type: [String],
      default: undefined
    },
    columns: {
      required: false,
      type: [Object, String, Number],
      default: null
    },
    templates: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    description: {
      required: false,
      type: [String],
      default: null
    },
    info: {
      required: false,
      type: [String],
      default: null
    },
    infoPosition: {
      required: false,
      type: [String],
      default: 'right'
    },
    label: {
      required: false,
      type: [String, Object, Function],
      default: null
    },
    before: {
      required: false,
      type: [Object, String, Number],
      default: null
    },
    between: {
      required: false,
      type: [Object, String, Number],
      default: null
    },
    after: {
      required: false,
      type: [Object, String, Number],
      default: null
    },
    slots: {
      required: false,
      type: [Object],
      default: () => ({})
    }
  }
};

var ButtonElement = {
  name: 'ButtonElement',
  mixins: [BaseElement, HasView],
  emits: ['click', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'button',
      private: true
    },
    buttonLabel: {
      required: false,
      type: [String, Object, Function],
      default: null
    },
    buttonType: {
      required: false,
      type: [String],
      default: 'button' // button|anchor
    },

    buttonClass: {
      required: false,
      type: [String, Array, Object],
      default: null
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    disabled: {
      required: false,
      type: [Function, Boolean],
      default: false
    },
    loading: {
      required: false,
      type: [Function, Boolean],
      default: false
    },
    href: {
      required: false,
      type: [String],
      default: ''
    },
    target: {
      required: false,
      type: [String],
      default: null
    },
    onClick: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    resets: {
      required: false,
      type: [Boolean],
      default: false
    },
    submits: {
      required: false,
      type: [Boolean],
      default: false
    },
    secondary: {
      required: false,
      type: [Boolean],
      default: false
    },
    danger: {
      required: false,
      type: [Boolean],
      default: false
    }
  },
  setup(props, context) {
    context.features = [base$14, base$13, base$Q, static_$2, base$16, static_$3, button, base$$, base$W, base$U, base$T, base$O, base$R, base$P, base$V, base$S, static_$1];
    context.slots = ['label', 'info', 'description', 'before', 'between', 'after', 'default'];
    return _objectSpread2$1({}, static_(props, context));
  }
};

var base$G = function base(props, context, dependencies) {
  // ================ DATA ================

  /**
   * The main input field of the element.
   * 
   * @type {HTMLElement} 
   */
  var input = ref(null);
  return {
    input
  };
};

function checkDateFormat (format, date) {
  if (!(date instanceof Date) && moment(date, format).format(format) !== date) {
    console.warn("Wrong formatted date. Expected format: \"".concat(format, "\", received: \"").concat(date, "\""));
  }
}

var base$F = function base(props, context, dependencies) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var {
    submit,
    formatData,
    formatLoad,
    name
  } = toRefs(props);

  // ============ DEPENDENCIES =============

  var form$ = dependencies.form$;
  var available = dependencies.available;
  var value = dependencies.value;
  var resetValidators = dependencies.resetValidators;
  var defaultValue = dependencies.defaultValue;
  var nullValue = dependencies.nullValue;

  // =============== PRIVATE ===============

  /**
   * Sets the value of the element.
   * 
   * 
   * @param {any} val the value to be set
   * @returns {void}
   * @private
   */
  var setValue = val => {
    if (options.setValue) {
      return options.setValue(val);
    }
    value.value = val;
  };

  // ============== COMPUTED ===============

  /**
   * The value of the element in `{[name]: value}` value format. This gets merged with the parent component's data.
   * 
   * @type {object}
   */
  var data = computed(() => {
    return {
      [name.value]: value.value
    };
  });

  /**
   * Same as `data` property except that it only includes the element's value if [`submit`](#option-submit) is not disabled and [`available`](#property-available) is `true` (has no [`conditions`](#option-conditions) or they are fulfilled).
   * 
   * @type {object}
   */
  var requestData = computed(() => {
    if (!available.value || !submit.value) {
      return {};
    }
    return formatData.value ? formatData.value(name.value, value.value, form$.value) : {
      [name.value]: value.value
    };
  });

  // =============== METHODS ===============

  /**
   * Loads value to the element using optional [`formatLoad`](#option-format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.
   * 
   * @param {string} value* the value to be loaded
   * @param {boolean} format whether the loaded value should be formatted with [`formatLoad`](#option-format-load) before setting the value of the element (default: `false`)
   * @returns {void}
   */
  var load = function load(val) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    setValue(format && formatLoad.value ? formatLoad.value(val, form$.value) : val);
  };

  /**
   * Updates the value of the element similarly to [`load`](#method-load), only that it can\'t format data. 
   * 
   * @param {string|} value* the value to be set
   * @returns {void}
   */
  var update = val => {
    setValue(val);
  };

  /**
   * Clears the element's value.
   * 
   * @returns {void}
   */
  var clear = () => {
    setValue(_.cloneDeep(nullValue.value));
  };

  /**
   * Resets the element's value to [`default`](#option-default) (or empty if `default` is not provided). Also resets all the validation state for the element.
   * 
   * @returns {void}
   */
  var reset = () => {
    setValue(_.cloneDeep(defaultValue.value));
    resetValidators();
  };

  /**
   * Prepares the element.
   *
   * @returns {void}
   * @private
   */
  var prepare = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* () {});
    return function prepare() {
      return _ref.apply(this, arguments);
    };
  }();
  return {
    data,
    requestData,
    load,
    update,
    clear,
    reset,
    prepare
  };
};
var object$5 = function object(props, context, dependencies) {
  var {
    name,
    formatLoad,
    formatData,
    submit
  } = toRefs(props);
  var {
    data,
    prepare
  } = base$F(props, context, dependencies);

  // ============ DEPENDENCIES =============

  var form$ = dependencies.form$;
  var available = dependencies.available;
  var children$ = dependencies.children$;

  // ============== COMPUTED ===============

  var requestData = computed(() => {
    if (!available.value || !submit.value) {
      return {};
    }
    var requestData = {};
    _.each(children$.value, element$ => {
      if (element$.isStatic) {
        return;
      }
      requestData = Object.assign({}, requestData, element$.requestData);
    });
    return formatData.value ? formatData.value(name.value, requestData, form$.value) : {
      [name.value]: requestData
    };
  });

  // =============== METHODS ===============

  var load = function load(val) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var formatted = format && formatLoad.value ? formatLoad.value(val, form$.value) : val;
    _.each(children$.value, element$ => {
      if (element$.isStatic) {
        return;
      }
      if (!element$.flat && formatted[element$.name] === undefined) {
        element$.clear();
        return;
      }
      element$.load(element$.flat ? formatted : formatted[element$.name], format);
    });
  };
  var update = val => {
    _.each(children$.value, element$ => {
      if (element$.isStatic) {
        return;
      }
      if (val[element$.name] === undefined && !element$.flat) {
        return;
      }
      element$.update(element$.flat ? val : val[element$.name]);
    });
  };
  var clear = () => {
    _.each(children$.value, element$ => {
      if (element$.isStatic) {
        return;
      }
      element$.clear();
    });
  };
  var reset = () => {
    _.each(children$.value, element$ => {
      if (element$.isStatic) {
        return;
      }
      element$.reset();
    });
  };
  return {
    data,
    requestData,
    load,
    update,
    clear,
    reset,
    prepare
  };
};
var group$4 = function group(props, context, dependencies) {
  var {
    name,
    formatData,
    submit
  } = toRefs(props);
  var {
    load,
    update,
    clear,
    reset,
    prepare
  } = object$5(props, context, dependencies);

  // ============ DEPENDENCIES =============

  var form$ = dependencies.form$;
  var children$ = dependencies.children$;
  var available = dependencies.available;
  var value = dependencies.value;

  // ============== COMPUTED ===============

  /**
   * The value of child elements in object. This gets merged with the parent component's data.
   * 
   * @type {object}
   */
  var data = computed(() => {
    return value.value;
  });
  var requestData = computed(() => {
    if (!available.value || !submit.value) {
      return {};
    }
    var requestData = {};
    _.each(children$.value, element$ => {
      if (element$.isStatic) {
        return;
      }
      requestData = Object.assign({}, requestData, element$.requestData);
    });
    return formatData.value ? formatData.value(name.value, requestData, form$.value) : requestData;
  });
  return {
    data,
    requestData,
    load,
    update,
    clear,
    reset,
    prepare
  };
};
var list$1 = function list(props, context, dependencies, options) {
  var {
    name,
    storeOrder,
    formatLoad,
    formatData,
    order,
    submit,
    initial,
    default: default_
  } = toRefs(props);
  var {
    update,
    clear,
    prepare,
    data
  } = base$F(props, context, dependencies);

  // ============ DEPENDENCIES =============

  var form$ = dependencies.form$;
  var children$ = dependencies.children$;
  var children$Array = dependencies.children$Array;
  var available = dependencies.available;
  var isDisabled = dependencies.isDisabled;
  var value = dependencies.value;
  var orderByName = dependencies.orderByName;
  var refreshOrderStore = dependencies.refreshOrderStore;
  var dataPath = dependencies.dataPath;
  var parent = dependencies.parent;
  var nullValue = dependencies.nullValue;
  var defaultValue = dependencies.defaultValue;
  var fire = dependencies.fire;
  var resetValidators = dependencies.resetValidators;

  // ================ DATA =================

  var initialValue = ref(_.get(form$.value.model, dataPath.value));

  // ============== COMPUTED ===============

  /**
   * Default value of the parent
   * 
   * @type {any}
   * @private
   */
  var parentDefaultValue = computed(() => {
    return parent && parent.value ? parent.value.defaultValue[name.value] : form$.value.options.default[name.value];
  });
  var requestData = computed(() => {
    if (!available.value || !submit.value) {
      return {};
    }
    var requestData = [];
    _.each(children$.value, element$ => {
      var val = element$.requestData[element$.name];
      if (val !== undefined) {
        requestData.push(val);
      }
    });
    return formatData.value ? formatData.value(name.value, requestData, form$.value) : {
      [name.value]: requestData
    };
  });

  // =============== METHODS ===============

  /**
   * Appends a new item.
   * 
   * @param {any} value value of the appended element (optional)
   * @returns {integer} the index of the appended item
   */
  var add = function add() {
    var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
    var focus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var newValue = storeOrder.value ? Object.assign({}, val || {}, {
      [storeOrder.value]: val ? val[storeOrder.value] : undefined
    }) : val;
    value.value = refreshOrderStore(value.value.concat([newValue]));

    // value.value = refreshOrderStore(value.value)

    var index = value.value.length - 1;
    fire('add', index, newValue, value.value);
    if (focus) {
      nextTick(() => {
        var lastChild = children$Array.value[children$Array.value.length - 1];
        var last = lastChild.type !== 'object' ? lastChild : lastChild.children$Array.find(c => c.input);
        if (last !== null && last !== void 0 && last.input) {
          last.input.focus();
        }
      });
    }
    return index;
  };

  /**
   * Removes an items by its index.
   * 
   * 
   * @param {number} index* index of items to be removed
   * @returns {void}
   */
  var remove = index => {
    value.value = value.value.filter((v, i) => i !== index);
    refreshOrderStore(value.value);
    fire('remove', index, value.value);
  };
  var load = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* (val) {
      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var values = sortValue(format && formatLoad.value ? formatLoad.value(val, form$.value) : val);
      clear();
      yield nextTick();
      for (var i = 0; i < values.length; i++) {
        add();
      }
      yield nextTick();
      _.each(children$.value, (child$, i) => {
        child$.load(values[i], format);
      });
    });
    return function load(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var reset = () => {
    value.value = _.cloneDeep(defaultValue.value);
    resetValidators();
    if (!value.value.length && initial.value > 0) {
      for (var i = 0; i < initial.value; i++) {
        add();
      }

      // Making sure child lists are reset as well
      // so initial instances can be set
      nextTick(() => {
        children$Array.value.forEach(child$ => {
          child$.reset();
        });
      });
    }
    nextTick(() => {
      refreshOrderStore(value.value);
    });
  };

  /**
   * Sorts value when `order` and `orderByName` is defined.
   * 
   * @param {array} value value to be sorted
   * @returns {array}
   * @private
   */
  var sortValue = val => {
    if (!order.value && !orderByName.value || !val) {
      return val;
    }
    var desc = order.value && typeof order.value === 'string' && order.value.toUpperCase() == 'DESC';
    if (orderByName.value) {
      val = desc ? _.sortBy(val, orderByName.value).reverse() : _.sortBy(val, orderByName.value);
    } else if (order.value) {
      val = desc ? val.sort().reverse() : val.sort();
    }
    return val;
  };

  /**
   * Handles the `add` event.
   * 
   * @returns {void}
   * @private
   */
  var handleAdd = () => {
    if (isDisabled.value) {
      return;
    }
    add(undefined, true);
  };

  /**
   * Handles the `remove` event.
   *
   * @param {number} index* index of child to be removed
   * @returns {void}
   * @private
   */
  var handleRemove = index => {
    if (isDisabled.value) {
      return;
    }
    remove(index);
  };

  // ================ HOOKS ===============

  if (initialValue.value === undefined && parentDefaultValue.value === undefined && default_.value === undefined) {
    if (initial.value > 0) {
      for (var i = 0; i < initial.value; i++) {
        add();
      }
    } else {
      value.value = nullValue.value;
    }
  } else if (initialValue.value === undefined) {
    value.value = defaultValue.value;
  }
  return {
    requestData,
    data,
    add,
    remove,
    load,
    update,
    clear,
    reset,
    handleAdd,
    handleRemove,
    prepare
  };
};
var date$3 = function date(props, context, dependencies) {
  var {
    formatLoad
  } = toRefs(props);
  var {
    data,
    requestData,
    update,
    clear,
    reset,
    prepare
  } = base$F(props, context, dependencies);

  // ============ DEPENDENCIES =============

  var form$ = dependencies.form$;
  var value = dependencies.value;
  var loadDateFormat = dependencies.loadDateFormat;

  // =============== METHODS ===============

  var load = function load(val) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var formatted = format && formatLoad.value ? formatLoad.value(val, form$.value) : val;
    checkDateFormat(loadDateFormat.value, formatted);
    value.value = formatted instanceof Date || !formatted ? formatted : moment(formatted, loadDateFormat.value).toDate();
  };
  return {
    data,
    requestData,
    load,
    update,
    clear,
    reset,
    prepare
  };
};
var dates$4 = function dates(props, context, dependencies) {
  var {
    formatLoad
  } = toRefs(props);
  var {
    data,
    requestData,
    update,
    clear,
    reset,
    prepare
  } = base$F(props, context, dependencies);

  // ============ DEPENDENCIES =============

  var form$ = dependencies.form$;
  var value = dependencies.value;
  var loadDateFormat = dependencies.loadDateFormat;

  // =============== METHODS ===============

  var load = function load(val) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var formatted = format && formatLoad.value ? formatLoad.value(val, form$.value) : val;
    value.value = _.map(formatted, v => {
      checkDateFormat(loadDateFormat.value, v);
      return v instanceof Date ? v : moment(v, loadDateFormat.value).toDate();
    });
  };
  return {
    data,
    requestData,
    load,
    update,
    clear,
    reset,
    prepare
  };
};
var multilingual$6 = function multilingual(props, context, dependencies) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var {
    formatLoad
  } = toRefs(props);
  var {
    data,
    requestData,
    clear,
    reset,
    prepare
  } = base$F(props, context, dependencies, options);

  // ============ DEPENDENCIES =============

  var form$ = dependencies.form$;
  var value = dependencies.value;
  var language = dependencies.language;
  var nullValue = dependencies.nullValue;

  // =============== PRIVATE ===============

  var setValue = val => {
    if (options.setValue) {
      return options.setValue(val);
    }
    value.value = val;
  };

  // =============== METHODS ===============

  var load = function load(val) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var formatted = format && formatLoad.value ? formatLoad.value(val, form$.value) : val;
    if (!_.isPlainObject(formatted)) {
      throw new Error('Multilingual element requires an object to load');
    }
    setValue(Object.assign({}, _.clone(nullValue.value), formatted));
  };
  var update = val => {
    var updateValue = val;
    if (!_.isPlainObject(updateValue)) {
      updateValue = {
        [language.value]: val
      };
    }
    setValue(Object.assign({}, value.value, updateValue));
  };
  return {
    data,
    requestData,
    load,
    update,
    clear,
    reset,
    prepare
  };
};
var editor = function editor(props, context, dependencies) {
  var {
    data,
    requestData,
    load,
    update,
    clear,
    reset,
    prepare
  } = base$F(props, context, dependencies, {
    setValue: val => {
      value.value = val;
      nextTick(() => {
        input.value.update(val);
      });
    }
  });

  // ============ DEPENDENCIES =============

  var input = dependencies.input;
  var value = dependencies.value;
  return {
    data,
    requestData,
    load,
    update,
    clear,
    reset,
    prepare
  };
};
var teditor = function teditor(props, context, dependencies) {
  var {
    data,
    requestData,
    load,
    update,
    clear,
    reset,
    prepare
  } = multilingual$6(props, context, dependencies, {
    setValue: val => {
      value.value = val;
      nextTick(() => {
        input.value.update(val[language.value]);
      });
    }
  });

  // ============ DEPENDENCIES =============

  var input = dependencies.input;
  var model = dependencies.model;
  var value = dependencies.value;
  var language = dependencies.language;

  // ============== WATCHERS ==============

  watch(language, () => {
    input.value.update(model.value);
  });
  return {
    data,
    requestData,
    load,
    update,
    clear,
    reset,
    prepare
  };
};
var file$2 = function file(props, context, dependencies) {
  var {
    load,
    update,
    clear,
    reset,
    prepare
  } = base$F(props, context, dependencies);
  var {
    submit,
    formatData,
    name
  } = toRefs(props);

  // ============ DEPENDENCIES =============

  var form$ = dependencies.form$;
  var available = dependencies.available;
  var value = dependencies.value;

  // ============== COMPUTED ===============

  var data = computed(() => {
    var _v;
    var v = value.value;
    if (typeof v === 'object' && (_v = v) !== null && _v !== void 0 && _v.file) {
      v = _objectSpread2$1({}, v);
      delete v.file;
    }
    return {
      [name.value]: v
    };
  });
  var requestData = computed(() => {
    var _v2;
    if (!available.value || !submit.value) {
      return {};
    }
    var v = value.value;
    if (typeof v === 'object' && (_v2 = v) !== null && _v2 !== void 0 && _v2.file) {
      v = _objectSpread2$1({}, v);
      delete v.file;
    }
    return formatData.value ? formatData.value(name.value, v, form$.value) : {
      [name.value]: v
    };
  });
  return {
    data,
    requestData,
    load,
    update,
    clear,
    reset,
    prepare
  };
};
var multifile$4 = function multifile(props, context, dependencies) {
  var {
    add,
    remove,
    load,
    update,
    clear,
    reset,
    handleAdd,
    handleRemove,
    prepare
  } = list$1(props, context, dependencies);
  var {
    submit,
    formatData,
    name
  } = toRefs(props);

  // ============ DEPENDENCIES =============

  var form$ = dependencies.form$;
  var available = dependencies.available;
  var value = dependencies.value;

  // ============== COMPUTED ===============

  var data = computed(() => {
    var val = value.value;
    val = val.map(file => {
      if (typeof file === 'object' && file !== null && file !== void 0 && file.file) {
        var v = _objectSpread2$1({}, file);
        delete v.file;
        return v;
      }
      return file;
    });
    return {
      [name.value]: val
    };
  });
  var requestData = computed(() => {
    if (!available.value || !submit.value) {
      return {};
    }
    var requestData = [];
    _.each(children$.value, element$ => {
      var val = element$.requestData[element$.name];
      if (val !== undefined) {
        var _val;
        if (typeof val === 'object' && (_val = val) !== null && _val !== void 0 && _val.file) {
          var v = _objectSpread2$1({}, file$2);
          delete v.file;
          val = v;
        }
        requestData.push(val);
      }
    });
    return formatData.value ? formatData.value(name.value, requestData, form$.value) : {
      [name.value]: requestData
    };
  });
  return {
    requestData,
    data,
    add,
    remove,
    load,
    update,
    clear,
    reset,
    handleAdd,
    handleRemove,
    prepare
  };
};

var base$E = function base(props, context, dependencies) {
  var {
    default: default_,
    name
  } = toRefs(props);

  // ============ DEPENDENCIES =============

  var nullValue = dependencies.nullValue;
  var form$ = dependencies.form$;
  var parent = dependencies.parent;

  // ============== COMPUTED ===============

  /**
  * The default value of the element.
  * 
  * @type {any}
  * @private
  */
  var defaultValue = computed(() => {
    var parentDefaultValue;
    if (parent && parent.value && !parent.value.mounted) {
      parentDefaultValue = parent.value.defaultValue[name.value];
    } else if (!form$.value.mounted && form$.value.options.default[name.value]) {
      parentDefaultValue = form$.value.options.default[name.value];
    }
    if (parentDefaultValue !== undefined) {
      return parentDefaultValue instanceof File ? new File([parentDefaultValue], parentDefaultValue.name, parentDefaultValue) : _.cloneDeep(parentDefaultValue);
    }
    if (default_.value !== undefined) {
      return default_.value instanceof File ? new File([default_.value], default_.value.name, default_.value) : _.cloneDeep(default_.value);
    }
    return _.cloneDeep(nullValue.value);
  });
  return {
    defaultValue
  };
};
var object$4 = function object(props, context, dependencies) {
  var {
    default: default_,
    name
  } = toRefs(props);

  // ============ DEPENDENCIES =============

  var nullValue = dependencies.nullValue;
  var form$ = dependencies.form$;
  var parent = dependencies.parent;

  // ============== COMPUTED ===============

  var defaultValue = computed(() => {
    var parentDefaultValue;
    if (parent && parent.value && !parent.value.mounted) {
      parentDefaultValue = parent.value.defaultValue[name.value];
    } else if (!form$.value.mounted && form$.value.options.default[name.value]) {
      parentDefaultValue = form$.value.options.default[name.value];
    }
    if (parentDefaultValue !== undefined) {
      return _.cloneDeep(_.merge({}, default_.value || nullValue.value, parentDefaultValue));
    }
    if (Object.keys(default_.value).length > 0) {
      return _.cloneDeep(default_.value);
    }
    return _.cloneDeep(nullValue.value);
  });
  return {
    defaultValue
  };
};
var group$3 = function group(props, context, dependencies) {
  var {
    default: default_
  } = toRefs(props);

  // ============ DEPENDENCIES =============

  var form$ = dependencies.form$;
  var parent = dependencies.parent;

  // ============== COMPUTED ===============

  var defaultValue = computed(() => {
    var parentDefaultValue = {};
    if (parent && parent.value && !parent.value.mounted) {
      parentDefaultValue = parent.value.defaultValue;
    } else if (!form$.value.mounted && form$.value.options.default) {
      parentDefaultValue = form$.value.options.default;
    }
    return _.cloneDeep(_.merge({}, default_.value, parentDefaultValue));
  });
  return {
    defaultValue
  };
};
var multilingual$5 = function multilingual(props, context, dependencies) {
  var {
    default: default_,
    name
  } = toRefs(props);

  // ============ DEPENDENCIES =============

  var nullValue = dependencies.nullValue;
  var form$ = dependencies.form$;
  var parent = dependencies.parent;

  // ============== COMPUTED ===============

  var defaultValue = computed(() => {
    var parentDefaultValue;
    if (parent && parent.value && !parent.value.mounted) {
      parentDefaultValue = parent.value.defaultValue[name.value];
    } else if (!form$.value.mounted && form$.value.options.default[name.value]) {
      parentDefaultValue = form$.value.options.default[name.value];
    }
    if (parentDefaultValue !== undefined) {
      return _.cloneDeep(Object.assign({}, _.clone(nullValue.value), parentDefaultValue));
    }
    if (default_.value === undefined) {
      return _.clone(nullValue.value);
    }
    var def = _.clone(default_.value);
    if (!_.isPlainObject(def)) {
      var tempDefault = {};
      _.each(nullValue.value, (v, language) => {
        tempDefault[language] = def;
      });
      def = tempDefault;
    }
    return Object.assign({}, _.clone(nullValue.value), def);
  });
  return {
    defaultValue
  };
};

var base$D = function base(props, context, dependencies) {
  var {
    rules
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;
  var path = dependencies.path;

  // ================ DATA ================

  /**
   * Helper property used to store the element states.
   * 
   * @type {object}
   * @default { dirty: false, validate: true }
   * @private
   */
  var state = ref({
    dirty: false,
    validated: true
  });

  /**
   * An array containing all the validators of the element.
   * 
   * @type {array<Validator>}
   * @default []
   * @private
   */
  var Validators = ref([]);

  /**
   * Instance of MessageBag service. Custom errors and messages [can be added](/docs/1.x/validating-elements#custom-errors-and-messages).
   * 
   * @type {MessageBag}
   * @default MessageBag
   */
  var messageBag = ref({});

  /**
   * Instance of ValidatorFactory.
   * 
   * @type {ValidatorFactory}
   * @default ValidatorFactory
   * @private
   */
  var validatorFactory = reactive({});

  // ============== COMPUTED ===============

  /**
   * The element's validation rules.
   * 
   * @type {string|array}
   * @private
   */
  var validationRules = computed(() => {
    return rules.value;
  });

  /**
   * Whether the element's value was modified.
   * 
   * @type {boolean}
   */
  var dirty = computed(() => {
    return state.value.dirty;
  });

  /**
   * Whether the element was already validated at least once.
   * 
   * @type {boolean}
   */
  var validated = computed(() => {
    return state.value.validated;
  });

  /**
   * Whether the element has any failing rules.
   * 
   * @type {boolean}
   */
  var invalid = computed(() => {
    return _.some(Validators.value, {
      invalid: true
    });
  });

  /**
   * Whether the element has any async rules in progress.
   * 
   * @type {boolean}
   */
  var pending = computed(() => {
    return _.some(Validators.value, {
      pending: true
    });
  });

  /**
   * Whether the element is `pending`.
   * 
   * @type {boolean}
   */
  var busy = computed(() => {
    return pending.value;
  });

  /**
   * The list of errors of failing rules.
   * 
   * @type {array}
   * @private
   */
  var validatorErrors = computed(() => {
    var errs = [];
    _.each(Validators.value, Validator => {
      if (Validator.failing) {
        errs.push(Validator.message);
      }
    });
    return errs;
  });

  /**
   * All the errors of `MessageBag`.
   * 
   * @type {array}
   */
  var errors = computed(() => {
    return messageBag.value.errors;
  });

  /**
   * The first error of `MessageBag`.
   * 
   * @type {string}
   */
  var error = computed(() => {
    return messageBag.value.error || null;
  });

  /**
   * Whether the element has errors.
   * 
   * @type {boolean}
   */
  var isDanger = computed(() => {
    return error.value !== null;
  });

  /**
   * Whether the element has been filled in successfully.
   * 
   * @type {boolean}
   */
  var isSuccess = computed(() => {
    return validationRules.value && validationRules.value.length > 0 && state.value.validated && !invalid.value || (!validationRules.value || !validationRules.value.length) && dirty.value;
  });

  // =============== METHODS ===============

  /**
   * Checks each validation rule for the element (async).
   * 
   * @returns {void}
   */
  var validate = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* () {
      if (!validationRules.value) {
        return;
      }
      if (form$.value.validation === false) {
        return;
      }
      yield asyncForEach(Validators.value, /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator(function* (Validator) {
          yield Validator.validate();
        });
        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }());
      state.value.validated = true;
    });
    return function validate() {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Sets the validators to default state.
   * 
   * @returns {void}
   */
  var resetValidators = () => {
    _.each(Validators.value, Validator => {
      Validator.reset();
    });
    state.value.validated = !validationRules.value;
  };

  /**
   * Flag the element as dirty.
   * 
   * @returns {void}
   * @private
   */
  var dirt = () => {
    state.value.dirty = true;
  };

  /**
   * Removes the element's `dirty` state.
   * 
   * @returns {void}
   */
  var clean = () => {
    state.value.dirty = false;
  };

  /**
   * Initalizes MessageBag service.
   * 
   * @returns {void}
   * @private
   */
  var initMessageBag = () => {
    messageBag.value = new form$.value.$vueform.services.messageBag(validatorErrors);
  };

  /**
   * Initalizes validators.
   * 
   * @returns {void}
   * @private
   */
  var initValidation = () => {
    if (!validationRules.value) {
      return;
    }

    // If the element has rules it does not
    // qualify as validated by default
    state.value.validated = false;
    validatorFactory.value = new form$.value.$vueform.services.validation.factory(path.value, form$.value);
    Validators.value = [];
    _.each(validatorFactory.value.makeAll(validationRules.value), Validator => {
      Validators.value.push(Validator);
    });
  };

  /**
   * Re-initalizes validators when rules have changed.
   * 
   * @returns {void}
   */
  var reinitValidation = () => {
    initValidation();
  };
  return {
    state,
    Validators,
    messageBag,
    dirty,
    validated,
    invalid,
    pending,
    busy,
    errors,
    error,
    validationRules,
    isDanger,
    isSuccess,
    validate,
    dirt,
    clean,
    resetValidators,
    initMessageBag,
    initValidation,
    reinitValidation
  };
};
var text = function text(props, context, dependencies) {
  var {
    state,
    Validators,
    messageBag,
    dirty,
    validated,
    invalid,
    pending,
    errors,
    error,
    validationRules,
    isDanger,
    isSuccess,
    validate,
    dirt,
    clean,
    resetValidators,
    initMessageBag,
    initValidation,
    reinitValidation
  } = base$D(props, context, dependencies);

  // ============== COMPUTED ===============

  /**
   * Whether the element has a validation rule with pending debounce.
   * 
   * @type {boolean}
   */
  var debouncing = computed(() => {
    return _.some(Validators.value, {
      debouncing: true
    });
  });

  /**
   * Whether the element is `pending` or `debouncing`.
   * 
   * @type {boolean}
   */
  var busy = computed(() => {
    return pending.value || debouncing.value;
  });
  return {
    state,
    Validators,
    messageBag,
    dirty,
    validated,
    invalid,
    pending,
    debouncing,
    busy,
    errors,
    error,
    validationRules,
    isDanger,
    isSuccess,
    validate,
    dirt,
    clean,
    resetValidators,
    initMessageBag,
    initValidation,
    reinitValidation
  };
};
var list = function list(props, context, dependencies) {
  // ============ DEPENDENCIES ============

  var {
    state,
    Validators,
    messageBag,
    validationRules,
    dirt,
    initValidation
  } = base$D(props, context, dependencies);
  var form$ = dependencies.form$;
  var children$ = dependencies.children$;

  // ============== COMPUTED ==============

  /**
   * Whether the element's or any of its children's value was modified.
   * 
   * @type {boolean}
   */
  var dirty = computed(() => {
    return _.some(children$.value, {
      available: true,
      dirty: true
    }) || state.value.dirty;
  });

  /**
   * Whether the element and all of its children was already validated at least once.
   * 
   * @type {boolean}
   */
  var validated = computed(() => {
    return !_.some(children$.value, {
      available: true,
      validated: false
    }) && state.value.validated;
  });

  /**
   * Whether the element or any of its children has any failing rules.
   * 
   * @type {boolean}
   */
  var invalid = computed(() => {
    return _.some(children$.value, {
      available: true,
      invalid: true
    }) || _.some(Validators.value, {
      invalid: true
    });
  });

  /**
   * Whether the element or any of its children has any async rules in progress.
   * 
   * @type {boolean}
   */
  var pending = computed(() => {
    return _.some(children$.value, {
      available: true,
      pending: true
    }) || _.some(Validators.value, {
      pending: true
    });
  });

  /**
   * Whether the element or any of its chilren has a validation rule with pending debounce.
   * 
   * @type {boolean}
   */
  var debouncing = computed(() => {
    return _.some(children$.value, {
      available: true,
      debouncing: true
    }) || _.some(Validators.value, {
      debouncing: true
    });
  });

  /**
   * Whether the element or any of its children is `pending` or `debouncing`.
   * 
   * @type {boolean}
   */
  var busy = computed(() => {
    return _.some(children$.value, {
      available: true,
      busy: true
    }) || pending.value || debouncing.value;
  });
  var validatorErrors = computed(() => {
    var validatorErrors = [];
    _.each(Validators.value, Validator => {
      if (Validator.failing) {
        validatorErrors.push(Validator.message);
      }
    });
    return validatorErrors;
  });

  /**
   * The list of errors collected from children.
   * 
   * @type {array}
   * @private
   */
  var childrenErrors = computed(() => {
    var childrenErrors = [];
    _.each(children$.value, element$ => {
      if (!element$.available || element$.isStatic) {
        return;
      }
      _.each(element$.errors, error => {
        childrenErrors.push(error);
      });
    });
    return childrenErrors;
  });

  /**
   * The `validatorErrors` concated with `childrenErrors`.
   * 
   * @type {array}
   * @private
   */
  var baseErrors = computed(() => {
    return validatorErrors.value.concat(childrenErrors.value);
  });
  var errors = computed(() => {
    return messageBag.value.errors;
  });
  var error = computed(() => {
    return _.head(validatorErrors.value);
  });

  // =============== METHODS ==============

  /**
   * Checks each validation rule for the element and validates children (async).
   * 
   * @returns {void}
   */
  var validate = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(function* () {
      yield validateValidators();
      yield validateChildren();
    });
    return function validate() {
      return _ref3.apply(this, arguments);
    };
  }();

  /**
   * Checks each validation rule for the element (async).
   * 
   * @returns {void}
   */
  var validateValidators = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(function* () {
      if (form$.value.validation === false) {
        return;
      }
      yield asyncForEach(Validators.value, /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator(function* (Validator) {
          yield Validator.validate();
        });
        return function (_x2) {
          return _ref5.apply(this, arguments);
        };
      }());
      state.value.validated = true;
    });
    return function validateValidators() {
      return _ref4.apply(this, arguments);
    };
  }();

  /**
   * Validates every child (async).
   * 
   * @returns {void}
   */
  var validateChildren = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(function* () {
      if (form$.value.validation === false) {
        return;
      }
      yield asyncForEach(children$.value, /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator(function* (element$) {
          if (!element$.isStatic) {
            yield element$.validate();
          }
        });
        return function (_x3) {
          return _ref7.apply(this, arguments);
        };
      }());
    });
    return function validateChildren() {
      return _ref6.apply(this, arguments);
    };
  }();
  var clean = () => {
    _.each(children$.value, element$ => {
      if (element$.isStatic) {
        return;
      }
      element$.clean();
    });
    state.value.dirty = false;
  };
  var resetValidators = () => {
    _.each(children$.value, element$ => {
      if (element$.isStatic) {
        return;
      }
      element$.resetValidators();
    });
    _.each(Validators.value, Validator => {
      Validator.reset();
    });
    state.value.validated = !validationRules.value;
  };
  var initMessageBag = () => {
    messageBag.value = new form$.value.$vueform.services.messageBag(baseErrors);
  };
  var reinitValidation = () => {
    initValidation();
    _.each(children$.value, element$ => {
      if (element$.isStatic) {
        return;
      }
      element$.reinitValidation();
    });
  };
  return {
    state,
    Validators,
    messageBag,
    dirty,
    validated,
    invalid,
    pending,
    debouncing,
    busy,
    validatorErrors,
    childrenErrors,
    errors,
    error,
    validationRules,
    validate,
    validateValidators,
    validateChildren,
    dirt,
    clean,
    resetValidators,
    initMessageBag,
    initValidation,
    reinitValidation
  };
};
var multilingual$4 = function multilingual(props, context, dependencies) {
  var {
    rules
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;
  var path = dependencies.path;
  var languages = dependencies.languages;
  var language = dependencies.language;
  var value = dependencies.value;
  var {
    messageBag
  } = text(props, context, dependencies);

  // ================ DATA ================

  var state = ref({
    dirty: {},
    validated: {}
  });
  var Validators = ref({});

  // ============== COMPUTED ===============

  var validationRules = computed(() => {
    var ruleList = {};
    if (!rules.value) {
      return ruleList;
    }
    _.each(languages.value, lang => {
      ruleList[lang] = _.isPlainObject(rules.value) ? rules.value[lang] || null : rules.value;
    });
    return ruleList;
  });

  /**
   * Whether the element's value has been modified in any language.
   * 
   * @type {boolean}
   */
  var dirty = computed(() => {
    return _.some(state.value.dirty, val => {
      return val === true;
    });
  });

  /**
   * Whether all the languages have already been validated at least once.
   * 
   * @type {boolean}
   */
  var validated = computed(() => {
    return !_.some(state.value.validated, val => {
      return val === false;
    });
  });

  /**
   * Whether the element has failing rules in any language.
   * 
   * @type {boolean}
   */
  var invalid = computed(() => {
    var invalid = false;
    _.each(Validators.value, Validators => {
      if (_.some(Validators, {
        invalid: true
      })) {
        invalid = true;
      }
    });
    return invalid;
  });

  /**
   * Whether the element has any async rules in progress in any language.
   * 
   * @type {boolean}
   */
  var pending = computed(() => {
    var pending = false;
    _.each(Validators.value, Validators => {
      if (_.some(Validators, {
        pending: true
      })) {
        pending = true;
      }
    });
    return pending;
  });

  /**
   * Whether the element has a validation rule with pending debounce in any language.
   * 
   * @type {boolean}
   */
  var debouncing = computed(() => {
    var debouncing = false;
    _.each(Validators.value, Validators => {
      if (_.some(Validators, {
        debouncing: true
      })) {
        debouncing = true;
      }
    });
    return debouncing;
  });

  /**
   * Whether the element is `pending` or `debouncing` in any language.
   * 
   * @type {boolean}
   */
  var busy = computed(() => {
    return pending.value || debouncing.value;
  });
  var validatorErrors = computed(() => {
    var errors = [];
    _.each(Validators.value, (Validators, language) => {
      _.each(Validators, Validator => {
        if (Validator.failing) {
          errors.push(Validator.message + ' (' + language + ')');
        }
      });
    });
    return errors;
  });
  var errors = computed(() => {
    return messageBag.value.errors;
  });
  var error = computed(() => {
    var error = null;
    _.each(Validators.value[language.value], Validator => {
      if (error !== null) {
        return false;
      }
      if (Validator.failing) {
        error = Validator.message;
      }
    });
    var errors = messageBag.value.prepends ? messageBag.value.prepends.errors : [];
    if (error !== null) {
      errors = _.concat(errors, [error]);
    }
    errors = _.concat(errors, messageBag.value.appends ? messageBag.value.appends.errors : []);
    return _.head(errors);
  });

  /**
   * Whether the field has errors.
   * 
   * @type {boolean}
   */
  var isDanger = computed(() => {
    return error.value !== null && error.value !== undefined;
  });

  /**
   * Whether the field has been filled in successfully.
   * 
   * @type {boolean}
   */
  var isSuccess = computed(() => {
    return validationRules.value[language.value] && validationRules.value[language.value].length > 0 && state.value.validated[language.value] && !_.some(Validators.value[language.value], {
      invalid: true
    }) || (!validationRules.value[language.value] || !validationRules.value[language.value].length) && state.value.dirty[language.value];
  });

  // =============== METHODS ===============

  /**
   * Checks each validation rule for the element in every language (async).
   * 
   * @returns {void}
   */
  var validate = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(function* () {
      yield asyncForEach(languages.value, /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator(function* (lang) {
          yield validateLanguage(lang);
        });
        return function (_x4) {
          return _ref9.apply(this, arguments);
        };
      }());
    });
    return function validate() {
      return _ref8.apply(this, arguments);
    };
  }();

  /**
   * Checks each validation rule for the element in a specific language (async).
   * 
   * @param {string} lang the langauage to check (defaults to currently selected language)
   * @returns {void}
   */
  var validateLanguage = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(function* () {
      var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : language.value;
      if (form$.value.validation === false) {
        return;
      }
      if (!Validators.value[lang]) {
        return;
      }
      yield asyncForEach(Validators.value[lang], /*#__PURE__*/function () {
        var _ref11 = _asyncToGenerator(function* (Validator) {
          yield Validator.validate(value.value[lang]);
        });
        return function (_x5) {
          return _ref11.apply(this, arguments);
        };
      }());
      state.value.validated[lang] = true;
    });
    return function validateLanguage() {
      return _ref10.apply(this, arguments);
    };
  }();
  var resetValidators = () => {
    _.each(languages.value, lang => {
      _.each(Validators.value[lang], Validator => {
        Validator.reset();
      });
      _.each(validationRules.value, (r, lang) => {
        state.value.validated[lang] = r.length > 0 ? false : true;
      });
    });
  };
  var dirt = () => {
    state.value.dirty[language.value] = true;
  };
  var clean = () => {
    state.value.dirty[language.value] = false;
  };

  /**
   * Inits the default `state` object.
   * 
   * @returns {void}
   * @private
   */
  var initState = () => {
    var dirty = {};
    var validated = {};
    _.each(languages.value, lang => {
      dirty[lang] = false;
    });
    _.each(languages.value, lang => {
      validated[lang] = true;
    });
    state.value = {
      dirty,
      validated
    };
  };
  var initMessageBag = () => {
    messageBag.value = new form$.value.$vueform.services.messageBag(validatorErrors);
  };
  var initValidation = () => {
    if (!validationRules.value) {
      return;
    }

    // If the element has rules it does not
    // qualify as validated by default
    _.each(validationRules.value, (r, lang) => {
      state.value.validated[lang] = r !== null && r.length > 0 ? false : true;
    });
    var factory = new form$.value.$vueform.services.validation.factory(path.value, form$.value);
    Validators.value = {};
    _.each(validationRules.value, (languageRules, lang) => {
      if (languageRules === null) {
        return;
      }
      if (!Validators.value[lang]) {
        Validators.value = Object.assign({}, Validators.value, {
          [lang]: []
        });
      }
      _.each(factory.makeAll(languageRules), Validator => {
        Validators.value[lang].push(Validator);
      });
    });
  };
  var reinitValidation = () => {
    initValidation();
  };
  return {
    state,
    Validators,
    messageBag,
    dirty,
    validated,
    invalid,
    pending,
    debouncing,
    busy,
    errors,
    error,
    validationRules,
    isDanger,
    isSuccess,
    validate,
    validateLanguage,
    dirt,
    clean,
    resetValidators,
    initState,
    initMessageBag,
    initValidation,
    reinitValidation
  };
};
var slider$1 = function slider(props, context, dependencies) {
  // ============ DEPENDENCIES ============

  var value = dependencies.value;
  var {
    state,
    Validators,
    messageBag,
    dirty,
    validated,
    invalid,
    pending,
    busy,
    errors,
    error,
    validationRules,
    dirt,
    clean,
    resetValidators,
    initMessageBag,
    initValidation,
    reinitValidation
  } = base$D(props, context, dependencies);

  // =============== METHODS ==============

  var validate = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(function* () {
      if (!validationRules.value) {
        return;
      }
      if (_.isArray(value.value)) {
        // going through each value of the slider
        // and validate them all for the same field
        yield asyncForEach(value.value, /*#__PURE__*/function () {
          var _ref13 = _asyncToGenerator(function* (val) {
            yield asyncForEach(Validators.value, /*#__PURE__*/function () {
              var _ref14 = _asyncToGenerator(function* (Validator) {
                yield Validator.validate(val);
              });
              return function (_x7) {
                return _ref14.apply(this, arguments);
              };
            }());
            if (invalid.value) {
              return false;
            }
          });
          return function (_x6) {
            return _ref13.apply(this, arguments);
          };
        }());
      } else {
        yield asyncForEach(Validators.value, /*#__PURE__*/function () {
          var _ref15 = _asyncToGenerator(function* (Validator) {
            yield Validator.validate(value.value);
          });
          return function (_x8) {
            return _ref15.apply(this, arguments);
          };
        }());
      }
      state.value.validated = true;
    });
    return function validate() {
      return _ref12.apply(this, arguments);
    };
  }();
  return {
    state,
    Validators,
    messageBag,
    dirty,
    validated,
    invalid,
    pending,
    busy,
    errors,
    error,
    validationRules,
    validate,
    dirt,
    clean,
    resetValidators,
    initMessageBag,
    initValidation,
    reinitValidation
  };
};
var file$1 = function file(props, context, dependencies) {
  // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;
  var value = dependencies.value;
  var uploading = dependencies.uploading;
  var removing = dependencies.removing;
  var {
    state,
    Validators,
    messageBag,
    dirty,
    validated,
    invalid,
    pending,
    errors,
    error,
    validationRules,
    dirt,
    clean,
    resetValidators,
    initMessageBag,
    initValidation,
    reinitValidation
  } = base$D(props, context, dependencies);

  // ============== COMPUTED ==============

  /**
   * Whether the element is `pending`, `debouncing`, `uploading` or `removing`.
   * 
   * @type {boolean}
   */
  var busy = computed(() => {
    return pending.value || uploading.value || removing.value;
  });

  // =============== METHODS ==============

  /**
   * Checks each validation rule for the element (async). File element will only validate for `min`, `max`, `between`, `size`, `mimetypes`, `mimes`, `dimensions`, `file`, `image`, `gt`, `gte`, `lt` and `lte` rules and only before the temporary files are uploaded.
   * 
   * @returns {void}
   */
  var validate = /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator(function* () {
      if (!validationRules.value) {
        return;
      }
      if (form$.value.validation === false) {
        return;
      }
      var restricted = ['min', 'max', 'between', 'size', 'mimetypes', 'mimes', 'dimensions', 'file', 'image', 'gt', 'gte', 'lt', 'lte'];
      yield asyncForEach(Validators.value, /*#__PURE__*/function () {
        var _ref17 = _asyncToGenerator(function* (Validator) {
          if (!(value.value instanceof File) && !!value.value && restricted.indexOf(Validator.name) !== -1) {
            return;
          }
          yield Validator.validate();
        });
        return function (_x9) {
          return _ref17.apply(this, arguments);
        };
      }());
      state.value.validated = true;
    });
    return function validate() {
      return _ref16.apply(this, arguments);
    };
  }();
  return {
    state,
    Validators,
    messageBag,
    dirty,
    validated,
    invalid,
    pending,
    busy,
    errors,
    error,
    validationRules,
    validate,
    dirt,
    clean,
    resetValidators,
    initMessageBag,
    initValidation,
    reinitValidation
  };
};
var location$1 = function location(props, context, dependencies) {
  var {
    displayKey
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;
  var value = dependencies.value;
  var {
    state,
    Validators,
    messageBag,
    dirty,
    validated,
    invalid,
    pending,
    debouncing,
    busy,
    errors,
    error,
    validationRules,
    isSuccess,
    isDanger,
    dirt,
    clean,
    resetValidators,
    initMessageBag,
    initValidation,
    reinitValidation
  } = text(props, context, dependencies);

  // =============== METHODS ==============

  /**
   * Checks each validation rule for the element on [`displayKey`](#option-display-key) property of the location object (async).
   * 
   * @returns {void}
   */
  var validate = /*#__PURE__*/function () {
    var _ref18 = _asyncToGenerator(function* () {
      if (!validationRules.value) {
        return;
      }
      if (form$.value.validation === false) {
        return;
      }
      yield asyncForEach(Validators.value, /*#__PURE__*/function () {
        var _ref19 = _asyncToGenerator(function* (Validator) {
          yield Validator.validate(value.value[displayKey.value]);
        });
        return function (_x10) {
          return _ref19.apply(this, arguments);
        };
      }());
      state.value.validated = true;
    });
    return function validate() {
      return _ref18.apply(this, arguments);
    };
  }();
  return {
    state,
    Validators,
    messageBag,
    dirty,
    validated,
    invalid,
    pending,
    debouncing,
    busy,
    errors,
    error,
    validationRules,
    isSuccess,
    isDanger,
    validate,
    dirt,
    clean,
    resetValidators,
    initMessageBag,
    initValidation,
    reinitValidation
  };
};
var group$2 = list;
var object$3 = list;

var base$C = function base(props, context, dependencies) {
  var {
    name,
    floating,
    placeholder,
    label,
    fieldName
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;

  // ============== COMPUTED ==============

  /**
   * The generic name of the element constructed from label / floating or element name.
   * 
   * @type {string}
   * @private.
   */
  var genericName = computed(() => {
    if (fieldName && fieldName.value) {
      return fieldName.value;
    } else if (label && label.value) {
      return label.value;
    } else if (floating && floating.value) {
      return floating.value;
    } else if (placeholder && placeholder.value && form$.value.options.floatPlaceholders) {
      return placeholder.value;
    } else {
      return _.upperFirst(name.value).replace(/_|-/g, ' ');
    }
  });
  return {
    genericName
  };
};
var file = function file(props, context, dependencies) {
  var {
    name,
    embed,
    label,
    fieldName
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;
  var filename = dependencies.filename || ref(null);

  // ============== COMPUTED ==============

  /**
   * The generic name of the element constructed from label / floating, element name or default file name if name is a number.
   * 
   * @type {string}
   * @private.
   */
  var genericName = computed(() => {
    if (embed.value && filename.value) {
      return filename.value;
    } else if (fieldName && fieldName.value) {
      return fieldName.value;
    } else if (label.value) {
      return label.value;
    } else {
      return /^\d+$/.test(name.value) ? form$.value.__('vueform.elements.file.defaultName') : _.upperFirst(name.value).replace(/_|-/g, ' ');
    }
  });
  return {
    genericName
  };
};

var base$B = function base(props, context, dependencies) {
  var _options$value, _options$value2;
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var {
    name,
    type
  } = toRefs(props);

  // ============ DEPENDENCIES =============

  var parent = dependencies.parent;
  var defaultValue = dependencies.defaultValue;
  var dataPath = dependencies.dataPath;
  var form$ = dependencies.form$;

  // ================ DATA =================

  /**
   * The initial value of the element.
   * 
   * @type {any}
   * @private
   */
  var initialValue = ref(undefined);
  if (form$.value.isSync) {
    initialValue.value = _.get(form$.value.model, dataPath.value);
  } else if (parent.value && ['group', 'object', 'list', 'multifile'].indexOf(parent.value.type) !== -1) {
    initialValue.value = parent.value.value[name.value];
  }

  // ============== COMPUTED ===============

  /**
   * The store for the value of the element when we're not using external data (form's `v-model`).
   * 
   * @type {any}
   * @private
   */
  var internalValue = ref(defaultValue.value instanceof File ? defaultValue.value : _.cloneDeep(defaultValue.value));

  /**
   * The value of the element.
   * 
   * @type {any}
   */
  var value = computed({
    get: ((_options$value = options.value) === null || _options$value === void 0 ? void 0 : _options$value.get) || function () {
      var value;
      if (form$.value.isSync) {
        value = _.get(form$.value.model, dataPath.value);
      } else if (parent.value && ['group', 'object', 'list', 'multifile'].indexOf(parent.value.type) !== -1) {
        value = parent.value.value[name.value];
      } else {
        value = internalValue.value;
      }
      return value !== undefined ? value : defaultValue.value instanceof File ? defaultValue.value : _.cloneDeep(defaultValue.value);
    },
    set: ((_options$value2 = options.value) === null || _options$value2 === void 0 ? void 0 : _options$value2.set) || function (val) {
      if (form$.value.isSync) {
        form$.value.updateModel(dataPath.value, val);
      } else if (parent.value && ['list', 'multifile'].indexOf(parent.value.type) !== -1) {
        var newValue = parent.value.value.map((v, k) => k == name.value ? val : v);
        parent.value.update(newValue);
      } else if (parent.value && ['group', 'object'].indexOf(parent.value.type) !== -1) {
        parent.value.value = Object.assign({}, parent.value.value, {
          [name.value]: val
        });
      } else {
        internalValue.value = val;
      }
    }
  });

  /**
   * Intermediary value between element's value and field's `v-model`. It is required when we need to transform the value format between the element and its field.
   * 
   * @type {any}
   */
  var model = computed({
    get() {
      return value.value;
    },
    set(val) {
      value.value = val;
    }
  });
  if (options.init === undefined || options.init !== false) {
    // If element's value was undefined initially (not found in v-model/data) then we need to set it's value
    if (initialValue.value === undefined) {
      value.value = defaultValue.value instanceof File ? defaultValue.value : _.cloneDeep(defaultValue.value);
    }
  }
  watch(type, () => {
    value.value = defaultValue.value instanceof File ? defaultValue.value : _.cloneDeep(defaultValue.value);
  });
  return {
    initialValue,
    internalValue,
    value,
    model
  };
};
var object$2 = function object(props, context, dependencies) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var {
    initialValue,
    internalValue,
    value
  } = base$B(props, context, dependencies, {
    init: false
  });

  // ============ DEPENDENCIES =============

  var defaultValue = dependencies.defaultValue;

  // ================ HOOKS ================

  if (options.init === undefined || options.init !== false) {
    if (initialValue.value === undefined) {
      value.value = defaultValue.value;
    } else {
      value.value = Object.assign({}, defaultValue.value, value.value);
    }
  }
  return {
    internalValue,
    value
  };
};
var group$1 = function group(props, context, dependencies) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  // ============ DEPENDENCIES =============

  var parent = dependencies.parent;
  var dataPath = dependencies.dataPath;
  var defaultValue = dependencies.defaultValue;
  var children$Array = dependencies.children$Array;
  var form$ = dependencies.form$;

  // ================ DATA =================

  /**
   * The store for the value of the element when we're not using external data (form's `v-model`).
   * 
   * @type {any}
   * @private
   */
  var internalValue = ref(_.cloneDeep(defaultValue.value));

  // ============== COMPUTED ===============

  var value = computed(options.value || {
    get() {
      var value;
      if (form$.value.isSync) {
        value = dataPath.value ? _.get(form$.value.model, dataPath.value) : form$.value.model;
      } else if (parent.value && ['group', 'object'].indexOf(parent.value.type) !== -1) {
        value = parent.value.value;
      } else {
        value = internalValue.value;
      }

      // Filter out children values that parent has but not among group elements
      var childKeys = children$Array.value.reduce((all, child$) => {
        if (child$.isStatic || !child$) {
          return all;
        }
        var keys = [];
        if (!child$.flat) {
          keys.push(child$.name);
        } else {
          var addGroupKeys = children$Array => {
            children$Array.forEach(child$ => {
              if (!child$.isStatic && child$.flat) {
                addGroupKeys(child$.children$Array);
              } else if (!child$.isStatic) {
                keys.push(child$.name);
              }
            });
          };
          addGroupKeys(child$.children$Array);
        }
        return all.concat(keys);
      }, []);
      var tempValue = {};
      childKeys.forEach(key => {
        if (value[key] !== undefined) {
          tempValue[key] = value[key];
        }
      });
      value = tempValue;
      return value !== undefined ? value : _.cloneDeep(defaultValue.value);
    },
    set(val) {
      if (form$.value.isSync) {
        form$.value.updateModel(dataPath.value, val);
      } else if (parent.value && ['group', 'object'].indexOf(parent.value.type) !== -1) {
        parent.value.value = Object.assign({}, parent.value.value, val);
      } else {
        internalValue.value = val;
      }
    }
  });
  return {
    value
  };
};
var multilingual$3 = function multilingual(props, context, dependencies) {
  var {
    value
  } = base$B(props, context, dependencies);

  // ============ DEPENDENCIES =============

  var language = dependencies.language;

  // ============== COMPUTED ===============

  var model = computed({
    get() {
      return value.value[language.value];
    },
    set(val) {
      value.value = Object.assign({}, value.value, {
        [language.value]: val
      });
    }
  });
  return {
    value,
    model
  };
};
var date$2 = function date(props, context, dependencies) {
  var {
    name
  } = toRefs(props);

  // ============ DEPENDENCIES =============

  var parent = dependencies.parent;
  var valueDateFormat = dependencies.valueDateFormat;
  var defaultValue = dependencies.defaultValue;
  var dataPath = dependencies.dataPath;
  var form$ = dependencies.form$;

  // ================= PRE =================

  /**
   * The store for the value of the element when we're not using external data (form's `v-model`).
   * 
   * @type {any}
   * @private
   */
  var internalValue = ref(defaultValue.value instanceof File ? defaultValue.value : _.cloneDeep(defaultValue.value));
  var {
    value,
    initialValue
  } = base$B(props, context, dependencies, {
    value: {
      get() {
        var value;
        if (form$.value.isSync) {
          value = _.get(form$.value.model, dataPath.value);
        } else if (parent.value && ['object', 'list', 'multifile'].indexOf(parent.value.type) !== -1) {
          value = parent.value.value[name.value];
        } else {
          value = internalValue.value;
        }
        return value !== undefined ? value : defaultValue.value instanceof File ? defaultValue.value : _.cloneDeep(defaultValue.value);
      },
      set(val) {
        // If the value is not a Date object check if it is matching the value format
        if (!_.isEmpty(val) && !(val instanceof Date) && valueDateFormat.value !== false) {
          checkDateFormat(valueDateFormat.value, val);
        }
        val = val && val instanceof Date && valueDateFormat.value !== false ? moment(val).format(valueDateFormat.value) : val;
        if (form$.value.isSync) {
          form$.value.updateModel(dataPath.value, val);
        } else if (parent.value && ['list', 'multifile'].indexOf(parent.value.type) !== -1) {
          var newValue = parent.value.value.map((v, k) => k == name.value ? val : v);
          parent.value.update(newValue);
        } else if (parent.value && ['object'].indexOf(parent.value.type) !== -1) {
          parent.value.value = Object.assign({}, parent.value.value, {
            [name.value]: val
          });
        } else {
          internalValue.value = val;
        }
      }
    }
  });

  // ============== COMPUTED ===============

  var model = computed(() => {
    return value.value instanceof Date || !value.value ? value.value : moment(value.value, valueDateFormat.value).toDate();
  });
  return {
    value,
    model,
    initialValue,
    internalValue
  };
};
var dates$3 = function dates(props, context, dependencies) {
  var {
    name
  } = toRefs(props);

  // ============ DEPENDENCIES =============

  var parent = dependencies.parent;
  var valueDateFormat = dependencies.valueDateFormat;
  var defaultValue = dependencies.defaultValue;
  var dataPath = dependencies.dataPath;
  var form$ = dependencies.form$;

  // ================= PRE =================

  /**
   * The store for the value of the element when we're not using external data (form's `v-model`).
   * 
   * @type {any}
   * @private
   */
  var internalValue = ref(defaultValue.value instanceof File ? defaultValue.value : _.cloneDeep(defaultValue.value));
  var {
    value,
    initialValue
  } = base$B(props, context, dependencies, {
    value: {
      get() {
        var value;
        if (form$.value.isSync) {
          value = _.get(form$.value.model, dataPath.value);
        } else if (parent.value && ['object', 'list', 'multifile'].indexOf(parent.value.type) !== -1) {
          value = parent.value.value[name.value];
        } else {
          value = internalValue.value;
        }
        return value !== undefined ? value : defaultValue.value instanceof File ? defaultValue.value : _.cloneDeep(defaultValue.value);
      },
      set(val) {
        if (!Array.isArray(val)) {
          val = [val];
        }
        val = val.map(v => {
          if (!_.isEmpty(v) && !(v instanceof Date) && valueDateFormat.value !== false) {
            checkDateFormat(valueDateFormat.value, v);
          }
          return v && v instanceof Date && valueDateFormat.value !== false ? moment(v).format(valueDateFormat.value) : v;
        });
        if (form$.value.isSync) {
          form$.value.updateModel(dataPath.value, val);
        } else if (parent.value && ['list', 'multifile'].indexOf(parent.value.type) !== -1) {
          var newValue = parent.value.value.map((v, k) => k == name.value ? val : v);
          parent.value.update(newValue);
        } else if (parent.value && ['object'].indexOf(parent.value.type) !== -1) {
          parent.value.value = Object.assign({}, parent.value.value, {
            [name.value]: val
          });
        } else {
          internalValue.value = val;
        }
      }
    }
  });

  // ============== COMPUTED ===============

  var model = computed(() => {
    return value.value.map(v => {
      return v instanceof Date || !v ? v : moment(v, valueDateFormat.value).toDate();
    });
  });
  return {
    value,
    model,
    initialValue,
    internalValue
  };
};

var base$A = function base(props, context, dependencies) {
  // ============== COMPUTED ===============

  /**
   * The null value of the element.
   * 
   * @type {any}
   * @private
   */
  var nullValue = computed(() => {
    return null;
  });
  return {
    nullValue
  };
};
var array$1 = function array(props, context, dependencies) {
  // ============== COMPUTED ===============

  var nullValue = computed(() => {
    return [];
  });
  return {
    nullValue
  };
};
var boolean = function boolean(props, context, dependencies) {
  var {
    falseValue
  } = toRefs(props);

  // ============== COMPUTED ===============

  var nullValue = computed(() => {
    return falseValue.value;
  });
  return {
    nullValue
  };
};
var min = function min(props, context, dependencies) {
  var {
    min,
    default: default_
  } = toRefs(props);

  // ============== COMPUTED ===============

  var nullValue = computed(() => {
    return default_.value !== undefined && _.isArray(default_.value) ? default_.value.map(v => min.value) : min.value;
  });
  return {
    nullValue
  };
};
var object$1 = function object(props, context, dependencies) {
  // ============== COMPUTED ===============

  var nullValue = computed(() => {
    return {};
  });
  return {
    nullValue
  };
};
var location = function location(props, context, dependencies) {
  // ============== COMPUTED ===============

  var nullValue = computed(() => {
    return {
      country: null,
      country_code: null,
      state: null,
      state_code: null,
      city: null,
      zip: null,
      address: null,
      formatted_address: null,
      lat: null,
      lng: null
    };
  });
  return {
    nullValue
  };
};
var multilingual$2 = function multilingual(props, context, dependencies) {
  // ============ DEPENDENCIES ============

  var languages = dependencies.languages;

  // ============== COMPUTED ===============

  var nullValue = computed(() => {
    var value = {};
    _.each(languages.value, code => {
      value[code] = null;
    });
    return value;
  });
  return {
    nullValue
  };
};

var base$z = function base(props, context, dependencies) {
  var {
    trueValue,
    falseValue
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var update = dependencies.update;

  // =============== METHODS ==============

  /**
   * Sets the toggle to `on` ([`trueValue`](#option-true-value)).
   *
   * @returns {void}
   */
  var check = () => {
    update(trueValue.value);
  };

  /**
   * Sets the toggle to `off` ([`falseValue`](#option-false-value)).
   *
   * @returns {void}
   */
  var uncheck = () => {
    update(falseValue.value);
  };
  return {
    check,
    uncheck
  };
};
var checkbox = function checkbox(props, context, dependencies) {
  var {
    trueValue,
    falseValue
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var update = dependencies.update;

  // =============== METHODS ==============

  /**
   * Checks the checkbox.
   *
   * @returns {void}
   */
  var check = () => {
    update(trueValue.value);
  };

  /**
   * Unchecks the checkbox.
   *
   * @returns {void}
   */
  var uncheck = () => {
    update(falseValue.value);
  };
  return {
    check,
    uncheck
  };
};

var HasChange = {
  props: {
    onChange: {
      required: false,
      type: [Function],
      default: null,
      private: true
    }
  }
};

var HasData = {
  props: {
    formatData: {
      required: false,
      type: [Function],
      default: null
    },
    formatLoad: {
      required: false,
      type: [Function],
      default: null
    },
    submit: {
      required: false,
      type: [Boolean],
      default: true
    }
  }
};

var HasValidation = {
  props: {
    rules: {
      required: false,
      type: [Array, String, Object],
      default: null
    },
    messages: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    fieldName: {
      required: false,
      type: [String],
      '@default': 'name|label'
    }
  }
};

var CheckboxElement = {
  name: 'CheckboxElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'checkbox',
      private: true
    },
    default: {
      required: false,
      type: [String, Boolean, Number],
      default: undefined // falseValue
    },

    id: {
      required: false,
      type: [String],
      default: null
    },
    text: {
      required: false,
      type: [String],
      default: null
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    trueValue: {
      required: false,
      type: [Boolean, String, Number],
      default: true
    },
    falseValue: {
      required: false,
      type: [Boolean, String, Number],
      default: false
    }
  },
  setup(props, context) {
    context.features = [base$14, base$13, base$Q, base$G, base$K, base$N, boolean, base$O, base$16, base$L, base$E, base$$, base$D, base$B, base$F, base$W, base$C, base$U, base$T, base$P, base$V, base$S, checkbox, checkbox$1];
    context.slots = ['default', 'label', 'info', 'description', 'before', 'between', 'after'];
    return _objectSpread2$1({}, base$H(props, context));
  }
};

var base$y = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============

  var value = dependencies.value;
  var resolvedOptions = dependencies.resolvedOptions;

  // =============== METHODS ==============

  /**
   * Toggle's a checkbox's value.
   *
   * @param {string|number} value* value to toggle
   * @returns {void}
   */
  var toggle = val => {
    if (value.value.indexOf(String(val)) === -1 && value.value.indexOf(Number(val)) === -1) {
      check(val);
    } else {
      uncheck(val);
    }
  };

  /**
   * Checks one or more checkboxes.
   *
   * @param {array|string|number} values* value(s) to check
   * @returns {void}
   */
  var check = values => {
    if (!_.isArray(values)) {
      values = [values];
    }
    var items = _.clone(value.value);
    _.each(values, item => {
      if (items.indexOf(String(item)) === -1 && items.indexOf(Number(item)) === -1) {
        items.push(item);
      }
    });
    value.value = items;
  };

  /**
   * Unchecks one or more checkboxes.
   *
   * @param {array|string|number} values* value(s) to check
   * @returns {void}
   */
  var uncheck = values => {
    if (!_.isArray(values)) {
      values = [values];
    }
    var items = _.clone(value.value);
    _.each(values, item => {
      var index = items.indexOf(String(item));
      if (index === -1) {
        index = items.indexOf(Number(item));
      }
      if (index !== -1) {
        items.splice(index, 1);
      }
    });
    value.value = items;
  };

  /**
   * Checks all checkboxes.
   *
   * @returns {void}
   */
  var checkAll = () => {
    check(resolvedOptions.value.map(o => o.value));
  };

  /**
   * Unchecks all checkboxes.
   *
   * @returns {void}
   */
  var uncheckAll = () => {
    uncheck(resolvedOptions.value.map(o => o.value));
  };
  return {
    toggle,
    check,
    uncheck,
    checkAll,
    uncheckAll
  };
};

var base$x = function base(props, context, dependencies) {
  var {
    items,
    valueProp,
    labelProp,
    dataKey,
    searchParam
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var isNative = dependencies.isNative;
  var disable = dependencies.disable;
  var enable = dependencies.enable;
  var input = dependencies.input;
  var el$ = dependencies.el$;
  var form$ = dependencies.form$;

  // ================ DATA ================

  /**
   * Contains the fetched items when using async `items`.
   * 
   * @type {array|object}
   * @default null
   * @private
   */
  var options = ref(null);

  // ============== COMPUTED ==============

  /**
   * Contains the resolved options. 
   * 
   * @type {array}
   */
  var resolvedOptions = computed(() => {
    if (!isNative.value) {
      return options.value;
    }
    var nativeItems = [];
    _.each(options.value, (item, key) => {
      if ([null, undefined].indexOf(item) !== -1) {
        return;
      }
      if (Array.isArray(options.value) && typeof item === 'object') {
        if (item[valueProp.value] === undefined) {
          console.warn('You must define `value` property for each option when using an array of objects options for select element');
        }
        nativeItems.push({
          value: item[valueProp.value],
          label: item[labelProp.value]
        });
      } else if (Array.isArray(options.value)) {
        nativeItems.push({
          value: item,
          label: item
        });
      } else {
        nativeItems.push({
          value: key,
          label: item
        });
      }
    });
    return nativeItems;
  });

  // =============== METHODS ==============

  /**
   * Fetches & updates select options when using `async` options. Receives [`el$`](#property-el) as first param.
   * 
   * @param {boolean} disable* whether the input field should be disabled while fetching options
   * @returns {void} 
   */
  var updateItems = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* () {
      var shouldDisable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (!isNative.value) {
        var _input$value;
        yield (_input$value = input.value) === null || _input$value === void 0 ? void 0 : _input$value.resolveOptions();
        return;
      }
      if (shouldDisable) {
        disable();
      }
      if (typeof items.value === 'string') {
        yield resolveOptionsFromUrl();
      } else {
        yield resolveOptionsFromFunction();
      }
      if (shouldDisable) {
        enable();
      }
    });
    return function updateItems() {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Resolves options from url.
   * 
   * @return {void}
   * @private
   */
  var resolveOptionsFromUrl = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* () {
      try {
        var _yield$form$$value$$v;
        var optionList = ((_yield$form$$value$$v = yield form$.value.$vueform.services.axios.get(items.value)) === null || _yield$form$$value$$v === void 0 ? void 0 : _yield$form$$value$$v.data) || [];
        if (dataKey && dataKey.value && Object.keys(optionList).length) {
          optionList = _.get(optionList, dataKey.value) || [];
        }
        options.value = optionList;
      } catch (e) {
        options.value = [];
        console.warn("Couldn't resolve items from ".concat(items.value), e);
      }
    });
    return function resolveOptionsFromUrl() {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Creates an async function returning options from url.
   * 
   * @return {void}
   * @private
   */
  var createAsyncOptionsFromUrl = () => {
    return /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator(function* (query) {
        var _yield$form$$value$$v2;
        var optionList = ((_yield$form$$value$$v2 = yield form$.value.$vueform.services.axios.get("".concat(items.value).concat(items.value.match(/\?/) ? '&' : '?').concat(searchParam.value, "=").concat(query || ''))) === null || _yield$form$$value$$v2 === void 0 ? void 0 : _yield$form$$value$$v2.data) || [];
        if (dataKey && dataKey.value && Object.keys(optionList).length) {
          optionList = _.get(optionList, dataKey.value) || [];
        }
        return optionList;
      });
      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }();
  };

  /**
   * Resolves options from function.
   * 
   * @return {void}
   * @private
   */
  var resolveOptionsFromFunction = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(function* () {
      try {
        options.value = (yield items.value(el$.value)) || [];
      } catch (e) {
        options.value = [];
        console.warn("Couldn't resolve items from async function", e);
      }
    });
    return function resolveOptionsFromFunction() {
      return _ref4.apply(this, arguments);
    };
  }();

  /**
   * Resolves items.
   * 
   * @return {void}
   * @private
   */
  var resolveOptions = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(function* (n, o) {
      if (typeof items.value === 'function' && isNative.value) {
        yield resolveOptionsFromFunction();
      } else if (!_.isEqual(n, o) || n === undefined && o === undefined) {
        if (typeof items.value === 'string' && isNative.value) {
          yield resolveOptionsFromUrl();
        } else if (typeof items.value === 'string' && !isNative.value) {
          options.value = createAsyncOptionsFromUrl();
        } else {
          options.value = items.value;
        }
      }
    });
    return function resolveOptions(_x2, _x3) {
      return _ref5.apply(this, arguments);
    };
  }();

  // ================ HOOKS ===============

  resolveOptions();
  watch(items, resolveOptions);
  watch(isNative, resolveOptions);
  return {
    resolvedOptions,
    updateItems
  };
};
var checkboxgroup = function checkboxgroup(props, context, dependencies) {
  var {
    items
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var disableAll = dependencies.disableAll;
  var enableAll = dependencies.enableAll;
  var el$ = dependencies.el$;
  var form$ = dependencies.form$;

  // ================ DATA ================

  /**
   * Contains the fetched items when using async `items`.
   * 
   * @type {array|object}
   * @default null
   * @private
   */
  var options = ref(null);

  // ============== COMPUTED ==============

  /**
   * Contains the available items. If [`items`](#option-items) are async this contains the resolved items.
   * 
   * @type {array}
   */
  var resolvedOptions = computed(() => {
    var resolvedOptions = [];
    _.each(options.value, (item, key) => {
      if ([null, undefined].indexOf(item) !== -1) {
        return;
      }

      // [{a:1},{b:2}]
      if (Array.isArray(options.value) && typeof item === 'object') {
        if (item.value === undefined) {
          console.warn('You must define `value` property for each item when using an array of objects options');
        }
        resolvedOptions.push(item);
      }

      // ['a', 'b']
      else if (Array.isArray(options.value)) {
        resolvedOptions.push({
          value: item,
          label: item
        });
      }

      // {a:{label:1},b:{label:2}}
      else if (typeof item === 'object') {
        resolvedOptions.push(_objectSpread2$1(_objectSpread2$1({}, item), {}, {
          value: key
        }));
      }

      // {a:1,b:2}
      else {
        resolvedOptions.push({
          label: item,
          value: key
        });
      }
    });
    return resolvedOptions;
  });

  // =============== METHODS ==============

  /**
   * Fetches & updates items when using `async` items.
   * 
   * @param {boolean} disable* whether the input field should be disabled while fetching options
   * @returns {void} 
   */
  var updateItems = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(function* () {
      var shouldDisable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (shouldDisable) {
        disableAll();
      }
      if (typeof items.value === 'string') {
        yield resolveOptionsFromUrl();
      } else {
        yield resolveOptionsFromFunction();
      }
      if (shouldDisable) {
        enableAll();
      }
    });
    return function updateItems() {
      return _ref6.apply(this, arguments);
    };
  }();

  /**
   * Resolves options from url.
   * 
   * @return {void}
   * @private
   */
  var resolveOptionsFromUrl = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(function* () {
      try {
        var _yield$form$$value$$v3;
        options.value = ((_yield$form$$value$$v3 = yield form$.value.$vueform.services.axios.get(items.value)) === null || _yield$form$$value$$v3 === void 0 ? void 0 : _yield$form$$value$$v3.data) || [];
      } catch (e) {
        options.value = [];
        console.warn("Couldn't resolve items from ".concat(items.value), e);
      }
    });
    return function resolveOptionsFromUrl() {
      return _ref7.apply(this, arguments);
    };
  }();

  /**
   * Resolves options from function. Receives [`el$`](#property-el) as first param.
   * 
   * @return {void}
   * @private
   */
  var resolveOptionsFromFunction = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(function* () {
      try {
        options.value = (yield items.value(el$.value)) || [];
      } catch (e) {
        options.value = [];
        console.warn("Couldn't resolve items from async function", e);
      }
    });
    return function resolveOptionsFromFunction() {
      return _ref8.apply(this, arguments);
    };
  }();

  /**
   * Resolves items.
   * 
   * @return {void}
   * @private
   */
  var resolveOptions = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(function* () {
      if (typeof items.value === 'function') {
        yield resolveOptionsFromFunction();
      } else if (typeof items.value === 'string') {
        yield resolveOptionsFromUrl();
      } else {
        options.value = items.value;
      }
    });
    return function resolveOptions() {
      return _ref9.apply(this, arguments);
    };
  }();

  // ================ HOOKS ===============

  resolveOptions();
  watch(items, resolveOptions);
  return {
    resolvedOptions,
    updateItems
  };
};
var radiogroup = checkboxgroup;

var CheckboxgroupElement = {
  name: 'CheckboxgroupElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'checkboxgroup',
      private: true
    },
    default: {
      required: false,
      type: [Array],
      default: () => []
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    items: {
      required: false,
      type: [Object, Array, Function, String],
      default: () => ({})
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    disables: {
      required: false,
      type: [Array],
      default: () => []
    }
  },
  setup(props, context) {
    context.features = [base$14, base$13, base$Q, base$K, array$1, base$O, base$16, checkboxgroup$2, checkboxgroup$3, checkboxgroup, base$E, base$$, base$D, base$B, base$y, base$F, base$W, base$C, base$V, base$U, base$T, base$P, base$S, checkboxgroup$1];
    context.slots = ['checkbox', 'label', 'info', 'description', 'before', 'between', 'after'];
    return _objectSpread2$1({}, base$H(props, context));
  }
};

var base$w = function base(props, context, dependencies) {
  var {
    addons,
    slots
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var el$ = dependencies.el$;
  var form$ = dependencies.form$;

  // ============== COMPUTED ==============

  var hasAddonBefore = computed(() => {
    var _el$$value$$slots, _el$$value$$scopedSlo;
    return !!(addons.value.before || (_el$$value$$slots = el$.value.$slots) !== null && _el$$value$$slots !== void 0 && _el$$value$$slots['addon-before'] || form$.value.$vueform.vueVersion === 2 && (_el$$value$$scopedSlo = el$.value.$scopedSlots) !== null && _el$$value$$scopedSlo !== void 0 && _el$$value$$scopedSlo['addon-before'] || slots.value['addon-before']);
  });
  var hasAddonAfter = computed(() => {
    var _el$$value$$slots2, _el$$value$$scopedSlo2;
    return !!(addons.value.after || (_el$$value$$slots2 = el$.value.$slots) !== null && _el$$value$$slots2 !== void 0 && _el$$value$$slots2['addon-after'] || form$.value.$vueform.vueVersion === 2 && (_el$$value$$scopedSlo2 = el$.value.$scopedSlots) !== null && _el$$value$$scopedSlo2 !== void 0 && _el$$value$$scopedSlo2['addon-after'] || slots.value['addon-after']);
  });
  return {
    hasAddonBefore,
    hasAddonAfter
  };
};

var base$v = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============

  var value = dependencies.value;
  var nullValue = dependencies.nullValue;

  // ============== COMPUTED ==============

  /**
    * Whether the element has no value filled in.
    * 
    * @type {boolean}
    */
  var empty = computed(() => {
    return _.isEqual(value.value, nullValue.value) || [undefined, null, ''].indexOf(value.value) !== -1;
  });
  return {
    empty
  };
};
var multilingual$1 = function multilingual(props, context, dependencies) {
  // ============ DEPENDENCIES ============

  var value = dependencies.value;
  var nullValue = dependencies.nullValue;
  var language = dependencies.language;

  // ============== COMPUTED ==============

  var empty = computed(() => {
    return value.value[language.value] == nullValue.value[language.value] || value.value[language.value] === '';
  });
  return {
    empty
  };
};
var array = function array(props, context, dependencies) {
  // ============ DEPENDENCIES ============

  var value = dependencies.value;
  var nullValue = dependencies.nullValue;

  // ============== COMPUTED ==============

  var empty = computed(() => {
    return _.isEqual(value.value, nullValue.value) || [undefined, null, ''].indexOf(value.value) !== -1 || value.value.length == 0;
  });
  return {
    empty
  };
};

var base$u = function base(props, context, dependencies) {
  var {
    displayFormat,
    valueFormat,
    loadFormat,
    date,
    time,
    seconds,
    hour24
  } = toRefs(props);

  // ============ DEPENDENCIES =============

  var form$ = dependencies.form$;

  // =============== PRIVATE ===============

  /**
   * The default date format type.
   * 
   * @type {string}
   * @private
   */
  var defaultFormat = computed(() => {
    var format;
    if (date.value && time.value && seconds.value && hour24.value) {
      format = 'datetimeSeconds24';
    } else if (date.value && time.value && seconds.value && !hour24.value) {
      format = 'datetimeSeconds12';
    } else if (date.value && time.value && !seconds.value && hour24.value) {
      format = 'datetime24';
    } else if (date.value && time.value && !seconds.value && !hour24.value) {
      format = 'datetime12';
    } else if (!date.value && time.value && seconds.value && hour24.value) {
      format = 'timeSeconds24';
    } else if (!date.value && time.value && seconds.value && !hour24.value) {
      format = 'timeSeconds12';
    } else if (!date.value && time.value && !seconds.value && hour24.value) {
      format = 'time24';
    } else if (!date.value && time.value && !seconds.value && !hour24.value) {
      format = 'time12';
    } else {
      format = 'date';
    }
    return format;
  });

  /**
   * The default date format for display.
   * 
   * @type {string}
   * @private
   */
  var defaultDisplayFormat = computed(() => {
    return form$.value.__("vueform.dateFormats.".concat(defaultFormat.value));
  });

  /**
   * The default date format for value & load.
   * 
   * @type {string}
   * @private
   */
  var defaultDataFormat = computed(() => {
    var dataDateFormats = {
      datetimeSeconds24: 'YYYY-MM-DD HH:mm:ss',
      datetimeSeconds12: 'YYYY-MM-DD hh:mm:ss a',
      datetime24: 'YYYY-MM-DD HH:mm',
      datetime12: 'YYYY-MM-DD hh:mm a',
      timeSeconds24: 'HH:mm:ss',
      timeSeconds12: 'hh:mm:ss a',
      time24: 'HH:mm',
      time12: 'hh:mm a',
      date: 'YYYY-MM-DD'
    };
    return dataDateFormats[defaultFormat.value];
  });

  // ============== COMPUTED ===============

  /**
   * The display date format.
   * 
   * @type {string}
   * @private
   */
  var displayDateFormat = computed(() => {
    return displayFormat.value !== null ? displayFormat.value : defaultDisplayFormat.value;
  });

  /**
   * The format of date value.
   * 
   * @type {string}
   * @private
   */
  var valueDateFormat = computed(() => {
    return valueFormat.value !== null || valueFormat.value === false ? valueFormat.value : defaultDataFormat.value;
  });

  /**
   * The date format of the data the element being loaded with.
   * 
   * @type {string}
   * @private
   */
  var loadDateFormat = computed(() => {
    return loadFormat.value !== null ? loadFormat.value : defaultDataFormat.value;
  });
  return {
    displayDateFormat,
    valueDateFormat,
    loadDateFormat
  };
};
var dates$2 = function dates(props, context, dependencies) {
  var {
    displayFormat,
    valueFormat,
    loadFormat
  } = toRefs(props);

  // ============ DEPENDENCIES =============

  var form$ = dependencies.form$;

  // =============== PRIVATE ===============

  var defaultFormat = computed(() => {
    return form$.value.__("vueform.dateFormats.date");
  });

  // ============== COMPUTED ===============

  var displayDateFormat = computed(() => {
    return displayFormat.value !== null ? displayFormat.value : defaultFormat.value;
  });
  var valueDateFormat = computed(() => {
    return valueFormat.value !== null || valueFormat.value === false ? valueFormat.value : defaultFormat.value;
  });
  var loadDateFormat = computed(() => {
    return loadFormat.value !== null ? loadFormat.value : defaultFormat.value;
  });
  return {
    displayDateFormat,
    valueDateFormat,
    loadDateFormat
  };
};

var base$t = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============

  var value = dependencies.value;

  // =============== METHODS ==============

  /**
   * Handles `change` event.
   *
   * @param {string} val* value of the element
   * @returns {void}
   * @private
   */
  var handleChange = val => {
    value.value = val;
  };
  return {
    handleChange
  };
};

var base$s = function base(props, context, dependencies) {
  var {
    floating,
    placeholder
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;

  // ============== COMPUTED ==============

  /**
   * Whether the element floating label.
   * 
   * @type {boolean}
   */
  var hasFloating = computed(() => {
    return !!(!!floating.value || placeholder.value && form$.value.options.floatPlaceholders) && floating.value !== false;
  });
  return {
    hasFloating
  };
};

var date$1 = function date(props, context, dependencies) {
  var {
    disables,
    min,
    max,
    extendOptions,
    readonly,
    hour24,
    seconds,
    date,
    time
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var isDisabled = dependencies.isDisabled;
  var displayDateFormat = dependencies.displayDateFormat;
  var valueDateFormat = dependencies.valueDateFormat;

  // ============== COMPUTED ==============

  /**
   * List of dates to disable.
   * 
   * @type {array} 
   * @private
   */
  var disabledDates = computed(() => {
    if (disables.value === undefined) {
      return [];
    }
    return _.map(disables.value, disabledDate => {
      checkDateFormat(valueDateFormat.value, disabledDate);
      return disabledDate instanceof Date ? disabledDate : moment(disabledDate, valueDateFormat.value, true).toDate();
    });
  });

  /**
   * Earliest selectable date. Can be a string in `[loadFormat](#load-format)` or a Date object.
   * 
   * @type {string|Date} 
   * @private
   */
  var minDate = computed(() => {
    if (!min.value) {
      return null;
    }
    checkDateFormat(valueDateFormat.value, min.value);
    return min.value instanceof Date ? min.value : moment(min.value, valueDateFormat.value, true).toDate();
  });

  /**
   * Latest selectable date. Can be a string in `[loadFormat](#load-format)` or a Date object.
   * 
   * @type {string|Date} 
   * @private
   */
  var maxDate = computed(() => {
    if (!max.value) {
      return null;
    }
    checkDateFormat(valueDateFormat.value, max.value);
    return max.value instanceof Date ? max.value : moment(max.value, valueDateFormat.value, true).toDate();
  });

  /**
  * Default options for date selector.
  * 
  * @type {object}
  * @private
  */
  var defaultOptions = computed(() => {
    return {
      dateFormat: displayDateFormat.value,
      minDate: minDate.value,
      maxDate: maxDate.value,
      disable: disabledDates.value,
      clickOpens: !isDisabled.value && !readonly.value,
      time_24hr: hour24.value,
      enableTime: time.value,
      enableSeconds: seconds.value,
      noCalendar: !date.value
    };
  });

  /**
  * Options for date selector. Can be extended via [`extend-options`](#option-extend-options) with [flatpickr options](https://flatpickr.js.org/options/).
  * 
  * @type {object} 
  */
  var fieldOptions = computed(() => {
    return Object.assign({}, defaultOptions.value, extendOptions.value || {});
  });

  /**
   * Whether date selector has `date` enabled.
   * 
   * @type {boolean}
   * @private
   */
  var hasDate = computed(() => {
    return true;
  });

  /**
   * Whether date selector has `time` enabled.
   * 
   * @type {boolean}
   * @private
   */
  var hasTime = computed(() => {
    return false;
  });
  return {
    minDate,
    maxDate,
    disabledDates,
    fieldOptions,
    hasDate,
    hasTime
  };
};
var dates$1 = function dates(props, context, dependencies) {
  var {
    mode,
    extendOptions,
    readonly
  } = toRefs(props);
  var {
    minDate,
    maxDate,
    disabledDates
  } = date$1(props, context, dependencies);

  // ============ DEPENDENCIES ============

  var isDisabled = dependencies.isDisabled;
  var displayDateFormat = dependencies.displayDateFormat;

  // ============== COMPUTED ==============

  var defaultOptions = computed(() => {
    return {
      mode: mode.value,
      dateFormat: displayDateFormat.value,
      minDate: minDate.value,
      maxDate: maxDate.value,
      disable: disabledDates.value,
      clickOpens: !isDisabled.value && !readonly.value
    };
  });
  var fieldOptions = computed(() => {
    return Object.assign({}, defaultOptions.value, extendOptions.value || {});
  });
  var hasDate = computed(() => {
    return true;
  });
  var hasTime = computed(() => {
    return false;
  });
  return {
    minDate,
    maxDate,
    disabledDates,
    fieldOptions,
    hasDate,
    hasTime
  };
};
var select$1 = function select(props, context, dependencies) {
  var {
    native,
    extendOptions,
    labelProp,
    trackBy,
    valueProp,
    search,
    limit,
    noOptionsText,
    noResultsText,
    caret,
    object,
    delay,
    minChars,
    resolveOnLoad,
    filterResults,
    clearOnSearch,
    canDeselect,
    canClear,
    openDirection,
    strict,
    closeOnSelect,
    autocomplete,
    groups,
    groupLabel,
    groupOptions,
    groupHideEmpty,
    inputType,
    create,
    appendNewOption,
    addOptionOn
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;
  var isLoading = dependencies.isLoading;

  // ============== COMPUTED ==============

  /**
   * Whether native select should be used.
   * 
   * @type {string}
   */
  var isNative = computed(() => {
    return native.value && !search.value;
  });

  /**
  * Default options for non-native select input.
  * 
  * @type {object} 
  * @private
  */
  var defaultOptions = computed(() => {
    return {
      mode: 'single',
      searchable: search.value || create.value,
      noOptionsText: noOptionsText.value || form$.value.__('vueform.multiselect.noOptions'),
      noResultsText: noResultsText.value || form$.value.__('vueform.multiselect.noResults'),
      label: labelProp.value,
      trackBy: trackBy.value,
      valueProp: valueProp.value,
      limit: limit.value,
      caret: caret.value,
      loading: isLoading.value,
      object: object.value,
      delay: delay.value,
      minChars: minChars.value,
      resolveOnLoad: resolveOnLoad.value,
      filterResults: filterResults.value,
      clearOnSearch: clearOnSearch.value,
      canDeselect: canDeselect.value,
      canClear: canClear.value,
      openDirection: openDirection.value,
      strict: strict.value,
      closeOnSelect: closeOnSelect.value,
      autocomplete: autocomplete.value,
      groups: groups.value,
      groupLabel: groupLabel.value,
      groupOptions: groupOptions.value,
      groupHideEmpty: groupHideEmpty.value,
      inputType: inputType.value,
      createOption: create.value,
      appendNewOption: appendNewOption.value,
      addOptionOn: addOptionOn.value
    };
  });

  /**
  * Options for non-native select input. Can be extended via [`extend-options`](#option-extend-options) with [@vueform/multiselect options](https://github.com/vueform/multiselect#basic-props).
  * 
  * @type {object} 
  */
  var fieldOptions = computed(() => {
    return Object.assign({}, defaultOptions.value, extendOptions.value || {});
  });
  return {
    fieldOptions,
    isNative
  };
};
var multiselect$1 = function multiselect(props, context, dependencies) {
  var {
    native,
    extendOptions,
    labelProp,
    trackBy,
    valueProp,
    search,
    limit,
    noOptionsText,
    noResultsText,
    caret,
    object,
    delay,
    minChars,
    resolveOnLoad,
    filterResults,
    clearOnSearch,
    clearOnSelect,
    canClear,
    max,
    openDirection,
    strict,
    closeOnSelect,
    autocomplete,
    groups,
    groupLabel,
    groupOptions,
    groupHideEmpty,
    groupSelect,
    inputType,
    hideSelected,
    multipleLabel,
    multipleLabelMultiple,
    multipleLabelSingle,
    create,
    appendNewOption,
    addOptionOn
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;
  dependencies.el$;
  var isLoading = dependencies.isLoading;

  // ============== COMPUTED ==============

  /**
   * Whether native multiselect should be used.
   * 
   * @type {string}
   */
  var isNative = computed(() => {
    return native.value && !search.value;
  });

  /**
  * Default options for non-native multiselect input.
  * 
  * @type {object} 
  * @private
  */
  var defaultOptions = computed(() => {
    return {
      mode: 'multiple',
      searchable: search.value || create.value,
      noOptionsText: noOptionsText.value || form$.value.__('vueform.multiselect.noOptions'),
      noResultsText: noResultsText.value || form$.value.__('vueform.multiselect.noResults'),
      multipleLabel: multipleLabel.value || ((val, select$) => {
        return val && val.length > 1 ? multipleLabelMultiple.value ? multipleLabelMultiple.value.replace(':x:', val.length) : form$.value.__('vueform.multiselect.multipleLabelMore', {
          options: val.length
        }) : multipleLabelSingle.value || form$.value.__('vueform.multiselect.multipleLabelOne');
      }),
      label: labelProp.value,
      trackBy: trackBy.value,
      valueProp: valueProp.value,
      limit: limit.value,
      caret: caret.value,
      loading: isLoading.value,
      object: object.value,
      delay: delay.value,
      minChars: minChars.value,
      resolveOnLoad: resolveOnLoad.value,
      filterResults: filterResults.value,
      clearOnSearch: clearOnSearch.value,
      clearOnSelect: clearOnSelect.value,
      canClear: canClear.value,
      max: max.value,
      openDirection: openDirection.value,
      strict: strict.value,
      closeOnSelect: closeOnSelect.value,
      autocomplete: autocomplete.value,
      groups: groups.value,
      groupLabel: groupLabel.value,
      groupOptions: groupOptions.value,
      groupHideEmpty: groupHideEmpty.value,
      groupSelect: groupSelect.value,
      inputType: inputType.value,
      hideSelected: hideSelected.value,
      createOption: create.value,
      appendNewOption: appendNewOption.value,
      addOptionOn: addOptionOn.value
    };
  });

  /**
  * Options for non-native multiselect input. Can be extended via [`extend-options`](#option-extend-options) with [@vueform/multiselect options](https://github.com/vueform/multiselect#basic-props).
  * 
  * @type {object} 
  */
  var fieldOptions = computed(() => {
    return Object.assign({}, defaultOptions.value, extendOptions.value || {});
  });
  return {
    fieldOptions,
    isNative
  };
};
var tags$1 = function tags(props, context, dependencies) {
  var {
    extendOptions,
    labelProp,
    trackBy,
    valueProp,
    search,
    limit,
    noOptionsText,
    noResultsText,
    caret,
    object,
    delay,
    minChars,
    resolveOnLoad,
    filterResults,
    clearOnSearch,
    clearOnSelect,
    canClear,
    max,
    showOptions,
    openDirection,
    strict,
    closeOnSelect,
    autocomplete,
    groups,
    groupLabel,
    groupOptions,
    groupHideEmpty,
    groupSelect,
    inputType,
    hideSelected,
    create,
    appendNewOption,
    addOptionOn
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;
  var isLoading = dependencies.isLoading;

  // ================ DATA ================

  /**
   * Technical prop to be able to use the same template for tags as for select.
   * 
   * @type {boolean}
   * @default false
   * @private
   */
  var native = ref(false);

  // ============== COMPUTED ==============

  /**
   * Technical prop to be able to use the same template for tags as for select.
   * 
   * @type {boolean}
   * @private
   */
  var isNative = computed(() => {
    return false;
  });

  /**
  * Default options for tags input.
  * 
  * @type {object} 
  * @private
  */
  var defaultOptions = computed(() => {
    return {
      mode: 'tags',
      searchable: search.value || create.value,
      noOptionsText: noOptionsText.value || form$.value.__('vueform.multiselect.noOptions'),
      noResultsText: noResultsText.value || form$.value.__('vueform.multiselect.noResults'),
      label: labelProp.value,
      trackBy: trackBy.value,
      valueProp: valueProp.value,
      limit: limit.value,
      caret: caret.value,
      loading: isLoading.value,
      object: object.value,
      delay: delay.value,
      minChars: minChars.value,
      resolveOnLoad: resolveOnLoad.value,
      filterResults: filterResults.value,
      clearOnSearch: clearOnSearch.value,
      clearOnSelect: clearOnSelect.value,
      canClear: canClear.value,
      max: max.value,
      showOptions: showOptions.value,
      openDirection: openDirection.value,
      strict: strict.value,
      closeOnSelect: closeOnSelect.value,
      autocomplete: autocomplete.value,
      groups: groups.value,
      groupLabel: groupLabel.value,
      groupOptions: groupOptions.value,
      groupHideEmpty: groupHideEmpty.value,
      groupSelect: groupSelect.value,
      inputType: inputType.value,
      hideSelected: hideSelected.value,
      createOption: create.value,
      appendNewOption: appendNewOption.value,
      addOptionOn: addOptionOn.value
    };
  });

  /**
  * Options for tags input. Can be extended via [`extend-options`](#option-extend-options) with [@vueform/multiselect options](https://github.com/vueform/multiselect#basic-props).
  * 
  * @type {object} 
  */
  var fieldOptions = computed(() => {
    return Object.assign({}, defaultOptions.value, extendOptions.value || {});
  });
  return {
    native,
    fieldOptions,
    isNative
  };
};
var slider = function slider(props, context, dependencies) {
  var {
    min,
    max,
    step,
    tooltips,
    merge,
    format,
    orientation,
    direction,
    extendOptions,
    showTooltip,
    tooltipPosition,
    lazy
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var isDisabled = dependencies.isDisabled;
  dependencies.labelId;

  // ============== COMPUTED ==============

  /**
  * Default options for slider input.
  * 
  * @type {object}
  * @private
  */
  var defaultOptions = computed(() => {
    return {
      min: min.value,
      max: max.value,
      step: step.value,
      tooltips: tooltips.value,
      merge: merge.value,
      format: format.value,
      orientation: orientation.value,
      direction: direction.value,
      disabled: isDisabled.value,
      showTooltip: showTooltip.value,
      tooltipPosition: tooltipPosition.value,
      lazy: lazy.value
    };
  });

  /**
  * Options for slider input. Can be extended via [`extend-options`](#option-extend-options) with [@vueform/slider options](https://github.com/vueform/slider#basic-props).
  * 
  * @type {object} 
  */
  var fieldOptions = computed(() => {
    return Object.assign({}, defaultOptions.value, extendOptions.value || {});
  });
  return {
    fieldOptions
  };
};
var toggle = function toggle(props, context, dependencies) {
  var {
    labels,
    extendOptions,
    trueValue,
    falseValue
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var isDisabled = dependencies.isDisabled;

  // ============== COMPUTED ==============

  /**
  * Default options toggle input.
  * 
  * @type {object}
  * @private
  */
  var defaultOptions = computed(() => {
    return {
      disabled: isDisabled.value,
      offLabel: labels.value ? labels.value.off || '' : '',
      onLabel: labels.value ? labels.value.on || '' : '',
      trueValue: trueValue.value,
      falseValue: falseValue.value
    };
  });

  /**
  * Options for toggle input. Can be extended via [`extend-options`](#option-extend-options) with [@vueform/toggle options](https://github.com/vueform/toggle#basic-props).
  * 
  * @type {object} 
  */
  var fieldOptions = computed(() => {
    return Object.assign({}, defaultOptions.value, extendOptions.value || {});
  });
  return {
    fieldOptions
  };
};

var base$r = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============

  var input = dependencies.input;

  // ================ DATA ================

  /**
   * Whether the element is focused.
   * 
   * @type {boolean}
   */
  var focused = ref(false);

  // =============== HOOKS ================

  onMounted(() => {
    if (input && input.value && input.value.addEventListener) {
      input.value.addEventListener('focus', () => {
        focused.value = true;
      });
      input.value.addEventListener('blur', () => {
        focused.value = false;
      });
    }
  });
  return {
    focused
  };
};
var date = function date(props, context, dependencies) {
  // ============ DEPENDENCIES ============

  var input = dependencies.input;

  // ================ DATA ================

  /**
   * Whether the element is focused.
   * 
   * @type {boolean}
   */
  var focused = ref(false);

  // =============== HOOKS ================

  onMounted(() => {
    input.value.input.addEventListener('focus', () => {
      focused.value = true;
    });
    input.value.input.addEventListener('blur', () => {
      focused.value = false;
    });
  });
  return {
    focused
  };
};
var select = function select(props, context, dependencies) {
  // ============ DEPENDENCIES ============

  var input = dependencies.input;
  var isNative = dependencies.isNative;

  // ================ DATA ================

  /**
   * Whether the element is focused.
   * 
   * @type {boolean}
   */
  var focused = ref(false);

  // =============== HOOKS ================

  onMounted(() => {
    if (isNative.value) {
      input.value.addEventListener('focus', () => {
        focused.value = true;
      });
      input.value.addEventListener('blur', () => {
        focused.value = false;
      });
    } else {
      watch(computed(() => {
        var _input$value;
        return (_input$value = input.value) === null || _input$value === void 0 ? void 0 : _input$value.isOpen;
      }), open => {
        focused.value = open;
      });
    }
  });
  return {
    focused
  };
};
var dates = date;
var multiselect = select;
var tags = select;

var DateElement = {
  name: 'DateElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'date',
      private: true
    },
    default: {
      required: false,
      type: [String, Date],
      default: null
    },
    addons: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    floating: {
      required: false,
      type: [String, Boolean],
      default: null
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    displayFormat: {
      required: false,
      type: [String],
      default: null,
      '@default': 'locale.vueform.dateFormats.*'
    },
    valueFormat: {
      required: false,
      type: [String, Boolean],
      default: null,
      '@default': 'locale.vueform.dateFormats.*'
    },
    loadFormat: {
      required: false,
      type: [String],
      default: null,
      '@default': 'locale.vueform.dateFormats.*'
    },
    date: {
      required: false,
      type: [Boolean],
      default: true
    },
    time: {
      required: false,
      type: [Boolean],
      default: false
    },
    seconds: {
      required: false,
      type: [Boolean],
      default: false
    },
    hour24: {
      required: false,
      type: [Boolean],
      default: true
    },
    min: {
      required: false,
      type: [String, Date],
      default: null
    },
    max: {
      required: false,
      type: [String, Date],
      default: null
    },
    disables: {
      required: false,
      type: [Array],
      default: () => []
    },
    extendOptions: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    placeholder: {
      required: false,
      type: [String],
      default: null
    },
    readonly: {
      required: false,
      type: [Boolean],
      default: false
    }
  },
  setup(props, context) {
    context.features = [base$14, base$13, base$Q, base$G, base$K, base$N, base$A, base$O, base$s, base$16, base$L, base$w, base$u, date$1, base$E, base$$, base$D, date$2, date$3, base$v, base$W, base$C, base$U, base$T, base$P, base$V, base$S, base$t, date, base$J];
    context.slots = ['label', 'info', 'description', 'before', 'between', 'after', 'addon-before', 'addon-after'];
    return _objectSpread2$1({}, base$H(props, context));
  }
};

var DatesElement = {
  name: 'DatesElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'dates',
      private: true
    },
    default: {
      required: false,
      type: [Array],
      default: () => []
    },
    addons: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    floating: {
      required: false,
      type: [String, Boolean],
      default: null
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    displayFormat: {
      required: false,
      type: [String],
      default: null
    },
    valueFormat: {
      required: false,
      type: [String, Boolean],
      default: null
    },
    loadFormat: {
      required: false,
      type: [String, Boolean],
      default: null
    },
    mode: {
      required: false,
      type: [String],
      default: 'multiple'
    },
    min: {
      required: false,
      type: [String, Date],
      default: null
    },
    max: {
      required: false,
      type: [String, Date],
      default: null
    },
    disables: {
      required: false,
      type: [Array],
      default: () => []
    },
    extendOptions: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    placeholder: {
      required: false,
      type: [String],
      default: null
    },
    readonly: {
      required: false,
      type: [Boolean],
      default: false
    }
  },
  setup(props, context) {
    context.features = [base$14, base$13, base$Q, base$G, base$K, base$N, array$1, base$O, base$s, base$16, dates$5, base$w, dates$2, dates$1, base$E, dates$3, base$$, base$D, dates$4, base$v, base$W, base$C, base$U, base$T, base$P, base$V, base$S, base$t, dates, base$J];
    context.slots = ['label', 'info', 'description', 'before', 'between', 'after', 'addon-before', 'addon-after'];
    return _objectSpread2$1({}, base$H(props, context));
  }
};

var base$q = function base(props, context, dependencies) {
  var {
    type,
    embed,
    auto,
    methods,
    urls,
    uploadTempEndpoint,
    removeTempEndpoint,
    removeEndpoint,
    url,
    previewUrl,
    params,
    softRemove,
    view
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;
  var value = dependencies.value;
  var isDisabled = dependencies.isDisabled;
  var validate = dependencies.validate;
  var invalid = dependencies.invalid;
  var path = dependencies.path;
  var axios = dependencies.axios;
  var request = dependencies.request;
  var uploading = dependencies.uploading;
  var input = dependencies.input;
  var update = dependencies.update;
  var fire = dependencies.fire;
  var isImageType = dependencies.isImageType;
  var removing = dependencies.removing;
  var handleError = dependencies.handleError;
  var el$ = dependencies.el$;

  // ================ DATA ================

  /**
   * Whether the file uploader has any errors.
   * 
   * @type {boolean}
   * @default false
   */
  var hasUploadError = ref(false);

  /**
   * The `base64` representation of the file when [`view`](#option-view) is `image` or `gallery` and file is only selected, but not uploaded yet.
   * 
   * @type {string}
   * @default null
   */
  var base64 = ref(null);

  /**
   * The percentage of progress when the file is being temporarily uploaded (0-100).
   * 
   * @type {number}
   * @default 0
   */
  var progress = ref(0);

  /**
   * If the form is submitted and the file is not uploaded yet, the element will enter into `preparing` state and upload the temporary file before submitting the form.
   * 
   * @type {boolean}
   * @default false
   */
  var preparing = ref(false);

  // ============== COMPUTED ==============

  /**
   * The HTTP request endpoints.
   * 
   * @type {object}
   * @private
   */
  var endpoints = computed(() => {
    var configEndpoints = form$.value.$vueform.config.endpoints;
    var propEndpoints = {
      uploadTempFile: uploadTempEndpoint.value,
      removeTempFile: removeTempEndpoint.value,
      removeFile: removeEndpoint.value
    };
    var endpoints = {};
    Object.keys(propEndpoints).forEach(name => {
      var endpoint = configEndpoints[name];
      if (urls.value[name]) {
        endpoint = {
          url: urls.value[name],
          method: 'POST'
        };
      }
      if (methods.value[name] && typeof endpoint === 'object') {
        endpoint.method = methods.value[name];
      }
      if (typeof propEndpoints[name] === 'string') {
        if (configEndpoints[propEndpoints[name]] !== undefined) {
          endpoint = configEndpoints[propEndpoints[name]];
        } else {
          endpoint.url = propEndpoints[name];
        }
      }
      if (typeof propEndpoints[name] === 'function') {
        endpoint = propEndpoints[name];
      }
      if (typeof propEndpoints[name] === 'object') {
        endpoint = {
          url: propEndpoints[name].url || propEndpoints[name].endpoint || configEndpoints[name].url,
          method: propEndpoints[name].method || configEndpoints[name].method
        };
      }
      endpoints[name] = endpoint;
    });
    return endpoints;
  });

  /**
   * URL to file using the [`url`](#url) option without including the filename. If `url` is not defined it will default to `'/'`.
   * 
   * @type {string|boolean}
   * @private
   */
  var fileUrl = computed(() => {
    if (url.value === undefined) {
      return '/';
    }
    if (url.value === false) {
      return '';
    }
    var fileUrl = url.value;
    if (!fileUrl.match(/\/$/)) {
      fileUrl += '/';
    }
    if (!fileUrl.match(/^http/) && !fileUrl.match(/^\//)) {
      fileUrl = '/' + fileUrl;
    }
    return fileUrl;
  });

  /**
   * URL to file preview image using the [`previewUrl`](#option-preview-url) option without including the filename. If `previewUrl` is not defined it will default to [`url`](#option-url).
   * 
   * @type {string}
   * @private
   */
  var filePreviewUrl = computed(() => {
    if (previewUrl.value === undefined) {
      return fileUrl.value;
    }
    var filePreviewUrl = previewUrl.value;
    if (!filePreviewUrl.match(/\/$/)) {
      filePreviewUrl += '/';
    }
    if (!filePreviewUrl.match(/^http/) && !filePreviewUrl.match(/^\//)) {
      filePreviewUrl = '/' + filePreviewUrl;
    }
    return filePreviewUrl;
  });

  /**
   * The stage the file is at:
   * 
   * * `0`: file not selected
   * * `1`: file selected
   * * `2`: file temporarily uploaded
   * * `3`: file permanently uploaded
   * 
   * @type {number}
   */
  var stage = computed(() => {
    if (value.value === null) {
      return 0; // file not selected
    }

    if (value.value instanceof File) {
      return 1; // file selected
    }

    if (_.isObject(value.value) && value.value.tmp !== undefined) {
      return 2; // temp uploaded
    }

    if (_.isString(value.value)) {
      return 3; // file uploaded
    }

    return -1;
  });

  /**
   * The original or stored name of the file.
   * 
   * @type {string}
   */
  var filename = computed(() => {
    switch (stage.value) {
      case 1:
        return value.value.name;
      case 2:
        return value.value.originalName;
      case 3:
        return value.value;
      default:
        return null;
    }
  });

  /**
   * The clickable link of the uploaded file.
   * 
   * @type {string}
   */
  var link = computed(() => {
    if (!uploaded.value) {
      return;
    }
    return fileUrl.value + filename.value;
  });

  /**
   * The preview link of the uploaded file.
   * 
   * @type {string}
   */
  var previewLink = computed(() => {
    if (!uploaded.value) {
      return;
    }
    return filePreviewUrl.value + filename.value;
  });

  /**
   * The preview of the file when [`view`](#view) is `image` or `gallery`. Equals to the `link` if the file is already uploaded and `base64` if only selected or temporarily uploaded.
   * 
   * @type {string}
   */
  var preview = computed(() => {
    if (view.value === 'file') {
      return null;
    }
    return uploaded.value ? previewLink.value : base64.value;
  });

  /**
   * Whether the file is permantently uploaded.
   * 
   * @type {boolean}
   */
  var uploaded = computed(() => {
    return stage.value === 3;
  });

  /**
   * Whether the file can be removed. 
   * 
   * @type {boolean}
   */
  var canRemove = computed(() => {
    return stage.value > 0 && !uploading.value && !isDisabled.value && !preparing.value && !removing.value;
  });

  /**
   * Whether temporary file can be uploaded.
   * 
   * @type {boolean}
   */
  var canUploadTemp = computed(() => {
    return stage.value === 1 && !auto.value && !uploading.value && !isDisabled.value;
  });

  /**
   * Whether file can be selected.
   * 
   * @type {boolean}
   */
  var canSelect = computed(() => {
    return !embed.value && stage.value == 0;
  });

  // =============== METHODS ==============

  /**
   * Upload temporary file (async).
   * 
   * @returns {void}
   */
  var uploadTemp = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* () {
      if (stage.value !== 1) {
        throw new Error('No file is selected');
      }
      yield validate();
      if (invalid.value) {
        return;
      }
      request.value = axios.value.CancelToken.source();
      try {
        var data = getFormData(Object.assign({}, params.value, {
          file: value.value,
          formKey: form$.value.options.formKey,
          path: path.value
        }));
        hasUploadError.value = false;
        var response;
        if (typeof endpoints.value.uploadTempFile === 'function') {
          response = yield endpoints.value.uploadTempFile(value.value, el$.value);
        } else {
          var method = endpoints.value.uploadTempFile.method.toLowerCase();
          response = yield axios.value.request({
            url: endpoints.value.uploadTempFile.url,
            method,
            [method === 'get' ? 'params' : 'data']: data,
            onUploadProgress: e => {
              progress.value = Math.round(e.loaded * 100 / e.total);
            },
            cancelToken: request.value.token
          });
          response = response.data;
        }
        response.file = value.value;
        update(response);
      } catch (error) {
        progress.value = 0;
        if (!axios.value.isCancel(error)) {
          hasUploadError.value = true;
          handleError(error);
        }
        throw new Error(error);
      } finally {
        request.value = null;
      }
    });
    return function uploadTemp() {
      return _ref.apply(this, arguments);
    };
  }();

  /**
   * Removes file (async):
   * 
   * * in stage `1`: sets the value to `null`
   * * in stage `2`: submits a request to `removeTemp` endpoint (if [`softRemove: false`](#option-soft-remove)) and sets the value to `null`
   * * in stage `3`: submits a request to `remove` endpoint (if [`softRemove: false`](#option-soft-remove)) and sets the value to `null`
   * 
   * @returns {void}
   */
  var remove = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(function* () {
      removing.value = true;
      hasUploadError.value = false;
      try {
        if (stage.value === 3 && !softRemove.value) {
          if (!confirm(form$.value.__("vueform.elements.file.removeConfirm"))) {
            return false;
          }
          if (typeof endpoints.value.removeFile === 'function') {
            yield endpoints.value.removeFile(value.value, el$.value);
          } else {
            var method = endpoints.value.removeFile.method.toLowerCase();
            yield axios.value.request({
              method,
              url: endpoints.value.removeFile.url,
              [method === 'get' ? 'params' : 'data']: Object.assign({}, params.value, {
                file: value.value,
                formKey: form$.value.options.formKey,
                path: path.value
              })
            });
          }
        } else if (stage.value === 2 && !softRemove.value) {
          if (typeof endpoints.value.removeTempFile === 'function') {
            yield endpoints.value.removeTempFile(value.value, el$.value);
          } else {
            var _method = endpoints.value.removeTempFile.method.toLowerCase();
            yield axios.value.request({
              method: _method,
              url: endpoints.value.removeTempFile.url,
              [_method === 'get' ? 'params' : 'data']: Object.assign({}, params.value, {
                file: value.value.tmp,
                formKey: form$.value.options.formKey,
                path: path.value
              })
            });
          }
        }
      } catch (error) {
        handleError(error);
        return;
      } finally {
        removing.value = false;
      }
      update(null);
      progress.value = 0;
      fire('remove');
    });
    return function remove() {
      return _ref2.apply(this, arguments);
    };
  }();

  /**
   * Prepare the element for submitting the form (async). It will upload temp file if it hasn't been uploaded yet and halts the submit process until its done without any errors.
   * 
   * @returns {void}
   * @private
   */
  var prepare = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(function* () {
      // In selected state
      if (stage.value === 1) {
        preparing.value = true;
        try {
          yield uploadTemp();
        } finally {
          preparing.value = false;
        }
      }
    });
    return function prepare() {
      return _ref3.apply(this, arguments);
    };
  }();
  var resolveBase64 = function resolveBase64() {
    var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : value.value;
    var reader = new FileReader();
    reader.onload = e => {
      base64.value = e.target.result;
    };
    reader.readAsDataURL(source);
  };

  /**
   * Handles `change` event.
   * 
   * @param {Event} e* 
   * @returns {void}
   * @private
   */
  var handleChange = e => {
    var file = e.target.files[0];
    update(file || null);
    if (auto.value) {
      uploadTemp();
    }
    input.value.value = '';
    if (form$.value.shouldValidateOnChange) {
      validate();
    }
  };

  /**
   * Handles file select button `click` event.
   *
   * @returns {void}
   * @private
   */
  var handleClick = () => {
    if (isDisabled.value) {
      return;
    }
    input.value.click();
  };

  /**
   * Handles `uploadTemp` event.
   * 
   * @returns {void}
   * @private
   */
  var handleUploadTemp = () => {
    uploadTemp();
  };

  /**
   * Handles `remove` event.
   * 
   * @returns {void}
   * @private
   */
  var handleRemove = () => {
    remove();
  };

  /**
   * Handles `abort` event.
   * 
   * @returns {void}
   * @private
   */
  var handleAbort = () => {
    if (request.value === null) {
      return;
    }
    request.value.cancel();
  };

  // ============== WATCHERS ==============

  watch(value, val => {
    var _value$value, _value$value2;
    if (!val) {
      base64.value = null;
      return;
    }
    if (!isImageType.value || view.value === 'file') {
      return;
    }
    if (!(value.value instanceof File) && !((_value$value = value.value) !== null && _value$value !== void 0 && _value$value.file)) {
      return;
    }
    resolveBase64(value.value instanceof File ? value.value : (_value$value2 = value.value) === null || _value$value2 === void 0 ? void 0 : _value$value2.file);
  }, {
    immediate: true
  });
  watch(view, v => {
    if (['image', 'gallery'].indexOf(v) !== -1 && !base64.value && value.value instanceof File) {
      resolveBase64();
    }
  });
  if (value.value instanceof File && auto.value) {
    nextTick(() => {
      uploadTemp();
    });
  }
  return {
    hasUploadError,
    base64,
    progress,
    preparing,
    endpoints,
    fileUrl,
    stage,
    filename,
    link,
    preview,
    uploaded,
    canRemove,
    canUploadTemp,
    canSelect,
    uploadTemp,
    remove,
    prepare,
    handleChange,
    handleClick,
    handleUploadTemp,
    handleRemove,
    handleAbort
  };
};

var base$p = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;

  // ================ DATA ================

  /**
   * The axios request when temp is being uploaded.
   * 
   * @type {object}
   * @private
   */
  var request = ref(null);

  /**
   * The form's axios instance.
   * 
   * @type {object}
   * @private
   */
  var axios = ref(null);

  // ============== COMPUTED ==============

  /**
   * Whether a temp file is currently being uploaded.
   * 
   * @private
   */
  var uploading = computed(() => {
    return request.value !== null;
  });

  // =============== HOOKS ================

  onMounted(() => {
    axios.value = form$.value.$vueform.services.axios;
  });
  return {
    request,
    axios,
    uploading
  };
};

function checkFileType(file, accept) {
  if (!accept) {
    return true;
  }
  if (!_.isArray(accept)) {
    accept = accept.split(',');
    _.each(accept, (one, i) => {
      accept[i] = one.trim();
    });
  }
  return _.some(accept, a => {
    var universal = a.match(/^([^\/]+)\/\*$/);
    if (universal) {
      return !!new RegExp("^".concat(universal[1], "/")).exec(file.type);
    } else if (a == file.type) {
      return true;
    } else if (a == ".".concat(file.name.split('.').pop())) {
      return true;
    }
    return false;
  });
}

var base$o = function base(props, context, dependencies) {
  var {
    accept,
    auto
  } = toRefs(props);

  // ============ DEPENDENCIES =============

  var update = dependencies.update;
  var isDisabled = dependencies.isDisabled;
  var uploadTemp = dependencies.uploadTemp;

  // ============== COMPUTED ==============

  /**
   * Whether `drop` is enabled and browser supports dragging.
   * 
   * @type {boolean}
   * @private
   */
  var canDrop = computed(() => {
    var div = document.createElement('div');
    return ('draggable' in div || 'ondragstart' in div && 'ondrop' in div) && 'FormData' in window && 'FileReader' in window;
  });

  // =============== METHODS ==============

  /**
   * Handles the `drop` event.
   * 
   * @param {Event} e 
   * @returns {void}
   * @private 
   */
  var handleDrop = e => {
    if (isDisabled.value) {
      return;
    }
    var file = e.dataTransfer.files[0];
    if (!checkFileType(file, accept.value)) {
      return;
    }
    update(file || null);
    if (auto.value) {
      uploadTemp();
    }
    file.value = null;
  };
  return {
    canDrop,
    handleDrop
  };
};
var multifile$3 = function multifile(props, context, dependencies) {
  var {
    accept
  } = toRefs(props);
  var {
    canDrop
  } = base$o(props, context, dependencies);

  // ============ DEPENDENCIES =============

  var add = dependencies.add;
  var isDisabled = dependencies.isDisabled;
  var isObject = dependencies.isObject;
  var storeFileName = dependencies.storeFileName;

  // =============== METHODS ==============

  var handleDrop = e => {
    if (!e.dataTransfer || !e.dataTransfer.files || e.dataTransfer.files.length == 0 || isDisabled.value) {
      return;
    }
    _.each(e.dataTransfer.files, file => {
      if (!checkFileType(file, accept.value)) {
        return;
      }
      add(isObject.value ? {
        [storeFileName.value]: file
      } : file);
    });
  };
  return {
    canDrop,
    handleDrop
  };
};

var base$n = function base(props, context, dependencies) {
  // ================ DATA ================

  /**
   * Whether async file removing request is in progress.
   * 
   * @type {boolean}
   */
  var removing = ref(false);
  return {
    removing
  };
};

var base$m = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============

  var fire = dependencies.fire;
  dependencies.listeners;

  // =============== METHODS ==============

  /**
   * Handles `error` event.
   *
   * @param {Error} error* the error object
   * @returns {void}
   * @private
   */
  var handleError = error => {
    fire('error', error);
  };
  return {
    handleError
  };
};

var FileElement = {
  name: 'FileElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'remove', 'error', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'file',
      private: true
    },
    default: {
      required: false,
      type: [String, Object],
      default: null
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    onRemove: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onError: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    view: {
      type: [String],
      required: false,
      default: 'file'
    },
    drop: {
      required: false,
      type: [Boolean],
      default: false
    },
    accept: {
      required: false,
      type: [String, Array],
      default: null
    },
    clickable: {
      required: false,
      type: [Boolean],
      default: true
    },
    url: {
      required: false,
      type: [String, Boolean],
      default: '/'
    },
    previewUrl: {
      required: false,
      type: [String],
      default: undefined
    },
    auto: {
      required: false,
      type: [Boolean],
      default: true
    },
    urls: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    methods: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    uploadTempEndpoint: {
      required: false,
      type: [Object, String, Function],
      default: undefined,
      '@default': 'config.endpoints.uploadTempFile'
    },
    removeTempEndpoint: {
      required: false,
      type: [Object, String, Function],
      default: undefined,
      '@default': 'config.endpoints.removeTempFile'
    },
    removeEndpoint: {
      required: false,
      type: [Object, String, Function],
      default: undefined,
      '@default': 'config.endpoints.removeFile'
    },
    params: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    softRemove: {
      required: false,
      type: [Boolean],
      default: false
    },
    embed: {
      type: [Boolean],
      required: false,
      default: false,
      private: true
    }
  },
  setup(props, context) {
    context.features = [base$14, base$13, base$Q, base$G, base$K, base$N, base$A, base$n, base$O, base$16, file$4, base$p, base$E, base$$, base$B, file$1, file$2, base$m, base$q, base$o, base$v, base$W, file, base$U, base$T, base$P, base$V, base$S, file$3];
    context.slots = ['label', 'info', 'description', 'before', 'between', 'after'];
    return _objectSpread2$1({}, base$H(props, context));
  }
};

var base$l = function base(props, context, dependencies) {
  // ================ DATA ================

  /**
   * List of child element components.
   * 
   * @type {array<component>}
   * @default [children<component>]
   * @private
   */
  var children$Array = ref([]);

  // ============== COMPUTED ==============

  /**
   * Child element components.
   * 
   * @type {object<Element>}
   */
  var children$ = computed(() => {
    var children$ = {};
    children$Array.value.forEach(e$ => {
      children$[e$.name] = e$;
    });
    return children$;
  });

  // =============== METHODS ==============

  return {
    children$Array,
    children$
  };
};
var object = function object(props, context, dependencies) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var schemaName = options.schemaName || 'schema';
  var {
    [schemaName]: schema
  } = toRefs(props);
  var {
    children$Array,
    children$
  } = base$l();

  // ============== COMPUTED ==============

  /**
   * Schema of child elements.
   * 
   * @type {object}
   * @private
   */
  var children = computed(() => {
    return schema.value;
  });

  // Resort children$Array when children
  // order changes or a child is removed
  if (schema) {
    watch(schema, newValue => {
      var newChildren$Array = [];
      _.each(newValue, (child, name) => {
        newChildren$Array.push(children$Array.value[children$Array.value.map(e$ => normalize(e$.name)).indexOf(normalize(name))]);
      });
      children$Array.value = newChildren$Array;
    }, {
      flush: 'post',
      deep: true
    });
  }
  return {
    children,
    children$Array,
    children$
  };
};
var group = object;

var GroupElement = {
  name: 'GroupElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'group',
      private: true
    },
    default: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    schema: {
      required: false,
      type: [Object],
      default: () => ({})
    }
  },
  setup(props, context) {
    context.features = [base$14, base$13, base$Q, group$5, base$O, object$1, base$16, base$L, group, group$3, base$W, group$2, group$1, base$Z, base$$, base$U, base$T, base$P, base$V, base$S, group$4, base$J];
    context.slots = ['label', 'info', 'description', 'before', 'between', 'after'];
    return _objectSpread2$1({}, base$H(props, context));
  }
};

var HiddenElement = {
  name: 'HiddenElement',
  mixins: [BaseElement, HasChange, HasData, HasValidation],
  emits: ['change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'hidden',
      private: true
    },
    default: {
      required: false,
      type: [String, Number],
      default: null
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    meta: {
      required: false,
      type: [Boolean],
      default: false
    }
  },
  setup(props, context) {
    context.features = [base$14, base$13, base$G, base$K, base$A, base$C, base$O, base$T, base$16, base$L, base$E, base$$, base$D, base$B, base$F, base$v];
    return _objectSpread2$1({}, base$H(props, context));
  }
};

/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var version = "1.15.0";

function userAgent(pattern) {
  if (typeof window !== 'undefined' && window.navigator) {
    return !! /*@__PURE__*/navigator.userAgent.match(pattern);
  }
}

var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);

var captureMode = {
  capture: false,
  passive: false
};

function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}

function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}

function matches(
/**HTMLElement*/
el,
/**String*/
selector) {
  if (!selector) return;
  selector[0] === '>' && (selector = selector.substring(1));

  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }

  return false;
}

function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}

function closest(
/**HTMLElement*/
el,
/**String*/
selector,
/**HTMLElement*/
ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;

    do {
      if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }

      if (el === ctx) break;
      /* jshint boss:true */
    } while (el = getParentOrHost(el));
  }

  return null;
}

var R_SPACE = /\s+/g;

function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? 'add' : 'remove'](name);
    } else {
      var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
      el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
    }
  }
}

function css(el, prop, val) {
  var style = el && el.style;

  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, '');
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }

      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf('webkit') === -1) {
        prop = '-webkit-' + prop;
      }

      style[prop] = val + (typeof val === 'string' ? '' : 'px');
    }
  }
}

function matrix(el, selfOnly) {
  var appliedTransforms = '';

  if (typeof el === 'string') {
    appliedTransforms = el;
  } else {
    do {
      var transform = css(el, 'transform');

      if (transform && transform !== 'none') {
        appliedTransforms = transform + ' ' + appliedTransforms;
      }
      /* jshint boss:true */

    } while (!selfOnly && (el = el.parentNode));
  }

  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  /*jshint -W056 */

  return matrixFn && new matrixFn(appliedTransforms);
}

function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName),
        i = 0,
        n = list.length;

    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }

    return list;
  }

  return [];
}

function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;

  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}
/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */


function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window) return;
  var elRect, top, left, bottom, right, height, width;

  if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }

  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    // Adjust for translate()
    container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
    // Not needed on <= IE11

    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
          var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container

          top -= containerRect.top + parseInt(css(container, 'border-top-width'));
          left -= containerRect.left + parseInt(css(container, 'border-left-width'));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
        /* jshint boss:true */

      } while (container = container.parentNode);
    }
  }

  if (undoScale && el !== window) {
    // Adjust for scale()
    var elMatrix = matrix(container || el),
        scaleX = elMatrix && elMatrix.a,
        scaleY = elMatrix && elMatrix.d;

    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }

  return {
    top: top,
    left: left,
    bottom: bottom,
    right: right,
    width: width,
    height: height
  };
}
/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */


function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true),
      elSideVal = getRect(el)[elSide];
  /* jshint boss:true */

  while (parent) {
    var parentSideVal = getRect(parent)[parentSide],
        visible = void 0;

    if (parentSide === 'top' || parentSide === 'left') {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }

    if (!visible) return parent;
    if (parent === getWindowScrollingElement()) break;
    parent = getParentAutoScrollElement(parent, false);
  }

  return false;
}
/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */


function getChild(el, childNum, options, includeDragEl) {
  var currentChild = 0,
      i = 0,
      children = el.children;

  while (i < children.length) {
    if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && (includeDragEl || children[i] !== Sortable.dragged) && closest(children[i], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }

      currentChild++;
    }

    i++;
  }

  return null;
}
/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */


function lastChild(el, selector) {
  var last = el.lastElementChild;

  while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }

  return last || null;
}
/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */


function index$1(el, selector) {
  var index = 0;

  if (!el || !el.parentNode) {
    return -1;
  }
  /* jshint boss:true */


  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index++;
    }
  }

  return index;
}
/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */


function getRelativeScrollOffset(el) {
  var offsetLeft = 0,
      offsetTop = 0,
      winScroller = getWindowScrollingElement();

  if (el) {
    do {
      var elMatrix = matrix(el),
          scaleX = elMatrix.a,
          scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }

  return [offsetLeft, offsetTop];
}
/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */


function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i)) continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
    }
  }

  return -1;
}

function getParentAutoScrollElement(el, includeSelf) {
  // skip to window
  if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;

  do {
    // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css(elem);

      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
        if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
        if (gotSelf || includeSelf) return elem;
        gotSelf = true;
      }
    }
    /* jshint boss:true */

  } while (elem = elem.parentNode);

  return getWindowScrollingElement();
}

function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }

  return dst;
}

function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}

var _throttleTimeout;

function throttle(callback, ms) {
  return function () {
    if (!_throttleTimeout) {
      var args = arguments,
          _this = this;

      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }

      _throttleTimeout = setTimeout(function () {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}

function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}

function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}

function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;

  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}

var expando = 'Sortable' + new Date().getTime();

function AnimationStateManager() {
  var animationStates = [],
      animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation) return;
      var children = [].slice.call(this.el.children);
      children.forEach(function (child) {
        if (css(child, 'display') === 'none' || child === Sortable.ghost) return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });

        var fromRect = _objectSpread2({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation


        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);

          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }

        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target: target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;

      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === 'function') callback();
        return;
      }

      var animating = false,
          animationTime = 0;
      animationStates.forEach(function (state) {
        var time = 0,
            target = state.target,
            fromRect = target.fromRect,
            toRect = getRect(target),
            prevFromRect = target.prevFromRect,
            prevToRect = target.prevToRect,
            animatingRect = state.rect,
            targetMatrix = matrix(target, true);

        if (targetMatrix) {
          // Compensate for current animation
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }

        target.toRect = toRect;

        if (target.thisAnimationDuration) {
          // Could also check if animatingRect is between fromRect and toRect
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            // If returning to same place as started from animation and on same axis
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        } // if fromRect != toRect: animate


        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;

          if (!time) {
            time = _this.options.animation;
          }

          _this.animate(target, animatingRect, toRect, time);
        }

        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function () {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);

      if (!animating) {
        if (typeof callback === 'function') callback();
      } else {
        animationCallbackId = setTimeout(function () {
          if (typeof callback === 'function') callback();
        }, animationTime);
      }

      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, 'transition', '');
        css(target, 'transform', '');
        var elMatrix = matrix(this.el),
            scaleX = elMatrix && elMatrix.a,
            scaleY = elMatrix && elMatrix.d,
            translateX = (currentRect.left - toRect.left) / (scaleX || 1),
            translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
        this.forRepaintDummy = repaint(target); // repaint

        css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
        css(target, 'transform', 'translate3d(0,0,0)');
        typeof target.animated === 'number' && clearTimeout(target.animated);
        target.animated = setTimeout(function () {
          css(target, 'transition', '');
          css(target, 'transform', '');
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}

function repaint(target) {
  return target.offsetWidth;
}

function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}

var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    // Set default static properties
    for (var option in defaults) {
      if (defaults.hasOwnProperty(option) && !(option in plugin)) {
        plugin[option] = defaults[option];
      }
    }

    plugins.forEach(function (p) {
      if (p.pluginName === plugin.pluginName) {
        throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
      }
    });
    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;

    this.eventCanceled = false;

    evt.cancel = function () {
      _this.eventCanceled = true;
    };

    var eventNameGlobal = eventName + 'Global';
    plugins.forEach(function (plugin) {
      if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable

      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread2({
          sortable: sortable
        }, evt));
      } // Only fire plugin event if plugin is enabled in this sortable,
      // and plugin has event defined


      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread2({
          sortable: sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults, options) {
    plugins.forEach(function (plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized; // Add default options from plugin

      _extends(defaults, initialized.defaults);
    });

    for (var option in sortable.options) {
      if (!sortable.options.hasOwnProperty(option)) continue;
      var modified = this.modifyOption(sortable, option, sortable.options[option]);

      if (typeof modified !== 'undefined') {
        sortable.options[option] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function (plugin) {
      if (typeof plugin.eventProperties !== 'function') return;

      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function (plugin) {
      // Plugin must exist on the Sortable
      if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin

      if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};

function dispatchEvent(_ref) {
  var sortable = _ref.sortable,
      rootEl = _ref.rootEl,
      name = _ref.name,
      targetEl = _ref.targetEl,
      cloneEl = _ref.cloneEl,
      toEl = _ref.toEl,
      fromEl = _ref.fromEl,
      oldIndex = _ref.oldIndex,
      newIndex = _ref.newIndex,
      oldDraggableIndex = _ref.oldDraggableIndex,
      newDraggableIndex = _ref.newDraggableIndex,
      originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl && rootEl[expando];
  if (!sortable) return;
  var evt,
      options = sortable.options,
      onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent(name, true, true);
  }

  evt.to = toEl || rootEl;
  evt.from = fromEl || rootEl;
  evt.item = targetEl || rootEl;
  evt.clone = cloneEl;
  evt.oldIndex = oldIndex;
  evt.newIndex = newIndex;
  evt.oldDraggableIndex = oldDraggableIndex;
  evt.newDraggableIndex = newDraggableIndex;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;

  var allEventProperties = _objectSpread2(_objectSpread2({}, extraEventProperties), PluginManager.getEventProperties(name, sortable));

  for (var option in allEventProperties) {
    evt[option] = allEventProperties[option];
  }

  if (rootEl) {
    rootEl.dispatchEvent(evt);
  }

  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}

var _excluded = ["evt"];

var pluginEvent = function pluginEvent(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      originalEvent = _ref.evt,
      data = _objectWithoutProperties(_ref, _excluded);

  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread2({
    dragEl: dragEl,
    parentEl: parentEl,
    ghostEl: ghostEl,
    rootEl: rootEl,
    nextEl: nextEl,
    lastDownEl: lastDownEl,
    cloneEl: cloneEl,
    cloneHidden: cloneHidden,
    dragStarted: moved,
    putSortable: putSortable,
    activeSortable: Sortable.active,
    originalEvent: originalEvent,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable: sortable,
        name: name,
        originalEvent: originalEvent
      });
    }
  }, data));
};

function _dispatchEvent(info) {
  dispatchEvent(_objectSpread2({
    putSortable: putSortable,
    cloneEl: cloneEl,
    targetEl: dragEl,
    rootEl: rootEl,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex
  }, info));
}

var dragEl,
    parentEl,
    ghostEl,
    rootEl,
    nextEl,
    lastDownEl,
    cloneEl,
    cloneHidden,
    oldIndex,
    newIndex,
    oldDraggableIndex,
    newDraggableIndex,
    activeGroup,
    putSortable,
    awaitingDragStarted = false,
    ignoreNextClick = false,
    sortables = [],
    tapEvt,
    touchEvt,
    lastDx,
    lastDy,
    tapDistanceLeft,
    tapDistanceTop,
    moved,
    lastTarget,
    lastDirection,
    pastFirstInvertThresh = false,
    isCircumstantialInvert = false,
    targetMoveDistance,
    // For positioning ghost absolutely
ghostRelativeParent,
    ghostRelativeParentInitialScroll = [],
    // (left, top)
_silent = false,
    savedInputChecked = [];
/** @const */

var documentExists = typeof document !== 'undefined',
    PositionGhostAbsolutely = IOS,
    CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
    // This will not pass for IE9, because IE9 DnD only works on anchors
supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
    supportCssPointerEvents = function () {
  if (!documentExists) return; // false when <= IE11

  if (IE11OrLess) {
    return false;
  }

  var el = document.createElement('x');
  el.style.cssText = 'pointer-events:auto';
  return el.style.pointerEvents === 'auto';
}(),
    _detectDirection = function _detectDirection(el, options) {
  var elCSS = css(el),
      elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
      child1 = getChild(el, 0, options),
      child2 = getChild(el, 1, options),
      firstChildCSS = child1 && css(child1),
      secondChildCSS = child2 && css(child2),
      firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
      secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;

  if (elCSS.display === 'flex') {
    return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
  }

  if (elCSS.display === 'grid') {
    return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
  }

  if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
    var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
    return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
  }

  return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
},
    _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
  var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
      dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
      dragElOppLength = vertical ? dragRect.width : dragRect.height,
      targetS1Opp = vertical ? targetRect.left : targetRect.top,
      targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
      targetOppLength = vertical ? targetRect.width : targetRect.height;
  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
},

/**
 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
 * @param  {Number} x      X position
 * @param  {Number} y      Y position
 * @return {HTMLElement}   Element of the first found nearest Sortable
 */
_detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
  var ret;
  sortables.some(function (sortable) {
    var threshold = sortable[expando].options.emptyInsertThreshold;
    if (!threshold || lastChild(sortable)) return;
    var rect = getRect(sortable),
        insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
        insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;

    if (insideHorizontally && insideVertically) {
      return ret = sortable;
    }
  });
  return ret;
},
    _prepareGroup = function _prepareGroup(options) {
  function toFn(value, pull) {
    return function (to, from, dragEl, evt) {
      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;

      if (value == null && (pull || sameGroup)) {
        // Default pull value
        // Default pull and put value if same group
        return true;
      } else if (value == null || value === false) {
        return false;
      } else if (pull && value === 'clone') {
        return value;
      } else if (typeof value === 'function') {
        return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
      } else {
        var otherGroup = (pull ? to : from).options.group.name;
        return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
      }
    };
  }

  var group = {};
  var originalGroup = options.group;

  if (!originalGroup || _typeof(originalGroup) != 'object') {
    originalGroup = {
      name: originalGroup
    };
  }

  group.name = originalGroup.name;
  group.checkPull = toFn(originalGroup.pull, true);
  group.checkPut = toFn(originalGroup.put);
  group.revertClone = originalGroup.revertClone;
  options.group = group;
},
    _hideGhostForTarget = function _hideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', 'none');
  }
},
    _unhideGhostForTarget = function _unhideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', '');
  }
}; // #1184 fix - Prevent click event on fallback if dragged but item not changed position


if (documentExists && !ChromeForAndroid) {
  document.addEventListener('click', function (evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}

var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;

    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

    if (nearest) {
      // Create imitation event
      var event = {};

      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }

      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;

      nearest[expando]._onDragOver(event);
    }
  }
};

var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};
/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */


function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }

  this.el = el; // root element

  this.options = options = _extends({}, options); // Export instance

  el[expando] = this;
  var defaults = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    ignore: 'a, img',
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl) {
      dataTransfer.setData('Text', dragEl.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: 'data-id',
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: 'sortable-fallback',
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window && !Safari,
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults); // Set default options

  for (var name in defaults) {
    !(name in options) && (options[name] = defaults[name]);
  }

  _prepareGroup(options); // Bind all private methods


  for (var fn in this) {
    if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
      this[fn] = this[fn].bind(this);
    }
  } // Setup drag mode


  this.nativeDraggable = options.forceFallback ? false : supportDraggable;

  if (this.nativeDraggable) {
    // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
  } // Bind events


  if (options.supportPointer) {
    on(el, 'pointerdown', this._onTapStart);
  } else {
    on(el, 'mousedown', this._onTapStart);
    on(el, 'touchstart', this._onTapStart);
  }

  if (this.nativeDraggable) {
    on(el, 'dragover', this);
    on(el, 'dragenter', this);
  }

  sortables.push(this.el); // Restore sorting

  options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager

  _extends(this, AnimationStateManager());
}

Sortable.prototype =
/** @lends Sortable.prototype */
{
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart(
  /** Event|TouchEvent */
  evt) {
    if (!evt.cancelable) return;

    var _this = this,
        el = this.el,
        options = this.options,
        preventOnFilter = options.preventOnFilter,
        type = evt.type,
        touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
        target = (touch || evt).target,
        originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
        filter = options.filter;

    _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.


    if (dragEl) {
      return;
    }

    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return; // only left button and enabled
    } // cancel dnd if original target is content editable


    if (originalTarget.isContentEditable) {
      return;
    } // Safari ignores further event handling after mousedown


    if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === 'SELECT') {
      return;
    }

    target = closest(target, options.draggable, el, false);

    if (target && target.animated) {
      return;
    }

    if (lastDownEl === target) {
      // Ignoring duplicate `down`
      return;
    } // Get the index of the dragged element within its parent


    oldIndex = index$1(target);
    oldDraggableIndex = index$1(target, options.draggable); // Check filter

    if (typeof filter === 'function') {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: 'filter',
          targetEl: target,
          toEl: el,
          fromEl: el
        });

        pluginEvent('filter', _this, {
          evt: evt
        });
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    } else if (filter) {
      filter = filter.split(',').some(function (criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);

        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: 'filter',
            targetEl: target,
            fromEl: el,
            toEl: el
          });

          pluginEvent('filter', _this, {
            evt: evt
          });
          return true;
        }
      });

      if (filter) {
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    }

    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    } // Prepare `dragstart`


    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart(
  /** Event */
  evt,
  /** Touch */
  touch,
  /** HTMLElement */
  target) {
    var _this = this,
        el = _this.el,
        options = _this.options,
        ownerDocument = el.ownerDocument,
        dragStartFn;

    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style['will-change'] = 'all';

      dragStartFn = function dragStartFn() {
        pluginEvent('delayEnded', _this, {
          evt: evt
        });

        if (Sortable.eventCanceled) {
          _this._onDrop();

          return;
        } // Delayed drag has been triggered
        // we can re-enable the events: touchmove/mousemove


        _this._disableDelayedDragEvents();

        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        } // Bind the events: dragstart/dragend


        _this._triggerDragStart(evt, touch); // Drag start event


        _dispatchEvent({
          sortable: _this,
          name: 'choose',
          originalEvent: evt
        }); // Chosen item


        toggleClass(dragEl, options.chosenClass, true);
      }; // Disable "draggable"


      options.ignore.split(',').forEach(function (criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mouseup', _this._onDrop);
      on(ownerDocument, 'touchend', _this._onDrop);
      on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)

      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }

      pluginEvent('delayStart', this, {
        evt: evt
      }); // Delay is impossible for native DnD in Edge or IE

      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();

          return;
        } // If the user moves the pointer or let go the click or touch
        // before the delay has been reached:
        // disable the delayed drag


        on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
        on(ownerDocument, 'touchend', _this._disableDelayedDrag);
        on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
        on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
        on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(
  /** TouchEvent|PointerEvent **/
  e) {
    var touch = e.touches ? e.touches[0] : e;

    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);

    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._disableDelayedDrag);
    off(ownerDocument, 'touchend', this._disableDelayedDrag);
    off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
    off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart(
  /** Event */
  evt,
  /** Touch */
  touch) {
    touch = touch || evt.pointerType == 'touch' && evt;

    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, 'pointermove', this._onTouchMove);
      } else if (touch) {
        on(document, 'touchmove', this._onTouchMove);
      } else {
        on(document, 'mousemove', this._onTouchMove);
      }
    } else {
      on(dragEl, 'dragend', this);
      on(rootEl, 'dragstart', this._onDragStart);
    }

    try {
      if (document.selection) {
        // Timeout neccessary for IE9
        _nextTick(function () {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {}
  },
  _dragStarted: function _dragStarted(fallback, evt) {

    awaitingDragStarted = false;

    if (rootEl && dragEl) {
      pluginEvent('dragStarted', this, {
        evt: evt
      });

      if (this.nativeDraggable) {
        on(document, 'dragover', _checkOutsideTargetEl);
      }

      var options = this.options; // Apply effect

      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost(); // Drag start event

      _dispatchEvent({
        sortable: this,
        name: 'start',
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;

      _hideGhostForTarget();

      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;

      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent) break;
        parent = target;
      }

      dragEl.parentNode[expando]._isOutsideThisEl(target);

      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target: target,
              rootEl: parent
            });

            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }

          target = parent; // store last element
        }
        /* jshint boss:true */
        while (parent = parent.parentNode);
      }

      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove(
  /**TouchEvent*/
  evt) {
    if (tapEvt) {
      var options = this.options,
          fallbackTolerance = options.fallbackTolerance,
          fallbackOffset = options.fallbackOffset,
          touch = evt.touches ? evt.touches[0] : evt,
          ghostMatrix = ghostEl && matrix(ghostEl, true),
          scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
          scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
          relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
          dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
          dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging

      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }

        this._onDragStart(evt, true);
      }

      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }

        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, 'webkitTransform', cssMatrix);
        css(ghostEl, 'mozTransform', cssMatrix);
        css(ghostEl, 'msTransform', cssMatrix);
        css(ghostEl, 'transform', cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }

      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    // Bug if using scale(): https://stackoverflow.com/questions/2637058
    // Not being adjusted for
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl,
          rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
          options = this.options; // Position absolutely

      if (PositionGhostAbsolutely) {
        // Get relatively positioned parent
        ghostRelativeParent = container;

        while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }

        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }

        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }

      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css(ghostEl, 'transition', '');
      css(ghostEl, 'transform', '');
      css(ghostEl, 'box-sizing', 'border-box');
      css(ghostEl, 'margin', 0);
      css(ghostEl, 'top', rect.top);
      css(ghostEl, 'left', rect.left);
      css(ghostEl, 'width', rect.width);
      css(ghostEl, 'height', rect.height);
      css(ghostEl, 'opacity', '0.8');
      css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
      css(ghostEl, 'zIndex', '100000');
      css(ghostEl, 'pointerEvents', 'none');
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl); // Set transform-origin

      css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
    }
  },
  _onDragStart: function _onDragStart(
  /**Event*/
  evt,
  /**boolean*/
  fallback) {
    var _this = this;

    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent('dragStart', this, {
      evt: evt
    });

    if (Sortable.eventCanceled) {
      this._onDrop();

      return;
    }

    pluginEvent('setupClone', this);

    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.removeAttribute("id");
      cloneEl.draggable = false;
      cloneEl.style['will-change'] = '';

      this._hideClone();

      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    } // #1143: IFrame support workaround


    _this.cloneId = _nextTick(function () {
      pluginEvent('clone', _this);
      if (Sortable.eventCanceled) return;

      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }

      _this._hideClone();

      _dispatchEvent({
        sortable: _this,
        name: 'clone'
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events

    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      // Undo what was set in _prepareDragStart before drag started
      off(document, 'mouseup', _this._onDrop);
      off(document, 'touchend', _this._onDrop);
      off(document, 'touchcancel', _this._onDrop);

      if (dataTransfer) {
        dataTransfer.effectAllowed = 'move';
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }

      on(document, 'drop', _this); // #1276 fix:

      css(dragEl, 'transform', 'translateZ(0)');
    }

    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, 'selectstart', _this);
    moved = true;

    if (Safari) {
      css(document.body, 'user-select', 'none');
    }
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function _onDragOver(
  /**Event*/
  evt) {
    var el = this.el,
        target = evt.target,
        dragRect,
        targetRect,
        revert,
        options = this.options,
        group = options.group,
        activeSortable = Sortable.active,
        isOwner = activeGroup === group,
        canSort = options.sort,
        fromSortable = putSortable || activeSortable,
        vertical,
        _this = this,
        completedFired = false;

    if (_silent) return;

    function dragOverEvent(name, extra) {
      pluginEvent(name, _this, _objectSpread2({
        evt: evt,
        isOwner: isOwner,
        axis: vertical ? 'vertical' : 'horizontal',
        revert: revert,
        dragRect: dragRect,
        targetRect: targetRect,
        canSort: canSort,
        fromSortable: fromSortable,
        target: target,
        completed: completed,
        onMove: function onMove(target, after) {
          return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
        },
        changed: changed
      }, extra));
    } // Capture animation state


    function capture() {
      dragOverEvent('dragOverAnimationCapture');

      _this.captureAnimationState();

      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    } // Return invocation when dragEl is inserted (or completed)


    function completed(insertion) {
      dragOverEvent('dragOverCompleted', {
        insertion: insertion
      });

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }

        if (_this !== fromSortable) {
          // Set ghost class to new sortable's ghost class
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }

        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        } // Animation


        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }

        _this.animateAll(function () {
          dragOverEvent('dragOverAnimationComplete');
          _this._ignoreWhileAnimating = null;
        });

        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      } // Null lastTarget if it is not inside a previously swapped element


      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      } // no bubbling and not fallback


      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted


        !insertion && nearestEmptyInsertDetectEvent(evt);
      }

      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    } // Call when dragEl has been inserted


    function changed() {
      newIndex = index$1(dragEl);
      newDraggableIndex = index$1(dragEl, options.draggable);

      _dispatchEvent({
        sortable: _this,
        name: 'change',
        toEl: el,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        originalEvent: evt
      });
    }

    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }

    target = closest(target, options.draggable, el, true);
    dragOverEvent('dragOver');
    if (Sortable.eventCanceled) return completedFired;

    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }

    ignoreNextClick = false;

    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = parentEl !== rootEl) // Reverting item into the original list
    : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === 'vertical';
      dragRect = getRect(dragEl);
      dragOverEvent('dragOverValid');
      if (Sortable.eventCanceled) return completedFired;

      if (revert) {
        parentEl = rootEl; // actualization

        capture();

        this._hideClone();

        dragOverEvent('revert');

        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }

        return completed(true);
      }

      var elLastChild = lastChild(el, options.draggable);

      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        // Insert to end of list
        // If already at end of list: Do not insert
        if (elLastChild === dragEl) {
          return completed(false);
        } // if there is a last element, it is the target


        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }

        if (target) {
          targetRect = getRect(target);
        }

        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();

          if (elLastChild && elLastChild.nextSibling) {
            // the last draggable element is not the last node
            el.insertBefore(dragEl, elLastChild.nextSibling);
          } else {
            el.appendChild(dragEl);
          }

          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (elLastChild && _ghostIsFirst(evt, vertical, this)) {
        // Insert to start of list
        var firstChild = getChild(el, 0, options, true);

        if (firstChild === dragEl) {
          return completed(false);
        }

        target = firstChild;
        targetRect = getRect(target);

        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, false) !== false) {
          capture();
          el.insertBefore(dragEl, firstChild);
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0,
            targetBeforeFirstSwap,
            differentLevel = dragEl.parentNode !== el,
            differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
            side1 = vertical ? 'top' : 'left',
            scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),
            scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;

        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }

        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;

        if (direction !== 0) {
          // Check if target is beside dragEl in respective direction (ignoring hidden elements)
          var dragIndex = index$1(dragEl);

          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
        } // If dragEl is already beside target: Do not insert


        if (direction === 0 || sibling === target) {
          return completed(false);
        }

        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling,
            after = false;
        after = direction === 1;

        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }

          _silent = true;
          setTimeout(_unsilent, 30);
          capture();

          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          } // Undo chrome's scroll adjustment (has no effect on other browsers)


          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }

          parentEl = dragEl.parentNode; // actualization
          // must be done before animation

          if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }

          changed();
          return completed(true);
        }
      }

      if (el.contains(dragEl)) {
        return completed(false);
      }
    }

    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, 'mousemove', this._onTouchMove);
    off(document, 'touchmove', this._onTouchMove);
    off(document, 'pointermove', this._onTouchMove);
    off(document, 'dragover', nearestEmptyInsertDetectEvent);
    off(document, 'mousemove', nearestEmptyInsertDetectEvent);
    off(document, 'touchmove', nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._onDrop);
    off(ownerDocument, 'touchend', this._onDrop);
    off(ownerDocument, 'pointerup', this._onDrop);
    off(ownerDocument, 'touchcancel', this._onDrop);
    off(document, 'selectstart', this);
  },
  _onDrop: function _onDrop(
  /**Event*/
  evt) {
    var el = this.el,
        options = this.options; // Get the index of the dragged element within its parent

    newIndex = index$1(dragEl);
    newDraggableIndex = index$1(dragEl, options.draggable);
    pluginEvent('drop', this, {
      evt: evt
    });
    parentEl = dragEl && dragEl.parentNode; // Get again after plugin event

    newIndex = index$1(dragEl);
    newDraggableIndex = index$1(dragEl, options.draggable);

    if (Sortable.eventCanceled) {
      this._nulling();

      return;
    }

    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);

    _cancelNextTick(this.cloneId);

    _cancelNextTick(this._dragStartId); // Unbind events


    if (this.nativeDraggable) {
      off(document, 'drop', this);
      off(el, 'dragstart', this._onDragStart);
    }

    this._offMoveEvents();

    this._offUpEvents();

    if (Safari) {
      css(document.body, 'user-select', '');
    }

    css(dragEl, 'transform', '');

    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }

      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        // Remove clone(s)
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }

      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, 'dragend', this);
        }

        _disableDraggable(dragEl);

        dragEl.style['will-change'] = ''; // Remove classes
        // ghostClass is added in dragStarted

        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }

        toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event

        _dispatchEvent({
          sortable: this,
          name: 'unchoose',
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });

        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            // Add event
            _dispatchEvent({
              rootEl: parentEl,
              name: 'add',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            }); // Remove event


            _dispatchEvent({
              sortable: this,
              name: 'remove',
              toEl: parentEl,
              originalEvent: evt
            }); // drag from one list and drop into another


            _dispatchEvent({
              rootEl: parentEl,
              name: 'sort',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });

            _dispatchEvent({
              sortable: this,
              name: 'sort',
              toEl: parentEl,
              originalEvent: evt
            });
          }

          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              // drag & drop within the same list
              _dispatchEvent({
                sortable: this,
                name: 'update',
                toEl: parentEl,
                originalEvent: evt
              });

              _dispatchEvent({
                sortable: this,
                name: 'sort',
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }

        if (Sortable.active) {
          /* jshint eqnull:true */
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }

          _dispatchEvent({
            sortable: this,
            name: 'end',
            toEl: parentEl,
            originalEvent: evt
          }); // Save sorting


          this.save();
        }
      }
    }

    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent('nulling', this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function (el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent(
  /**Event*/
  evt) {
    switch (evt.type) {
      case 'drop':
      case 'dragend':
        this._onDrop(evt);

        break;

      case 'dragenter':
      case 'dragover':
        if (dragEl) {
          this._onDragOver(evt);

          _globalDragOver(evt);
        }

        break;

      case 'selectstart':
        evt.preventDefault();
        break;
    }
  },

  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var order = [],
        el,
        children = this.el.children,
        i = 0,
        n = children.length,
        options = this.options;

    for (; i < n; i++) {
      el = children[i];

      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }

    return order;
  },

  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(order, useAnimation) {
    var items = {},
        rootEl = this.el;
    this.toArray().forEach(function (id, i) {
      var el = rootEl.children[i];

      if (closest(el, this.options.draggable, rootEl, false)) {
        items[id] = el;
      }
    }, this);
    useAnimation && this.captureAnimationState();
    order.forEach(function (id) {
      if (items[id]) {
        rootEl.removeChild(items[id]);
        rootEl.appendChild(items[id]);
      }
    });
    useAnimation && this.animateAll();
  },

  /**
   * Save the current sorting
   */
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },

  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },

  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(name, value) {
    var options = this.options;

    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);

      if (typeof modifiedValue !== 'undefined') {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }

      if (name === 'group') {
        _prepareGroup(options);
      }
    }
  },

  /**
   * Destroy
   */
  destroy: function destroy() {
    pluginEvent('destroy', this);
    var el = this.el;
    el[expando] = null;
    off(el, 'mousedown', this._onTapStart);
    off(el, 'touchstart', this._onTapStart);
    off(el, 'pointerdown', this._onTapStart);

    if (this.nativeDraggable) {
      off(el, 'dragover', this);
      off(el, 'dragenter', this);
    } // Remove draggable attributes


    Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
      el.removeAttribute('draggable');
    });

    this._onDrop();

    this._disableDelayedDragEvents();

    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent('hideClone', this);
      if (Sortable.eventCanceled) return;
      css(cloneEl, 'display', 'none');

      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }

      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable) {
    if (putSortable.lastPutMode !== 'clone') {
      this._hideClone();

      return;
    }

    if (cloneHidden) {
      pluginEvent('showClone', this);
      if (Sortable.eventCanceled) return; // show clone at dragEl or original position

      if (dragEl.parentNode == rootEl && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }

      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }

      css(cloneEl, 'display', '');
      cloneHidden = false;
    }
  }
};

function _globalDragOver(
/**Event*/
evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = 'move';
  }

  evt.cancelable && evt.preventDefault();
}

function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt,
      sortable = fromEl[expando],
      onMoveFn = sortable.options.onMove,
      retVal; // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent('move', {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent('move', true, true);
  }

  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);

  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }

  return retVal;
}

function _disableDraggable(el) {
  el.draggable = false;
}

function _unsilent() {
  _silent = false;
}

function _ghostIsFirst(evt, vertical, sortable) {
  var rect = getRect(getChild(sortable.el, 0, sortable.options, true));
  var spacer = 10;
  return vertical ? evt.clientX < rect.left - spacer || evt.clientY < rect.top && evt.clientX < rect.right : evt.clientY < rect.top - spacer || evt.clientY < rect.bottom && evt.clientX < rect.left;
}

function _ghostIsLast(evt, vertical, sortable) {
  var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var spacer = 10;
  return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}

function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
      targetLength = vertical ? targetRect.height : targetRect.width,
      targetS1 = vertical ? targetRect.top : targetRect.left,
      targetS2 = vertical ? targetRect.bottom : targetRect.right,
      invert = false;

  if (!invertSwap) {
    // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
      // check if past first invert threshold on side opposite of lastDirection
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        // past first invert threshold, do not restrict inverted threshold to dragEl shadow
        pastFirstInvertThresh = true;
      }

      if (!pastFirstInvertThresh) {
        // dragEl shadow (target move distance shadow)
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
        : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      // Regular
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }

  invert = invert || invertSwap;

  if (invert) {
    // Invert of regular
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }

  return 0;
}
/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */


function _getInsertDirection(target) {
  if (index$1(dragEl) < index$1(target)) {
    return 1;
  } else {
    return -1;
  }
}
/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */


function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent,
      i = str.length,
      sum = 0;

  while (i--) {
    sum += str.charCodeAt(i);
  }

  return sum.toString(36);
}

function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName('input');
  var idx = inputs.length;

  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}

function _nextTick(fn) {
  return setTimeout(fn, 0);
}

function _cancelNextTick(id) {
  return clearTimeout(id);
} // Fixed #973:


if (documentExists) {
  on(document, 'touchmove', function (evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
} // Export utils


Sortable.utils = {
  on: on,
  off: off,
  css: css,
  find: find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend: extend,
  throttle: throttle,
  closest: closest,
  toggleClass: toggleClass,
  clone: clone,
  index: index$1,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild: getChild
};
/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */

Sortable.get = function (element) {
  return element[expando];
};
/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */


Sortable.mount = function () {
  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins[_key] = arguments[_key];
  }

  if (plugins[0].constructor === Array) plugins = plugins[0];
  plugins.forEach(function (plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }

    if (plugin.utils) Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), plugin.utils);
    PluginManager.mount(plugin);
  });
};
/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */


Sortable.create = function (el, options) {
  return new Sortable(el, options);
}; // Export


Sortable.version = version;

var autoScrolls = [],
    scrollEl,
    scrollRootEl,
    scrolling = false,
    lastAutoScrollX,
    lastAutoScrollY,
    touchEvt$1,
    pointerElemChangedInterval;

function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      forceAutoScrollFallback: false,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    }; // Bind all private methods

    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
  }

  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;

      if (this.sortable.nativeDraggable) {
        on(document, 'dragover', this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, 'pointermove', this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, 'touchmove', this._handleFallbackAutoScroll);
        } else {
          on(document, 'mousemove', this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;

      // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop() {
      if (this.sortable.nativeDraggable) {
        off(document, 'dragover', this._handleAutoScroll);
      } else {
        off(document, 'pointermove', this._handleFallbackAutoScroll);
        off(document, 'touchmove', this._handleFallbackAutoScroll);
        off(document, 'mousemove', this._handleFallbackAutoScroll);
      }

      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;

      var x = (evt.touches ? evt.touches[0] : evt).clientX,
          y = (evt.touches ? evt.touches[0] : evt).clientY,
          elem = document.elementFromPoint(x, y);
      touchEvt$1 = evt; // IE does not seem to have native autoscroll,
      // Edge's autoscroll seems too conditional,
      // MACOS Safari does not have autoscroll,
      // Firefox and Chrome are good

      if (fallback || this.options.forceAutoScrollFallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change

        var ogElemScroller = getParentAutoScrollElement(elem, true);

        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour

          pointerElemChangedInterval = setInterval(function () {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);

            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }

            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }

        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: 'scroll',
    initializeByDefault: true
  });
}

function clearAutoScrolls() {
  autoScrolls.forEach(function (autoScroll) {
    clearInterval(autoScroll.pid);
  });
  autoScrolls = [];
}

function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}

var autoScroll = throttle(function (evt, options, rootEl, isFallback) {
  // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
  if (!options.scroll) return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX,
      y = (evt.touches ? evt.touches[0] : evt).clientY,
      sens = options.scrollSensitivity,
      speed = options.scrollSpeed,
      winScroller = getWindowScrollingElement();
  var scrollThisInstance = false,
      scrollCustomFn; // New scroll root, set scrollEl

  if (scrollRootEl !== rootEl) {
    scrollRootEl = rootEl;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;

    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl, true);
    }
  }

  var layersOut = 0;
  var currentParent = scrollEl;

  do {
    var el = currentParent,
        rect = getRect(el),
        top = rect.top,
        bottom = rect.bottom,
        left = rect.left,
        right = rect.right,
        width = rect.width,
        height = rect.height,
        canScrollX = void 0,
        canScrollY = void 0,
        scrollWidth = el.scrollWidth,
        scrollHeight = el.scrollHeight,
        elCSS = css(el),
        scrollPosX = el.scrollLeft,
        scrollPosY = el.scrollTop;

    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
    }

    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);

    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }

    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);

      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        /* jshint loopfunc:true */

        autoScrolls[layersOut].pid = setInterval(function () {
          // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely

          }

          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;

          if (typeof scrollCustomFn === 'function') {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {
              return;
            }
          }

          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }

    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));

  scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);

var drop = function drop(_ref) {
  var originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      dragEl = _ref.dragEl,
      activeSortable = _ref.activeSortable,
      dispatchSortableEvent = _ref.dispatchSortableEvent,
      hideGhostForTarget = _ref.hideGhostForTarget,
      unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent) return;
  var toSortable = putSortable || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();

  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent('spill');
    this.onSpill({
      dragEl: dragEl,
      putSortable: putSortable
    });
  }
};

function Revert() {}

Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl = _ref3.dragEl,
        putSortable = _ref3.putSortable;
    this.sortable.captureAnimationState();

    if (putSortable) {
      putSortable.captureAnimationState();
    }

    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);

    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl);
    }

    this.sortable.animateAll();

    if (putSortable) {
      putSortable.animateAll();
    }
  },
  drop: drop
};

_extends(Revert, {
  pluginName: 'revertOnSpill'
});

function Remove() {}

Remove.prototype = {
  onSpill: function onSpill(_ref4) {
    var dragEl = _ref4.dragEl,
        putSortable = _ref4.putSortable;
    var parentSortable = putSortable || this.sortable;
    parentSortable.captureAnimationState();
    dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
    parentSortable.animateAll();
  },
  drop: drop
};

_extends(Remove, {
  pluginName: 'removeOnSpill'
});

Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);

var base$k = function base(props, context, dependencies, options) {
  var {
    sort
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var isDisabled = dependencies.isDisabled;
  var fire = dependencies.fire;
  var refreshOrderStore = dependencies.refreshOrderStore;
  var value = dependencies.value;
  var sorting = dependencies.sorting;

  // ================ DATA ================

  /**
   * The DOM element containing list items.
   * 
   * @type {HTMLElement}
   * @private
   */
  var list = ref(null);

  /**
   * The `Sortable.js` instance.
   * 
   * @type {object}
   * @private
   */
  var sortable = ref(null);

  // ============== COMPUTED ==============

  /**
   * Whether the list is sortable. Can be enabled with [`sort`](#option-sort) option, but it will disabled if [`isDisabled`](#property-is-disabled) is `true`.
   * 
   * @type {boolean}
   */
  var isSortable = computed(() => {
    return sort.value && !isDisabled.value;
  });

  // =============== METHODS ==============

  /**
   * Inits Sortable.js.
   *
   * @returns {void}
   * @private
   */
  var initSortable = () => {
    sortable.value = new Sortable(list.value, {
      handle: "[data-handle]",
      onStart: () => {
        sorting.value = true;
      },
      onEnd: handleSort
    });
  };

  /**
   * Destroys Sortable.js.
   *
   * @returns {void}
   * @private
   */
  var destroySortable = () => {
    sortable.value.destroy();
    sortable.value = null;
  };

  /**
   * Handles `sort` event.
   *
   * @param {Event} e Sortable.js event
   * @private
   */
  var handleSort = _ref => {
    var {
      oldIndex,
      newIndex,
      item
    } = _ref;
    sorting.value = false;
    if (oldIndex === newIndex || isDisabled.value) {
      return;
    }
    list.value.children[newIndex].remove();
    list.value.insertBefore(item, list.value.children[oldIndex]);
    var valueClone = _.cloneDeep(value.value);
    valueClone.splice(newIndex, 0, valueClone.splice(oldIndex, 1)[0]);
    value.value = valueClone;
    refreshOrderStore(value.value);
    fire('sort', value.value);
  };

  // ============== WATCHERS ==============

  watch(isSortable, (n, o) => {
    if (n === true && o === false) {
      initSortable();
    } else if (n === false && o === true) {
      destroySortable();
    }
  }, {
    immediate: false
  });

  // ================ HOOKS ===============

  onMounted(() => {
    if (isSortable.value) {
      initSortable();
    }
  });
  return {
    list,
    sortable,
    isSortable,
    handleSort,
    initSortable,
    destroySortable
  };
};

var base$j = function base(props, context, dependencies) {
  // ================ DATA ================

  /**
   * Whether the list is currently being sorted (an item is dragged).
   * 
   * @type {boolean}
   */
  var sorting = ref(false);
  return {
    sorting
  };
};

var base$i = function base(props, context, dependencies, options) {
  var {
    storeOrder,
    orderBy,
    order
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;
  var value = dependencies.value;

  // ================= DATA ===============

  var orderFrom = ref(form$.value.$vueform.config.orderFrom);

  // =============== METHODS ==============

  /**
   * Sets the value of `storeOrder` field within a list of items to match the order.
   *
   * @param {array} value* list of items
   * @returns {void}
   * @private
   */
  var refreshOrderStore = value => {
    if (storeOrder.value) {
      _.each(value, (val, index) => {
        val[storeOrder.value] = order.value && order.value.toUpperCase() === 'DESC' ? value.length - index - (orderFrom.value == 0 ? 1 : 0) : parseInt(index) + orderFrom.value;
      });
    }
    return value;
  };

  /**
   * The name of the child (when using [`object`](#option-object)) by which the items should ordered.
   * 
   * @type {string}
   */
  var orderByName = computed(() => {
    return orderBy.value || storeOrder.value;
  });
  watch(storeOrder, (n, o) => {
    // If storeOrder exists, refresh
    if (n) {
      refreshOrderStore(value.value);
    }

    // If not, clear its value
    else {
      _.each(value.value, (val, index) => {
        val[o] = null;
      });
    }
  }, {
    immediate: false
  });
  return {
    refreshOrderStore,
    orderByName
  };
};
var multifile$2 = function multifile(props, context, dependencies, options) {
  var {
    storeOrder,
    orderBy
  } = toRefs(props);
  var {
    refreshOrderStore
  } = base$i(props, context, dependencies);

  // =============== METHODS ==============

  /**
   * The name of the field (when using [`fields`](#option-fiels)) by which the files should ordered.
   * 
   * @type {string}
   */
  var orderByName = computed(() => {
    return orderBy.value || storeOrder.value;
  });
  return {
    refreshOrderStore,
    orderByName
  };
};

var base$h = function base(props, context, dependencies) {
  var {
    object,
    element
  } = toRefs(props);

  // ============== COMPUTED ==============

  /**
    * The schema of a child element.
    * 
    * @type {object}
    * @private
    */
  var prototype = computed(() => {
    return isObject.value ? Object.assign({}, object.value, {
      type: 'object'
    }) : element.value || {};
  });

  /**
   * Whether childrens are objects.
   *
   * @type {boolean}
   * @private
   */
  var isObject = computed(() => {
    return !!object.value;
  });
  return {
    prototype,
    isObject
  };
};
var multifile$1 = function multifile(props, context, dependencies) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var {
    auto,
    object,
    file,
    fields,
    storeFile,
    storeOrder,
    view,
    clickable,
    url,
    previewUrl,
    uploadTempEndpoint,
    removeTempEndpoint,
    removeEndpoint,
    params,
    softRemove
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var isDisabled = dependencies.isDisabled;

  // =============== PRIVATE ==============

  var type = computed(() => {
    return options.type || 'file';
  });

  // ============== COMPUTED ==============

  /**
   * The `name` of the child element that stores the filename.
   * 
   * @type {string}
   * @private
   */
  var storeFileName = computed(() => {
    if (storeFile.value) {
      return storeFile.value;
    }
    return object.value || _.keys(fields.value).length || storeOrder.value ? 'file' : null;
  });
  var isObject = computed(() => {
    return !!object.value || !!storeOrder.value || !!_.keys(fields.value).length;
  });
  var prototype = computed(() => {
    var fileSchema = {
      type: type.value,
      auto: auto.value,
      view: view.value,
      layout: view.value === 'gallery' ? 'ElementLayoutInline' : 'ElementLayout',
      disabled: isDisabled.value,
      clickable: clickable.value,
      url: url.value,
      previewUrl: previewUrl.value,
      uploadTempEndpoint: uploadTempEndpoint.value,
      removeTempEndpoint: removeTempEndpoint.value,
      removeEndpoint: removeEndpoint.value,
      params: params.value,
      softRemove: softRemove.value
    };
    if (!isObject.value) {
      return Object.assign({}, fileSchema, file.value);
    }
    return {
      type: 'object',
      schema: Object.assign({},
      // File
      {
        [storeFileName.value]: Object.assign({}, fileSchema, {
          embed: true
        }, file.value)
      },
      // Order
      storeOrder.value ? {
        [storeOrder.value]: {
          type: 'hidden',
          meta: true
        }
      } : {},
      // Other fields
      fields.value)
    };
  });
  return {
    storeFileName,
    isObject,
    prototype
  };
};

var base$g = function base(props, context, dependencies) {
  var {
    controls,
    sort,
    min,
    max,
    addText
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var isDisabled = dependencies.isDisabled;
  var value = dependencies.value;
  var form$ = dependencies.form$;

  // ================ DATA ================

  /**
   * Whether adding new items is allowed. Will return `false` if the element has [`isDisabled: true`](#property-is-disabled) or have reached [`max`](#option-max) items. Can be disabled manually by setting [`controls.add`](#option-controls) to `false`.
   * 
   * @type {boolean}
   */
  var hasAdd = computed(() => {
    return !isDisabled.value && (controls.value.add || controls.value.add === undefined) && (max.value === -1 || max.value > value.value.length);
  });

  /**
   * Whether remove items is allowed. Will return `false` if the element has [`isDisabled: true`](#property-is-disabled) or has <= [`min`](#option-min) items. Can be disabled manually by setting [`controls.remove`](#option-controls) to `false`.
   * 
   * @type {boolean}
   */
  var hasRemove = computed(() => {
    return !isDisabled.value && (controls.value.remove || controls.value.remove === undefined) && (min.value === -1 || min.value < value.value.length);
  });

  /**
   * Whether list items should be sortable. Can be enabled by setting [`sort`](#option-sort) to `true`, but will return `false` if the element has [`isDisabled: true`](#property-is-disabled).
   * 
   * @type {boolean}
   */
  var hasSort = computed(() => {
    return !isDisabled.value && (controls.value.sort || controls.value.sort === undefined) && sort.value;
  });

  /**
   * The label of add button.
   * 
   * @type {string}
   */
  var addLabel = computed(() => {
    return addText.value || form$.value.__('vueform.elements.list.add');
  });
  return {
    hasAdd,
    hasRemove,
    hasSort,
    addLabel
  };
};
var multifile = function multifile(props, context, dependencies) {
  var {
    controls,
    sort
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var isDisabled = dependencies.isDisabled;
  var hasUploading = dependencies.hasUploading;

  // ================ DATA ================

  /**
   * Whether adding new files is allowed. Will return `false` if the element has [`isDisabled: true`](#property-is-disabled). Can be disabled manually by setting [`controls.add`](#option-controls) to `false`.
   * 
   * @type {boolean}
   */
  var hasAdd = computed(() => {
    return controls.value.add || controls.value.add === undefined;
  });

  /**
   * Whether remove files is allowed. Will return `false` if the element has [`isDisabled: true`](#property-is-disabled) or a temporary file upload is in progress. Can be disabled manually by setting [`controls.remove`](#option-controls) to `false`.
   * 
   * @type {boolean}
   */
  var hasRemove = computed(() => {
    return !isDisabled.value && (controls.value.remove || controls.value.remove === undefined) && !hasUploading.value;
  });

  /**
   * Whether list files should be sortable. Can be enabled by setting [`sort`](#option-sort) to `true`, but will return `false` if the element has [`isDisabled: true`](#property-is-disabled) or a temporary file upload is in progress.
   * 
   * @type {boolean}
   */
  var hasSort = computed(() => {
    return !isDisabled.value && (controls.value.sort || controls.value.sort === undefined) && sort.value && !hasUploading.value;
  });
  return {
    hasAdd,
    hasRemove,
    hasSort
  };
};

var ListElement = {
  name: 'ListElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'add', 'remove', 'sort', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'list',
      private: true
    },
    default: {
      required: false,
      type: [Array],
      default: undefined
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    onAdd: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onRemove: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onSort: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    element: {
      required: false,
      type: [Object],
      default: null
    },
    object: {
      required: false,
      type: [Object],
      default: null
    },
    initial: {
      required: false,
      type: [Number],
      default: 1
    },
    min: {
      required: false,
      type: [Number],
      default: -1
    },
    max: {
      required: false,
      type: [Number],
      default: -1
    },
    addText: {
      required: false,
      type: [String],
      default: null,
      '@default': 'locale.elements.list.add'
    },
    sort: {
      required: false,
      type: [Boolean],
      default: false
    },
    controls: {
      required: false,
      type: [Object],
      default: () => ({
        add: true,
        remove: true,
        sort: true
      })
    },
    storeOrder: {
      required: false,
      type: [String],
      default: null
    },
    order: {
      required: false,
      type: [String],
      default: null
    },
    orderBy: {
      required: false,
      type: [String],
      default: null
    }
  },
  setup(props, context) {
    context.features = [base$14, base$13, base$Q, base$K, base$O, base$N, array$1, base$h, base$l, base$j, base$16, list$2, base$E, base$W, base$C, base$Z, base$$, list, base$B, base$i, base$g, array, base$V, base$U, base$T, base$P, base$S, list$1, base$k, base$J];
    context.slots = ['label', 'info', 'description', 'before', 'between', 'after'];
    return _objectSpread2$1({}, base$H(props, context));
  }
};

var base$f = function base(props, context, dependencies) {
  var options_ = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var {
    provider,
    extendOptions
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;
  var value = dependencies.value;
  var clear = dependencies.clear;
  var input = dependencies.input;

  // ============== PRIVATE ===============

  var inputElement = () => {
    return options_.input ? options_.input.value : input.value;
  };

  // ================ DATA ================

  /**
   * The location service that's initalized once the component is mounted.
   * 
   * @type {class}
   * @default null
   */
  var locationService = ref(null);

  /**
   * The raw location object of location provider (Google/Algolia).
   * 
   * @type {class}
   * @default null
   */
  var location = ref({});

  // ============== COMPUTED ==============

  var locationProvider = computed(() => {
    return provider.value || form$.value.$vueform.config.locationProvider;
  });

  /**
  * Default options for location provider. Can be extended with [`extendOptions`](#option-extend-options).
  * 
  * @type {object} 
  * @default {}
  */
  var defaultOptions = computed(() => {
    var providers = {
      google: {
        fields: ['geometry', 'formatted_address', 'address_components']
      },
      algolia: {
        type: 'address',
        appId: form$.value.$vueform.config.services.algolia.app_id,
        apiKey: form$.value.$vueform.config.services.algolia.api_key,
        templates: options_.templates || {}
      }
    };
    return providers[locationProvider.value];
  });

  /**
  * Additional options for [Google Places](https://developers.google.com/maps/documentation/javascript/reference/places-widget#AutocompleteOptions) or [Algolia Places](https://community.algolia.com/places/documentation.html#options) depending on the provider.
  * 
  * @type {object} 
  * @default {}
  * @option
  */
  var providerOptions = computed(() => {
    return Object.assign({}, defaultOptions.value, extendOptions.value || {});
  });

  // =============== METHODS ==============

  /**
   * Handles location service's address change.
   *
   * @param {object} data an object containing address data
   * @param {object} raw an object containing raw address data (based on provider)
   * @private
   */
  var handleAddressChange = (data, raw) => {
    if (options_.handleAddressChange) {
      options_.handleAddressChange(data, raw);
      return;
    }
    location.value = raw;
    value.value = data;
  };

  /* istanbul ignore next */
  /**
   * 
   *
   * @private
   */
  var handleLocationBlur = () => {
    if (inputElement().value.length) {
      inputElement().value = value.value.formatted_address;
    } else {
      clear();
    }
  };

  /**
   * Initalizes location service. Can be used to re-initalize location service.
   *
   * @returns {void}
   */
  var initLocationService = () => {
    if (locationService.value) {
      locationService.value.destroy();
    }
    locationService.value = new form$.value.$vueform.services.location[locationProvider.value]();
    locationService.value.init(inputElement(), handleAddressChange, providerOptions.value);
  };

  // ============== WATCHERS ==============

  watch([locationProvider, providerOptions], () => {
    initLocationService();
  }, {
    deep: true,
    immediate: false
  });

  // =============== HOOKS ================

  onMounted(() => {
    initLocationService();
  });
  return {
    locationService,
    location,
    defaultOptions,
    providerOptions,
    handleAddressChange,
    handleLocationBlur,
    initLocationService
  };
};

var LocationElement = {
  name: 'LocationElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'location',
      private: true
    },
    default: {
      required: false,
      type: [Object],
      default: () => ({
        country: null,
        country_code: null,
        state: null,
        state_code: null,
        city: null,
        zip: null,
        address: null,
        formatted_address: null,
        lat: null,
        lng: null
      })
    },
    debounce: {
      required: false,
      type: [Number],
      default: null
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    floating: {
      required: false,
      type: [String, Boolean],
      default: null
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    placeholder: {
      required: false,
      type: [String],
      default: null
    },
    readonly: {
      required: false,
      type: [Boolean],
      default: false
    },
    attrs: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    addons: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    provider: {
      required: false,
      type: [String],
      default: 'google'
    },
    displayKey: {
      required: false,
      type: [String],
      default: 'formatted_address'
    },
    extendOptions: {
      required: false,
      type: [Object],
      default: () => ({})
    }
  },
  setup(props, context) {
    toRefs(props);
    context.features = [base$14, base$13, base$Q, base$G, base$K, base$N, location, base$O, base$s, base$16, base$L, base$w, base$E, base$B, location$1, base$$, base$F, base$f, base$v, base$W, base$C, base$U, base$T, base$P, base$V, base$S, base$r, base$J];
    context.slots = ['label', 'info', 'description', 'before', 'between', 'after', 'addon-before', 'addon-after'];
    return _objectSpread2$1({}, base$H(props, context));
  }
};

var base$e = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============

  var isDisabled = dependencies.isDisabled;
  var add = dependencies.add;
  var input = dependencies.input;
  var isObject = dependencies.isObject;
  var storeFileName = dependencies.storeFileName;
  var children$ = dependencies.children$;

  // ============== COMPUTED ==============

  /**
   * Whether any of the files are currently being uploaded to the server (initiated by form submit).
   * 
   * @type {boolean}
   */
  var preparing = computed(() => {
    return _.some(children$.value, {
      available: true,
      preparing: true
    });
  });

  /**
   * Whether any of the files are currently being uploaded to the server (initiated by the user).
   * 
   * @type {boolean}
   */
  var hasUploading = computed(() => {
    return _.some(children$.value, {
      uploading: true
    });
  });

  // =============== METHODS ==============

  /**
   * Handles `change` event.
   * 
   * @param {Event} e* 
   * @returns {void}
   * @private
   */
  var handleChange = e => {
    if (!e.target || !e.target.files || e.target.files.length == 0 || isDisabled.value) {
      return;
    }
    _.each(e.target.files, file => {
      add(isObject.value ? {
        [storeFileName.value]: file
      } : file);
    });
    input.value.value = '';
  };

  /**
   * Handles `click` event.
   * 
   * @returns {void}
   * @private
   */
  var handleClick = () => {
    if (isDisabled.value) {
      return;
    }
    input.value.click();
  };
  return {
    preparing,
    hasUploading,
    handleChange,
    handleClick
  };
};

var MultifileElement = {
  name: 'MultifileElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'add', 'remove', 'sort', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'multifile',
      private: true
    },
    default: {
      required: false,
      type: [Array],
      default: () => []
    },
    initial: {
      required: false,
      type: [Number],
      default: 1,
      private: true
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    onAdd: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onRemove: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onSort: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    view: {
      type: [String],
      required: false,
      default: 'file'
    },
    drop: {
      required: false,
      type: [Boolean],
      default: false
    },
    sort: {
      required: false,
      type: [Boolean],
      default: false
    },
    controls: {
      required: false,
      type: [Object],
      default: () => ({
        add: true,
        remove: true,
        sort: true
      })
    },
    object: {
      required: false,
      type: [Boolean],
      default: null
    },
    storeFile: {
      required: false,
      type: [String],
      default: 'file'
    },
    fields: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    storeOrder: {
      required: false,
      type: [String],
      default: null
    },
    order: {
      required: false,
      type: [String],
      default: null
    },
    orderBy: {
      required: false,
      type: [String],
      default: null
    },
    file: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    accept: {
      required: false,
      type: [String, Array],
      default: null
    },
    clickable: {
      required: false,
      type: [Boolean],
      default: true
    },
    url: {
      required: false,
      type: [String, Boolean],
      default: '/'
    },
    previewUrl: {
      required: false,
      type: [String],
      default: undefined
    },
    auto: {
      required: false,
      type: [Boolean],
      default: true
    },
    uploadTempEndpoint: {
      required: false,
      type: [Object, String, Function],
      default: undefined,
      '@default': 'config.endpoints.uploadTempFile'
    },
    removeTempEndpoint: {
      required: false,
      type: [Object, String, Function],
      default: undefined,
      '@default': 'config.endpoints.removeTempFile'
    },
    removeEndpoint: {
      required: false,
      type: [Object, String, Function],
      default: undefined,
      '@default': 'config.endpoints.removeFile'
    },
    params: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    softRemove: {
      required: false,
      type: [Boolean],
      default: false
    }
  },
  setup(props, context) {
    context.features = [base$14, base$13, base$Q, base$K, base$N, array$1, base$l, base$G, base$j, multifile$1, base$O, base$16, list$2, base$E, base$W, base$C, list, base$B, array, base$Z, base$$, base$V, base$U, base$T, base$S, multifile$2, multifile$4, base$e, multifile, multifile$3, base$P, base$k, base$J];
    context.slots = ['label', 'info', 'description', 'before', 'between', 'after'];
    return _objectSpread2$1({}, base$H(props, context));
  }
};

var base$d = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============

  var fire = dependencies.fire;
  var el$ = dependencies.el$;

  // =============== METHODS ==============

  /**
   * Handles `select` event.
   *
   * @param {object} option* the selected option object
   * @returns {void}
   * @private
   */
  var handleSelect = option => {
    fire('select', option, el$.value);
  };

  /**
   * Handles `deselect` event.
   *
   * @param {object} option* the deselected option object
   * @returns {void}
   * @private
   */
  var handleDeselect = option => {
    fire('deselect', option, el$.value);
  };

  /**
   * Handles `search-change` event.
   *
   * @param {string} searchQuery* the current search query
   * @returns {void}
   * @private
   */
  var handleSearchChange = searchQuery => {
    fire('search-change', searchQuery, el$.value);
  };

  /**
   * Handles `open` event.
   *
   * @returns {void}
   * @private
   */
  var handleOpen = () => {
    fire('open', el$.value);
  };

  /**
   * Handles `close` event.
   *
   * @returns {void}
   * @private
   */
  var handleClose = () => {
    fire('close', el$.value);
  };

  /**
   * Handles `clear` event.
   *
   * @returns {void}
   * @private
   */
  var handleClear = () => {
    fire('clear', el$.value);
  };

  /**
   * Handles `paste` event.
   * 
   * @param {Event} e event
   * @returns {void}
   * @private
   */
  var handlePaste = e => {
    fire('paste', e, el$.value);
  };

  /**
   * Handles `tag` event.
   *
   * @param {string} searchQuery* the current search query
   * @returns {void}
   * @private
   */
  var handleTag = searchQuery => {
    // unimplemented
  };

  // =============== HOOKS ================

  return {
    handleSelect,
    handleDeselect,
    handleSearchChange,
    handleOpen,
    handleClose,
    handleClear,
    handlePaste,
    handleTag
  };
};

function spliceMultiple(array, indexes) {
  indexes.sort();
  for (var i = indexes.length - 1; i >= 0; i--) {
    array.splice(indexes[i], 1);
  }
  return array;
}

var base$c = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============

  var value = dependencies.value;

  // =============== PRIVATE ==============

  /**
   * Whether an option is already selected.
   *
   * @param {object} option* value of the option
   * @returns {boolean}
   * @private
   */
  var inValue = option => {
    return value.value.indexOf(option) !== -1;
  };

  // =============== METHODS ==============

  /**
   * Selects one or more options.
   *
   * @param {str|array} options* value(s) of the option(s) to select
   * @returns {void}
   */
  var select = options => {
    if (!_.isArray(options)) {
      options = [options];
    }
    var val = _.clone(value.value);
    _.each(options, option => {
      if (inValue(normalize(option))) {
        return;
      }
      val.push(option);
    });
    value.value = val;
  };

  /**
   * Deselects one or more options.
   *
   * @param {str|array} options* value(s) of the option(s) to deselect
   * @returns {void}
   */
  var deselect = options => {
    if (!_.isArray(options)) {
      options = [options];
    }
    var val = _.clone(value.value);
    var indexes = [];
    _.each(options, option => {
      var i = value.value.indexOf(option);
      if (i === -1 || indexes.indexOf(i) !== -1) {
        return;
      }
      indexes.push(i);
    });
    value.value = spliceMultiple(val, indexes);
  };
  return {
    select,
    deselect
  };
};

var base$b = function base(props, context, dependencies) {
  var {
    loading
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var pending = dependencies.pending;

  // ============== COMPUTED ==============

  /**
  * Whether the element is in loading state.
  * 
  * @type {boolean}
  */
  var isLoading = computed(() => {
    return pending.value || loading.value;
  });
  return {
    isLoading
  };
};

var MultiselectElement = {
  name: 'MultiselectElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'select', 'deselect', 'search-change', 'open', 'close', 'clear', 'paste', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'multiselect',
      private: true
    },
    default: {
      required: false,
      type: [Array],
      default: () => []
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    floating: {
      required: false,
      type: [String, Boolean],
      default: null
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    placeholder: {
      required: false,
      type: [String],
      default: null,
      native: false
    },
    attrs: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    onSelect: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onDeselect: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onSearchChange: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onOpen: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onClose: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onClear: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onPaste: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    native: {
      required: false,
      type: [Boolean],
      default: true
    },
    items: {
      required: false,
      type: [Object, Array, Function, String],
      default: () => ({})
    },
    labelProp: {
      type: [String],
      required: false,
      default: 'label',
      native: false
    },
    valueProp: {
      type: [String],
      required: false,
      default: 'value',
      native: false
    },
    dataKey: {
      type: [String],
      required: false,
      default: undefined
    },
    searchParam: {
      type: [String],
      required: false,
      default: 'query'
    },
    search: {
      required: false,
      type: [Boolean],
      default: false,
      native: false
    },
    trackBy: {
      type: [String],
      required: false,
      default: 'label',
      native: false
    },
    strict: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    multipleLabel: {
      type: [Function],
      required: false,
      native: false
    },
    multipleLabelSingle: {
      type: [String],
      required: false,
      native: false,
      '@default': 'locale.vueform.multiselect.multipleLabelOne'
    },
    multipleLabelMultiple: {
      type: [String],
      required: false,
      native: false,
      '@default': 'locale.vueform.multiselect.multipleLabelMore'
    },
    create: {
      required: false,
      type: [Boolean],
      default: false,
      native: false
    },
    appendNewOption: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    addOptionOn: {
      type: [Array],
      required: false,
      default: () => ['enter'],
      native: false
    },
    object: {
      type: [Boolean],
      required: false,
      default: false,
      native: false
    },
    limit: {
      type: [Number],
      required: false,
      default: -1,
      native: false
    },
    max: {
      type: [Number],
      required: false,
      default: -1,
      native: false
    },
    groups: {
      type: [Boolean],
      required: false,
      default: false,
      native: false
    },
    groupLabel: {
      type: [String],
      required: false,
      default: 'label',
      native: false
    },
    groupOptions: {
      type: [String],
      required: false,
      default: 'items',
      native: false
    },
    groupHideEmpty: {
      type: [Boolean],
      required: false,
      default: false,
      native: false
    },
    groupSelect: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    openDirection: {
      type: [String],
      required: false,
      default: 'bottom',
      native: false
    },
    canClear: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    clearOnSelect: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    closeOnSelect: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    delay: {
      type: [Number],
      required: false,
      default: -1,
      native: false
    },
    minChars: {
      type: [Number],
      required: false,
      default: 0,
      native: false
    },
    resolveOnLoad: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    filterResults: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    clearOnSearch: {
      type: [Boolean],
      required: false,
      default: false,
      native: false
    },
    hideSelected: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    caret: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    loading: {
      type: [Boolean],
      required: false,
      default: false,
      native: false
    },
    noOptionsText: {
      type: [String],
      required: false,
      default: undefined,
      '@default': 'locale.multiselect.noOptions',
      native: false
    },
    noResultsText: {
      type: [String],
      required: false,
      default: undefined,
      '@default': 'locale.multiselect.noResults',
      native: false
    },
    autocomplete: {
      type: [String],
      required: false,
      native: false
    },
    inputType: {
      type: [String],
      required: false,
      default: 'text',
      native: false
    },
    extendOptions: {
      required: false,
      type: [Object],
      default: () => ({})
    }
  },
  setup(props, context) {
    context.features = [base$14, base$13, base$Q, base$G, base$K, base$N, array$1, base$O, base$s, base$16, multiselect$2, base$E, base$D, base$b, multiselect$1, base$x, base$B, base$$, base$F, array, base$W, base$C, base$U, base$T, base$P, base$V, base$S, base$d, base$c, multiselect, base$J];
    context.slots = ['option', 'multiple-label', 'placeholder', 'group-label', 'before-list', 'after-list', 'no-results', 'no-options', 'caret', 'spinner', 'clear', 'label', 'info', 'description', 'before', 'between', 'after'];
    return _objectSpread2$1({}, base$H(props, context));
  }
};

var ObjectElement = {
  name: 'ObjectElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'remove', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'object',
      private: true
    },
    default: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    schema: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    embed: {
      required: false,
      type: [Boolean],
      default: false
    },
    onRemove: {
      required: false,
      type: [Function],
      default: null,
      private: true
    }
  },
  setup(props, context) {
    context.features = [base$14, base$13, base$Q, base$K, base$O, object$1, base$16, base$L, object$4, object$2, base$W, object, base$Z, base$$, object$3, base$U, base$T, base$P, base$V, base$S, object$5, base$J];
    context.slots = ['label', 'info', 'description', 'before', 'between', 'after'];
    return _objectSpread2$1({}, base$H(props, context));
  }
};

var base$a = function base(props, context, dependencies) {
  var {
    radioName,
    radioValue
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var update = dependencies.update;
  var nullValue = dependencies.nullValue;
  var fieldId = dependencies.fieldId;
  var path = dependencies.path;
  var form$ = dependencies.form$;

  // ================ DATA ================

  /**
   * The list of listeners.
   * 
   * @type {array}
   * @default []
   * @private
   */
  var listeners = ref([]);

  // ============== COMPUTED ==============

  /**
   * The `name` attribute of the element. If [`id`](#option-id) is not provided [`name`](#option-name) will be used.
   * 
   * @type {string}
   */
  var inputName = computed(() => {
    return radioName.value || path.value;
  });

  // =============== METHODS ==============

  /**
   * Checks the radio.
   *
   * @returns {void}
   */
  var check = () => {
    update(radioValue.value);
  };

  /**
   * Unhecks the radio.
   *
   * @returns {void}
   */
  var uncheck = () => {
    update(nullValue.value);
  };

  /**
   * Watches radio name change.
   *
   * @returns {void}
   * @private
   */
  var watchChange = (value, old) => {
    if (old) {
      form$.value.$el.querySelectorAll("input[name=\"".concat(value, "\"")).forEach((element, i) => {
        if (listeners.value[i]) {
          element.removeEventListener('change', listeners.value[i]);
        }
      });
    }
    form$.value.$el.querySelectorAll("input[name=\"".concat(value, "\"")).forEach(element => {
      var listener = () => {
        if (element.id != fieldId.value) {
          update(nullValue.value);
        }
      };
      listeners.value.push(listener);
      element.addEventListener('change', listener);
    });
  };

  // =============== HOOKS ================

  onMounted(() => {
    watchChange(inputName.value);
  });

  // ============= WATCTHERS ==============

  watch(inputName, watchChange);
  return {
    inputName,
    check,
    uncheck
  };
};

var RadioElement = {
  name: 'RadioElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'radio',
      private: true
    },
    default: {
      required: false,
      type: [String, Number],
      default: null
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    radioName: {
      required: false,
      type: [String],
      default: null
    },
    radioValue: {
      required: false,
      type: [Boolean, String, Number],
      default: 1
    },
    text: {
      required: false,
      type: [String],
      default: null
    }
  },
  setup(props, context) {
    context.features = [base$14, base$13, base$Q, base$G, base$K, base$N, base$O, base$16, base$L, base$A, base$E, base$$, base$D, base$B, base$F, base$W, base$C, base$U, base$T, base$P, base$V, base$S, base$a, radio];
    context.slots = ['default', 'label', 'info', 'description', 'before', 'between', 'after'];
    return _objectSpread2$1({}, base$H(props, context));
  }
};

var RadiogroupElement = {
  name: 'RadiogroupElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'radiogroup',
      private: true
    },
    default: {
      required: false,
      type: [String, Number],
      default: null
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    items: {
      required: false,
      type: [Object, Array, Function, String],
      default: () => ({})
    },
    disables: {
      required: false,
      type: [Array],
      default: () => []
    }
  },
  setup(props, context) {
    context.features = [base$14, base$13, base$Q, base$K, base$A, base$O, base$16, base$L, radiogroup$2, radiogroup, base$E, base$$, base$D, base$B, base$F, base$W, base$C, base$U, base$T, base$P, base$V, base$S, radiogroup$1];
    context.slots = ['radio', 'label', 'info', 'description', 'before', 'between', 'after'];
    return _objectSpread2$1({}, base$H(props, context));
  }
};

var SelectElement = {
  name: 'SelectElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'select', 'deselect', 'search-change', 'open', 'close', 'clear', 'paste', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'select',
      private: true
    },
    default: {
      required: false,
      type: [String, Number, Object],
      default: null
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    floating: {
      required: false,
      type: [String, Boolean],
      default: null
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    placeholder: {
      required: false,
      type: [String],
      default: null
    },
    attrs: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    onSelect: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onDeselect: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onSearchChange: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onOpen: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onClose: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onClear: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onPaste: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    native: {
      required: false,
      type: [Boolean],
      default: true
    },
    items: {
      required: false,
      type: [Object, Array, Function, String],
      default: () => ({})
    },
    labelProp: {
      type: [String],
      required: false,
      default: 'label'
    },
    valueProp: {
      type: [String],
      required: false,
      default: 'value'
    },
    dataKey: {
      type: [String],
      required: false,
      default: undefined
    },
    searchParam: {
      type: [String],
      required: false,
      default: 'query'
    },
    search: {
      required: false,
      type: [Boolean],
      default: false,
      native: false
    },
    trackBy: {
      type: [String],
      required: false,
      default: 'label',
      native: false
    },
    strict: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    create: {
      required: false,
      type: [Boolean],
      default: false,
      native: false
    },
    appendNewOption: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    addOptionOn: {
      type: [Array],
      required: false,
      default: () => ['enter'],
      native: false
    },
    object: {
      type: [Boolean],
      required: false,
      default: false,
      native: false
    },
    limit: {
      type: [Number],
      required: false,
      default: -1,
      native: false
    },
    groups: {
      type: [Boolean],
      required: false,
      default: false,
      native: false
    },
    groupLabel: {
      type: [String],
      required: false,
      default: 'label',
      native: false
    },
    groupOptions: {
      type: [String],
      required: false,
      default: 'items',
      native: false
    },
    groupHideEmpty: {
      type: [Boolean],
      required: false,
      default: false,
      native: false
    },
    openDirection: {
      type: [String],
      required: false,
      default: 'bottom',
      native: false
    },
    canDeselect: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    canClear: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    closeOnSelect: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    delay: {
      type: [Number],
      required: false,
      default: -1,
      native: false
    },
    minChars: {
      type: [Number],
      required: false,
      default: 0,
      native: false
    },
    resolveOnLoad: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    filterResults: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    clearOnSearch: {
      type: [Boolean],
      required: false,
      default: false,
      native: false
    },
    caret: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    truncate: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    loading: {
      type: [Boolean],
      required: false,
      default: false,
      native: false
    },
    noOptionsText: {
      type: [String],
      required: false,
      default: undefined,
      '@default': 'locale.multiselect.noOptions',
      native: false
    },
    noResultsText: {
      type: [String],
      required: false,
      default: undefined,
      '@default': 'locale.multiselect.noResults',
      native: false
    },
    autocomplete: {
      type: [String],
      required: false,
      native: false
    },
    inputType: {
      type: [String],
      required: false,
      default: 'text',
      native: false
    },
    extendOptions: {
      required: false,
      type: [Object],
      default: () => ({})
    }
  },
  setup(props, context) {
    context.features = [base$14, base$13, base$Q, base$G, base$K, base$N, base$A, base$O, base$s, base$16, base$L, base$E, base$D, base$b, select$1, base$x, base$B, base$$, base$F, base$v, base$W, base$C, base$U, base$T, base$P, base$V, base$S, base$d, select, base$J];
    context.slots = ['option', 'single-label', 'placeholder', 'group-label', 'before-list', 'after-list', 'no-results', 'no-options', 'caret', 'spinner', 'clear', 'label', 'info', 'description', 'before', 'between', 'after'];
    return _objectSpread2$1({}, base$H(props, context));
  }
};

var base$9 = function base(props, context, dependencies) {
  var {
    lazy
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var value = dependencies.value;

  // =============== METHODS ==============

  /**
   * Handles `update` event if not lazy.
   *
   * @param {string} val* value of the element
   * @returns {void}
   * @private
   */
  var handleUpdate = val => {
    if (lazy.value) {
      return;
    }
    value.value = val;
  };
  return {
    handleUpdate
  };
};

var SliderElement = {
  name: 'SliderElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'slider',
      private: true
    },
    default: {
      required: false,
      type: [Number, Array],
      default: 0
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    min: {
      required: false,
      type: [Number],
      default: 0
    },
    max: {
      required: false,
      type: [Number],
      default: 100
    },
    step: {
      required: false,
      type: [Number],
      default: 1
    },
    tooltips: {
      required: false,
      type: [Boolean],
      default: true
    },
    showTooltip: {
      required: false,
      type: [String],
      default: 'always'
    },
    tooltipPosition: {
      required: false,
      type: [String],
      default: null
    },
    merge: {
      required: false,
      type: [Number],
      default: -1
    },
    format: {
      required: false,
      type: [Object, Function],
      default: null
    },
    orientation: {
      required: false,
      type: [String],
      default: 'horizontal'
    },
    direction: {
      required: false,
      type: [String],
      default: 'ltr'
    },
    lazy: {
      required: false,
      type: [Boolean],
      default: true,
      private: true
    },
    extendOptions: {
      required: false,
      type: [Object],
      default: () => ({})
    }
  },
  setup(props, context) {
    context.features = [base$14, base$13, base$Q, base$G, base$K, base$N, min, base$O, base$16, base$L, base$E, slider, base$B, slider$1, base$$, base$F, base$W, base$C, base$U, base$T, base$P, base$V, base$S, base$t, base$9, base$J];
    context.slots = ['label', 'info', 'description', 'before', 'between', 'after'];
    return _objectSpread2$1({}, base$H(props, context));
  }
};

var base$8 = function base(props, context, dependencies) {
  var {
    content
  } = toRefs(props);

  // ============== COMPUTED ==============

  /**
   * Determines if HTML content should be rendered for the element.
   * 
   * @type {boolean}
   * @private
   */
  var isHtml = computed(() => {
    return typeof content.value == 'string';
  });
  return {
    isHtml
  };
};

var StaticElement = {
  name: 'StaticElement',
  mixins: [BaseElement, HasView],
  emits: ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'static',
      private: true
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    content: {
      required: false,
      type: [String, Object],
      default: ''
    },
    wrap: {
      required: false,
      type: [Boolean],
      default: true
    }
  },
  setup(props, context) {
    context.features = [base$14, base$13, base$Q, static_$2, base$8, base$16, static_$3, base$$, base$W, base$U, base$T, base$P, base$V, base$S, base$O, static_$1];
    context.slots = ['default', 'label', 'info', 'description', 'before', 'between', 'after'];
    return _objectSpread2$1({}, static_(props, context));
  }
};

var base$7 = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============

  var fire = dependencies.fire;
  var el$ = dependencies.el$;

  /**
   * Handles `tag` event.
   *
   * @param {string} searchQuery* the current search query.
   * @returns {void}
   * @private
   */
  var handleTag = searchQuery => {
    fire('tag', searchQuery, el$.value);
  };
  return {
    handleTag
  };
};

var TagsElement = {
  name: 'TagsElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'select', 'deselect', 'search-change', 'open', 'close', 'tag', 'clear', 'paste', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'tags',
      private: true
    },
    default: {
      required: false,
      type: [Array],
      default: () => []
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    floating: {
      required: false,
      type: [String, Boolean],
      default: null
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    placeholder: {
      required: false,
      type: [String],
      default: null
    },
    attrs: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    onSelect: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onDeselect: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onSearchChange: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onOpen: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onClose: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onTag: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onClear: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onPaste: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    items: {
      required: false,
      type: [Object, Array, Function, String],
      default: () => ({})
    },
    labelProp: {
      type: [String],
      required: false,
      default: 'label',
      native: false
    },
    valueProp: {
      type: [String],
      required: false,
      default: 'value',
      native: false
    },
    dataKey: {
      type: [String],
      required: false,
      default: undefined
    },
    searchParam: {
      type: [String],
      required: false,
      default: 'query'
    },
    search: {
      required: false,
      type: [Boolean],
      default: false,
      native: false
    },
    trackBy: {
      type: [String],
      required: false,
      default: 'label',
      native: false
    },
    strict: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    create: {
      required: false,
      type: [Boolean],
      default: false
    },
    appendNewOption: {
      type: [Boolean],
      required: false,
      default: true
    },
    addOptionOn: {
      type: [Array],
      required: false,
      default: () => ['enter']
    },
    object: {
      type: [Boolean],
      required: false,
      default: false,
      native: false
    },
    limit: {
      type: [Number],
      required: false,
      default: -1,
      native: false
    },
    max: {
      type: [Number],
      required: false,
      default: -1,
      native: false
    },
    groups: {
      type: [Boolean],
      required: false,
      default: false,
      native: false
    },
    groupLabel: {
      type: [String],
      required: false,
      default: 'label',
      native: false
    },
    groupOptions: {
      type: [String],
      required: false,
      default: 'items',
      native: false
    },
    groupHideEmpty: {
      type: [Boolean],
      required: false,
      default: false,
      native: false
    },
    groupSelect: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    openDirection: {
      type: [String],
      required: false,
      default: 'bottom',
      native: false
    },
    canClear: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    clearOnSelect: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    closeOnSelect: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    delay: {
      type: [Number],
      required: false,
      default: -1,
      native: false
    },
    minChars: {
      type: [Number],
      required: false,
      default: 0,
      native: false
    },
    resolveOnLoad: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    filterResults: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    clearOnSearch: {
      type: [Boolean],
      required: false,
      default: false,
      native: false
    },
    hideSelected: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    showOptions: {
      type: [Boolean],
      required: false,
      default: true
    },
    caret: {
      type: [Boolean],
      required: false,
      default: true,
      native: false
    },
    loading: {
      type: [Boolean],
      required: false,
      default: false,
      native: false
    },
    noOptionsText: {
      type: [String],
      required: false,
      default: undefined,
      '@default': 'locale.multiselect.noOptions',
      native: false
    },
    noResultsText: {
      type: [String],
      required: false,
      default: undefined,
      '@default': 'locale.multiselect.noResults',
      native: false
    },
    autocomplete: {
      type: [String],
      required: false,
      native: false
    },
    inputType: {
      type: [String],
      required: false,
      default: 'text',
      native: false
    },
    extendOptions: {
      required: false,
      type: [Object],
      default: () => ({})
    }
  },
  setup(props, context) {
    context.features = [base$14, base$13, base$Q, base$G, base$K, base$N, array$1, base$O, base$s, base$16, tags$2, base$E, base$D, base$b, tags$1, base$x, base$B, base$$, base$F, array, base$W, base$C, base$U, base$T, base$P, base$V, base$S, base$d, base$7, base$c, tags, base$J];
    context.slots = ['tag', 'option', 'placeholder', 'group-label', 'before-list', 'after-list', 'no-results', 'no-options', 'caret', 'spinner', 'clear', 'label', 'info', 'description', 'before', 'between', 'after'];
    return _objectSpread2$1({}, base$H(props, context));
  }
};

var base$6 = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============

  var model = dependencies.model;

  // =============== METHODS ==============

  /**
   * Handles `input` event.
   * 
   * @param {Event} e* 
   * @returns {void}
   * @private
   */
  var handleInput = e => {
    model.value = e.target.value;
  };
  return {
    handleInput
  };
};

var base$5 = function base(props, context, dependencies) {
  var {
    autogrow
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;
  var input = dependencies.input;
  var value = dependencies.value;

  // =============== METHODS ==============

  /**
   * Updates the height of the input based in its contents when [`autogrow`](#option-autogrow) is enabled.
   * 
   * @returns {void}
   */
  var autosize = () => {
    if (!autogrow.value) {
      return;
    }
    form$.value.$vueform.services.autosize.update(input.value);
  };

  // ============== WATCHERS ==============

  watch(autogrow, newValue => {
    if (newValue) {
      form$.value.$vueform.services.autosize(input.value);
    } else {
      form$.value.$vueform.services.autosize.destroy(input.value);
    }
  });
  watch(value, () => {
    autosize();
  });

  // =============== HOOKS ================

  onMounted(() => {
    if (autogrow.value) {
      nextTick(() => {
        form$.value.$vueform.services.autosize(input.value);
      });
    }
  });
  return {
    autosize
  };
};
var multilingual = function multilingual(props, context, dependencies) {
  var {
    autosize
  } = base$5(props, context, dependencies);

  // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;

  // =============== HOOKS ================

  onMounted(() => {
    form$.value.on('language', () => {
      autosize();
    });
  });
  return {
    autosize
  };
};

var base$4 = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============

  var fire = dependencies.fire;
  var el$ = dependencies.el$;

  // =============== METHODS ==============

  /**
   * Handles `blur` event.
   *
   * @returns {void}
   * @private
   */
  var handleBlur = () => {
    fire('blur', el$.value);
  };
  return {
    handleBlur
  };
};

var TextareaElement = {
  name: 'TextareaElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'blur', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'textarea',
      private: true
    },
    default: {
      required: false,
      type: [String, Number],
      default: null
    },
    addons: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    autogrow: {
      required: false,
      type: [Boolean],
      default: true
    },
    rows: {
      required: false,
      type: [Number],
      default: 3
    },
    debounce: {
      required: false,
      type: [Number],
      default: null
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    floating: {
      required: false,
      type: [String, Boolean],
      default: null
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    placeholder: {
      required: false,
      type: [String],
      default: null
    },
    readonly: {
      required: false,
      type: [Boolean],
      default: false
    },
    attrs: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    onBlur: {
      required: false,
      type: [Function],
      default: null,
      private: true
    }
  },
  setup(props, context) {
    context.features = [base$14, base$13, base$Q, base$G, base$K, base$N, base$A, base$O, base$s, base$16, base$L, base$w, base$E, base$$, text, base$B, base$F, base$v, base$W, base$C, base$U, base$T, base$P, base$V, base$S, base$6, base$5, base$r, base$4, base$J];
    context.slots = ['label', 'info', 'description', 'before', 'between', 'after', 'addon-before', 'addon-after'];
    return _objectSpread2$1({}, base$H(props, context));
  }
};

var TextElement = {
  name: 'TextElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'blur', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'text',
      private: true
    },
    default: {
      required: false,
      type: [String, Number],
      default: null
    },
    debounce: {
      required: false,
      type: [Number],
      default: null
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    floating: {
      required: false,
      type: [String, Boolean],
      default: null
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    placeholder: {
      required: false,
      type: [String],
      default: null
    },
    readonly: {
      required: false,
      type: [Boolean],
      default: false
    },
    inputType: {
      required: false,
      type: [String],
      default: 'text'
    },
    attrs: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    addons: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    autocomplete: {
      required: false,
      type: [String, Number],
      default: null
    },
    loading: {
      type: [Boolean],
      required: false,
      default: false
    },
    onBlur: {
      required: false,
      type: [Function],
      default: null,
      private: true
    }
  },
  setup(props, context) {
    context.features = [base$14, base$13, base$Q, base$G, base$K, base$N, base$A, base$O, base$s, base$16, base$L, base$w, base$E, base$$, text, base$b, base$B, base$F, base$v, base$W, base$C, base$U, base$T, base$P, base$V, base$S, base$6, base$r, base$4, base$J];
    context.slots = ['label', 'info', 'description', 'before', 'between', 'after', 'addon-before', 'addon-after'];
    return _objectSpread2$1({}, base$H(props, context));
  }
};

var ToggleElement = {
  name: 'ToggleElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'toggle',
      private: true
    },
    default: {
      required: false,
      type: [String, Number, Boolean],
      default: undefined // falseValue
    },

    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    text: {
      required: false,
      type: [String],
      default: null
    },
    labels: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    trueValue: {
      required: false,
      type: [Boolean, String, Number],
      default: true
    },
    falseValue: {
      required: false,
      type: [Boolean, String, Number],
      default: false
    },
    extendOptions: {
      required: false,
      type: [Object],
      default: () => ({})
    }
  },
  setup(props, context) {
    context.features = [base$14, base$13, base$Q, base$G, base$K, base$N, boolean, base$O, base$16, base$L, toggle, base$E, base$$, base$D, base$B, base$F, base$W, base$C, base$U, base$T, base$P, base$V, base$S, base$t, base$z, toggle$1];
    context.slots = ['default', 'label', 'info', 'description', 'before', 'between', 'after'];
    return _objectSpread2$1({}, base$H(props, context));
  }
};

var base$3 = function base(props, context, dependencies) {
  var {
    endpoint,
    method
  } = toRefs(props);

  // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;
  var input = dependencies.input;

  // ================ DATA ================

  /**
   * Whether the editor is focused.
   * 
   * @type {boolean}
   */
  var focused = ref(false);

  // ============== COMPUTED ==============

  /**
  * The endpoint that uploads attachment. Can be changed by setting [`endpoint`](#endpoint) option.
  * 
  * @type {string}
  * @default `config.endpoints.attachment.url`
  * @private
  */
  var editorEndpoint = computed(() => {
    return endpoint.value || form$.value.$vueform.config.endpoints.attachment.url;
  });

  /**
  * The method to use to upload attachment. Can be changed by setting [`method`](#method) option.
  * 
  * @type {string}
  * @default `config.endpoints.attachment.method`
  * @private
  */
  var editorMethod = computed(() => {
    return method.value || form$.value.$vueform.config.endpoints.attachment.method;
  });

  // =============== HOOKS ================

  onMounted(() => {
    input.value.editor$.addEventListener('focus', () => {
      focused.value = true;
    });
    input.value.editor$.addEventListener('blur', () => {
      focused.value = false;
    });
  });
  return {
    editorEndpoint,
    editorMethod,
    focused
  };
};

var base$2 = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============

  var fire = dependencies.fire;
  var listeners = dependencies.listeners;

  // =============== METHODS ==============

  /**
   * Handles `alert` event.
   *
   * @param {string} message* alert message
   * @returns {void}
   * @private
   */
  var handleAlert = message => {
    fire('alert', message);
    if (!listeners.value.alert) {
      alert(message);
    }
  };
  return {
    handleAlert
  };
};

var EditorElement = {
  name: 'EditorElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'blur', 'alert', 'error', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 'editor',
      private: true
    },
    default: {
      required: false,
      type: [String, Number],
      default: null
    },
    debounce: {
      required: false,
      type: [Number],
      default: null
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    placeholder: {
      required: false,
      type: [String],
      default: null
    },
    onError: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onAlert: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    accept: {
      required: false,
      type: [Array],
      default: () => []
    },
    acceptMimes: {
      required: false,
      type: [Array],
      default: () => []
    },
    endpoint: {
      required: false,
      type: [String, Function],
      default: null,
      '@default': 'config.endpoints.attachment.url'
    },
    method: {
      required: false,
      type: [String],
      default: null,
      '@default': 'config.endpoints.attachment.method'
    },
    hideTools: {
      required: false,
      type: [Array],
      default: () => []
    },
    onBlur: {
      required: false,
      type: [Function],
      default: null,
      private: true
    }
  },
  setup(props, context) {
    context.features = [base$14, base$13, base$Q, base$G, base$K, base$N, base$A, base$O, base$16, base$L, base$E, base$$, text, base$B, editor, base$v, base$W, base$C, base$U, base$T, base$3, base$P, base$V, base$S, base$6, base$2, base$m, base$4, base$J];
    context.slots = ['label', 'info', 'description', 'before', 'between', 'after'];
    return _objectSpread2$1({}, base$H(props, context));
  }
};

var base$1 = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;

  // ============== COMPUTED ===============

  /**
   * The language code of the currently selected language (2 letters).
   * 
   * @type {string}
   */
  var language = computed(() => {
    return form$.value.selectedLanguage;
  });

  /**
   * Available language codes.
   * 
   * @type {array}
   */
  var languages = computed(() => {
    return _.keys(form$.value.options.languages);
  });
  return {
    language,
    languages
  };
};

var TTextareaElement = {
  name: 'TTextareaElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'blur', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 't-textarea',
      private: true
    },
    default: {
      required: false,
      type: [Object, String, Number],
      default: null
    },
    addons: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    autogrow: {
      required: false,
      type: [Boolean],
      default: true
    },
    rows: {
      required: false,
      type: [Number],
      default: 3
    },
    debounce: {
      required: false,
      type: [Number],
      default: null
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    floating: {
      required: false,
      type: [String, Boolean],
      default: null
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    placeholder: {
      required: false,
      type: [String],
      default: null
    },
    readonly: {
      required: false,
      type: [Boolean],
      default: false
    },
    attrs: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    onBlur: {
      required: false,
      type: [Function],
      default: null,
      private: true
    }
  },
  setup(props, context) {
    context.features = [base$14, base$13, base$Q, base$G, base$K, base$N, base$O, base$s, base$16, base$L, base$w, base$1, multilingual$2, multilingual$5, multilingual$3, base$$, multilingual$4, multilingual$6, multilingual$1, base$W, base$C, base$U, base$T, base$P, base$V, base$S, base$6, multilingual, base$r, base$4, base$J];
    context.slots = ['label', 'info', 'description', 'before', 'between', 'after', 'addon-before', 'addon-after'];
    return _objectSpread2$1({}, base$H(props, context));
  }
};

var TTextElement = {
  name: 'TTextElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'blur', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 't-text',
      private: true
    },
    default: {
      required: false,
      type: [Object, String, Number],
      default: undefined
    },
    addons: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    autocomplete: {
      required: false,
      type: [String, Number],
      default: null
    },
    debounce: {
      required: false,
      type: [Number],
      default: null
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    floating: {
      required: false,
      type: [String, Boolean],
      default: null
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    inputType: {
      required: false,
      type: [String],
      default: 'text'
    },
    attrs: {
      required: false,
      type: [Object],
      default: () => ({})
    },
    placeholder: {
      required: false,
      type: [String],
      default: null
    },
    readonly: {
      required: false,
      type: [Boolean],
      default: false
    },
    loading: {
      type: [Boolean],
      required: false,
      default: false
    },
    onBlur: {
      required: false,
      type: [Function],
      default: null,
      private: true
    }
  },
  setup(props, context) {
    context.features = [base$14, base$13, base$Q, base$G, base$K, base$N, base$O, base$s, base$16, base$L, base$w, base$1, multilingual$2, multilingual$5, multilingual$3, base$$, multilingual$4, base$b, multilingual$6, multilingual$1, base$W, base$C, base$U, base$T, base$P, base$V, base$S, base$6, base$r, base$4, base$J];
    context.slots = ['label', 'info', 'description', 'before', 'between', 'after', 'addon-before', 'addon-after'];
    return _objectSpread2$1({}, multilingual$7(props, context));
  }
};

var TEditorElement = {
  name: 'TEditorElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'blur', 'alert', 'error', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      default: 't-editor',
      private: true
    },
    default: {
      required: false,
      type: [Object, String, Number],
      default: null
    },
    debounce: {
      required: false,
      type: [Number],
      default: null
    },
    disabled: {
      required: false,
      type: [Boolean],
      default: false
    },
    id: {
      required: false,
      type: [String],
      default: null
    },
    placeholder: {
      required: false,
      type: [String],
      default: null
    },
    onError: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    onAlert: {
      required: false,
      type: [Function],
      default: null,
      private: true
    },
    accept: {
      required: false,
      type: [Array],
      default: null
    },
    acceptMimes: {
      required: false,
      type: [Array],
      default: null
    },
    endpoint: {
      required: false,
      type: [String, Function],
      default: null,
      '@default': 'config.endpoints.attachment.url'
    },
    method: {
      required: false,
      type: [String],
      default: null,
      '@default': 'config.endpoints.attachment.method'
    },
    hideTools: {
      required: false,
      type: [Array],
      default: () => []
    },
    onBlur: {
      required: false,
      type: [Function],
      default: null,
      private: true
    }
  },
  setup(props, context) {
    context.features = [base$14, base$13, base$Q, base$G, base$K, base$N, base$O, base$16, base$L, base$1, multilingual$2, multilingual$5, multilingual$3, base$$, multilingual$4, teditor, multilingual$1, base$W, base$C, base$U, base$T, base$3, base$P, base$V, base$S, base$6, base$2, base$m, base$4, base$J];
    context.slots = ['label', 'info', 'description', 'before', 'between', 'after'];
    return _objectSpread2$1({}, base$H(props, context));
  }
};

var CheckboxgroupCheckbox = {
  name: 'CheckboxgroupCheckbox',
  props: {
    item: {
      type: [Object, String, Number],
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    },
    items: {
      type: [Object, Array],
      required: true
    },
    index: {
      type: [Number],
      required: true
    },
    attrs: {
      required: false,
      type: [Object],
      default: () => ({})
    }
  },
  setup(props, context) {
    var {
      value
    } = toRefs(props);
    var {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme
    } = base$X(props, context);

    // ============== COMPUTED ==============

    /**
     * Whether the checkbox should be disabled.
     * 
     * @type {boolean}
     */
    var isDisabled = computed(() => {
      return el$.value.disabledItems.map(i => String(i)).indexOf(String(value.value)) !== -1 || el$.value.isDisabled;
    });

    /**
     * Whether the checkbox is checked.
     * 
     * @type {boolean}
     */
    var checked = computed(() => {
      return el$.value.value.indexOf(String(value.value)) !== -1 || el$.value.value.indexOf(Number(value.value)) !== -1;
    });

    /**
     * The `id` attribute of the input.
     * 
     * @type {boolean}
     */
    var id = computed(() => {
      return "".concat(el$.value.fieldId, "-").concat(value.value);
    });

    /**
     * The `name` attribute of the input.
     * 
     * @type {boolean}
     */
    var name = computed(() => {
      return "".concat(el$.value.path, "-").concat(value.value);
    });
    return {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme,
      isDisabled,
      id,
      name,
      checked
    };
  }
};

var base = function base(props, context, dependencies) {
  var el$ = dependencies.el$;

  // ============== COMPUTED ==============

  /**
   * Whether the preview component should be visible.
   * 
   * @type {boolean}
   */
  var visible = computed(() => {
    return el$.value.stage > 0;
  });

  /**
   * Whether the file has link and should be clickable.
   * 
   * @type {boolean}
   */
  var hasLink = computed(() => {
    return el$.value.link && el$.value.clickable;
  });

  /**
   * Whether the preview has upload error.
   * 
   * @type {boolean}
   */
  var hasError = computed(() => {
    return el$.value.hasUploadError;
  });

  /**
   * The link for the file.
   * 
   * @type {string}
   */
  var link = computed(() => {
    return el$.value.link;
  });

  /**
   * The filename to display.
   * 
   * @type {string}
   */
  var filename = computed(() => {
    return el$.value.filename && typeof el$.value.filename === 'string' ? el$.value.filename.split('\\').pop().split('/').pop() : el$.value.filename;
  });

  /**
   * Whether the file should be clickable if it is already permantently uploaded.
   * 
   * @type {boolean}
   */
  var clickable = computed(() => {
    return el$.value.clickable;
  });

  /**
   * Whether the temporary or permanent file is uploaded.
   * 
   * @type {boolean}
   */
  var uploaded = computed(() => {
    return el$.value.stage > 1;
  });

  /**
   * Whether the file is currently uploading.
   * 
   * @type {boolean}
   */
  var uploading = computed(() => {
    return el$.value.uploading;
  });

  /**
   * The percentage of progress when the file is being temporarily uploaded (0-100).
   * 
   * @type {number}
   */
  var progress = computed(() => {
    return el$.value.progress;
  });

  /**
   * Whether the file can be removed. 
   * 
   * @type {boolean}
   */
  var canRemove = computed(() => {
    return (el$.value.canRemove || el$.value.uploading) && !el$.value.isDisabled;
  });

  /**
   * Whether temporary file can be uploaded.
   * 
   * @type {boolean}
   */
  var canUploadTemp = computed(() => {
    return el$.value.canUploadTemp;
  });

  /**
   * The text for upload button. Can be also changed in the locale file: `vueform.elements.file.upload`
   * 
   * @type {string}
   */
  var uploadText = computed(() => {
    return el$.value.__('vueform.elements.file.upload');
  });

  /**
   * The `aria-labelledby` attribute of the preview.
   * 
   * @type {string}
   */
  var ariaLabelledby = computed(() => {
    return el$.value.embed ? undefined : el$.value.labelId;
  });

  // =============== METHODS ==============

  /**
   * Upload the currently selected file as temporary.
   * 
   * @returns {void}
   */
  var upload = () => {
    el$.value.uploadTemp();
  };

  /**
   * Remove the file.
   * 
   * @returns {void}
   */
  var remove = () => {
    if (uploading.value) {
      el$.value.handleAbort();
    } else {
      el$.value.handleRemove();
    }
  };

  /**
   * Handle the keyup event of the preview.
   * 
   * @param {Event} event the keyup Event
   * @returns {void}
   * @private
   */
  var handleKeyup = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* (e) {
      switch (e.key) {
        case 'Backspace':
        case 'Delete':
          remove();
          if (!el$.value.canSelect) {
            return;
          }
          yield nextTick();
          document.querySelector("#".concat(el$.value.fieldId)).focus();
          break;
        case 'Enter':
          if (el$.value.auto) {
            return;
          }
          upload();
          break;
      }
    });
    return function handleKeyup(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  // =============== HOOKS ================

  return {
    visible,
    hasLink,
    hasError,
    link,
    filename,
    clickable,
    uploaded,
    uploading,
    progress,
    canRemove,
    canUploadTemp,
    uploadText,
    ariaLabelledby,
    upload,
    remove,
    handleKeyup
  };
};

var FilePreview = {
  name: 'FilePreview',
  props: {
    attrs: {
      required: false,
      type: [Object],
      default: () => ({})
    }
  },
  setup(props, context) {
    var {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme
    } = base$X(props, context);
    var {
      visible,
      hasLink,
      hasError,
      link,
      filename,
      clickable,
      uploaded,
      uploading,
      progress,
      canRemove,
      canUploadTemp,
      uploadText,
      ariaLabelledby,
      upload,
      remove,
      handleKeyup
    } = base(props, context, {
      el$
    });

    // ============== COMPUTED ==============

    /**
     * The image's preview when [`view`](#option-view) is `image` or `gallery`. Equals to the `link` if the file is already uploaded and `base64` if only selected or temporarily uploaded.
     * 
     * @type {string}
     */
    var preview = computed(() => {
      return ['image', 'gallery'].indexOf(el$.value.View) !== -1 ? el$.value.preview : null;
    });

    /**
     * The `aria-placeholder` attribute of the preview.
     * 
     * @type {string}
     */
    var ariaPlaceholder = computed(() => {
      var text = el$.value.embed && el$.value.View !== 'gallery' ? undefined : filename.value;
      if (hasError.value) {
        if (text) {
          text += ', error';
        } else {
          text = 'error';
        }
      }
      return text;
    });

    /**
     * The `aria-roledescription` attribute of the preview.
     * 
     * @type {string}
     */
    var ariaRoledescription = computed(() => {
      return el$.value.embed && el$.value.View !== 'gallery' || uploaded.value || el$.value.auto ? undefined : uploadText.value;
    });
    return {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme,
      visible,
      hasLink,
      hasError,
      link,
      filename,
      clickable,
      uploaded,
      uploading,
      progress,
      canRemove,
      canUploadTemp,
      uploadText,
      preview,
      ariaLabelledby,
      ariaPlaceholder,
      ariaRoledescription,
      upload,
      remove,
      handleKeyup
    };
  }
};

var RadiogroupRadio = {
  name: 'RadiogroupRadio',
  props: {
    item: {
      type: [Object, String, Number],
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    },
    items: {
      type: [Object, Array],
      required: true
    },
    index: {
      type: [Number],
      required: true
    },
    attrs: {
      required: false,
      type: [Object],
      default: () => ({})
    }
  },
  setup(props, context) {
    var {
      value
    } = toRefs(props);
    var {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme
    } = base$X(props, context);

    // ============== COMPUTED ==============

    /**
     * Whether the radio should be disabled.
     * 
     * @type {boolean}
     */
    var isDisabled = computed(() => {
      return el$.value.disabledItems.map(i => String(i)).indexOf(String(value.value)) !== -1 || el$.value.isDisabled;
    });

    /**
     * Whether the radio is checked.
     * 
     * @type {boolean}
     */
    var checked = computed(() => {
      return el$.value.value === String(value.value) || el$.value.value === Number(value.value);
    });

    /**
     * The `id` attribute of the input.
     * 
     * @type {boolean}
     */
    var id = computed(() => {
      return "".concat(el$.value.fieldId, "-").concat(value.value);
    });

    /**
     * The `name` attribute of the input.
     * 
     * @type {boolean}
     */
    var name = computed(() => {
      return el$.value.path;
    });
    return {
      el$,
      form$,
      Size,
      View,
      classesInstance,
      classes,
      Templates,
      template,
      theme,
      isDisabled,
      id,
      name,
      checked
    };
  }
};

var index = {
  Vueform,
  FormErrors,
  FormMessages,
  FormLanguages,
  FormLanguage,
  FormTabs,
  FormTab,
  FormSteps,
  FormStepsControls,
  FormStepsControl,
  FormStep,
  FormElements,
  ElementLayout,
  ElementLayoutInline,
  ElementLoader,
  ElementLabelFloating,
  ElementLabel,
  ElementInfo,
  ElementDescription,
  ElementError,
  ElementMessage,
  ElementText,
  DragAndDrop,
  ElementAddon,
  DatepickerWrapper,
  EditorWrapper,
  ButtonElement,
  CheckboxElement,
  CheckboxgroupElement,
  DateElement,
  DatesElement,
  FileElement,
  GroupElement,
  HiddenElement,
  ListElement,
  LocationElement,
  MultifileElement,
  MultiselectElement,
  ObjectElement,
  RadioElement,
  RadiogroupElement,
  SelectElement,
  SliderElement,
  StaticElement,
  TagsElement,
  TextareaElement,
  TextElement,
  ToggleElement,
  EditorElement,
  TTextareaElement,
  TTextElement,
  TEditorElement,
  CheckboxgroupCheckbox,
  FilePreview,
  RadiogroupRadio
};

var runtime = {exports: {}};

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (module) {
	var runtime = (function (exports) {

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; };
	  var undefined$1; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  function define(obj, key, value) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	    return obj[key];
	  }
	  try {
	    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
	    define({}, "");
	  } catch (err) {
	    define = function(obj, key, value) {
	      return obj[key] = value;
	    };
	  }

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) });

	    return generator;
	  }
	  exports.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  define(IteratorPrototype, iteratorSymbol, function () {
	    return this;
	  });

	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = GeneratorFunctionPrototype;
	  defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: true });
	  defineProperty(
	    GeneratorFunctionPrototype,
	    "constructor",
	    { value: GeneratorFunction, configurable: true }
	  );
	  GeneratorFunction.displayName = define(
	    GeneratorFunctionPrototype,
	    toStringTagSymbol,
	    "GeneratorFunction"
	  );

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      define(prototype, method, function(arg) {
	        return this._invoke(method, arg);
	      });
	    });
	  }

	  exports.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  exports.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      define(genFun, toStringTagSymbol, "GeneratorFunction");
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  exports.awrap = function(arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator, PromiseImpl) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return PromiseImpl.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return PromiseImpl.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration.
	          result.value = unwrapped;
	          resolve(result);
	        }, function(error) {
	          // If a rejected Promise was yielded, throw the rejection back
	          // into the async generator function so it can be handled there.
	          return invoke("throw", error, resolve, reject);
	        });
	      }
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new PromiseImpl(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    defineProperty(this, "_invoke", { value: enqueue });
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
	    return this;
	  });
	  exports.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
	    if (PromiseImpl === void 0) PromiseImpl = Promise;

	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList),
	      PromiseImpl
	    );

	    return exports.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;

	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);

	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }

	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined$1) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;

	      if (context.method === "throw") {
	        // Note: ["return"] must be used for ES3 parsing compatibility.
	        if (delegate.iterator["return"]) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined$1;
	          maybeInvokeDelegate(delegate, context);

	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }

	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    var info = record.arg;

	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;

	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;

	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined$1;
	      }

	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }

	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  define(Gp, toStringTagSymbol, "Generator");

	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  define(Gp, iteratorSymbol, function() {
	    return this;
	  });

	  define(Gp, "toString", function() {
	    return "[object Generator]";
	  });

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  exports.keys = function(val) {
	    var object = Object(val);
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined$1;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  exports.values = values;

	  function doneResult() {
	    return { value: undefined$1, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined$1;
	      this.done = false;
	      this.delegate = null;

	      this.method = "next";
	      this.arg = undefined$1;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined$1;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined$1;
	        }

	        return !! caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined$1;
	      }

	      return ContinueSentinel;
	    }
	  };

	  // Regardless of whether this script is executing as a CommonJS module
	  // or not, return the runtime object so that we can declare the variable
	  // regeneratorRuntime in the outer scope, which allows this module to be
	  // injected easily by `bin/regenerator --include-runtime script.js`.
	  return exports;

	}(
	  // If this script is executing as a CommonJS module, use module.exports
	  // as the regeneratorRuntime namespace. Otherwise create a new empty
	  // object. Either way, the resulting object will be used to initialize
	  // the regeneratorRuntime variable at the top of this file.
	  module.exports 
	));

	try {
	  regeneratorRuntime = runtime;
	} catch (accidentalStrictMode) {
	  // This module should not be running in strict mode, so the above
	  // assignment should always work unless something is misconfigured. Just
	  // in case runtime.js accidentally runs in strict mode, in modern engines
	  // we can explicitly access globalThis. In older engines we can escape
	  // strict mode using a global Function call. This could conceivably fail
	  // if a Content Security Policy forbids using Function, but in that case
	  // the proper solution is to fix the accidental strict mode problem. If
	  // you've misconfigured your bundler to force strict mode and applied a
	  // CSP to forbid Function, and you're not willing to fix either of those
	  // problems, please detail your unique predicament in a GitHub issue.
	  if (typeof globalThis === "object") {
	    globalThis.regeneratorRuntime = runtime;
	  } else {
	    Function("r", "regeneratorRuntime = r")(runtime);
	  }
	}
} (runtime));

var Validator = class {
  constructor(rule, props) {
    var _props$element$;
    this.rule = rule;
    this.attributes = rule.attributes || {};
    this.condition = rule.condition || null;
    this.dependent = rule.dependent || null;
    this.element$ = props.element$;
    this.form$ = ((_props$element$ = props.element$) === null || _props$element$ === void 0 ? void 0 : _props$element$.form$) || {};
    this.numeric = props.numeric || false;
    this.invalid = false;
    this.pending = false;
    this.debouncer = null;
    this.lastValue = null;
    this.watchers = {};
    if (this.condition && this.dependent) {
      watch(computed(() => _.get(this.form$.data, this.dependent)), () => {
        if (this.element$.validated) {
          // we need to revalidate the whole element
          if (this.name === 'nullable') {
            this.element$.validate();
          }

          // we need to revalidate only current validator
          else {
            // We need to do this instead of this.validate()
            // because Vue3 does not recognize `invalid` as
            // as a reactive property if used that way.
            this.revalidate();
          }
        }
      });
    }
    this.init();
  }
  get name() {
    return this.rule.name;
  }
  get failing() {
    return this.invalid;
  }
  get defaultMessage() {
    return this.form$.__('vueform.defaultMessage');
  }
  get message() {
    var message = '';
    if (this.element$.messages[this.name]) {
      message = this.element$.messages[this.name];
    } else if (this.form$.options.messages[this.name]) {
      message = this.form$.options.messages[this.name];
    } else if (this.name !== '_class' && this.form$.__("validation")[this.name] !== undefined) {
      message = this.form$.__("validation.".concat(this.name));
      if (_.isPlainObject(message)) {
        message = message[this.messageType];
      }
    } else {
      message = this.defaultMessage;
    }

    // replace :params
    _.each(_.map(message.match(/:\w+/g), p => p.replace(':', '')), param => {
      message = message.replace(":".concat(param), this.messageParams[param]);
    });

    // replace {params}
    _.each(_.map(message.match(/{[^}]+/g), p => p.replace('{', '')), param => {
      message = message.replace("{".concat(param, "}"), this.messageParams[param]);
    });
    return message;
  }
  get messageType() {
    if (this.isNumeric) {
      return 'numeric';
    } else if (this.isFile) {
      return 'file';
    } else if (this.isArray) {
      return 'array';
    }
    return 'string';
  }
  get messageParams() {
    return {
      attribute: this.attributeName
    };
  }
  get attributeName() {
    return this.element$.genericName;
  }
  get type() {
    if (this.isNumeric) {
      return 'numeric';
    } else if (this.isFile) {
      return 'file';
    } else if (this.isArray) {
      return 'array';
    }
    return 'string';
  }
  get isNumeric() {
    return _.some(this.element$.Validators, {
      name: 'numeric'
    }) || _.some(this.element$.Validators, {
      name: 'integer'
    });
  }
  get isNullable() {
    var nullable = false;
    _.each(this.element$.Validators, Validator => {
      if (Validator.name !== 'nullable') {
        return;
      }
      if (Validator.condition === null) {
        nullable = true;
        return;
      }
      nullable = Validator.condition(this.form$, this);
    });
    return nullable;
  }
  get isFile() {
    return this.element$.isFileType;
  }
  get isArray() {
    return this.element$.isArrayType;
  }
  get isAsync() {
    return false;
  }
  get debounce() {
    if (this.attributes.debounce) {
      return this.attributes.debounce;
    }
    if (this.element$.debounce) {
      return this.element$.debounce;
    }
    return false;
  }
  get debouncing() {
    return this.debouncer !== null;
  }
  init() {}
  validate(value) {
    var _this = this;
    return _asyncToGenerator(function* () {
      if (value === undefined) {
        var _this$element$;
        value = (_this$element$ = _this.element$) === null || _this$element$ === void 0 ? void 0 : _this$element$.value;
      }
      if (!_this.form$.validation) {
        return;
      }
      if (_this.isNullable && !_this.filled(value)) {
        _this.invalid = false;
        return;
      }
      if (_this.condition !== null) {
        if (!_this.condition(_this.form$, _this)) {
          _this.invalid = false;
          return;
        }
      }
      if (_this.debounce && _this.filled(value)) {
        yield _this._validateWithDebounce(value);
      } else {
        if (_this.debounce && _this.debouncer) {
          clearTimeout(_this.debouncer);
        }
        yield _this._validate(value);
      }
    })();
  }
  reset() {
    this.invalid = false;
  }
  watch(variables) {
    if (!Array.isArray(variables)) {
      variables = [variables];
    }
    variables.forEach(variable => {
      this.addWatcher(variable);
    });
  }
  addWatcher(variable) {
    if (this.watchers[variable]) {
      return;
    }
    this.watchers[variable] = watch(computed(() => _.get(this.form$.data, variable)), () => {
      this.revalidate();
    });
  }
  revalidate() {
    this.element$.Validators.forEach(Validator => {
      if (Validator.rule.name === this.rule.name) {
        Validator.validate();
      }
    });
  }
  watchOther() {
    this.form$.$nextTick(() => {
      if (!this.other$) {
        return;
      }
      this.form$.$watch(() => {
        var _this$other$;
        return (_this$other$ = this.other$) === null || _this$other$ === void 0 ? void 0 : _this$other$.value;
      }, () => {
        if (this.element$.validated) {
          this.element$.validate();
        }
      });
    });
  }
  size(value) {
    if (this.isNumeric) {
      return value;
    } else if (this.isFile) {
      return value ? value.size / 1000 : 0;
    } else if (this.isArray) {
      return value.length;
    } else if (value === null) {
      return 0;
    } else if (value === undefined) {
      return 0;
    } else if (value === '') {
      return 0;
    }
    return String(value).length;
  }
  filled(value) {
    if (value === undefined || value === null && value !== this.element$.trueValue || value === this.element$.falseValue) {
      return false;
    } else if (this.isNumeric && value === 0) {
      return false;
    } else if (_.isString(value) && _.trim(value) === '') {
      return false;
    } else if (_.isArray(value) && value.length < 1) {
      return false;
    } else if (value instanceof File && value.name === '') {
      return false;
    }
    return true;
  }
  _validate(value) {
    var _this2 = this;
    return _asyncToGenerator(function* () {
      if (_this2.isAsync) {
        yield _this2._validateAsync(value);
      } else {
        _this2._validateSync(value);
      }
    })();
  }
  _validateAsync(value) {
    var _this3 = this;
    return _asyncToGenerator(function* () {
      _this3.lastValue = value;
      _this3.pending = true;
      var valid = yield _this3.check(value);
      if (dataEquals(_this3.lastValue, value)) {
        _this3.invalid = !valid;
        _this3.pending = false;
      }
    })();
  }
  _validateSync(value) {
    this.invalid = !this.check(value);
  }
  _validateWithDebounce(value) {
    var _this4 = this;
    return _asyncToGenerator(function* () {
      return new Promise((resolve, reject) => {
        if (_this4.debouncer) {
          resolve();
          clearTimeout(_this4.debouncer);
        }
        _this4.debouncer = setTimeout( /*#__PURE__*/_asyncToGenerator(function* () {
          yield _this4._validate(value);
          _this4.debouncer = null;
          resolve();
        }), _this4.debounce);
      });
    })();
  }
};

export { Validator, Vueform, index as components, config, base$15 as useVueform };
