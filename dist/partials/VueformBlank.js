import { ref, toRefs, computed, watch, getCurrentInstance, provide, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'composition-api';
import _ from 'lodash';

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

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var mergeComponentClasses = function mergeComponentClasses(base, add) {
  var classes = _.cloneDeep(base);

  _.each(add, function (classes_, key) {
    classes[key] = mergeClass(base[key] || null, classes_);
  });

  return classes;
};

var mergeClass = function mergeClass(base, add) {
  if (add === null || _.isEmpty(add)) {
    return base;
  }

  if (base === null || _.isEmpty(base)) {
    return add;
  }

  var classes;

  if (typeof base === 'string') {
    base = base.split(' ');
  }

  if (_.isPlainObject(base)) {
    // { class: true } + { class2: true } => { class: true, class2: true }
    if (_.isPlainObject(add)) {
      classes = Object.assign({}, base, add);
    } // { class: true } + ['class2'] => [{ class: true }, 'class2']
    else if (_.isArray(add)) {
      classes = _.concat([base], add);
    } else {
      // { class: true } + 'class2' => [ class: true, class2: true]
      classes = Object.assign({}, base, _defineProperty({}, add, true));
    }
  } else {
    // ['class'] + { class2: true } => ['class', { class2: true }]
    if (_.isPlainObject(add)) {
      classes = _.concat(base, [add]);
    } // ['class'] + ['class2'] => ['class', 'class2']
    else if (_.isArray(add)) {
      classes = base;

      _.each(add, function (a) {
        if (classes.indexOf(a) === -1) {
          classes = _.concat(classes, [a]);
        }
      }); // ['class'] + 'class2' => ['class', 'class2']

    } else {
      classes = _.concat(base, [add]);
    }
  }

  return classes;
};

var getFormData = function getFormData(data, formData, namespace) {
  if (formData === undefined) {
    formData = new FormData();
  }

  if (namespace === undefined) {
    namespace = '';
  }

  if (_.isArray(data)) {
    _.each(data, function (value, key) {
      getFormData(value, formData, namespace + '[' + key + ']');
    });
  } else if (_.isPlainObject(data)) {
    _.each(data, function (value, key) {
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
  _asyncForEach = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(array, callback) {
    var index, key;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            index = 0;

          case 1:
            if (!(index < (_.isPlainObject(array) ? _.values(array) : array).length)) {
              _context.next = 8;
              break;
            }

            key = _.isPlainObject(array) ? _.keys(array)[index] : index;
            _context.next = 5;
            return callback(array[key], key, array);

          case 5:
            index++;
            _context.next = 1;
            break;

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
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
  } else if (_typeof(data) === 'object' && data !== null) {
    return _.mapValues(data, dataToComperable);
  }

  return data;
};

function dataEquals(a, b) {
  return _.isEqual(dataToComperable(a), dataToComperable(b));
}

var base$1 = function base(props, context, dependencies) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if (!options.events) {
    throw new Error('`events` option is required for useEvents');
  } // ================ DATA ================

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

  var listeners = ref({}); // =============== METHODS ==============

  /**
   * Adds a listener for an event.
   *
   * @param {string} event name of the event to listen for
   * @param {function} callback callback to run when the event is triggered
   * @returns {void}
   */

  var on = function on(evt, callback) {
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


  var off = function off(evt) {
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

    _.each(listeners.value[evt], function (callback) {
      callback.apply(void 0, _toConsumableArray(args));
    });

    if (!listeners.value[evt] || !listeners.value[evt].length) {
      context.emit.apply(context, _toConsumableArray([evt].concat(args)));
    }
  }; // =============== HOOKS ================
  // If component has descriptor subscribe upfront
  // for events using `onEvent` format 


  _.each(events.value, function (evt) {
    var callback = props['on' + _.upperFirst(_.camelCase(evt))];

    if (callback) {
      on(evt, callback);
    }
  });

  return {
    events: events,
    listeners: listeners,
    on: on,
    off: off,
    fire: fire
  };
};

function useModel (props, context, dependencies) {
  var _toRefs = toRefs(props),
      v = _toRefs.value,
      mv = _toRefs.modelValue,
      sync = _toRefs.sync;

  var $this = dependencies.$this;
  /**
   * Any `v-model` / `value` / `modelValue` prop provided for the form.
   * 
   * @type {object}
   * @private
   */

  var externalValue = context.expose !== undefined ? mv : v; // ================ DATA =================

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

  var intermediaryValue = ref(externalValue && externalValue.value ? _.cloneDeep(externalValue.value) : null); // ============== COMPUTED ===============

  /**
   * Whether form data should be synced when the external value changes (when external value is used).
   * 
   * @type {boolean}
   * @private
   */

  var isSync = computed(function () {
    return sync.value && externalValue && externalValue.value !== undefined;
  });
  /**
   * The form's model, which either comes from `externalValue` or `internalData`.
   * 
   * @type {object}
   * @private
   */

  var model = computed(function () {
    return _.cloneDeep(externalValue.value || internalData.value);
  }); // =============== METHODS ==============

  /**
   * Updates an element's data in the form model.
   * 
   * @param {string} dataPath the `dataPath` property of the element to update
   * @param {any} val value to update with
   * @returns {void}
   * @private
   */

  var updateModel = function updateModel(dataPath, val) {
    // When using v-model as model
    if (externalValue.value) {
      // Non-flat elements
      if (dataPath) {
        var parts = dataPath.split('.');
        var element = parts.pop();
        var parent = parts.join('.') || null;
        var externalValueObject = parent ? _.get(externalValue.value, parent) : externalValue.value; // Thinking about cases when it tries to to set an element 
        // which no longer exists in the same tick (eg. when removing
        // a list element with order and tries to refresh its order field)

        if (externalValueObject !== undefined) {
          // We are setting externalValue (v-model) to instantly reflect changes in field value
          $this.$set(externalValueObject, element, val);
        } // Setting directly because externalValue might contain changes
        // that intermediary does not have yet, so it would overwrite
        // external model with old value


        intermediaryValue.value = _.cloneDeep(externalValue.value);
      } // Group element
      else {
        _.each(val, function (v, key) {
          if (externalValue.value !== undefined) {
            $this.$set(externalValue.value, key, v);
          }

          if (intermediaryValue.value !== undefined) {
            $this.$set(intermediaryValue.value, key, v);
          }
        });
      } // When using this.data as model

    } else {
      // We need a different clone than this.valueValue clone to not effect children watching model
      var _model = _.cloneDeep(externalValue.value || internalData.value); // Non-flat elements


      if (dataPath) {
        _.set(_model, dataPath, val); // Flat elements (eg. Group)

      } else {
        _model = Object.assign({}, _model, val);
      }

      internalData.value = _model;
    }
  };

  if (externalValue && externalValue.value) {
    watch(model, function (n, o) {
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
    model: model,
    internalData: internalData,
    intermediaryValue: intermediaryValue,
    externalValue: externalValue,
    isSync: isSync,
    updateModel: updateModel
  };
}

var base = function base(props, context) {

  var _toRefs = toRefs(props),
      schema = _toRefs.schema,
      tabs = _toRefs.tabs,
      steps = _toRefs.steps,
      replaceClasses = _toRefs.replaceClasses,
      extendClasses = _toRefs.extendClasses,
      replaceTemplates = _toRefs.replaceTemplates,
      theme = _toRefs.theme,
      messages = _toRefs.messages,
      columns = _toRefs.columns,
      languages = _toRefs.languages,
      addClass = _toRefs.addClass,
      formKey = _toRefs.formKey,
      endpoint = _toRefs.endpoint,
      method = _toRefs.method,
      formData = _toRefs.formData,
      language = _toRefs.language,
      validateOn = _toRefs.validateOn,
      forceLabels = _toRefs.forceLabels,
      floatPlaceholders = _toRefs.floatPlaceholders,
      multilingual = _toRefs.multilingual,
      stepsControls = _toRefs.stepsControls,
      displayErrors = _toRefs.displayErrors,
      displayMessages = _toRefs.displayMessages,
      formatLoad = _toRefs.formatLoad,
      formatData = _toRefs.formatData,
      prepare = _toRefs.prepare,
      default_ = _toRefs["default"],
      disabled = _toRefs.disabled,
      loading = _toRefs.loading,
      _onChange = _toRefs.onChange,
      _onReset = _toRefs.onReset,
      _onClear = _toRefs.onClear,
      _onSubmit = _toRefs.onSubmit,
      _onSuccess = _toRefs.onSuccess,
      _onError = _toRefs.onError,
      _onLanguage = _toRefs.onLanguage,
      _onBeforeMount = _toRefs.onBeforeMount,
      _onMounted = _toRefs.onMounted,
      _onBeforeUpdate = _toRefs.onBeforeUpdate,
      _onUpdated = _toRefs.onUpdated,
      _onBeforeUnmount = _toRefs.onBeforeUnmount,
      _onUnmounted = _toRefs.onUnmounted;

  var evts = ['change', 'reset', 'clear', 'submit', 'success', 'error', 'language', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'];
  var $this = getCurrentInstance().proxy; // ============ DEPENDENCIES ============

  var _useEvents = base$1(props, context, {
    form$: $this
  }, {
    events: evts
  }),
      events = _useEvents.events,
      listeners = _useEvents.listeners,
      fire = _useEvents.fire,
      on = _useEvents.on,
      off = _useEvents.off;

  var _useModel = useModel(props, context, {
    $this: $this,
    fire: fire
  }),
      externalValue = _useModel.externalValue,
      model = _useModel.model,
      internalData = _useModel.internalData,
      intermediaryValue = _useModel.intermediaryValue,
      isSync = _useModel.isSync,
      updateModel = _useModel.updateModel; // ================ DATA ================

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
   * Instance of MessageBag service. It can be used to add [custom errors and messages](docs/1.x/validating-elements#custom-errors-and-messages).
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

  var userConfig = ref({}); // ============== COMPUTED ==============

  /**
   * The form component instance (self).
   * 
   * @type {component}
   */

  var form$ = computed(function () {
    return $this;
  });
  /**
   * The default configuration object.
   * 
   * @type {object}
   */

  var baseConfig = computed(function () {
    return $this.$vueform;
  });
  /**
   * Registered services.
   * 
   * @type {object}
   */

  var services = computed(function () {
    return $this.$vueform.services;
  });
  /**
   * Form options merged from config, component props & the component's `data.vueform` options.
   * 
   * @type {object}
   * @private
   */

  var options = computed(function () {
    var options = {
      schema: orderedSchema.value,
      tabs: formTabs.value,
      steps: formSteps.value
    };
    var override = {
      columns: columns,
      languages: languages,
      language: language,
      theme: theme,
      endpoint: endpoint,
      method: method,
      validateOn: validateOn,
      replaceClasses: replaceClasses,
      extendClasses: extendClasses,
      replaceTemplates: replaceTemplates,
      messages: messages,
      addClass: addClass,
      formKey: formKey,
      multilingual: multilingual,
      formatLoad: formatLoad,
      formatData: formatData,
      prepare: prepare,
      "default": default_,
      formData: formData
    };
    var ifNotUndefined = {
      stepsControls: stepsControls,
      displayErrors: displayErrors,
      displayMessages: displayMessages,
      forceLabels: forceLabels,
      disabled: disabled,
      loading: loading,
      floatPlaceholders: floatPlaceholders,
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
      columns: baseConfig.value.config.columns,
      languages: baseConfig.value.config.languages,
      language: baseConfig.value.config.language,
      endpoint: baseConfig.value.config.endpoints.submit.url,
      method: baseConfig.value.config.endpoints.submit.method,
      validateOn: baseConfig.value.config.validateOn,
      displayErrors: baseConfig.value.config.displayErrors,
      displayMessages: baseConfig.value.config.displayMessages,
      forceLabels: baseConfig.value.config.forceLabels,
      floatPlaceholders: baseConfig.value.config.floatPlaceholders,
      formData: baseConfig.value.config.formData,
      theme: baseConfig.value.theme,
      replaceClasses: {},
      extendClasses: {},
      replaceTemplates: {},
      messages: {},
      "default": {},
      addClass: null,
      formKey: null,
      formatLoad: null,
      formatData: null,
      prepare: null,
      multilingual: false,
      stepsControls: true,
      disabled: false,
      loading: false
    };

    _.each(override, function (val, key) {
      options[key] = userConfig.value[key] !== undefined ? userConfig.value[key] : (val && val.value ? val.value : undefined) || defaults[key];
    });

    _.each(ifNotUndefined, function (val, key) {
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

  var orderedSchema = computed(function () {
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

      _.each(blocks, function (block) {
        _.each(block.elements, function (name) {
          if (formSchema.value[name]) {
            orderedSchema[name] = formSchema.value[name];
          }
        });
      });

      _.each(Object.keys(formSchema.value), function (name) {
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

  var formSchema = computed(function () {
    return _.merge({}, schema && schema.value ? schema.value : {}, userConfig.value.schema || {});
  });
  /**
   * The form's tabs merged from `tabs` prop and the component's `data.vueform.tabs` object.
   * 
   * @type {object}
   * @private
   */

  var formTabs = computed(function () {
    return _.merge({}, tabs && tabs.value ? tabs.value : {}, userConfig.value.tabs || {});
  });
  /**
   * The form's steps merged from `steps` prop and the component's `data.vueform.steps` object.
   * 
   * @type {object}
   * @private
   */

  var formSteps = computed(function () {
    return _.merge({}, steps && steps.value ? steps.value : {}, userConfig.value.steps || {});
  });
  /**
   * The form data including the data of all elements even the ones with `available: false` and `submit: false`.
   * 
   * @type {object}
   */

  var data = computed(function () {
    var data = {};

    _.each(elements$.value, function (e$) {
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

  var requestData = computed(function () {
    var requestData = {};

    _.each(elements$.value, function (e$) {
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

  var dirty = computed(function () {
    return _.some(elements$.value, function (element$) {
      return element$.isStatic === false && element$.available === true && element$.dirty === true;
    });
  });
  /**
   * Whether the form has any invalid elements.
   * 
   * @type {boolean}
   */

  var invalid = computed(function () {
    return _.some(elements$.value, function (element$) {
      return element$.isStatic === false && element$.available === true && element$.invalid === true;
    });
  });
  /**
   * Whether the form has any elements with active debounce process.
   * 
   * @type {boolean}
   */

  var debouncing = computed(function () {
    return _.some(elements$.value, function (element$) {
      return element$.isStatic === false && element$.available === true && element$.debouncing === true;
    });
  });
  /**
   * Whether the form has any elements with pending async validation.
   * 
   * @type {boolean}
   */

  var pending = computed(function () {
    return _.some(elements$.value, function (element$) {
      return element$.isStatic === false && element$.available === true && element$.pending === true;
    });
  });
  /**
   * Whether each element in the form has been validated at least once.
   * 
   * @type {boolean}
   */

  var validated = computed(function () {
    return !_.some(elements$.value, function (element$) {
      return element$.isStatic === false && element$.available === true && element$.validated === false;
    });
  });
  /**
   * Whether the form has any elements with `busy: true` or the [`isLoading`](#property-is-loading), [`preparing`](#property-preparing) or [`submitting`](#property-submitting) property is `true`.
   * 
   * @type {boolean}
   */

  var busy = computed(function () {
    return _.some(elements$.value, function (element$) {
      return element$.isStatic === false && element$.available === true && element$.busy === true;
    }) || submitting.value || preparing.value || isLoading.value;
  }); // no export

  /**
   * Errors collected from elements.
   * 
   * @type {array}
   * @private
   */

  var elementErrors = computed(function () {
    var errors = [];

    _.each(_.filter(elements$.value, {
      available: true,
      isStatic: false
    }), function (element$) {
      _.each(element$.errors, function (error) {
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

  var formErrors = computed(function () {
    return messageBag.value.errors;
  });
  /**
   * Whether the form has any errors.
   * 
   * @type {boolean}
   */

  var hasErrors = computed(function () {
    return formErrors.value.length > 0;
  });
  /**
   * Whether the form should display errors above the form with [`FormErrors`](form-errors) component. Can be disabled by [`displayErrors`](#option-display-errors) or in `config.displayErrors`.
   * 
   * @type {boolean}
   */

  var showErrors = computed(function () {
    return hasErrors.value && options.value.displayErrors;
  });
  /**
   * Form messages including element messages and the ones added to [`messageBag`](#property-message-bag) manually.
   * 
   * @type {array}
   */

  var formMessages = computed(function () {
    return messageBag.value.messages;
  });
  /**
   * Whether the form has any messages.
   * 
   * @ignore
   * @type {boolean}
   */

  var hasMessages = computed(function () {
    return formMessages.value.length > 0;
  });
  /**
   * Whether the form should display messages above the form with [`FormMessages`](form-messages) component. Can be disabled by [`displayMessages`](#option-display-messages) or in `config.displayMessages`.
   * 
   * @type {boolean}
   */

  var showMessages = computed(function () {
    return hasMessages.value && options.value.displayMessages;
  });
  /**
   * Whether the form is multilingual and should show [`FormLanguages`](form-languages) component. Returns `true` if [`multilingual`](#option-multilingual) is enabled.
   * 
   * @type {boolean}
   */

  var isMultilingual = computed(function () {
    return options.value.multilingual;
  });
  /**
   * Whether the form should show langauge selectors.
   * 
   * @type {boolean}
   */

  var showLanguages = computed(function () {
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

  var isDisabled = computed(function () {
    return invalid.value && shouldValidateOnChange.value || busy.value || options.value.disabled;
  });
  /**
   * Whether loading state is triggered manually via [`loading`](#option-loading) option.
   * 
   * @type {boolean}
   */

  var isLoading = computed(function () {
    return options.value.loading;
  });
  /**
   * Whether the `validateOn` prop or `config.validateOn` contains `'change'`.
   * 
   * @type {boolean}
   * @private
   */

  var shouldValidateOnChange = computed(function () {
    return options.value.validateOn.split('|').indexOf('change') !== -1;
  });
  /**
   * Whether the `validateOn` prop or `config.validateOn` contains `'step'`.
   * 
   * @type {boolean}
   * @private
   */

  var shouldValidateOnStep = computed(function () {
    return options.value.validateOn.split('|').indexOf('step') !== -1;
  });
  /**
   * Whether the form has any steps.
   * 
   * @type {boolean}
   * @private
   */

  var hasSteps = computed(function () {
    return !_.isEmpty(options.value.steps);
  });
  /**
   * Whether the form should show [`FormSteps`](form-steps) component. Returns `true` if [`steps`](#option-steps) has value.
   * 
   * @type {boolean}
   */

  var showSteps = computed(function () {
    return hasSteps.value;
  });
  /**
   * Whether the form should display steps controls below form with [`FormStepsControls`](form-steps-control) component when it has [`steps`](#option-steps). Can be disabled with [`stepsControls`](#option-steps-controls).
   * 
   * @type {boolean}
   */

  var showStepsControls = computed(function () {
    return hasSteps.value && options.value.stepsControls;
  });
  /**
   * Whether the form has any tabs.
   * 
   * @ignore
   * @type {boolean}
   */

  var hasTabs = computed(function () {
    return !_.isEmpty(options.value.tabs);
  });
  /**
   * Whether the form should show [`FormTabs`](form-tabs) component. Returns `true` if [`tabs`](#option-tabs) has value.
   * 
   * @type {boolean}
   */

  var showTabs = computed(function () {
    return hasTabs.value;
  });
  /**
   * The selected theme, extended by local template and class overrides, using [`replaceTemplates`](#option-replace-templates), [`extendClasses`](#option-extend-classes) and [`replaceClasses`](#option-replace-classes).
   * 
   * @type {object}
   */

  var extendedTheme = computed(function () {
    return Object.assign({}, options.value.theme, {
      // Add registered component to theme (or overwrite)
      templates: Object.assign({}, options.value.theme.templates, baseConfig.value.templates, options.value.replaceTemplates || {}),
      // Ovewrite theme classes with form's classes definition
      classes: _.merge({}, options.value.theme.classes, baseConfig.value.classes, options.value.replaceClasses)
    });
  });
  /**
  * The selected theme's templates, extended by local overrides. The [`replaceTemplates`](#option-replace-templates) option can be used to override templates provided by the theme.
  * 
  * @type {object}
  */

  var templates = computed(function () {
    return extendedTheme.value.templates;
  });
  /**
  * The class name of the form's outermost DOM.
  * 
  * @type {string}
  * @private
  */

  var mainClass = computed(function () {
    return _.keys(defaultClasses.value)[0];
  });
  /**
  * The default classes for the form defined by theme.
  * 
  * @type {object}
  * @private
  */

  var defaultClasses = computed(function () {
    return extendedTheme.value.templates.Vueform.data().defaultClasses;
  });
  /**
   * The selected theme's classes merged with [`extendClasses`](#option-extend-classes) and [`replaceClasses`](#option-replace-classes) options.
   * 
   * @type {object}
   */

  var classes = computed(function () {
    var classes = Object.assign({}, defaultClasses.value, extendedTheme.value.classes.Vueform);
    classes = mergeComponentClasses(classes, options.value.extendClasses.Vueform || null);

    if (options.value.addClass !== null) {
      classes = mergeComponentClasses(classes, _defineProperty({}, mainClass.value, options.value.addClass));
    }

    return classes;
  }); // =============== METHODS ==============

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

    _.each(elements$.value, function (element$) {
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
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
      var format,
          formatted,
          _args2 = arguments;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              format = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : false;

              if (steps$.value !== null) {
                steps$.value.enableAllSteps();
              }

              formatted = format && options.value.formatLoad !== null ? options.value.formatLoad(data) : data;
              _context2.next = 5;
              return asyncForEach(elements$.value, /*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e$) {
                  var loadValue;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          if (!e$.isStatic) {
                            _context.next = 2;
                            break;
                          }

                          return _context.abrupt("return");

                        case 2:
                          loadValue = e$.flat ? formatted : formatted[e$.name];

                          if (!(loadValue === undefined)) {
                            _context.next = 6;
                            break;
                          }

                          e$.clear();
                          return _context.abrupt("return");

                        case 6:
                          _context.next = 8;
                          return e$.load(loadValue, format);

                        case 8:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x2) {
                  return _ref2.apply(this, arguments);
                };
              }());

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function load(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Resets the form's data to default state. Also resets all the validation state for the elements.
   * 
   * @returns {void}
   */


  var reset = function reset() {
    _.each(elements$.value, function (e$) {
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


  var clear = function clear() {
    _.each(elements$.value, function (e$) {
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


  var clean = function clean() {
    _.each(elements$.value, function (e$) {
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
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var validatableElements;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!(!invalid.value && validated.value && shouldValidateOnChange.value)) {
                _context4.next = 2;
                break;
              }

              return _context4.abrupt("return");

            case 2:
              validatableElements = Object.values(elements$.value).filter(function (e$) {
                return e$.available && !e$.isStatic && (!e$.validated || !shouldValidateOnChange.value);
              });
              _context4.next = 5;
              return asyncForEach(validatableElements, /*#__PURE__*/function () {
                var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e$) {
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.next = 2;
                          return e$.validate();

                        case 2:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                }));

                return function (_x3) {
                  return _ref4.apply(this, arguments);
                };
              }());

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function validate() {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Sets all element validators to default state.
   * 
   * @returns {void}
   */


  var resetValidators = function resetValidators() {
    _.each(elements$.value, function (e$) {
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
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!isDisabled.value) {
                _context5.next = 2;
                break;
              }

              return _context5.abrupt("return");

            case 2:
              _context5.next = 4;
              return validate();

            case 4:
              if (!invalid.value) {
                _context5.next = 6;
                break;
              }

              return _context5.abrupt("return");

            case 6:
              preparing.value = true;
              _context5.prev = 7;
              _context5.next = 10;
              return prepareElements();

            case 10:
              if (!(typeof options.value.prepare === 'function')) {
                _context5.next = 13;
                break;
              }

              _context5.next = 13;
              return options.value.prepare(form$.value);

            case 13:
              if (!(typeof $this.$vueform.config.beforeSend === 'function')) {
                _context5.next = 16;
                break;
              }

              _context5.next = 16;
              return $this.$vueform.config.beforeSend(form$.value);

            case 16:
              _context5.next = 23;
              break;

            case 18:
              _context5.prev = 18;
              _context5.t0 = _context5["catch"](7);
              fire('error', _context5.t0, {
                type: 'prepare'
              });
              console.error(_context5.t0);
              return _context5.abrupt("return");

            case 23:
              _context5.prev = 23;
              preparing.value = false;
              return _context5.finish(23);

            case 26:
              fire('submit', form$.value);

              if (options.value.endpoint) {
                _context5.next = 29;
                break;
              }

              return _context5.abrupt("return");

            case 29:
              send();

            case 30:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[7, 18, 23, 26]]);
    }));

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
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
      var response;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              submitting.value = true;
              response = {};
              _context6.prev = 2;
              resetValidators();
              _context6.next = 6;
              return services.value.axios.request({
                url: options.value.endpoint.toLowerCase(),
                method: options.value.method.toLowerCase(),
                data: convertFormData(options.value.formData(form$.value))
              });

            case 6:
              response = _context6.sent;

              if (response.data.payload && response.data.payload.updates) {
                update(response.data.payload.updates);
              }

              fire('success', response);
              _context6.next = 15;
              break;

            case 11:
              _context6.prev = 11;
              _context6.t0 = _context6["catch"](2);
              fire('error', _context6.t0, {
                type: 'submit'
              });
              console.error(_context6.t0);

            case 15:
              _context6.prev = 15;
              fire('response', response);
              submitting.value = false;
              return _context6.finish(15);

            case 19:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[2, 11, 15, 19]]);
    }));

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
    var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _context8.next = 3;
              return asyncForEach(elements$.value, /*#__PURE__*/function () {
                var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(e$) {
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          if (!e$.prepare) {
                            _context7.next = 3;
                            break;
                          }

                          _context7.next = 3;
                          return e$.prepare();

                        case 3:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                }));

                return function (_x4) {
                  return _ref8.apply(this, arguments);
                };
              }());

            case 3:
              _context8.next = 8;
              break;

            case 5:
              _context8.prev = 5;
              _context8.t0 = _context8["catch"](0);
              throw new Error(_context8.t0);

            case 8:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, null, [[0, 5]]);
    }));

    return function prepareElements() {
      return _ref7.apply(this, arguments);
    };
  }();
  /**
   * Disabled form validation globally.
   * 
   * @returns {void}
   */


  var disableValidation = function disableValidation() {
    validation.value = false;
  };
  /**
   * Enables form validation globally.
   * 
   * @returns {void}
   */


  var enableValidation = function enableValidation() {
    validation.value = true;
  };
  /**
  * Sets current language when using [`multilingual`](#option-multilingual).
  * 
  * @param {string} code* the language code to be selected
  * @returns {void}
  */


  var setLanguage = function setLanguage(code) {
    selectedLanguage.value = code;
    fire('language', code);
  };
  /**
   * Handles `submit` event.
   *
   * @returns {void}
   */


  var handleSubmit = function handleSubmit() {
    submit();
  };
  /**
  * Converts form data to [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData).
  * 
  * @param {object} data* the data to be converted
  * @returns {FormData}
  */


  var convertFormData = function convertFormData(data) {
    return getFormData(data);
  };
  /**
   * Returns an element by its path.
   * 
   * @param {string} path path of the element
   * @returns {component|null}
   */


  var el$ = function el$(path, elements) {
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


  var siblings$ = function siblings$(path) {
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


  var initMessageBag = function initMessageBag() {
    messageBag.value = new services.value.messageBag(elementErrors);
  }; // ============== PROVIDES ==============


  provide('form$', form$);
  provide('theme', extendedTheme); // ================ HOOKS ===============

  initMessageBag();
  setLanguage(options.value.language);
  onBeforeMount(function () {
    userConfig.value = $this.vueform || {}; // Manually subscribe to events defined in options object

    _.each(evts, function (evt) {
      var callback = options.value['on' + _.upperFirst(evt)];

      if (callback) {
        on(evt, callback);
      }
    });

    fire('beforeMount', $this);
  });
  onMounted(function () {
    // Watching model to track old/new values
    watch(data, function (n, o) {
      if (dataEquals(n, o)) {
        return;
      }

      fire('change', n, o);

      if (externalValue && externalValue.value !== undefined) {
        context.emit('input', n);
        context.emit('update:modelValue', n);
      }
    }, {
      deep: true,
      immediate: false
    }); // If has v-model & not equals to form data

    if (externalValue && externalValue.value !== undefined && JSON.stringify(externalValue.value) !== JSON.stringify(data.value)) {
      context.emit('input', data.value);
      context.emit('update:modelValue', data.value);
    }

    fire('mounted', $this);
  });
  onBeforeUpdate(function () {
    return fire('beforeUpdate', $this);
  });
  onUpdated(function () {
    return fire('updated', $this);
  });
  onBeforeUnmount(function () {
    return fire('beforeUnmount', $this);
  });
  onUnmounted(function () {
    return fire('unmounted', $this);
  });
  return {
    tabs$: tabs$,
    steps$: steps$,
    elements$: elements$,
    options: options,
    validation: validation,
    messageBag: messageBag,
    selectedLanguage: selectedLanguage,
    submitting: submitting,
    preparing: preparing,
    events: events,
    listeners: listeners,
    internalData: internalData,
    data: data,
    requestData: requestData,
    dirty: dirty,
    invalid: invalid,
    debouncing: debouncing,
    pending: pending,
    validated: validated,
    busy: busy,
    formErrors: formErrors,
    formMessages: formMessages,
    isDisabled: isDisabled,
    isLoading: isLoading,
    shouldValidateOnChange: shouldValidateOnChange,
    shouldValidateOnStep: shouldValidateOnStep,
    hasSteps: hasSteps,
    hasTabs: hasTabs,
    hasErrors: hasErrors,
    hasMessages: hasMessages,
    isMultilingual: isMultilingual,
    showErrors: showErrors,
    showMessages: showMessages,
    showLanguages: showLanguages,
    showSteps: showSteps,
    showTabs: showTabs,
    showStepsControls: showStepsControls,
    mainClass: mainClass,
    defaultClasses: defaultClasses,
    classes: classes,
    templates: templates,
    extendedTheme: extendedTheme,
    form$: form$,
    model: model,
    intermediaryValue: intermediaryValue,
    userConfig: userConfig,
    isSync: isSync,
    updateModel: updateModel,
    update: update,
    load: load,
    reset: reset,
    clear: clear,
    clean: clean,
    validate: validate,
    resetValidators: resetValidators,
    convertFormData: convertFormData,
    submit: submit,
    send: send,
    disableValidation: disableValidation,
    enableValidation: enableValidation,
    setLanguage: setLanguage,
    handleSubmit: handleSubmit,
    el$: el$,
    siblings$: siblings$,
    initMessageBag: initMessageBag,
    fire: fire,
    on: on,
    off: off
  };
};

var _this = undefined;
var Vueform = {
  name: 'Vueform',
  emits: ['input', 'update:modelValue', 'change', 'reset', 'clear', 'submit', 'success', 'error', 'response', 'language', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  slots: ['default', 'empty'],
  setup: function setup(props, context) {
    context.emits = ['input', 'update:modelValue', 'change', 'reset', 'clear', 'submit', 'success', 'error', 'response', 'language', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'];
    context.name = ref('Vueform');

    var _useVueform = base(props, context),
        tabs$ = _useVueform.tabs$,
        steps$ = _useVueform.steps$,
        elements$ = _useVueform.elements$,
        options = _useVueform.options,
        validation = _useVueform.validation,
        messageBag = _useVueform.messageBag,
        selectedLanguage = _useVueform.selectedLanguage,
        submitting = _useVueform.submitting,
        preparing = _useVueform.preparing,
        events = _useVueform.events,
        listeners = _useVueform.listeners,
        internalData = _useVueform.internalData,
        data = _useVueform.data,
        requestData = _useVueform.requestData,
        dirty = _useVueform.dirty,
        invalid = _useVueform.invalid,
        debouncing = _useVueform.debouncing,
        pending = _useVueform.pending,
        validated = _useVueform.validated,
        busy = _useVueform.busy,
        formErrors = _useVueform.formErrors,
        formMessages = _useVueform.formMessages,
        isDisabled = _useVueform.isDisabled,
        isLoading = _useVueform.isLoading,
        shouldValidateOnChange = _useVueform.shouldValidateOnChange,
        shouldValidateOnStep = _useVueform.shouldValidateOnStep,
        hasSteps = _useVueform.hasSteps,
        hasTabs = _useVueform.hasTabs,
        hasErrors = _useVueform.hasErrors,
        hasMessages = _useVueform.hasMessages,
        isMultilingual = _useVueform.isMultilingual,
        showErrors = _useVueform.showErrors,
        showMessages = _useVueform.showMessages,
        showLanguages = _useVueform.showLanguages,
        showSteps = _useVueform.showSteps,
        showTabs = _useVueform.showTabs,
        showStepsControls = _useVueform.showStepsControls,
        mainClass = _useVueform.mainClass,
        defaultClasses = _useVueform.defaultClasses,
        classes = _useVueform.classes,
        templates = _useVueform.templates,
        extendedTheme = _useVueform.extendedTheme,
        form$ = _useVueform.form$,
        model = _useVueform.model,
        intermediaryValue = _useVueform.intermediaryValue,
        userConfig = _useVueform.userConfig,
        isSync = _useVueform.isSync,
        updateModel = _useVueform.updateModel,
        update = _useVueform.update,
        load = _useVueform.load,
        reset = _useVueform.reset,
        clear = _useVueform.clear,
        clean = _useVueform.clean,
        validate = _useVueform.validate,
        resetValidators = _useVueform.resetValidators,
        convertFormData = _useVueform.convertFormData,
        submit = _useVueform.submit,
        send = _useVueform.send,
        disableValidation = _useVueform.disableValidation,
        enableValidation = _useVueform.enableValidation,
        setLanguage = _useVueform.setLanguage,
        handleSubmit = _useVueform.handleSubmit,
        el$ = _useVueform.el$,
        siblings$ = _useVueform.siblings$,
        initMessageBag = _useVueform.initMessageBag,
        fire = _useVueform.fire,
        on = _useVueform.on,
        off = _useVueform.off;

    return {
      tabs$: tabs$,
      steps$: steps$,
      elements$: elements$,
      options: options,
      validation: validation,
      messageBag: messageBag,
      selectedLanguage: selectedLanguage,
      submitting: submitting,
      preparing: preparing,
      events: events,
      listeners: listeners,
      internalData: internalData,
      data: data,
      requestData: requestData,
      dirty: dirty,
      invalid: invalid,
      debouncing: debouncing,
      pending: pending,
      validated: validated,
      busy: busy,
      formErrors: formErrors,
      formMessages: formMessages,
      isDisabled: isDisabled,
      isLoading: isLoading,
      shouldValidateOnChange: shouldValidateOnChange,
      shouldValidateOnStep: shouldValidateOnStep,
      hasSteps: hasSteps,
      hasTabs: hasTabs,
      hasErrors: hasErrors,
      hasMessages: hasMessages,
      isMultilingual: isMultilingual,
      showErrors: showErrors,
      showMessages: showMessages,
      showLanguages: showLanguages,
      showSteps: showSteps,
      showTabs: showTabs,
      showStepsControls: showStepsControls,
      mainClass: mainClass,
      defaultClasses: defaultClasses,
      classes: classes,
      templates: templates,
      extendedTheme: extendedTheme,
      form$: form$,
      model: model,
      intermediaryValue: intermediaryValue,
      userConfig: userConfig,
      isSync: isSync,
      updateModel: updateModel,
      update: update,
      load: load,
      reset: reset,
      clear: clear,
      clean: clean,
      validate: validate,
      resetValidators: resetValidators,
      convertFormData: convertFormData,
      submit: submit,
      send: send,
      disableValidation: disableValidation,
      enableValidation: enableValidation,
      setLanguage: setLanguage,
      handleSubmit: handleSubmit,
      el$: el$,
      siblings$: siblings$,
      initMessageBag: initMessageBag,
      fire: fire,
      on: on,
      off: off
    };
  },
  props: {
    schema: {
      type: Object,
      required: false,
      "default": null
    },
    tabs: {
      type: Object,
      required: false,
      "default": null
    },
    steps: {
      type: Object,
      required: false,
      "default": null
    },
    stepsControls: {
      type: Boolean,
      required: false,
      "default": null,
      '@default': true
    },
    validateOn: {
      type: String,
      required: false,
      "default": null
    },
    displayErrors: {
      type: Boolean,
      required: false,
      "default": null
    },
    displayMessages: {
      type: Boolean,
      required: false,
      "default": null
    },
    messages: {
      type: Object,
      required: false,
      "default": null
    },
    endpoint: {
      type: String,
      required: false,
      "default": null
    },
    method: {
      type: String,
      required: false,
      "default": null
    },
    prepare: {
      type: Function,
      required: false,
      "default": null
    },
    formKey: {
      type: [String, Number],
      required: false,
      "default": null
    },
    formData: {
      type: Function,
      required: false,
      "default": null
    },
    value: {
      type: Object,
      required: false,
      "default": undefined
    },
    modelValue: {
      type: Object,
      required: false,
      "default": undefined
    },
    sync: {
      type: Boolean,
      required: false,
      "default": false
    },
    "default": {
      type: Object,
      required: false,
      "default": null
    },
    formatData: {
      type: Function,
      required: false,
      "default": null
    },
    formatLoad: {
      type: Function,
      required: false,
      "default": null
    },
    loading: {
      type: Boolean,
      required: false,
      "default": null
    },
    disabled: {
      type: Boolean,
      required: false,
      "default": null
    },
    columns: {
      type: Object,
      required: false,
      "default": null
    },
    forceLabels: {
      type: Boolean,
      required: false,
      "default": null
    },
    floatPlaceholders: {
      type: Boolean,
      required: false,
      "default": null
    },
    addClass: {
      type: [String, Array, Object],
      required: false,
      "default": null
    },
    extendClasses: {
      type: Object,
      required: false,
      "default": null
    },
    replaceClasses: {
      type: Object,
      required: false,
      "default": null
    },
    replaceTemplates: {
      type: Object,
      required: false,
      "default": null
    },
    multilingual: {
      type: Boolean,
      required: false,
      "default": null
    },
    languages: {
      type: Object,
      required: false,
      "default": null
    },
    language: {
      type: String,
      required: false,
      "default": null
    },
    onChange: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    onReset: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    onClear: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    onSubmit: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    onSuccess: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    onError: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    onLanguage: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    onBeforeMount: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    onMounted: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    onBeforeUpdate: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    onUpdated: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    onBeforeUnmount: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    onUnmounted: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    }
  },
  render: function render() {
    return this.templates.Vueform.render.apply(this, arguments);
  },
  staticRenderFns: function staticRenderFns() {
    return _this.templates.Vueform.staticRenderFns;
  }
};

var VueformBlank = Object.assign(_objectSpread2(_objectSpread2({}, Vueform), {}, {
  setup: null
}));

export { VueformBlank as default };
