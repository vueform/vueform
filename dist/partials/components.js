import { ref, toRefs, computed, watch, getCurrentInstance, provide, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, inject, nextTick, markRaw, reactive } from 'composition-api';
import _$1 from 'lodash';
import moment from 'moment';

function ownKeys$1(object, enumerableOnly) {
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

function _objectSpread2$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$1(Object(source), true).forEach(function (key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _typeof$1(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof$1 = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof$1 = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof$1(obj);
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
  var classes = _$1.cloneDeep(base);

  _$1.each(add, function (classes_, key) {
    classes[key] = mergeClass(base[key] || null, classes_);
  });

  return classes;
};

var mergeClass = function mergeClass(base, add) {
  if (add === null || _$1.isEmpty(add)) {
    return base;
  }

  if (base === null || _$1.isEmpty(base)) {
    return add;
  }

  var classes;

  if (typeof base === 'string') {
    base = base.split(' ');
  }

  if (_$1.isPlainObject(base)) {
    // { class: true } + { class2: true } => { class: true, class2: true }
    if (_$1.isPlainObject(add)) {
      classes = Object.assign({}, base, add);
    } // { class: true } + ['class2'] => [{ class: true }, 'class2']
    else if (_$1.isArray(add)) {
      classes = _$1.concat([base], add);
    } else {
      // { class: true } + 'class2' => [ class: true, class2: true]
      classes = Object.assign({}, base, _defineProperty$1({}, add, true));
    }
  } else {
    // ['class'] + { class2: true } => ['class', { class2: true }]
    if (_$1.isPlainObject(add)) {
      classes = _$1.concat(base, [add]);
    } // ['class'] + ['class2'] => ['class', 'class2']
    else if (_$1.isArray(add)) {
      classes = base;

      _$1.each(add, function (a) {
        if (classes.indexOf(a) === -1) {
          classes = _$1.concat(classes, [a]);
        }
      }); // ['class'] + 'class2' => ['class', 'class2']

    } else {
      classes = _$1.concat(base, [add]);
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

  if (_$1.isArray(data)) {
    _$1.each(data, function (value, key) {
      getFormData(value, formData, namespace + '[' + key + ']');
    });
  } else if (_$1.isPlainObject(data)) {
    _$1.each(data, function (value, key) {
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
            if (!(index < (_$1.isPlainObject(array) ? _$1.values(array) : array).length)) {
              _context.next = 8;
              break;
            }

            key = _$1.isPlainObject(array) ? _$1.keys(array)[index] : index;
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
  } else if (_typeof$1(data) === 'object' && data !== null) {
    return _$1.mapValues(data, dataToComperable);
  }

  return data;
};

function dataEquals(a, b) {
  return _$1.isEqual(dataToComperable(a), dataToComperable(b));
}

var base$$ = function base(props, context, dependencies) {
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

    _$1.each(listeners.value[evt], function (callback) {
      callback.apply(void 0, _toConsumableArray(args));
    });

    if (!listeners.value[evt] || !listeners.value[evt].length) {
      context.emit.apply(context, _toConsumableArray([evt].concat(args)));
    }
  }; // =============== HOOKS ================
  // If component has descriptor subscribe upfront
  // for events using `onEvent` format 


  _$1.each(events.value, function (evt) {
    var callback = props['on' + _$1.upperFirst(_$1.camelCase(evt))];

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

  var intermediaryValue = ref(externalValue && externalValue.value ? _$1.cloneDeep(externalValue.value) : null); // ============== COMPUTED ===============

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
    return _$1.cloneDeep(externalValue.value || internalData.value);
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
        var externalValueObject = parent ? _$1.get(externalValue.value, parent) : externalValue.value; // Thinking about cases when it tries to to set an element 
        // which no longer exists in the same tick (eg. when removing
        // a list element with order and tries to refresh its order field)

        if (externalValueObject !== undefined) {
          // We are setting externalValue (v-model) to instantly reflect changes in field value
          $this.$set(externalValueObject, element, val);
        } // Setting directly because externalValue might contain changes
        // that intermediary does not have yet, so it would overwrite
        // external model with old value


        intermediaryValue.value = _$1.cloneDeep(externalValue.value);
      } // Group element
      else {
        _$1.each(val, function (v, key) {
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
      var _model = _$1.cloneDeep(externalValue.value || internalData.value); // Non-flat elements


      if (dataPath) {
        _$1.set(_model, dataPath, val); // Flat elements (eg. Group)

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

var base$_ = function base(props, context) {

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

  var _useEvents = base$$(props, context, {
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

    _$1.each(override, function (val, key) {
      options[key] = userConfig.value[key] !== undefined ? userConfig.value[key] : (val && val.value ? val.value : undefined) || defaults[key];
    });

    _$1.each(ifNotUndefined, function (val, key) {
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

      _$1.each(blocks, function (block) {
        _$1.each(block.elements, function (name) {
          if (formSchema.value[name]) {
            orderedSchema[name] = formSchema.value[name];
          }
        });
      });

      _$1.each(Object.keys(formSchema.value), function (name) {
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
    return _$1.merge({}, schema && schema.value ? schema.value : {}, userConfig.value.schema || {});
  });
  /**
   * The form's tabs merged from `tabs` prop and the component's `data.vueform.tabs` object.
   * 
   * @type {object}
   * @private
   */

  var formTabs = computed(function () {
    return _$1.merge({}, tabs && tabs.value ? tabs.value : {}, userConfig.value.tabs || {});
  });
  /**
   * The form's steps merged from `steps` prop and the component's `data.vueform.steps` object.
   * 
   * @type {object}
   * @private
   */

  var formSteps = computed(function () {
    return _$1.merge({}, steps && steps.value ? steps.value : {}, userConfig.value.steps || {});
  });
  /**
   * The form data including the data of all elements even the ones with `available: false` and `submit: false`.
   * 
   * @type {object}
   */

  var data = computed(function () {
    var data = {};

    _$1.each(elements$.value, function (e$) {
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

    _$1.each(elements$.value, function (e$) {
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
    return _$1.some(elements$.value, function (element$) {
      return element$.isStatic === false && element$.available === true && element$.dirty === true;
    });
  });
  /**
   * Whether the form has any invalid elements.
   * 
   * @type {boolean}
   */

  var invalid = computed(function () {
    return _$1.some(elements$.value, function (element$) {
      return element$.isStatic === false && element$.available === true && element$.invalid === true;
    });
  });
  /**
   * Whether the form has any elements with active debounce process.
   * 
   * @type {boolean}
   */

  var debouncing = computed(function () {
    return _$1.some(elements$.value, function (element$) {
      return element$.isStatic === false && element$.available === true && element$.debouncing === true;
    });
  });
  /**
   * Whether the form has any elements with pending async validation.
   * 
   * @type {boolean}
   */

  var pending = computed(function () {
    return _$1.some(elements$.value, function (element$) {
      return element$.isStatic === false && element$.available === true && element$.pending === true;
    });
  });
  /**
   * Whether each element in the form has been validated at least once.
   * 
   * @type {boolean}
   */

  var validated = computed(function () {
    return !_$1.some(elements$.value, function (element$) {
      return element$.isStatic === false && element$.available === true && element$.validated === false;
    });
  });
  /**
   * Whether the form has any elements with `busy: true` or the [`isLoading`](#property-is-loading), [`preparing`](#property-preparing) or [`submitting`](#property-submitting) property is `true`.
   * 
   * @type {boolean}
   */

  var busy = computed(function () {
    return _$1.some(elements$.value, function (element$) {
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

    _$1.each(_$1.filter(elements$.value, {
      available: true,
      isStatic: false
    }), function (element$) {
      _$1.each(element$.errors, function (error) {
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
    return !_$1.isEmpty(options.value.steps);
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
    return !_$1.isEmpty(options.value.tabs);
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
      classes: _$1.merge({}, options.value.theme.classes, baseConfig.value.classes, options.value.replaceClasses)
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
    return _$1.keys(defaultClasses.value)[0];
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
      classes = mergeComponentClasses(classes, _defineProperty$1({}, mainClass.value, options.value.addClass));
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

    _$1.each(elements$.value, function (element$) {
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
    _$1.each(elements$.value, function (e$) {
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
    _$1.each(elements$.value, function (e$) {
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
    _$1.each(elements$.value, function (e$) {
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
    _$1.each(elements$.value, function (e$) {
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

    if (_$1.isEmpty(elements) || !path) {
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

    _$1.each(evts, function (evt) {
      var callback = options.value['on' + _$1.upperFirst(evt)];

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

    var _useVueform = base$_(props, context),
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

var base$Z = function base(props, context, dependencies) {
  // =============== INJECT ===============

  /**
  * The root form's component.
  * 
  * @type {component}
  */
  var form$ = inject('form$');
  return {
    form$: form$
  };
};

var base$Y = function base(props, context, dependencies) {
  // =============== INJECT ===============

  /**
  * The global theme object, which contains all the default templates and classes.
  * 
  * @type {object}
  */
  var theme = inject('theme');
  return {
    theme: theme
  };
};

var base$X = function base(props, context, dependencies) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var componentName = context.name; // =============== INJECT ===============

  var _useForm$ = base$Z(),
      form$ = _useForm$.form$;

  var _useTheme = base$Y(),
      theme = _useTheme.theme;

  var template = theme.value.templates[componentName.value]; // ================ DATA =================

  /**
  * The default classes for the component defined by theme.
  * 
  * @type {object}
  * @private
  */

  var defaultClasses = ref(template.data ? template.data().defaultClasses : {}); // ============== COMPUTED ===============

  /**
   * An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides.
   * 
   * @type {object}
   * @private
   */

  var mergedClasses = computed(function () {
    var classes = _$1.merge({}, // Default component classes
    defaultClasses.value, // Theme / form level overwrites
    theme.value.classes[componentName.value] || {}); // Add classes defined by specific components


    if (options.addClasses) {
      options.addClasses.forEach(function (add) {
        if (add[2].value) {
          classes = mergeComponentClasses(classes, _defineProperty$1({}, add[0], _typeof$1(add[1]) == 'object' ? add[1].value : classes[add[1]]));
        }
      });
    } // Add form's extendClasses


    classes = mergeComponentClasses(classes, form$.value.options.extendClasses[componentName.value] || null);
    return classes;
  });
  /**
   The selected theme's classes merged with the form's [`extendClasses`](vueform#option-extend-classes) and [`replaceClasses`](vueform#option-replace-classes) options.
   * 
   * @type {object}
   */

  var classes = computed({
    get: function get() {
      return mergedClasses.value;
    },
    set: function set(val) {
      schema.value.classes = val;
    }
  });
  /**
   * Returns the component templates used by the form.
   * 
   * @type {object}
   */

  var templates = computed(function () {
    return theme.value.templates;
  });
  /**
  * The class name of the components's outermost DOM.
  * 
  * @type {string}
  * @private
  */

  var mainClass = computed(function () {
    return _$1.keys(defaultClasses.value)[0];
  });
  return {
    form$: form$,
    theme: theme,
    classes: classes,
    templates: templates,
    mainClass: mainClass,
    defaultClasses: defaultClasses
  };
};

var FormErrors = {
  name: 'FormErrors',
  setup: function setup(props, context) {
    // ============ DEPENDENCIES ============
    var _useFormComponent = base$X(props, context),
        form$ = _useFormComponent.form$,
        theme = _useFormComponent.theme,
        classes = _useFormComponent.classes,
        mainClass = _useFormComponent.mainClass,
        templates = _useFormComponent.templates,
        defaultClasses = _useFormComponent.defaultClasses; // ============== COMPUTED ==============

    /**
     * Form errors including element errors and the ones added to `messageBag` manually.
     * 
     * @type {array}
     */


    var errors = computed(function () {
      return form$.value.formErrors;
    });
    return {
      form$: form$,
      theme: theme,
      classes: classes,
      mainClass: mainClass,
      defaultClasses: defaultClasses,
      templates: templates,
      errors: errors
    };
  }
};

var FormMessages = {
  name: 'FormMessages',
  setup: function setup(props, context) {
    // ============ DEPENDENCIES ============
    var _useFormComponent = base$X(props, context),
        form$ = _useFormComponent.form$,
        theme = _useFormComponent.theme,
        classes = _useFormComponent.classes,
        mainClass = _useFormComponent.mainClass,
        templates = _useFormComponent.templates,
        defaultClasses = _useFormComponent.defaultClasses; // ============== COMPUTED ==============

    /**
     * Form messages including element messages and the ones added to `messageBag` manually.
     * 
     * @type {array}
     */


    var messages = computed(function () {
      return form$.value.formMessages;
    });
    return {
      form$: form$,
      theme: theme,
      classes: classes,
      mainClass: mainClass,
      defaultClasses: defaultClasses,
      templates: templates,
      messages: messages
    };
  }
};

var FormLanguages = {
  name: 'FormLanguages',
  setup: function setup(props, context) {
    // ============ DEPENDENCIES ============
    var _useFormComponent = base$X(props, context),
        form$ = _useFormComponent.form$,
        theme = _useFormComponent.theme,
        classes = _useFormComponent.classes,
        mainClass = _useFormComponent.mainClass,
        templates = _useFormComponent.templates,
        defaultClasses = _useFormComponent.defaultClasses; // ============== COMPUTED ==============

    /**
     * The language code of the currently selected language (2 letters).
     * 
     * @type {string}
     */


    var language = computed(function () {
      return form$.value.selectedLanguage;
    });
    /**
     * The available languages.
     * 
     * @type {object}
     */

    var languages = computed(function () {
      return form$.value.options.languages;
    }); // =============== METHODS ==============

    /**
     * Selects a language.
     * 
     * @param {string} code* the language code to be selected
     * @returns {void}
     */

    var select = function select(code) {
      form$.value.setLanguage(code);
    };
    /**
     * Handles `select` event.
     *
     * @param {string} code* the language code to be selected
     * @returns {void}
     * @private
     */


    var handleSelect = function handleSelect(code) {
      select(code);
    };

    return {
      form$: form$,
      theme: theme,
      classes: classes,
      mainClass: mainClass,
      defaultClasses: defaultClasses,
      templates: templates,
      language: language,
      languages: languages,
      select: select,
      handleSelect: handleSelect
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
    }
  },
  setup: function setup(props, context) {
    var _toRefs = toRefs(props),
        code = _toRefs.code; // ============ DEPENDENCIES ============


    var _useFormComponent = base$X(props, context, {}, {
      addClasses: [['wrapper', 'wrapper_active', computed(function () {
        return selected.value;
      })], ['wrapper', 'wrapper_inactive', computed(function () {
        return !selected.value;
      })]]
    }),
        form$ = _useFormComponent.form$,
        theme = _useFormComponent.theme,
        classes = _useFormComponent.classes,
        mainClass = _useFormComponent.mainClass,
        templates = _useFormComponent.templates,
        defaultClasses = _useFormComponent.defaultClasses; // ============== COMPUTED ==============

    /**
     * The language code of the currently selected language (2 letters).
     * 
     * @type {string}
     */


    var selectedLanguage = computed(function () {
      return form$.value.selectedLanguage;
    });
    /**
     * Whether the current language is the selected one.
     * 
     * @type {boolean}
     */

    var selected = computed(function () {
      return selectedLanguage.value == code.value;
    }); // =============== METHODS ==============

    /**
     * Select the language.
     * 
     * @return {void}
     */

    var select = function select() {
      context.emit('select', code.value);
    };

    return {
      form$: form$,
      theme: theme,
      selectedLanguage: selectedLanguage,
      selected: selected,
      classes: classes,
      mainClass: mainClass,
      defaultClasses: defaultClasses,
      templates: templates,
      select: select
    };
  }
};

function normalize (value) {
  if (value === undefined || typeof value != 'string') {
    return value;
  } // is number


  if (value.match(/^-*\d+$/)) {
    return parseInt(value, 10); // is float
  } else if (value.match(/^\d+\.\d+$/)) {
    return parseFloat(value); // everything else
  } else {
    return value;
  }
}

var FormTabs = {
  name: 'FormTabs',
  emits: ['select'],
  setup: function setup(props, context) {
    var $this = getCurrentInstance().proxy; // ============ DEPENDENCIES ============

    var _useFormComponent = base$X(props, context),
        form$ = _useFormComponent.form$,
        theme = _useFormComponent.theme,
        classes = _useFormComponent.classes,
        mainClass = _useFormComponent.mainClass,
        templates = _useFormComponent.templates,
        defaultClasses = _useFormComponent.defaultClasses;

    var _useEvents = base$$(props, context, {
      form$: form$
    }, {
      events: context.emits
    }),
        events = _useEvents.events,
        listeners = _useEvents.listeners,
        on = _useEvents.on,
        off = _useEvents.off,
        fire = _useEvents.fire; // ================ DATA ================

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

    var exists = ref(true); // ============== COMPUTED ==============

    /**
     * The form elements' components.
     * 
     * @type {object}
     */

    var elements$ = computed(function () {
      return form$.value.elements$;
    });
    /**
     * The object containing tabs defined in [`Vueform`](vueform#option-tabs). 
     * 
     * @type {object}
     */

    var tabs = computed(function () {
      return form$.value.options.tabs;
    });
    /**
     * The child [`FormTab`](form-tab) components with indexed keys.
     * 
     * @type {object}
     */

    var tabs$ = computed(function () {
      var tabList$ = {};

      _$1.each(tabs$Array.value, function (formTab$) {
        tabList$[formTab$.name] = formTab$;
      });

      return tabList$;
    });
    /**
     * All the visible [`FormTab`](form-tab) components.
     * 
     * @type {object}
     */

    var visible$ = computed(function () {
      var tabList$ = {};

      _$1.each(tabs$.value, function (tab$) {
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

    var current$ = computed(function () {
      var current = _$1.find(tabs$.value, {
        active: true
      });

      return current !== undefined ? current : {};
    });
    /**
     * The first visible [`FormTab`](form-tab) component.
     * 
     * @type {component}
     */

    var first$ = computed(function () {
      return _$1.find(visible$.value, function (tab) {
        return tab.visible;
      });
    });
    /**
     * The next visible [`FormTab`](form-tab) component.
     * 
     * @type {component}
     */

    var next$ = computed(function () {
      return _$1.find(visible$.value, function (tab) {
        return tab.index > current$.value.index && tab.visible;
      });
    });
    /**
     * The previous visible [`FormTab`](form-tab) component.
     * 
     * @type {component}
     */

    var previous$ = computed(function () {
      return _$1.findLast(visible$.value, function (tab) {
        return tab.index < current$.value.index && tab.visible;
      });
    }); // =============== METHODS ==============

    /**
     * Go to a tab.
     *
     * @param {object} index* index of tab to go to
     * @returns {void}
     */

    var goTo = function goTo(index) {
      var tab$ = visible$.value[index];
      tab$.select();
    };
    /**
     * Select a tab.
     *
     * @param {component} tab$ the [`FormTab`](form-tab) component to select
     * @returns {void}
     * @private
     */


    var select = function select(tab$) {
      var curr$ = current$.value;

      _$1.each(elements$.value, function (element$) {
        element$.deactivate();
      });

      _$1.each(tabs$.value, function (tab$) {
        tab$.deactivate();
      });

      fire('select', tab$, curr$);
    };
    /**
     * Returns a specific [`FormTab`](form-tab) by index.
     *
     * @param {object} index* index of the tab
     * @returns {component}
     */


    var tab$ = function tab$(tab) {
      return _$1.find(tabs$.value, {
        name: tab
      });
    };
    /**
     * Jump back to the first visible tab.
     *
     * @returns {void}
     */


    var reset = function reset() {
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


    var assignToParent = function assignToParent($parent, _assignToParent) {
      if ($parent.tabs$ !== undefined) {
        form$.value.$set($parent, 'tabs$', $this);
      } else {
        _assignToParent($parent.$parent, _assignToParent);
      }
    };
    /**
    * Removes the component from the parent.
    * 
    * @param {component} $parent parent component
    * @param {function} removeFromParent the removeFromParent function for recursion
    * @private
    */


    var removeFromParent = function removeFromParent($parent, _removeFromParent) {
      if ($parent.tabs$ !== undefined) {
        form$.value.$set($parent, 'tabs$', null);
      } else {
        _removeFromParent($parent.$parent, _removeFromParent);
      }
    }; // ============== WATCHERS ==============


    watch(elements$, function (newValue, oldValue) {
      var newElements$ = _$1.difference(_$1.keys(newValue), _$1.keys(oldValue));

      _$1.each(newElements$, function (newElement$) {
        elements$.value[newElement$].deactivate();
      });
    }, {
      deep: false,
      lazy: true
    });
    watch(tabs, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return nextTick();

            case 2:
              _context.next = 4;
              return nextTick();

            case 4:
              if (current$.value === undefined || current$.value.index === undefined) {
                first$.value.select();
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })), {
      deep: true,
      lazy: true
    }); // Resort tabs$Array when tabs
    // order changes or a tab is removed

    watch(tabs, function (newValue) {
      var newTabs$Array = [];

      _$1.each(newValue, function (t, name) {
        newTabs$Array.push(tabs$Array.value[tabs$Array.value.map(function (t$) {
          return normalize(t$.name);
        }).indexOf(normalize(name))]);
      });

      tabs$Array.value = newTabs$Array;
    }, {
      flush: 'post'
    }); // =============== HOOKS ================

    onBeforeMount(function () {
      assignToParent($this.$parent, assignToParent);
    });
    onBeforeUnmount(function () {
      removeFromParent($this.$parent, removeFromParent);
    });
    onMounted(function () {
      nextTick(function () {
        if (!_$1.find(tabs$.value, {
          active: true
        })) {
          first$.value.select();
        }
      });
    });
    return {
      form$: form$,
      theme: theme,
      tabs: tabs,
      elements$: elements$,
      tabs$Array: tabs$Array,
      events: events,
      listeners: listeners,
      exists: exists,
      classes: classes,
      mainClass: mainClass,
      defaultClasses: defaultClasses,
      templates: templates,
      tabs$: tabs$,
      visible$: visible$,
      current$: current$,
      first$: first$,
      next$: next$,
      previous$: previous$,
      goTo: goTo,
      select: select,
      tab$: tab$,
      reset: reset,
      on: on,
      off: off,
      fire: fire
    };
  }
};

var base$W = function base(props, context, dependencies) {
  var _toRefs = toRefs(props),
      parent = _toRefs.parent,
      conditionList = _toRefs.conditions; // ============ DEPENDENCIES ============


  var form$ = dependencies.form$;
  var path = dependencies.path || ref(null); // ================ DATA ================

  /**
   * The frozen conditions of the element.
   * 
   * @type {array}
   * @private
   */

  var conditions = ref(conditionList.value); // ============== COMPUTED ==============

  /**
   * Whether no [`conditions`](#option-conditions) are defined or they are all fulfilled.
   * 
   * @type {boolean}
   */

  var available = computed(function () {
    if (parent && parent.value && parent.value.available !== undefined && !parent.value.available) {
      return false;
    }

    if (!conditions.value || !conditions.value.length) {
      return true;
    }

    return !_$1.some(conditions.value, function (condition) {
      return !form$.value.$vueform.services.condition.check(condition, path.value, form$.value);
    });
  });
  return {
    available: available
  };
};

/**
 * From: https://github.com/fengyuanchen/is-vue-component/blob/master/src/index.js
 */

var _Object$prototype = Object.prototype,
    toString = _Object$prototype.toString;
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
  return _$1.isPlainObject(value) && (isNonEmptyString(value.template) || isFunction(value.render) || isNonEmptyString(value.el) || isElement(value.el) || isVueComponent(value["extends"]) || isNonEmptyArray(value.mixins) && value.mixins.some(function (val) {
    return isVueComponent(val);
  })) || typeof value === 'function' && value.prototype && value.prototype.constructor.name === 'VueComponent';
}

var base$V = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============
  var labelDefinition = dependencies.labelDefinition;
  var component$ = dependencies.component$ || ref(null); // ============== COMPUTED ==============

  /**
  * The label definition of the component.
  * 
  * @type {string|function|component}
  * @private
  */

  var baseLabel = computed(function () {
    return labelDefinition.value;
  });
  /**
  * Whether the label is provided as a function.
  * 
  * @type {boolean}
  * @private
  */

  var isLabelFunction = computed(function () {
    return typeof baseLabel.value === 'function' && (!baseLabel.value.prototype || !baseLabel.value.prototype.constructor || baseLabel.value.prototype.constructor && baseLabel.value.prototype.constructor.name !== 'VueComponent');
  });
  /**
  * Whether label is provided as a Vue component.
  * 
  * @type {boolean}
  * @private
  */

  var isLabelComponent = computed(function () {
    return isVueComponent(baseLabel.value);
  });
  /**
  * The label of the component. If the label is provided as a `function` this contains the resolved value.
  * 
  * @type {string|component}
  */

  var label = computed(function () {
    return isLabelFunction.value ? baseLabel.value(component$.value) : baseLabel.value || null;
  });
  return {
    label: label,
    isLabelComponent: isLabelComponent
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
      "default": null
    },
    elements: {
      type: [Array],
      required: false,
      "default": function _default() {
        return [];
      }
    },
    conditions: {
      type: [Array],
      required: false,
      "default": function _default() {
        return [];
      }
    },
    addClass: {
      type: [String, Array, Object],
      required: false,
      "default": null
    },
    onActivate: {
      type: [Function],
      required: false,
      "default": null,
      "private": true
    },
    onInactivate: {
      type: [Function],
      required: false,
      "default": null,
      "private": true
    }
  },
  setup: function setup(props, context) {
    var _toRefs = toRefs(props),
        name = _toRefs.name,
        label = _toRefs.label,
        elements = _toRefs.elements,
        conditions = _toRefs.conditions,
        addClass = _toRefs.addClass;

    var $this = getCurrentInstance().proxy; // ============ DEPENDENCIES ============

    var _useFormComponent = base$X(props, context, {}, {
      addClasses: [['container', computed(function () {
        return addClass.value || null;
      }), ref(true)], ['wrapper', 'wrapper_active', computed(function () {
        return active.value;
      })], ['wrapper', 'wrapper_inactive', computed(function () {
        return !active.value;
      })], ['wrapper', 'wrapper_valid', computed(function () {
        return !invalid.value;
      })], ['wrapper', 'wrapper_invalid', computed(function () {
        return invalid.value;
      })]]
    }),
        form$ = _useFormComponent.form$,
        theme = _useFormComponent.theme,
        classes = _useFormComponent.classes,
        templates = _useFormComponent.templates,
        mainClass = _useFormComponent.mainClass,
        defaultClasses = _useFormComponent.defaultClasses;

    var _useConditions = base$W(props, context, {
      form$: form$
    }),
        available = _useConditions.available;

    var _useLabel = base$V(props, context, {
      component$: form$,
      labelDefinition: label
    }),
        isLabelComponent = _useLabel.isLabelComponent,
        tabLabel_ = _useLabel.label;

    var _useEvents = base$$(props, context, {
      form$: form$
    }, {
      events: context.emits
    }),
        events = _useEvents.events,
        listeners = _useEvents.listeners,
        on = _useEvents.on,
        off = _useEvents.off,
        fire = _useEvents.fire; // ================ DATA ================

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

    var tabLabel = ref(tabLabel_.value && _typeof$1(tabLabel_.value) === 'object' ? markRaw(tabLabel_.value) : tabLabel_.value); // ============== COMPUTED ==============

    /**
     * The components of highest level form elements.
     * 
     * @type {object}
     */

    var elements$ = computed(function () {
      return form$.value.elements$;
    });
    /**
     * The parent [`FormTabs`](form-tabs) component.
     * 
     * @type {component}
     */

    var tabs$ = computed(function () {
      return form$.value.tabs$;
    });
    /**
     * Index of this tab among the other tabs which are not hidden by unmet conditions.
     * 
     * @type {number}
     */

    var index = computed(function () {
      return Object.keys(tabs$.value.tabs$).indexOf(name.value);
    });
    /**
     * The components of form elements within the tab.
     * 
     * @type {object}
     */

    var children$ = computed(function () {
      return _$1.filter(elements$.value, function (element$, key) {
        return elements.value.indexOf(key) !== -1;
      });
    });
    /**
     * Whether the tab should be visible.
     * 
     * @type {boolean}
     */

    var visible = computed(function () {
      return available.value;
    });
    /**
     * Whether the tab has any invalid elements.
     * 
     * @type {boolean}
     */

    var invalid = computed(function () {
      return _$1.some(children$.value, {
        available: true,
        invalid: true
      });
    });
    /**
     * The tab's component.
     * 
     * @type {component}
     */

    var tab$ = computed(function () {
      return form$.value.tabs$.tabs$[name.value];
    }); // =============== METHODS ==============

    /**
     * Deactivate all other tabs and set the current one as active.
     *
     * @returns {void}
     */

    var select = function select() {
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


    var activate = function activate() {
      if (active.value) {
        return;
      }

      active.value = true;

      _$1.each(children$.value, function (element$) {
        element$.activate();
      });

      fire('activate');
    };
    /**
     * Deactivate the tab.
     *
     * @returns {void}
     */


    var deactivate = function deactivate() {
      if (!active.value) {
        return;
      }

      active.value = false;

      _$1.each(children$.value, function (element$) {
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


    var assignToParent = function assignToParent($parent, _assignToParent) {
      if ($parent.tabs$Array) {
        $parent.tabs$Array.push($this);
      } else {
        _assignToParent($parent.$parent, _assignToParent);
      }
    };
    /**
    * Removes the component from the parent.
    * 
    * @param {component} $parent parent component
    * @param {function} removeFromParent the removeFromParent function for recursion
    * @private
    */


    var removeFromParent = function removeFromParent($parent, _removeFromParent) {
      if ($parent.tabs$Array) {
        $parent.tabs$Array.splice($parent.tabs$Array.map(function (t$) {
          return normalize(t$.name);
        }).indexOf(normalize(name.value)), 1);
      } else {
        _removeFromParent($parent.$parent, _removeFromParent);
      }
    }; // ============== WATCHERS ==============


    watch(children$, function () {
      if (!active.value) {
        return;
      }

      _$1.each(children$.value, function (element$) {
        element$.activate();
      });
    }, {
      deep: false,
      lazy: true
    });
    watch(tabLabel_, function () {
      tabLabel.value = tabLabel_.value && _typeof$1(tabLabel_.value) === 'object' ? markRaw(tabLabel_.value) : tabLabel_.value;
    }); // ================ HOOKS ===============

    onMounted(function () {
      // nextTick is required because elements$
      // only available after form is mounted,
      // which is later than the tab mount
      nextTick(function () {
        if (conditions.value.length == 0) {
          return;
        }

        _$1.each(children$.value, function (element$) {
          _$1.each(conditions.value, function (condition) {
            element$.conditions.push(condition);
          });
        });
      });
    });
    onBeforeMount(function () {
      assignToParent($this.$parent, assignToParent);
    });
    onBeforeUnmount(function () {
      removeFromParent($this.$parent, removeFromParent);
    });
    return {
      form$: form$,
      theme: theme,
      elements$: elements$,
      index: index,
      active: active,
      events: events,
      listeners: listeners,
      children$: children$,
      visible: visible,
      invalid: invalid,
      classes: classes,
      mainClass: mainClass,
      defaultClasses: defaultClasses,
      templates: templates,
      available: available,
      isLabelComponent: isLabelComponent,
      tabLabel: tabLabel,
      tab$: tab$,
      select: select,
      activate: activate,
      deactivate: deactivate,
      on: on,
      off: off,
      fire: fire
    };
  }
};

var FormSteps = {
  name: 'FormSteps',
  emits: ['select', 'next', 'previous', 'finish'],
  setup: function setup(props, context) {
    var $this = getCurrentInstance().proxy; // ============ DEPENDENCIES ============

    var _useFormComponent = base$X(props, context),
        form$ = _useFormComponent.form$,
        theme = _useFormComponent.theme,
        classes = _useFormComponent.classes,
        mainClass = _useFormComponent.mainClass,
        templates = _useFormComponent.templates,
        defaultClasses = _useFormComponent.defaultClasses;

    var _useEvents = base$$(props, context, {
      form$: form$
    }, {
      events: context.emits
    }),
        events = _useEvents.events,
        listeners = _useEvents.listeners,
        on = _useEvents.on,
        off = _useEvents.off,
        fire = _useEvents.fire; // ================ DATA ================

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

    var exists = ref(true); // ============== COMPUTED ==============

    /**
     * The object containing steps defined in [`Vueform`](vueform#option-steps). 
     * 
     * @type {object}
     */

    var steps = computed(function () {
      return form$.value.options.steps;
    });
    /**
     * The form elements' components.
     * 
     * @type {object}
     */

    var elements$ = computed(function () {
      return form$.value.elements$;
    });
    /**
     * Whether there are any steps in [`pending`](form-step#property-pending) state.
     * 
     * @type {boolean}
     */

    var pending = computed(function () {
      return _$1.some(visible$.value, {
        pending: true
      });
    });
    /**
     * Whether there are any steps in [`debouncing`](form-step#property-debouncing) state.
     * 
     * @type {boolean}
     */

    var debouncing = computed(function () {
      return _$1.some(visible$.value, {
        debouncing: true
      });
    });
    /**
     * Whether there are any steps in [`invalid`](form-step#property-invalid) state.
     * 
     * @type {boolean}
     */

    var invalid = computed(function () {
      return _$1.some(visible$.value, {
        invalid: true
      });
    });
    /**
     * Whether all the steps are [`done`](form-step#property-done).
     * 
     * @type {boolean}
     */

    var done = computed(function () {
      return !_$1.some(visible$.value, {
        done: false
      });
    });
    /**
     * Whether there are any steps in [`busys`](form-step#property-busys) state.
     * 
     * @type {boolean}
     */

    var busy = computed(function () {
      return pending.value || debouncing.value;
    });
    /**
     * The child [`FormStep`](form-step) components with indexed keys.
     * 
     * @type {object}
     */

    var steps$ = computed(function () {
      var steps$ = {};

      _$1.each(steps$Array.value, function (step$) {
        steps$[step$.name] = step$;
      });

      return steps$;
    });
    /**
     * All the visible [`FormStep`](form-step) components.
     * 
     * @type {object}
     */

    var visible$ = computed(function () {
      var stepList$ = {};

      _$1.each(steps$.value, function (step$) {
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

    var first$ = computed(function () {
      return _$1.find(visible$.value, function (step) {
        return step.visible;
      });
    });
    /**
     * The current [`FormStep`](form-step) component.
     * 
     * @type {component}
     */

    var current$ = computed(function () {
      var current = _$1.find(steps$.value, {
        active: true
      });

      return current !== undefined ? current : {};
    });
    /**
     * The next visible [`FormStep`](form-step) component.
     * 
     * @type {component}
     */

    var next$ = computed(function () {
      return _$1.find(visible$.value, function (step) {
        return step.index > current$.value.index && step.visible;
      });
    });
    /**
     * The previous visible [`FormStep`](form-step) component.
     * 
     * @type {component}
     */

    var previous$ = computed(function () {
      return _$1.findLast(visible$.value, function (step) {
        return step.index < current$.value.index && step.visible;
      });
    });
    /**
     * The first invalid & visible [`FormStep`](form-step) component.
     * 
     * @type {component}
     */

    var firstInvalid$ = computed(function () {
      return _$1.find(visible$.value, {
        invalid: true
      });
    });
    /**
     * The first visible [`FormStep`](form-step) component which is not done yet.
     * 
     * @type {component}
     */

    var firstNonDone$ = computed(function () {
      return _$1.find(visible$.value, {
        done: false
      });
    });
    /**
     * The last enabled & visible [`FormStep`](form-step) component.
     * 
     * @type {component}
     */

    var lastEnabled$ = computed(function () {
      return _$1.findLast(visible$.value, {
        isDisabled: false
      });
    });
    /**
     * Whether is at the last step.
     * 
     * @type {boolean}
     */

    var isAtLastStep = computed(function () {
      var last = _$1.findLast(visible$.value, {
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

    var isAtFirstStep = computed(function () {
      return current$.value.index === 0;
    }); // =============== METHODS ==============

    /**
     * Go to a step and enable it. Optionally enable all steps up to it.
     *
     * @param {object} index* index of step to go to
     * @param {boolean} enableUntil whether steps should be enabled up to the selected step (default: `false`)
     * @returns {void}
     */

    var goTo = function goTo(index) {
      var enableUntil = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var step = visible$.value[index];
      step.enable();
      step.select();

      if (enableUntil) {
        nextTick(function () {
          enableUntilLastEnabled();
        });
      }
    };
    /**
     * Move to next step and enable it.
     *
     * @returns {void}
     */


    var next = function next() {
      fire('next', next$.value);
      next$.value.enable();
      next$.value.select();
    };
    /**
     * Move to previous step.
     *
     * @returns {void}
     */


    var previous = function previous() {
      fire('previous', previous$.value);
      previous$.value.select();
    };
    /**
     * Mark each [`FormStep`](form-step) as complete.
     *
     * @returns {void}
     */


    var complete = function complete() {
      _$1.each(steps$.value, function (step$) {
        step$.complete();
      });
    };
    /**
     * Returns a specific [`FormStep`](form-step) component by index.
     *
     * @param {object} index* index of the step
     * @returns {component}
     */


    var step$ = function step$(index) {
      return _$1.find(visible$.value, {
        name: index
      });
    };
    /**
     * Jump back to first visible step and disable all others.
     *
     * @returns {void}
     */


    var reset = function reset() {
      _$1.each(steps$.value, function (step$) {
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


    var enableAllSteps = function enableAllSteps() {
      _$1.each(steps$.value, function (step$) {
        step$.enable();
      });
    };
    /**
     * Invokes the form's `submit` event. If the form has any validation errors it will jump to the first step with error.
     *
     * @returns {void}
     */


    var submit = function submit() {
      // manually triggering form's submit event
      var form = form$.value.$el.nodeName === 'FORM' ? form$.value.$el : form$.value.$el.querySelector('form');
      form.dispatchEvent(new Event('submit'));

      if (invalid.value) {
        firstInvalid$.value.select();
        return;
      }

      unwatchInvalid.value = watch(invalid, function (isInvalid) {
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


    var select = function select(step$) {
      var curr$ = current$.value;

      _$1.each(elements$.value, function (element$) {
        element$.deactivate();
      });

      _$1.each(steps$.value, function (step$) {
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


    var enableUntil = function enableUntil(index) {
      _$1.each(steps$.value, function (step$) {
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


    var enableUntilCurrent = function enableUntilCurrent() {
      enableUntil(current$.value.index);
    };
    /**
     * Enable all steps up to the last enabled.
     * 
     * @returns {void}
     */


    var enableUntilLastEnabled = function enableUntilLastEnabled() {
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


    var assignToParent = function assignToParent($parent, _assignToParent) {
      if ($parent.steps$ !== undefined) {
        form$.value.$set($parent, 'steps$', $this);
      } else {
        _assignToParent($parent.$parent, _assignToParent);
      }
    };
    /**
    * Removes the component from the parent.
    * 
    * @param {component} $parent parent component
    * @param {function} removeFromParent the removeFromParent function for recursion
    * @private
    */


    var removeFromParent = function removeFromParent($parent, _removeFromParent) {
      if ($parent.steps$ !== undefined) {
        form$.value.$set($parent, 'steps$', null);
      } else {
        _removeFromParent($parent.$parent, _removeFromParent);
      }
    }; // ============== WATCHERS ==============


    watch(elements$, function (newValue, oldValue) {
      var newElements$ = _$1.difference(_$1.keys(newValue), _$1.keys(oldValue));

      _$1.each(newElements$, function (newElement$) {
        elements$.value[newElement$].deactivate();
      });
    }, {
      deep: false,
      lazy: true
    });
    watch(steps, function () {
      nextTick(function () {
        if (lastEnabled$.value === undefined) ;

        if (current$.value.index === undefined && first$.value) {
          first$.value.select();
        }
      });
    }, {
      deep: true,
      lazy: true
    }); // Resort steps$Array when steps
    // order changes or a tab is removed

    watch(steps, function (newValue) {
      var newSteps$Array = [];

      _$1.each(newValue, function (t, name) {
        newSteps$Array.push(steps$Array.value[steps$Array.value.map(function (t$) {
          return normalize(t$.name);
        }).indexOf(normalize(name))]);
      });

      steps$Array.value = newSteps$Array;
    }, {
      flush: 'post'
    }); // =============== HOOKS ================

    onBeforeMount(function () {
      assignToParent($this.$parent, assignToParent);
    });
    onBeforeUnmount(function () {
      removeFromParent($this.$parent, removeFromParent);
    });
    onMounted(function () {
      // nextTick is required because elements$
      // only available after form is mounted,
      // which is later than the steps mount
      nextTick(function () {
        if (current$.value === undefined || current$.value.index === undefined) {
          first$.value.enable();
          first$.value.select();
        }

        enableUntilCurrent(); // if new steps are shown because of
        // changing conditions the ones before
        // the last active should be enabled

        watch(visible$, function () {
          enableUntilLastEnabled();
        }, {
          flush: 'post'
        });
      });
    });
    return {
      form$: form$,
      theme: theme,
      steps: steps,
      elements$: elements$,
      steps$Array: steps$Array,
      events: events,
      listeners: listeners,
      exists: exists,
      classes: classes,
      mainClass: mainClass,
      defaultClasses: defaultClasses,
      templates: templates,
      steps$: steps$,
      pending: pending,
      debouncing: debouncing,
      invalid: invalid,
      done: done,
      busy: busy,
      visible$: visible$,
      first$: first$,
      current$: current$,
      next$: next$,
      previous$: previous$,
      firstInvalid$: firstInvalid$,
      firstNonDone$: firstNonDone$,
      lastEnabled$: lastEnabled$,
      isAtLastStep: isAtLastStep,
      isAtFirstStep: isAtFirstStep,
      goTo: goTo,
      next: next,
      previous: previous,
      complete: complete,
      step$: step$,
      reset: reset,
      enableAllSteps: enableAllSteps,
      submit: submit,
      select: select,
      enableUntil: enableUntil,
      enableUntilCurrent: enableUntilCurrent,
      enableUntilLastEnabled: enableUntilLastEnabled,
      on: on,
      off: off,
      fire: fire
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
      "default": true
    }
  },
  setup: function setup(props, context) {
    // ============ DEPENDENCIES ============
    var _useFormComponent = base$X(props, context),
        form$ = _useFormComponent.form$,
        theme = _useFormComponent.theme,
        classes = _useFormComponent.classes,
        mainClass = _useFormComponent.mainClass,
        templates = _useFormComponent.templates,
        defaultClasses = _useFormComponent.defaultClasses;

    return {
      form$: form$,
      theme: theme,
      classes: classes,
      mainClass: mainClass,
      defaultClasses: defaultClasses,
      templates: templates
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
      "default": true,
      "private": true
    }
  },
  setup: function setup(props, context) {
    var _toRefs = toRefs(props),
        type = _toRefs.type,
        labels = _toRefs.labels; // ============ DEPENDENCIES ============


    var _useFormComponent = base$X(props, context, {}, {
      addClasses: [['button', "button_".concat(type.value, "_enabled"), computed(function () {
        return !isDisabled.value;
      })], ['button', "button_".concat(type.value, "_disabled"), computed(function () {
        return isDisabled.value;
      })], ['button', "button_".concat(type.value, "_loading"), computed(function () {
        return isLoading.value;
      })]]
    }),
        form$ = _useFormComponent.form$,
        theme = _useFormComponent.theme,
        classes = _useFormComponent.classes,
        mainClass = _useFormComponent.mainClass,
        templates = _useFormComponent.templates,
        defaultClasses = _useFormComponent.defaultClasses; // ============== COMPUTED ==============

    /**
     * The label definition of the component.
     * 
     * @type {string|function|component}
     * @private
     */


    var baseLabel = computed(function () {
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

    var _useLabel = base$V(props, context, {
      component$: form$,
      labelDefinition: baseLabel
    }),
        isLabelComponent = _useLabel.isLabelComponent,
        label = _useLabel.label; // ============== COMPUTED ==============

    /**
     * The [`FormSteps`](form-steps) component.
     * 
     * @private
     */


    var steps$ = computed(function () {
      return form$.value.steps$;
    });
    /**
     * The currently active [`FormStep`](form-step) component.
     * 
     * @private
     */

    var current$ = computed(function () {
      return steps$.value ? steps$.value.current$ : undefined;
    });
    /**
     * Whether the control should be visible.
     * 
     * @type {boolean}
     */

    var visible = computed(function () {
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

    var isDisabled = computed(function () {
      switch (type.value) {
        case 'previous':
          return steps$.value && steps$.value.isAtFirstStep;

        case 'next':
          return current$.value !== undefined && current$.value.index !== undefined && ( // only disable next because of invalidity
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

    var isLoading = computed(function () {
      return type.value === 'previous' ? false : form$.value.isLoading;
    }); // =============== METHODS ==============

    /**
     * Go to the previous form step.
     * 
     * @returns {void}
     */

    var previous = function previous() {
      steps$.value.previous();
    };
    /**
     * Complete the current step and go to the next one (async). If the form's [`validateOn`](vueform#option-validate-on) prop or `config.validateOn` contains `'step'` also validates the elements within the step before moving forward (and stay if there's any error).
     * 
     * @returns {void}
     */


    var next = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!form$.value.shouldValidateOnStep) {
                  _context.next = 3;
                  break;
                }

                _context.next = 3;
                return current$.value.validate();

              case 3:
                if (!current$.value.invalid) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                current$.value.complete();
                steps$.value.next();

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

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
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                steps$.value.fire('finish');
                steps$.value.complete();
                steps$.value.submit();

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

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


    var handleClick = function handleClick() {
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
      form$: form$,
      theme: theme,
      steps$: steps$,
      classes: classes,
      mainClass: mainClass,
      defaultClasses: defaultClasses,
      templates: templates,
      visible: visible,
      isDisabled: isDisabled,
      isLoading: isLoading,
      current$: current$,
      label: label,
      isLabelComponent: isLabelComponent,
      previous: previous,
      next: next,
      finish: finish,
      handleClick: handleClick
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
      "default": null
    },
    labels: {
      type: [Object],
      required: false,
      "default": function _default() {
        return {};
      }
    },
    buttons: {
      type: [Object],
      required: false,
      "default": function _default() {
        return {};
      }
    },
    elements: {
      type: [Array],
      required: false,
      "default": function _default() {
        return [];
      }
    },
    conditions: {
      type: [Array],
      required: false,
      "default": function _default() {
        return [];
      }
    },
    addClass: {
      type: [String, Array, Object],
      required: false,
      "default": null
    },
    onActivate: {
      type: [Function],
      required: false,
      "default": null,
      "private": true
    },
    onInactivate: {
      type: [Function],
      required: false,
      "default": null,
      "private": true
    },
    onDisable: {
      type: [Function],
      required: false,
      "default": null,
      "private": true
    },
    onEnable: {
      type: [Function],
      required: false,
      "default": null,
      "private": true
    }
  },
  setup: function setup(props, context) {
    var _toRefs = toRefs(props),
        name = _toRefs.name,
        label = _toRefs.label,
        elements = _toRefs.elements,
        conditions = _toRefs.conditions,
        addClass = _toRefs.addClass;

    var $this = getCurrentInstance().proxy; // ============ DEPENDENCIES ============

    var _useFormComponent = base$X(props, context, {}, {
      addClasses: [['container', 'container_active', computed(function () {
        return active.value;
      })], ['container', 'container_inactive', computed(function () {
        return !active.value;
      })], ['container', 'container_disabled', computed(function () {
        return isDisabled.value;
      })], ['container', 'container_enabled', computed(function () {
        return !isDisabled.value;
      })], ['container', 'container_completed', computed(function () {
        return completed.value;
      })], ['container', 'container_incompleted', computed(function () {
        return !completed.value;
      })], ['container', 'container_valid', computed(function () {
        return !invalid.value;
      })], ['container', 'container_invalid', computed(function () {
        return invalid.value;
      })], ['container', 'container_pending', computed(function () {
        return pending.value;
      })], ['container', computed(function () {
        return addClass.value || null;
      }), ref(true)]]
    }),
        form$ = _useFormComponent.form$,
        theme = _useFormComponent.theme,
        classes = _useFormComponent.classes,
        mainClass = _useFormComponent.mainClass,
        templates = _useFormComponent.templates,
        defaultClasses = _useFormComponent.defaultClasses;

    var _useConditions = base$W(props, context, {
      form$: form$
    }),
        available = _useConditions.available;

    var _useLabel = base$V(props, context, {
      component$: form$,
      labelDefinition: label
    }),
        isLabelComponent = _useLabel.isLabelComponent,
        stepLabel_ = _useLabel.label;

    var _useEvents = base$$(props, context, {
      form$: form$
    }, {
      events: context.emits
    }),
        events = _useEvents.events,
        listeners = _useEvents.listeners,
        on = _useEvents.on,
        off = _useEvents.off,
        fire = _useEvents.fire; // ================ DATA ================

    /**
     * The label of the step.
     * 
     * @type {string|component}
     * @default null
     */


    var stepLabel = ref(stepLabel_.value && _typeof$1(stepLabel_.value) === 'object' ? markRaw(stepLabel_.value) : stepLabel_.value);
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

    var completed = ref(false); // ============== COMPUTED ==============

    /**
     * The form elements' components.
     * 
     * @type {object}
     */

    var elements$ = computed(function () {
      return form$.value.elements$;
    });
    /**
     * The parent [`FormSteps`](form-steps) component.
     * 
     * @type {component}
     */

    var steps$ = computed(function () {
      return form$.value.steps$ || {};
    });
    /**
     * The label definition of the component.
     * 
     * @type {string}
     * @private
     */

    var baseLabel = computed(function () {
      return label.value;
    });
    /**
     * Index of this step among the other steps which are not hidden by unmet conditions.
     * 
     * @type {number}
     */

    var index = computed(function () {
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

    var children$ = computed(function () {
      return _$1.filter(elements$.value, function (element$, key) {
        return elements.value.indexOf(key) !== -1;
      });
    });
    /**
     * Whether the step should be visible.
     * 
     * @type {boolean}
     */

    var visible = computed(function () {
      return available.value;
    });
    /**
      * Whether the step has any invalid elements.
      * 
      * @type {boolean}
      */

    var invalid = computed(function () {
      return _$1.some(children$.value, {
        available: true,
        invalid: true
      });
    });
    /**
      * Whether the step has any pending elements.
      * 
      * @type {boolean}
      */

    var pending = computed(function () {
      return _$1.some(children$.value, {
        available: true,
        pending: true
      });
    });
    /**
      * Whether the step has any debouncing elements.
      * 
      * @type {boolean}
      */

    var debouncing = computed(function () {
      return _$1.some(children$.value, {
        available: true,
        debouncing: true
      });
    });
    /**
      * Whether all the elements in the step were already validated at least once.
      * 
      * @type {boolean}
      */

    var validated = computed(function () {
      return !_$1.some(children$.value, {
        available: true,
        validated: false
      });
    });
    /**
      * Whether the step has any busy elements.
      * 
      * @type {boolean}
      */

    var busy = computed(function () {
      return pending.value || debouncing.value;
    });
    /**
      * Whether the step is done (completed, validated has no invalid or pending elements).
      * 
      * @type {boolean}
      */

    var done = computed(function () {
      return completed.value && validated.value && !invalid.value && !pending.value;
    });
    /**
     * The step's component.
     * 
     * @type {component}
     */

    var step$ = computed(function () {
      return form$.value.steps$.steps$[name.value];
    }); // =============== METHODS ==============

    /**
     * Validate all elements within the step (async).
     *
     * @returns {void}
     */

    var validate = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(validated.value && !invalid.value && form$.value.shouldValidateOnChange)) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                _context2.next = 4;
                return asyncForEach(children$.value, /*#__PURE__*/function () {
                  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(element$) {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            if (!((!element$.validated || element$.invalid || !form$.value.shouldValidateOnChange) && element$.available)) {
                              _context.next = 3;
                              break;
                            }

                            _context.next = 3;
                            return element$.validate();

                          case 3:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x) {
                    return _ref2.apply(this, arguments);
                  };
                }());

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function validate() {
        return _ref.apply(this, arguments);
      };
    }();
    /**
     * Activate the step.
     *
     * @returns {void}
     */


    var activate = function activate() {
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


    var deactivate = function deactivate() {
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


    var enable = function enable() {
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


    var disable = function disable() {
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


    var complete = function complete() {
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


    var uncomplete = function uncomplete() {
      completed.value = false;
    };
    /**
     * Deactivate all other steps and set the current one as active.
     *
     * @returns {void}
     */


    var select = function select() {
      if (isDisabled.value) {
        return;
      }

      steps$.value.select(step$.value);

      _$1.each(children$.value, function (element$) {
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


    var forwardConditions = function forwardConditions() {
      if (conditions.value.length == 0) {
        return;
      }

      _$1.each(children$.value, function (element$) {
        _$1.each(conditions.value, function (condition) {
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


    var assignToParent = function assignToParent($parent, _assignToParent) {
      if ($parent.steps$Array) {
        $parent.steps$Array.push($this);
      } else {
        _assignToParent($parent.$parent, _assignToParent);
      }
    };
    /**
    * Removes the component from the parent.
    * 
    * @param {component} $parent parent component
    * @param {function} removeFromParent the removeFromParent function for recursion
    * @private
    */


    var removeFromParent = function removeFromParent($parent, _removeFromParent) {
      if ($parent.steps$Array) {
        $parent.steps$Array.splice($parent.steps$Array.map(function (t$) {
          return normalize(t$.name);
        }).indexOf(normalize(name.value)), 1);
      } else {
        _removeFromParent($parent.$parent, _removeFromParent);
      }
    }; // ============== WATCHERS ==============


    watch(visible, function (val) {
      // if a revealed step is earlier than the
      // current step, it should be enabled
      if (val && index.value < form$.value.steps$.current$.index) {
        enable();
      }
    });
    watch(children$, function () {
      if (!active.value) {
        return;
      }

      _$1.each(children$.value, function (element$) {
        element$.activate();
      });
    }, {
      deep: false,
      lazy: true
    });
    watch(stepLabel_, function () {
      stepLabel.value = stepLabel_.value && _typeof$1(stepLabel_.value) === 'object' ? markRaw(stepLabel_.value) : stepLabel_.value;
    }); // ================ HOOKS ===============

    onMounted(function () {
      // nextTick is required because elements$
      // only available after form is mounted,
      // which is later than the steps mount
      nextTick(function () {
        forwardConditions();
      });
    });
    onBeforeMount(function () {
      assignToParent($this.$parent, assignToParent);
    });
    onBeforeUnmount(function () {
      removeFromParent($this.$parent, removeFromParent);
    });
    return {
      form$: form$,
      theme: theme,
      steps$: steps$,
      elements$: elements$,
      active: active,
      isDisabled: isDisabled,
      completed: completed,
      events: events,
      listeners: listeners,
      children$: children$,
      visible: visible,
      invalid: invalid,
      pending: pending,
      classes: classes,
      mainClass: mainClass,
      defaultClasses: defaultClasses,
      templates: templates,
      available: available,
      baseLabel: baseLabel,
      debouncing: debouncing,
      validated: validated,
      busy: busy,
      done: done,
      step$: step$,
      isLabelComponent: isLabelComponent,
      stepLabel: stepLabel,
      index: index,
      validate: validate,
      activate: activate,
      deactivate: deactivate,
      enable: enable,
      disable: disable,
      complete: complete,
      uncomplete: uncomplete,
      select: select,
      forwardConditions: forwardConditions,
      on: on,
      off: off,
      fire: fire
    };
  }
};

var base$U = function base(props, context, dependencies) {
  // ============== METHODS ===============

  /**
  * Transforms an element `type` into the element's component name.
  * 
  * @param {string} element* element `type`
  * @returns {string}
  * @private
  */
  var component = function component(element) {
    return "".concat(_$1.upperFirst(_$1.camelCase(element.type)), "Element");
  };

  return {
    component: component
  };
};

var FormElements = {
  name: 'FormElements',
  slots: ['default'],
  setup: function setup(props, context) {
    // ============ DEPENDENCIES ============
    var _useFormComponent = base$X(props, context),
        form$ = _useFormComponent.form$,
        theme = _useFormComponent.theme,
        classes = _useFormComponent.classes,
        mainClass = _useFormComponent.mainClass,
        templates = _useFormComponent.templates,
        defaultClasses = _useFormComponent.defaultClasses;

    var _useElements = base$U(),
        component = _useElements.component; // ============ COMPUTED ============

    /**
     * The form schema.
     * 
     * @type {object}
     * @private
     */


    var schema = computed(function () {
      return form$.value.options.schema;
    });
    return {
      form$: form$,
      theme: theme,
      classes: classes,
      mainClass: mainClass,
      defaultClasses: defaultClasses,
      templates: templates,
      schema: schema,
      component: component
    };
  }
};

var base$T = function base(props, context, dependencies) {
  // =============== INJECT ===============

  /**
  * The parent element's component.
  * 
  * @type {component}
  */
  var el$ = inject('el$');
  return {
    el$: el$
  };
};

var base$S = function base(props, context, dependencies) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var componentName = context.name; // =============== INJECT ===============

  var _useForm$ = base$Z(),
      form$ = _useForm$.form$;

  var _useEl$ = base$T(),
      el$ = _useEl$.el$;

  var _useTheme = base$Y(),
      theme = _useTheme.theme;

  var template = el$.value.templates[componentName.value]; // ================ DATA =================

  /**
  * The default classes for the component defined by theme.
  * 
  * @type {object}
  * @private
  */

  var defaultClasses = ref(template.data ? template.data().defaultClasses : {}); // ============== COMPUTED ===============

  /**
   * An object containaing all the component's classes in key/value pairs. Class values are merged based on the default classes provided by the theme respecing any additional classes / overrides.
   * 
   * @type {object}
   * @private
   */

  var mergedClasses = computed(function () {
    var classes = _$1.merge({}, // Default component classes
    defaultClasses.value, // Theme / form level overwrites
    theme.value.classes[componentName.value] || {}, // Element level overwrites
    el$.value.replaceClasses[componentName.value] || {}); // Add classes defined by specific components


    if (options.addClasses) {
      options.addClasses.forEach(function (add) {
        if (add[2].value) {
          classes = mergeComponentClasses(classes, _defineProperty$1({}, add[0], _typeof$1(add[1]) == 'object' ? add[1].value : classes[add[1]]));
        }
      });
    } // Add form's extendClasses


    if (form$.value.options.extendClasses[componentName.value] !== undefined) {
      classes = mergeComponentClasses(classes, form$.value.options.extendClasses[componentName.value] || null);
    } // Add element's extendClasses options


    classes = mergeComponentClasses(classes, el$.value.extendClasses[componentName.value] || null);
    return classes;
  });
  /**
   * The selected theme's classes merged with element's `extendClasses` and `replaceClasses` options.
   * 
   * @type {object}
   */

  var classes = computed({
    get: function get() {
      return mergedClasses.value;
    },
    set: function set(val) {
      schema.value.classes = val;
    }
  });
  /**
   * Returns the component templates used by the parent element.
   * 
   * @type {object}
   */

  var templates = computed(function () {
    return el$.value.templates;
  });
  /**
  * The class name of the components's outermost DOM.
  * 
  * @type {string}
  * @private
  */

  var mainClass = computed(function () {
    return _$1.keys(defaultClasses.value)[0];
  });
  return {
    el$: el$,
    form$: form$,
    theme: theme,
    classes: classes,
    templates: templates,
    mainClass: mainClass,
    defaultClasses: defaultClasses
  };
};

var ElementLayout = {
  name: 'ElementLayout',
  slots: ['field', 'label', 'info', 'description', 'before', 'between', 'after'],
  props: {
    multiple: {
      type: [Boolean],
      required: false,
      "default": false
    }
  },
  setup: function setup(props, context) {
    var _toRefs = toRefs(props),
        multiple = _toRefs.multiple; // ============ DEPENDENCIES ============


    var _useElementComponent = base$S(props, context, {}, {
      addClasses: [['container', computed(function () {
        return el$.value.columnsClasses.container;
      }), ref(true)], ['container', computed(function () {
        return el$.value.classes.container;
      }), ref(true)], ['container', 'container_error', computed(function () {
        return !el$.value.isStatic && el$.value.errors && !!el$.value.errors.length;
      })], ['innerContainer', computed(function () {
        return el$.value.columnsClasses.innerContainer;
      }), ref(true)], ['innerWrapper', computed(function () {
        return el$.value.columnsClasses.wrapper;
      }), ref(true)], ['outerWrapper', 'outerWrapper_single', computed(function () {
        return !multiple.value;
      })], ['outerWrapper', 'outerWrapper_multiple', computed(function () {
        return multiple.value;
      })]]
    }),
        form$ = _useElementComponent.form$,
        el$ = _useElementComponent.el$,
        classes = _useElementComponent.classes,
        templates = _useElementComponent.templates,
        mainClass = _useElementComponent.mainClass,
        theme = _useElementComponent.theme,
        defaultClasses = _useElementComponent.defaultClasses; // ============== COMPUTED ==============

    /**
     * Whether the element should be visible.
     * 
     * @type {boolean}
     */


    var visible = computed(function () {
      return el$.value.visible;
    });
    return {
      el$: el$,
      form$: form$,
      theme: theme,
      templates: templates,
      classes: classes,
      mainClass: mainClass,
      defaultClasses: defaultClasses,
      visible: visible // hasLabel,
      // info,
      // before,
      // between,
      // after,
      // description,

    };
  }
};

var ElementLayoutInline = {
  name: 'ElementLayoutInline',
  slots: ['field', 'label', 'info', 'description', 'before', 'between', 'after'],
  setup: function setup(props, context) {
    // ============ DEPENDENCIES ============
    var _useElementComponent = base$S(props, context, {}, {
      addClasses: [['container', computed(function () {
        return el$.value.classes.container;
      }), ref(true)], ['container', 'container_error', computed(function () {
        return !el$.value.isStatic && el$.value.errors && !!el$.value.errors.length;
      })]]
    }),
        form$ = _useElementComponent.form$,
        el$ = _useElementComponent.el$,
        classes = _useElementComponent.classes,
        templates = _useElementComponent.templates,
        mainClass = _useElementComponent.mainClass,
        theme = _useElementComponent.theme,
        defaultClasses = _useElementComponent.defaultClasses; // ============== COMPUTED ==============

    /**
     * Whether the element should be visible.
     * 
     * @type {boolean}
     */


    var visible = computed(function () {
      return el$.value.visible;
    });
    return {
      el$: el$,
      form$: form$,
      theme: theme,
      templates: templates,
      defaultClasses: defaultClasses,
      classes: classes,
      mainClass: mainClass,
      visible: visible // hasLabel,

    };
  }
};

var ElementLoader = {
  name: 'ElementLoader',
  setup: function setup(props, context) {
    // ============ DEPENDENCIES ============
    var _useElementComponent = base$S(props, context),
        el$ = _useElementComponent.el$,
        form$ = _useElementComponent.form$,
        classes = _useElementComponent.classes,
        mainClass = _useElementComponent.mainClass,
        templates = _useElementComponent.templates,
        theme = _useElementComponent.theme,
        defaultClasses = _useElementComponent.defaultClasses;

    return {
      el$: el$,
      form$: form$,
      theme: theme,
      classes: classes,
      mainClass: mainClass,
      defaultClasses: defaultClasses,
      templates: templates
    };
  }
};

var ElementLabelFloating = {
  name: 'ElementLabelFloating',
  props: {
    visible: {
      type: Boolean,
      "default": false
    }
  },
  setup: function setup(props, context) {
    var _toRefs = toRefs(props),
        visible = _toRefs.visible; // ============ DEPENDENCIES ============


    var _useElementComponent = base$S(props, context, {}, {
      addClasses: [['label', 'label_invisible', computed(function () {
        return !visible.value;
      })], ['label', 'label_visible', computed(function () {
        return visible.value;
      })]]
    }),
        el$ = _useElementComponent.el$,
        form$ = _useElementComponent.form$,
        classes = _useElementComponent.classes,
        templates = _useElementComponent.templates,
        mainClass = _useElementComponent.mainClass,
        theme = _useElementComponent.theme,
        defaultClasses = _useElementComponent.defaultClasses; // ============== COMPUTED ==============

    /**
     * The floating label of the element, defined via `floating` prop.
     * 
     * @type {string}
     */


    var floating = computed(function () {
      return el$.value.floating || (form$.value.options.floatPlaceholders ? el$.value.placeholder : null);
    });
    return {
      el$: el$,
      form$: form$,
      theme: theme,
      classes: classes,
      mainClass: mainClass,
      defaultClasses: defaultClasses,
      templates: templates,
      floating: floating
    };
  }
};

var ElementLabel = {
  name: 'ElementLabel',
  slots: ['default', 'info'],
  setup: function setup(props, context) {
    // ============ DEPENDENCIES ============
    var _useElementComponent = base$S(props, context, {}, {
      addClasses: [['container', computed(function () {
        return el$.value.columnsClasses.label;
      }), computed(function () {
        return !el$.value.inline;
      })]]
    }),
        el$ = _useElementComponent.el$,
        form$ = _useElementComponent.form$,
        classes = _useElementComponent.classes,
        mainClass = _useElementComponent.mainClass,
        templates = _useElementComponent.templates,
        theme = _useElementComponent.theme,
        defaultClasses = _useElementComponent.defaultClasses;

    var _useLabel = base$V(props, context, {
      labelDefinition: computed(function () {
        return el$.value.label;
      }),
      component$: el$
    }),
        label = _useLabel.label,
        isLabelComponent = _useLabel.isLabelComponent; // ============== COMPUTED ==============

    /**
     * The name of the element.
     * 
     * @type {string}
     * @private
     */


    var name = computed(function () {
      return el$.value.name;
    });
    /**
     * Whether the element has a `label` option, a `#label` slot or `Vueform` component's [`forceLabels`](vueform#force-labels) option is `true`.
     * 
     * @type {boolean}
     * 
     */

    var hasLabel = computed(function () {
      return el$.value.hasLabel;
    });
    /**
     * Whether the label is provided as a slot.
     * 
     * @type {boolean}
     * @private
     */

    var isSlot = computed(function () {
      var _el$$value$slots, _el$$value$$slots, _el$$value$$scopedSlo;

      return !!((_el$$value$slots = el$.value.slots) !== null && _el$$value$slots !== void 0 && _el$$value$slots.label || (_el$$value$$slots = el$.value.$slots) !== null && _el$$value$$slots !== void 0 && _el$$value$$slots.label || context.expose === undefined && (_el$$value$$scopedSlo = el$.value.$scopedSlots) !== null && _el$$value$$scopedSlo !== void 0 && _el$$value$$scopedSlo.label);
    });
    return {
      el$: el$,
      form$: form$,
      theme: theme,
      classes: classes,
      mainClass: mainClass,
      defaultClasses: defaultClasses,
      templates: templates,
      label: label,
      isLabelComponent: isLabelComponent,
      name: name,
      hasLabel: hasLabel,
      isSlot: isSlot
    };
  }
};

var ElementInfo = {
  name: 'ElementInfo',
  slots: ['default'],
  setup: function setup(props, context) {
    // ============ DEPENDENCIES ============
    var _useElementComponent = base$S(props, context),
        el$ = _useElementComponent.el$,
        form$ = _useElementComponent.form$,
        classes = _useElementComponent.classes,
        templates = _useElementComponent.templates,
        mainClass = _useElementComponent.mainClass,
        theme = _useElementComponent.theme,
        defaultClasses = _useElementComponent.defaultClasses; // ============== COMPUTED ==============

    /**
     * The info for the element, defined via the element's `info` prop.
     * 
     * @type {string}
     */


    var info = computed(function () {
      return el$.value.info;
    });
    /**
     * Whether the info is provided as a slot.
     * 
     * @type {boolean}
     * @private
     */

    var isSlot = computed(function () {
      var _el$$value$slots, _el$$value$$slots, _el$$value$$scopedSlo;

      return !!((_el$$value$slots = el$.value.slots) !== null && _el$$value$slots !== void 0 && _el$$value$slots.info || (_el$$value$$slots = el$.value.$slots) !== null && _el$$value$$slots !== void 0 && _el$$value$$slots.info || context.expose === undefined && (_el$$value$$scopedSlo = el$.value.$scopedSlots) !== null && _el$$value$$scopedSlo !== void 0 && _el$$value$$scopedSlo.info);
    });
    return {
      el$: el$,
      form$: form$,
      theme: theme,
      classes: classes,
      mainClass: mainClass,
      defaultClasses: defaultClasses,
      templates: templates,
      info: info,
      isSlot: isSlot
    };
  }
};

var ElementDescription = {
  name: 'ElementDescription',
  slots: ['default'],
  setup: function setup(props, context) {
    // ============ DEPENDENCIES ============
    var _useElementComponent = base$S(props, context),
        el$ = _useElementComponent.el$,
        form$ = _useElementComponent.form$,
        classes = _useElementComponent.classes,
        templates = _useElementComponent.templates,
        mainClass = _useElementComponent.mainClass,
        theme = _useElementComponent.theme,
        defaultClasses = _useElementComponent.defaultClasses; // ============== COMPUTED ==============

    /**
     * The element's description, defined via the element's `description` option.
     * 
     * @type {string}
     */


    var description = computed(function () {
      return el$.value.description;
    });
    /**
     * Whether the description is provided as a slot.
     * 
     * @type {boolean}
     * @private
     */

    var isSlot = computed(function () {
      var _el$$value$slots, _el$$value$$slots, _el$$value$$scopedSlo;

      return !!((_el$$value$slots = el$.value.slots) !== null && _el$$value$slots !== void 0 && _el$$value$slots.description || (_el$$value$$slots = el$.value.$slots) !== null && _el$$value$$slots !== void 0 && _el$$value$$slots.description || context.expose === undefined && (_el$$value$$scopedSlo = el$.value.$scopedSlots) !== null && _el$$value$$scopedSlo !== void 0 && _el$$value$$scopedSlo.description);
    });
    return {
      el$: el$,
      form$: form$,
      theme: theme,
      classes: classes,
      mainClass: mainClass,
      defaultClasses: defaultClasses,
      templates: templates,
      description: description,
      isSlot: isSlot
    };
  }
};

var ElementError = {
  name: 'ElementError',
  setup: function setup(props, context) {
    // ============ DEPENDENCIES ============
    var _useElementComponent = base$S(props, context),
        el$ = _useElementComponent.el$,
        form$ = _useElementComponent.form$,
        classes = _useElementComponent.classes,
        templates = _useElementComponent.templates,
        mainClass = _useElementComponent.mainClass,
        theme = _useElementComponent.theme,
        defaultClasses = _useElementComponent.defaultClasses; // ============== COMPUTED ==============

    /**
     * The first error of the element.
     * 
     * @type {string}
     */


    var error = computed(function () {
      return el$.value.error;
    });
    return {
      el$: el$,
      form$: form$,
      theme: theme,
      classes: classes,
      mainClass: mainClass,
      defaultClasses: defaultClasses,
      templates: templates,
      error: error
    };
  }
};

var ElementMessage = {
  name: 'ElementMessage',
  setup: function setup(props, context) {
    // ============ DEPENDENCIES ============
    var _useElementComponent = base$S(props, context),
        el$ = _useElementComponent.el$,
        form$ = _useElementComponent.form$,
        classes = _useElementComponent.classes,
        templates = _useElementComponent.templates,
        mainClass = _useElementComponent.mainClass,
        theme = _useElementComponent.theme,
        defaultClasses = _useElementComponent.defaultClasses; // ============== COMPUTED ==============

    /**
     * The first message of the element.
     * 
     * @type {string}
     */


    var message = computed(function () {
      return el$.value.messageBag ? el$.value.messageBag.message : null;
    });
    return {
      el$: el$,
      form$: form$,
      theme: theme,
      classes: classes,
      mainClass: mainClass,
      defaultClasses: defaultClasses,
      templates: templates,
      message: message
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
  setup: function setup(props, context) {
    var _toRefs = toRefs(props),
        type = _toRefs.type; // ============ DEPENDENCIES ============


    var _useElementComponent = base$S(props, context, {}, {
      addClasses: [['container', 'container_before', computed(function () {
        return type.value == 'before';
      })], ['container', 'container_between', computed(function () {
        return type.value == 'between';
      })], ['container', 'container_after', computed(function () {
        return type.value == 'after';
      })]]
    }),
        el$ = _useElementComponent.el$,
        form$ = _useElementComponent.form$,
        classes = _useElementComponent.classes,
        templates = _useElementComponent.templates,
        mainClass = _useElementComponent.mainClass,
        theme = _useElementComponent.theme,
        defaultClasses = _useElementComponent.defaultClasses; // ============== COMPUTED ==============

    /**
     * The value of the content type.
     * 
     * @type {string}
     * @private
     */


    var content = computed(function () {
      return el$.value[type.value];
    });
    /**
     * Whether the contents are provided as a slot.
     * 
     * @type {boolean}
     * @private
     */

    var isSlot = computed(function () {
      var _el$$value$slots, _el$$value$$slots, _el$$value$$scopedSlo;

      return !!((_el$$value$slots = el$.value.slots) !== null && _el$$value$slots !== void 0 && _el$$value$slots[type.value] || (_el$$value$$slots = el$.value.$slots) !== null && _el$$value$$slots !== void 0 && _el$$value$$slots[type.value] || context.expose === undefined && (_el$$value$$scopedSlo = el$.value.$scopedSlots) !== null && _el$$value$$scopedSlo !== void 0 && _el$$value$$scopedSlo[type.value]);
    });
    return {
      el$: el$,
      form$: form$,
      theme: theme,
      classes: classes,
      mainClass: mainClass,
      defaultClasses: defaultClasses,
      templates: templates,
      content: content,
      isSlot: isSlot
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
      "default": false
    }
  },
  setup: function setup(props, context) {
    var _toRefs = toRefs(props),
        disabled = _toRefs.disabled; // ============== DEPENDENCIES ==============


    var _useElementComponent = base$S(props, context, {}, {
      addClasses: [['container', 'container_active', computed(function () {
        return dragging.value;
      })], ['container', 'container_inactive', computed(function () {
        return !dragging.value;
      })], ['container', 'container_enabled', computed(function () {
        return !disabled.value;
      })], ['container', 'container_disabled', computed(function () {
        return disabled.value;
      })]]
    }),
        el$ = _useElementComponent.el$,
        form$ = _useElementComponent.form$,
        classes = _useElementComponent.classes,
        templates = _useElementComponent.templates,
        mainClass = _useElementComponent.mainClass,
        theme = _useElementComponent.theme,
        defaultClasses = _useElementComponent.defaultClasses; // ================ DATA ================

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

    var area = ref(null); // =============== METHODS ==============

    /**
     * Handles `click` event.
     * 
     * @returns {void}
     * @private
     */

    var handleClick = function handleClick() {
      context.emit('click');
    }; // ================ HOOKS ===============


    onMounted(function () {
      // cancelling all default events
      _$1.each(['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'], function (event) {
        area.value.addEventListener(event, function (e) {
          e.preventDefault();
          e.stopPropagation();
        });
      }); // listening for the actual drop event


      area.value.addEventListener('drop', function (e) {
        if (disabled.value) {
          return;
        }

        context.emit('drop', e);
        dragging.value = false;
      });
      area.value.addEventListener('dragover', function (e) {
        if (disabled.value) {
          return;
        }

        if (dragging.value !== true) {
          dragging.value = true;
        }
      });
      area.value.addEventListener('dragleave', function (e) {
        if (disabled.value) {
          return;
        }

        dragging.value = false;
      });
      area.value.addEventListener('dragend', function (e) {
        if (disabled.value) {
          return;
        }

        dragging.value = false;
      });
    });
    return {
      el$: el$,
      form$: form$,
      classes: classes,
      mainClass: mainClass,
      defaultClasses: defaultClasses,
      templates: templates,
      theme: theme,
      dragging: dragging,
      area: area,
      handleClick: handleClick
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
  setup: function setup(props, context) {
    var _toRefs = toRefs(props),
        type = _toRefs.type; // ============ DEPENDENCIES ============


    var _useElementComponent = base$S(props, context, {}, {
      addClasses: [['container', 'container_before', computed(function () {
        return type.value === 'before';
      })], ['container', 'container_after', computed(function () {
        return type.value === 'after';
      })]]
    }),
        form$ = _useElementComponent.form$,
        el$ = _useElementComponent.el$,
        classes = _useElementComponent.classes,
        mainClass = _useElementComponent.mainClass,
        templates = _useElementComponent.templates,
        theme = _useElementComponent.theme,
        defaultClasses = _useElementComponent.defaultClasses; // ============== COMPUTED ==============

    /**
     * The addon definition.
     * ponent.
    * 
    * @type {string|function|component}
    * @private
     */


    var baseAddon = computed(function () {
      return el$.value.addons[type.value];
    });
    /**
     * The content of the addon. If the addon is provided ss a `function` this contains the resolved value.
     * 
     * @type {string|component}
     */

    var addon = computed(function () {
      return isAddonFunction.value ? baseAddon.value(el$.value) : baseAddon.value || null;
    });
    /**
    * Whether the addon is provided as a function.
    * 
    * @type {boolean}
    * @private
    */

    var isAddonFunction = computed(function () {
      return typeof baseAddon.value === 'function' && (!baseAddon.value.prototype || !baseAddon.value.prototype.constructor || baseAddon.value.prototype.constructor && baseAddon.value.prototype.constructor.name !== 'VueComponent');
    });
    /**
    * Whether addon is provided as a Vue component.
    * 
    * @type {boolean}
    * @private
    */

    var isAddonComponent = computed(function () {
      return isVueComponent(baseAddon.value);
    });
    /**
     * Whether the label is provided as a slot.
     * 
     * @type {boolean}
     * @private
     */

    var isSlot = computed(function () {
      var _el$$value$slots, _el$$value$$slots, _el$$value$$scopedSlo;

      return !!((_el$$value$slots = el$.value.slots) !== null && _el$$value$slots !== void 0 && _el$$value$slots["addon-".concat(type.value)] || (_el$$value$$slots = el$.value.$slots) !== null && _el$$value$$slots !== void 0 && _el$$value$$slots["addon-".concat(type.value)] || context.expose === undefined && (_el$$value$$scopedSlo = el$.value.$scopedSlots) !== null && _el$$value$$scopedSlo !== void 0 && _el$$value$$scopedSlo["addon-".concat(type.value)]);
    });
    return {
      el$: el$,
      form$: form$,
      theme: theme,
      templates: templates,
      classes: classes,
      mainClass: mainClass,
      defaultClasses: defaultClasses,
      addon: addon,
      isAddonComponent: isAddonComponent,
      isSlot: isSlot
    };
  }
};

var HOOKS = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"];
var defaults$1 = {
  _disable: [],
  allowInput: false,
  allowInvalidPreload: false,
  altFormat: "F j, Y",
  altInput: false,
  altInputClass: "form-control input",
  animate: (typeof window === "undefined" ? "undefined" : _typeof$1(window)) === "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
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
  errorHandler: function errorHandler(err) {
    return typeof console !== "undefined" && console.warn(err);
  },
  getWeek: function getWeek(givenDate) {
    var date = new Date(givenDate.getTime());
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    var week1 = new Date(date.getFullYear(), 0, 4);
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
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
  "static": false,
  time_24hr: false,
  weekNumbers: false,
  wrap: false
};

var english = {
  weekdays: {
    shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  },
  months: {
    shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  },
  daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  firstDayOfWeek: 0,
  ordinal: function ordinal(nth) {
    var s = nth % 100;
    if (s > 3 && s < 21) return "th";

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
  time_24hr: false
};

var pad = function pad(number) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return "000".concat(number).slice(length * -1);
};

var _int = function _int(bool) {
  return bool === true ? 1 : 0;
};
function debounce(fn, wait) {
  var t;
  return function () {
    var _arguments = arguments,
        _this = this;

    clearTimeout(t);
    t = setTimeout(function () {
      return fn.apply(_this, _arguments);
    }, wait);
  };
}
var arrayify = function arrayify(obj) {
  return obj instanceof Array ? obj : [obj];
};

function toggleClass$1(elem, className, bool) {
  if (bool === true) return elem.classList.add(className);
  elem.classList.remove(className);
}
function createElement(tag, className, content) {
  var e = window.document.createElement(tag);
  className = className || "";
  content = content || "";
  e.className = className;
  if (content !== undefined) e.textContent = content;
  return e;
}
function clearNode(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}
function findParent(node, condition) {
  if (condition(node)) return node;else if (node.parentNode) return findParent(node.parentNode, condition);
  return undefined;
}
function createNumberInput(inputClassName, opts) {
  var wrapper = createElement("div", "numInputWrapper"),
      numInput = createElement("input", "numInput " + inputClassName),
      arrowUp = createElement("span", "arrowUp"),
      arrowDown = createElement("span", "arrowDown");

  if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
    numInput.type = "number";
  } else {
    numInput.type = "text";
    numInput.pattern = "\\d*";
  }

  if (opts !== undefined) for (var key in opts) {
    numInput.setAttribute(key, opts[key]);
  }
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
  } catch (error) {
    return event.target;
  }
}

var doNothing = function doNothing() {
  return undefined;
};

var monthToStr = function monthToStr(monthNumber, shorthand, locale) {
  return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
};
var revFormat = {
  D: doNothing,
  F: function F(dateObj, monthName, locale) {
    dateObj.setMonth(locale.months.longhand.indexOf(monthName));
  },
  G: function G(dateObj, hour) {
    dateObj.setHours(parseFloat(hour));
  },
  H: function H(dateObj, hour) {
    dateObj.setHours(parseFloat(hour));
  },
  J: function J(dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  K: function K(dateObj, amPM, locale) {
    dateObj.setHours(dateObj.getHours() % 12 + 12 * _int(new RegExp(locale.amPM[1], "i").test(amPM)));
  },
  M: function M(dateObj, shortMonth, locale) {
    dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
  },
  S: function S(dateObj, seconds) {
    dateObj.setSeconds(parseFloat(seconds));
  },
  U: function U(_, unixSeconds) {
    return new Date(parseFloat(unixSeconds) * 1000);
  },
  W: function W(dateObj, weekNum, locale) {
    var weekNumber = parseInt(weekNum);
    var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
    date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
    return date;
  },
  Y: function Y(dateObj, year) {
    dateObj.setFullYear(parseFloat(year));
  },
  Z: function Z(_, ISODate) {
    return new Date(ISODate);
  },
  d: function d(dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  h: function h(dateObj, hour) {
    dateObj.setHours(parseFloat(hour));
  },
  i: function i(dateObj, minutes) {
    dateObj.setMinutes(parseFloat(minutes));
  },
  j: function j(dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  l: doNothing,
  m: function m(dateObj, month) {
    dateObj.setMonth(parseFloat(month) - 1);
  },
  n: function n(dateObj, month) {
    dateObj.setMonth(parseFloat(month) - 1);
  },
  s: function s(dateObj, seconds) {
    dateObj.setSeconds(parseFloat(seconds));
  },
  u: function u(_, unixMillSeconds) {
    return new Date(parseFloat(unixMillSeconds));
  },
  w: doNothing,
  y: function y(dateObj, year) {
    dateObj.setFullYear(2000 + parseFloat(year));
  }
};
var tokenRegex = {
  D: "(\\w+)",
  F: "(\\w+)",
  G: "(\\d\\d|\\d)",
  H: "(\\d\\d|\\d)",
  J: "(\\d\\d|\\d)\\w+",
  K: "",
  M: "(\\w+)",
  S: "(\\d\\d|\\d)",
  U: "(.+)",
  W: "(\\d\\d|\\d)",
  Y: "(\\d{4})",
  Z: "(.+)",
  d: "(\\d\\d|\\d)",
  h: "(\\d\\d|\\d)",
  i: "(\\d\\d|\\d)",
  j: "(\\d\\d|\\d)",
  l: "(\\w+)",
  m: "(\\d\\d|\\d)",
  n: "(\\d\\d|\\d)",
  s: "(\\d\\d|\\d)",
  u: "(.+)",
  w: "(\\d\\d|\\d)",
  y: "(\\d{2})"
};
var formats = {
  Z: function Z(date) {
    return date.toISOString();
  },
  D: function D(date, locale, options) {
    return locale.weekdays.shorthand[formats.w(date, locale, options)];
  },
  F: function F(date, locale, options) {
    return monthToStr(formats.n(date, locale, options) - 1, false, locale);
  },
  G: function G(date, locale, options) {
    return pad(formats.h(date, locale, options));
  },
  H: function H(date) {
    return pad(date.getHours());
  },
  J: function J(date, locale) {
    return locale.ordinal !== undefined ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
  },
  K: function K(date, locale) {
    return locale.amPM[_int(date.getHours() > 11)];
  },
  M: function M(date, locale) {
    return monthToStr(date.getMonth(), true, locale);
  },
  S: function S(date) {
    return pad(date.getSeconds());
  },
  U: function U(date) {
    return date.getTime() / 1000;
  },
  W: function W(date, _, options) {
    return options.getWeek(date);
  },
  Y: function Y(date) {
    return pad(date.getFullYear(), 4);
  },
  d: function d(date) {
    return pad(date.getDate());
  },
  h: function h(date) {
    return date.getHours() % 12 ? date.getHours() % 12 : 12;
  },
  i: function i(date) {
    return pad(date.getMinutes());
  },
  j: function j(date) {
    return date.getDate();
  },
  l: function l(date, locale) {
    return locale.weekdays.longhand[date.getDay()];
  },
  m: function m(date) {
    return pad(date.getMonth() + 1);
  },
  n: function n(date) {
    return date.getMonth() + 1;
  },
  s: function s(date) {
    return date.getSeconds();
  },
  u: function u(date) {
    return date.getTime();
  },
  w: function w(date) {
    return date.getDay();
  },
  y: function y(date) {
    return String(date.getFullYear()).substring(2);
  }
};

var createDateFormatter = function createDateFormatter(_ref) {
  var _ref$config = _ref.config,
      config = _ref$config === void 0 ? defaults$1 : _ref$config,
      _ref$l10n = _ref.l10n,
      l10n = _ref$l10n === void 0 ? english : _ref$l10n,
      _ref$isMobile = _ref.isMobile,
      isMobile = _ref$isMobile === void 0 ? false : _ref$isMobile;
  return function (dateObj, frmt, overrideLocale) {
    var locale = overrideLocale || l10n;

    if (config.formatDate !== undefined && !isMobile) {
      return config.formatDate(dateObj, frmt, locale);
    }

    return frmt.split("").map(function (c, i, arr) {
      return formats[c] && arr[i - 1] !== "\\" ? formats[c](dateObj, locale, config) : c !== "\\" ? c : "";
    }).join("");
  };
};
var createDateParser = function createDateParser(_ref2) {
  var _ref2$config = _ref2.config,
      config = _ref2$config === void 0 ? defaults$1 : _ref2$config,
      _ref2$l10n = _ref2.l10n,
      l10n = _ref2$l10n === void 0 ? english : _ref2$l10n;
  return function (date, givenFormat, timeless, customLocale) {
    if (date !== 0 && !date) return undefined;
    var locale = customLocale || l10n;
    var parsedDate;
    var dateOrig = date;
    if (date instanceof Date) parsedDate = new Date(date.getTime());else if (typeof date !== "string" && date.toFixed !== undefined) parsedDate = new Date(date);else if (typeof date === "string") {
      var format = givenFormat || (config || defaults$1).dateFormat;
      var datestr = String(date).trim();

      if (datestr === "today") {
        parsedDate = new Date();
        timeless = true;
      } else if (/Z$/.test(datestr) || /GMT$/.test(datestr)) parsedDate = new Date(date);else if (config && config.parseDate) parsedDate = config.parseDate(date, format);else {
        parsedDate = !config || !config.noCalendar ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0) : new Date(new Date().setHours(0, 0, 0, 0));
        var matched,
            ops = [];

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
                val: match[++matchIndex]
              });
            }
          } else if (!isBackSlash) regexStr += ".";

          ops.forEach(function (_ref3) {
            var fn = _ref3.fn,
                val = _ref3.val;
            return parsedDate = fn(parsedDate, val, locale) || parsedDate;
          });
        }

        parsedDate = matched ? parsedDate : undefined;
      }
    }

    if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
      config.errorHandler(new Error("Invalid date provided: ".concat(dateOrig)));
      return undefined;
    }

    if (timeless === true) parsedDate.setHours(0, 0, 0, 0);
    return parsedDate;
  };
};
function compareDates(date1, date2) {
  var timeless = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (timeless !== false) {
    return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
  }

  return date1.getTime() - date2.getTime();
}
var isBetween = function isBetween(ts, ts1, ts2) {
  return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
};
var duration = {
  DAY: 86400000
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

    if (hours === minHour && minutes === minMinutes && seconds < minSeconds) seconds = config.minDate.getSeconds();
  }

  if (config.maxDate !== undefined) {
    var maxHr = config.maxDate.getHours();
    var maxMinutes = config.maxDate.getMinutes();
    hours = Math.min(hours, maxHr);
    if (hours === maxHr) minutes = Math.min(maxMinutes, minutes);
    if (hours === maxHr && minutes === maxMinutes) seconds = config.maxDate.getSeconds();
  }

  return {
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

if (typeof Object.assign !== "function") {
  Object.assign = function (target) {
    if (!target) {
      throw TypeError("Cannot convert undefined or null to object");
    }

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var _loop = function _loop() {
      var source = _args[_i];

      if (source) {
        Object.keys(source).forEach(function (key) {
          return target[key] = source[key];
        });
      }
    };

    for (var _i = 0, _args = args; _i < _args.length; _i++) {
      _loop();
    }

    return target;
  };
}

var DEBOUNCED_CHANGE_MS = 300;

function FlatpickrInstance(element, instanceConfig) {
  var self = {
    config: Object.assign(Object.assign({}, defaults$1), flatpickr.defaultConfig),
    l10n: english
  };
  self.parseDate = createDateParser({
    config: self.config,
    l10n: self.l10n
  });
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
  self._createElement = createElement;
  self.destroy = destroy;
  self.isEnabled = isEnabled;
  self.jumpToDate = jumpToDate;
  self.open = open;
  self.redraw = redraw;
  self.set = set;
  self.setDate = setDate;
  self.toggle = toggle;

  function setupHelperFunctions() {
    self.utils = {
      getDaysInMonth: function getDaysInMonth() {
        var month = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : self.currentMonth;
        var yr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : self.currentYear;
        if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0)) return 29;
        return self.l10n.daysInMonth[month];
      }
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
    if (!self.isMobile) build();
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

  function bindToInstance(fn) {
    return fn.bind(self);
  }

  function setCalendarWidth() {
    var config = self.config;

    if (config.weekNumbers === false && config.showMonths === 1) {
      return;
    } else if (config.noCalendar !== true) {
      window.requestAnimationFrame(function () {
        if (self.calendarContainer !== undefined) {
          self.calendarContainer.style.visibility = "hidden";
          self.calendarContainer.style.display = "block";
        }

        if (self.daysContainer !== undefined) {
          var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
          self.daysContainer.style.width = daysWidth + "px";
          self.calendarContainer.style.width = daysWidth + (self.weekWrapper !== undefined ? self.weekWrapper.offsetWidth : 0) + "px";
          self.calendarContainer.style.removeProperty("visibility");
          self.calendarContainer.style.removeProperty("display");
        }
      });
    }
  }

  function updateTime(e) {
    if (self.selectedDates.length === 0) {
      var defaultDate = self.config.minDate === undefined || compareDates(new Date(), self.config.minDate) >= 0 ? new Date() : new Date(self.config.minDate.getTime());
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
    return hour % 12 + 12 * _int(amPM === self.l10n.amPM[1]);
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
    if (self.hourElement === undefined || self.minuteElement === undefined) return;
    var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24,
        minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60,
        seconds = self.secondElement !== undefined ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;

    if (self.amPM !== undefined) {
      hours = ampm2military(hours, self.amPM.textContent);
    }

    var limitMinHours = self.config.minTime !== undefined || self.config.minDate && self.minDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.minDate, true) === 0;
    var limitMaxHours = self.config.maxTime !== undefined || self.config.maxDate && self.maxDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.maxDate, true) === 0;

    if (limitMaxHours) {
      var maxTime = self.config.maxTime !== undefined ? self.config.maxTime : self.config.maxDate;
      hours = Math.min(hours, maxTime.getHours());
      if (hours === maxTime.getHours()) minutes = Math.min(minutes, maxTime.getMinutes());
      if (minutes === maxTime.getMinutes()) seconds = Math.min(seconds, maxTime.getSeconds());
    }

    if (limitMinHours) {
      var minTime = self.config.minTime !== undefined ? self.config.minTime : self.config.minDate;
      hours = Math.max(hours, minTime.getHours());
      if (hours === minTime.getHours() && minutes < minTime.getMinutes()) minutes = minTime.getMinutes();
      if (minutes === minTime.getMinutes()) seconds = Math.max(seconds, minTime.getSeconds());
    }

    setHours(hours, minutes, seconds);
  }

  function setHoursFromDate(dateObj) {
    var date = dateObj || self.latestSelectedDateObj;

    if (date) {
      setHours(date.getHours(), date.getMinutes(), date.getSeconds());
    }
  }

  function setHours(hours, minutes, seconds) {
    if (self.latestSelectedDateObj !== undefined) {
      self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
    }

    if (!self.hourElement || !self.minuteElement || self.isMobile) return;
    self.hourElement.value = pad(!self.config.time_24hr ? (12 + hours) % 12 + 12 * _int(hours % 12 === 0) : hours);
    self.minuteElement.value = pad(minutes);
    if (self.amPM !== undefined) self.amPM.textContent = self.l10n.amPM[_int(hours >= 12)];
    if (self.secondElement !== undefined) self.secondElement.value = pad(seconds);
  }

  function onYearInput(event) {
    var eventTarget = getEventTarget(event);
    var year = parseInt(eventTarget.value) + (event.delta || 0);

    if (year / 1000 > 1 || event.key === "Enter" && !/[^\d]/.test(year.toString())) {
      changeYear(year);
    }
  }

  function bind(element, event, handler, options) {
    if (event instanceof Array) return event.forEach(function (ev) {
      return bind(element, ev, handler, options);
    });
    if (element instanceof Array) return element.forEach(function (el) {
      return bind(el, event, handler, options);
    });
    element.addEventListener(event, handler, options);

    self._handlers.push({
      remove: function remove() {
        return element.removeEventListener(event, handler);
      }
    });
  }

  function triggerChange() {
    triggerEvent("onChange");
  }

  function bindEvents() {
    if (self.config.wrap) {
      ["open", "close", "toggle", "clear"].forEach(function (evt) {
        Array.prototype.forEach.call(self.element.querySelectorAll("[data-".concat(evt, "]")), function (el) {
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
    if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent)) bind(self.daysContainer, "mouseover", function (e) {
      if (self.config.mode === "range") onMouseOver(getEventTarget(e));
    });
    bind(window.document.body, "keydown", onKeyDown);
    if (!self.config.inline && !self.config["static"]) bind(window, "resize", debouncedResize);
    if (window.ontouchstart !== undefined) bind(window.document, "touchstart", documentClick);else bind(window.document, "mousedown", documentClick);
    bind(window.document, "focus", documentClick, {
      capture: true
    });

    if (self.config.clickOpens === true) {
      bind(self._input, "focus", self.open);
      bind(self._input, "click", self.open);
    }

    if (self.daysContainer !== undefined) {
      bind(self.monthNav, "click", onMonthNavClick);
      bind(self.monthNav, ["keyup", "increment"], onYearInput);
      bind(self.daysContainer, "click", selectDate);
    }

    if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined) {
      var selText = function selText(e) {
        return getEventTarget(e).select();
      };

      bind(self.timeContainer, ["increment"], updateTime);
      bind(self.timeContainer, "blur", updateTime, {
        capture: true
      });
      bind(self.timeContainer, "click", timeIncrement);
      bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
      if (self.secondElement !== undefined) bind(self.secondElement, "focus", function () {
        return self.secondElement && self.secondElement.select();
      });

      if (self.amPM !== undefined) {
        bind(self.amPM, "click", function (e) {
          updateTime(e);
          triggerChange();
        });
      }
    }

    if (self.config.allowInput) {
      bind(self._input, "blur", onBlur);
    }
  }

  function jumpToDate(jumpDate, triggerChange) {
    var jumpTo = jumpDate !== undefined ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate && self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);
    var oldYear = self.currentYear;
    var oldMonth = self.currentMonth;

    try {
      if (jumpTo !== undefined) {
        self.currentYear = jumpTo.getFullYear();
        self.currentMonth = jumpTo.getMonth();
      }
    } catch (e) {
      e.message = "Invalid date supplied: " + jumpTo;
      self.config.errorHandler(e);
    }

    if (triggerChange && self.currentYear !== oldYear) {
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }

    if (triggerChange && (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
      triggerEvent("onMonthChange");
    }

    self.redraw();
  }

  function timeIncrement(e) {
    var eventTarget = getEventTarget(e);
    if (~eventTarget.className.indexOf("arrow")) incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
  }

  function incrementNumInput(e, delta, inputElem) {
    var target = e && getEventTarget(e);
    var input = inputElem || target && target.parentNode && target.parentNode.firstChild;
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
        var _buildWeeks = buildWeeks(),
            weekWrapper = _buildWeeks.weekWrapper,
            weekNumbers = _buildWeeks.weekNumbers;

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
    var customAppend = self.config.appendTo !== undefined && self.config.appendTo.nodeType !== undefined;

    if (self.config.inline || self.config["static"]) {
      self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");

      if (self.config.inline) {
        if (!customAppend && self.element.parentNode) self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);else if (self.config.appendTo !== undefined) self.config.appendTo.appendChild(self.calendarContainer);
      }

      if (self.config["static"]) {
        var wrapper = createElement("div", "flatpickr-wrapper");
        if (self.element.parentNode) self.element.parentNode.insertBefore(wrapper, self.element);
        wrapper.appendChild(self.element);
        if (self.altInput) wrapper.appendChild(self.altInput);
        wrapper.appendChild(self.calendarContainer);
      }
    }

    if (!self.config["static"] && !self.config.inline) (self.config.appendTo !== undefined ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
  }

  function createDay(className, date, dayNumber, i) {
    var dateIsEnabled = isEnabled(date, true),
        dayElement = createElement("span", "flatpickr-day " + className, date.getDate().toString());
    dayElement.dateObj = date;
    dayElement.$i = i;
    dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));

    if (className.indexOf("hidden") === -1 && compareDates(date, self.now) === 0) {
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
          toggleClass$1(dayElement, "startRange", self.selectedDates[0] && compareDates(date, self.selectedDates[0], true) === 0);
          toggleClass$1(dayElement, "endRange", self.selectedDates[1] && compareDates(date, self.selectedDates[1], true) === 0);
          if (className === "nextMonthDay") dayElement.classList.add("inRange");
        }
      }
    } else {
      dayElement.classList.add("flatpickr-disabled");
    }

    if (self.config.mode === "range") {
      if (isDateInRange(date) && !isDateSelected(date)) dayElement.classList.add("inRange");
    }

    if (self.weekNumbers && self.config.showMonths === 1 && className !== "prevMonthDay" && dayNumber % 7 === 1) {
      self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
    }

    triggerEvent("onDayCreate", dayElement);
    return dayElement;
  }

  function focusOnDayElem(targetNode) {
    targetNode.focus();
    if (self.config.mode === "range") onMouseOver(targetNode);
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
        if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj)) return c;
      }
    }

    return undefined;
  }

  function getNextAvailableDay(current, delta) {
    var givenMonth = current.className.indexOf("Month") === -1 ? current.dateObj.getMonth() : self.currentMonth;
    var endMonth = delta > 0 ? self.config.showMonths : -1;
    var loopDelta = delta > 0 ? 1 : -1;

    for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
      var month = self.daysContainer.children[m];
      var startIndex = givenMonth - self.currentMonth === m ? current.$i + delta : delta < 0 ? month.children.length - 1 : 0;
      var numMonthDays = month.children.length;

      for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
        var c = month.children[i];
        if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj) && Math.abs(current.$i - i) >= Math.abs(delta)) return focusOnDayElem(c);
      }
    }

    self.changeMonth(loopDelta);
    focusOnDay(getFirstAvailableDay(loopDelta), 0);
    return undefined;
  }

  function focusOnDay(current, offset) {
    var dayFocused = isInView(document.activeElement || document.body);
    var startElem = current !== undefined ? current : dayFocused ? document.activeElement : self.selectedDateElem !== undefined && isInView(self.selectedDateElem) ? self.selectedDateElem : self.todayDateElem !== undefined && isInView(self.todayDateElem) ? self.todayDateElem : getFirstAvailableDay(offset > 0 ? 1 : -1);

    if (startElem === undefined) {
      self._input.focus();
    } else if (!dayFocused) {
      focusOnDayElem(startElem);
    } else {
      getNextAvailableDay(startElem, offset);
    }
  }

  function buildMonthDays(year, month) {
    var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
    var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12, year);
    var daysInMonth = self.utils.getDaysInMonth(month, year),
        days = window.document.createDocumentFragment(),
        isMultiMonth = self.config.showMonths > 1,
        prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay",
        nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
    var dayNumber = prevMonthDays + 1 - firstOfMonth,
        dayIndex = 0;

    for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
      days.appendChild(createDay(prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
    }

    for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
      days.appendChild(createDay("", new Date(year, month, dayNumber), dayNumber, dayIndex));
    }

    for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth && (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
      days.appendChild(createDay(nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
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
    if (self.weekNumbers) clearNode(self.weekNumbers);
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
    if (self.config.showMonths > 1 || self.config.monthSelectorType !== "dropdown") return;

    var shouldBuildMonth = function shouldBuildMonth(month) {
      if (self.config.minDate !== undefined && self.currentYear === self.config.minDate.getFullYear() && month < self.config.minDate.getMonth()) {
        return false;
      }

      return !(self.config.maxDate !== undefined && self.currentYear === self.config.maxDate.getFullYear() && month > self.config.maxDate.getMonth());
    };

    self.monthsDropdownContainer.tabIndex = -1;
    self.monthsDropdownContainer.innerHTML = "";

    for (var i = 0; i < 12; i++) {
      if (!shouldBuildMonth(i)) continue;
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

    if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
      monthElement = createElement("span", "cur-month");
    } else {
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

    var yearInput = createNumberInput("cur-year", {
      tabindex: "-1"
    });
    var yearElement = yearInput.getElementsByTagName("input")[0];
    yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);

    if (self.config.minDate) {
      yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
    }

    if (self.config.maxDate) {
      yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
      yearElement.disabled = !!self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
    }

    var currentMonth = createElement("div", "flatpickr-current-month");
    currentMonth.appendChild(monthElement);
    currentMonth.appendChild(yearInput);
    monthNavFragment.appendChild(currentMonth);
    container.appendChild(monthNavFragment);
    return {
      container: container,
      yearElement: yearElement,
      monthElement: monthElement
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
      get: function get() {
        return self.__hidePrevMonthArrow;
      },
      set: function set(bool) {
        if (self.__hidePrevMonthArrow !== bool) {
          toggleClass$1(self.prevMonthNav, "flatpickr-disabled", bool);
          self.__hidePrevMonthArrow = bool;
        }
      }
    });
    Object.defineProperty(self, "_hideNextMonthArrow", {
      get: function get() {
        return self.__hideNextMonthArrow;
      },
      set: function set(bool) {
        if (self.__hideNextMonthArrow !== bool) {
          toggleClass$1(self.nextMonthNav, "flatpickr-disabled", bool);
          self.__hideNextMonthArrow = bool;
        }
      }
    });
    self.currentYearElement = self.yearElements[0];
    updateNavigationCurrentMonth();
    return self.monthNav;
  }

  function buildTime() {
    self.calendarContainer.classList.add("hasTime");
    if (self.config.noCalendar) self.calendarContainer.classList.add("noCalendar");
    var defaults = getDefaultHours(self.config);
    self.timeContainer = createElement("div", "flatpickr-time");
    self.timeContainer.tabIndex = -1;
    var separator = createElement("span", "flatpickr-time-separator", ":");
    var hourInput = createNumberInput("flatpickr-hour", {
      "aria-label": self.l10n.hourAriaLabel
    });
    self.hourElement = hourInput.getElementsByTagName("input")[0];
    var minuteInput = createNumberInput("flatpickr-minute", {
      "aria-label": self.l10n.minuteAriaLabel
    });
    self.minuteElement = minuteInput.getElementsByTagName("input")[0];
    self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
    self.hourElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.time_24hr ? defaults.hours : military2ampm(defaults.hours));
    self.minuteElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : defaults.minutes);
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
    if (self.config.time_24hr) self.timeContainer.classList.add("time24hr");

    if (self.config.enableSeconds) {
      self.timeContainer.classList.add("hasSeconds");
      var secondInput = createNumberInput("flatpickr-second");
      self.secondElement = secondInput.getElementsByTagName("input")[0];
      self.secondElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getSeconds() : defaults.seconds);
      self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
      self.secondElement.setAttribute("min", "0");
      self.secondElement.setAttribute("max", "59");
      self.secondElement.setAttribute("maxlength", "2");
      self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
      self.timeContainer.appendChild(secondInput);
    }

    if (!self.config.time_24hr) {
      self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[_int((self.latestSelectedDateObj ? self.hourElement.value : self.config.defaultHour) > 11)]);
      self.amPM.title = self.l10n.toggleTitle;
      self.amPM.tabIndex = -1;
      self.timeContainer.appendChild(self.amPM);
    }

    return self.timeContainer;
  }

  function buildWeekdays() {
    if (!self.weekdayContainer) self.weekdayContainer = createElement("div", "flatpickr-weekdays");else clearNode(self.weekdayContainer);

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

    var weekdays = _toConsumableArray(self.l10n.weekdays.shorthand);

    if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
      weekdays = [].concat(_toConsumableArray(weekdays.splice(firstDayOfWeek, weekdays.length)), _toConsumableArray(weekdays.splice(0, firstDayOfWeek)));
    }

    for (var i = self.config.showMonths; i--;) {
      self.weekdayContainer.children[i].innerHTML = "\n      <span class='flatpickr-weekday'>\n        ".concat(weekdays.join("</span><span class='flatpickr-weekday'>"), "\n      </span>\n      ");
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
      weekNumbers: weekNumbers
    };
  }

  function changeMonth(value) {
    var isOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var delta = isOffset ? value : value - self.currentMonth;
    if (delta < 0 && self._hidePrevMonthArrow === true || delta > 0 && self._hideNextMonthArrow === true) return;
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

  function clear() {
    var triggerChangeEvent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var toInitial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    self.input.value = "";
    if (self.altInput !== undefined) self.altInput.value = "";
    if (self.mobileInput !== undefined) self.mobileInput.value = "";
    self.selectedDates = [];
    self.latestSelectedDateObj = undefined;

    if (toInitial === true) {
      self.currentYear = self._initialDate.getFullYear();
      self.currentMonth = self._initialDate.getMonth();
    }

    if (self.config.enableTime === true) {
      var _getDefaultHours = getDefaultHours(self.config),
          hours = _getDefaultHours.hours,
          minutes = _getDefaultHours.minutes,
          seconds = _getDefaultHours.seconds;

      setHours(hours, minutes, seconds);
    }

    self.redraw();
    if (triggerChangeEvent) triggerEvent("onChange");
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
    if (self.config !== undefined) triggerEvent("onDestroy");

    for (var i = self._handlers.length; i--;) {
      self._handlers[i].remove();
    }

    self._handlers = [];

    if (self.mobileInput) {
      if (self.mobileInput.parentNode) self.mobileInput.parentNode.removeChild(self.mobileInput);
      self.mobileInput = undefined;
    } else if (self.calendarContainer && self.calendarContainer.parentNode) {
      if (self.config["static"] && self.calendarContainer.parentNode) {
        var wrapper = self.calendarContainer.parentNode;
        wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);

        if (wrapper.parentNode) {
          while (wrapper.firstChild) {
            wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
          }

          wrapper.parentNode.removeChild(wrapper);
        }
      } else self.calendarContainer.parentNode.removeChild(self.calendarContainer);
    }

    if (self.altInput) {
      self.input.type = "text";
      if (self.altInput.parentNode) self.altInput.parentNode.removeChild(self.altInput);
      delete self.altInput;
    }

    if (self.input) {
      self.input.type = self.input._type;
      self.input.classList.remove("flatpickr-input");
      self.input.removeAttribute("readonly");
    }

    ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "monthsDropdownContainer", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(function (k) {
      try {
        delete self[k];
      } catch (_) {}
    });
  }

  function isCalendarElem(elem) {
    if (self.config.appendTo && self.config.appendTo.contains(elem)) return true;
    return self.calendarContainer.contains(elem);
  }

  function documentClick(e) {
    if (self.isOpen && !self.config.inline) {
      var eventTarget = getEventTarget(e);
      var isCalendarElement = isCalendarElem(eventTarget);
      var isInput = eventTarget === self.input || eventTarget === self.altInput || self.element.contains(eventTarget) || e.path && e.path.indexOf && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));
      var lostFocus = e.type === "blur" ? isInput && e.relatedTarget && !isCalendarElem(e.relatedTarget) : !isInput && !isCalendarElement && !isCalendarElem(e.relatedTarget);
      var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
        return elem.contains(eventTarget);
      });

      if (lostFocus && isIgnored) {
        if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined && self.input.value !== "" && self.input.value !== undefined) {
          updateTime();
        }

        self.close();

        if (self.config && self.config.mode === "range" && self.selectedDates.length === 1) {
          self.clear(false);
          self.redraw();
        }
      }
    }
  }

  function changeYear(newYear) {
    if (!newYear || self.config.minDate && newYear < self.config.minDate.getFullYear() || self.config.maxDate && newYear > self.config.maxDate.getFullYear()) return;
    var newYearNum = newYear,
        isNewYear = self.currentYear !== newYearNum;
    self.currentYear = newYearNum || self.currentYear;

    if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
      self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
    } else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
      self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
    }

    if (isNewYear) {
      self.redraw();
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
  }

  function isEnabled(date) {
    var timeless = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var _a;

    var dateToCheck = self.parseDate(date, undefined, timeless);
    if (self.config.minDate && dateToCheck && compareDates(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && dateToCheck && compareDates(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0) return false;
    if (!self.config.enable && self.config.disable.length === 0) return true;
    if (dateToCheck === undefined) return false;
    var bool = !!self.config.enable,
        array = (_a = self.config.enable) !== null && _a !== void 0 ? _a : self.config.disable;

    for (var i = 0, d; i < array.length; i++) {
      d = array[i];
      if (typeof d === "function" && d(dateToCheck)) return bool;else if (d instanceof Date && dateToCheck !== undefined && d.getTime() === dateToCheck.getTime()) return bool;else if (typeof d === "string") {
        var parsed = self.parseDate(d, undefined, true);
        return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
      } else if (_typeof$1(d) === "object" && dateToCheck !== undefined && d.from && d.to && dateToCheck.getTime() >= d.from.getTime() && dateToCheck.getTime() <= d.to.getTime()) return bool;
    }

    return !bool;
  }

  function isInView(elem) {
    if (self.daysContainer !== undefined) return elem.className.indexOf("hidden") === -1 && elem.className.indexOf("flatpickr-disabled") === -1 && self.daysContainer.contains(elem);
    return false;
  }

  function onBlur(e) {
    var isInput = e.target === self._input;

    if (isInput && (self.selectedDates.length > 0 || self._input.value.length > 0) && !(e.relatedTarget && isCalendarElem(e.relatedTarget))) {
      self.setDate(self._input.value, true, e.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
    }
  }

  function onKeyDown(e) {
    var eventTarget = getEventTarget(e);
    var isInput = self.config.wrap ? element.contains(eventTarget) : eventTarget === self._input;
    var allowInput = self.config.allowInput;
    var allowKeydown = self.isOpen && (!allowInput || !isInput);
    var allowInlineKeydown = self.config.inline && isInput && !allowInput;

    if (e.keyCode === 13 && isInput) {
      if (allowInput) {
        self.setDate(self._input.value, true, eventTarget === self.altInput ? self.config.altFormat : self.config.dateFormat);
        return eventTarget.blur();
      } else {
        self.open();
      }
    } else if (isCalendarElem(eventTarget) || allowKeydown || allowInlineKeydown) {
      var isTimeObj = !!self.timeContainer && self.timeContainer.contains(eventTarget);

      switch (e.keyCode) {
        case 13:
          if (isTimeObj) {
            e.preventDefault();
            updateTime();
            focusAndClose();
          } else selectDate(e);

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

            if (self.daysContainer !== undefined && (allowInput === false || document.activeElement && isInView(document.activeElement))) {
              var _delta = e.keyCode === 39 ? 1 : -1;

              if (!e.ctrlKey) focusOnDay(undefined, _delta);else {
                e.stopPropagation();
                changeMonth(_delta);
                focusOnDay(getFirstAvailableDay(1), 0);
              }
            }
          } else if (self.hourElement) self.hourElement.focus();

          break;

        case 38:
        case 40:
          e.preventDefault();
          var delta = e.keyCode === 40 ? 1 : -1;

          if (self.daysContainer && eventTarget.$i !== undefined || eventTarget === self.input || eventTarget === self.altInput) {
            if (e.ctrlKey) {
              e.stopPropagation();
              changeYear(self.currentYear - delta);
              focusOnDay(getFirstAvailableDay(1), 0);
            } else if (!isTimeObj) focusOnDay(undefined, delta * 7);
          } else if (eventTarget === self.currentYearElement) {
            changeYear(self.currentYear - delta);
          } else if (self.config.enableTime) {
            if (!isTimeObj && self.hourElement) self.hourElement.focus();
            updateTime(e);

            self._debouncedChange();
          }

          break;

        case 9:
          if (isTimeObj) {
            var elems = [self.hourElement, self.minuteElement, self.secondElement, self.amPM].concat(self.pluginElements).filter(function (x) {
              return x;
            });
            var i = elems.indexOf(eventTarget);

            if (i !== -1) {
              var target = elems[i + (e.shiftKey ? -1 : 1)];
              e.preventDefault();

              (target || self._input).focus();
            }
          } else if (!self.config.noCalendar && self.daysContainer && self.daysContainer.contains(eventTarget) && e.shiftKey) {
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

  function onMouseOver(elem) {
    if (self.selectedDates.length !== 1 || elem && (!elem.classList.contains("flatpickr-day") || elem.classList.contains("flatpickr-disabled"))) return;
    var hoverDate = elem ? elem.dateObj.getTime() : self.days.firstElementChild.dateObj.getTime(),
        initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(),
        rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()),
        rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
    var containsDisabled = false;
    var minRange = 0,
        maxRange = 0;

    for (var t = rangeStartDate; t < rangeEndDate; t += duration.DAY) {
      if (!isEnabled(new Date(t), true)) {
        containsDisabled = containsDisabled || t > rangeStartDate && t < rangeEndDate;
        if (t < initialDate && (!minRange || t > minRange)) minRange = t;else if (t > initialDate && (!maxRange || t < maxRange)) maxRange = t;
      }
    }

    for (var m = 0; m < self.config.showMonths; m++) {
      var month = self.daysContainer.children[m];

      var _loop = function _loop(i, l) {
        var dayElem = month.children[i],
            date = dayElem.dateObj;
        var timestamp = date.getTime();
        var outOfRange = minRange > 0 && timestamp < minRange || maxRange > 0 && timestamp > maxRange;

        if (outOfRange) {
          dayElem.classList.add("notAllowed");
          ["inRange", "startRange", "endRange"].forEach(function (c) {
            dayElem.classList.remove(c);
          });
          return "continue";
        } else if (containsDisabled && !outOfRange) return "continue";

        ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
          dayElem.classList.remove(c);
        });

        if (elem !== undefined) {
          elem.classList.add(hoverDate <= self.selectedDates[0].getTime() ? "startRange" : "endRange");
          if (initialDate < hoverDate && timestamp === initialDate) dayElem.classList.add("startRange");else if (initialDate > hoverDate && timestamp === initialDate) dayElem.classList.add("endRange");
          if (timestamp >= minRange && (maxRange === 0 || timestamp <= maxRange) && isBetween(timestamp, initialDate, hoverDate)) dayElem.classList.add("inRange");
        }
      };

      for (var i = 0, l = month.children.length; i < l; i++) {
        var _ret = _loop(i, l);

        if (_ret === "continue") continue;
      }
    }
  }

  function onResize() {
    if (self.isOpen && !self.config["static"] && !self.config.inline) positionCalendar();
  }

  function open(e) {
    var positionElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : self._positionElement;

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
    } else if (self._input.disabled || self.config.inline) {
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
      if (self.config.allowInput === false && (e === undefined || !self.timeContainer.contains(e.relatedTarget))) {
        setTimeout(function () {
          return self.hourElement.select();
        }, 50);
      }
    }
  }

  function minMaxDateSetter(type) {
    return function (date) {
      var dateObj = self.config["_".concat(type, "Date")] = self.parseDate(date, self.config.dateFormat);
      var inverseDateObj = self.config["_".concat(type === "min" ? "max" : "min", "Date")];

      if (dateObj !== undefined) {
        self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] = dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
      }

      if (self.selectedDates) {
        self.selectedDates = self.selectedDates.filter(function (d) {
          return isEnabled(d);
        });
        if (!self.selectedDates.length && type === "min") setHoursFromDate(dateObj);
        updateValue();
      }

      if (self.daysContainer) {
        redraw();
        if (dateObj !== undefined) self.currentYearElement[type] = dateObj.getFullYear().toString();else self.currentYearElement.removeAttribute(type);
        self.currentYearElement.disabled = !!inverseDateObj && dateObj !== undefined && inverseDateObj.getFullYear() === dateObj.getFullYear();
      }
    };
  }

  function parseConfig() {
    var boolOpts = ["wrap", "weekNumbers", "allowInput", "allowInvalidPreload", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"];
    var userConfig = Object.assign(Object.assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);
    var formats = {};
    self.config.parseDate = userConfig.parseDate;
    self.config.formatDate = userConfig.formatDate;
    Object.defineProperty(self.config, "enable", {
      get: function get() {
        return self.config._enable;
      },
      set: function set(dates) {
        self.config._enable = parseDateRules(dates);
      }
    });
    Object.defineProperty(self.config, "disable", {
      get: function get() {
        return self.config._disable;
      },
      set: function set(dates) {
        self.config._disable = parseDateRules(dates);
      }
    });
    var timeMode = userConfig.mode === "time";

    if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
      var defaultDateFormat = flatpickr.defaultConfig.dateFormat || defaults$1.dateFormat;
      formats.dateFormat = userConfig.noCalendar || timeMode ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
    }

    if (userConfig.altInput && (userConfig.enableTime || timeMode) && !userConfig.altFormat) {
      var defaultAltFormat = flatpickr.defaultConfig.altFormat || defaults$1.altFormat;
      formats.altFormat = userConfig.noCalendar || timeMode ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : defaultAltFormat + " h:i".concat(userConfig.enableSeconds ? ":S" : "", " K");
    }

    Object.defineProperty(self.config, "minDate", {
      get: function get() {
        return self.config._minDate;
      },
      set: minMaxDateSetter("min")
    });
    Object.defineProperty(self.config, "maxDate", {
      get: function get() {
        return self.config._maxDate;
      },
      set: minMaxDateSetter("max")
    });

    var minMaxTimeSetter = function minMaxTimeSetter(type) {
      return function (val) {
        self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
      };
    };

    Object.defineProperty(self.config, "minTime", {
      get: function get() {
        return self.config._minTime;
      },
      set: minMaxTimeSetter("min")
    });
    Object.defineProperty(self.config, "maxTime", {
      get: function get() {
        return self.config._maxTime;
      },
      set: minMaxTimeSetter("max")
    });

    if (userConfig.mode === "time") {
      self.config.noCalendar = true;
      self.config.enableTime = true;
    }

    Object.assign(self.config, formats, userConfig);

    for (var i = 0; i < boolOpts.length; i++) {
      self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === "true";
    }

    HOOKS.filter(function (hook) {
      return self.config[hook] !== undefined;
    }).forEach(function (hook) {
      self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);
    });
    self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    for (var _i = 0; _i < self.config.plugins.length; _i++) {
      var pluginConf = self.config.plugins[_i](self) || {};

      for (var key in pluginConf) {
        if (HOOKS.indexOf(key) > -1) {
          self.config[key] = arrayify(pluginConf[key]).map(bindToInstance).concat(self.config[key]);
        } else if (typeof userConfig[key] === "undefined") self.config[key] = pluginConf[key];
      }
    }

    if (!userConfig.altInputClass) {
      self.config.altInputClass = getInputElem().className + " " + self.config.altInputClass;
    }

    triggerEvent("onParseConfig");
  }

  function getInputElem() {
    return self.config.wrap ? element.querySelector("[data-input]") : element;
  }

  function setupLocale() {
    if (_typeof$1(self.config.locale) !== "object" && typeof flatpickr.l10ns[self.config.locale] === "undefined") self.config.errorHandler(new Error("flatpickr: invalid locale ".concat(self.config.locale)));
    self.l10n = Object.assign(Object.assign({}, flatpickr.l10ns["default"]), _typeof$1(self.config.locale) === "object" ? self.config.locale : self.config.locale !== "default" ? flatpickr.l10ns[self.config.locale] : undefined);
    tokenRegex.K = "(".concat(self.l10n.amPM[0], "|").concat(self.l10n.amPM[1], "|").concat(self.l10n.amPM[0].toLowerCase(), "|").concat(self.l10n.amPM[1].toLowerCase(), ")");
    var userConfig = Object.assign(Object.assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));

    if (userConfig.time_24hr === undefined && flatpickr.defaultConfig.time_24hr === undefined) {
      self.config.time_24hr = self.l10n.time_24hr;
    }

    self.formatDate = createDateFormatter(self);
    self.parseDate = createDateParser({
      config: self.config,
      l10n: self.l10n
    });
  }

  function positionCalendar(customPositionElement) {
    if (typeof self.config.position === "function") {
      return void self.config.position(self, customPositionElement);
    }

    if (self.calendarContainer === undefined) return;
    triggerEvent("onPreCalendarPosition");
    var positionElement = customPositionElement || self._positionElement;
    var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, function (acc, child) {
      return acc + child.offsetHeight;
    }, 0),
        calendarWidth = self.calendarContainer.offsetWidth,
        configPos = self.config.position.split(" "),
        configPosVertical = configPos[0],
        configPosHorizontal = configPos.length > 1 ? configPos[1] : null,
        inputBounds = positionElement.getBoundingClientRect(),
        distanceFromBottom = window.innerHeight - inputBounds.bottom,
        showOnTop = configPosVertical === "above" || configPosVertical !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
    var top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
    toggleClass$1(self.calendarContainer, "arrowTop", !showOnTop);
    toggleClass$1(self.calendarContainer, "arrowBottom", showOnTop);
    if (self.config.inline) return;
    var left = window.pageXOffset + inputBounds.left;
    var isCenter = false;
    var isRight = false;

    if (configPosHorizontal === "center") {
      left -= (calendarWidth - inputBounds.width) / 2;
      isCenter = true;
    } else if (configPosHorizontal === "right") {
      left -= calendarWidth - inputBounds.width;
      isRight = true;
    }

    toggleClass$1(self.calendarContainer, "arrowLeft", !isCenter && !isRight);
    toggleClass$1(self.calendarContainer, "arrowCenter", isCenter);
    toggleClass$1(self.calendarContainer, "arrowRight", isRight);
    var right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
    var rightMost = left + calendarWidth > window.document.body.offsetWidth;
    var centerMost = right + calendarWidth > window.document.body.offsetWidth;
    toggleClass$1(self.calendarContainer, "rightMost", rightMost);
    if (self.config["static"]) return;
    self.calendarContainer.style.top = "".concat(top, "px");

    if (!rightMost) {
      self.calendarContainer.style.left = "".concat(left, "px");
      self.calendarContainer.style.right = "auto";
    } else if (!centerMost) {
      self.calendarContainer.style.left = "auto";
      self.calendarContainer.style.right = "".concat(right, "px");
    } else {
      var doc = getDocumentStyleSheet();
      if (doc === undefined) return;
      var bodyWidth = window.document.body.offsetWidth;
      var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
      var centerBefore = ".flatpickr-calendar.centerMost:before";
      var centerAfter = ".flatpickr-calendar.centerMost:after";
      var centerIndex = doc.cssRules.length;
      var centerStyle = "{left:".concat(inputBounds.left, "px;right:auto;}");
      toggleClass$1(self.calendarContainer, "rightMost", false);
      toggleClass$1(self.calendarContainer, "centerMost", true);
      doc.insertRule("".concat(centerBefore, ",").concat(centerAfter).concat(centerStyle), centerIndex);
      self.calendarContainer.style.left = "".concat(centerLeft, "px");
      self.calendarContainer.style.right = "auto";
    }
  }

  function getDocumentStyleSheet() {
    var editableSheet = null;

    for (var i = 0; i < document.styleSheets.length; i++) {
      var sheet = document.styleSheets[i];

      try {
        sheet.cssRules;
      } catch (err) {
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
    if (self.config.noCalendar || self.isMobile) return;
    buildMonthSwitch();
    updateNavigationCurrentMonth();
    buildDays();
  }

  function focusAndClose() {
    self._input.focus();

    if (window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== undefined) {
      setTimeout(self.close, 0);
    } else {
      self.close();
    }
  }

  function selectDate(e) {
    e.preventDefault();
    e.stopPropagation();

    var isSelectable = function isSelectable(day) {
      return day.classList && day.classList.contains("flatpickr-day") && !day.classList.contains("flatpickr-disabled") && !day.classList.contains("notAllowed");
    };

    var t = findParent(getEventTarget(e), isSelectable);
    if (t === undefined) return;
    var target = t;
    var selectedDate = self.latestSelectedDateObj = new Date(target.dateObj.getTime());
    var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth || selectedDate.getMonth() > self.currentMonth + self.config.showMonths - 1) && self.config.mode !== "range";
    self.selectedDateElem = target;
    if (self.config.mode === "single") self.selectedDates = [selectedDate];else if (self.config.mode === "multiple") {
      var selectedIndex = isDateSelected(selectedDate);
      if (selectedIndex) self.selectedDates.splice(parseInt(selectedIndex), 1);else self.selectedDates.push(selectedDate);
    } else if (self.config.mode === "range") {
      if (self.selectedDates.length === 2) {
        self.clear(false, false);
      }

      self.latestSelectedDateObj = selectedDate;
      self.selectedDates.push(selectedDate);
      if (compareDates(selectedDate, self.selectedDates[0], true) !== 0) self.selectedDates.sort(function (a, b) {
        return a.getTime() - b.getTime();
      });
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
    if (!shouldChangeMonth && self.config.mode !== "range" && self.config.showMonths === 1) focusOnDayElem(target);else if (self.selectedDateElem !== undefined && self.hourElement === undefined) {
      self.selectedDateElem && self.selectedDateElem.focus();
    }
    if (self.hourElement !== undefined) self.hourElement !== undefined && self.hourElement.focus();

    if (self.config.closeOnSelect) {
      var single = self.config.mode === "single" && !self.config.enableTime;
      var range = self.config.mode === "range" && self.selectedDates.length === 2 && !self.config.enableTime;

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
    clickOpens: [function () {
      if (self.config.clickOpens === true) {
        bind(self._input, "focus", self.open);
        bind(self._input, "click", self.open);
      } else {
        self._input.removeEventListener("focus", self.open);

        self._input.removeEventListener("click", self.open);
      }
    }]
  };

  function set(option, value) {
    if (option !== null && _typeof$1(option) === "object") {
      Object.assign(self.config, option);

      for (var key in option) {
        if (CALLBACKS[key] !== undefined) CALLBACKS[key].forEach(function (x) {
          return x();
        });
      }
    } else {
      self.config[option] = value;
      if (CALLBACKS[option] !== undefined) CALLBACKS[option].forEach(function (x) {
        return x();
      });else if (HOOKS.indexOf(option) > -1) self.config[option] = arrayify(value);
    }

    self.redraw();
    updateValue(true);
  }

  function setSelectedDate(inputDate, format) {
    var dates = [];
    if (inputDate instanceof Array) dates = inputDate.map(function (d) {
      return self.parseDate(d, format);
    });else if (inputDate instanceof Date || typeof inputDate === "number") dates = [self.parseDate(inputDate, format)];else if (typeof inputDate === "string") {
      switch (self.config.mode) {
        case "single":
        case "time":
          dates = [self.parseDate(inputDate, format)];
          break;

        case "multiple":
          dates = inputDate.split(self.config.conjunction).map(function (date) {
            return self.parseDate(date, format);
          });
          break;

        case "range":
          dates = inputDate.split(self.l10n.rangeSeparator).map(function (date) {
            return self.parseDate(date, format);
          });
          break;
      }
    } else self.config.errorHandler(new Error("Invalid date supplied: ".concat(JSON.stringify(inputDate))));
    self.selectedDates = self.config.allowInvalidPreload ? dates : dates.filter(function (d) {
      return d instanceof Date && isEnabled(d, false);
    });
    if (self.config.mode === "range") self.selectedDates.sort(function (a, b) {
      return a.getTime() - b.getTime();
    });
  }

  function setDate(date) {
    var triggerChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : self.config.dateFormat;
    if (date !== 0 && !date || date instanceof Array && date.length === 0) return self.clear(triggerChange);
    setSelectedDate(date, format);
    self.latestSelectedDateObj = self.selectedDates[self.selectedDates.length - 1];
    self.redraw();
    jumpToDate(undefined, triggerChange);
    setHoursFromDate();

    if (self.selectedDates.length === 0) {
      self.clear(false);
    }

    updateValue(triggerChange);
    if (triggerChange) triggerEvent("onChange");
  }

  function parseDateRules(arr) {
    return arr.slice().map(function (rule) {
      if (typeof rule === "string" || typeof rule === "number" || rule instanceof Date) {
        return self.parseDate(rule, undefined, true);
      } else if (rule && _typeof$1(rule) === "object" && rule.from && rule.to) return {
        from: self.parseDate(rule.from, undefined),
        to: self.parseDate(rule.to, undefined)
      };

      return rule;
    }).filter(function (x) {
      return x;
    });
  }

  function setupDates() {
    self.selectedDates = [];
    self.now = self.parseDate(self.config.now) || new Date();
    var preloadedDate = self.config.defaultDate || ((self.input.nodeName === "INPUT" || self.input.nodeName === "TEXTAREA") && self.input.placeholder && self.input.value === self.input.placeholder ? null : self.input.value);
    if (preloadedDate) setSelectedDate(preloadedDate, self.config.dateFormat);
    self._initialDate = self.selectedDates.length > 0 ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now.getTime() ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now.getTime() ? self.config.maxDate : self.now;
    self.currentYear = self._initialDate.getFullYear();
    self.currentMonth = self._initialDate.getMonth();
    if (self.selectedDates.length > 0) self.latestSelectedDateObj = self.selectedDates[0];
    if (self.config.minTime !== undefined) self.config.minTime = self.parseDate(self.config.minTime, "H:i");
    if (self.config.maxTime !== undefined) self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
    self.minDateHasTime = !!self.config.minDate && (self.config.minDate.getHours() > 0 || self.config.minDate.getMinutes() > 0 || self.config.minDate.getSeconds() > 0);
    self.maxDateHasTime = !!self.config.maxDate && (self.config.maxDate.getHours() > 0 || self.config.maxDate.getMinutes() > 0 || self.config.maxDate.getSeconds() > 0);
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
      if (!self.config["static"] && self.input.parentNode) self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
    }

    if (!self.config.allowInput) self._input.setAttribute("readonly", "readonly");
    self._positionElement = self.config.positionElement || self._input;
  }

  function setupMobile() {
    var inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";
    self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
    self.mobileInput.tabIndex = 1;
    self.mobileInput.type = inputType;
    self.mobileInput.disabled = self.input.disabled;
    self.mobileInput.required = self.input.required;
    self.mobileInput.placeholder = self.input.placeholder;
    self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";

    if (self.selectedDates.length > 0) {
      self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
    }

    if (self.config.minDate) self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
    if (self.config.maxDate) self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
    if (self.input.getAttribute("step")) self.mobileInput.step = String(self.input.getAttribute("step"));
    self.input.type = "hidden";
    if (self.altInput !== undefined) self.altInput.type = "hidden";

    try {
      if (self.input.parentNode) self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
    } catch (_a) {}

    bind(self.mobileInput, "change", function (e) {
      self.setDate(getEventTarget(e).value, false, self.mobileFormatStr);
      triggerEvent("onChange");
      triggerEvent("onClose");
    });
  }

  function toggle(e) {
    if (self.isOpen === true) return self.close();
    self.open(e);
  }

  function triggerEvent(event, data) {
    if (self.config === undefined) return;
    var hooks = self.config[event];

    if (hooks !== undefined && hooks.length > 0) {
      for (var i = 0; hooks[i] && i < hooks.length; i++) {
        hooks[i](self.selectedDates, self.input.value, self, data);
      }
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
      if (compareDates(self.selectedDates[i], date) === 0) return "" + i;
    }

    return false;
  }

  function isDateInRange(date) {
    if (self.config.mode !== "range" || self.selectedDates.length < 2) return false;
    return compareDates(date, self.selectedDates[0]) >= 0 && compareDates(date, self.selectedDates[1]) <= 0;
  }

  function updateNavigationCurrentMonth() {
    if (self.config.noCalendar || self.isMobile || !self.monthNav) return;
    self.yearElements.forEach(function (yearElement, i) {
      var d = new Date(self.currentYear, self.currentMonth, 1);
      d.setMonth(self.currentMonth + i);

      if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
        self.monthElements[i].textContent = monthToStr(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
      } else {
        self.monthsDropdownContainer.value = d.getMonth().toString();
      }

      yearElement.value = d.getFullYear().toString();
    });
    self._hidePrevMonthArrow = self.config.minDate !== undefined && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());
    self._hideNextMonthArrow = self.config.maxDate !== undefined && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
  }

  function getDateStr(format) {
    return self.selectedDates.map(function (dObj) {
      return self.formatDate(dObj, format);
    }).filter(function (d, i, arr) {
      return self.config.mode !== "range" || self.config.enableTime || arr.indexOf(d) === i;
    }).join(self.config.mode !== "range" ? self.config.conjunction : self.l10n.rangeSeparator);
  }

  function updateValue() {
    var triggerChange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    if (self.mobileInput !== undefined && self.mobileFormatStr) {
      self.mobileInput.value = self.latestSelectedDateObj !== undefined ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
    }

    self.input.value = getDateStr(self.config.dateFormat);

    if (self.altInput !== undefined) {
      self.altInput.value = getDateStr(self.config.altFormat);
    }

    if (triggerChange !== false) triggerEvent("onValueUpdate");
  }

  function onMonthNavClick(e) {
    var eventTarget = getEventTarget(e);
    var isPrevMonth = self.prevMonthNav.contains(eventTarget);
    var isNextMonth = self.nextMonthNav.contains(eventTarget);

    if (isPrevMonth || isNextMonth) {
      changeMonth(isPrevMonth ? -1 : 1);
    } else if (self.yearElements.indexOf(eventTarget) >= 0) {
      eventTarget.select();
    } else if (eventTarget.classList.contains("arrowUp")) {
      self.changeYear(self.currentYear + 1);
    } else if (eventTarget.classList.contains("arrowDown")) {
      self.changeYear(self.currentYear - 1);
    }
  }

  function timeWrapper(e) {
    e.preventDefault();
    var isKeyDown = e.type === "keydown",
        eventTarget = getEventTarget(e),
        input = eventTarget;

    if (self.amPM !== undefined && eventTarget === self.amPM) {
      self.amPM.textContent = self.l10n.amPM[_int(self.amPM.textContent === self.l10n.amPM[0])];
    }

    var min = parseFloat(input.getAttribute("min")),
        max = parseFloat(input.getAttribute("max")),
        step = parseFloat(input.getAttribute("step")),
        curValue = parseInt(input.value, 10),
        delta = e.delta || (isKeyDown ? e.which === 38 ? 1 : -1 : 0);
    var newValue = curValue + step * delta;

    if (typeof input.value !== "undefined" && input.value.length === 2) {
      var isHourElem = input === self.hourElement,
          isMinuteElem = input === self.minuteElement;

      if (newValue < min) {
        newValue = max + newValue + _int(!isHourElem) + (_int(isHourElem) && _int(!self.amPM));
        if (isMinuteElem) incrementNumInput(undefined, -1, self.hourElement);
      } else if (newValue > max) {
        newValue = input === self.hourElement ? newValue - max - _int(!self.amPM) : min;
        if (isMinuteElem) incrementNumInput(undefined, 1, self.hourElement);
      }

      if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) {
        self.amPM.textContent = self.l10n.amPM[_int(self.amPM.textContent === self.l10n.amPM[0])];
      }

      input.value = pad(newValue);
    }
  }

  init();
  return self;
}

function _flatpickr(nodeList, config) {
  var nodes = Array.prototype.slice.call(nodeList).filter(function (x) {
    return x instanceof HTMLElement;
  });
  var instances = [];

  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];

    try {
      if (node.getAttribute("data-fp-omit") !== null) continue;

      if (node._flatpickr !== undefined) {
        node._flatpickr.destroy();

        node._flatpickr = undefined;
      }

      node._flatpickr = FlatpickrInstance(node, config || {});
      instances.push(node._flatpickr);
    } catch (e) {
      console.error(e);
    }
  }

  return instances.length === 1 ? instances[0] : instances;
}

if (typeof HTMLElement !== "undefined" && typeof HTMLCollection !== "undefined" && typeof NodeList !== "undefined") {
  HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
    return _flatpickr(this, config);
  };

  HTMLElement.prototype.flatpickr = function (config) {
    return _flatpickr([this], config);
  };
}

var flatpickr = function flatpickr(selector, config) {
  if (typeof selector === "string") {
    return _flatpickr(window.document.querySelectorAll(selector), config);
  } else if (selector instanceof Node) {
    return _flatpickr([selector], config);
  } else {
    return _flatpickr(selector, config);
  }
};

flatpickr.defaultConfig = {};
flatpickr.l10ns = {
  en: Object.assign({}, english),
  "default": Object.assign({}, english)
};

flatpickr.localize = function (l10n) {
  flatpickr.l10ns["default"] = Object.assign(Object.assign({}, flatpickr.l10ns["default"]), l10n);
};

flatpickr.setDefaults = function (config) {
  flatpickr.defaultConfig = Object.assign(Object.assign({}, flatpickr.defaultConfig), config);
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
    }
  },
  setup: function setup(props, context) {
    var _toRefs = toRefs(props),
        id = _toRefs.id,
        options = _toRefs.options,
        value = _toRefs.value; // ============ DEPENDENCIES ============


    var _useElementComponent = base$S(props, context),
        el$ = _useElementComponent.el$,
        form$ = _useElementComponent.form$,
        classes = _useElementComponent.classes,
        templates = _useElementComponent.templates,
        theme = _useElementComponent.theme,
        defaultClasses = _useElementComponent.defaultClasses,
        mainClass = _useElementComponent.mainClass; // ================ DATA ================

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

    var input = ref(null); // ============== COMPITED ==============

    /**
     * The current `options.mode`.
     * 
     * @type {string}
     */

    var mode = computed(function () {
      return options.value.mode || 'single';
    });
    /**
     * The flatpickr configuration object. Can be extended via [`options`](#options) with [flatpickr options](https://flatpickr.js.org/options/).
     * 
     * @type {object}
     */

    var config = computed(function () {
      var config = {};

      _$1.each(options.value, function (val, option) {
        if (val !== null && val !== undefined) {
          config[option] = val;
        }
      }); // Append the form to main form instead of end of the body
      // Update: Experimental removal, because enter was disabled
      // when appended to form config.appendTo = this.form$.$refs.form$
      // according to:
      // https://github.com/flatpickr/flatpickr/issues/1019


      config["static"] = true;
      return config;
    }); // =============== METHODS ==============

    /**
     * Emits `change` event.
     * 
     * @param {array|Date} value* the value to emit with change
     * @returns {void}
     * @private
     */

    var update = function update(val) {
      context.emit('change', mode.value == 'single' ? val[0] || null : val);
    };
    /**
     * Sets's the datepicker input parent's `id` attribute.
     * 
     * @returns {void}
     * @private
     */


    var setDatepickerId = function setDatepickerId() {
      datepicker$.value.input.parentElement.id = 'datepicker-' + id.value;
    }; // ============== WATCHERS ==============


    watch(value, function (n, o) {
      datepicker$.value.setDate(n, false);
    });
    watch(id, function (n, o) {
      setDatepickerId();
    }, {
      immediate: false
    });
    watch(options, function (n, o) {
      _$1.each(config.value, function (val, option) {
        datepicker$.value.set(option, val);
      });
    }, {
      deep: true
    }); // ================ HOOKS ===============

    onMounted(function () {
      datepicker$.value = flatpickr(input.value, Object.assign({}, config.value, {
        onChange: function onChange(val) {
          update(val);
        },
        onClose: function onClose(val) {
          val = mode.value == 'range' && val.length < 2 ? [] : val;
          update(val);
        },
        // creating a date object from a string date provided in displayFormat (to value)
        parseDate: function parseDate(dateStr, format) {
          return moment(dateStr, format, true).toDate();
        },
        // creating a date string according to displayFormat (to display)
        formatDate: function formatDate(date, format) {
          return moment(date).format(format);
        }
      }));

      if (datepicker$.value.calendarContainer) {
        if (typeof classes.value.calendarContainer !== 'string' || classes.value.calendarContainer.length > 0) datepicker$.value.calendarContainer.classList.add(classes.value.calendarContainer);
      }

      setDatepickerId();

      if (value.value !== null) {
        datepicker$.value.setDate(value.value, false);
      }
    }); // // Required because if static == true the picker does
    // // not close properly when clicking outside of it.
    // document.addEventListener('click', () => {
    //   if(clickedOutsideElement('datepicker-' + this.id)) {
    //     if (this.datepicker$.isOpen) {
    //       this.datepicker$.close()
    //     }
    //   }
    // })

    return {
      el$: el$,
      form$: form$,
      theme: theme,
      classes: classes,
      defaultClasses: defaultClasses,
      mainClass: mainClass,
      templates: templates,
      datepicker$: datepicker$,
      input: input,
      config: config,
      mode: mode,
      update: update
    };
  }
};

var EditorWrapper = {
  name: 'EditorWrapper',
  emits: ['input', 'alert', 'error'],
  props: {
    value: {
      required: false,
      "default": null
    },
    placeholder: {
      required: false,
      type: [String, Number],
      "default": null
    },
    name: {
      required: false,
      type: [String, Number],
      "default": null
    },
    id: {
      required: false,
      type: [String, Number],
      "default": null
    },
    accept: {
      required: false,
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    acceptMimes: {
      required: false,
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    endpoint: {
      required: false,
      type: String,
      "default": null
    },
    method: {
      required: false,
      type: String,
      "default": 'post'
    },
    disabled: {
      required: false,
      type: Boolean,
      "default": false
    }
  },
  setup: function setup(props, context) {
    var _toRefs = toRefs(props),
        value = _toRefs.value,
        disabled = _toRefs.disabled,
        acceptMimes = _toRefs.acceptMimes,
        accept = _toRefs.accept,
        endpoint = _toRefs.endpoint,
        method = _toRefs.method; // ============ DEPENDENCIES ============


    var _useElementComponent = base$S(props, context),
        el$ = _useElementComponent.el$,
        form$ = _useElementComponent.form$,
        classes = _useElementComponent.classes,
        templates = _useElementComponent.templates,
        theme = _useElementComponent.theme; // ================ DATA ================

    /**
     * The [`Trix`](https://github.com/basecamp/trix) instance.
     * 
     * @type {HTMLElement}
     * @default null
     */


    var editor$ = ref(null); // =============== METHODS ==============

    /**
     * Updates the value of editor.
     * 
     * @param {string} value* the value to update with
     * @returns {void}
     */

    var update = function update(val) {
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


    var setOption = function setOption(key, val) {
      editor$.value[key] = val;
    };
    /**
     * Handles `change` event.
     * 
     * @returns {void}
     * @private
     */


    var handleChange = function handleChange() {
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


    var handleFileAccept = function handleFileAccept(e) {
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


    var handleAttachmentAdd = function handleAttachmentAdd(e) {
      if (!e.attachment.file) {
        return;
      }

      if (!endpoint.value) {
        throw new Error('Property `endpoint` must be defined to upload');
      }

      var data = new FormData();
      data.append('Content-Type', e.attachment.file.type);
      data.append('file', e.attachment.file);
      el$.value.$vueform.services.axios[method.value](endpoint.value, data, {
        onUploadProgress: function onUploadProgress(progress) {
          e.attachment.setUploadProgress(Math.round(progress.loaded * 100 / progress.total));
        }
      }).then(function (response) {
        return e.attachment.setAttributes({
          url: response.data.url,
          href: response.data.href
        });
      })["catch"](function (error) {
        context.emit('error', error);
      });
    }; // ============== WATCHERS ==============


    watch(disabled, function (val) {
      editor$.value.contentEditable = !val;
    }); // ================ HOOKS ===============

    onMounted(function () {
      if (disabled.value) {
        editor$.value.contentEditable = false;
      }
    });
    return {
      el$: el$,
      form$: form$,
      theme: theme,
      classes: classes,
      templates: templates,
      editor$: editor$,
      update: update,
      setOption: setOption,
      handleChange: handleChange,
      handleFileAccept: handleFileAccept,
      handleAttachmentAdd: handleAttachmentAdd
    };
  }
};

var base$R = function base(props, context, dependencies) {
  var _toRefs = toRefs(props),
      label = _toRefs.label; // ============ DEPENDENCIES ============


  var form$ = dependencies.form$;
  var el$ = dependencies.el$; // ============== COMPUTED ==============

  /**
   * Whether the element has a [`label`](#option-label) option, a [#label](#slot-label) slot or `Vueform` component's [`forceLabels`](vueform#option-force-labels) option is `true`.
   * 
   * @type {boolean}
   * 
   */

  var hasLabel = computed(function () {
    var _el$$value$$slots, _el$$value$$scopedSlo;

    return !!(form$.value.options.forceLabels || label.value || el$.value.slots.label || (_el$$value$$slots = el$.value.$slots) !== null && _el$$value$$slots !== void 0 && _el$$value$$slots.label || context.expose === undefined && (_el$$value$$scopedSlo = el$.value.$scopedSlots) !== null && _el$$value$$scopedSlo !== void 0 && _el$$value$$scopedSlo.label);
  });
  return {
    hasLabel: hasLabel
  };
};

var base$Q = function base(props, context, dependencies) {
  var _toRefs = toRefs(props),
      columns = _toRefs.columns; // ============ DEPENDENCIES ============


  var form$ = dependencies.form$;
  var theme = dependencies.theme;
  var hasLabel = dependencies.hasLabel; // ============== COMPUTED ==============

  /**
   * Calulated column sizes and classes for the element.
   * 
   * @type {object}
   * @private
   */

  var columnsClasses = computed(function () {
    return new form$.value.$vueform.services.columns(columns.value, form$.value.options.columns, form$.value.$vueform.config.columns, hasLabel.value, theme.value.columns).classes;
  });
  return {
    columnsClasses: columnsClasses
  };
};

var base$P = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============
  var available = dependencies.available;
  var active = dependencies.active; // ================ DATA ================

  /**
   * Whether the element was hidden programmatically with [`show()`](#method-show) or [`hide()`](#method-hide) methods.
   * 
   * @type {boolean} 
   * @default false
   */

  var hidden = ref(false); // ============== COMPUTED ==============

  /**
   * Whether the element is visible. It's `false` when `available` or `active` is `false` or `hidden` is `true`.
   * 
   * @type {boolean} 
   */

  var visible = computed(function () {
    return available.value && !hidden.value && active.value;
  }); // =============== METHODS ==============

  /**
   * Hides the element.
   *
   * @returns {void}
   */

  var hide = function hide() {
    hidden.value = true;
  };
  /**
   * Shows the element if it was hidden with [`hide()`](#hide) method.
   *
   * @returns {void}
   */


  var show = function show() {
    hidden.value = false;
  };

  return {
    hidden: hidden,
    visible: visible,
    hide: hide,
    show: show
  };
};

var base$O = function base(props, context, dependencies) {
  var _toRefs = toRefs(props),
      replaceTemplates = _toRefs.replaceTemplates; // ============ DEPENDENCIES ============


  var theme = dependencies.theme; // ============== COMPUTED ==============

  /**
   * The component templates to use for the element. Use [`replaceTemplates`](#option-replace-templates) option to override any of the theme's default templates.
   * 
   * @type {object}
   */

  var templates = computed(function () {
    return Object.assign({}, theme.value.templates, replaceTemplates && replaceTemplates.value && Object.keys(replaceTemplates.value).length > 0 ? replaceTemplates.value : {});
  });
  return {
    templates: templates
  };
};

var base$N = function base(props, context, dependencies) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var _toRefs = toRefs(props);
      _toRefs.slots; // ============ DEPENDENCIES ============


  var el$ = dependencies.el$; // =============== OPTIONS ==============

  var defaultElementSlots = ['label', 'info', 'description', 'before', 'between', 'after'];
  var defaultFieldSlots = ['checkbox', 'radio', 'option', 'single-label', 'multiple-label', 'tag', 'no-results', 'no-options', 'after-list', 'before-list', 'placeholder', 'group-label', 'caret', 'clear', 'spinner', 'option', 'default']; // ============== COMPUTED ==============

  /**
   * Slots of the element.
   * 
   * @type {object}
   * @private
   */

  var elementSlots = computed(function () {
    var elementSlots = {};
    defaultElementSlots.filter(function (s) {
      return options.slots.indexOf(s) !== -1;
    }).forEach(function (s) {
      var slot = el$.value.slots[s] || el$.value.slots[_$1.camelCase(s)];

      if (_typeof$1(slot) === 'object') {
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

  var fieldSlots = computed(function () {
    var fieldSlots = {};
    defaultFieldSlots.filter(function (s) {
      return options.slots.indexOf(s) !== -1;
    }).forEach(function (s) {
      var slot = el$.value.slots[s] || el$.value.slots[_$1.camelCase(s)]; // Add `el$` prop to `default` slot


      if (_typeof$1(slot) === 'object') {
        if (slot.props && slot.props.indexOf('el$') === -1) {
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
    elementSlots: elementSlots,
    fieldSlots: fieldSlots
  };
};

var base$M = function base(props, context, dependencies) {
  var _toRefs = toRefs(props),
      buttonLabel = _toRefs.buttonLabel,
      buttonType = _toRefs.buttonType,
      href = _toRefs.href,
      target = _toRefs.target,
      loading = _toRefs.loading,
      onClick = _toRefs.onClick,
      resets = _toRefs.resets,
      submits = _toRefs.submits; // ============ DEPENDENCIES ============


  var form$ = dependencies.form$;
  var isDisabled = dependencies.isDisabled;
  var el$ = dependencies.el$; // ============== COMPUTED ==============

  /**
   * Whether the button is in loading state.
   * 
   * @type {boolean}
   */

  var isLoading = computed(function () {
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

  var isButtonLabelComponent = computed(function () {
    return buttonLabel.value !== null && _typeof$1(buttonLabel.value) === 'object';
  });
  /**
   * Attributes of the button.
   * 
   * @type {object}
   * @private
   */

  var button = computed(function () {
    var button = {};

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
  }); // =============== METHODS ==============

  /**
   * Handles the button's click event.
   *
   * @param {Event} e* event
   * @returns {void}
   * @private
   */

  var handleClick = function handleClick(e) {
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
      onClick.value(form$.value);
    }
  };

  return {
    isButtonLabelComponent: isButtonLabelComponent,
    button: button,
    isLoading: isLoading,
    handleClick: handleClick
  };
};

var base$L = function base(props, context, dependencies) {
  var _toRefs = toRefs(props),
      layout = _toRefs.layout,
      inline = _toRefs.inline; // ============== COMPUTED ==============

  /**
   * The current layout of the element.
   * 
   * @type {string|component}
   * @private
   */


  var elementLayout = computed(function () {
    return inline.value || !layout.value ? 'ElementLayoutInline' : layout.value;
  });
  return {
    elementLayout: elementLayout
  };
};

var base$K = function base(props, context, dependencies) {
  var _toRefs = toRefs(props),
      disabled = _toRefs.disabled; // ================ DATA ================

  /**
   * Helper to store whether the element is disabled via api (with .disable()).
   * 
   * @type {boolean|null}
   * @default null
   * @private
   */


  var localDisabled = ref(null); // ============== COMPUTED ==============

  /**
   * Whether the element is disabled.
   * 
   * @type {boolean}
   */

  var isDisabled = computed(function () {
    return disabled.value && localDisabled.value !== false || localDisabled.value === true;
  }); // =============== METHODS ==============

  /**
   * Disables the element.
   *
   * @returns {void}
   */

  var disable = function disable() {
    localDisabled.value = true;
  };
  /**
   * Enables the element even if it is disabled by [`disabled`](#disabled) option.
   *
   * @returns {void}
   */


  var enable = function enable() {
    localDisabled.value = false;
  };

  return {
    localDisabled: localDisabled,
    isDisabled: isDisabled,
    disable: disable,
    enable: enable
  };
};

var checkboxgroup$2 = function checkboxgroup(props, context, dependencies) {
  var _toRefs2 = toRefs(props),
      disables = _toRefs2.disables;

  var _base = base$K(props),
      localDisabled = _base.localDisabled,
      isDisabled = _base.isDisabled; // ================ DATA ================

  /**
   * List of option keys to be disabled.
   * 
   * @type {array} 
   * @default []
   * @private
   */


  var disabledItems = ref([]); // =============== METHODS ==============

  /**
   * Disables one item or more items.
   *
   * @param {array|string|number} values* value(s) to disable
   * @returns {void}
   */

  var disable = function disable(values) {
    if (!_$1.isArray(values)) {
      values = [values];
    }

    var disablesList = _$1.clone(disabledItems.value);

    _$1.each(values, function (item) {
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


  var enable = function enable(values) {
    if (!_$1.isArray(values)) {
      values = [values];
    }

    var disablesList = _$1.clone(disabledItems.value);

    _$1.each(values, function (item) {
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


  var disableAll = function disableAll() {
    localDisabled.value = true;
  };
  /**
   * Enables all items.
   *
   * @returns {void}
   */


  var enableAll = function enableAll() {
    localDisabled.value = false;
    disabledItems.value = [];
  }; // ================ HOOKS ===============


  disabledItems.value = _$1.map(disables.value || [], function (d) {
    return String(d);
  });
  return {
    disabledItems: disabledItems,
    isDisabled: isDisabled,
    disableAll: disableAll,
    enableAll: enableAll,
    disable: disable,
    enable: enable
  };
};

var button$1 = function button(props, context, dependencies) {
  var _toRefs3 = toRefs(props),
      disabled = _toRefs3.disabled,
      submits = _toRefs3.submits; // ============ DEPENDENCIES ============


  var form$ = dependencies.form$;
  var el$ = dependencies.el$; // ============== COMPUTED ==============

  /**
   * Whether the button is disabled.
   * 
   * @type {boolean}
   */

  var isDisabled = computed(function () {
    if (typeof disabled.value === 'function') {
      return disabled.value(form$.value, el$.value);
    }

    if (submits.value && (form$.value.invalid && form$.value.shouldValidateOnChange || form$.value.busy || form$.value.isDisabled)) {
      return true;
    }

    return disabled.value;
  });
  return {
    isDisabled: isDisabled
  };
};

var radiogroup$1 = checkboxgroup$2;

var base$J = function base(props, context, dependencies) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var _toRefs = toRefs(props),
      extendClasses = _toRefs.extendClasses,
      replaceClasses = _toRefs.replaceClasses,
      addClass = _toRefs.addClass;

  var componentName = context.name; // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;
  var theme = dependencies.theme;
  var templates = dependencies.templates;
  var template = templates.value[componentName.value]; // ================ DATA ================

  /**
  * The default classes for the element defined by theme.
  * 
  * @type {object}
  * @private
  */

  var defaultClasses = ref(template.data ? template.data().defaultClasses : {}); // ============== COMPUTED ==============

  /**
  * The class name of the element's outermost DOM.
  * 
  * @type {string}
  * @private
  */

  var mainClass = computed(function () {
    return _$1.keys(defaultClasses.value)[0];
  });
  /**
   * The selected theme's classes merged with [`extendClasses`](#option-extend-classes) and [`replaceClasses`](#option-replace-classes) options.
   * 
   * @type {object}
   */

  var classes = computed(function () {
    var classes = _$1.merge({}, // Default component classes
    defaultClasses.value, // Theme / form level overwrites
    theme.value.classes[componentName.value] || {}, // Element level overwrites
    replaceClasses.value[componentName.value] || {}); // Add classes defined by specific elements


    if (options.addClasses) {
      options.addClasses.forEach(function (add) {
        if (add[2].value) {
          classes = mergeComponentClasses(classes, _defineProperty$1({}, add[0], _typeof$1(add[1]) == 'object' ? add[1].value : classes[add[1]]));
        }
      });
    } // Add form's extendClasses


    if (form$.value.options.extendClasses[componentName.value] !== undefined) {
      classes = mergeComponentClasses(classes, form$.value.options.extendClasses[componentName.value] || null);
    } // Add element's extendClasses options


    classes = mergeComponentClasses(classes, extendClasses.value[componentName.value] || null); // Add element's class to main class

    if (addClass.value) {
      classes = mergeComponentClasses(classes, _defineProperty$1({}, mainClass.value, addClass.value));
    }

    return classes;
  });
  return {
    classes: classes,
    mainClass: mainClass,
    defaultClasses: defaultClasses
  };
};

var input = function input(props, context, dependencies) {
  var _base = base$J(props, context, dependencies, {
    addClasses: [['input', 'input_enabled', computed(function () {
      return !isDisabled.value;
    })], ['input', 'input_disabled', computed(function () {
      return isDisabled.value;
    })]]
  }),
      mainClass = _base.mainClass,
      classes = _base.classes,
      defaultClasses = _base.defaultClasses; // ============ DEPENDENCIES ============


  var isDisabled = dependencies.isDisabled;
  return {
    classes: classes,
    mainClass: mainClass,
    defaultClasses: defaultClasses
  };
};

var list$4 = function list(props, context, dependencies) {
  var _base2 = base$J(props, context, dependencies, {
    addClasses: [['list', 'list_disabled', computed(function () {
      return isDisabled.value;
    })], ['list', 'list_sorting', computed(function () {
      return sorting.value;
    })]]
  }),
      mainClass = _base2.mainClass,
      classes = _base2.classes,
      defaultClasses = _base2.defaultClasses; // ============ DEPENDENCIES ============


  var isDisabled = dependencies.isDisabled;
  var sorting = dependencies.sorting;
  return {
    classes: classes,
    mainClass: mainClass,
    defaultClasses: defaultClasses
  };
};

var multifile$5 = function multifile(props, context, dependencies) {
  var _toRefs2 = toRefs(props),
      view = _toRefs2.view;

  var _base3 = base$J(props, context, dependencies, {
    addClasses: [['list', 'list_file', computed(function () {
      return view.value === 'file';
    })], ['list', 'list_image', computed(function () {
      return view.value === 'image';
    })], ['list', 'list_gallery', computed(function () {
      return view.value === 'gallery';
    })], ['list', 'list_sorting', computed(function () {
      return sorting.value;
    })], ['list', 'list_disabled', computed(function () {
      return isDisabled.value;
    })], ['listItem', 'listItem_file', computed(function () {
      return view.value === 'file';
    })], ['listItem', 'listItem_image', computed(function () {
      return view.value === 'image';
    })], ['listItem', 'listItem_gallery', computed(function () {
      return view.value === 'gallery';
    })], ['handle', 'handle_file', computed(function () {
      return view.value === 'file';
    })], ['handle', 'handle_image', computed(function () {
      return view.value === 'image';
    })], ['handle', 'handle_gallery', computed(function () {
      return view.value === 'gallery';
    })], ['handleIcon', 'handleIcon_file', computed(function () {
      return view.value === 'file';
    })], ['handleIcon', 'handleIcon_image', computed(function () {
      return view.value === 'image';
    })], ['handleIcon', 'handleIcon_gallery', computed(function () {
      return view.value === 'gallery';
    })], ['button', 'button_enabled', computed(function () {
      return !isDisabled.value && !preparing.value;
    })], ['button', 'button_disabled', computed(function () {
      return isDisabled.value || preparing.value;
    })]]
  }),
      mainClass = _base3.mainClass,
      classes = _base3.classes,
      defaultClasses = _base3.defaultClasses; // ============ DEPENDENCIES ============


  var isDisabled = dependencies.isDisabled;
  var sorting = dependencies.sorting;
  var preparing = dependencies.preparing;
  return {
    classes: classes,
    mainClass: mainClass,
    defaultClasses: defaultClasses
  };
};

var file$3 = function file(props, context, dependencies) {
  var _base4 = base$J(props, context, dependencies, {
    addClasses: [['container', 'container_removing', computed(function () {
      return removing.value;
    })], ['button', 'button_enabled', computed(function () {
      return !isDisabled.value && !preparing.value;
    })], ['button', 'button_disabled', computed(function () {
      return isDisabled.value || preparing.value;
    })]]
  }),
      defaultClasses = _base4.defaultClasses,
      mainClass = _base4.mainClass,
      classes = _base4.classes; // ============ DEPENDENCIES ============


  var removing = dependencies.removing;
  var isDisabled = dependencies.isDisabled;
  var preparing = dependencies.preparing;
  return {
    classes: classes,
    mainClass: mainClass,
    defaultClasses: defaultClasses
  };
};

var button = function button(props, context, dependencies) {
  var _toRefs3 = toRefs(props),
      buttonClass = _toRefs3.buttonClass;

  var _base5 = base$J(props, context, dependencies, {
    addClasses: [['button', 'button_loading', computed(function () {
      return isLoading.value;
    })], ['button', 'button_enabled', computed(function () {
      return !isDisabled.value && !isLoading.value;
    })], ['button', 'button_disabled', computed(function () {
      return isDisabled.value;
    })], ['button', buttonClass, buttonClass]]
  }),
      mainClass = _base5.mainClass,
      classes = _base5.classes,
      defaultClasses = _base5.defaultClasses; // ============ DEPENDENCIES ============


  var isLoading = dependencies.isLoading;
  var isDisabled = dependencies.isDisabled;
  return {
    classes: classes,
    mainClass: mainClass,
    defaultClasses: defaultClasses
  };
};

var editor$1 = function editor(props, context, dependencies) {
  var _base6 = base$J(props, context, dependencies, {
    addClasses: [['input', 'input_enabled', computed(function () {
      return !isDisabled.value;
    })], ['input', 'input_disabled', computed(function () {
      return isDisabled.value;
    })], ['input', 'input_focused', computed(function () {
      return focused.value;
    })]]
  }),
      mainClass = _base6.mainClass,
      classes = _base6.classes,
      defaultClasses = _base6.defaultClasses; // ============ DEPENDENCIES ============


  var isDisabled = dependencies.isDisabled;
  var focused = dependencies.focused;
  return {
    classes: classes,
    mainClass: mainClass,
    defaultClasses: defaultClasses
  };
};

var base$I = function base(props, context, dependencies) {

  var _toRefs = toRefs(props),
      name = _toRefs.name;

  var currentInstance = getCurrentInstance(); // ============ DEPENDENCIES =============

  var form$ = dependencies.form$; // =============== METHODS ==============

  /**
  * Sets the component to the parent as if `refs` were used.
  * 
  * @param {component} $parent parent component
  * @param {function} assignToParent the assignToParent function for recursion
  * @returns {void}
  * @private
  */

  var assignToParent = function assignToParent($parent, _assignToParent) {
    if ($parent.children$Array) {
      $parent.children$Array.push(currentInstance.proxy);
    } else if ($parent.elements$) {
      form$.value.$set($parent.elements$, name.value, currentInstance.proxy);
    } else {
      _assignToParent($parent.$parent, _assignToParent);
    }
  };
  /**
  * Removes the component from the parent.
  * 
  * @param {component} $parent parent component
  * @param {function} removeFromParent the removeFromParent function for recursion
  * @private
  */


  var removeFromParent = function removeFromParent($parent, _removeFromParent) {
    if ($parent.children$Array) {
      $parent.children$Array.splice($parent.children$Array.map(function (e$) {
        return normalize(e$.name);
      }).indexOf(normalize(name.value)), 1);
    } else if ($parent.elements$) {
      form$.value.$delete($parent.elements$, name.value);
    } else {
      _removeFromParent($parent.$parent, _removeFromParent);
    }
  };

  return {
    assignToParent: assignToParent,
    removeFromParent: removeFromParent
  };
};

var base$H = function base(props, context, dependencies) {
  var instantHooks = ['onBeforeCreate', 'onCreated'];
  var hooks = {
    onBeforeMount: onBeforeMount,
    onMounted: onMounted,
    onBeforeUpdate: onBeforeUpdate,
    onUpdated: onUpdated,
    onBeforeUnmount: onBeforeUnmount,
    onUnmounted: onUnmounted
  };
  var currentInstance = getCurrentInstance(); // ============ DEPENDENCIES ============

  var form$ = dependencies.form$;
  var fire = dependencies.fire;

  var _useParentAssign = base$I(props, context, {
    form$: form$
  }),
      assignToParent = _useParentAssign.assignToParent,
      removeFromParent = _useParentAssign.removeFromParent; // ================= DATA ================

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

  var active = ref(true); // ============== COMPUTED ==============

  /**
   * Whether the element is static (does not have any data or validation).
   * 
   * @type {boolean}
   * @private
   */

  var isStatic = computed(function () {
    return false;
  });
  /**
   * Whether the element's value is a file.
   *
   * @type {boolean}
   * @private
   */

  var isFileType = computed(function () {
    return false;
  });
  /**
   * Whether the element's value is an image.
   *
   * @type {boolean}
   * @private
   */

  var isImageType = computed(function () {
    return false;
  });
  /**
   * Whether the element's value is an array.
   *
   * @type {boolean}
   * @private
   */

  var isArrayType = computed(function () {
    return false;
  });
  /**
   * Whether the element should be visible when using `tabs` or `steps`.
   * 
   * @type {boolean}
   * @private
   */

  var isActive = computed(function () {
    return active.value;
  });
  /**
   * The element's component.
   *
   * @type {component}
   */

  var el$ = computed(function () {
    return currentInstance.proxy;
  }); // ============== METHODS ===============

  /**
   * Sets the `active` property of the element to `true`.
   *
   * @returns {void}
   * @private
   */

  var activate = function activate() {
    active.value = true;
  };
  /**
   * Sets the `active` property of the element to `false`.
   *
   * @returns {void}
   * @private
   */


  var deactivate = function deactivate() {
    active.value = false;
  }; // ============== PROVIDES ==============

  /**
   * The element's component.
   *
   * @type {component}
   */


  provide('el$', el$); // ================ HOOKS ===============

  onBeforeMount(function () {
    assignToParent(currentInstance.proxy.$parent, assignToParent);
  });
  onMounted(function () {
    mounted.value = true;
  });
  onBeforeUnmount(function () {
    removeFromParent(currentInstance.proxy.$parent, removeFromParent);
  });
  Object.values(instantHooks).forEach(function (hook) {
    fire(_.lowerFirst(hook.replace('on', '')), el$.value);
  });
  Object.keys(hooks).forEach(function (hook) {
    hooks[hook](function () {
      fire(_.lowerFirst(hook.replace('on', '')), el$.value);
    });
  });
  return {
    el$: el$,
    isStatic: isStatic,
    isFileType: isFileType,
    isArrayType: isArrayType,
    isImageType: isImageType,
    isActive: isActive,
    active: active,
    mounted: mounted,
    activate: activate,
    deactivate: deactivate
  };
};

var list$3 = function list(props, context, dependencies) {
  var _base = base$H(props, context, dependencies),
      el$ = _base.el$,
      isStatic = _base.isStatic,
      isFileType = _base.isFileType,
      isImageType = _base.isImageType,
      isActive = _base.isActive,
      active = _base.active,
      mounted = _base.mounted,
      activate = _base.activate,
      deactivate = _base.deactivate; // ============== COMPUTED ==============


  var isArrayType = computed(function () {
    return true;
  });
  return {
    el$: el$,
    isStatic: isStatic,
    isFileType: isFileType,
    isArrayType: isArrayType,
    isImageType: isImageType,
    isActive: isActive,
    active: active,
    mounted: mounted,
    activate: activate,
    deactivate: deactivate
  };
};

var file$2 = function file(props, context, dependencies) {
  var _toRefs = toRefs(props),
      view = _toRefs.view;

  var _base2 = base$H(props, context, dependencies),
      el$ = _base2.el$,
      isStatic = _base2.isStatic,
      isArrayType = _base2.isArrayType,
      isActive = _base2.isActive,
      active = _base2.active,
      mounted = _base2.mounted,
      activate = _base2.activate,
      deactivate = _base2.deactivate; // ============== COMPUTED ==============


  var isFileType = computed(function () {
    return true;
  });
  var isImageType = computed(function () {
    return ['gallery', 'image'].indexOf(view.value) !== -1;
  });
  return {
    el$: el$,
    isStatic: isStatic,
    isFileType: isFileType,
    isArrayType: isArrayType,
    isImageType: isImageType,
    isActive: isActive,
    active: active,
    mounted: mounted,
    activate: activate,
    deactivate: deactivate
  };
};

var static_$1 = function static_(props, context, dependencies) {
  var _base3 = base$H(props, context, dependencies),
      el$ = _base3.el$,
      isArrayType = _base3.isArrayType,
      isFileType = _base3.isFileType,
      isImageType = _base3.isImageType,
      isActive = _base3.isActive,
      active = _base3.active,
      mounted = _base3.mounted,
      activate = _base3.activate,
      deactivate = _base3.deactivate; // ============== COMPUTED ==============


  var isStatic = computed(function () {
    return true;
  });
  return {
    el$: el$,
    isStatic: isStatic,
    isFileType: isFileType,
    isArrayType: isArrayType,
    isImageType: isImageType,
    isActive: isActive,
    active: active,
    mounted: mounted,
    activate: activate,
    deactivate: deactivate
  };
};

var checkboxgroup$1 = list$3;
var dates$4 = list$3;
var multiselect$1 = list$3;
var tags$2 = list$3;

var base$G = function base(props, context, dependencies) {
  var _toRefs = toRefs(props),
      name = _toRefs.name;

  var currentInstance = getCurrentInstance(); // ============== COMPUTED ==============

  /**
   * The parent component of the element.
   * 
   * @type {component}
   * @private
   */

  var parent = computed(function () {
    var getParent = function getParent(parent, _getParent) {
      if (parent && (context.expose !== undefined && parent.$options.name && parent.$options.name.match(/^[a-zA-Z\-]*Element$/) || context.expose === undefined && parent.hasOwnProperty('el$') && typeof parent.el$ !== 'function')) {
        return parent.el$;
      } else if (parent.$parent) {
        return _getParent(parent.$parent, _getParent);
      } else {
        return null;
      }
    };

    return getParent(currentInstance.parent.proxy, getParent);
  });
  /**
   * The path of the element using dot `.` syntax.
   * 
   * @type {string}
   */

  var path = computed(function () {
    return parent.value && parent.value.path ? parent.value.path + '.' + name.value : name.value;
  });
  /**
   * The path of the element's data using dot `.` syntax.
   * 
   * @type {string} 
   */

  var dataPath = computed(function () {
    return parent.value && parent.value.dataPath ? parent.value.dataPath + '.' + name.value : name.value;
  });
  /**
   * Whether the element is just a container of children but not nested on data level (eg. [`GroupElement`](group-element))
   * 
   * @type {boolean}
   * @private
   */

  var flat = computed(function () {
    return false;
  });
  return {
    parent: parent,
    path: path,
    dataPath: dataPath,
    flat: flat
  };
};

var group$6 = function group(props, context, dependencies) {
  // ============ DEPENDENCIES ============
  var _base = base$G(props, context),
      path = _base.path,
      parent = _base.parent; // ============== COMPUTED ==============


  var dataPath = computed(function () {
    return parent.value && parent.value.dataPath ? parent.value.dataPath : null;
  });
  var flat = computed(function () {
    return true;
  });
  return {
    path: path,
    dataPath: dataPath,
    flat: flat,
    parent: parent
  };
};

var static_ = function static_(props, context, dependencies) {
  // ============ DEPENDENCIES ============
  var _base2 = base$G(props, context),
      path = _base2.path,
      parent = _base2.parent,
      flat = _base2.flat; // ============== COMPUTED ==============


  return {
    path: path,
    flat: flat,
    parent: parent
  };
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
      "default": function _default() {
        return [];
      }
    },
    onBeforeCreate: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    onCreated: {
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
  }
};

var HasView = {
  props: {
    inline: {
      required: false,
      type: [Boolean],
      "default": false
    },
    layout: {
      required: false,
      type: [String, Object, Boolean],
      "default": 'ElementLayout',
      "private": true
    },
    addClass: {
      required: false,
      type: [String, Array, Object],
      "default": null
    },
    replaceClasses: {
      required: false,
      type: [Object],
      "default": function _default() {
        return {};
      }
    },
    extendClasses: {
      required: false,
      type: [Object],
      "default": function _default() {
        return {};
      }
    },
    columns: {
      required: false,
      type: [Object, String, Number],
      "default": null
    },
    replaceTemplates: {
      required: false,
      type: [Object],
      "default": function _default() {
        return {};
      }
    },
    description: {
      required: false,
      type: [String],
      "default": null
    },
    info: {
      required: false,
      type: [String],
      "default": null
    },
    label: {
      required: false,
      type: [String, Object, Function],
      "default": null
    },
    before: {
      required: false,
      type: [Object, String, Number],
      "default": null
    },
    between: {
      required: false,
      type: [Object, String, Number],
      "default": null
    },
    after: {
      required: false,
      type: [Object, String, Number],
      "default": null
    },
    slots: {
      required: false,
      type: [Object],
      "default": function _default() {
        return {};
      }
    }
  }
};

var ButtonElement = {
  name: 'ButtonElement',
  mixins: [BaseElement, HasView],
  emits: ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      "default": 'button',
      "private": true
    },
    buttonLabel: {
      required: false,
      type: [String, Object, Function],
      "default": null
    },
    buttonType: {
      required: false,
      type: [String],
      "default": 'button' // button|anchor

    },
    buttonClass: {
      required: false,
      type: [String, Array, Object],
      "default": null
    },
    disabled: {
      required: false,
      type: [Function, Boolean],
      "default": false
    },
    loading: {
      required: false,
      type: [Function, Boolean],
      "default": false
    },
    href: {
      required: false,
      type: [String],
      "default": ''
    },
    target: {
      required: false,
      type: [String],
      "default": null
    },
    onClick: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    resets: {
      required: false,
      type: [Boolean],
      "default": false
    },
    submits: {
      required: false,
      type: [Boolean],
      "default": false
    }
  },
  setup: function setup(props, context) {
    var form$ = base$Z();
    var theme = base$Y();
    var layout = base$L(props);
    var path = static_(props, context);
    var events = base$$(props, context, {}, {
      events: context.emits
    });
    var baseElement = static_$1(props, context, {
      form$: form$.form$,
      fire: events.fire
    });
    var disabled = button$1(props, context, {
      form$: form$.form$,
      el$: baseElement.el$
    });
    var conditions = base$W(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var label = base$R(props, context, {
      form$: form$.form$,
      el$: baseElement.el$
    });
    var templates = base$O(props, context, {
      theme: theme.theme,
      form$: form$.form$
    });
    var button$2 = base$M(props, context, {
      form$: form$.form$,
      isDisabled: disabled.isDisabled,
      el$: baseElement.el$
    });
    var classes = button(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      isLoading: button$2.isLoading,
      isDisabled: disabled.isDisabled,
      templates: templates.templates
    });
    var columns = base$Q(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      hasLabel: label.hasLabel
    });
    var view = base$P(props, context, {
      available: conditions.available,
      active: baseElement.active
    });
    var slots = base$N(props, context, {
      form$: form$.form$,
      el$: baseElement.el$,
      templates: templates.templates
    }, {
      slots: ['label', 'info', 'description', 'before', 'between', 'after', 'default']
    });
    return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, form$), theme), layout), path), conditions), label), classes), columns), baseElement), view), templates), slots), button$2), disabled), events);
  }
};

var base$F = function base(props, context, dependencies) {
  var _toRefs = toRefs(props),
      id = _toRefs.id; // ============ DEPENDENCIES ============


  var path = dependencies.path; // ============== COMPUTED ==============

  /**
   * The `id` of the <%field%>. If [`id`](#option-id) is not provided [`path`](#option-path) will be used.
   * 
   * @type {string}
   */

  var fieldId = computed(function () {
    return id.value || path.value;
  });
  return {
    fieldId: fieldId
  };
};

var base$E = function base(props, context, dependencies) {
  // ================ DATA ================

  /**
   * The main input field of the element.
   * 
   * @type {HTMLElement} 
   */
  var input = ref(null);
  return {
    input: input
  };
};

function checkDateFormat (format, date) {
  if (!(date instanceof Date) && moment(date, format).format(format) !== date) {
    throw new Error("Wrong formatted date. Expected format: \"".concat(format, "\", received: \"").concat(date, "\""));
  }
}

var base$D = function base(props, context, dependencies) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var _toRefs = toRefs(props),
      submit = _toRefs.submit,
      formatData = _toRefs.formatData,
      formatLoad = _toRefs.formatLoad,
      name = _toRefs.name; // ============ DEPENDENCIES =============


  var form$ = dependencies.form$;
  var available = dependencies.available;
  var value = dependencies.value;
  var resetValidators = dependencies.resetValidators;
  var defaultValue = dependencies.defaultValue;
  var nullValue = dependencies.nullValue; // =============== PRIVATE ===============

  /**
   * Sets the value of the element.
   * 
   * 
   * @param {any} val the value to be set
   * @returns {void}
   * @private
   */

  var setValue = function setValue(val) {
    if (options.setValue) {
      return options.setValue(val);
    }

    value.value = val;
  }; // ============== COMPUTED ===============

  /**
   * The value of the element in `{[name]: value}` value format. This gets merged with the parent component's data.
   * 
   * @type {object}
   */


  var data = computed(function () {
    return _defineProperty$1({}, name.value, value.value);
  });
  /**
   * Same as `data` property except that it only includes the element's value if [`submit`](#option-submit) is not disabled and [`available`](#property-available) is `true` (has no [`conditions`](#option-conditions) or they are fulfilled).
   * 
   * @type {object}
   */

  var requestData = computed(function () {
    if (!available.value || !submit.value) {
      return {};
    }

    return formatData.value ? formatData.value(name.value, value.value, form$.value) : _defineProperty$1({}, name.value, value.value);
  }); // =============== METHODS ===============

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


  var update = function update(val) {
    setValue(val);
  };
  /**
   * Clears the element's value.
   * 
   * @returns {void}
   */


  var clear = function clear() {
    setValue(_$1.cloneDeep(nullValue.value));
  };
  /**
   * Resets the element's value to [`default`](#option-default) (or empty if `default` is not provided). Also resets all the validation state for the element.
   * 
   * @returns {void}
   */


  var reset = function reset() {
    setValue(_$1.cloneDeep(defaultValue.value));
    resetValidators();
  };
  /**
   * Prepares the element.
   *
   * @returns {void}
   * @private
   */


  var prepare = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function prepare() {
      return _ref3.apply(this, arguments);
    };
  }();

  return {
    data: data,
    requestData: requestData,
    load: load,
    update: update,
    clear: clear,
    reset: reset,
    prepare: prepare
  };
};

var object$6 = function object(props, context, dependencies) {
  var _toRefs2 = toRefs(props),
      name = _toRefs2.name,
      formatLoad = _toRefs2.formatLoad,
      formatData = _toRefs2.formatData,
      submit = _toRefs2.submit;

  var _base = base$D(props, context, dependencies),
      data = _base.data,
      prepare = _base.prepare; // ============ DEPENDENCIES =============


  var form$ = dependencies.form$;
  var available = dependencies.available;
  var children$ = dependencies.children$; // ============== COMPUTED ===============

  var requestData = computed(function () {
    if (!available.value || !submit.value) {
      return {};
    }

    var requestData = {};

    _$1.each(children$.value, function (element$) {
      if (element$.isStatic) {
        return;
      }

      requestData = Object.assign({}, requestData, element$.requestData);
    });

    return formatData.value ? formatData.value(name.value, requestData, form$.value) : _defineProperty$1({}, name.value, requestData);
  }); // =============== METHODS ===============

  var load = function load(val) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var formatted = format && formatLoad.value ? formatLoad.value(val, form$.value) : val;

    _$1.each(children$.value, function (element$) {
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

  var update = function update(val) {
    _$1.each(children$.value, function (element$) {
      if (element$.isStatic) {
        return;
      }

      if (val[element$.name] === undefined && !element$.flat) {
        return;
      }

      element$.update(element$.flat ? val : val[element$.name]);
    });
  };

  var clear = function clear() {
    _$1.each(children$.value, function (element$) {
      if (element$.isStatic) {
        return;
      }

      element$.clear();
    });
  };

  var reset = function reset() {
    _$1.each(children$.value, function (element$) {
      if (element$.isStatic) {
        return;
      }

      element$.reset();
    });
  };

  return {
    data: data,
    requestData: requestData,
    load: load,
    update: update,
    clear: clear,
    reset: reset,
    prepare: prepare
  };
};

var group$5 = function group(props, context, dependencies) {
  var _toRefs3 = toRefs(props),
      name = _toRefs3.name,
      formatData = _toRefs3.formatData,
      submit = _toRefs3.submit;

  var _object = object$6(props, context, dependencies),
      load = _object.load,
      update = _object.update,
      clear = _object.clear,
      reset = _object.reset,
      prepare = _object.prepare; // ============ DEPENDENCIES =============


  var form$ = dependencies.form$;
  var children$ = dependencies.children$;
  var available = dependencies.available;
  var value = dependencies.value; // ============== COMPUTED ===============

  /**
   * The value of child elements in object. This gets merged with the parent component's data.
   * 
   * @type {object}
   */

  var data = computed(function () {
    return value.value;
  });
  var requestData = computed(function () {
    if (!available.value || !submit.value) {
      return {};
    }

    var requestData = {};

    _$1.each(children$.value, function (element$) {
      if (element$.isStatic) {
        return;
      }

      requestData = Object.assign({}, requestData, element$.requestData);
    });

    return formatData.value ? formatData.value(name.value, requestData, form$.value) : requestData;
  });
  return {
    data: data,
    requestData: requestData,
    load: load,
    update: update,
    clear: clear,
    reset: reset,
    prepare: prepare
  };
};

var list$2 = function list(props, context, dependencies, options) {
  var _toRefs4 = toRefs(props),
      name = _toRefs4.name,
      storeOrder = _toRefs4.storeOrder,
      formatLoad = _toRefs4.formatLoad,
      formatData = _toRefs4.formatData,
      order = _toRefs4.order,
      submit = _toRefs4.submit,
      initial = _toRefs4.initial,
      default_ = _toRefs4["default"];

  var _base2 = base$D(props, context, dependencies),
      update = _base2.update,
      clear = _base2.clear,
      reset = _base2.reset,
      prepare = _base2.prepare,
      data = _base2.data; // ============ DEPENDENCIES =============


  var form$ = dependencies.form$;
  var children$ = dependencies.children$;
  var available = dependencies.available;
  var isDisabled = dependencies.isDisabled;
  var value = dependencies.value;
  var orderByName = dependencies.orderByName;
  var refreshOrderStore = dependencies.refreshOrderStore;
  var dataPath = dependencies.dataPath;
  var parent = dependencies.parent;
  var nullValue = dependencies.nullValue;
  var defaultValue = dependencies.defaultValue;
  var fire = dependencies.fire; // ================ DATA =================

  var initialValue = ref(_$1.get(form$.value.model, dataPath.value)); // ============== COMPUTED ===============

  /**
   * Default value of the parent
   * 
   * @type {any}
   * @private
   */

  var parentDefaultValue = computed(function () {
    return parent && parent.value ? parent.value.defaultValue[name.value] : form$.value.options["default"][name.value];
  });
  var requestData = computed(function () {
    if (!available.value || !submit.value) {
      return {};
    }

    var requestData = [];

    _$1.each(children$.value, function (element$) {
      var val = element$.requestData[element$.name];

      if (val !== undefined) {
        requestData.push(val);
      }
    });

    return formatData.value ? formatData.value(name.value, requestData, form$.value) : _defineProperty$1({}, name.value, requestData);
  }); // =============== METHODS ===============

  /**
   * Appends a new item.
   * 
   * @param {any} value value of the appended element (optional)
   * @returns {integer} the index of the appended item
   */

  var add = function add() {
    var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
    var newValue = storeOrder.value ? Object.assign({}, val || {}, _defineProperty$1({}, storeOrder.value, val ? val[storeOrder.value] : undefined)) : val;
    value.value = value.value.concat([newValue]);
    value.value = refreshOrderStore(value.value);
    var index = value.value.length - 1;
    fire('add', index, newValue, value.value);
    return index;
  };
  /**
   * Removes an items by its index.
   * 
   * 
   * @param {number} index* index of items to be removed
   * @returns {void}
   */


  var remove = function remove(index) {
    value.value = value.value.filter(function (v, i) {
      return i !== index;
    });
    refreshOrderStore(value.value);
    fire('remove', index, value.value);
  };

  var load = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(val) {
      var format,
          values,
          i,
          _args2 = arguments;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              format = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : false;
              values = sortValue(format && formatLoad.value ? formatLoad.value(val, form$.value) : val);
              clear();
              _context2.next = 5;
              return nextTick();

            case 5:
              for (i = 0; i < values.length; i++) {
                add();
              }

              _context2.next = 8;
              return nextTick();

            case 8:
              _$1.each(children$.value, function (child$, i) {
                child$.load(values[i], format);
              });

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function load(_x) {
      return _ref6.apply(this, arguments);
    };
  }();
  /**
   * Sorts value when `order` and `orderByName` is defined.
   * 
   * @param {array} value value to be sorted
   * @returns {array}
   * @private
   */


  var sortValue = function sortValue(val) {
    if (!order.value && !orderByName.value || !val) {
      return val;
    }

    var desc = order.value && typeof order.value === 'string' && order.value.toUpperCase() == 'DESC';

    if (orderByName.value) {
      val = desc ? _$1.sortBy(val, orderByName.value).reverse() : _$1.sortBy(val, orderByName.value);
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


  var handleAdd = function handleAdd() {
    if (isDisabled.value) {
      return;
    }

    add();
  };
  /**
   * Handles the `remove` event.
   *
   * @param {number} index* index of child to be removed
   * @returns {void}
   * @private
   */


  var handleRemove = function handleRemove(index) {
    if (isDisabled.value) {
      return;
    }

    remove(index);
  }; // ================ HOOKS ===============


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
    requestData: requestData,
    data: data,
    add: add,
    remove: remove,
    load: load,
    update: update,
    clear: clear,
    reset: reset,
    handleAdd: handleAdd,
    handleRemove: handleRemove,
    prepare: prepare
  };
};

var date$2 = function date(props, context, dependencies) {
  var _toRefs5 = toRefs(props),
      formatLoad = _toRefs5.formatLoad;

  var _base3 = base$D(props, context, dependencies),
      data = _base3.data,
      requestData = _base3.requestData,
      update = _base3.update,
      clear = _base3.clear,
      reset = _base3.reset,
      prepare = _base3.prepare; // ============ DEPENDENCIES =============


  var form$ = dependencies.form$;
  var value = dependencies.value;
  var loadDateFormat = dependencies.loadDateFormat; // =============== METHODS ===============

  var load = function load(val) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var formatted = format && formatLoad.value ? formatLoad.value(val, form$.value) : val;
    checkDateFormat(loadDateFormat.value, formatted);
    value.value = formatted instanceof Date || !formatted ? formatted : moment(formatted, loadDateFormat.value).toDate();
  };

  return {
    data: data,
    requestData: requestData,
    load: load,
    update: update,
    clear: clear,
    reset: reset,
    prepare: prepare
  };
};

var dates$3 = function dates(props, context, dependencies) {
  var _toRefs6 = toRefs(props),
      formatLoad = _toRefs6.formatLoad;

  var _base4 = base$D(props, context, dependencies),
      data = _base4.data,
      requestData = _base4.requestData,
      update = _base4.update,
      clear = _base4.clear,
      reset = _base4.reset,
      prepare = _base4.prepare; // ============ DEPENDENCIES =============


  var form$ = dependencies.form$;
  var value = dependencies.value;
  var loadDateFormat = dependencies.loadDateFormat; // =============== METHODS ===============

  var load = function load(val) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var formatted = format && formatLoad.value ? formatLoad.value(val, form$.value) : val;
    value.value = _$1.map(formatted, function (v) {
      checkDateFormat(loadDateFormat.value, v);
      return v instanceof Date ? v : moment(v, loadDateFormat.value).toDate();
    });
  };

  return {
    data: data,
    requestData: requestData,
    load: load,
    update: update,
    clear: clear,
    reset: reset,
    prepare: prepare
  };
};

var multilingual$7 = function multilingual(props, context, dependencies) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var _toRefs7 = toRefs(props),
      formatLoad = _toRefs7.formatLoad;

  var _base5 = base$D(props, context, dependencies, options),
      data = _base5.data,
      requestData = _base5.requestData,
      clear = _base5.clear,
      reset = _base5.reset,
      prepare = _base5.prepare; // ============ DEPENDENCIES =============


  var form$ = dependencies.form$;
  var value = dependencies.value;
  var language = dependencies.language;
  var nullValue = dependencies.nullValue; // =============== PRIVATE ===============

  var setValue = function setValue(val) {
    if (options.setValue) {
      return options.setValue(val);
    }

    value.value = val;
  }; // =============== METHODS ===============


  var load = function load(val) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var formatted = format && formatLoad.value ? formatLoad.value(val, form$.value) : val;

    if (!_$1.isPlainObject(formatted)) {
      throw new Error('Multilingual element requires an object to load');
    }

    setValue(Object.assign({}, _$1.clone(nullValue.value), formatted));
  };

  var update = function update(val) {
    var updateValue = val;

    if (!_$1.isPlainObject(updateValue)) {
      updateValue = _defineProperty$1({}, language.value, val);
    }

    setValue(Object.assign({}, value.value, updateValue));
  };

  return {
    data: data,
    requestData: requestData,
    load: load,
    update: update,
    clear: clear,
    reset: reset,
    prepare: prepare
  };
};

var editor = function editor(props, context, dependencies) {
  var _base6 = base$D(props, context, dependencies, {
    setValue: function setValue(val) {
      value.value = val;
      nextTick(function () {
        input.value.update(val);
      });
    }
  }),
      data = _base6.data,
      requestData = _base6.requestData,
      load = _base6.load,
      update = _base6.update,
      clear = _base6.clear,
      reset = _base6.reset,
      prepare = _base6.prepare; // ============ DEPENDENCIES =============


  var input = dependencies.input;
  var value = dependencies.value;
  return {
    data: data,
    requestData: requestData,
    load: load,
    update: update,
    clear: clear,
    reset: reset,
    prepare: prepare
  };
};

var teditor = function teditor(props, context, dependencies) {
  var _multilingual = multilingual$7(props, context, dependencies, {
    setValue: function setValue(val) {
      value.value = val;
      nextTick(function () {
        input.value.update(val[language.value]);
      });
    }
  }),
      data = _multilingual.data,
      requestData = _multilingual.requestData,
      load = _multilingual.load,
      update = _multilingual.update,
      clear = _multilingual.clear,
      reset = _multilingual.reset,
      prepare = _multilingual.prepare; // ============ DEPENDENCIES =============


  var input = dependencies.input;
  var model = dependencies.model;
  var value = dependencies.value;
  var language = dependencies.language; // ============== WATCHERS ==============

  watch(language, function () {
    input.value.update(model.value);
  });
  return {
    data: data,
    requestData: requestData,
    load: load,
    update: update,
    clear: clear,
    reset: reset,
    prepare: prepare
  };
};

var base$C = function base(props, context, dependencies) {
  var _toRefs = toRefs(props),
      default_ = _toRefs["default"],
      name = _toRefs.name; // ============ DEPENDENCIES =============


  var nullValue = dependencies.nullValue;
  var form$ = dependencies.form$;
  var parent = dependencies.parent; // ============== COMPUTED ===============

  /**
  * The default value of the element.
  * 
  * @type {any}
  * @private
  */

  var defaultValue = computed(function () {
    var parentDefaultValue;

    if (parent && parent.value && !parent.value.mounted) {
      parentDefaultValue = parent.value.defaultValue[name.value];
    } else if (!form$.value.mounted && form$.value.options["default"][name.value]) {
      parentDefaultValue = form$.value.options["default"][name.value];
    }

    if (parentDefaultValue !== undefined) {
      return parentDefaultValue instanceof File ? new File([parentDefaultValue], parentDefaultValue.name, parentDefaultValue) : _$1.cloneDeep(parentDefaultValue);
    }

    if (default_.value !== undefined) {
      return default_.value instanceof File ? new File([default_.value], default_.value.name, default_.value) : _$1.cloneDeep(default_.value);
    }

    return _$1.cloneDeep(nullValue.value);
  });
  return {
    defaultValue: defaultValue
  };
};

var object$5 = function object(props, context, dependencies) {
  var _toRefs2 = toRefs(props),
      default_ = _toRefs2["default"],
      name = _toRefs2.name; // ============ DEPENDENCIES =============


  var nullValue = dependencies.nullValue;
  var form$ = dependencies.form$;
  var parent = dependencies.parent; // ============== COMPUTED ===============

  var defaultValue = computed(function () {
    var parentDefaultValue;

    if (parent && parent.value && !parent.value.mounted) {
      parentDefaultValue = parent.value.defaultValue[name.value];
    } else if (!form$.value.mounted && form$.value.options["default"][name.value]) {
      parentDefaultValue = form$.value.options["default"][name.value];
    }

    if (parentDefaultValue !== undefined) {
      return _$1.cloneDeep(_$1.merge({}, default_.value || nullValue.value, parentDefaultValue));
    }

    if (Object.keys(default_.value).length > 0) {
      return _$1.cloneDeep(default_.value);
    }

    return _$1.cloneDeep(nullValue.value);
  });
  return {
    defaultValue: defaultValue
  };
};

var group$4 = function group(props, context, dependencies) {
  var _toRefs3 = toRefs(props),
      default_ = _toRefs3["default"]; // ============ DEPENDENCIES =============


  var form$ = dependencies.form$;
  var parent = dependencies.parent; // ============== COMPUTED ===============

  var defaultValue = computed(function () {
    var parentDefaultValue = {};

    if (parent && parent.value && !parent.value.mounted) {
      parentDefaultValue = parent.value.defaultValue;
    } else if (!form$.value.mounted && form$.value.options["default"]) {
      parentDefaultValue = form$.value.options["default"];
    }

    return _$1.cloneDeep(_$1.merge({}, default_.value, parentDefaultValue));
  });
  return {
    defaultValue: defaultValue
  };
};

var multilingual$6 = function multilingual(props, context, dependencies) {
  var _toRefs4 = toRefs(props),
      default_ = _toRefs4["default"],
      name = _toRefs4.name; // ============ DEPENDENCIES =============


  var nullValue = dependencies.nullValue;
  var form$ = dependencies.form$;
  var parent = dependencies.parent; // ============== COMPUTED ===============

  var defaultValue = computed(function () {
    var parentDefaultValue;

    if (parent && parent.value && !parent.value.mounted) {
      parentDefaultValue = parent.value.defaultValue[name.value];
    } else if (!form$.value.mounted && form$.value.options["default"][name.value]) {
      parentDefaultValue = form$.value.options["default"][name.value];
    }

    if (parentDefaultValue !== undefined) {
      return _$1.cloneDeep(Object.assign({}, _$1.clone(nullValue.value), parentDefaultValue));
    }

    if (default_.value === undefined) {
      return _$1.clone(nullValue.value);
    }

    var def = _$1.clone(default_.value);

    if (!_$1.isPlainObject(def)) {
      var tempDefault = {};

      _$1.each(nullValue.value, function (v, language) {
        tempDefault[language] = def;
      });

      def = tempDefault;
    }

    return Object.assign({}, _$1.clone(nullValue.value), def);
  });
  return {
    defaultValue: defaultValue
  };
};

var base$B = function base(props, context, dependencies) {
  var _toRefs = toRefs(props),
      rules = _toRefs.rules; // ============ DEPENDENCIES ============


  var form$ = dependencies.form$;
  var path = dependencies.path; // ================ DATA ================

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
   * Instance of MessageBag service. Custom errors and messages [can be added](docs/1.x/validating-elements#custom-errors-and-messages).
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

  var validatorFactory = reactive({}); // ============== COMPUTED ===============

  /**
   * The element's validation rules.
   * 
   * @type {string|array}
   * @private
   */

  var validationRules = computed(function () {
    return rules.value;
  });
  /**
   * Whether the element's value was modified.
   * 
   * @type {boolean}
   */

  var dirty = computed(function () {
    return state.value.dirty;
  });
  /**
   * Whether the element was already validated at least once.
   * 
   * @type {boolean}
   */

  var validated = computed(function () {
    return state.value.validated;
  });
  /**
   * Whether the element has any failing rules.
   * 
   * @type {boolean}
   */

  var invalid = computed(function () {
    return _$1.some(Validators.value, {
      invalid: true
    });
  });
  /**
   * Whether the element has any async rules in progress.
   * 
   * @type {boolean}
   */

  var pending = computed(function () {
    return _$1.some(Validators.value, {
      pending: true
    });
  });
  /**
   * Whether the element is `pending`.
   * 
   * @type {boolean}
   */

  var busy = computed(function () {
    return pending.value;
  });
  /**
   * The list of errors of failing rules.
   * 
   * @type {array}
   * @private
   */

  var validatorErrors = computed(function () {
    var errs = [];

    _$1.each(Validators.value, function (Validator) {
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

  var errors = computed(function () {
    return messageBag.value.errors;
  });
  /**
   * The first error of `MessageBag`.
   * 
   * @type {string}
   */

  var error = computed(function () {
    return messageBag.value.error || null;
  }); // =============== METHODS ===============

  /**
   * Checks each validation rule for the element (async).
   * 
   * @returns {void}
   */

  var validate = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (validationRules.value) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              if (!(form$.value.validation === false)) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt("return");

            case 4:
              _context2.next = 6;
              return asyncForEach(Validators.value, /*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(Validator) {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return Validator.validate();

                        case 2:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x) {
                  return _ref2.apply(this, arguments);
                };
              }());

            case 6:
              state.value.validated = true;

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function validate() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Sets the validators to default state.
   * 
   * @returns {void}
   */


  var resetValidators = function resetValidators() {
    _$1.each(Validators.value, function (Validator) {
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


  var dirt = function dirt() {
    state.value.dirty = true;
  };
  /**
   * Removes the element's `dirty` state.
   * 
   * @returns {void}
   */


  var clean = function clean() {
    state.value.dirty = false;
  };
  /**
   * Initalizes MessageBag service.
   * 
   * @returns {void}
   * @private
   */


  var initMessageBag = function initMessageBag() {
    messageBag.value = new form$.value.$vueform.services.messageBag(validatorErrors);
  };
  /**
   * Initalizes validators.
   * 
   * @returns {void}
   * @private
   */


  var initValidation = function initValidation() {
    if (!validationRules.value) {
      return;
    } // If the element has rules it does not
    // qualify as validated by default


    state.value.validated = false;
    validatorFactory.value = new form$.value.$vueform.services.validation.factory(path.value, form$.value);
    Validators.value = [];

    _$1.each(validatorFactory.value.makeAll(validationRules.value), function (Validator) {
      Validators.value.push(Validator);
    });
  };

  return {
    state: state,
    Validators: Validators,
    messageBag: messageBag,
    dirty: dirty,
    validated: validated,
    invalid: invalid,
    pending: pending,
    busy: busy,
    errors: errors,
    error: error,
    validationRules: validationRules,
    validate: validate,
    dirt: dirt,
    clean: clean,
    resetValidators: resetValidators,
    initMessageBag: initMessageBag,
    initValidation: initValidation
  };
};

var text = function text(props, context, dependencies) {
  var _base = base$B(props, context, dependencies),
      state = _base.state,
      Validators = _base.Validators,
      messageBag = _base.messageBag,
      dirty = _base.dirty,
      validated = _base.validated,
      invalid = _base.invalid,
      pending = _base.pending,
      errors = _base.errors,
      error = _base.error,
      validationRules = _base.validationRules,
      validate = _base.validate,
      dirt = _base.dirt,
      clean = _base.clean,
      resetValidators = _base.resetValidators,
      initMessageBag = _base.initMessageBag,
      initValidation = _base.initValidation; // ============== COMPUTED ===============

  /**
   * Whether the element has a validation rule with pending debounce.
   * 
   * @type {boolean}
   */


  var debouncing = computed(function () {
    return _$1.some(Validators.value, {
      debouncing: true
    });
  });
  /**
   * Whether the element is `pending` or `debouncing`.
   * 
   * @type {boolean}
   */

  var busy = computed(function () {
    return pending.value || debouncing.value;
  });
  return {
    state: state,
    Validators: Validators,
    messageBag: messageBag,
    dirty: dirty,
    validated: validated,
    invalid: invalid,
    pending: pending,
    debouncing: debouncing,
    busy: busy,
    errors: errors,
    error: error,
    validationRules: validationRules,
    validate: validate,
    dirt: dirt,
    clean: clean,
    resetValidators: resetValidators,
    initMessageBag: initMessageBag,
    initValidation: initValidation
  };
};

var list$1 = function list(props, context, dependencies) {
  // ============ DEPENDENCIES ============
  var _base2 = base$B(props, context, dependencies),
      state = _base2.state,
      Validators = _base2.Validators,
      messageBag = _base2.messageBag,
      validationRules = _base2.validationRules,
      dirt = _base2.dirt,
      initValidation = _base2.initValidation;

  var form$ = dependencies.form$;
  var children$ = dependencies.children$; // ============== COMPUTED ==============

  /**
   * Whether the element's or any of its children's value was modified.
   * 
   * @type {boolean}
   */

  var dirty = computed(function () {
    return _$1.some(children$.value, {
      available: true,
      dirty: true
    }) || state.value.dirty;
  });
  /**
   * Whether the element and all of its children was already validated at least once.
   * 
   * @type {boolean}
   */

  var validated = computed(function () {
    return !_$1.some(children$.value, {
      available: true,
      validated: false
    }) && state.value.validated;
  });
  /**
   * Whether the element or any of its children has any failing rules.
   * 
   * @type {boolean}
   */

  var invalid = computed(function () {
    return _$1.some(children$.value, {
      available: true,
      invalid: true
    }) || _$1.some(Validators.value, {
      invalid: true
    });
  });
  /**
   * Whether the element or any of its children has any async rules in progress.
   * 
   * @type {boolean}
   */

  var pending = computed(function () {
    return _$1.some(children$.value, {
      available: true,
      pending: true
    }) || _$1.some(Validators.value, {
      pending: true
    });
  });
  /**
   * Whether the element or any of its chilren has a validation rule with pending debounce.
   * 
   * @type {boolean}
   */

  var debouncing = computed(function () {
    return _$1.some(children$.value, {
      available: true,
      debouncing: true
    }) || _$1.some(Validators.value, {
      debouncing: true
    });
  });
  /**
   * Whether the element or any of its children is `pending` or `debouncing`.
   * 
   * @type {boolean}
   */

  var busy = computed(function () {
    return _$1.some(children$.value, {
      available: true,
      busy: true
    }) || pending.value || debouncing.value;
  });
  var validatorErrors = computed(function () {
    var validatorErrors = [];

    _$1.each(Validators.value, function (Validator) {
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

  var childrenErrors = computed(function () {
    var childrenErrors = [];

    _$1.each(children$.value, function (element$) {
      if (!element$.available || element$.isStatic) {
        return;
      }

      _$1.each(element$.errors, function (error) {
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

  var baseErrors = computed(function () {
    return validatorErrors.value.concat(childrenErrors.value);
  });
  var errors = computed(function () {
    return messageBag.value.errors;
  });
  var error = computed(function () {
    return _$1.head(validatorErrors.value);
  }); // =============== METHODS ==============

  /**
   * Checks each validation rule for the element and validates children (async).
   * 
   * @returns {void}
   */

  var validate = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return validateValidators();

            case 2:
              _context3.next = 4;
              return validateChildren();

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

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
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!(form$.value.validation === false)) {
                _context5.next = 2;
                break;
              }

              return _context5.abrupt("return");

            case 2:
              _context5.next = 4;
              return asyncForEach(Validators.value, /*#__PURE__*/function () {
                var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(Validator) {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return Validator.validate();

                        case 2:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function (_x2) {
                  return _ref5.apply(this, arguments);
                };
              }());

            case 4:
              state.value.validated = true;

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

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
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              if (!(form$.value.validation === false)) {
                _context7.next = 2;
                break;
              }

              return _context7.abrupt("return");

            case 2:
              _context7.next = 4;
              return asyncForEach(children$.value, /*#__PURE__*/function () {
                var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(element$) {
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          _context6.next = 2;
                          return element$.validate();

                        case 2:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                }));

                return function (_x3) {
                  return _ref7.apply(this, arguments);
                };
              }());

            case 4:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    return function validateChildren() {
      return _ref6.apply(this, arguments);
    };
  }();

  var clean = function clean() {
    _$1.each(children$.value, function (element$) {
      element$.clean();
    });

    state.value.dirty = false;
  };

  var resetValidators = function resetValidators() {
    _$1.each(children$.value, function (element$) {
      if (element$.isStatic) {
        return;
      }

      element$.resetValidators();
    });

    _$1.each(Validators.value, function (Validator) {
      Validator.reset();
    });

    state.value.validated = !validationRules.value;
  };

  var initMessageBag = function initMessageBag() {
    messageBag.value = new form$.value.$vueform.services.messageBag(baseErrors);
  };

  return {
    state: state,
    Validators: Validators,
    messageBag: messageBag,
    dirty: dirty,
    validated: validated,
    invalid: invalid,
    pending: pending,
    debouncing: debouncing,
    busy: busy,
    validatorErrors: validatorErrors,
    childrenErrors: childrenErrors,
    errors: errors,
    error: error,
    validationRules: validationRules,
    validate: validate,
    validateValidators: validateValidators,
    validateChildren: validateChildren,
    dirt: dirt,
    clean: clean,
    resetValidators: resetValidators,
    initMessageBag: initMessageBag,
    initValidation: initValidation
  };
};

var multilingual$5 = function multilingual(props, context, dependencies) {
  var _toRefs2 = toRefs(props),
      rules = _toRefs2.rules; // ============ DEPENDENCIES ============


  var form$ = dependencies.form$;
  var path = dependencies.path;
  var languages = dependencies.languages;
  var language = dependencies.language;
  var value = dependencies.value;

  var _text = text(props, context, dependencies),
      messageBag = _text.messageBag; // ================ DATA ================


  var state = ref({
    dirty: {},
    validated: {}
  });
  var Validators = ref({}); // ============== COMPUTED ===============

  var validationRules = computed(function () {
    var ruleList = {};

    if (!rules.value) {
      return ruleList;
    }

    _$1.each(languages.value, function (lang) {
      ruleList[lang] = _$1.isPlainObject(rules.value) ? rules.value[lang] || null : rules.value;
    });

    return ruleList;
  });
  /**
   * Whether the element's value has been modified in any language.
   * 
   * @type {boolean}
   */

  var dirty = computed(function () {
    return _$1.some(state.value.dirty, function (val) {
      return val === true;
    });
  });
  /**
   * Whether all the languages have already been validated at least once.
   * 
   * @type {boolean}
   */

  var validated = computed(function () {
    return !_$1.some(state.value.validated, function (val) {
      return val === false;
    });
  });
  /**
   * Whether the element has failing rules in any language.
   * 
   * @type {boolean}
   */

  var invalid = computed(function () {
    var invalid = false;

    _$1.each(Validators.value, function (Validators) {
      if (_$1.some(Validators, {
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

  var pending = computed(function () {
    var pending = false;

    _$1.each(Validators.value, function (Validators) {
      if (_$1.some(Validators, {
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

  var debouncing = computed(function () {
    var debouncing = false;

    _$1.each(Validators.value, function (Validators) {
      if (_$1.some(Validators, {
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

  var busy = computed(function () {
    return pending.value || debouncing.value;
  });
  var validatorErrors = computed(function () {
    var errors = [];

    _$1.each(Validators.value, function (Validators, language) {
      _$1.each(Validators, function (Validator) {
        if (Validator.failing) {
          errors.push(Validator.message + ' (' + language + ')');
        }
      });
    });

    return errors;
  });
  var errors = computed(function () {
    return messageBag.value.errors;
  });
  var error = computed(function () {
    var error = null;

    _$1.each(Validators.value[language.value], function (Validator) {
      if (error !== null) {
        return false;
      }

      if (Validator.failing) {
        error = Validator.message;
      }
    });

    var errors = messageBag.value.prepends ? messageBag.value.prepends.errors : [];

    if (error !== null) {
      errors = _$1.concat(errors, [error]);
    }

    errors = _$1.concat(errors, messageBag.value.appends ? messageBag.value.appends.errors : []);
    return _$1.head(errors);
  }); // =============== METHODS ===============

  /**
   * Checks each validation rule for the element in every language (async).
   * 
   * @returns {void}
   */

  var validate = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return asyncForEach(languages.value, /*#__PURE__*/function () {
                var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(lang) {
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) {
                      switch (_context8.prev = _context8.next) {
                        case 0:
                          _context8.next = 2;
                          return validateLanguage(lang);

                        case 2:
                        case "end":
                          return _context8.stop();
                      }
                    }
                  }, _callee8);
                }));

                return function (_x4) {
                  return _ref9.apply(this, arguments);
                };
              }());

            case 2:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

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
    var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
      var lang,
          _args11 = arguments;
      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              lang = _args11.length > 0 && _args11[0] !== undefined ? _args11[0] : language.value;

              if (!(form$.value.validation === false)) {
                _context11.next = 3;
                break;
              }

              return _context11.abrupt("return");

            case 3:
              if (Validators.value[lang]) {
                _context11.next = 5;
                break;
              }

              return _context11.abrupt("return");

            case 5:
              _context11.next = 7;
              return asyncForEach(Validators.value[lang], /*#__PURE__*/function () {
                var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(Validator) {
                  return regeneratorRuntime.wrap(function _callee10$(_context10) {
                    while (1) {
                      switch (_context10.prev = _context10.next) {
                        case 0:
                          _context10.next = 2;
                          return Validator.validate(value.value[lang]);

                        case 2:
                        case "end":
                          return _context10.stop();
                      }
                    }
                  }, _callee10);
                }));

                return function (_x5) {
                  return _ref11.apply(this, arguments);
                };
              }());

            case 7:
              state.value.validated[lang] = true;

            case 8:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }));

    return function validateLanguage() {
      return _ref10.apply(this, arguments);
    };
  }();

  var resetValidators = function resetValidators() {
    _$1.each(languages.value, function (lang) {
      _$1.each(Validators.value[lang], function (Validator) {
        Validator.reset();
      });

      _$1.each(validationRules.value, function (r, lang) {
        state.value.validated[lang] = r.length > 0 ? false : true;
      });
    });
  };

  var dirt = function dirt() {
    state.value.dirty[language.value] = true;
  };

  var clean = function clean() {
    state.value.dirty[language.value] = false;
  };
  /**
   * Inits the default `state` object.
   * 
   * @returns {void}
   * @private
   */


  var initState = function initState() {
    var dirty = {};
    var validated = {};

    _$1.each(languages.value, function (lang) {
      dirty[lang] = false;
    });

    _$1.each(languages.value, function (lang) {
      validated[lang] = true;
    });

    state.value = {
      dirty: dirty,
      validated: validated
    };
  };

  var initMessageBag = function initMessageBag() {
    messageBag.value = new form$.value.$vueform.services.messageBag(validatorErrors);
  };

  var initValidation = function initValidation() {
    if (!validationRules.value) {
      return;
    } // If the element has rules it does not
    // qualify as validated by default


    _$1.each(validationRules.value, function (r, lang) {
      state.value.validated[lang] = r !== null && r.length > 0 ? false : true;
    });

    var factory = new form$.value.$vueform.services.validation.factory(path.value, form$.value);
    Validators.value = {};

    _$1.each(validationRules.value, function (languageRules, lang) {
      if (languageRules === null) {
        return;
      }

      if (!Validators.value[lang]) {
        Validators.value = Object.assign({}, Validators.value, _defineProperty$1({}, lang, []));
      }

      _$1.each(factory.makeAll(languageRules), function (Validator) {
        Validators.value[lang].push(Validator);
      });
    });
  };

  return {
    state: state,
    Validators: Validators,
    messageBag: messageBag,
    dirty: dirty,
    validated: validated,
    invalid: invalid,
    pending: pending,
    debouncing: debouncing,
    busy: busy,
    errors: errors,
    error: error,
    validationRules: validationRules,
    validate: validate,
    validateLanguage: validateLanguage,
    dirt: dirt,
    clean: clean,
    resetValidators: resetValidators,
    initState: initState,
    initMessageBag: initMessageBag,
    initValidation: initValidation
  };
};

var object$4 = function object(props, context, dependencies) {
  // ============ DEPENDENCIES ============
  var _base3 = base$B(props, context, dependencies),
      messageBag = _base3.messageBag;

  var children$ = dependencies.children$;
  var form$ = dependencies.form$; // ============== COMPUTED ==============

  /**
   * Whether the element has any child with modified value.
   * 
   * @type {boolean}
   */

  var dirty = computed(function () {
    return _$1.some(children$.value, {
      available: true,
      dirty: true
    });
  });
  /**
   * Whether all the children were validated at least once.
   * 
   * @type {boolean}
   */

  var validated = computed(function () {
    return !_$1.some(children$.value, {
      available: true,
      validated: false
    });
  });
  /**
   * Whether the element has any child with failing rules.
   * 
   * @type {boolean}
   */

  var invalid = computed(function () {
    return _$1.some(children$.value, {
      available: true,
      invalid: true
    });
  });
  /**
   * Whether the element has any child with async rules in progress.
   * 
   * @type {boolean}
   */

  var pending = computed(function () {
    return _$1.some(children$.value, {
      available: true,
      pending: true
    });
  });
  /**
   * Whether the element has any child with validation rule with pending debounce.
   * 
   * @type {boolean}
   */

  var debouncing = computed(function () {
    return _$1.some(children$.value, {
      available: true,
      debouncing: true
    });
  });
  /**
   * Whether the element has any `busy` child.
   * 
   * @type {boolean}
   */

  var busy = computed(function () {
    return _$1.some(children$.value, {
      available: true,
      busy: true
    });
  });
  /**
   * The list of errors collected from children.
   * 
   * @type {array}
   * @private
   */

  var childrenErrors = computed(function () {
    var errors = [];

    _$1.each(children$.value, function (element$) {
      if (!element$.available || element$.isStatic) {
        return;
      }

      _$1.each(element$.errors, function (error) {
        errors.push(error);
      });
    });

    return errors;
  });
  var errors = computed(function () {
    return messageBag.value.errors;
  }); // =============== METHODS ==============

  /**
   * Validates every child (async).
   * 
   * @returns {void}
   */

  var validate = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
      return regeneratorRuntime.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              _context13.next = 2;
              return asyncForEach(children$.value, /*#__PURE__*/function () {
                var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(element$) {
                  return regeneratorRuntime.wrap(function _callee12$(_context12) {
                    while (1) {
                      switch (_context12.prev = _context12.next) {
                        case 0:
                          if (!(!element$.available || element$.isStatic)) {
                            _context12.next = 2;
                            break;
                          }

                          return _context12.abrupt("return");

                        case 2:
                          _context12.next = 4;
                          return element$.validate();

                        case 4:
                        case "end":
                          return _context12.stop();
                      }
                    }
                  }, _callee12);
                }));

                return function (_x6) {
                  return _ref13.apply(this, arguments);
                };
              }());

            case 2:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13);
    }));

    return function validate() {
      return _ref12.apply(this, arguments);
    };
  }();
  /**
   * Removes every child's `dirty` state.
   * 
   * @returns {void}
   */


  var clean = function clean() {
    _$1.each(children$.value, function (element$) {
      if (element$.isStatic) {
        return;
      }

      element$.clean();
    });
  };
  /**
   * Sets the validators of children to default state.
   * 
   * @returns {void}
   */


  var resetValidators = function resetValidators() {
    _$1.each(children$.value, function (element$) {
      if (element$.isStatic) {
        return;
      }

      element$.resetValidators();
    });
  };

  var initMessageBag = function initMessageBag(el$) {
    messageBag.value = new form$.value.$vueform.services.messageBag(childrenErrors);
  };

  return {
    messageBag: messageBag,
    dirty: dirty,
    validated: validated,
    invalid: invalid,
    pending: pending,
    debouncing: debouncing,
    busy: busy,
    errors: errors,
    validate: validate,
    clean: clean,
    resetValidators: resetValidators,
    initMessageBag: initMessageBag
  };
};

var slider$1 = function slider(props, context, dependencies) {
  // ============ DEPENDENCIES ============
  var value = dependencies.value;

  var _base4 = base$B(props, context, dependencies),
      state = _base4.state,
      Validators = _base4.Validators,
      messageBag = _base4.messageBag,
      dirty = _base4.dirty,
      validated = _base4.validated,
      invalid = _base4.invalid,
      pending = _base4.pending,
      busy = _base4.busy,
      errors = _base4.errors,
      error = _base4.error,
      validationRules = _base4.validationRules,
      dirt = _base4.dirt,
      clean = _base4.clean,
      resetValidators = _base4.resetValidators,
      initMessageBag = _base4.initMessageBag,
      initValidation = _base4.initValidation; // =============== METHODS ==============


  var validate = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
      return regeneratorRuntime.wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              if (validationRules.value) {
                _context17.next = 2;
                break;
              }

              return _context17.abrupt("return");

            case 2:
              if (!_$1.isArray(value.value)) {
                _context17.next = 7;
                break;
              }

              _context17.next = 5;
              return asyncForEach(value.value, /*#__PURE__*/function () {
                var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(val) {
                  return regeneratorRuntime.wrap(function _callee15$(_context15) {
                    while (1) {
                      switch (_context15.prev = _context15.next) {
                        case 0:
                          _context15.next = 2;
                          return asyncForEach(Validators.value, /*#__PURE__*/function () {
                            var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(Validator) {
                              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                                while (1) {
                                  switch (_context14.prev = _context14.next) {
                                    case 0:
                                      _context14.next = 2;
                                      return Validator.validate(val);

                                    case 2:
                                    case "end":
                                      return _context14.stop();
                                  }
                                }
                              }, _callee14);
                            }));

                            return function (_x8) {
                              return _ref16.apply(this, arguments);
                            };
                          }());

                        case 2:
                          if (!invalid.value) {
                            _context15.next = 4;
                            break;
                          }

                          return _context15.abrupt("return", false);

                        case 4:
                        case "end":
                          return _context15.stop();
                      }
                    }
                  }, _callee15);
                }));

                return function (_x7) {
                  return _ref15.apply(this, arguments);
                };
              }());

            case 5:
              _context17.next = 9;
              break;

            case 7:
              _context17.next = 9;
              return asyncForEach(Validators.value, /*#__PURE__*/function () {
                var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(Validator) {
                  return regeneratorRuntime.wrap(function _callee16$(_context16) {
                    while (1) {
                      switch (_context16.prev = _context16.next) {
                        case 0:
                          _context16.next = 2;
                          return Validator.validate(value.value);

                        case 2:
                        case "end":
                          return _context16.stop();
                      }
                    }
                  }, _callee16);
                }));

                return function (_x9) {
                  return _ref17.apply(this, arguments);
                };
              }());

            case 9:
              state.value.validated = true;

            case 10:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17);
    }));

    return function validate() {
      return _ref14.apply(this, arguments);
    };
  }();

  return {
    state: state,
    Validators: Validators,
    messageBag: messageBag,
    dirty: dirty,
    validated: validated,
    invalid: invalid,
    pending: pending,
    busy: busy,
    errors: errors,
    error: error,
    validationRules: validationRules,
    validate: validate,
    dirt: dirt,
    clean: clean,
    resetValidators: resetValidators,
    initMessageBag: initMessageBag,
    initValidation: initValidation
  };
};

var file$1 = function file(props, context, dependencies) {
  // ============ DEPENDENCIES ============
  var form$ = dependencies.form$;
  var value = dependencies.value;
  var uploading = dependencies.uploading;
  var removing = dependencies.removing;

  var _base5 = base$B(props, context, dependencies),
      state = _base5.state,
      Validators = _base5.Validators,
      messageBag = _base5.messageBag,
      dirty = _base5.dirty,
      validated = _base5.validated,
      invalid = _base5.invalid,
      pending = _base5.pending,
      errors = _base5.errors,
      error = _base5.error,
      validationRules = _base5.validationRules,
      dirt = _base5.dirt,
      clean = _base5.clean,
      resetValidators = _base5.resetValidators,
      initMessageBag = _base5.initMessageBag,
      initValidation = _base5.initValidation; // ============== COMPUTED ==============

  /**
   * Whether the element is `pending`, `debouncing`, `uploading` or `removing`.
   * 
   * @type {boolean}
   */


  var busy = computed(function () {
    return pending.value || uploading.value || removing.value;
  }); // =============== METHODS ==============

  /**
   * Checks each validation rule for the element (async). File element will only validate for `min`, `max`, `between`, `size`, `mimetypes`, `mimes`, `dimensions`, `file`, `image`, `gt`, `gte`, `lt` and `lte` rules and only before the temporary files are uploaded.
   * 
   * @returns {void}
   */

  var validate = /*#__PURE__*/function () {
    var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
      var restricted;
      return regeneratorRuntime.wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              if (validationRules.value) {
                _context19.next = 2;
                break;
              }

              return _context19.abrupt("return");

            case 2:
              if (!(form$.value.validation === false)) {
                _context19.next = 4;
                break;
              }

              return _context19.abrupt("return");

            case 4:
              restricted = ['min', 'max', 'between', 'size', 'mimetypes', 'mimes', 'dimensions', 'file', 'image', 'gt', 'gte', 'lt', 'lte'];
              _context19.next = 7;
              return asyncForEach(Validators.value, /*#__PURE__*/function () {
                var _ref19 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(Validator) {
                  return regeneratorRuntime.wrap(function _callee18$(_context18) {
                    while (1) {
                      switch (_context18.prev = _context18.next) {
                        case 0:
                          if (!(!(value.value instanceof File) && !!value.value && restricted.indexOf(Validator.name) !== -1)) {
                            _context18.next = 2;
                            break;
                          }

                          return _context18.abrupt("return");

                        case 2:
                          _context18.next = 4;
                          return Validator.validate();

                        case 4:
                        case "end":
                          return _context18.stop();
                      }
                    }
                  }, _callee18);
                }));

                return function (_x10) {
                  return _ref19.apply(this, arguments);
                };
              }());

            case 7:
              state.value.validated = true;

            case 8:
            case "end":
              return _context19.stop();
          }
        }
      }, _callee19);
    }));

    return function validate() {
      return _ref18.apply(this, arguments);
    };
  }();

  return {
    state: state,
    Validators: Validators,
    messageBag: messageBag,
    dirty: dirty,
    validated: validated,
    invalid: invalid,
    pending: pending,
    busy: busy,
    errors: errors,
    error: error,
    validationRules: validationRules,
    validate: validate,
    dirt: dirt,
    clean: clean,
    resetValidators: resetValidators,
    initMessageBag: initMessageBag,
    initValidation: initValidation
  };
};

var location$2 = function location(props, context, dependencies) {
  var _toRefs3 = toRefs(props),
      displayKey = _toRefs3.displayKey; // ============ DEPENDENCIES ============


  var form$ = dependencies.form$;
  var value = dependencies.value;

  var _text2 = text(props, context, dependencies),
      state = _text2.state,
      Validators = _text2.Validators,
      messageBag = _text2.messageBag,
      dirty = _text2.dirty,
      validated = _text2.validated,
      invalid = _text2.invalid,
      pending = _text2.pending,
      debouncing = _text2.debouncing,
      busy = _text2.busy,
      errors = _text2.errors,
      error = _text2.error,
      validationRules = _text2.validationRules,
      dirt = _text2.dirt,
      clean = _text2.clean,
      resetValidators = _text2.resetValidators,
      initMessageBag = _text2.initMessageBag,
      initValidation = _text2.initValidation; // =============== METHODS ==============

  /**
   * Checks each validation rule for the element on [`displayKey`](#option-display-key) property of the location object (async).
   * 
   * @returns {void}
   */


  var validate = /*#__PURE__*/function () {
    var _ref20 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
      return regeneratorRuntime.wrap(function _callee21$(_context21) {
        while (1) {
          switch (_context21.prev = _context21.next) {
            case 0:
              if (validationRules.value) {
                _context21.next = 2;
                break;
              }

              return _context21.abrupt("return");

            case 2:
              if (!(form$.value.validation === false)) {
                _context21.next = 4;
                break;
              }

              return _context21.abrupt("return");

            case 4:
              _context21.next = 6;
              return asyncForEach(Validators.value, /*#__PURE__*/function () {
                var _ref21 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(Validator) {
                  return regeneratorRuntime.wrap(function _callee20$(_context20) {
                    while (1) {
                      switch (_context20.prev = _context20.next) {
                        case 0:
                          _context20.next = 2;
                          return Validator.validate(value.value[displayKey.value]);

                        case 2:
                        case "end":
                          return _context20.stop();
                      }
                    }
                  }, _callee20);
                }));

                return function (_x11) {
                  return _ref21.apply(this, arguments);
                };
              }());

            case 6:
              state.value.validated = true;

            case 7:
            case "end":
              return _context21.stop();
          }
        }
      }, _callee21);
    }));

    return function validate() {
      return _ref20.apply(this, arguments);
    };
  }();

  return {
    state: state,
    Validators: Validators,
    messageBag: messageBag,
    dirty: dirty,
    validated: validated,
    invalid: invalid,
    pending: pending,
    debouncing: debouncing,
    busy: busy,
    errors: errors,
    error: error,
    validationRules: validationRules,
    validate: validate,
    dirt: dirt,
    clean: clean,
    resetValidators: resetValidators,
    initMessageBag: initMessageBag,
    initValidation: initValidation
  };
};

var group$3 = object$4;

var base$A = function base(props, context, dependencies) {
  var _toRefs = toRefs(props),
      name = _toRefs.name,
      floating = _toRefs.floating,
      placeholder = _toRefs.placeholder,
      label = _toRefs.label,
      fieldName = _toRefs.fieldName; // ============ DEPENDENCIES ============


  var form$ = dependencies.form$; // ============== COMPUTED ==============

  /**
   * The generic name of the element constructed from label / floating or element name.
   * 
   * @type {string}
   * @private.
   */

  var genericName = computed(function () {
    if (fieldName && fieldName.value) {
      return fieldName.value;
    } else if (label && label.value) {
      return label.value;
    } else if (floating && floating.value) {
      return floating.value;
    } else if (placeholder && placeholder.value && form$.value.options.floatPlaceholders) {
      return placeholder.value;
    } else {
      return _$1.upperFirst(name.value).replace(/_|-/g, ' ');
    }
  });
  return {
    genericName: genericName
  };
};

var file = function file(props, context, dependencies) {
  var _toRefs2 = toRefs(props),
      name = _toRefs2.name,
      embed = _toRefs2.embed,
      label = _toRefs2.label,
      fieldName = _toRefs2.fieldName; // ============ DEPENDENCIES ============


  var form$ = dependencies.form$;
  var filename = dependencies.filename || ref(null); // ============== COMPUTED ==============

  /**
   * The generic name of the element constructed from label / floating, element name or default file name if name is a number.
   * 
   * @type {string}
   * @private.
   */

  var genericName = computed(function () {
    if (embed.value && filename.value) {
      return filename.value;
    } else if (fieldName && fieldName.value) {
      return fieldName.value;
    } else if (label.value) {
      return label.value;
    } else {
      return /^\d+$/.test(name.value) ? form$.value.__('vueform.elements.file.defaultName') : _$1.upperFirst(name.value).replace(/_|-/g, ' ');
    }
  });
  return {
    genericName: genericName
  };
};

var base$z = function base(props, context, dependencies) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var _toRefs = toRefs(props),
      name = _toRefs.name; // ============ DEPENDENCIES =============


  var parent = dependencies.parent;
  var defaultValue = dependencies.defaultValue;
  var dataPath = dependencies.dataPath;
  var form$ = dependencies.form$; // ================ DATA =================

  /**
   * The initial value of the element.
   * 
   * @type {any}
   * @private
   */

  var initialValue = ref(undefined);

  if (form$.value.isSync) {
    initialValue.value = _$1.get(form$.value.model, dataPath.value);
  } else if (parent.value && ['object', 'list', 'multifile'].indexOf(parent.value.type) !== -1) {
    initialValue.value = parent.value.value[name.value];
  } // ============== COMPUTED ===============

  /**
   * The store for the value of the element when we're not using external data (form's `v-model`).
   * 
   * @type {any}
   * @private
   */


  var internalValue = ref(_$1.cloneDeep(defaultValue.value));
  /**
   * The value of the element.
   * 
   * @type {any}
   */

  var value = computed(options.value || {
    get: function get() {
      var value;

      if (form$.value.isSync) {
        value = _$1.get(form$.value.model, dataPath.value);
      } else if (parent.value && ['object', 'list', 'multifile'].indexOf(parent.value.type) !== -1) {
        value = parent.value.value[name.value];
      } else {
        value = internalValue.value;
      }

      return value !== undefined ? value : defaultValue.value;
    },
    set: function set(val) {
      if (form$.value.isSync) {
        form$.value.updateModel(dataPath.value, val);
      } else if (parent.value && ['list', 'multifile'].indexOf(parent.value.type) !== -1) {
        var newValue = parent.value.value.map(function (v, k) {
          return k == name.value ? val : v;
        });
        parent.value.update(newValue);
      } else if (parent.value && ['object'].indexOf(parent.value.type) !== -1) {
        parent.value.value = Object.assign({}, parent.value.value, _defineProperty$1({}, name.value, val));
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
    get: function get() {
      return value.value;
    },
    set: function set(val) {
      value.value = val;
    }
  });

  if (options.init === undefined || options.init !== false) {
    // If element's value was undefined initially (not found in v-model/data) then we need to set it's value
    if (initialValue.value === undefined) {
      value.value = defaultValue.value;
    }
  }

  return {
    initialValue: initialValue,
    internalValue: internalValue,
    value: value,
    model: model
  };
};

var object$3 = function object(props, context, dependencies) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var _base = base$z(props, context, dependencies, {
    init: false
  }),
      initialValue = _base.initialValue,
      internalValue = _base.internalValue,
      value = _base.value; // ============ DEPENDENCIES =============


  var defaultValue = dependencies.defaultValue; // ================ HOOKS ================

  if (options.init === undefined || options.init !== false) {
    if (initialValue.value === undefined) {
      value.value = defaultValue.value;
    } else {
      value.value = Object.assign({}, defaultValue.value, value.value);
    }
  }

  return {
    internalValue: internalValue,
    value: value
  };
};

var group$2 = function group(props, context, dependencies) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  // ============ DEPENDENCIES =============
  var dataPath = dependencies.dataPath;
  var children$Array = dependencies.children$Array;
  var form$ = dependencies.form$; // ============== COMPUTED ===============

  var value = computed(options.value || {
    get: function get() {
      var value = {};

      _$1.each(children$Array.value, function (child$) {
        if (child$.isStatic) {
          return;
        }

        if (child$.flat) {
          value = Object.assign({}, value, child$.value);
        } else {
          value[child$.name] = child$.value;
        }
      });

      return value;
    },
    set: function set(val) {
      form$.value.updateModel(dataPath.value, val);
    }
  });
  return {
    value: value
  };
};

var multilingual$4 = function multilingual(props, context, dependencies) {
  var _base2 = base$z(props, context, dependencies),
      value = _base2.value; // ============ DEPENDENCIES =============


  var language = dependencies.language; // ============== COMPUTED ===============

  var model = computed({
    get: function get() {
      return value.value[language.value];
    },
    set: function set(val) {
      value.value = Object.assign({}, value.value, _defineProperty$1({}, language.value, val));
    }
  });
  return {
    value: value,
    model: model
  };
};

var date$1 = function date(props, context, dependencies) {
  // ============ DEPENDENCIES =============
  var valueDateFormat = dependencies.valueDateFormat;
  var dataPath = dependencies.dataPath;
  var form$ = dependencies.form$;

  var _base3 = base$z(props, context, dependencies, {
    value: {
      get: function get() {
        return _$1.get(form$.value.model, dataPath.value);
      },
      set: function set(val) {
        // If the value is not a Date object check if it is matching the value format
        if (!_$1.isEmpty(val) && !(val instanceof Date) && valueDateFormat.value !== false) {
          checkDateFormat(valueDateFormat.value, val);
        }

        form$.value.updateModel(dataPath.value, val && val instanceof Date && valueDateFormat.value !== false ? moment(val).format(valueDateFormat.value) : val);
      }
    }
  }),
      value = _base3.value; // ============== COMPUTED ===============


  var model = computed(function () {
    return value.value instanceof Date || !value.value ? value.value : moment(value.value, valueDateFormat.value).toDate();
  });
  return {
    value: value,
    model: model
  };
};

var dates$2 = function dates(props, context, dependencies) {
  // ============ DEPENDENCIES =============
  var valueDateFormat = dependencies.valueDateFormat;
  var dataPath = dependencies.dataPath;
  var form$ = dependencies.form$;

  var _base4 = base$z(props, context, dependencies, {
    value: {
      get: function get() {
        return _$1.get(form$.value.model, dataPath.value);
      },
      set: function set(val) {
        if (!Array.isArray(val)) {
          val = [val];
        }

        form$.value.updateModel(dataPath.value, val.map(function (v) {
          if (!_$1.isEmpty(v) && !(v instanceof Date) && valueDateFormat.value !== false) {
            checkDateFormat(valueDateFormat.value, v);
          }

          return v && v instanceof Date && valueDateFormat.value !== false ? moment(v).format(valueDateFormat.value) : v;
        }));
      }
    }
  }),
      value = _base4.value; // ============== COMPUTED ===============


  var model = computed(function () {
    return value.value.map(function (v) {
      return v instanceof Date || !v ? v : moment(v, valueDateFormat.value).toDate();
    });
  });
  return {
    value: value,
    model: model
  };
};

var base$y = function base(props, context, dependencies) {
  // ============ DEPENDENCIES =============
  var form$ = dependencies.form$;
  var fire = dependencies.fire;
  var dirt = dependencies.dirt;
  var validate = dependencies.validate;
  var value = dependencies.value; // ============== WATCHERS ===============

  onMounted(function () {
    watch(value, function (n, o) {
      if (dataEquals(n, o)) {
        return;
      }

      fire('change', n, o);

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

var multilingual$3 = function multilingual(props, context, dependencies) {
  // ============ DEPENDENCIES =============
  var form$ = dependencies.form$;
  var fire = dependencies.fire;
  var dirt = dependencies.dirt;
  var value = dependencies.value;
  var language = dependencies.language;
  var validateLanguage = dependencies.validateLanguage; // ============== WATCHERS ===============

  onMounted(function () {
    watch(value, function (n, o) {
      if (dataEquals(n, o)) {
        return;
      }

      fire('change', n, o);

      if (dirt) {
        dirt();
      }

      if (form$.value.shouldValidateOnChange) {
        validateLanguage(language.value);
      }
    }, {
      immediate: false,
      deep: true
    });
  });
};

var list = function list(props, context, dependencies) {
  // ============ DEPENDENCIES =============
  var form$ = dependencies.form$;
  var fire = dependencies.fire;
  var dirt = dependencies.dirt;
  var validateValidators = dependencies.validateValidators;
  var value = dependencies.value; // ============== WATCHERS ===============

  onMounted(function () {
    watch(value, function (n, o) {
      if (dataEquals(n, o)) {
        return;
      }

      fire('change', n, o);

      if (dirt) {
        dirt();
      }

      if (validateValidators && form$.value.shouldValidateOnChange) {
        validateValidators();
      }
    }, {
      immediate: false,
      deep: true
    });
  });
};

var object$2 = function object(props, context, dependencies) {
  // ============ DEPENDENCIES =============
  var fire = dependencies.fire;
  var value = dependencies.value; // ============== WATCHERS ===============

  onMounted(function () {
    watch(value, function (n, o) {
      if (dataEquals(n, o)) {
        return;
      }

      fire('change', n, o);
    }, {
      immediate: false,
      deep: true
    });
  });
};

var location$1 = function location(props, context, dependencies) {

  var _toRefs = toRefs(props),
      displayKey = _toRefs.displayKey; // ============ DEPENDENCIES =============


  var form$ = dependencies.form$;
  var fire = dependencies.fire;
  var dirt = dependencies.dirt;
  var validate = dependencies.validate;
  var value = dependencies.value;
  var input = dependencies.input; // ============== WATCHERS ===============

  onMounted(function () {
    watch(value, function (n, o) {
      if (dataEquals(n, o)) {
        return;
      }

      fire('change', n, o);
      dirt();
      input.value.value = input.value && value.value && value.value[displayKey.value] !== undefined ? value.value[displayKey.value] : '';

      if (validate && form$.value.shouldValidateOnChange) {
        validate();
      }
    }, {
      immediate: false,
      deep: true
    });
  });
};

var multifile$4 = list;
var group$1 = object$2;

var base$x = function base(props, context, dependencies) {
  // ============== COMPUTED ===============

  /**
   * The null value of the element.
   * 
   * @type {any}
   * @private
   */
  var nullValue = computed(function () {
    return null;
  });
  return {
    nullValue: nullValue
  };
};

var array$1 = function array(props, context, dependencies) {
  // ============== COMPUTED ===============
  var nullValue = computed(function () {
    return [];
  });
  return {
    nullValue: nullValue
  };
};

var _boolean = function _boolean(props, context, dependencies) {
  var _toRefs = toRefs(props),
      falseValue = _toRefs.falseValue; // ============== COMPUTED ===============


  var nullValue = computed(function () {
    return falseValue.value;
  });
  return {
    nullValue: nullValue
  };
};

var min = function min(props, context, dependencies) {
  var _toRefs2 = toRefs(props),
      min = _toRefs2.min,
      default_ = _toRefs2["default"]; // ============== COMPUTED ===============


  var nullValue = computed(function () {
    return default_.value !== undefined && _$1.isArray(default_.value) ? default_.value.map(function (v) {
      return min.value;
    }) : min.value;
  });
  return {
    nullValue: nullValue
  };
};

var object$1 = function object(props, context, dependencies) {
  // ============== COMPUTED ===============
  var nullValue = computed(function () {
    return {};
  });
  return {
    nullValue: nullValue
  };
};

var location = function location(props, context, dependencies) {
  // ============== COMPUTED ===============
  var nullValue = computed(function () {
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
    nullValue: nullValue
  };
};

var multilingual$2 = function multilingual(props, context, dependencies) {
  // ============ DEPENDENCIES ============
  var languages = dependencies.languages; // ============== COMPUTED ===============

  var nullValue = computed(function () {
    var value = {};

    _$1.each(languages.value, function (code) {
      value[code] = null;
    });

    return value;
  });
  return {
    nullValue: nullValue
  };
};

var base$w = function base(props, context, dependencies) {
  var _toRefs = toRefs(props),
      trueValue = _toRefs.trueValue,
      falseValue = _toRefs.falseValue; // ============ DEPENDENCIES ============


  var update = dependencies.update; // =============== METHODS ==============

  /**
   * Sets the toggle to `on` ([`trueValue`](#option-true-value)).
   *
   * @returns {void}
   */

  var check = function check() {
    update(trueValue.value);
  };
  /**
   * Sets the toggle to `off` ([`falseValue`](#option-false-value)).
   *
   * @returns {void}
   */


  var uncheck = function uncheck() {
    update(falseValue.value);
  };

  return {
    check: check,
    uncheck: uncheck
  };
};

var checkbox = function checkbox(props, context, dependencies) {
  var _toRefs2 = toRefs(props),
      trueValue = _toRefs2.trueValue,
      falseValue = _toRefs2.falseValue; // ============ DEPENDENCIES ============


  var update = dependencies.update; // =============== METHODS ==============

  /**
   * Checks the checkbox.
   *
   * @returns {void}
   */

  var check = function check() {
    update(trueValue.value);
  };
  /**
   * Unchecks the checkbox.
   *
   * @returns {void}
   */


  var uncheck = function uncheck() {
    update(falseValue.value);
  };

  return {
    check: check,
    uncheck: uncheck
  };
};

var HasChange = {
  props: {
    onChange: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    }
  }
};

var HasData = {
  props: {
    formatData: {
      required: false,
      type: [Function],
      "default": null
    },
    formatLoad: {
      required: false,
      type: [Function],
      "default": null
    },
    submit: {
      required: false,
      type: [Boolean],
      "default": true
    }
  }
};

var HasValidation = {
  props: {
    rules: {
      required: false,
      type: [Array, String, Object],
      "default": null
    },
    messages: {
      required: false,
      type: [Object],
      "default": function _default() {
        return {};
      }
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
      "default": 'checkbox',
      "private": true
    },
    "default": {
      required: false,
      type: [String, Boolean, Number],
      "default": undefined // falseValue

    },
    id: {
      required: false,
      type: [String],
      "default": null
    },
    text: {
      required: false,
      type: [String],
      "default": null
    },
    disabled: {
      required: false,
      type: [Boolean],
      "default": false
    },
    trueValue: {
      required: false,
      type: [Boolean, String, Number],
      "default": true
    },
    falseValue: {
      required: false,
      type: [Boolean, String, Number],
      "default": false
    }
  },
  setup: function setup(props, context) {
    var form$ = base$Z();
    var theme = base$Y();
    var layout = base$L(props);
    var input$1 = base$E();
    var path = base$G(props, context);
    var disabled = base$K(props);
    var nullValue = _boolean(props);
    var fieldId = base$F(props, context, {
      path: path.path
    });
    var events = base$$(props, context, {}, {
      events: context.emits
    });
    var baseElement = base$H(props, context, {
      form$: form$.form$,
      fire: events.fire
    });
    var default_ = base$C(props, context, {
      nullValue: nullValue.nullValue,
      form$: form$.form$,
      dataPath: path.dataPath
    });
    var conditions = base$W(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var validation = base$B(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var value = base$z(props, context, {
      defaultValue: default_.defaultValue,
      dataPath: path.dataPath,
      form$: form$.form$,
      parent: path.parent
    });
    var data = base$D(props, context, {
      form$: form$.form$,
      available: conditions.available,
      value: value.value,
      resetValidators: validation.resetValidators,
      defaultValue: default_.defaultValue,
      nullValue: nullValue.nullValue
    });
    var label = base$R(props, context, {
      form$: form$.form$,
      el$: baseElement.el$
    });
    var genericName = base$A(props, context, {
      label: label.label,
      form$: form$.form$
    });
    var templates = base$O(props, context, {
      theme: theme.theme,
      form$: form$.form$
    });
    var classes = input(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      isDisabled: disabled.isDisabled,
      templates: templates.templates
    });
    var columns = base$Q(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      hasLabel: label.hasLabel
    });
    var view = base$P(props, context, {
      available: conditions.available,
      active: baseElement.active
    });
    var slots = base$N(props, context, {
      form$: form$.form$,
      el$: baseElement.el$,
      templates: templates.templates
    }, {
      slots: ['default', 'label', 'info', 'description', 'before', 'between', 'after']
    });
    var toggle = checkbox(props, context, {
      update: data.update
    });
    base$y(props, context, {
      form$: form$.form$,
      value: value.value,
      fire: events.fire,
      dirt: validation.dirt,
      validate: validation.validate
    });
    onMounted(function () {
      validation.initMessageBag();
      validation.initValidation();
    });
    return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, form$), fieldId), theme), layout), input$1), path), conditions), value), validation), label), classes), columns), baseElement), genericName), view), templates), slots), disabled), events), data), default_), nullValue), toggle);
  }
};

var base$v = function base(props, context, dependencies) {
  var _toRefs = toRefs(props),
      items = _toRefs.items; // ============ DEPENDENCIES ============


  var value = dependencies.value; // =============== METHODS ==============

  /**
   * Checks one or more checkboxes.
   *
   * @param {array|string|number} values* value(s) to check
   * @returns {void}
   */

  var check = function check(values) {
    if (!_$1.isArray(values)) {
      values = [values];
    }

    var items = _$1.clone(value.value);

    _$1.each(values, function (item) {
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


  var uncheck = function uncheck(values) {
    if (!_$1.isArray(values)) {
      values = [values];
    }

    var items = _$1.clone(value.value);

    _$1.each(values, function (item) {
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


  var checkAll = function checkAll() {
    check(_$1.keys(items.value));
  };
  /**
   * Unchecks all checkboxes.
   *
   * @returns {void}
   */


  var uncheckAll = function uncheckAll() {
    uncheck(_$1.keys(items.value));
  };

  return {
    check: check,
    uncheck: uncheck,
    checkAll: checkAll,
    uncheckAll: uncheckAll
  };
};

var base$u = function base(props, context, dependencies) {
  var _toRefs = toRefs(props),
      items = _toRefs.items; // ============ DEPENDENCIES ============


  var isNative = dependencies.isNative;
  var disable = dependencies.disable;
  var enable = dependencies.enable;
  var input = dependencies.input;
  var el$ = dependencies.el$; // ================ DATA ================

  /**
   * Contains the fetched items when using async `items`.
   * 
   * @type {array|object}
   * @default null
   * @private
   */

  var resolvedItems = ref(null); // ============== COMPUTED ==============

  /**
   * Contains select options for native select. 
   * 
   * @type {array}
   */

  var nativeItems = computed(function () {
    var nativeItems = [];

    _$1.each(resolvedItems.value, function (item, key) {
      if ([null, undefined].indexOf(item) !== -1) {
        return;
      }

      if (Array.isArray(resolvedItems.value) && _typeof$1(item) === 'object') {
        if (item.value === undefined) {
          throw new Error('You must define `value` property for each option when using an array of objects options for select element');
        }

        nativeItems.push({
          value: item.value,
          label: item.label
        });
      } else if (Array.isArray(resolvedItems.value)) {
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
  }); // =============== METHODS ==============

  /**
   * Fetches & updates select options when using `async` options. Receives [`el$`](#property-el) as first param.
   * 
   * @param {boolean} disable* whether the input field should be disabled while fetching options
   * @returns {void} 
   */

  var updateItems = function updateItems() {
    var shouldDisable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    if (!isNative.value) {
      input.value.resolveOptions();
      return;
    }

    if (shouldDisable) {
      disable();
    }

    items.value(el$.value).then(function (response) {
      resolvedItems.value = response;

      if (shouldDisable) {
        enable();
      }
    });
  };
  /**
   * Resolves items.
   * 
   * @return {void}
   * @private
   */


  var resolveItems = function resolveItems() {
    if (typeof items.value !== 'function') {
      resolvedItems.value = items.value;
    } else {
      updateItems();
    }
  }; // ================ HOOKS ===============


  if (isNative.value) {
    resolveItems();
    watch(items, resolveItems);
  }

  return {
    nativeItems: nativeItems,
    updateItems: updateItems
  };
};

var tags$1 = function tags(props, context, dependencies) {
  var _base = base$u(props, context, dependencies),
      updateItems = _base.updateItems;

  return {
    updateItems: updateItems
  };
};

var checkboxgroup = function checkboxgroup(props, context, dependencies) {
  var _toRefs2 = toRefs(props),
      items = _toRefs2.items; // ============ DEPENDENCIES ============


  var disableAll = dependencies.disableAll;
  var enableAll = dependencies.enableAll;
  var el$ = dependencies.el$; // ================ DATA ================

  /**
   * Contains the fetched items when using async `items`.
   * 
   * @type {array|object}
   * @default null
   * @private
   */

  var resolvedItemList = ref(null); // ============== COMPUTED ==============

  /**
   * Contains the available items. If [`items`](#option-items) are async this contains the resolved items.
   * 
   * @type {array}
   */

  var resolvedItems = computed(function () {
    var resolvedItems = {};

    _$1.each(resolvedItemList.value, function (item, key) {
      if ([null, undefined].indexOf(item) !== -1) {
        return;
      }

      if (Array.isArray(resolvedItemList.value) && _typeof$1(item) === 'object') {
        if (item.value === undefined) {
          throw new Error('You must define `value` property for each item when using an array of objects options');
        }

        resolvedItems[item.value] = item;
      } else if (Array.isArray(resolvedItemList.value)) {
        resolvedItems[item] = _typeof$1(item) === 'object' ? item : {
          label: item
        };
      } else {
        resolvedItems[key] = _typeof$1(item) === 'object' ? item : {
          label: item
        };
      }
    });

    return resolvedItems;
  }); // =============== METHODS ==============

  /**
   * Fetches & updates items when using `async` items. Receives [`el$`](#property-el) as first param.
   * 
   * @param {boolean} disable* whether the input field should be disabled while fetching options
   * @returns {void} 
   */

  var updateItems = function updateItems() {
    var shouldDisable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    if (shouldDisable) {
      disableAll();
    }

    items.value(el$.value).then(function (response) {
      resolvedItemList.value = response;

      if (shouldDisable) {
        enableAll();
      }
    });
  };
  /**
   * Resolves items.
   * 
   * @return {void}
   * @private
   */


  var resolveItems = function resolveItems() {
    if (typeof items.value !== 'function') {
      resolvedItemList.value = items.value;
    } else {
      updateItems();
    }
  }; // ================ HOOKS ===============


  resolveItems();
  watch(items, resolveItems);
  return {
    resolvedItems: resolvedItems,
    updateItems: updateItems
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
      "default": 'checkboxgroup',
      "private": true
    },
    "default": {
      required: false,
      type: [Array],
      "default": function _default() {
        return [];
      }
    },
    id: {
      required: false,
      type: [String],
      "default": null
    },
    items: {
      required: false,
      type: [Object, Array, Function],
      "default": function _default() {
        return {};
      }
    },
    disabled: {
      required: false,
      type: [Boolean],
      "default": false
    },
    disables: {
      required: false,
      type: [Array],
      "default": function _default() {
        return [];
      }
    }
  },
  setup: function setup(props, context) {
    var form$ = base$Z();
    var theme = base$Y();
    var layout = base$L(props);
    var path = base$G(props, context);
    var nullValue = array$1();
    var fieldId = base$F(props, context, {
      path: path.path
    });
    var events = base$$(props, context, {}, {
      events: context.emits
    });
    var baseElement = checkboxgroup$1(props, context, {
      form$: form$.form$,
      fire: events.fire
    });
    var disabled = checkboxgroup$2(props, context, {
      form$: form$.form$
    });
    var asyncItems = checkboxgroup(props, context, {
      disableAll: disabled.disableAll,
      enableAll: disabled.enableAll,
      el$: baseElement.el$
    });
    var default_ = base$C(props, context, {
      nullValue: nullValue.nullValue,
      form$: form$.form$,
      dataPath: path.dataPath
    });
    var conditions = base$W(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var validation = base$B(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var value = base$z(props, context, {
      defaultValue: default_.defaultValue,
      dataPath: path.dataPath,
      form$: form$.form$,
      parent: path.parent
    });
    var check = base$v(props, context, {
      value: value.value
    });
    var data = base$D(props, context, {
      form$: form$.form$,
      available: conditions.available,
      value: value.value,
      resetValidators: validation.resetValidators,
      defaultValue: default_.defaultValue,
      nullValue: nullValue.nullValue
    });
    var label = base$R(props, context, {
      form$: form$.form$,
      el$: baseElement.el$
    });
    var genericName = base$A(props, context, {
      label: label.label,
      form$: form$.form$
    });
    var templates = base$O(props, context, {
      theme: theme.theme,
      form$: form$.form$
    });
    var classes = base$J(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      templates: templates.templates
    });
    var columns = base$Q(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      hasLabel: label.hasLabel
    });
    var view = base$P(props, context, {
      available: conditions.available,
      active: baseElement.active
    });
    var slots = base$N(props, context, {
      form$: form$.form$,
      el$: baseElement.el$,
      templates: templates.templates
    }, {
      slots: ['checkbox', 'label', 'info', 'description', 'before', 'between', 'after']
    });
    base$y(props, context, {
      form$: form$.form$,
      value: value.value,
      fire: events.fire,
      dirt: validation.dirt,
      validate: validation.validate
    });
    onMounted(function () {
      validation.initMessageBag();
      validation.initValidation();
    });
    return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, form$), theme), layout), fieldId), path), conditions), value), validation), label), classes), columns), baseElement), genericName), view), templates), slots), disabled), events), data), default_), nullValue), check), asyncItems);
  }
};

var base$t = function base(props, context, dependencies) {
  var _toRefs = toRefs(props),
      addons = _toRefs.addons; // ============ DEPENDENCIES ============


  var el$ = dependencies.el$; // ============== COMPUTED ==============

  var hasAddonBefore = computed(function () {
    var _el$$value$$slots, _el$$value$$scopedSlo;

    return !!(addons.value.before || (_el$$value$$slots = el$.value.$slots) !== null && _el$$value$$slots !== void 0 && _el$$value$$slots['addon-before'] || context.expose === undefined && (_el$$value$$scopedSlo = el$.value.$scopedSlots) !== null && _el$$value$$scopedSlo !== void 0 && _el$$value$$scopedSlo['addon-before']);
  });
  var hasAddonAfter = computed(function () {
    var _el$$value$$slots2, _el$$value$$scopedSlo2;

    return !!(addons.value.after || (_el$$value$$slots2 = el$.value.$slots) !== null && _el$$value$$slots2 !== void 0 && _el$$value$$slots2['addon-after'] || context.expose === undefined && (_el$$value$$scopedSlo2 = el$.value.$scopedSlots) !== null && _el$$value$$scopedSlo2 !== void 0 && _el$$value$$scopedSlo2['addon-after']);
  });
  return {
    hasAddonBefore: hasAddonBefore,
    hasAddonAfter: hasAddonAfter
  };
};

var base$s = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============
  var value = dependencies.value;
  var nullValue = dependencies.nullValue; // ============== COMPUTED ==============

  /**
    * Whether the element has no value filled in.
    * 
    * @type {boolean}
    */

  var empty = computed(function () {
    return _$1.isEqual(value.value, nullValue.value) || [undefined, null, ''].indexOf(value.value) !== -1;
  });
  return {
    empty: empty
  };
};

var multilingual$1 = function multilingual(props, context, dependencies) {
  // ============ DEPENDENCIES ============
  var value = dependencies.value;
  var nullValue = dependencies.nullValue;
  var language = dependencies.language; // ============== COMPUTED ==============

  var empty = computed(function () {
    return value.value[language.value] == nullValue.value[language.value] || value.value[language.value] === '';
  });
  return {
    empty: empty
  };
};

var array = function array(props, context, dependencies) {
  // ============ DEPENDENCIES ============
  var value = dependencies.value;
  var nullValue = dependencies.nullValue; // ============== COMPUTED ==============

  var empty = computed(function () {
    return _$1.isEqual(value.value, nullValue.value) || [undefined, null, ''].indexOf(value.value) !== -1 || value.value.length == 0;
  });
  return {
    empty: empty
  };
};

var base$r = function base(props, context, dependencies) {
  var _toRefs = toRefs(props),
      displayFormat = _toRefs.displayFormat,
      valueFormat = _toRefs.valueFormat,
      loadFormat = _toRefs.loadFormat,
      date = _toRefs.date,
      time = _toRefs.time,
      seconds = _toRefs.seconds,
      hour24 = _toRefs.hour24; // ============ DEPENDENCIES =============


  var form$ = dependencies.form$; // =============== PRIVATE ===============

  /**
   * The default date format for display, value & load.
   * 
   * @type {string}
   * @private
   */

  var defaultFormat = computed(function () {
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

    return form$.value.__("vueform.dateFormats.".concat(format));
  }); // ============== COMPUTED ===============

  /**
   * The display date format.
   * 
   * @type {string}
   * @private
   */

  var displayDateFormat = computed(function () {
    return displayFormat.value !== null ? displayFormat.value : defaultFormat.value;
  });
  /**
   * The format of date value.
   * 
   * @type {string}
   * @private
   */

  var valueDateFormat = computed(function () {
    return valueFormat.value !== null || valueFormat.value === false ? valueFormat.value : defaultFormat.value;
  });
  /**
   * The date format of the data the element being loaded with.
   * 
   * @type {string}
   * @private
   */

  var loadDateFormat = computed(function () {
    return loadFormat.value !== null ? loadFormat.value : defaultFormat.value;
  });
  return {
    displayDateFormat: displayDateFormat,
    valueDateFormat: valueDateFormat,
    loadDateFormat: loadDateFormat
  };
};

var dates$1 = function dates(props, context, dependencies) {
  var _toRefs2 = toRefs(props),
      displayFormat = _toRefs2.displayFormat,
      valueFormat = _toRefs2.valueFormat,
      loadFormat = _toRefs2.loadFormat; // ============ DEPENDENCIES =============


  var form$ = dependencies.form$; // =============== PRIVATE ===============

  var defaultFormat = computed(function () {
    return form$.value.__("vueform.dateFormats.date");
  }); // ============== COMPUTED ===============

  var displayDateFormat = computed(function () {
    return displayFormat.value !== null ? displayFormat.value : defaultFormat.value;
  });
  var valueDateFormat = computed(function () {
    return valueFormat.value !== null || valueFormat.value === false ? valueFormat.value : defaultFormat.value;
  });
  var loadDateFormat = computed(function () {
    return loadFormat.value !== null ? loadFormat.value : defaultFormat.value;
  });
  return {
    displayDateFormat: displayDateFormat,
    valueDateFormat: valueDateFormat,
    loadDateFormat: loadDateFormat
  };
};

var base$q = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============
  var value = dependencies.value; // =============== METHODS ==============

  /**
   * Handles `change` event.
   *
   * @param {string} val* value of the element
   * @returns {void}
   * @private
   */

  var handleChange = function handleChange(val) {
    value.value = val;
  };

  return {
    handleChange: handleChange
  };
};

var base$p = function base(props, context, dependencies) {
  var _toRefs = toRefs(props),
      floating = _toRefs.floating,
      placeholder = _toRefs.placeholder; // ============ DEPENDENCIES ============


  var form$ = dependencies.form$; // ============== COMPUTED ==============

  /**
   * Whether the element floating label.
   * 
   * @type {boolean}
   */

  var hasFloating = computed(function () {
    return !!(!!floating.value || placeholder.value && form$.value.options.floatPlaceholders);
  });
  return {
    hasFloating: hasFloating
  };
};

var date = function date(props, context, dependencies) {
  var _toRefs = toRefs(props),
      disables = _toRefs.disables,
      min = _toRefs.min,
      max = _toRefs.max,
      extendOptions = _toRefs.extendOptions,
      readonly = _toRefs.readonly,
      hour24 = _toRefs.hour24,
      seconds = _toRefs.seconds,
      date = _toRefs.date,
      time = _toRefs.time; // ============ DEPENDENCIES ============


  var isDisabled = dependencies.isDisabled;
  var displayDateFormat = dependencies.displayDateFormat;
  var valueDateFormat = dependencies.valueDateFormat; // ============== COMPUTED ==============

  /**
   * List of dates to disable.
   * 
   * @type {array} 
   * @private
   */

  var disabledDates = computed(function () {
    if (disables.value === undefined) {
      return [];
    }

    return _$1.map(disables.value, function (disabledDate) {
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

  var minDate = computed(function () {
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

  var maxDate = computed(function () {
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

  var defaultOptions = computed(function () {
    return {
      dateFormat: displayDateFormat.value,
      minDate: minDate.value,
      maxDate: maxDate.value,
      disable: disables.value,
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

  var fieldOptions = computed(function () {
    return Object.assign({}, defaultOptions.value, extendOptions.value || {});
  });
  /**
   * Whether date selector has `date` enabled.
   * 
   * @type {boolean}
   * @private
   */

  var hasDate = computed(function () {
    return true;
  });
  /**
   * Whether date selector has `time` enabled.
   * 
   * @type {boolean}
   * @private
   */

  var hasTime = computed(function () {
    return false;
  });
  return {
    minDate: minDate,
    maxDate: maxDate,
    disabledDates: disabledDates,
    fieldOptions: fieldOptions,
    hasDate: hasDate,
    hasTime: hasTime
  };
};

var dates = function dates(props, context, dependencies) {
  var _toRefs2 = toRefs(props),
      mode = _toRefs2.mode,
      extendOptions = _toRefs2.extendOptions,
      readonly = _toRefs2.readonly;

  var _date = date(props, context, dependencies),
      minDate = _date.minDate,
      maxDate = _date.maxDate,
      disabledDates = _date.disabledDates; // ============ DEPENDENCIES ============


  var isDisabled = dependencies.isDisabled;
  var displayDateFormat = dependencies.displayDateFormat; // ============== COMPUTED ==============

  var defaultOptions = computed(function () {
    return {
      mode: mode.value,
      dateFormat: displayDateFormat.value,
      minDate: minDate.value,
      maxDate: maxDate.value,
      disable: disabledDates.value,
      clickOpens: !isDisabled.value && !readonly.value
    };
  });
  var fieldOptions = computed(function () {
    return Object.assign({}, defaultOptions.value, extendOptions.value || {});
  });
  var hasDate = computed(function () {
    return true;
  });
  var hasTime = computed(function () {
    return false;
  });
  return {
    minDate: minDate,
    maxDate: maxDate,
    disabledDates: disabledDates,
    fieldOptions: fieldOptions,
    hasDate: hasDate,
    hasTime: hasTime
  };
};

var select = function select(props, context, dependencies) {
  var _toRefs3 = toRefs(props),
      _native = _toRefs3["native"],
      extendOptions = _toRefs3.extendOptions,
      labelProp = _toRefs3.labelProp,
      trackBy = _toRefs3.trackBy,
      valueProp = _toRefs3.valueProp,
      search = _toRefs3.search,
      limit = _toRefs3.limit,
      noOptionsText = _toRefs3.noOptionsText,
      noResultsText = _toRefs3.noResultsText,
      caret = _toRefs3.caret,
      object = _toRefs3.object,
      delay = _toRefs3.delay,
      minChars = _toRefs3.minChars,
      resolveOnLoad = _toRefs3.resolveOnLoad,
      filterResults = _toRefs3.filterResults,
      clearOnSearch = _toRefs3.clearOnSearch,
      canDeselect = _toRefs3.canDeselect,
      canClear = _toRefs3.canClear,
      openDirection = _toRefs3.openDirection,
      strict = _toRefs3.strict,
      closeOnSelect = _toRefs3.closeOnSelect,
      autocomplete = _toRefs3.autocomplete,
      groups = _toRefs3.groups,
      groupLabel = _toRefs3.groupLabel,
      groupOptions = _toRefs3.groupOptions,
      groupHideEmpty = _toRefs3.groupHideEmpty,
      inputType = _toRefs3.inputType; // ============ DEPENDENCIES ============


  var form$ = dependencies.form$;
  var isLoading = dependencies.isLoading; // ============== COMPUTED ==============

  /**
   * Whether native select should be used.
   * 
   * @type {string}
   */

  var isNative = computed(function () {
    return _native.value && !search.value;
  });
  /**
  * Default options for non-native select input.
  * 
  * @type {object} 
  * @private
  */

  var defaultOptions = computed(function () {
    return {
      mode: 'single',
      searchable: search.value,
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
      inputType: inputType.value
    };
  });
  /**
  * Options for non-native select input. Can be extended via [`extend-options`](#option-extend-options) with [@vueform/multiselect options](https://github.com/vueform/multiselect#basic-props).
  * 
  * @type {object} 
  */

  var fieldOptions = computed(function () {
    return Object.assign({}, defaultOptions.value, extendOptions.value || {});
  });
  return {
    fieldOptions: fieldOptions,
    isNative: isNative
  };
};

var multiselect = function multiselect(props, context, dependencies) {
  var _toRefs4 = toRefs(props),
      _native2 = _toRefs4["native"],
      extendOptions = _toRefs4.extendOptions,
      labelProp = _toRefs4.labelProp,
      trackBy = _toRefs4.trackBy,
      valueProp = _toRefs4.valueProp,
      search = _toRefs4.search,
      limit = _toRefs4.limit,
      noOptionsText = _toRefs4.noOptionsText,
      noResultsText = _toRefs4.noResultsText,
      caret = _toRefs4.caret,
      object = _toRefs4.object,
      delay = _toRefs4.delay,
      minChars = _toRefs4.minChars,
      resolveOnLoad = _toRefs4.resolveOnLoad,
      filterResults = _toRefs4.filterResults,
      clearOnSearch = _toRefs4.clearOnSearch,
      clearOnSelect = _toRefs4.clearOnSelect,
      canClear = _toRefs4.canClear,
      max = _toRefs4.max,
      openDirection = _toRefs4.openDirection,
      strict = _toRefs4.strict,
      closeOnSelect = _toRefs4.closeOnSelect,
      autocomplete = _toRefs4.autocomplete,
      groups = _toRefs4.groups,
      groupLabel = _toRefs4.groupLabel,
      groupOptions = _toRefs4.groupOptions,
      groupHideEmpty = _toRefs4.groupHideEmpty,
      groupSelect = _toRefs4.groupSelect,
      inputType = _toRefs4.inputType,
      hideSelected = _toRefs4.hideSelected,
      multipleLabel = _toRefs4.multipleLabel; // ============ DEPENDENCIES ============


  var form$ = dependencies.form$;
  var isLoading = dependencies.isLoading; // ============== COMPUTED ==============

  /**
   * Whether native multiselect should be used.
   * 
   * @type {string}
   */

  var isNative = computed(function () {
    return _native2.value && !search.value;
  });
  /**
  * Default options for non-native multiselect input.
  * 
  * @type {object} 
  * @private
  */

  var defaultOptions = computed(function () {
    return {
      mode: 'multiple',
      searchable: search.value,
      noOptionsText: noOptionsText.value || form$.value.__('vueform.multiselect.noOptions'),
      noResultsText: noResultsText.value || form$.value.__('vueform.multiselect.noResults'),
      multipleLabel: multipleLabel.value || function (val) {
        return val && val.length > 1 ? form$.value.__('vueform.multiselect.multipleLabelMore', {
          options: val.length
        }) : form$.value.__('vueform.multiselect.multipleLabelOne');
      },
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
      hideSelected: hideSelected.value
    };
  });
  /**
  * Options for non-native multiselect input. Can be extended via [`extend-options`](#option-extend-options) with [@vueform/multiselect options](https://github.com/vueform/multiselect#basic-props).
  * 
  * @type {object} 
  */

  var fieldOptions = computed(function () {
    return Object.assign({}, defaultOptions.value, extendOptions.value || {});
  });
  return {
    fieldOptions: fieldOptions,
    isNative: isNative
  };
};

var tags = function tags(props, context, dependencies) {
  var _toRefs5 = toRefs(props),
      extendOptions = _toRefs5.extendOptions,
      labelProp = _toRefs5.labelProp,
      trackBy = _toRefs5.trackBy,
      valueProp = _toRefs5.valueProp,
      search = _toRefs5.search,
      limit = _toRefs5.limit,
      noOptionsText = _toRefs5.noOptionsText,
      noResultsText = _toRefs5.noResultsText,
      caret = _toRefs5.caret,
      object = _toRefs5.object,
      delay = _toRefs5.delay,
      minChars = _toRefs5.minChars,
      resolveOnLoad = _toRefs5.resolveOnLoad,
      filterResults = _toRefs5.filterResults,
      clearOnSearch = _toRefs5.clearOnSearch,
      clearOnSelect = _toRefs5.clearOnSelect,
      canClear = _toRefs5.canClear,
      max = _toRefs5.max,
      showOptions = _toRefs5.showOptions,
      openDirection = _toRefs5.openDirection,
      strict = _toRefs5.strict,
      closeOnSelect = _toRefs5.closeOnSelect,
      autocomplete = _toRefs5.autocomplete,
      groups = _toRefs5.groups,
      groupLabel = _toRefs5.groupLabel,
      groupOptions = _toRefs5.groupOptions,
      groupHideEmpty = _toRefs5.groupHideEmpty,
      groupSelect = _toRefs5.groupSelect,
      inputType = _toRefs5.inputType,
      hideSelected = _toRefs5.hideSelected,
      create = _toRefs5.create,
      appendNewTag = _toRefs5.appendNewTag,
      addTagOn = _toRefs5.addTagOn; // ============ DEPENDENCIES ============


  var form$ = dependencies.form$;
  var isLoading = dependencies.isLoading; // ================ DATA ================

  /**
   * Technical prop to be able to use the same template for tags as for select.
   * 
   * @type {boolean}
   * @default false
   * @private
   */

  var _native3 = ref(false); // ============== COMPUTED ==============

  /**
   * Technical prop to be able to use the same template for tags as for select.
   * 
   * @type {boolean}
   * @private
   */


  var isNative = computed(function () {
    return false;
  });
  /**
  * Default options for tags input.
  * 
  * @type {object} 
  * @private
  */

  var defaultOptions = computed(function () {
    return {
      mode: 'tags',
      searchable: search.value || create.value,
      createTag: create.value,
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
      appendNewTag: appendNewTag.value,
      addTagOn: addTagOn.value
    };
  });
  /**
  * Options for tags input. Can be extended via [`extend-options`](#option-extend-options) with [@vueform/multiselect options](https://github.com/vueform/multiselect#basic-props).
  * 
  * @type {object} 
  */

  var fieldOptions = computed(function () {
    return Object.assign({}, defaultOptions.value, extendOptions.value || {});
  });
  return {
    "native": _native3,
    fieldOptions: fieldOptions,
    isNative: isNative
  };
};

var slider = function slider(props, context, dependencies) {
  var _toRefs6 = toRefs(props),
      min = _toRefs6.min,
      max = _toRefs6.max,
      step = _toRefs6.step,
      tooltips = _toRefs6.tooltips,
      merge = _toRefs6.merge,
      format = _toRefs6.format,
      orientation = _toRefs6.orientation,
      direction = _toRefs6.direction,
      extendOptions = _toRefs6.extendOptions,
      showTooltip = _toRefs6.showTooltip,
      tooltipPosition = _toRefs6.tooltipPosition; // ============ DEPENDENCIES ============


  var isDisabled = dependencies.isDisabled; // ============== COMPUTED ==============

  /**
  * Default options for slider input.
  * 
  * @type {object}
  * @private
  */

  var defaultOptions = computed(function () {
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
      tooltipPosition: tooltipPosition.value
    };
  });
  /**
  * Options for slider input. Can be extended via [`extend-options`](#option-extend-options) with [@vueform/slider options](https://github.com/vueform/slider#basic-props).
  * 
  * @type {object} 
  */

  var fieldOptions = computed(function () {
    return Object.assign({}, defaultOptions.value, extendOptions.value || {});
  });
  return {
    fieldOptions: fieldOptions
  };
};

var toggle = function toggle(props, context, dependencies) {
  var _toRefs7 = toRefs(props),
      labels = _toRefs7.labels,
      extendOptions = _toRefs7.extendOptions,
      trueValue = _toRefs7.trueValue,
      falseValue = _toRefs7.falseValue; // ============ DEPENDENCIES ============


  var isDisabled = dependencies.isDisabled; // ============== COMPUTED ==============

  /**
  * Default options toggle input.
  * 
  * @type {object}
  * @private
  */

  var defaultOptions = computed(function () {
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

  var fieldOptions = computed(function () {
    return Object.assign({}, defaultOptions.value, extendOptions.value || {});
  });
  return {
    fieldOptions: fieldOptions
  };
};

var DateElement = {
  name: 'DateElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      "default": 'date',
      "private": true
    },
    "default": {
      required: false,
      type: [String, Date],
      "default": null
    },
    addons: {
      required: false,
      type: [Object],
      "default": function _default() {
        return {};
      }
    },
    disabled: {
      required: false,
      type: [Boolean],
      "default": false
    },
    floating: {
      required: false,
      type: [String],
      "default": null
    },
    id: {
      required: false,
      type: [String],
      "default": null
    },
    displayFormat: {
      required: false,
      type: [String],
      "default": null,
      '@default': 'locale.vueform.dateFormats.*'
    },
    valueFormat: {
      required: false,
      type: [String, Boolean],
      "default": null,
      '@default': 'locale.vueform.dateFormats.*'
    },
    loadFormat: {
      required: false,
      type: [String],
      "default": null,
      '@default': 'locale.vueform.dateFormats.*'
    },
    date: {
      required: false,
      type: [Boolean],
      "default": true
    },
    time: {
      required: false,
      type: [Boolean],
      "default": false
    },
    seconds: {
      required: false,
      type: [Boolean],
      "default": false
    },
    hour24: {
      required: false,
      type: [Boolean],
      "default": true
    },
    min: {
      required: false,
      type: [String, Date],
      "default": null
    },
    max: {
      required: false,
      type: [String, Date],
      "default": null
    },
    disables: {
      required: false,
      type: [Array],
      "default": function _default() {
        return [];
      }
    },
    extendOptions: {
      required: false,
      type: [Object],
      "default": function _default() {
        return {};
      }
    },
    placeholder: {
      required: false,
      type: [String],
      "default": null
    },
    readonly: {
      required: false,
      type: [Boolean],
      "default": false
    }
  },
  setup: function setup(props, context) {
    var form$ = base$Z();
    var theme = base$Y();
    var layout = base$L(props);
    var input$1 = base$E();
    var path = base$G(props, context);
    var disabled = base$K(props);
    var nullValue = base$x();
    var fieldId = base$F(props, context, {
      path: path.path
    });
    var floating = base$p(props, context, {
      form$: form$.form$
    });
    var events = base$$(props, context, {}, {
      events: context.emits
    });
    var baseElement = base$H(props, context, {
      form$: form$.form$,
      fire: events.fire
    });
    var addons = base$t(props, context, {
      el$: baseElement.el$
    });
    var dateFormat = base$r(props, context, {
      form$: form$.form$
    });
    var options = date(props, context, {
      form$: form$.form$,
      isDisabled: disabled.isDisabled,
      valueDateFormat: dateFormat.valueDateFormat,
      displayDateFormat: dateFormat.displayDateFormat
    });
    var default_ = base$C(props, context, {
      form$: form$.form$,
      nullValue: nullValue.nullValue,
      path: path.path,
      parent: path.parent
    });
    var conditions = base$W(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var validation = base$B(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var value = date$1(props, context, {
      valueDateFormat: dateFormat.valueDateFormat,
      defaultValue: default_.defaultValue,
      dataPath: path.dataPath,
      form$: form$.form$,
      parent: path.parent
    });
    var data = date$2(props, context, {
      form$: form$.form$,
      available: conditions.available,
      value: value.value,
      resetValidators: validation.resetValidators,
      defaultValue: default_.defaultValue,
      nullValue: nullValue.nullValue,
      loadDateFormat: dateFormat.loadDateFormat
    });
    var empty = base$s(props, context, {
      value: value.value,
      nullValue: nullValue.nullValue
    });
    var label = base$R(props, context, {
      form$: form$.form$,
      el$: baseElement.el$
    });
    var genericName = base$A(props, context, {
      label: label.label,
      form$: form$.form$
    });
    var templates = base$O(props, context, {
      theme: theme.theme,
      form$: form$.form$
    });
    var classes = input(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      isDisabled: disabled.isDisabled,
      templates: templates.templates
    });
    var columns = base$Q(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      hasLabel: label.hasLabel
    });
    var view = base$P(props, context, {
      available: conditions.available,
      active: baseElement.active
    });
    var slots = base$N(props, context, {
      form$: form$.form$,
      el$: baseElement.el$,
      templates: templates.templates
    }, {
      slots: ['label', 'info', 'description', 'before', 'between', 'after', 'addon-before', 'addon-after']
    });
    var handleChange = base$q(props, context, {
      value: value.value
    });
    base$y(props, context, {
      form$: form$.form$,
      value: value.value,
      fire: events.fire,
      dirt: validation.dirt,
      validate: validation.validate
    });
    onMounted(function () {
      validation.initMessageBag();
      validation.initValidation();
    });
    return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, form$), fieldId), theme), layout), input$1), addons), path), conditions), value), validation), label), classes), columns), baseElement), genericName), view), templates), slots), disabled), events), data), empty), default_), nullValue), options), dateFormat), handleChange), floating);
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
      "default": 'dates',
      "private": true
    },
    "default": {
      required: false,
      type: [Array],
      "default": function _default() {
        return [];
      }
    },
    addons: {
      required: false,
      type: [Object],
      "default": function _default() {
        return {};
      }
    },
    disabled: {
      required: false,
      type: [Boolean],
      "default": false
    },
    floating: {
      required: false,
      type: [String],
      "default": null
    },
    id: {
      required: false,
      type: [String],
      "default": null
    },
    displayFormat: {
      required: false,
      type: [String],
      "default": null
    },
    valueFormat: {
      required: false,
      type: [String, Boolean],
      "default": null
    },
    loadFormat: {
      required: false,
      type: [String, Boolean],
      "default": null
    },
    mode: {
      required: false,
      type: [String],
      "default": 'multiple'
    },
    min: {
      required: false,
      type: [String, Date],
      "default": null
    },
    max: {
      required: false,
      type: [String, Date],
      "default": null
    },
    disables: {
      required: false,
      type: [Array],
      "default": function _default() {
        return [];
      }
    },
    extendOptions: {
      required: false,
      type: [Object],
      "default": function _default() {
        return {};
      }
    },
    placeholder: {
      required: false,
      type: [String],
      "default": null
    },
    readonly: {
      required: false,
      type: [Boolean],
      "default": false
    }
  },
  setup: function setup(props, context) {
    var form$ = base$Z();
    var theme = base$Y();
    var layout = base$L(props);
    var input$1 = base$E();
    var path = base$G(props, context);
    var disabled = base$K(props);
    var nullValue = array$1();
    var fieldId = base$F(props, context, {
      path: path.path
    });
    var floating = base$p(props, context, {
      form$: form$.form$
    });
    var events = base$$(props, context, {}, {
      events: context.emits
    });
    var baseElement = dates$4(props, context, {
      form$: form$.form$,
      fire: events.fire
    });
    var addons = base$t(props, context, {
      el$: baseElement.el$
    });
    var dateFormat = dates$1(props, context, {
      form$: form$.form$
    });
    var options = dates(props, context, {
      form$: form$.form$,
      isDisabled: disabled.isDisabled,
      displayDateFormat: dateFormat.displayDateFormat,
      valueDateFormat: dateFormat.valueDateFormat
    });
    var default_ = base$C(props, context, {
      form$: form$.form$,
      nullValue: nullValue.nullValue,
      path: path.path,
      parent: path.parent
    });
    var value = dates$2(props, context, {
      valueDateFormat: dateFormat.valueDateFormat,
      defaultValue: default_.defaultValue,
      dataPath: path.dataPath,
      form$: form$.form$,
      parent: path.parent
    });
    var conditions = base$W(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var validation = base$B(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var data = dates$3(props, context, {
      form$: form$.form$,
      available: conditions.available,
      value: value.value,
      resetValidators: validation.resetValidators,
      defaultValue: default_.defaultValue,
      nullValue: nullValue.nullValue,
      loadDateFormat: dateFormat.loadDateFormat
    });
    var empty = base$s(props, context, {
      value: value.value,
      nullValue: nullValue.nullValue
    });
    var label = base$R(props, context, {
      form$: form$.form$,
      el$: baseElement.el$
    });
    var genericName = base$A(props, context, {
      label: label.label,
      form$: form$.form$
    });
    var templates = base$O(props, context, {
      theme: theme.theme,
      form$: form$.form$
    });
    var classes = input(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      isDisabled: disabled.isDisabled,
      templates: templates.templates
    });
    var columns = base$Q(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      hasLabel: label.hasLabel
    });
    var view = base$P(props, context, {
      available: conditions.available,
      active: baseElement.active
    });
    var slots = base$N(props, context, {
      form$: form$.form$,
      el$: baseElement.el$,
      templates: templates.templates
    }, {
      slots: ['label', 'info', 'description', 'before', 'between', 'after', 'addon-before', 'addon-after']
    });
    var handleChange = base$q(props, context, {
      value: value.value
    });
    base$y(props, context, {
      form$: form$.form$,
      value: value.value,
      fire: events.fire,
      dirt: validation.dirt,
      validate: validation.validate
    });
    onMounted(function () {
      validation.initMessageBag();
      validation.initValidation();
    });
    return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, form$), fieldId), theme), layout), input$1), addons), path), conditions), value), validation), label), classes), columns), baseElement), genericName), view), templates), slots), disabled), events), data), empty), default_), nullValue), handleChange), options), dateFormat), floating);
  }
};

var base$o = function base(props, context, dependencies) {
  var _toRefs = toRefs(props);
      _toRefs.type;
      var embed = _toRefs.embed,
      auto = _toRefs.auto,
      methods = _toRefs.methods,
      urls = _toRefs.urls,
      url = _toRefs.url,
      previewUrl = _toRefs.previewUrl,
      params = _toRefs.params,
      softRemove = _toRefs.softRemove,
      view = _toRefs.view; // ============ DEPENDENCIES ============


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
  dependencies.el$; // ================ DATA ================

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

  var preparing = ref(false); // ============== COMPUTED ==============

  /**
   * The url where the temp file should be submitted.
   * 
   * @type {object}
   * @default config.endpoints.uploadTempFile.url
   * @private
   */

  var uploadTempFileUrl = computed(function () {
    return urls.value.uploadTempFile || form$.value.$vueform.config.endpoints.uploadTempFile.url;
  });
  /**
   * The url where the remove temp file request should be submitted.
   * 
   * @type {object}
   * @default config.endpoints.removeTempFile.url
   * @private
   */

  var removeTempFileUrl = computed(function () {
    return urls.value.removeTempFile || form$.value.$vueform.config.endpoints.removeTempFile.url;
  });
  /**
   * The url where the remove file request should be submitted.
   * 
   * @type {object}
   * @default config.endpoints.removeFile.url
   * @private
   */

  var removeFileUrl = computed(function () {
    return urls.value.removeFile || form$.value.$vueform.config.endpoints.removeFile.url;
  });
  /**
   * The method where the temp file should be submitted.
   * 
   * @type {object}
   * @default config.endpoints.uploadTempFile.method
   * @private
   */

  var uploadTempFileMethod = computed(function () {
    return methods.value.uploadTempFile || form$.value.$vueform.config.endpoints.uploadTempFile.method;
  });
  /**
   * The method where the remove temp file request should be submitted.
   * 
   * @type {object}
   * @default config.endpoints.removeTempFile.method
   * @private
   */

  var removeTempFileMethod = computed(function () {
    return methods.value.removeTempFile || form$.value.$vueform.config.endpoints.removeTempFile.method;
  });
  /**
   * The method where the remove file request should be submitted.
   * 
   * @type {object}
   * @default config.endpoints.removeFile.method
   * @private
   */

  var removeFileMethod = computed(function () {
    return methods.value.removeFile || form$.value.$vueform.config.endpoints.removeFile.method;
  });
  /**
   * URL to file using the [`url`](#url) option without including the filename. If `url` is not defined it will default to `'/'`.
   * 
   * @type {string}
   * @private
   */

  var fileUrl = computed(function () {
    if (url.value === undefined) {
      return '/';
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

  var filePreviewUrl = computed(function () {
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

  var stage = computed(function () {
    if (value.value === null) {
      return 0; // file not selected
    }

    if (value.value instanceof File) {
      return 1; // file selected
    }

    if (_$1.isObject(value.value) && value.value.tmp !== undefined) {
      return 2; // temp uploaded
    }

    if (_$1.isString(value.value)) {
      return 3; // file uploaded
    }

    return -1;
  });
  /**
   * The original or stored name of the file.
   * 
   * @type {string}
   */

  var filename = computed(function () {
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

  var link = computed(function () {
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

  var previewLink = computed(function () {
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

  var preview = computed(function () {
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

  var uploaded = computed(function () {
    return stage.value === 3;
  });
  /**
   * Whether the file can be removed. 
   * 
   * @type {boolean}
   */

  var canRemove = computed(function () {
    return stage.value > 0 && !uploading.value && !isDisabled.value && !preparing.value && !removing.value;
  });
  /**
   * Whether temporary file can be uploaded.
   * 
   * @type {boolean}
   */

  var canUploadTemp = computed(function () {
    return stage.value === 1 && !auto.value && !uploading.value && !isDisabled.value;
  });
  /**
   * Whether file can be selected.
   * 
   * @type {boolean}
   */

  var canSelect = computed(function () {
    return !embed.value && stage.value == 0;
  }); // =============== METHODS ==============

  /**
   * Upload temporary file (async).
   * 
   * @returns {void}
   */

  var uploadTemp = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var data, response;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(stage.value !== 1)) {
                _context.next = 2;
                break;
              }

              throw new Error('No file is selected');

            case 2:
              _context.next = 4;
              return validate();

            case 4:
              if (!invalid.value) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return");

            case 6:
              request.value = axios.value.CancelToken.source();
              _context.prev = 7;
              data = getFormData(Object.assign({}, params.value, {
                file: value.value,
                formKey: form$.value.options.formKey,
                path: path.value
              }));
              hasUploadError.value = false;
              _context.next = 12;
              return axios.value[uploadTempFileMethod.value](uploadTempFileUrl.value, data, {
                onUploadProgress: function onUploadProgress(e) {
                  progress.value = Math.round(e.loaded * 100 / e.total);
                },
                cancelToken: request.value.token
              });

            case 12:
              response = _context.sent;
              update(response.data);
              _context.next = 21;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](7);
              progress.value = 0;

              if (!axios.value.isCancel(_context.t0)) {
                hasUploadError.value = true;
                handleError(_context.t0);
              }

              throw new Error(_context.t0);

            case 21:
              _context.prev = 21;
              request.value = null;
              return _context.finish(21);

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[7, 16, 21, 24]]);
    }));

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
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              removing.value = true;
              hasUploadError.value = false;
              _context2.prev = 2;

              if (!(stage.value === 3 && !softRemove.value)) {
                _context2.next = 10;
                break;
              }

              if (confirm(form$.value.__("vueform.elements.file.removeConfirm"))) {
                _context2.next = 6;
                break;
              }

              return _context2.abrupt("return", false);

            case 6:
              _context2.next = 8;
              return axios.value[removeFileMethod.value](removeFileUrl.value, Object.assign({}, params.value, {
                file: value.value,
                formKey: form$.value.options.formKey,
                path: path.value
              }));

            case 8:
              _context2.next = 13;
              break;

            case 10:
              if (!(stage.value === 2 && !softRemove.value)) {
                _context2.next = 13;
                break;
              }

              _context2.next = 13;
              return axios.value[removeTempFileMethod.value](removeTempFileUrl.value, Object.assign({}, params.value, {
                file: value.value.tmp,
                formKey: form$.value.options.formKey,
                path: path.value
              }));

            case 13:
              _context2.next = 19;
              break;

            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](2);
              handleError(_context2.t0);
              return _context2.abrupt("return");

            case 19:
              _context2.prev = 19;
              removing.value = false;
              return _context2.finish(19);

            case 22:
              update(null);
              progress.value = 0;
              fire('remove');

            case 25:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 15, 19, 22]]);
    }));

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
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(stage.value === 1)) {
                _context3.next = 8;
                break;
              }

              preparing.value = true;
              _context3.prev = 2;
              _context3.next = 5;
              return uploadTemp();

            case 5:
              _context3.prev = 5;
              preparing.value = false;
              return _context3.finish(5);

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[2,, 5, 8]]);
    }));

    return function prepare() {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * Handles `change` event.
   * 
   * @param {Event} e* 
   * @returns {void}
   * @private
   */


  var handleChange = function handleChange(e) {
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


  var handleClick = function handleClick() {
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


  var handleUploadTemp = function handleUploadTemp() {
    uploadTemp();
  };
  /**
   * Handles `remove` event.
   * 
   * @returns {void}
   * @private
   */


  var handleRemove = function handleRemove() {
    remove();
  };
  /**
   * Handles `abort` event.
   * 
   * @returns {void}
   * @private
   */


  var handleAbort = function handleAbort() {
    if (request.value === null) {
      return;
    }

    request.value.cancel();
  }; // ============== WATCHERS ==============


  watch(value, function (val) {
    if (!val) {
      base64.value = null;
      return;
    }

    if (!isImageType.value || !(value.value instanceof File) || view.value === 'file') {
      return;
    }

    var reader = new FileReader();

    reader.onload = function (e) {
      base64.value = e.target.result;
    };

    reader.readAsDataURL(value.value);
  }, {
    immediate: true
  });

  if (value.value instanceof File && auto.value) {
    nextTick(function () {
      uploadTemp();
    });
  }

  return {
    hasUploadError: hasUploadError,
    base64: base64,
    progress: progress,
    preparing: preparing,
    uploadTempFileUrl: uploadTempFileUrl,
    removeTempFileUrl: removeTempFileUrl,
    removeFileUrl: removeFileUrl,
    uploadTempFileMethod: uploadTempFileMethod,
    removeTempFileMethod: removeTempFileMethod,
    removeFileMethod: removeFileMethod,
    fileUrl: fileUrl,
    stage: stage,
    filename: filename,
    link: link,
    preview: preview,
    uploaded: uploaded,
    canRemove: canRemove,
    canUploadTemp: canUploadTemp,
    canSelect: canSelect,
    uploadTemp: uploadTemp,
    remove: remove,
    prepare: prepare,
    handleChange: handleChange,
    handleClick: handleClick,
    handleUploadTemp: handleUploadTemp,
    handleRemove: handleRemove,
    handleAbort: handleAbort
  };
};

var base$n = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============
  var form$ = dependencies.form$; // ================ DATA ================

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

  var axios = ref(null); // ============== COMPUTED ==============

  /**
   * Whether a temp file is currently being uploaded.
   * 
   * @private
   */

  var uploading = computed(function () {
    return request.value !== null;
  }); // =============== HOOKS ================

  onMounted(function () {
    axios.value = form$.value.$vueform.services.axios;
  });
  return {
    request: request,
    axios: axios,
    uploading: uploading
  };
};

function checkFileType(file, accept) {
  if (!accept) {
    return true;
  }

  if (!_$1.isArray(accept)) {
    accept = accept.split(',');

    _$1.each(accept, function (one, i) {
      accept[i] = one.trim();
    });
  }

  return _$1.some(accept, function (a) {
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

var base$m = function base(props, context, dependencies) {
  var _toRefs = toRefs(props),
      accept = _toRefs.accept; // ============ DEPENDENCIES =============


  var update = dependencies.update;
  var isDisabled = dependencies.isDisabled; // ============== COMPUTED ==============

  /**
   * Whether `drop` is enabled and browser supports dragging.
   * 
   * @type {boolean}
   * @private
   */

  var canDrop = computed(function () {
    var div = document.createElement('div');
    return ('draggable' in div || 'ondragstart' in div && 'ondrop' in div) && 'FormData' in window && 'FileReader' in window;
  }); // =============== METHODS ==============

  /**
   * Handles the `drop` event.
   * 
   * @param {Event} e 
   * @returns {void}
   * @private 
   */

  var handleDrop = function handleDrop(e) {
    if (isDisabled.value) {
      return;
    }

    var file = e.dataTransfer.files[0];

    if (!checkFileType(file, accept.value)) {
      return;
    }

    update(file || null);
    file.value = null;
  };

  return {
    canDrop: canDrop,
    handleDrop: handleDrop
  };
};

var multifile$3 = function multifile(props, context, dependencies) {
  var _toRefs2 = toRefs(props),
      accept = _toRefs2.accept;

  var _base = base$m(props, context, dependencies),
      canDrop = _base.canDrop; // ============ DEPENDENCIES =============


  var add = dependencies.add;
  var isDisabled = dependencies.isDisabled;
  var isObject = dependencies.isObject;
  var storeFileName = dependencies.storeFileName; // =============== METHODS ==============

  var handleDrop = function handleDrop(e) {
    if (!e.dataTransfer || !e.dataTransfer.files || e.dataTransfer.files.length == 0 || isDisabled.value) {
      return;
    }

    _$1.each(e.dataTransfer.files, function (file) {
      if (!checkFileType(file, accept.value)) {
        return;
      }

      add(isObject.value ? _defineProperty$1({}, storeFileName.value, file) : file);
    });
  };

  return {
    canDrop: canDrop,
    handleDrop: handleDrop
  };
};

var base$l = function base(props, context, dependencies) {
  // ================ DATA ================

  /**
   * Whether async file removing request is in progress.
   * 
   * @type {boolean}
   */
  var removing = ref(false);
  return {
    removing: removing
  };
};

var base$k = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============
  var fire = dependencies.fire;
  dependencies.listeners; // =============== METHODS ==============

  /**
   * Handles `error` event.
   *
   * @param {Error} error* the error object
   * @returns {void}
   * @private
   */

  var handleError = function handleError(error) {
    fire('error', error);
  };

  return {
    handleError: handleError
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
      "default": 'file',
      "private": true
    },
    "default": {
      required: false,
      // @todo
      type: [String, Object],
      "default": null
    },
    disabled: {
      required: false,
      type: [Boolean],
      "default": false
    },
    id: {
      required: false,
      type: [String],
      "default": null
    },
    onRemove: {
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
    view: {
      type: [String],
      required: false,
      "default": 'file'
    },
    drop: {
      required: false,
      type: [Boolean],
      "default": false
    },
    accept: {
      required: false,
      type: [String, Array],
      "default": null
    },
    clickable: {
      required: false,
      type: [Boolean],
      "default": true
    },
    url: {
      required: false,
      type: [String],
      "default": '/'
    },
    previewUrl: {
      required: false,
      type: [String],
      "default": undefined
    },
    auto: {
      required: false,
      type: [Boolean],
      "default": true
    },
    urls: {
      required: false,
      type: [Object],
      "default": function _default() {
        return {};
      }
    },
    methods: {
      required: false,
      type: [Object],
      "default": function _default() {
        return {};
      }
    },
    params: {
      required: false,
      type: [Object],
      "default": function _default() {
        return {};
      }
    },
    softRemove: {
      required: false,
      type: [Boolean],
      "default": false
    },
    embed: {
      type: [Boolean],
      required: false,
      "default": false
    }
  },
  setup: function setup(props, context) {
    var form$ = base$Z();
    var theme = base$Y();
    var layout = base$L(props);
    var input = base$E();
    var path = base$G(props, context);
    var disabled = base$K(props);
    var nullValue = base$x();
    var removing = base$l();
    var fieldId = base$F(props, context, {
      path: path.path
    });
    var events = base$$(props, context, {}, {
      events: context.emits
    });
    var baseElement = file$2(props, context, {
      form$: form$.form$,
      fire: events.fire
    });
    var request = base$n(props, context, {
      form$: form$.form$
    });
    var default_ = base$C(props, context, {
      nullValue: nullValue.nullValue,
      form$: form$.form$,
      dataPath: path.dataPath,
      parent: path.parent
    });
    var conditions = base$W(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var value = base$z(props, context, {
      defaultValue: default_.defaultValue,
      dataPath: path.dataPath,
      form$: form$.form$,
      parent: path.parent
    });
    var validation = file$1(props, context, {
      form$: form$.form$,
      path: path.path,
      uploading: request.uploading,
      removing: removing.removing,
      value: value.value
    });
    var data = base$D(props, context, {
      form$: form$.form$,
      available: conditions.available,
      value: value.value,
      resetValidators: validation.resetValidators,
      defaultValue: default_.defaultValue,
      nullValue: nullValue.nullValue
    });
    var handleError = base$k(props, context, {
      fire: events.fire,
      listeners: events.listeners
    });
    var file$4 = base$o(props, context, {
      form$: form$.form$,
      value: value.value,
      isDisabled: disabled.isDisabled,
      validate: validation.validate,
      invalid: validation.invalid,
      path: path.path,
      input: input.input,
      load: data.load,
      update: data.update,
      updated: data.updated,
      fire: events.fire,
      listeners: events.listeners,
      uploading: request.uploading,
      request: request.request,
      axios: request.axios,
      isImageType: baseElement.isImageType,
      removing: removing.removing,
      handleError: handleError.handleError,
      el$: baseElement.el$
    });
    var drop = base$m(props, context, {
      update: data.update,
      isDisabled: disabled.isDisabled,
      accept: file$4.accept
    });
    var empty = base$s(props, context, {
      value: value.value,
      nullValue: nullValue.nullValue
    });
    var label = base$R(props, context, {
      form$: form$.form$,
      el$: baseElement.el$
    });
    var genericName = file(props, context, {
      form$: form$.form$,
      filename: file$4.filename,
      label: label.label
    });
    var templates = base$O(props, context, {
      theme: theme.theme,
      form$: form$.form$
    });
    var classes = file$3(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      removing: removing.removing,
      isDisabled: disabled.isDisabled,
      preparing: file$4.preparing,
      templates: templates.templates
    });
    var columns = base$Q(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      hasLabel: label.hasLabel
    });
    var view = base$P(props, context, {
      available: conditions.available,
      active: baseElement.active
    });
    var slots = base$N(props, context, {
      form$: form$.form$,
      el$: baseElement.el$,
      templates: templates.templates
    }, {
      slots: ['label', 'info', 'description', 'before', 'between', 'after']
    });
    base$y(props, context, {
      form$: form$.form$,
      value: value.value,
      fire: events.fire,
      dirt: validation.dirt,
      validate: validation.validate
    });
    onMounted(function () {
      validation.initMessageBag();
      validation.initValidation();
    });
    return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, form$), fieldId), theme), layout), input), path), conditions), value), validation), label), classes), columns), baseElement), genericName), genericName), view), templates), slots), disabled), events), data), empty), default_), nullValue), file$4), request), drop), removing), handleError);
  }
};

var base$j = function base(props, context, dependencies) {
  // ================ DATA ================

  /**
   * List of child element components.
   * 
   * @type {array<component>}
   * @default [children<component>]
   * @private
   */
  var children$Array = ref([]); // ============== COMPUTED ==============

  /**
   * Child element components.
   * 
   * @type {object<Element>}
   */

  var children$ = computed(function () {
    var children$ = {};
    children$Array.value.forEach(function (e$) {
      children$[e$.name] = e$;
    });
    return children$;
  }); // =============== METHODS ==============

  return {
    children$Array: children$Array,
    children$: children$
  };
};

var object = function object(props, context, dependencies) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var schemaName = options.schemaName || 'schema';

  var _toRefs = toRefs(props),
      schema = _toRefs[schemaName];

  var _base = base$j(),
      children$Array = _base.children$Array,
      children$ = _base.children$; // ============== COMPUTED ==============

  /**
   * Schema of child elements.
   * 
   * @type {object}
   * @private
   */


  var children = computed(function () {
    return schema.value;
  }); // Resort children$Array when children
  // order changes or a child is removed

  if (schema) {
    watch(schema, function (newValue) {
      var newChildren$Array = [];

      _$1.each(newValue, function (child, name) {
        newChildren$Array.push(children$Array.value[children$Array.value.map(function (e$) {
          return normalize(e$.name);
        }).indexOf(normalize(name))]);
      });

      children$Array.value = newChildren$Array;
    }, {
      flush: 'post',
      deep: true
    });
  }

  return {
    children: children,
    children$Array: children$Array,
    children$: children$
  };
};

var group = object;

var GroupElement = {
  name: 'GroupElement',
  mixins: [BaseElement, HasView, HasChange, HasData],
  emits: ['change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      "default": 'group',
      "private": true
    },
    "default": {
      required: false,
      type: [Object],
      "default": function _default() {
        return {};
      }
    },
    schema: {
      required: false,
      type: [Object],
      "default": function _default() {
        return {};
      }
    }
  },
  setup: function setup(props, context) {
    var form$ = base$Z();
    var theme = base$Y();
    var layout = base$L(props);
    var path = group$6(props, context);
    var nullValue = object$1();
    var events = base$$(props, context, {}, {
      events: context.emits
    });
    var baseElement = base$H(props, context, {
      form$: form$.form$,
      fire: events.fire
    });
    var children = group(props, context, {
      form$: form$.form$
    });
    var default_ = group$4(props, context, {
      form$: form$.form$,
      parent: path.parent
    });
    var label = base$R(props, context, {
      form$: form$.form$,
      el$: baseElement.el$
    });
    var validation = group$3(props, context, {
      form$: form$.form$,
      children$: children.children$,
      path: path.path
    });
    var value = group$2(props, context, {
      dataPath: path.dataPath,
      form$: form$.form$,
      children$Array: children.children$Array,
      parent: path.parent
    });
    var elements = base$U(props, context, {
      theme: theme.theme
    });
    var conditions = base$W(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var templates = base$O(props, context, {
      theme: theme.theme,
      form$: form$.form$
    });
    var classes = base$J(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      templates: templates.templates
    });
    var columns = base$Q(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      hasLabel: label.hasLabel
    });
    var view = base$P(props, context, {
      available: conditions.available,
      active: baseElement.active
    });
    var slots = base$N(props, context, {
      form$: form$.form$,
      el$: baseElement.el$,
      templates: templates.templates
    }, {
      slots: ['label', 'info', 'description', 'before', 'between', 'after']
    });
    var data = group$5(props, context, {
      form$: form$.form$,
      available: conditions.available,
      value: value.value,
      clean: validation.clean,
      validate: validation.validate,
      resetValidators: validation.resetValidators,
      children$: children.children$
    });
    group$1(props, context, {
      fire: events.fire,
      value: value.value
    });
    onMounted(function () {
      validation.initMessageBag();
    });
    return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, form$), theme), layout), path), conditions), value), label), classes), columns), baseElement), view), templates), slots), data), children), elements), validation), events), nullValue), default_);
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
      "default": 'hidden',
      "private": true
    },
    "default": {
      required: false,
      type: [String, Number],
      "default": null
    },
    id: {
      required: false,
      type: [String],
      "default": null
    },
    meta: {
      required: false,
      type: [Boolean],
      "default": false
    }
  },
  setup: function setup(props, context) {
    var form$ = base$Z();
    var theme = base$Y();
    var input = base$E();
    var path = base$G(props, context);
    var nullValue = base$x();
    var genericName = base$A(props, context, {
      form$: form$.form$
    });
    var fieldId = base$F(props, context, {
      path: path.path
    });
    var templates = base$O(props, context, {
      theme: theme.theme,
      form$: form$.form$
    });
    var events = base$$(props, context, {}, {
      events: context.emits
    });
    var baseElement = base$H(props, context, {
      form$: form$.form$,
      fire: events.fire
    });
    var default_ = base$C(props, context, {
      nullValue: nullValue.nullValue,
      form$: form$.form$,
      dataPath: path.dataPath,
      parent: path.parent
    });
    var conditions = base$W(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var validation = base$B(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var value = base$z(props, context, {
      defaultValue: default_.defaultValue,
      dataPath: path.dataPath,
      form$: form$.form$,
      parent: path.parent
    });
    var data = base$D(props, context, {
      form$: form$.form$,
      available: conditions.available,
      value: value.value,
      resetValidators: validation.resetValidators,
      defaultValue: default_.defaultValue,
      nullValue: nullValue.nullValue
    });
    var empty = base$s(props, context, {
      value: value.value,
      nullValue: nullValue.nullValue
    });
    base$y(props, context, {
      form$: form$.form$,
      value: value.value,
      fire: events.fire,
      dirt: validation.dirt,
      validate: validation.validate
    });
    onMounted(function () {
      validation.initMessageBag();
      validation.initValidation();
    });
    return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, form$), fieldId), theme), input), path), nullValue), default_), value), conditions), validation), events), data), empty), baseElement), genericName), templates);
  }
};

/**!
 * Sortable 1.14.0
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
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
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

var version = "1.14.0";

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


if (documentExists) {
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
          el.appendChild(dragEl);
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
      var originalEvent = _ref2.originalEvent; // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)

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

var base$i = function base(props, context, dependencies, options) {
  var _toRefs = toRefs(props),
      sort = _toRefs.sort; // ============ DEPENDENCIES ============


  var isDisabled = dependencies.isDisabled;
  var fire = dependencies.fire;
  var refreshOrderStore = dependencies.refreshOrderStore;
  var value = dependencies.value;
  var sorting = dependencies.sorting; // ================ DATA ================

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

  var sortable = ref(null); // ============== COMPUTED ==============

  /**
   * Whether the list is sortable. Can be enabled with [`sort`](#option-sort) option, but it will disabled if [`isDisabled`](#property-is-disabled) is `true`.
   * 
   * @type {boolean}
   */

  var isSortable = computed(function () {
    return sort.value && !isDisabled.value;
  }); // =============== METHODS ==============

  /**
   * Inits Sortable.js.
   *
   * @returns {void}
   * @private
   */

  var initSortable = function initSortable() {
    sortable.value = new Sortable(list.value, {
      handle: "[data-handle]",
      onStart: function onStart() {
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


  var destroySortable = function destroySortable() {
    sortable.value.destroy();
    sortable.value = null;
  };
  /**
   * Handles `sort` event.
   *
   * @param {Event} e Sortable.js event
   * @private
   */


  var handleSort = function handleSort(_ref) {
    var oldIndex = _ref.oldIndex,
        newIndex = _ref.newIndex,
        item = _ref.item;
    sorting.value = false;

    if (oldIndex === newIndex || isDisabled.value) {
      return;
    }

    list.value.children[newIndex].remove();
    list.value.insertBefore(item, list.value.children[oldIndex]);

    var valueClone = _$1.cloneDeep(value.value);

    valueClone.splice(newIndex, 0, valueClone.splice(oldIndex, 1)[0]);
    value.value = valueClone;
    refreshOrderStore(value.value);
    fire('sort', value.value);
  }; // ============== WATCHERS ==============


  watch(isSortable, function (n, o) {
    if (n === true && o === false) {
      initSortable();
    } else if (n === false && o === true) {
      destroySortable();
    }
  }, {
    immediate: false
  }); // ================ HOOKS ===============

  onMounted(function () {
    if (isSortable.value) {
      initSortable();
    }
  });
  return {
    list: list,
    sortable: sortable,
    isSortable: isSortable,
    handleSort: handleSort,
    initSortable: initSortable,
    destroySortable: destroySortable
  };
};

var base$h = function base(props, context, dependencies) {
  // ================ DATA ================

  /**
   * Whether the list is currently being sorted (an item is dragged).
   * 
   * @type {boolean}
   */
  var sorting = ref(false);
  return {
    sorting: sorting
  };
};

var base$g = function base(props, context, dependencies, options) {
  var _toRefs = toRefs(props),
      storeOrder = _toRefs.storeOrder,
      orderBy = _toRefs.orderBy,
      order = _toRefs.order; // ============ DEPENDENCIES ============


  var form$ = dependencies.form$; // ================= DATA ===============

  var orderFrom = ref(form$.value.$vueform.config.orderFrom); // =============== METHODS ==============

  /**
   * Sets the value of `storeOrder` field within a list of items to match the order.
   *
   * @param {array} value* list of items
   * @returns {void}
   * @private
   */

  var refreshOrderStore = function refreshOrderStore(value) {
    if (storeOrder.value) {
      _$1.each(value, function (val, index) {
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


  var orderByName = computed(function () {
    return orderBy.value || storeOrder.value;
  });
  return {
    refreshOrderStore: refreshOrderStore,
    orderByName: orderByName
  };
};

var multifile$2 = function multifile(props, context, dependencies, options) {
  var _toRefs2 = toRefs(props),
      storeOrder = _toRefs2.storeOrder,
      orderBy = _toRefs2.orderBy;

  var _base = base$g(props, context, dependencies),
      refreshOrderStore = _base.refreshOrderStore; // =============== METHODS ==============

  /**
   * The name of the field (when using [`fields`](#option-fiels)) by which the files should ordered.
   * 
   * @type {string}
   */


  var orderByName = computed(function () {
    return orderBy.value || storeOrder.value;
  });
  return {
    refreshOrderStore: refreshOrderStore,
    orderByName: orderByName
  };
};

var base$f = function base(props, context, dependencies) {
  var _toRefs = toRefs(props),
      object = _toRefs.object,
      element = _toRefs.element; // ============== COMPUTED ==============

  /**
    * The schema of a child element.
    * 
    * @type {object}
    * @private
    */


  var prototype = computed(function () {
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

  var isObject = computed(function () {
    return !!object.value;
  });
  return {
    prototype: prototype,
    isObject: isObject
  };
};

var multifile$1 = function multifile(props, context, dependencies) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var _toRefs2 = toRefs(props),
      auto = _toRefs2.auto,
      object = _toRefs2.object,
      file = _toRefs2.file,
      fields = _toRefs2.fields,
      storeFile = _toRefs2.storeFile,
      storeOrder = _toRefs2.storeOrder,
      view = _toRefs2.view; // ============ DEPENDENCIES ============


  var isDisabled = dependencies.isDisabled; // =============== PRIVATE ==============

  var type = computed(function () {
    return options.type || 'file';
  }); // ============== COMPUTED ==============

  /**
   * The `name` of the child element that stores the filename.
   * 
   * @type {string}
   * @private
   */

  var storeFileName = computed(function () {
    if (storeFile.value) {
      return storeFile.value;
    }

    return object.value || _$1.keys(fields.value).length || storeOrder.value ? 'file' : null;
  });
  var isObject = computed(function () {
    return !!object.value || !!storeOrder.value || !!_$1.keys(fields.value).length;
  });
  var prototype = computed(function () {
    if (!isObject.value) {
      return Object.assign({}, {
        type: type.value,
        auto: auto.value,
        view: view.value,
        layout: view.value === 'gallery' ? 'ElementLayoutInline' : 'ElementLayout',
        disabled: isDisabled.value
      }, file.value);
    }

    return {
      type: 'object',
      schema: Object.assign({}, // File
      _defineProperty$1({}, storeFileName.value, Object.assign({}, {
        type: type.value,
        auto: auto.value,
        view: view.value,
        layout: view.value === 'gallery' ? 'ElementLayoutInline' : 'ElementLayout',
        embed: true,
        disabled: isDisabled.value
      }, file.value)), // Order
      storeOrder.value ? _defineProperty$1({}, storeOrder.value, {
        type: 'hidden',
        meta: true
      }) : {}, // Other fields
      fields.value)
    };
  });
  return {
    storeFileName: storeFileName,
    isObject: isObject,
    prototype: prototype
  };
};

var base$e = function base(props, context, dependencies) {
  var _toRefs = toRefs(props),
      controls = _toRefs.controls,
      sort = _toRefs.sort,
      min = _toRefs.min,
      max = _toRefs.max; // ============ DEPENDENCIES ============


  var isDisabled = dependencies.isDisabled;
  var value = dependencies.value; // ================ DATA ================

  /**
   * Whether adding new items is allowed. Will return `false` if the element has [`isDisabled: true`](#property-is-disabled) or have reached [`max`](#option-max) items. Can be disabled manually by setting [`controls.add`](#option-controls) to `false`.
   * 
   * @type {boolean}
   */

  var hasAdd = computed(function () {
    return !isDisabled.value && (controls.value.add || controls.value.add === undefined) && (max.value === -1 || max.value > value.value.length);
  });
  /**
   * Whether remove items is allowed. Will return `false` if the element has [`isDisabled: true`](#property-is-disabled) or has <= [`min`](#option-min) items. Can be disabled manually by setting [`controls.remove`](#option-controls) to `false`.
   * 
   * @type {boolean}
   */

  var hasRemove = computed(function () {
    return !isDisabled.value && (controls.value.remove || controls.value.remove === undefined) && (min.value === -1 || min.value < value.value.length);
  });
  /**
   * Whether list items should be sortable. Can be enabled by setting [`sort`](#option-sort) to `true`, but will return `false` if the element has [`isDisabled: true`](#property-is-disabled).
   * 
   * @type {boolean}
   */

  var hasSort = computed(function () {
    return !isDisabled.value && (controls.value.sort || controls.value.sort === undefined) && sort.value;
  });
  return {
    hasAdd: hasAdd,
    hasRemove: hasRemove,
    hasSort: hasSort
  };
};

var multifile = function multifile(props, context, dependencies) {
  var _toRefs2 = toRefs(props),
      controls = _toRefs2.controls,
      sort = _toRefs2.sort; // ============ DEPENDENCIES ============


  var isDisabled = dependencies.isDisabled;
  var hasUploading = dependencies.hasUploading; // ================ DATA ================

  /**
   * Whether adding new files is allowed. Will return `false` if the element has [`isDisabled: true`](#property-is-disabled). Can be disabled manually by setting [`controls.add`](#option-controls) to `false`.
   * 
   * @type {boolean}
   */

  var hasAdd = computed(function () {
    return !isDisabled.value && (controls.value.add || controls.value.add === undefined);
  });
  /**
   * Whether remove files is allowed. Will return `false` if the element has [`isDisabled: true`](#property-is-disabled) or a temporary file upload is in progress. Can be disabled manually by setting [`controls.remove`](#option-controls) to `false`.
   * 
   * @type {boolean}
   */

  var hasRemove = computed(function () {
    return !isDisabled.value && (controls.value.remove || controls.value.remove === undefined) && !hasUploading.value;
  });
  /**
   * Whether list files should be sortable. Can be enabled by setting [`sort`](#option-sort) to `true`, but will return `false` if the element has [`isDisabled: true`](#property-is-disabled) or a temporary file upload is in progress.
   * 
   * @type {boolean}
   */

  var hasSort = computed(function () {
    return !isDisabled.value && (controls.value.sort || controls.value.sort === undefined) && sort.value && !hasUploading.value;
  });
  return {
    hasAdd: hasAdd,
    hasRemove: hasRemove,
    hasSort: hasSort
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
      "default": 'list',
      "private": true
    },
    "default": {
      required: false,
      type: [Array],
      "default": undefined
    },
    disabled: {
      required: false,
      type: [Boolean],
      "default": false
    },
    onAdd: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    onRemove: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    onSort: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    element: {
      required: false,
      type: [Object],
      "default": null
    },
    object: {
      required: false,
      type: [Object],
      "default": null
    },
    initial: {
      required: false,
      type: [Number],
      "default": 1
    },
    min: {
      required: false,
      type: [Number],
      "default": -1
    },
    max: {
      required: false,
      type: [Number],
      "default": -1
    },
    sort: {
      required: false,
      type: [Boolean],
      "default": false
    },
    controls: {
      required: false,
      type: [Object],
      "default": function _default() {
        return {
          add: true,
          remove: true,
          sort: true
        };
      }
    },
    storeOrder: {
      required: false,
      type: [String],
      "default": null
    },
    order: {
      required: false,
      type: [String],
      "default": null
    },
    orderBy: {
      required: false,
      type: [String],
      "default": null
    }
  },
  setup: function setup(props, context) {
    var _useValidation, _useData;

    var form$ = base$Z();
    var theme = base$Y();
    var layout = base$L(props);
    var path = base$G(props, context);
    var disabled = base$K(props);
    var nullValue = array$1();
    var prototype = base$f(props);
    var children = base$j();
    var sorting = base$h();
    var order = base$g(props, context, {
      form$: form$.form$
    });
    var events = base$$(props, context, {}, {
      events: context.emits
    });
    var baseElement = list$3(props, context, {
      form$: form$.form$,
      fire: events.fire
    });
    var default_ = base$C(props, context, {
      nullValue: nullValue.nullValue,
      form$: form$.form$,
      dataPath: path.dataPath,
      parent: path.parent
    });
    var label = base$R(props, context, {
      form$: form$.form$,
      el$: baseElement.el$
    });
    var genericName = base$A(props, context, {
      label: label.label,
      form$: form$.form$
    });
    var elements = base$U(props, context, {
      theme: theme.theme
    });
    var conditions = base$W(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var validation = list$1(props, context, (_useValidation = {
      form$: form$.form$,
      children$: children.children$
    }, _defineProperty$1(_useValidation, "form$", form$.form$), _defineProperty$1(_useValidation, "path", path.path), _useValidation));
    var value = base$z(props, context, {
      defaultValue: default_.defaultValue,
      dataPath: path.dataPath,
      form$: form$.form$,
      parent: path.parent
    }, {
      init: false
    });
    var controls = base$e(props, context, {
      isDisabled: disabled.isDisabled,
      value: value.value
    });
    var empty = array(props, context, {
      value: value.value,
      nullValue: nullValue.nullValue
    });
    var columns = base$Q(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      hasLabel: label.hasLabel
    });
    var view = base$P(props, context, {
      available: conditions.available,
      active: baseElement.active
    });
    var templates = base$O(props, context, {
      theme: theme.theme,
      form$: form$.form$
    });
    var slots = base$N(props, context, {
      form$: form$.form$,
      el$: baseElement.el$,
      templates: templates.templates
    }, {
      slots: ['label', 'info', 'description', 'before', 'between', 'after']
    });
    var data = list$2(props, context, (_useData = {
      form$: form$.form$,
      available: conditions.available,
      value: value.value,
      resetValidators: validation.resetValidators,
      defaultValue: default_.defaultValue,
      nullValue: nullValue.nullValue,
      children$: children.children$,
      isDisabled: disabled.isDisabled,
      orderByName: order.orderByName,
      refreshOrderStore: order.refreshOrderStore,
      dataPath: path.dataPath,
      parent: path.parent
    }, _defineProperty$1(_useData, "nullValue", nullValue.nullValue), _defineProperty$1(_useData, "defaultValue", default_.defaultValue), _defineProperty$1(_useData, "fire", events.fire), _useData));
    var classes = list$4(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      isDisabled: disabled.isDisabled,
      sorting: sorting.sorting,
      templates: templates.templates
    });
    var sort = base$i(props, context, {
      isDisabled: disabled.isDisabled,
      fire: events.fire,
      refreshOrderStore: order.refreshOrderStore,
      value: value.value,
      classes: classes.classes,
      sorting: sorting.sorting
    });
    list(props, context, {
      form$: form$.form$,
      value: value.value,
      fire: events.fire,
      dirt: validation.dirt,
      validateValidators: validation.validateValidators
    });
    onMounted(function () {
      validation.initMessageBag();
      validation.initValidation();
    });
    return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, form$), theme), layout), path), disabled), nullValue), label), baseElement), genericName), children), value), elements), conditions), validation), classes), columns), view), templates), slots), data), events), sort), sorting), default_), order), prototype), empty), controls), {}, {
      log: function log() {
        console.log('log');
      }
    });
  }
};

var base$d = function base(props, context, dependencies) {
  var options_ = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var _toRefs = toRefs(props),
      provider = _toRefs.provider,
      extendOptions = _toRefs.extendOptions; // ============ DEPENDENCIES ============


  var form$ = dependencies.form$;
  var value = dependencies.value;
  var clear = dependencies.clear; // ============== PRIVATE ===============

  var inputElement = function inputElement() {
    return options_.input.value;
  }; // ================ DATA ================

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

  var location = ref({}); // ============== COMPUTED ==============

  var locationProvider = computed(function () {
    return provider.value || form$.value.$vueform.config.locationProvider;
  });
  /**
  * Default options for location provider. Can be extended with [`extendOptions`](#option-extend-options).
  * 
  * @type {object} 
  * @default {}
  */

  var defaultOptions = computed(function () {
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

  var providerOptions = computed(function () {
    return Object.assign({}, defaultOptions.value, extendOptions.value || {});
  }); // =============== METHODS ==============

  /**
   * Handles location service's address change.
   *
   * @param {object} data an object containing address data
   * @param {object} raw an object containing raw address data (based on provider)
   * @private
   */

  var handleAddressChange = function handleAddressChange(data, raw) {
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


  var handleLocationBlur = function handleLocationBlur() {
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


  var initLocationService = function initLocationService() {
    if (locationService.value) {
      locationService.value.destroy();
    }

    locationService.value = new form$.value.$vueform.services.location[locationProvider.value]();
    locationService.value.init(inputElement(), handleAddressChange, providerOptions.value);
  }; // ============== WATCHERS ==============


  watch([locationProvider, providerOptions], function () {
    initLocationService();
  }, {
    deep: true,
    immediate: false
  }); // =============== HOOKS ================

  onMounted(function () {
    initLocationService();
  });
  return {
    locationService: locationService,
    location: location,
    defaultOptions: defaultOptions,
    providerOptions: providerOptions,
    handleAddressChange: handleAddressChange,
    handleLocationBlur: handleLocationBlur,
    initLocationService: initLocationService
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
      "default": 'location',
      "private": true
    },
    "default": {
      required: false,
      type: [Object],
      "default": function _default() {
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
      }
    },
    debounce: {
      required: false,
      type: [Number],
      "default": null
    },
    disabled: {
      required: false,
      type: [Boolean],
      "default": false
    },
    floating: {
      required: false,
      type: [String],
      "default": null
    },
    id: {
      required: false,
      type: [String],
      "default": null
    },
    placeholder: {
      required: false,
      type: [String],
      "default": null
    },
    readonly: {
      required: false,
      type: [Boolean],
      "default": false
    },
    addons: {
      required: false,
      type: [Object],
      "default": function _default() {
        return {};
      }
    },
    provider: {
      required: false,
      type: [String],
      "default": 'google'
    },
    displayKey: {
      required: false,
      type: [String],
      "default": 'formatted_address'
    },
    extendOptions: {
      required: false,
      type: [Object],
      "default": function _default() {
        return {};
      }
    }
  },
  setup: function setup(props, context) {
    var _toRefs = toRefs(props),
        displayKey = _toRefs.displayKey;

    var form$ = base$Z();
    var theme = base$Y();
    var layout = base$L(props);
    var input$1 = base$E();
    var path = base$G(props, context);
    var disabled = base$K(props);
    var nullValue = location();
    var fieldId = base$F(props, context, {
      path: path.path
    });
    var floating = base$p(props, context, {
      form$: form$.form$
    });
    var events = base$$(props, context, {}, {
      events: context.emits
    });
    var baseElement = base$H(props, context, {
      form$: form$.form$,
      fire: events.fire
    });
    var addons = base$t(props, context, {
      el$: baseElement.el$
    });
    var default_ = base$C(props, context, {
      nullValue: nullValue.nullValue,
      form$: form$.form$,
      dataPath: path.dataPath,
      parent: path.parent
    });
    var value = base$z(props, context, {
      defaultValue: default_.defaultValue,
      dataPath: path.dataPath,
      form$: form$.form$,
      parent: path.parent
    });
    var validation = location$2(props, context, {
      form$: form$.form$,
      path: path.path,
      value: value.value
    });
    var conditions = base$W(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var data = base$D(props, context, {
      form$: form$.form$,
      available: conditions.available,
      value: value.value,
      resetValidators: validation.resetValidators,
      defaultValue: default_.defaultValue,
      nullValue: nullValue.nullValue
    });
    var location$3 = base$d(props, context, {
      form$: form$.form$,
      value: value.value,
      input: input$1.input,
      clear: data.clear
    }, {
      input: input$1.input
    });
    var empty = base$s(props, context, {
      value: value.value,
      nullValue: nullValue.nullValue
    });
    var label = base$R(props, context, {
      form$: form$.form$,
      el$: baseElement.el$
    });
    var genericName = base$A(props, context, {
      label: label.label,
      form$: form$.form$
    });
    var templates = base$O(props, context, {
      theme: theme.theme,
      form$: form$.form$
    });
    var classes = input(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      isDisabled: disabled.isDisabled,
      templates: templates.templates
    });
    var columns = base$Q(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      hasLabel: label.hasLabel
    });
    var view = base$P(props, context, {
      available: conditions.available,
      active: baseElement.active
    });
    var slots = base$N(props, context, {
      form$: form$.form$,
      el$: baseElement.el$,
      templates: templates.templates
    }, {
      slots: ['label', 'info', 'description', 'before', 'between', 'after', 'addon-before', 'addon-after']
    });
    onMounted(function () {
      if (value.value.value[displayKey.value]) {
        input$1.input.value.value = value.value.value[displayKey.value];
      }
    });
    location$1(props, context, {
      form$: form$.form$,
      value: value.value,
      fire: events.fire,
      dirt: validation.dirt,
      validate: validation.validate,
      input: input$1.input
    });
    onMounted(function () {
      validation.initMessageBag();
      validation.initValidation();
    });
    return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, form$), fieldId), theme), layout), input$1), addons), path), conditions), value), validation), label), classes), columns), baseElement), genericName), view), templates), slots), disabled), events), data), empty), default_), nullValue), location$3), floating);
  }
};

var base$c = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============
  var isDisabled = dependencies.isDisabled;
  var add = dependencies.add;
  var input = dependencies.input;
  var isObject = dependencies.isObject;
  var storeFileName = dependencies.storeFileName;
  var children$ = dependencies.children$; // ============== COMPUTED ==============

  /**
   * Whether any of the files are currently being uploaded to the server (initiated by form submit).
   * 
   * @type {boolean}
   */

  var preparing = computed(function () {
    return _$1.some(children$.value, {
      available: true,
      preparing: true
    });
  });
  /**
   * Whether any of the files are currently being uploaded to the server (initiated by the user).
   * 
   * @type {boolean}
   */

  var hasUploading = computed(function () {
    return _$1.some(children$.value, {
      uploading: true
    });
  }); // =============== METHODS ==============

  /**
   * Handles `change` event.
   * 
   * @param {Event} e* 
   * @returns {void}
   * @private
   */

  var handleChange = function handleChange(e) {
    if (!e.target || !e.target.files || e.target.files.length == 0 || isDisabled.value) {
      return;
    }

    _$1.each(e.target.files, function (file) {
      add(isObject.value ? _defineProperty$1({}, storeFileName.value, file) : file);
    });

    input.value.value = '';
  };
  /**
   * Handles `click` event.
   * 
   * @returns {void}
   * @private
   */


  var handleClick = function handleClick() {
    if (isDisabled.value) {
      return;
    }

    input.value.click();
  };

  return {
    preparing: preparing,
    hasUploading: hasUploading,
    handleChange: handleChange,
    handleClick: handleClick
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
      "default": 'multifile',
      "private": true
    },
    "default": {
      required: false,
      type: [Array],
      "default": function _default() {
        return [];
      }
    },
    initial: {
      required: false,
      type: [Number],
      "default": 1,
      "private": true
    },
    disabled: {
      required: false,
      type: [Boolean],
      "default": false
    },
    onAdd: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    onRemove: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    onSort: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    view: {
      type: [String],
      required: false,
      "default": 'file'
    },
    drop: {
      required: false,
      type: [Boolean],
      "default": false
    },
    accept: {
      required: false,
      type: [String, Array],
      "default": null
    },
    auto: {
      required: false,
      type: [Boolean],
      "default": true
    },
    file: {
      required: false,
      type: [Object],
      "default": function _default() {
        return {};
      }
    },
    sort: {
      required: false,
      type: [Boolean],
      "default": false
    },
    controls: {
      required: false,
      type: [Object],
      "default": function _default() {
        return {
          add: true,
          remove: true,
          sort: true
        };
      }
    },
    object: {
      required: false,
      type: [Boolean],
      "default": null
    },
    storeFile: {
      required: false,
      type: [String],
      "default": 'file'
    },
    fields: {
      required: false,
      type: [Object],
      "default": function _default() {
        return {};
      }
    },
    storeOrder: {
      required: false,
      type: [String],
      "default": null
    },
    order: {
      required: false,
      type: [String],
      "default": null
    },
    orderBy: {
      required: false,
      type: [String],
      "default": null
    }
  },
  setup: function setup(props, context) {
    var _useValidation, _useData;

    var form$ = base$Z();
    var theme = base$Y();
    var layout = base$L(props);
    var path = base$G(props, context);
    var disabled = base$K(props);
    var nullValue = array$1();
    var children = base$j();
    var input = base$E();
    var sorting = base$h();
    var prototype = multifile$1(props, context, {
      isDisabled: disabled.isDisabled
    });
    var events = base$$(props, context, {}, {
      events: context.emits
    });
    var baseElement = list$3(props, context, {
      form$: form$.form$,
      fire: events.fire
    });
    var default_ = base$C(props, context, {
      nullValue: nullValue.nullValue,
      form$: form$.form$,
      dataPath: path.dataPath,
      parent: path.parent
    });
    var label = base$R(props, context, {
      form$: form$.form$,
      el$: baseElement.el$
    });
    var genericName = base$A(props, context, {
      label: label.label,
      form$: form$.form$
    });
    var validation = list$1(props, context, (_useValidation = {
      form$: form$.form$,
      children$: children.children$
    }, _defineProperty$1(_useValidation, "form$", form$.form$), _defineProperty$1(_useValidation, "path", path.path), _useValidation));
    var value = base$z(props, context, {
      defaultValue: default_.defaultValue,
      dataPath: path.dataPath,
      form$: form$.form$,
      parent: path.parent
    }, {
      init: false
    });
    var empty = array(props, context, {
      value: value.value,
      nullValue: nullValue.nullValue
    });
    var elements = base$U(props, context, {
      theme: theme.theme
    });
    var conditions = base$W(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var columns = base$Q(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      hasLabel: label.hasLabel
    });
    var view = base$P(props, context, {
      available: conditions.available,
      active: baseElement.active
    });
    var templates = base$O(props, context, {
      theme: theme.theme,
      form$: form$.form$
    });
    var slots = base$N(props, context, {
      form$: form$.form$,
      el$: baseElement.el$,
      templates: templates.templates
    }, {
      slots: ['label', 'info', 'description', 'before', 'between', 'after']
    });
    var order = multifile$2(props, context, {
      isObject: prototype.isObject,
      children$: children.children$,
      form$: form$.form$
    });
    var data = list$2(props, context, (_useData = {
      form$: form$.form$,
      available: conditions.available,
      value: value.value,
      resetValidators: validation.resetValidators,
      defaultValue: default_.defaultValue,
      nullValue: nullValue.nullValue,
      children$: children.children$,
      isDisabled: disabled.isDisabled,
      orderByName: order.orderByName,
      refreshOrderStore: order.refreshOrderStore,
      dataPath: path.dataPath
    }, _defineProperty$1(_useData, "nullValue", nullValue.nullValue), _defineProperty$1(_useData, "defaultValue", default_.defaultValue), _defineProperty$1(_useData, "fire", events.fire), _useData));
    var multifile$6 = base$c(props, context, {
      isDisabled: disabled.isDisabled,
      input: input.input,
      add: data.add,
      isObject: prototype.isObject,
      storeFileName: prototype.storeFileName,
      children$: children.children$
    });
    var controls = multifile(props, context, {
      isDisabled: disabled.isDisabled,
      hasUploading: multifile$6.hasUploading
    });
    var drop = multifile$3(props, context, {
      add: data.add,
      isDisabled: disabled.isDisabled,
      isObject: prototype.isObject,
      storeFileName: prototype.storeFileName,
      accept: multifile$6.accept
    });
    var classes = multifile$5(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      isDisabled: disabled.isDisabled,
      sorting: sorting.sorting,
      preparing: multifile$6.preparing,
      templates: templates.templates
    });
    var sort = base$i(props, context, {
      isDisabled: disabled.isDisabled,
      fire: events.fire,
      refreshOrderStore: order.refreshOrderStore,
      value: value.value,
      sorting: sorting.sorting,
      classes: classes.classes
    });
    multifile$4(props, context, {
      form$: form$.form$,
      value: value.value,
      fire: events.fire,
      dirt: validation.dirt,
      validateValidators: validation.validateValidators
    });
    onMounted(function () {
      validation.initMessageBag();
      validation.initValidation();
    });
    return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, form$), theme), layout), path), disabled), nullValue), label), baseElement), genericName), children), value), elements), conditions), validation), classes), columns), view), templates), slots), data), events), sort), sorting), default_), order), prototype), multifile$6), input), drop), empty), controls);
  }
};

var base$b = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============
  var fire = dependencies.fire; // =============== METHODS ==============

  /**
   * Handles `select` event.
   *
   * @param {object} option* the selected option object
   * @returns {void}
   * @private
   */

  var handleSelect = function handleSelect(option) {
    fire('select', option);
  };
  /**
   * Handles `deselect` event.
   *
   * @param {object} option* the deselected option object
   * @returns {void}
   * @private
   */


  var handleDeselect = function handleDeselect(option) {
    fire('deselect', option);
  };
  /**
   * Handles `search-change` event.
   *
   * @param {string} searchQuery* the current search query
   * @returns {void}
   * @private
   */


  var handleSearchChange = function handleSearchChange(searchQuery) {
    fire('search-change', searchQuery);
  };
  /**
   * Handles `open` event.
   *
   * @returns {void}
   * @private
   */


  var handleOpen = function handleOpen() {
    fire('open');
  };
  /**
   * Handles `close` event.
   *
   * @returns {void}
   * @private
   */


  var handleClose = function handleClose() {
    fire('close');
  };
  /**
   * Handles `clear` event.
   *
   * @returns {void}
   * @private
   */


  var handleClear = function handleClear() {
    fire('clear');
  };
  /**
   * Handles `paste` event.
   * 
   * @param {Event} e event
   * @returns {void}
   * @private
   */


  var handlePaste = function handlePaste(e) {
    fire('paste', e);
  };
  /**
   * Handles `tag` event.
   *
   * @param {string} searchQuery* the current search query
   * @returns {void}
   * @private
   */


  var handleTag = function handleTag(searchQuery) {// unimplemented
  }; // =============== HOOKS ================


  return {
    handleSelect: handleSelect,
    handleDeselect: handleDeselect,
    handleSearchChange: handleSearchChange,
    handleOpen: handleOpen,
    handleClose: handleClose,
    handleClear: handleClear,
    handlePaste: handlePaste,
    handleTag: handleTag
  };
};

function spliceMultiple(array, indexes) {
  indexes.sort();

  for (var i = indexes.length - 1; i >= 0; i--) {
    array.splice(indexes[i], 1);
  }

  return array;
}

var base$a = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============
  var value = dependencies.value; // =============== PRIVATE ==============

  /**
   * Whether an option is already selected.
   *
   * @param {object} option* value of the option
   * @returns {boolean}
   * @private
   */

  var inValue = function inValue(option) {
    return value.value.indexOf(option) !== -1;
  }; // =============== METHODS ==============

  /**
   * Selects one or more options.
   *
   * @param {str|array} options* value(s) of the option(s) to select
   * @returns {void}
   */


  var select = function select(options) {
    if (!_$1.isArray(options)) {
      options = [options];
    }

    var val = _$1.clone(value.value);

    _$1.each(options, function (option) {
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


  var deselect = function deselect(options) {
    if (!_$1.isArray(options)) {
      options = [options];
    }

    var val = _$1.clone(value.value);

    var indexes = [];

    _$1.each(options, function (option) {
      var i = value.value.indexOf(option);

      if (i === -1 || indexes.indexOf(i) !== -1) {
        return;
      }

      indexes.push(i);
    });

    value.value = spliceMultiple(val, indexes);
  };

  return {
    select: select,
    deselect: deselect
  };
};

var base$9 = function base(props, context, dependencies) {
  var _toRefs = toRefs(props),
      loading = _toRefs.loading; // ============ DEPENDENCIES ============


  var pending = dependencies.pending; // ============== COMPUTED ==============

  /**
  * Whether the element is in loading state.
  * 
  * @type {boolean}
  */

  var isLoading = computed(function () {
    return pending.value || loading.value;
  });
  return {
    isLoading: isLoading
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
      "default": 'multiselect',
      "private": true
    },
    "default": {
      required: false,
      type: [Array],
      "default": function _default() {
        return [];
      }
    },
    disabled: {
      required: false,
      type: [Boolean],
      "default": false
    },
    floating: {
      required: false,
      type: [String],
      "default": null
    },
    id: {
      required: false,
      type: [String],
      "default": null
    },
    placeholder: {
      required: false,
      type: [String],
      "default": null,
      "native": false
    },
    onSelect: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    onDeselect: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    onSearchChange: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    onOpen: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    onClose: {
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
    onPaste: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    "native": {
      required: false,
      type: [Boolean],
      "default": true
    },
    items: {
      required: false,
      type: [Object, Array, Function],
      "default": function _default() {
        return {};
      }
    },
    labelProp: {
      type: [String],
      required: false,
      "default": 'label',
      "native": false
    },
    valueProp: {
      type: [String],
      required: false,
      "default": 'value',
      "native": false
    },
    search: {
      required: false,
      type: [Boolean],
      "default": false,
      "native": false
    },
    trackBy: {
      type: [String],
      required: false,
      "default": 'label',
      "native": false
    },
    strict: {
      type: [Boolean],
      required: false,
      "default": true,
      "native": false
    },
    multipleLabel: {
      type: [Function],
      required: false,
      "native": false
    },
    object: {
      type: [Boolean],
      required: false,
      "default": false,
      "native": false
    },
    limit: {
      type: [Number],
      required: false,
      "default": -1,
      "native": false
    },
    max: {
      type: [Number],
      required: false,
      "default": -1,
      "native": false
    },
    groups: {
      type: [Boolean],
      required: false,
      "default": false,
      "native": false
    },
    groupLabel: {
      type: [String],
      required: false,
      "default": 'label',
      "native": false
    },
    groupOptions: {
      type: [String],
      required: false,
      "default": 'items',
      "native": false
    },
    groupHideEmpty: {
      type: [Boolean],
      required: false,
      "default": false,
      "native": false
    },
    groupSelect: {
      type: [Boolean],
      required: false,
      "default": true,
      "native": false
    },
    openDirection: {
      type: [String],
      required: false,
      "default": 'bottom',
      "native": false
    },
    canClear: {
      type: [Boolean],
      required: false,
      "default": true,
      "native": false
    },
    clearOnSelect: {
      type: [Boolean],
      required: false,
      "default": true,
      "native": false
    },
    closeOnSelect: {
      type: [Boolean],
      required: false,
      "default": true,
      "native": false
    },
    delay: {
      type: [Number],
      required: false,
      "default": -1,
      "native": false
    },
    minChars: {
      type: [Number],
      required: false,
      "default": 0,
      "native": false
    },
    resolveOnLoad: {
      type: [Boolean],
      required: false,
      "default": true,
      "native": false
    },
    filterResults: {
      type: [Boolean],
      required: false,
      "default": true,
      "native": false
    },
    clearOnSearch: {
      type: [Boolean],
      required: false,
      "default": false,
      "native": false
    },
    hideSelected: {
      type: [Boolean],
      required: false,
      "default": true,
      "native": false
    },
    caret: {
      type: [Boolean],
      required: false,
      "default": true,
      "native": false
    },
    loading: {
      type: [Boolean],
      required: false,
      "default": false,
      "native": false
    },
    noOptionsText: {
      type: [String],
      required: false,
      "default": undefined,
      '@default': 'locale.multiselect.noOptions',
      "native": false
    },
    noResultsText: {
      type: [String],
      required: false,
      "default": undefined,
      '@default': 'locale.multiselect.noResults',
      "native": false
    },
    autocomplete: {
      type: [String],
      required: false,
      "native": false
    },
    inputType: {
      type: [String],
      required: false,
      "default": 'text',
      "native": false
    },
    extendOptions: {
      required: false,
      type: [Object],
      "default": function _default() {
        return {};
      }
    }
  },
  setup: function setup(props, context) {
    var form$ = base$Z();
    var theme = base$Y();
    var layout = base$L(props);
    var input$1 = base$E();
    var path = base$G(props, context);
    var disabled = base$K(props);
    var nullValue = array$1();
    var fieldId = base$F(props, context, {
      path: path.path
    });
    var floating = base$p(props, context, {
      form$: form$.form$
    });
    var events = base$$(props, context, {}, {
      events: context.emits
    });
    var baseElement = multiselect$1(props, context, {
      form$: form$.form$,
      fire: events.fire
    });
    var default_ = base$C(props, context, {
      nullValue: nullValue.nullValue,
      form$: form$.form$,
      dataPath: path.dataPath,
      parent: path.parent
    });
    var validation = base$B(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var loading = base$9(props, context, {
      pending: validation.pending
    });
    var options = multiselect(props, context, {
      form$: form$.form$,
      isLoading: loading.isLoading
    });
    var asyncItems = base$u(props, context, {
      isNative: options.isNative,
      input: input$1.input,
      disable: disabled.disable,
      enable: disabled.enable,
      el$: baseElement.el$
    });
    var value = base$z(props, context, {
      defaultValue: default_.defaultValue,
      dataPath: path.dataPath,
      form$: form$.form$,
      parent: path.parent
    });
    var conditions = base$W(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var data = base$D(props, context, {
      form$: form$.form$,
      available: conditions.available,
      value: value.value,
      resetValidators: validation.resetValidators,
      defaultValue: default_.defaultValue,
      nullValue: nullValue.nullValue
    });
    var empty = array(props, context, {
      value: value.value,
      nullValue: nullValue.nullValue
    });
    var label = base$R(props, context, {
      form$: form$.form$,
      el$: baseElement.el$
    });
    var genericName = base$A(props, context, {
      label: label.label,
      form$: form$.form$
    });
    var templates = base$O(props, context, {
      theme: theme.theme,
      form$: form$.form$
    });
    var classes = input(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      isDisabled: disabled.isDisabled,
      templates: templates.templates
    });
    var columns = base$Q(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      hasLabel: label.hasLabel
    });
    var view = base$P(props, context, {
      available: conditions.available,
      active: baseElement.active
    });
    var slots = base$N(props, context, {
      form$: form$.form$,
      el$: baseElement.el$,
      templates: templates.templates
    }, {
      slots: ['option', 'multiple-label', 'placeholder', 'group-label', 'before-list', 'after-list', 'no-results', 'no-options', 'caret', 'spinner', 'clear', 'label', 'info', 'description', 'before', 'between', 'after']
    });
    var handleSelectEvents = base$b(props, context, {
      fire: events.fire
    });
    var select = base$a(props, context, {
      value: value.value
    });
    base$y(props, context, {
      form$: form$.form$,
      value: value.value,
      fire: events.fire,
      dirt: validation.dirt,
      validate: validation.validate
    });
    onMounted(function () {
      validation.initMessageBag();
      validation.initValidation();
    });
    return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, form$), fieldId), theme), layout), input$1), path), conditions), value), validation), label), classes), columns), baseElement), genericName), view), templates), slots), disabled), events), data), empty), default_), nullValue), asyncItems), options), handleSelectEvents), select), floating), loading);
  }
};

var ObjectElement = {
  name: 'ObjectElement',
  mixins: [BaseElement, HasView, HasChange, HasData],
  emits: ['change', 'remove', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      "default": 'object',
      "private": true
    },
    "default": {
      required: false,
      type: [Object],
      "default": function _default() {
        return {};
      }
    },
    schema: {
      required: false,
      type: [Object],
      "default": function _default() {
        return {};
      }
    },
    embed: {
      required: false,
      type: [Boolean],
      "default": false
    },
    onRemove: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    }
  },
  setup: function setup(props, context) {
    var form$ = base$Z();
    var theme = base$Y();
    var layout = base$L(props);
    var path = base$G(props, context);
    var nullValue = object$1();
    var events = base$$(props, context, {}, {
      events: context.emits
    });
    var baseElement = base$H(props, context, {
      form$: form$.form$,
      fire: events.fire
    });
    var default_ = object$5(props, context, {
      nullValue: nullValue.nullValue,
      form$: form$.form$,
      parent: path.parent
    });
    var value = object$3(props, context, {
      defaultValue: default_.defaultValue,
      dataPath: path.dataPath,
      form$: form$.form$,
      parent: path.parent
    });
    var label = base$R(props, context, {
      form$: form$.form$,
      el$: baseElement.el$
    });
    var children = object(props, context, {
      form$: form$.form$
    });
    var elements = base$U(props, context, {
      theme: theme.theme
    });
    var conditions = base$W(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var validation = object$4(props, context, {
      form$: form$.form$,
      children$: children.children$,
      path: path.path
    });
    var templates = base$O(props, context, {
      theme: theme.theme,
      form$: form$.form$
    });
    var classes = base$J(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      templates: templates.templates
    });
    var columns = base$Q(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      hasLabel: label.hasLabel
    });
    var view = base$P(props, context, {
      available: conditions.available,
      active: baseElement.active
    });
    var slots = base$N(props, context, {
      form$: form$.form$,
      el$: baseElement.el$,
      templates: templates.templates
    }, {
      slots: ['label', 'info', 'description', 'before', 'between', 'after']
    });
    var data = object$6(props, context, {
      form$: form$.form$,
      available: conditions.available,
      value: value.value,
      clean: validation.clean,
      validate: validation.validate,
      resetValidators: validation.resetValidators,
      children$: children.children$
    });
    object$2(props, context, {
      fire: events.fire,
      value: value.value
    });
    onMounted(function () {
      validation.initMessageBag();
    });
    return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, form$), theme), layout), path), conditions), value), label), classes), columns), baseElement), view), templates), slots), data), children), elements), validation), nullValue), default_), events);
  }
};

var base$8 = function base(props, context, dependencies) {
  var _toRefs = toRefs(props),
      radioName = _toRefs.radioName,
      radioValue = _toRefs.radioValue; // ============ DEPENDENCIES ============


  var update = dependencies.update;
  var nullValue = dependencies.nullValue;
  var fieldId = dependencies.fieldId;
  var path = dependencies.path;
  var form$ = dependencies.form$; // ============== COMPUTED ==============

  /**
   * The `name` attribute of the element. If [`id`](#option-id) is not provided [`name`](#option-name) will be used.
   * 
   * @type {string}
   */

  var inputName = computed(function () {
    return radioName.value || path.value;
  }); // =============== METHODS ==============

  /**
   * Checks the radio.
   *
   * @returns {void}
   */

  var check = function check() {
    update(radioValue.value);
  };
  /**
   * Unhecks the radio.
   *
   * @returns {void}
   */


  var uncheck = function uncheck() {
    update(nullValue.value);
  }; // =============== HOOKS ================


  onMounted(function () {
    form$.value.$el.querySelectorAll("input[name=\"".concat(inputName.value, "\"")).forEach(function (element) {
      element.addEventListener('change', function () {
        if (element.id != fieldId.value) {
          update(nullValue.value);
        }
      });
    });
  });
  return {
    check: check,
    uncheck: uncheck,
    inputName: inputName
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
      "default": 'radio',
      "private": true
    },
    "default": {
      required: false,
      type: [String, Number],
      "default": null
    },
    disabled: {
      required: false,
      type: [Boolean],
      "default": false
    },
    id: {
      required: false,
      type: [String],
      "default": null
    },
    radioName: {
      required: false,
      type: [String],
      "default": null
    },
    radioValue: {
      required: false,
      type: [Boolean, String, Number],
      "default": 1
    },
    text: {
      required: false,
      type: [String],
      "default": null
    }
  },
  setup: function setup(props, context) {
    var form$ = base$Z();
    var theme = base$Y();
    var layout = base$L(props);
    var input$1 = base$E();
    var path = base$G(props, context);
    var disabled = base$K(props);
    var fieldId = base$F(props, context, {
      path: path.path
    });
    var events = base$$(props, context, {}, {
      events: context.emits
    });
    var baseElement = base$H(props, context, {
      form$: form$.form$,
      fire: events.fire
    });
    var nullValue = base$x();
    var default_ = base$C(props, context, {
      nullValue: nullValue.nullValue,
      form$: form$.form$,
      dataPath: path.dataPath,
      parent: path.parent
    });
    var conditions = base$W(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var validation = base$B(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var value = base$z(props, context, {
      defaultValue: default_.defaultValue,
      dataPath: path.dataPath,
      form$: form$.form$,
      parent: path.parent
    });
    var data = base$D(props, context, {
      form$: form$.form$,
      available: conditions.available,
      value: value.value,
      resetValidators: validation.resetValidators,
      defaultValue: default_.defaultValue,
      nullValue: nullValue.nullValue
    });
    var label = base$R(props, context, {
      form$: form$.form$,
      el$: baseElement.el$
    });
    var genericName = base$A(props, context, {
      label: label.label,
      form$: form$.form$
    });
    var templates = base$O(props, context, {
      theme: theme.theme,
      form$: form$.form$
    });
    var classes = input(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      isDisabled: disabled.isDisabled,
      templates: templates.templates
    });
    var columns = base$Q(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      hasLabel: label.hasLabel
    });
    var view = base$P(props, context, {
      available: conditions.available,
      active: baseElement.active
    });
    var slots = base$N(props, context, {
      form$: form$.form$,
      el$: baseElement.el$,
      templates: templates.templates
    }, {
      slots: ['default', 'label', 'info', 'description', 'before', 'between', 'after']
    });
    var radio = base$8(props, context, {
      update: data.update,
      nullValue: nullValue.nullValue,
      fieldId: fieldId.fieldId,
      path: path.path,
      form$: form$.form$
    });
    base$y(props, context, {
      form$: form$.form$,
      value: value.value,
      fire: events.fire,
      dirt: validation.dirt,
      validate: validation.validate
    });
    onMounted(function () {
      validation.initMessageBag();
      validation.initValidation();
    });
    return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, form$), fieldId), theme), layout), input$1), path), conditions), value), validation), label), classes), columns), baseElement), genericName), view), templates), slots), disabled), events), data), default_), nullValue), radio);
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
      "default": 'radiogroup',
      "private": true
    },
    "default": {
      required: false,
      type: [String, Number],
      "default": null
    },
    disabled: {
      required: false,
      type: [Boolean],
      "default": false
    },
    id: {
      required: false,
      type: [String],
      "default": null
    },
    items: {
      required: false,
      type: [Object, Array, Function],
      "default": function _default() {
        return {};
      }
    },
    disables: {
      required: false,
      type: [Array],
      "default": function _default() {
        return [];
      }
    }
  },
  setup: function setup(props, context) {
    var form$ = base$Z();
    var theme = base$Y();
    var layout = base$L(props);
    var path = base$G(props, context);
    var nullValue = base$x();
    var fieldId = base$F(props, context, {
      path: path.path
    });
    var events = base$$(props, context, {}, {
      events: context.emits
    });
    var baseElement = base$H(props, context, {
      form$: form$.form$,
      fire: events.fire
    });
    var disabled = radiogroup$1(props, context, {
      form$: form$.form$
    });
    var asyncItems = radiogroup(props, context, {
      disableAll: disabled.disableAll,
      enableAll: disabled.enableAll,
      el$: baseElement.el$
    });
    var default_ = base$C(props, context, {
      nullValue: nullValue.nullValue,
      form$: form$.form$,
      dataPath: path.dataPath,
      parent: path.parent
    });
    var conditions = base$W(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var validation = base$B(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var value = base$z(props, context, {
      defaultValue: default_.defaultValue,
      dataPath: path.dataPath,
      form$: form$.form$,
      parent: path.parent
    });
    var data = base$D(props, context, {
      form$: form$.form$,
      available: conditions.available,
      value: value.value,
      resetValidators: validation.resetValidators,
      defaultValue: default_.defaultValue,
      nullValue: nullValue.nullValue
    });
    var label = base$R(props, context, {
      form$: form$.form$,
      el$: baseElement.el$
    });
    var genericName = base$A(props, context, {
      label: label.label,
      form$: form$.form$
    });
    var templates = base$O(props, context, {
      theme: theme.theme,
      form$: form$.form$
    });
    var classes = base$J(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      templates: templates.templates
    });
    var columns = base$Q(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      hasLabel: label.hasLabel
    });
    var view = base$P(props, context, {
      available: conditions.available,
      active: baseElement.active
    });
    var slots = base$N(props, context, {
      form$: form$.form$,
      el$: baseElement.el$,
      templates: templates.templates
    }, {
      slots: ['radio', 'label', 'info', 'description', 'before', 'between', 'after']
    });
    base$y(props, context, {
      form$: form$.form$,
      value: value.value,
      fire: events.fire,
      dirt: validation.dirt,
      validate: validation.validate
    });
    onMounted(function () {
      validation.initMessageBag();
      validation.initValidation();
    });
    return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, form$), theme), layout), fieldId), path), conditions), value), validation), label), classes), columns), baseElement), genericName), view), templates), slots), disabled), events), data), default_), nullValue), asyncItems);
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
      "default": 'select',
      "private": true
    },
    "default": {
      required: false,
      type: [String, Number, Object],
      "default": null
    },
    disabled: {
      required: false,
      type: [Boolean],
      "default": false
    },
    floating: {
      required: false,
      type: [String],
      "default": null
    },
    id: {
      required: false,
      type: [String],
      "default": null
    },
    placeholder: {
      required: false,
      type: [String],
      "default": null
    },
    onSelect: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    onDeselect: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    onSearchChange: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    onOpen: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    onClose: {
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
    onPaste: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    "native": {
      required: false,
      type: [Boolean],
      "default": true
    },
    items: {
      required: false,
      type: [Object, Array, Function],
      "default": function _default() {
        return {};
      }
    },
    labelProp: {
      type: [String],
      required: false,
      "default": 'label',
      "native": false
    },
    valueProp: {
      type: [String],
      required: false,
      "default": 'value',
      "native": false
    },
    search: {
      required: false,
      type: [Boolean],
      "default": false,
      "native": false
    },
    trackBy: {
      type: [String],
      required: false,
      "default": 'label',
      "native": false
    },
    strict: {
      type: [Boolean],
      required: false,
      "default": true,
      "native": false
    },
    object: {
      type: [Boolean],
      required: false,
      "default": false,
      "native": false
    },
    limit: {
      type: [Number],
      required: false,
      "default": -1,
      "native": false
    },
    groups: {
      type: [Boolean],
      required: false,
      "default": false,
      "native": false
    },
    groupLabel: {
      type: [String],
      required: false,
      "default": 'label',
      "native": false
    },
    groupOptions: {
      type: [String],
      required: false,
      "default": 'items',
      "native": false
    },
    groupHideEmpty: {
      type: [Boolean],
      required: false,
      "default": false,
      "native": false
    },
    openDirection: {
      type: [String],
      required: false,
      "default": 'bottom',
      "native": false
    },
    canDeselect: {
      type: [Boolean],
      required: false,
      "default": true,
      "native": false
    },
    canClear: {
      type: [Boolean],
      required: false,
      "default": true,
      "native": false
    },
    closeOnSelect: {
      type: [Boolean],
      required: false,
      "default": true,
      "native": false
    },
    delay: {
      type: [Number],
      required: false,
      "default": -1,
      "native": false
    },
    minChars: {
      type: [Number],
      required: false,
      "default": 0,
      "native": false
    },
    resolveOnLoad: {
      type: [Boolean],
      required: false,
      "default": true,
      "native": false
    },
    filterResults: {
      type: [Boolean],
      required: false,
      "default": true,
      "native": false
    },
    clearOnSearch: {
      type: [Boolean],
      required: false,
      "default": false,
      "native": false
    },
    caret: {
      type: [Boolean],
      required: false,
      "default": true,
      "native": false
    },
    loading: {
      type: [Boolean],
      required: false,
      "default": false,
      "native": false
    },
    noOptionsText: {
      type: [String],
      required: false,
      "default": undefined,
      '@default': 'locale.multiselect.noOptions',
      "native": false
    },
    noResultsText: {
      type: [String],
      required: false,
      "default": undefined,
      '@default': 'locale.multiselect.noResults',
      "native": false
    },
    autocomplete: {
      type: [String],
      required: false,
      "native": false
    },
    inputType: {
      type: [String],
      required: false,
      "default": 'text',
      "native": false
    },
    extendOptions: {
      required: false,
      type: [Object],
      "default": function _default() {
        return {};
      }
    }
  },
  setup: function setup(props, context) {
    var form$ = base$Z();
    var theme = base$Y();
    var layout = base$L(props);
    var input$1 = base$E();
    var path = base$G(props, context);
    var disabled = base$K(props);
    var nullValue = base$x();
    var fieldId = base$F(props, context, {
      path: path.path
    });
    var floating = base$p(props, context, {
      form$: form$.form$
    });
    var events = base$$(props, context, {}, {
      events: context.emits
    });
    var baseElement = base$H(props, context, {
      form$: form$.form$,
      fire: events.fire
    });
    var default_ = base$C(props, context, {
      nullValue: nullValue.nullValue,
      form$: form$.form$,
      dataPath: path.dataPath,
      parent: path.parent
    });
    var validation = base$B(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var loading = base$9(props, context, {
      pending: validation.pending
    });
    var options = select(props, context, {
      form$: form$.form$,
      isLoading: loading.isLoading
    });
    var asyncItems = base$u(props, context, {
      isNative: options.isNative,
      input: input$1.input,
      disable: disabled.disable,
      enable: disabled.enable,
      el$: baseElement.el$
    });
    var value = base$z(props, context, {
      defaultValue: default_.defaultValue,
      dataPath: path.dataPath,
      form$: form$.form$,
      parent: path.parent
    });
    var conditions = base$W(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var data = base$D(props, context, {
      form$: form$.form$,
      available: conditions.available,
      value: value.value,
      resetValidators: validation.resetValidators,
      defaultValue: default_.defaultValue,
      nullValue: nullValue.nullValue
    });
    var empty = base$s(props, context, {
      value: value.value,
      nullValue: nullValue.nullValue
    });
    var label = base$R(props, context, {
      form$: form$.form$,
      el$: baseElement.el$
    });
    var genericName = base$A(props, context, {
      label: label.label,
      form$: form$.form$
    });
    var templates = base$O(props, context, {
      theme: theme.theme,
      form$: form$.form$
    });
    var classes = input(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      isDisabled: disabled.isDisabled,
      templates: templates.templates
    });
    var columns = base$Q(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      hasLabel: label.hasLabel
    });
    var view = base$P(props, context, {
      available: conditions.available,
      active: baseElement.active
    });
    var slots = base$N(props, context, {
      form$: form$.form$,
      el$: baseElement.el$,
      templates: templates.templates
    }, {
      slots: ['option', 'single-label', 'placeholder', 'group-label', 'before-list', 'after-list', 'no-results', 'no-options', 'caret', 'spinner', 'clear', 'label', 'info', 'description', 'before', 'between', 'after']
    });
    var handleSelectEvents = base$b(props, context, {
      fire: events.fire
    });
    base$y(props, context, {
      form$: form$.form$,
      value: value.value,
      fire: events.fire,
      dirt: validation.dirt,
      validate: validation.validate
    });
    onMounted(function () {
      validation.initMessageBag();
      validation.initValidation();
    });
    return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, form$), fieldId), theme), layout), input$1), path), conditions), value), validation), label), classes), columns), baseElement), genericName), view), templates), slots), disabled), events), data), empty), default_), nullValue), asyncItems), options), handleSelectEvents), floating), loading);
  }
};

var SliderElement = {
  name: 'SliderElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      "default": 'slider',
      "private": true
    },
    "default": {
      required: false,
      type: [Number, Array],
      "default": 0
    },
    disabled: {
      required: false,
      type: [Boolean],
      "default": false
    },
    id: {
      required: false,
      type: [String],
      "default": null
    },
    min: {
      required: false,
      type: [Number],
      "default": 0
    },
    max: {
      required: false,
      type: [Number],
      "default": 100
    },
    step: {
      required: false,
      type: [Number],
      "default": 1
    },
    tooltips: {
      required: false,
      type: [Boolean],
      "default": true
    },
    showTooltip: {
      required: false,
      type: [String],
      "default": 'always'
    },
    tooltipPosition: {
      required: false,
      type: [String],
      "default": null
    },
    merge: {
      required: false,
      type: [Number],
      "default": -1
    },
    format: {
      required: false,
      type: [Object, Function],
      "default": null
    },
    orientation: {
      required: false,
      type: [String],
      "default": 'horizontal'
    },
    direction: {
      required: false,
      type: [String],
      "default": 'ltr'
    },
    extendOptions: {
      required: false,
      type: [Object],
      "default": function _default() {
        return {};
      }
    }
  },
  setup: function setup(props, context) {
    var form$ = base$Z();
    var theme = base$Y();
    var layout = base$L(props);
    var input = base$E();
    var path = base$G(props, context);
    var disabled = base$K(props);
    var nullValue = min(props);
    var fieldId = base$F(props, context, {
      path: path.path
    });
    var events = base$$(props, context, {}, {
      events: context.emits
    });
    var baseElement = base$H(props, context, {
      form$: form$.form$,
      fire: events.fire
    });
    var options = slider(props, context, {
      isDisabled: disabled.isDisabled,
      form$: form$.form$
    });
    var default_ = base$C(props, context, {
      nullValue: nullValue.nullValue,
      form$: form$.form$,
      dataPath: path.dataPath,
      parent: path.parent
    });
    var value = base$z(props, context, {
      defaultValue: default_.defaultValue,
      dataPath: path.dataPath,
      form$: form$.form$,
      parent: path.parent
    });
    var validation = slider$1(props, context, {
      form$: form$.form$,
      path: path.path,
      value: value.value
    });
    var conditions = base$W(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var data = base$D(props, context, {
      form$: form$.form$,
      available: conditions.available,
      value: value.value,
      resetValidators: validation.resetValidators,
      defaultValue: default_.defaultValue,
      nullValue: nullValue.nullValue
    });
    var label = base$R(props, context, {
      form$: form$.form$,
      el$: baseElement.el$
    });
    var genericName = base$A(props, context, {
      label: label.label,
      form$: form$.form$
    });
    var templates = base$O(props, context, {
      theme: theme.theme,
      form$: form$.form$
    });
    var classes = base$J(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      templates: templates.templates
    });
    var columns = base$Q(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      hasLabel: label.hasLabel
    });
    var view = base$P(props, context, {
      available: conditions.available,
      active: baseElement.active
    });
    var slots = base$N(props, context, {
      form$: form$.form$,
      el$: baseElement.el$,
      templates: templates.templates
    }, {
      slots: ['label', 'info', 'description', 'before', 'between', 'after']
    });
    var handleChange = base$q(props, context, {
      value: value.value
    });
    base$y(props, context, {
      form$: form$.form$,
      value: value.value,
      fire: events.fire,
      dirt: validation.dirt,
      validate: validation.validate
    });
    onMounted(function () {
      validation.initMessageBag();
      validation.initValidation();
    });
    return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, form$), fieldId), theme), layout), input), path), conditions), value), validation), label), classes), columns), baseElement), genericName), view), templates), slots), disabled), events), data), default_), nullValue), options), handleChange);
  }
};

var base$7 = function base(props, context, dependencies) {
  var _toRefs = toRefs(props),
      content = _toRefs.content; // ============== COMPUTED ==============

  /**
   * Determines if HTML content should be rendered for the element.
   * 
   * @type {boolean}
   * @private
   */


  var isHtml = computed(function () {
    return typeof content.value == 'string';
  });
  return {
    isHtml: isHtml
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
      "default": 'static',
      "private": true
    },
    content: {
      required: false,
      type: [String, Object],
      "default": ''
    },
    wrap: {
      required: false,
      type: [Boolean],
      "default": true
    }
  },
  setup: function setup(props, context) {
    var form$ = base$Z();
    var theme = base$Y();
    var layout = base$L(props);
    var path = static_(props, context);
    var static_$2 = base$7(props);
    var events = base$$(props, context, {}, {
      events: context.emits
    });
    var baseElement = static_$1(props, context, {
      form$: form$.form$,
      fire: events.fire
    });
    var conditions = base$W(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var label = base$R(props, context, {
      form$: form$.form$,
      el$: baseElement.el$
    });
    var templates = base$O(props, context, {
      theme: theme.theme,
      form$: form$.form$
    });
    var classes = base$J(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      templates: templates.templates
    });
    var columns = base$Q(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      hasLabel: label.hasLabel
    });
    var view = base$P(props, context, {
      available: conditions.available,
      active: baseElement.active
    });
    var slots = base$N(props, context, {
      form$: form$.form$,
      el$: baseElement.el$,
      templates: templates.templates
    }, {
      slots: ['default', 'label', 'info', 'description', 'before', 'between', 'after']
    });
    return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, form$), theme), layout), path), conditions), label), classes), columns), baseElement), view), templates), slots), events), static_$2);
  }
};

var base$6 = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============
  var fire = dependencies.fire;
  /**
   * Handles `tag` event.
   *
   * @param {string} searchQuery* the current search query.
   * @returns {void}
   * @private
   */

  var handleTag = function handleTag(searchQuery) {
    fire('tag', searchQuery);
  };

  return {
    handleTag: handleTag
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
      "default": 'tags',
      "private": true
    },
    "default": {
      required: false,
      type: [Array],
      "default": function _default() {
        return [];
      }
    },
    disabled: {
      required: false,
      type: [Boolean],
      "default": false
    },
    floating: {
      required: false,
      type: [String],
      "default": null
    },
    id: {
      required: false,
      type: [String],
      "default": null
    },
    placeholder: {
      required: false,
      type: [String],
      "default": null
    },
    onSelect: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    onDeselect: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    onSearchChange: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    onOpen: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    onClose: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    onTag: {
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
    onPaste: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    items: {
      required: false,
      type: [Object, Array, Function],
      "default": function _default() {
        return {};
      }
    },
    labelProp: {
      type: [String],
      required: false,
      "default": 'label',
      "native": false
    },
    valueProp: {
      type: [String],
      required: false,
      "default": 'value',
      "native": false
    },
    search: {
      required: false,
      type: [Boolean],
      "default": false,
      "native": false
    },
    trackBy: {
      type: [String],
      required: false,
      "default": 'label',
      "native": false
    },
    strict: {
      type: [Boolean],
      required: false,
      "default": true,
      "native": false
    },
    create: {
      required: false,
      type: [Boolean],
      "default": false
    },
    appendNewTag: {
      type: [Boolean],
      required: false,
      "default": true
    },
    addTagOn: {
      type: [Array],
      required: false,
      "default": function _default() {
        return ['enter'];
      }
    },
    object: {
      type: [Boolean],
      required: false,
      "default": false,
      "native": false
    },
    limit: {
      type: [Number],
      required: false,
      "default": -1,
      "native": false
    },
    max: {
      type: [Number],
      required: false,
      "default": -1,
      "native": false
    },
    groups: {
      type: [Boolean],
      required: false,
      "default": false,
      "native": false
    },
    groupLabel: {
      type: [String],
      required: false,
      "default": 'label',
      "native": false
    },
    groupOptions: {
      type: [String],
      required: false,
      "default": 'items',
      "native": false
    },
    groupHideEmpty: {
      type: [Boolean],
      required: false,
      "default": false,
      "native": false
    },
    groupSelect: {
      type: [Boolean],
      required: false,
      "default": true,
      "native": false
    },
    openDirection: {
      type: [String],
      required: false,
      "default": 'bottom',
      "native": false
    },
    canClear: {
      type: [Boolean],
      required: false,
      "default": true,
      "native": false
    },
    clearOnSelect: {
      type: [Boolean],
      required: false,
      "default": true,
      "native": false
    },
    closeOnSelect: {
      type: [Boolean],
      required: false,
      "default": true,
      "native": false
    },
    delay: {
      type: [Number],
      required: false,
      "default": -1,
      "native": false
    },
    minChars: {
      type: [Number],
      required: false,
      "default": 0,
      "native": false
    },
    resolveOnLoad: {
      type: [Boolean],
      required: false,
      "default": true,
      "native": false
    },
    filterResults: {
      type: [Boolean],
      required: false,
      "default": true,
      "native": false
    },
    clearOnSearch: {
      type: [Boolean],
      required: false,
      "default": false,
      "native": false
    },
    hideSelected: {
      type: [Boolean],
      required: false,
      "default": true,
      "native": false
    },
    showOptions: {
      type: [Boolean],
      required: false,
      "default": true
    },
    caret: {
      type: [Boolean],
      required: false,
      "default": true,
      "native": false
    },
    loading: {
      type: [Boolean],
      required: false,
      "default": false,
      "native": false
    },
    noOptionsText: {
      type: [String],
      required: false,
      "default": undefined,
      '@default': 'locale.multiselect.noOptions',
      "native": false
    },
    noResultsText: {
      type: [String],
      required: false,
      "default": undefined,
      '@default': 'locale.multiselect.noResults',
      "native": false
    },
    autocomplete: {
      type: [String],
      required: false,
      "native": false
    },
    inputType: {
      type: [String],
      required: false,
      "default": 'text',
      "native": false
    },
    extendOptions: {
      required: false,
      type: [Object],
      "default": function _default() {
        return {};
      }
    }
  },
  setup: function setup(props, context) {
    var form$ = base$Z();
    var theme = base$Y();
    var layout = base$L(props);
    var input = base$E();
    var path = base$G(props, context);
    var disabled = base$K(props);
    var nullValue = array$1();
    var fieldId = base$F(props, context, {
      path: path.path
    });
    var floating = base$p(props, context, {
      form$: form$.form$
    });
    var events = base$$(props, context, {}, {
      events: context.emits
    });
    var baseElement = tags$2(props, context, {
      form$: form$.form$,
      fire: events.fire
    });
    var default_ = base$C(props, context, {
      nullValue: nullValue.nullValue,
      form$: form$.form$,
      dataPath: path.dataPath,
      parent: path.parent
    });
    var validation = base$B(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var loading = base$9(props, context, {
      pending: validation.pending
    });
    var options = tags(props, context, {
      form$: form$.form$,
      isLoading: loading.isLoading
    });
    var asyncItems = tags$1(props, context, {
      isNative: options.isNative,
      input: input.input
    });
    var value = base$z(props, context, {
      defaultValue: default_.defaultValue,
      dataPath: path.dataPath,
      form$: form$.form$,
      parent: path.parent
    });
    var conditions = base$W(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var data = base$D(props, context, {
      form$: form$.form$,
      available: conditions.available,
      value: value.value,
      resetValidators: validation.resetValidators,
      defaultValue: default_.defaultValue,
      nullValue: nullValue.nullValue
    });
    var empty = array(props, context, {
      value: value.value,
      nullValue: nullValue.nullValue
    });
    var label = base$R(props, context, {
      form$: form$.form$,
      el$: baseElement.el$
    });
    var genericName = base$A(props, context, {
      label: label.label,
      form$: form$.form$
    });
    var templates = base$O(props, context, {
      theme: theme.theme,
      form$: form$.form$
    });
    var classes = base$J(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      templates: templates.templates
    });
    var columns = base$Q(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      hasLabel: label.hasLabel
    });
    var view = base$P(props, context, {
      available: conditions.available,
      active: baseElement.active
    });
    var slots = base$N(props, context, {
      form$: form$.form$,
      el$: baseElement.el$,
      templates: templates.templates
    }, {
      slots: ['tag', 'option', 'placeholder', 'group-label', 'before-list', 'after-list', 'no-results', 'no-options', 'caret', 'spinner', 'clear', 'label', 'info', 'description', 'before', 'between', 'after']
    });
    var handleSelectEvents = base$b(props, context, {
      fire: events.fire
    });
    var handleTag = base$6(props, context, {
      fire: events.fire
    });
    var select = base$a(props, context, {
      value: value.value,
      updated: data.updated
    });
    base$y(props, context, {
      form$: form$.form$,
      value: value.value,
      fire: events.fire,
      dirt: validation.dirt,
      validate: validation.validate
    });
    onMounted(function () {
      validation.initMessageBag();
      validation.initValidation();
    });
    return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, form$), fieldId), theme), layout), input), path), conditions), value), validation), label), classes), columns), baseElement), genericName), view), templates), slots), disabled), events), data), empty), default_), nullValue), asyncItems), options), handleSelectEvents), select), handleTag), floating), loading);
  }
};

var base$5 = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============
  var model = dependencies.model; // =============== METHODS ==============

  /**
   * Handles `input` event.
   * 
   * @param {Event} e* 
   * @returns {void}
   * @private
   */

  var handleInput = function handleInput(e) {
    model.value = e.target.value;
  };

  return {
    handleInput: handleInput
  };
};

var base$4 = function base(props, context, dependencies) {
  var _toRefs = toRefs(props),
      autogrow = _toRefs.autogrow; // ============ DEPENDENCIES ============


  var form$ = dependencies.form$;
  var input = dependencies.input;
  var value = dependencies.value; // =============== METHODS ==============

  /**
   * Updates the height of the input based in its contents when [`autogrow`](#option-autogrow) is enabled.
   * 
   * @returns {void}
   */

  var autosize = function autosize() {
    if (!autogrow.value) {
      return;
    }

    form$.value.$vueform.services.autosize.update(input.value);
  }; // ============== WATCHERS ==============


  watch(autogrow, function (newValue) {
    if (newValue) {
      form$.value.$vueform.services.autosize(input.value);
    } else {
      form$.value.$vueform.services.autosize.destroy(input.value);
    }
  });
  watch(value, function () {
    autosize();
  }); // =============== HOOKS ================

  onMounted(function () {
    if (autogrow.value) {
      nextTick(function () {
        form$.value.$vueform.services.autosize(input.value);
      });
    }
  });
  return {
    autosize: autosize
  };
};

var multilingual = function multilingual(props, context, dependencies) {
  var _base = base$4(props, context, dependencies),
      autosize = _base.autosize; // ============ DEPENDENCIES ============


  var form$ = dependencies.form$; // =============== HOOKS ================

  onMounted(function () {
    form$.value.on('language', function () {
      autosize();
    });
  });
  return {
    autosize: autosize
  };
};

var TextareaElement = {
  name: 'TextareaElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      "default": 'textarea',
      "private": true
    },
    "default": {
      required: false,
      type: [String, Number],
      "default": null
    },
    addons: {
      required: false,
      type: [Object],
      "default": function _default() {
        return {};
      }
    },
    autogrow: {
      required: false,
      type: [Boolean],
      "default": true
    },
    rows: {
      required: false,
      type: [Number],
      "default": 3
    },
    debounce: {
      required: false,
      type: [Number],
      "default": null
    },
    disabled: {
      required: false,
      type: [Boolean],
      "default": false
    },
    floating: {
      required: false,
      type: [String],
      "default": null
    },
    id: {
      required: false,
      type: [String],
      "default": null
    },
    placeholder: {
      required: false,
      type: [String],
      "default": null
    },
    readonly: {
      required: false,
      type: [Boolean],
      "default": false
    }
  },
  setup: function setup(props, context) {
    var form$ = base$Z();
    var theme = base$Y();
    var layout = base$L(props);
    var input$1 = base$E();
    var path = base$G(props, context);
    var disabled = base$K(props);
    var nullValue = base$x();
    var fieldId = base$F(props, context, {
      path: path.path
    });
    var floating = base$p(props, context, {
      form$: form$.form$
    });
    var events = base$$(props, context, {}, {
      events: context.emits
    });
    var baseElement = base$H(props, context, {
      form$: form$.form$,
      fire: events.fire
    });
    var addons = base$t(props, context, {
      el$: baseElement.el$
    });
    var default_ = base$C(props, context, {
      nullValue: nullValue.nullValue,
      form$: form$.form$,
      dataPath: path.dataPath,
      parent: path.parent
    });
    var conditions = base$W(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var validation = text(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var value = base$z(props, context, {
      defaultValue: default_.defaultValue,
      dataPath: path.dataPath,
      form$: form$.form$,
      parent: path.parent
    });
    var data = base$D(props, context, {
      form$: form$.form$,
      available: conditions.available,
      value: value.value,
      resetValidators: validation.resetValidators,
      defaultValue: default_.defaultValue,
      nullValue: nullValue.nullValue
    });
    var empty = base$s(props, context, {
      value: value.value,
      nullValue: nullValue.nullValue
    });
    var label = base$R(props, context, {
      form$: form$.form$,
      el$: baseElement.el$
    });
    var genericName = base$A(props, context, {
      label: label.label,
      form$: form$.form$
    });
    var templates = base$O(props, context, {
      theme: theme.theme,
      form$: form$.form$
    });
    var classes = input(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      isDisabled: disabled.isDisabled,
      templates: templates.templates
    });
    var columns = base$Q(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      hasLabel: label.hasLabel
    });
    var view = base$P(props, context, {
      available: conditions.available,
      active: baseElement.active
    });
    var slots = base$N(props, context, {
      form$: form$.form$,
      el$: baseElement.el$,
      templates: templates.templates
    }, {
      slots: ['label', 'info', 'description', 'before', 'between', 'after', 'addon-before', 'addon-after']
    });
    var handleInput = base$5(props, context, {
      model: value.model
    });
    var autogrow = base$4(props, context, {
      form$: form$.form$,
      input: input$1.input,
      value: value.value
    });
    base$y(props, context, {
      form$: form$.form$,
      value: value.value,
      fire: events.fire,
      dirt: validation.dirt,
      validate: validation.validate
    });
    onMounted(function () {
      validation.initMessageBag();
      validation.initValidation();
    });
    return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, form$), fieldId), theme), layout), input$1), addons), path), conditions), value), validation), label), classes), columns), baseElement), genericName), view), templates), slots), disabled), events), data), empty), default_), nullValue), handleInput), autogrow), floating);
  }
};

var TextElement = {
  name: 'TextElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      "default": 'text',
      "private": true
    },
    "default": {
      required: false,
      type: [String, Number],
      "default": null
    },
    debounce: {
      required: false,
      type: [Number],
      "default": null
    },
    disabled: {
      required: false,
      type: [Boolean],
      "default": false
    },
    floating: {
      required: false,
      type: [String],
      "default": null
    },
    id: {
      required: false,
      type: [String],
      "default": null
    },
    placeholder: {
      required: false,
      type: [String],
      "default": null
    },
    readonly: {
      required: false,
      type: [Boolean],
      "default": false
    },
    inputType: {
      required: false,
      type: [String],
      "default": 'text'
    },
    addons: {
      required: false,
      type: [Object],
      "default": function _default() {
        return {};
      }
    },
    autocomplete: {
      required: false,
      type: [String, Number],
      "default": null
    },
    loading: {
      type: [Boolean],
      required: false,
      "default": false
    }
  },
  setup: function setup(props, context) {
    var form$ = base$Z();
    var theme = base$Y();
    var layout = base$L(props);
    var input$1 = base$E();
    var path = base$G(props, context);
    var disabled = base$K(props);
    var nullValue = base$x();
    var fieldId = base$F(props, context, {
      path: path.path
    });
    var floating = base$p(props, context, {
      form$: form$.form$
    });
    var events = base$$(props, context, {}, {
      events: context.emits
    });
    var baseElement = base$H(props, context, {
      form$: form$.form$,
      fire: events.fire
    });
    var addons = base$t(props, context, {
      el$: baseElement.el$
    });
    var default_ = base$C(props, context, {
      nullValue: nullValue.nullValue,
      form$: form$.form$,
      parent: path.parent
    });
    var conditions = base$W(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var validation = text(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var loading = base$9(props, context, {
      pending: validation.pending
    });
    var value = base$z(props, context, {
      defaultValue: default_.defaultValue,
      dataPath: path.dataPath,
      form$: form$.form$,
      parent: path.parent
    });
    var data = base$D(props, context, {
      form$: form$.form$,
      available: conditions.available,
      value: value.value,
      resetValidators: validation.resetValidators,
      defaultValue: default_.defaultValue,
      nullValue: nullValue.nullValue
    });
    var empty = base$s(props, context, {
      value: value.value,
      nullValue: nullValue.nullValue
    });
    var label = base$R(props, context, {
      form$: form$.form$,
      el$: baseElement.el$
    });
    var genericName = base$A(props, context, {
      label: label.label,
      form$: form$.form$
    });
    var templates = base$O(props, context, {
      theme: theme.theme,
      form$: form$.form$
    });
    var classes = input(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      isDisabled: disabled.isDisabled,
      templates: templates.templates
    });
    var columns = base$Q(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      hasLabel: label.hasLabel
    });
    var view = base$P(props, context, {
      available: conditions.available,
      active: baseElement.active
    });
    var slots = base$N(props, context, {
      form$: form$.form$,
      el$: baseElement.el$,
      templates: templates.templates
    }, {
      slots: ['label', 'info', 'description', 'before', 'between', 'after', 'addon-before', 'addon-after']
    });
    var handleInput = base$5(props, context, {
      model: value.model
    });
    base$y(props, context, {
      form$: form$.form$,
      value: value.value,
      fire: events.fire,
      dirt: validation.dirt,
      validate: validation.validate
    });
    onMounted(function () {
      validation.initMessageBag();
      validation.initValidation();
    });
    return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, form$), fieldId), theme), layout), input$1), addons), path), disabled), nullValue), baseElement), default_), value), conditions), validation), loading), label), classes), columns), genericName), view), templates), slots), events), data), empty), handleInput), floating);
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
      "default": 'toggle',
      "private": true
    },
    "default": {
      required: false,
      type: [String, Number, Boolean],
      "default": undefined // falseValue

    },
    disabled: {
      required: false,
      type: [Boolean],
      "default": false
    },
    id: {
      required: false,
      type: [String],
      "default": null
    },
    text: {
      required: false,
      type: [String],
      "default": null
    },
    labels: {
      required: false,
      type: [Object],
      "default": function _default() {
        return {};
      }
    },
    trueValue: {
      required: false,
      type: [Boolean, String, Number],
      "default": true
    },
    falseValue: {
      required: false,
      type: [Boolean, String, Number],
      "default": false
    },
    extendOptions: {
      required: false,
      type: [Object],
      "default": function _default() {
        return {};
      }
    }
  },
  setup: function setup(props, context) {
    var form$ = base$Z();
    var theme = base$Y();
    var layout = base$L(props);
    var input = base$E();
    var path = base$G(props, context);
    var disabled = base$K(props);
    var nullValue = _boolean(props);
    var fieldId = base$F(props, context, {
      path: path.path
    });
    var events = base$$(props, context, {}, {
      events: context.emits
    });
    var baseElement = base$H(props, context, {
      form$: form$.form$,
      fire: events.fire
    });
    var options = toggle(props, context, {
      form$: form$.form$,
      isDisabled: disabled.isDisabled
    });
    var default_ = base$C(props, context, {
      nullValue: nullValue.nullValue,
      form$: form$.form$,
      dataPath: path.dataPath,
      parent: path.parent
    });
    var conditions = base$W(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var validation = base$B(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var value = base$z(props, context, {
      defaultValue: default_.defaultValue,
      dataPath: path.dataPath,
      form$: form$.form$,
      parent: path.parent
    });
    var data = base$D(props, context, {
      form$: form$.form$,
      available: conditions.available,
      value: value.value,
      resetValidators: validation.resetValidators,
      defaultValue: default_.defaultValue,
      nullValue: nullValue.nullValue
    });
    var label = base$R(props, context, {
      form$: form$.form$,
      el$: baseElement.el$
    });
    var genericName = base$A(props, context, {
      label: label.label,
      form$: form$.form$
    });
    var templates = base$O(props, context, {
      theme: theme.theme,
      form$: form$.form$
    });
    var classes = base$J(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      templates: templates.templates
    });
    var columns = base$Q(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      hasLabel: label.hasLabel
    });
    var view = base$P(props, context, {
      available: conditions.available,
      active: baseElement.active
    });
    var slots = base$N(props, context, {
      form$: form$.form$,
      el$: baseElement.el$,
      templates: templates.templates
    }, {
      slots: ['default', 'label', 'info', 'description', 'before', 'between', 'after']
    });
    var handleChange = base$q(props, context, {
      value: value.value
    });
    var toggle$1 = base$w(props, context, {
      update: data.update
    });
    base$y(props, context, {
      form$: form$.form$,
      value: value.value,
      fire: events.fire,
      dirt: validation.dirt,
      validate: validation.validate
    });
    onMounted(function () {
      validation.initMessageBag();
      validation.initValidation();
    });
    return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, form$), fieldId), theme), layout), input), path), conditions), value), validation), label), classes), columns), baseElement), genericName), view), templates), slots), disabled), events), data), default_), nullValue), handleChange), toggle$1), options);
  }
};

var base$3 = function base(props, context, dependencies) {
  var _toRefs = toRefs(props),
      endpoint = _toRefs.endpoint,
      method = _toRefs.method; // ============ DEPENDENCIES ============


  var form$ = dependencies.form$;
  var input = dependencies.input; // ================ DATA ================

  /**
   * Whether the editor is focused.
   * 
   * @type {boolean}
   */

  var focused = ref(false); // ============== COMPUTED ==============

  /**
  * The endpoint that uploads attachment. Can be changed by setting [`endpoint`](#endpoint) option.
  * 
  * @type {string}
  * @default `config.endpoints.attachment.url`
  * @private
  */

  var editorEndpoint = computed(function () {
    return endpoint.value || form$.value.$vueform.config.endpoints.attachment.url;
  });
  /**
  * The method to use to upload attachment. Can be changed by setting [`method`](#method) option.
  * 
  * @type {string}
  * @default `config.endpoints.attachment.method`
  * @private
  */

  var editorMethod = computed(function () {
    return method.value || form$.value.$vueform.config.endpoints.attachment.method;
  }); // =============== HOOKS ================

  onMounted(function () {
    input.value.editor$.addEventListener('focus', function () {
      focused.value = true;
    });
    input.value.editor$.addEventListener('blur', function () {
      focused.value = false;
    });
  });
  return {
    editorEndpoint: editorEndpoint,
    editorMethod: editorMethod,
    focused: focused
  };
};

var base$2 = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============
  var fire = dependencies.fire;
  var listeners = dependencies.listeners; // =============== METHODS ==============

  /**
   * Handles `alert` event.
   *
   * @param {string} message* alert message
   * @returns {void}
   * @private
   */

  var handleAlert = function handleAlert(message) {
    fire('alert', message);

    if (!listeners.value.alert) {
      alert(message);
    }
  };

  return {
    handleAlert: handleAlert
  };
};

var EditorElement = {
  name: 'EditorElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'alert', 'error', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      "default": 'editor',
      "private": true
    },
    "default": {
      required: false,
      type: [String, Number],
      "default": null
    },
    debounce: {
      required: false,
      type: [Number],
      "default": null
    },
    disabled: {
      required: false,
      type: [Boolean],
      "default": false
    },
    id: {
      required: false,
      type: [String],
      "default": null
    },
    placeholder: {
      required: false,
      type: [String],
      "default": null
    },
    onError: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    onAlert: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    accept: {
      required: false,
      type: [Array],
      "default": function _default() {
        return [];
      }
    },
    acceptMimes: {
      required: false,
      type: [Array],
      "default": function _default() {
        return [];
      }
    },
    endpoint: {
      required: false,
      type: [String],
      "default": null,
      '@default': 'config.endpoints.attachment.url'
    },
    method: {
      required: false,
      type: [String],
      "default": null,
      '@default': 'config.endpoints.attachment.method'
    }
  },
  setup: function setup(props, context) {
    var form$ = base$Z();
    var theme = base$Y();
    var layout = base$L(props);
    var input = base$E();
    var path = base$G(props, context);
    var disabled = base$K(props);
    var nullValue = base$x();
    var fieldId = base$F(props, context, {
      path: path.path
    });
    var events = base$$(props, context, {}, {
      events: context.emits
    });
    var baseElement = base$H(props, context, {
      form$: form$.form$,
      fire: events.fire
    });
    var default_ = base$C(props, context, {
      nullValue: nullValue.nullValue,
      form$: form$.form$,
      dataPath: path.dataPath,
      parent: path.parent
    });
    var conditions = base$W(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var validation = text(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var value = base$z(props, context, {
      defaultValue: default_.defaultValue,
      dataPath: path.dataPath,
      form$: form$.form$,
      parent: path.parent
    });
    var data = editor(props, context, {
      form$: form$.form$,
      available: conditions.available,
      value: value.value,
      resetValidators: validation.resetValidators,
      defaultValue: default_.defaultValue,
      nullValue: nullValue.nullValue,
      input: input.input
    });
    var empty = base$s(props, context, {
      value: value.value,
      nullValue: nullValue.nullValue
    });
    var label = base$R(props, context, {
      form$: form$.form$,
      el$: baseElement.el$
    });
    var genericName = base$A(props, context, {
      label: label.label,
      form$: form$.form$
    });
    var templates = base$O(props, context, {
      theme: theme.theme,
      form$: form$.form$
    });
    var editor$2 = base$3(props, context, {
      form$: form$.form$,
      input: input.input
    });
    var classes = editor$1(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      isDisabled: disabled.isDisabled,
      focused: editor$2.focused,
      templates: templates.templates
    });
    var columns = base$Q(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      hasLabel: label.hasLabel
    });
    var view = base$P(props, context, {
      available: conditions.available,
      active: baseElement.active
    });
    var slots = base$N(props, context, {
      form$: form$.form$,
      el$: baseElement.el$,
      templates: templates.templates
    }, {
      slots: ['label', 'info', 'description', 'before', 'between', 'after']
    });
    var handleInput = base$5(props, context, {
      model: value.model
    });
    var handleAlert = base$2(props, context, {
      fire: events.fire,
      listeners: events.listeners
    });
    var handleError = base$k(props, context, {
      fire: events.fire,
      listeners: events.listeners
    });
    base$y(props, context, {
      form$: form$.form$,
      value: value.value,
      fire: events.fire,
      dirt: validation.dirt,
      validate: validation.validate
    });
    onMounted(function () {
      validation.initMessageBag();
      validation.initValidation();
    });
    return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, form$), fieldId), theme), layout), input), path), conditions), value), validation), label), classes), columns), baseElement), genericName), view), templates), slots), disabled), events), data), empty), default_), nullValue), handleInput), handleAlert), handleError), editor$2);
  }
};

var base$1 = function base(props, context, dependencies) {
  // ============ DEPENDENCIES ============
  var form$ = dependencies.form$; // ============== COMPUTED ===============

  /**
   * The language code of the currently selected language (2 letters).
   * 
   * @type {string}
   */

  var language = computed(function () {
    return form$.value.selectedLanguage;
  });
  /**
   * Available language codes.
   * 
   * @type {array}
   */

  var languages = computed(function () {
    return _$1.keys(form$.value.options.languages);
  });
  return {
    language: language,
    languages: languages
  };
};

var TTextareaElement = {
  name: 'TTextareaElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      "default": 't-textarea',
      "private": true
    },
    "default": {
      required: false,
      type: [Object, String, Number],
      "default": null
    },
    addons: {
      required: false,
      type: [Object],
      "default": function _default() {
        return {};
      }
    },
    autogrow: {
      required: false,
      type: [Boolean],
      "default": true
    },
    rows: {
      required: false,
      type: [Number],
      "default": 3
    },
    debounce: {
      required: false,
      type: [Number],
      "default": null
    },
    disabled: {
      required: false,
      type: [Boolean],
      "default": false
    },
    floating: {
      required: false,
      type: [String],
      "default": null
    },
    id: {
      required: false,
      type: [String],
      "default": null
    },
    placeholder: {
      required: false,
      type: [String],
      "default": null
    },
    readonly: {
      required: false,
      type: [Boolean],
      "default": false
    }
  },
  setup: function setup(props, context) {
    var form$ = base$Z();
    var theme = base$Y();
    var layout = base$L(props);
    var input$1 = base$E();
    var path = base$G(props, context);
    var disabled = base$K(props);
    var fieldId = base$F(props, context, {
      path: path.path
    });
    var floating = base$p(props, context, {
      form$: form$.form$
    });
    var events = base$$(props, context, {}, {
      events: context.emits
    });
    var baseElement = base$H(props, context, {
      form$: form$.form$,
      fire: events.fire
    });
    var addons = base$t(props, context, {
      el$: baseElement.el$
    });
    var languages = base$1(props, context, {
      form$: form$.form$
    });
    var nullValue = multilingual$2(props, context, {
      languages: languages.languages
    });
    var default_ = multilingual$6(props, context, {
      nullValue: nullValue.nullValue,
      form$: form$.form$,
      parent: path.parent
    });
    var value = multilingual$4(props, context, {
      defaultValue: default_.defaultValue,
      language: languages.language,
      dataPath: path.dataPath,
      form$: form$.form$,
      parent: path.parent
    });
    var conditions = base$W(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var validation = multilingual$5(props, context, {
      form$: form$.form$,
      path: path.path,
      language: languages.language,
      languages: languages.languages,
      value: value.value
    });
    var data = multilingual$7(props, context, {
      form$: form$.form$,
      available: conditions.available,
      value: value.value,
      resetValidators: validation.resetValidators,
      defaultValue: default_.defaultValue,
      nullValue: nullValue.nullValue,
      language: languages.language
    });
    var empty = multilingual$1(props, context, {
      value: value.value,
      nullValue: nullValue.nullValue,
      language: languages.language
    });
    var label = base$R(props, context, {
      form$: form$.form$,
      el$: baseElement.el$
    });
    var genericName = base$A(props, context, {
      label: label.label,
      form$: form$.form$
    });
    var templates = base$O(props, context, {
      theme: theme.theme,
      form$: form$.form$
    });
    var classes = input(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      isDisabled: disabled.isDisabled,
      templates: templates.templates
    });
    var columns = base$Q(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      hasLabel: label.hasLabel
    });
    var view = base$P(props, context, {
      available: conditions.available,
      active: baseElement.active
    });
    var slots = base$N(props, context, {
      form$: form$.form$,
      el$: baseElement.el$,
      templates: templates.templates
    }, {
      slots: ['label', 'info', 'description', 'before', 'between', 'after', 'addon-before', 'addon-after']
    });
    var handleInput = base$5(props, context, {
      model: value.model
    });
    var autogrow = multilingual(props, context, {
      form$: form$.form$,
      input: input$1.input,
      value: value.value
    });
    multilingual$3(props, context, {
      form$: form$.form$,
      value: value.value,
      fire: events.fire,
      dirt: validation.dirt,
      validateLanguage: validation.validateLanguage,
      language: languages.language
    });
    onMounted(function () {
      validation.initState();
      validation.initMessageBag();
      validation.initValidation();
    });
    return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, form$), fieldId), theme), layout), input$1), addons), path), conditions), value), validation), label), classes), columns), baseElement), genericName), view), templates), slots), disabled), events), data), empty), default_), nullValue), handleInput), autogrow), languages), floating);
  }
};

var TTextElement = {
  name: 'TTextElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      "default": 't-text',
      "private": true
    },
    "default": {
      required: false,
      type: [Object, String, Number],
      "default": undefined
    },
    addons: {
      required: false,
      type: [Object],
      "default": function _default() {
        return {};
      }
    },
    autocomplete: {
      required: false,
      type: [String, Number],
      "default": null
    },
    debounce: {
      required: false,
      type: [Number],
      "default": null
    },
    disabled: {
      required: false,
      type: [Boolean],
      "default": false
    },
    floating: {
      required: false,
      type: [String],
      "default": null
    },
    id: {
      required: false,
      type: [String],
      "default": null
    },
    inputType: {
      required: false,
      type: [String],
      "default": 'text'
    },
    placeholder: {
      required: false,
      type: [String],
      "default": null
    },
    readonly: {
      required: false,
      type: [Boolean],
      "default": false
    },
    loading: {
      type: [Boolean],
      required: false,
      "default": false
    }
  },
  setup: function setup(props, context) {
    var form$ = base$Z();
    var theme = base$Y();
    var layout = base$L(props);
    var input$1 = base$E();
    var path = base$G(props, context);
    var disabled = base$K(props);
    var fieldId = base$F(props, context, {
      path: path.path
    });
    var floating = base$p(props, context, {
      form$: form$.form$
    });
    var events = base$$(props, context, {}, {
      events: context.emits
    });
    var baseElement = base$H(props, context, {
      form$: form$.form$,
      fire: events.fire
    });
    var addons = base$t(props, context, {
      el$: baseElement.el$
    });
    var languages = base$1(props, context, {
      form$: form$.form$
    });
    var nullValue = multilingual$2(props, context, {
      languages: languages.languages
    });
    var default_ = multilingual$6(props, context, {
      nullValue: nullValue.nullValue,
      form$: form$.form$,
      parent: path.parent
    });
    var value = multilingual$4(props, context, {
      defaultValue: default_.defaultValue,
      language: languages.language,
      dataPath: path.dataPath,
      form$: form$.form$,
      parent: path.parent
    });
    var conditions = base$W(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var validation = multilingual$5(props, context, {
      form$: form$.form$,
      path: path.path,
      language: languages.language,
      languages: languages.languages,
      value: value.value
    });
    var loading = base$9(props, context, {
      pending: validation.pending
    });
    var data = multilingual$7(props, context, {
      form$: form$.form$,
      available: conditions.available,
      value: value.value,
      resetValidators: validation.resetValidators,
      defaultValue: default_.defaultValue,
      nullValue: nullValue.nullValue,
      language: languages.language
    });
    var empty = multilingual$1(props, context, {
      value: value.value,
      nullValue: nullValue.nullValue,
      language: languages.language
    });
    var label = base$R(props, context, {
      form$: form$.form$,
      el$: baseElement.el$
    });
    var genericName = base$A(props, context, {
      label: label.label,
      form$: form$.form$
    });
    var templates = base$O(props, context, {
      theme: theme.theme,
      form$: form$.form$
    });
    var classes = input(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      isDisabled: disabled.isDisabled,
      templates: templates.templates
    });
    var columns = base$Q(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      hasLabel: label.hasLabel
    });
    var view = base$P(props, context, {
      available: conditions.available,
      active: baseElement.active
    });
    var slots = base$N(props, context, {
      form$: form$.form$,
      el$: baseElement.el$,
      templates: templates.templates
    }, {
      slots: ['label', 'info', 'description', 'before', 'between', 'after', 'addon-before', 'addon-after']
    });
    var handleInput = base$5(props, context, {
      model: value.model
    });
    multilingual$3(props, context, {
      form$: form$.form$,
      value: value.value,
      fire: events.fire,
      dirt: validation.dirt,
      validateLanguage: validation.validateLanguage,
      language: languages.language
    });
    onMounted(function () {
      validation.initState();
      validation.initMessageBag();
      validation.initValidation();
    });
    return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, form$), fieldId), theme), layout), input$1), addons), path), conditions), value), validation), label), classes), columns), baseElement), genericName), view), templates), slots), disabled), events), data), empty), default_), nullValue), handleInput), languages), floating), loading);
  }
};

var TEditorElement = {
  name: 'TEditorElement',
  mixins: [BaseElement, HasView, HasChange, HasData, HasValidation],
  emits: ['change', 'alert', 'error', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeUnmount', 'unmounted'],
  props: {
    type: {
      required: false,
      type: [String],
      "default": 't-editor',
      "private": true
    },
    "default": {
      required: false,
      type: [Object, String, Number],
      "default": null
    },
    debounce: {
      required: false,
      type: [Number],
      "default": null
    },
    disabled: {
      required: false,
      type: [Boolean],
      "default": false
    },
    id: {
      required: false,
      type: [String],
      "default": null
    },
    placeholder: {
      required: false,
      type: [String],
      "default": null
    },
    onError: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    onAlert: {
      required: false,
      type: [Function],
      "default": null,
      "private": true
    },
    accept: {
      required: false,
      type: [Array],
      "default": null
    },
    acceptMimes: {
      required: false,
      type: [Array],
      "default": null
    },
    endpoint: {
      required: false,
      type: [String],
      "default": null,
      '@default': 'config.endpoints.attachment.url'
    },
    method: {
      required: false,
      type: [String],
      "default": null,
      '@default': 'config.endpoints.attachment.method'
    }
  },
  setup: function setup(props, context) {
    var form$ = base$Z();
    var theme = base$Y();
    var layout = base$L(props);
    var input = base$E();
    var path = base$G(props, context);
    var disabled = base$K(props);
    var fieldId = base$F(props, context, {
      path: path.path
    });
    var events = base$$(props, context, {}, {
      events: context.emits
    });
    var baseElement = base$H(props, context, {
      form$: form$.form$,
      fire: events.fire
    });
    var languages = base$1(props, context, {
      form$: form$.form$
    });
    var nullValue = multilingual$2(props, context, {
      languages: languages.languages
    });
    var default_ = multilingual$6(props, context, {
      nullValue: nullValue.nullValue,
      form$: form$.form$,
      dataPath: path.dataPath,
      parent: path.parent
    });
    var value = multilingual$4(props, context, {
      defaultValue: default_.defaultValue,
      language: languages.language,
      dataPath: path.dataPath,
      form$: form$.form$,
      parent: path.parent
    });
    var conditions = base$W(props, context, {
      form$: form$.form$,
      path: path.path
    });
    var validation = multilingual$5(props, context, {
      form$: form$.form$,
      path: path.path,
      language: languages.language,
      languages: languages.languages,
      value: value.value
    });
    var data = teditor(props, context, {
      form$: form$.form$,
      available: conditions.available,
      value: value.value,
      model: value.model,
      resetValidators: validation.resetValidators,
      defaultValue: default_.defaultValue,
      nullValue: nullValue.nullValue,
      language: languages.language,
      input: input.input
    });
    var empty = multilingual$1(props, context, {
      value: value.value,
      nullValue: nullValue.nullValue,
      language: languages.language
    });
    var label = base$R(props, context, {
      form$: form$.form$,
      el$: baseElement.el$
    });
    var genericName = base$A(props, context, {
      label: label.label,
      form$: form$.form$
    });
    var templates = base$O(props, context, {
      theme: theme.theme,
      form$: form$.form$
    });
    var editor = base$3(props, context, {
      form$: form$.form$,
      input: input.input
    });
    var classes = editor$1(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      isDisabled: disabled.isDisabled,
      focused: editor.focused,
      templates: templates.templates
    });
    var columns = base$Q(props, context, {
      form$: form$.form$,
      theme: theme.theme,
      hasLabel: label.hasLabel
    });
    var view = base$P(props, context, {
      available: conditions.available,
      active: baseElement.active
    });
    var slots = base$N(props, context, {
      form$: form$.form$,
      el$: baseElement.el$,
      templates: templates.templates
    }, {
      slots: ['label', 'info', 'description', 'before', 'between', 'after']
    });
    var handleInput = base$5(props, context, {
      model: value.model
    });
    var handleAlert = base$2(props, context, {
      fire: events.fire,
      listeners: events.listeners
    });
    var handleError = base$k(props, context, {
      fire: events.fire,
      listeners: events.listeners
    });
    multilingual$3(props, context, {
      form$: form$.form$,
      value: value.value,
      fire: events.fire,
      dirt: validation.dirt,
      validateLanguage: validation.validateLanguage,
      language: languages.language
    });
    onMounted(function () {
      validation.initState();
      validation.initMessageBag();
      validation.initValidation();
    });
    return _objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({}, form$), fieldId), theme), layout), input), path), conditions), value), validation), label), classes), columns), baseElement), genericName), view), templates), slots), disabled), events), data), empty), default_), nullValue), handleInput), handleError), handleAlert), editor), languages);
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
      type: [Object],
      required: true
    },
    index: {
      type: [Number],
      required: true
    }
  },
  setup: function setup(props, context) {
    var _toRefs = toRefs(props),
        value = _toRefs.value;

    var _useElementComponent = base$S(props, context, {}, {
      addClasses: [['input', 'input_enabled', computed(function () {
        return !isDisabled.value;
      })], ['input', 'input_disabled', computed(function () {
        return isDisabled.value;
      })]]
    }),
        el$ = _useElementComponent.el$,
        form$ = _useElementComponent.form$,
        classes = _useElementComponent.classes,
        mainClass = _useElementComponent.mainClass,
        defaultClasses = _useElementComponent.defaultClasses,
        templates = _useElementComponent.templates,
        theme = _useElementComponent.theme; // ============== COMPUTED ==============

    /**
     * Whether the checkbox should be disabled.
     * 
     * @type {boolean}
     */


    var isDisabled = computed(function () {
      return el$.value.disabledItems.map(function (i) {
        return String(i);
      }).indexOf(String(value.value)) !== -1 || el$.value.isDisabled;
    });
    return {
      el$: el$,
      form$: form$,
      classes: classes,
      mainClass: mainClass,
      defaultClasses: defaultClasses,
      templates: templates,
      theme: theme,
      isDisabled: isDisabled
    };
  }
};

var base = function base(props, context, dependencies) {
  var el$ = dependencies.el$; // ============== COMPUTED ==============

  /**
   * Whether the preview component should be visible.
   * 
   * @type {boolean}
   */

  var visible = computed(function () {
    return el$.value.stage > 0;
  });
  /**
   * Whether the file has link and should be clickable.
   * 
   * @type {boolean}
   */

  var hasLink = computed(function () {
    return el$.value.link && el$.value.clickable;
  });
  /**
   * Whether the preview has upload error.
   * 
   * @type {boolean}
   */

  var hasError = computed(function () {
    return el$.value.hasUploadError;
  });
  /**
   * The link for the file.
   * 
   * @type {string}
   */

  var link = computed(function () {
    return el$.value.link;
  });
  /**
   * The filename to display.
   * 
   * @type {string}
   */

  var filename = computed(function () {
    return el$.value.filename;
  });
  /**
   * Whether the file should be clickable if it is already permantently uploaded.
   * 
   * @type {boolean}
   */

  var clickable = computed(function () {
    return el$.value.clickable;
  });
  /**
   * Whether the temporary or permanent file is uploaded.
   * 
   * @type {boolean}
   */

  var uploaded = computed(function () {
    return el$.value.stage > 1;
  });
  /**
   * Whether the file is currently uploading.
   * 
   * @type {boolean}
   */

  var uploading = computed(function () {
    return el$.value.uploading;
  });
  /**
   * The percentage of progress when the file is being temporarily uploaded (0-100).
   * 
   * @type {number}
   */

  var progress = computed(function () {
    return el$.value.progress;
  });
  /**
   * Whether the file can be removed. 
   * 
   * @type {boolean}
   */

  var canRemove = computed(function () {
    return (el$.value.canRemove || el$.value.uploading) && !el$.value.isDisabled;
  });
  /**
   * Whether temporary file can be uploaded.
   * 
   * @type {boolean}
   */

  var canUploadTemp = computed(function () {
    return el$.value.canUploadTemp;
  });
  /**
   * The text for upload button. Can be also changed in the locale file: `vueform.elements.file.upload`
   * 
   * @type {string}
   */

  var uploadText = computed(function () {
    return el$.value.__('vueform.elements.file.upload');
  }); // =============== METHODS ==============

  /**
   * Upload the currently selected file as temporary.
   * 
   * @returns {void}
   */

  var upload = function upload() {
    el$.value.uploadTemp();
  };
  /**
   * Remove the file.
   * 
   * @returns {void}
   */


  var remove = function remove() {
    if (uploading.value) {
      el$.value.handleAbort();
    } else {
      el$.value.handleRemove();
    }
  };

  return {
    visible: visible,
    hasLink: hasLink,
    hasError: hasError,
    link: link,
    filename: filename,
    clickable: clickable,
    uploaded: uploaded,
    uploading: uploading,
    progress: progress,
    canRemove: canRemove,
    canUploadTemp: canUploadTemp,
    uploadText: uploadText,
    upload: upload,
    remove: remove
  };
};

var FilePreview = {
  name: 'FilePreview',
  setup: function setup(props, context) {
    var _useElementComponent = base$S(props, context),
        el$ = _useElementComponent.el$,
        form$ = _useElementComponent.form$,
        classes = _useElementComponent.classes,
        mainClass = _useElementComponent.mainClass,
        defaultClasses = _useElementComponent.defaultClasses,
        templates = _useElementComponent.templates,
        theme = _useElementComponent.theme;

    var _usePreview = base(props, context, {
      el$: el$
    }),
        visible = _usePreview.visible,
        hasLink = _usePreview.hasLink,
        hasError = _usePreview.hasError,
        link = _usePreview.link,
        filename = _usePreview.filename,
        clickable = _usePreview.clickable,
        uploaded = _usePreview.uploaded,
        uploading = _usePreview.uploading,
        progress = _usePreview.progress,
        canRemove = _usePreview.canRemove,
        canUploadTemp = _usePreview.canUploadTemp,
        uploadText = _usePreview.uploadText,
        upload = _usePreview.upload,
        remove = _usePreview.remove;

    return {
      el$: el$,
      form$: form$,
      classes: classes,
      mainClass: mainClass,
      defaultClasses: defaultClasses,
      templates: templates,
      theme: theme,
      visible: visible,
      hasLink: hasLink,
      hasError: hasError,
      link: link,
      filename: filename,
      clickable: clickable,
      uploaded: uploaded,
      uploading: uploading,
      progress: progress,
      canRemove: canRemove,
      canUploadTemp: canUploadTemp,
      uploadText: uploadText,
      upload: upload,
      remove: remove
    };
  }
};

var ImagePreview = {
  name: 'ImagePreview',
  setup: function setup(props, context) {
    var _ref;

    var _useElementComponent = base$S(props, context, {}, {
      addClasses: [['image', 'image_link', computed(function () {
        return hasLink.value;
      })], ['image', 'image_static', computed(function () {
        return !hasLink.value;
      })]]
    }),
        el$ = _useElementComponent.el$,
        form$ = _useElementComponent.form$,
        classes = _useElementComponent.classes,
        mainClass = _useElementComponent.mainClass,
        defaultClasses = _useElementComponent.defaultClasses,
        templates = _useElementComponent.templates,
        theme = _useElementComponent.theme;

    var _usePreview = base(props, context, {
      el$: el$
    }),
        visible = _usePreview.visible,
        hasLink = _usePreview.hasLink,
        hasError = _usePreview.hasError,
        link = _usePreview.link,
        filename = _usePreview.filename,
        clickable = _usePreview.clickable,
        uploaded = _usePreview.uploaded,
        uploading = _usePreview.uploading,
        progress = _usePreview.progress,
        canRemove = _usePreview.canRemove,
        canUploadTemp = _usePreview.canUploadTemp,
        uploadText = _usePreview.uploadText,
        upload = _usePreview.upload,
        remove = _usePreview.remove; // ============== COMPUTED ==============

    /**
     * The image's preview. Equals to the `link` if the file is already uploaded and `base64` if only selected or temporarily uploaded.
     * 
     * @type {string}
     */


    var preview = computed(function () {
      return el$.value.preview;
    });
    return _ref = {
      el$: el$,
      form$: form$,
      classes: classes,
      mainClass: mainClass,
      defaultClasses: defaultClasses,
      templates: templates,
      theme: theme,
      visible: visible,
      hasLink: hasLink,
      hasError: hasError,
      link: link,
      filename: filename,
      clickable: clickable,
      preview: preview,
      uploaded: uploaded,
      uploading: uploading,
      progress: progress,
      canRemove: canRemove,
      canUploadTemp: canUploadTemp,
      uploadText: uploadText
    }, _defineProperty$1(_ref, "preview", preview), _defineProperty$1(_ref, "upload", upload), _defineProperty$1(_ref, "remove", remove), _ref;
  }
};

var GalleryPreview = {
  name: 'GalleryPreview',
  setup: function setup(props, context) {
    var _ref;

    var _useElementComponent = base$S(props, context),
        el$ = _useElementComponent.el$,
        form$ = _useElementComponent.form$,
        classes = _useElementComponent.classes,
        mainClass = _useElementComponent.mainClass,
        defaultClasses = _useElementComponent.defaultClasses,
        templates = _useElementComponent.templates,
        theme = _useElementComponent.theme;

    var _usePreview = base(props, context, {
      el$: el$
    }),
        visible = _usePreview.visible,
        hasLink = _usePreview.hasLink,
        hasError = _usePreview.hasError,
        link = _usePreview.link,
        filename = _usePreview.filename,
        clickable = _usePreview.clickable,
        uploaded = _usePreview.uploaded,
        uploading = _usePreview.uploading,
        progress = _usePreview.progress,
        canRemove = _usePreview.canRemove,
        canUploadTemp = _usePreview.canUploadTemp,
        uploadText = _usePreview.uploadText,
        upload = _usePreview.upload,
        remove = _usePreview.remove; // ============== COMPUTED ==============

    /**
     * The image's preview. Equals to the `link` if the file is already uploaded and `base64` if only selected or temporarily uploaded.
     * 
     * @type {string}
     */


    var preview = computed(function () {
      return el$.value.preview;
    });
    return _ref = {
      el$: el$,
      form$: form$,
      classes: classes,
      mainClass: mainClass,
      defaultClasses: defaultClasses,
      templates: templates,
      theme: theme,
      visible: visible,
      hasLink: hasLink,
      hasError: hasError,
      link: link,
      filename: filename,
      clickable: clickable,
      preview: preview,
      uploaded: uploaded,
      uploading: uploading,
      progress: progress,
      canRemove: canRemove,
      canUploadTemp: canUploadTemp,
      uploadText: uploadText
    }, _defineProperty$1(_ref, "preview", preview), _defineProperty$1(_ref, "upload", upload), _defineProperty$1(_ref, "remove", remove), _ref;
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
      type: [Object],
      required: true
    },
    index: {
      type: [Number],
      required: true
    }
  },
  setup: function setup(props, context) {
    var _toRefs = toRefs(props),
        value = _toRefs.value;

    var _useElementComponent = base$S(props, context, {}, {
      addClasses: [['input', 'input_enabled', computed(function () {
        return !isDisabled.value;
      })], ['input', 'input_disabled', computed(function () {
        return isDisabled.value;
      })]]
    }),
        el$ = _useElementComponent.el$,
        form$ = _useElementComponent.form$,
        classes = _useElementComponent.classes,
        mainClass = _useElementComponent.mainClass,
        defaultClasses = _useElementComponent.defaultClasses,
        templates = _useElementComponent.templates,
        theme = _useElementComponent.theme; // ============== COMPUTED ==============

    /**
     * Whether the radio should be disabled.
     * 
     * @type {boolean}
     */


    var isDisabled = computed(function () {
      return el$.value.disabledItems.map(function (i) {
        return String(i);
      }).indexOf(String(value.value)) !== -1 || el$.value.isDisabled;
    });
    return {
      el$: el$,
      form$: form$,
      classes: classes,
      mainClass: mainClass,
      defaultClasses: defaultClasses,
      templates: templates,
      theme: theme,
      isDisabled: isDisabled
    };
  }
};

var index = {
  Vueform: Vueform,
  FormErrors: FormErrors,
  FormMessages: FormMessages,
  FormLanguages: FormLanguages,
  FormLanguage: FormLanguage,
  FormTabs: FormTabs,
  FormTab: FormTab,
  FormSteps: FormSteps,
  FormStepsControls: FormStepsControls,
  FormStepsControl: FormStepsControl,
  FormStep: FormStep,
  FormElements: FormElements,
  ElementLayout: ElementLayout,
  ElementLayoutInline: ElementLayoutInline,
  ElementLoader: ElementLoader,
  ElementLabelFloating: ElementLabelFloating,
  ElementLabel: ElementLabel,
  ElementInfo: ElementInfo,
  ElementDescription: ElementDescription,
  ElementError: ElementError,
  ElementMessage: ElementMessage,
  ElementText: ElementText,
  DragAndDrop: DragAndDrop,
  ElementAddon: ElementAddon,
  DatepickerWrapper: DatepickerWrapper,
  EditorWrapper: EditorWrapper,
  ButtonElement: ButtonElement,
  CheckboxElement: CheckboxElement,
  CheckboxgroupElement: CheckboxgroupElement,
  DateElement: DateElement,
  DatesElement: DatesElement,
  FileElement: FileElement,
  GroupElement: GroupElement,
  HiddenElement: HiddenElement,
  ListElement: ListElement,
  LocationElement: LocationElement,
  MultifileElement: MultifileElement,
  MultiselectElement: MultiselectElement,
  ObjectElement: ObjectElement,
  RadioElement: RadioElement,
  RadiogroupElement: RadiogroupElement,
  SelectElement: SelectElement,
  SliderElement: SliderElement,
  StaticElement: StaticElement,
  TagsElement: TagsElement,
  TextareaElement: TextareaElement,
  TextElement: TextElement,
  ToggleElement: ToggleElement,
  EditorElement: EditorElement,
  TTextareaElement: TTextareaElement,
  TTextElement: TTextElement,
  TEditorElement: TEditorElement,
  CheckboxgroupCheckbox: CheckboxgroupCheckbox,
  FilePreview: FilePreview,
  ImagePreview: ImagePreview,
  GalleryPreview: GalleryPreview,
  RadiogroupRadio: RadiogroupRadio
};

export { index as default };
