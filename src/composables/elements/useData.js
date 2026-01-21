import each from "lodash/each";
import cloneDeep from "lodash/cloneDeep";
import get from "lodash/get";
import sortBy from "lodash/sortBy";
import map from "lodash/map";
import isPlainObject from "lodash/isPlainObject";
import clone from "lodash/clone";
import { computed, nextTick, toRefs, watch, ref } from "vue";
import checkDateFormat from "./../../utils/checkDateFormat";
import asyncForEach from "./../../utils/asyncForEach";

const base = function (props, context, dependencies, options = {}) {
  const { submit, formatData, formatLoad, name } = toRefs(props);

  // ============ DEPENDENCIES =============

  const form$ = dependencies.form$;
  const available = dependencies.available;
  const value = dependencies.value;
  const resetValidators = dependencies.resetValidators;
  const defaultValue = dependencies.defaultValue;
  const nullValue = dependencies.nullValue;
  const resetting = dependencies.resetting;
  const isDefault = dependencies.isDefault;
  const fire = dependencies.fire;
  const el$ = dependencies.el$;

  // =============== PRIVATE ===============

  /**
   * Sets the value of the element.
   *
   *
   * @param {any} val the value to be set
   * @returns {void}
   * @private
   */
  const setValue = (val) => {
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
  const data = computed(() => {
    return { [name.value]: value.value };
  });

  /**
   * Same as `data` property except that it only includes the element's value if [`available`](#property-available) is `true` (has no [`conditions`](#option-conditions) or they are fulfilled).
   *
   * @type {object}
   */
  const availableData = computed(() => {
    if (!available.value) {
      return {};
    }

    return { [name.value]: value.value };
  });

  /**
   * Same as `data` property except that it only includes the element's value if [`submit`](#option-submit) is not disabled and [`available`](#property-available) is `true` (has no [`conditions`](#option-conditions) or they are fulfilled).
   *
   * @type {object}
   */
  const requestData = computed(() => {
    if (!available.value || !submit.value) {
      return {};
    }

    return formatData.value
      ? formatData.value(name.value, value.value, form$.value)
      : { [name.value]: value.value };
  });

  // =============== METHODS ===============

  /**
   * Loads value to the element using optional [`formatLoad`](#option-format-load) formatter. This is the method that gets called for each element when loading data to the form with `format: true`.
   *
   * @param {any} value* the value to be loaded
   * @param {boolean} format whether the loaded value should be formatted with [`formatLoad`](#option-format-load) before setting the value of the element (default: `false`)
   * @returns {void}
   */
  const load = (val, format = false) => {
    setValue(
      format && formatLoad.value ? formatLoad.value(val, form$.value) : val
    );
  };

  /**
   * Updates the value of the element similarly to [`load`](#method-load), only that it can\'t format data.
   *
   * @param {any} value* the value to be set
   * @returns {void}
   */
  const update = (val) => {
    setValue(val);
  };

  /**
   * Clears the element's value.
   *
   * @returns {void}
   */
  const clear = () => {
    setValue(cloneDeep(nullValue.value));

    fire("clear", el$.value);
  };

  /**
   * Resets the element's value to [`default`](#option-default) (or empty if `default` is not provided). Also resets all the validation state for the element.
   *
   * @returns {void}
   */
  const reset = () => {
    if (!isDefault.value) {
      resetting.value = true;
    }

    setValue(cloneDeep(defaultValue.value));
    resetValidators();

    fire("reset", el$.value);
  };

  /**
   * Prepares the element.
   *
   * @returns {Promise}
   * @private
   */
  /* istanbul ignore next:@todo:adam missing implementation, but used in code */
  const prepare = async () => {};

  return {
    data,
    availableData,
    requestData,
    load,
    update,
    clear,
    reset,
    prepare,
  };
};

const text = function (props, context, dependencies, options = {}) {
  const { submit, formatData, name } = toRefs(props);

  const { load, update, clear, reset, prepare } = base(
    props,
    context,
    dependencies
  );

  // ============ DEPENDENCIES =============

  const { form$, available, value, shouldForceNumbers, stringToNumber } =
    dependencies;

  // =============== COMPUTED ==============

  const data = computed(() => {
    let v = value.value;

    if (shouldForceNumbers()) {
      v = stringToNumber(value.value);
    }

    return { [name.value]: v };
  });

  const availableData = computed(() => {
    if (!available.value) {
      return {};
    }

    let v = value.value;

    if (shouldForceNumbers()) {
      v = stringToNumber(value.value);
    }

    return { [name.value]: v };
  });

  const requestData = computed(() => {
    if (!available.value || !submit.value) {
      return {};
    }

    let v = value.value;

    if (shouldForceNumbers()) {
      v = stringToNumber(value.value);
    }

    return formatData.value
      ? formatData.value(name.value, v, form$.value)
      : { [name.value]: v };
  });

  return {
    data,
    availableData,
    requestData,
    load,
    update,
    clear,
    reset,
    prepare,
  };
};

const textarea = function (props, context, dependencies, options = {}) {
  const {
    data,
    availableData,
    requestData,
    load: baseLoad,
    update: baseUpdate,
    clear: baseClear,
    reset: baseReset,
    prepare,
  } = base(props, context, dependencies);

  // ============ DEPENDENCIES =============

  const { autosize, fire, el$ } = dependencies;

  // =============== METHODS ===============

  const load = (val, format = false) => {
    baseLoad(val, format);

    nextTick(() => {
      autosize();
    });
  };

  const update = (val) => {
    baseUpdate(val);

    nextTick(() => {
      autosize();
    });
  };

  const clear = () => {
    baseClear();

    nextTick(() => {
      autosize();
    });

    fire("clear", el$.value);
  };

  const reset = () => {
    baseReset();

    nextTick(() => {
      autosize();
    });

    fire("reset", el$.value);
  };

  return {
    data,
    availableData,
    requestData,
    load,
    update,
    clear,
    reset,
    prepare,
  };
};

const select = function (props, context, dependencies, options = {}) {
  const { resolveOnLoad, items } = toRefs(props);

  const { data, availableData, requestData, load, update, clear, prepare } = base(
    props,
    context,
    dependencies
  );

  // ============ DEPENDENCIES =============

  const value = dependencies.value;
  const resetValidators = dependencies.resetValidators;
  const defaultValue = dependencies.defaultValue;
  const updateItems = dependencies.updateItems;
  const resetting = dependencies.resetting;
  const isDefault = dependencies.isDefault;
  const fire = dependencies.fire;
  const el$ = dependencies.el$;

  // =============== PRIVATE ===============

  const setValue = (val) => {
    if (options.setValue) {
      return options.setValue(val);
    }

    value.value = val;
  };

  // =============== METHODS ===============

  const reset = () => {
    if (!isDefault.value) {
      resetting.value = true;
    }

    setValue(cloneDeep(defaultValue.value));
    resetValidators();

    if (typeof items.value === "string" && resolveOnLoad.value !== false) {
      updateItems();
    }

    fire("reset", el$.value);
  };

  return {
    data,
    availableData,
    requestData,
    load,
    update,
    clear,
    reset,
    prepare,
  };
};

const captcha = function (props, context, dependencies, options = {}) {
  const {
    data,
    availableData,
    requestData,
    load,
    update,
    clear: clearBase,
    reset: resetBase,
    prepare,
  } = base(props, context, dependencies);

  // ============ DEPENDENCIES =============

  const { Provider, fire, el$ } = dependencies;

  // =============== METHODS ===============

  const clear = () => {
    clearBase();

    if (!Provider.value) {
      return;
    }

    Provider.value.reset();

    fire("clear", el$.value);
  };

  const reset = () => {
    resetBase();

    if (!Provider.value) {
      return;
    }

    Provider.value.reset();

    fire("reset", el$.value);
  };

  return {
    data,
    availableData,
    requestData,
    load,
    update,
    clear,
    reset,
    prepare,
  };
};

const object = function (props, context, dependencies) {
  const { name, formatLoad, formatData, submit } = toRefs(props);

  // ============ DEPENDENCIES =============

  const form$ = dependencies.form$;
  const available = dependencies.available;
  const children$ = dependencies.children$;
  const children$Array = dependencies.children$Array;
  const resetting = dependencies.resetting;
  const isDefault = dependencies.isDefault;
  const fire = dependencies.fire;
  const el$ = dependencies.el$;

  // ============== COMPUTED ===============

  const data = computed(() => {
    let data = {};

    each(children$.value, (element$) => {
      if (element$.isStatic) {
        return;
      }

      data = Object.assign({}, data, element$.data);
    });

    return { [name.value]: data };
  });

  const availableData = computed(() => {
    if (!available.value) {
      return {};
    }

    let availableData = {};

    each(children$.value, (element$) => {
      if (element$.isStatic) {
        return;
      }

      availableData = Object.assign({}, availableData, 'availableData' in element$ ? element$.availableData : element$.requestData);
    });

    return { [name.value]: availableData };
  });

  const requestData = computed(() => {
    if (!available.value || !submit.value) {
      return {};
    }

    let requestData = {};

    each(children$.value, (element$) => {
      if (element$.isStatic) {
        return;
      }

      requestData = Object.assign({}, requestData, element$.requestData);
    });

    return formatData.value
      ? formatData.value(name.value, requestData, form$.value)
      : { [name.value]: requestData };
  });

  // =============== METHODS ===============

  const load = (val, format = false) => {
    let formatted =
      format && formatLoad.value ? formatLoad.value(val, form$.value) : val;

    each(children$.value, (element$) => {
      if (element$.isStatic) {
        return;
      }

      if (!element$.flat && formatted[element$.name] === undefined) {
        element$.clear();
        return;
      }

      element$.load(
        element$.flat ? formatted : formatted[element$.name],
        format
      );
    });
  };

  const update = (val) => {
    each(children$.value, (element$) => {
      if (element$.isStatic) {
        return;
      }

      if (val[element$.name] === undefined && !element$.flat) {
        return;
      }

      element$.update(element$.flat ? val : val[element$.name]);
    });
  };

  const clear = () => {
    each(children$.value, (element$) => {
      if (element$.isStatic) {
        return;
      }

      element$.clear();
    });

    fire("clear", el$.value);
  };

  const reset = () => {
    if (!isDefault.value) {
      resetting.value = true;
    }

    each(children$.value, (element$) => {
      if (element$.isStatic) {
        return;
      }

      element$.reset();
    });

    fire("reset", el$.value);
  };

  const prepare = async () => {
    await asyncForEach(children$Array.value, async (e$) => {
      if (e$.prepare) {
        await e$.prepare();
      }
    });
  };

  return {
    data,
    availableData,
    requestData,
    load,
    update,
    clear,
    reset,
    prepare,
  };
};

const group = function (props, context, dependencies) {
  const { name, formatData, submit } = toRefs(props);

  const { load, update, clear, reset, prepare } = object(
    props,
    context,
    dependencies
  );

  // ============ DEPENDENCIES =============

  const form$ = dependencies.form$;
  const children$ = dependencies.children$;
  const available = dependencies.available;
  const value = dependencies.value;

  // ============== COMPUTED ===============

  /**
   * The value of child elements in object. This gets merged with the parent component's data.
   *
   * @type {object}
   */
  const data = computed(() => {
    let data = {};

    each(children$.value, (element$) => {
      if (element$.isStatic) {
        return;
      }

      data = Object.assign({}, data, element$.data);
    });

    return data;
  });

  const availableData = computed(() => {
    if (!available.value) {
      return {};
    }

    let availableData = {};

    each(children$.value, (element$) => {
      if (element$.isStatic) {
        return;
      }

      availableData = Object.assign({}, availableData, 'availableData' in element$ ? element$.availableData : element$.requestData);
    });

    return availableData;
  });

  const requestData = computed(() => {
    if (!available.value || !submit.value) {
      return {};
    }

    let requestData = {};

    each(children$.value, (element$) => {
      if (element$.isStatic) {
        return;
      }

      requestData = Object.assign({}, requestData, element$.requestData);
    });

    return formatData.value
      ? formatData.value(name.value, requestData, form$.value)
      : requestData;
  });

  return {
    data,
    availableData,
    requestData,
    load,
    update,
    clear,
    reset,
    prepare,
  };
};

const list = function (props, context, dependencies, options) {
  const {
    name,
    storeOrder,
    formatLoad,
    formatData,
    order,
    submit,
    initial,
    default: default_,
  } = toRefs(props);

  const { update, clear, data } = base(props, context, dependencies);

  // ============ DEPENDENCIES =============

  const el$ = dependencies.el$;
  const form$ = dependencies.form$;
  const children$ = dependencies.children$;
  const children$Array = dependencies.children$Array;
  const available = dependencies.available;
  const isDisabled = dependencies.isDisabled;
  const value = dependencies.value;
  const orderByName = dependencies.orderByName;
  const refreshOrderStore = dependencies.refreshOrderStore;
  const dataPath = dependencies.dataPath;
  const parent = dependencies.parent;
  const nullValue = dependencies.nullValue;
  const defaultValue = dependencies.defaultValue;
  const fire = dependencies.fire;
  const resetValidators = dependencies.resetValidators;
  const resetting = dependencies.resetting;
  const isDefault = dependencies.isDefault;

  // ================ DATA =================

  const initialValue = ref(get(form$.value.model, dataPath.value));

  // ============== COMPUTED ===============

  /**
   * Default value of the parent
   *
   * @type {any}
   * @private
   */
  const parentDefaultValue = computed(() => {
    return parent && parent.value
      ? parent.value.defaultValue[name.value]
      : form$.value.options.default[name.value];
  });

  const availableData = computed(() => {
    if (!available.value) {
      return {};
    }

    let availableData = [];

    each(children$.value, (element$) => {
      const data = 'availableData' in element$ ? element$.availableData : element$.requestData
      let val = data[element$.name];

      if (val !== undefined) {
        availableData.push(val);
      }
    });

    return { [name.value]: availableData };
  });

  const requestData = computed(() => {
    if (!available.value || !submit.value) {
      return {};
    }

    let requestData = [];

    each(children$.value, (element$) => {
      let val = element$.requestData[element$.name];

      if (val !== undefined) {
        requestData.push(val);
      }
    });

    return formatData.value
      ? formatData.value(name.value, requestData, form$.value)
      : { [name.value]: requestData };
  });

  /**
   * Number of children.
   *
   * @type {number}
   * @private
   */
  const length = computed(() => {
    return Object.keys(
      value.value || /* istanbul ignore next: failsafe only */ {}
    ).length;
  });

  // =============== METHODS ===============

  /**
   * Appends a new item.
   *
   * @param {any} value value of the appended element (optional)
   * @returns {number} the index of the appended item
   */
  const add = (val = undefined, focus = false) => {
    let newValue = storeOrder.value
      ? Object.assign({}, val || {}, {
          [storeOrder.value]: val ? val[storeOrder.value] : undefined,
        })
      : val;

    value.value = refreshOrderStore(value.value.concat([newValue]));

    // value.value = refreshOrderStore(value.value)

    let index = value.value.length - 1;

    fire("add", index, newValue, value.value, el$.value);

    if (focus) {
      nextTick(() => {
        children$Array.value[children$Array.value.length - 1].focus();
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
  const remove = (index) => {
    value.value = value.value.filter((v, i) => i !== index);

    refreshOrderStore(value.value);

    fire("remove", index, value.value, el$.value);
  };

  const load = async (val, format = false) => {
    let values = sortValue(
      format && formatLoad.value ? formatLoad.value(val, form$.value) : val
    );

    clear();

    await nextTick();

    for (let i = 0; i < values.length; i++) {
      add();
    }

    await nextTick();

    each(children$.value, (child$, i) => {
      child$.load(values[i], format);
    });
  };

  const reset = () => {
    if (!isDefault.value) {
      resetting.value = true;
    }

    value.value = cloneDeep(defaultValue.value);

    resetValidators();

    if (!value.value.length && initial.value > 0) {
      for (let i = 0; i < initial.value; i++) {
        add();
      }

      // NextTick is no longer required as validation
      // happens with async/await anyway in children
      // nextTick(() => {
      children$Array.value.forEach((child$) => {
        child$.reset();
      });
      // })
    }

    nextTick(() => {
      refreshOrderStore(value.value);
    });

    fire("reset", el$.value);
  };

  const prepare = async () => {
    await asyncForEach(children$Array.value, async (e$) => {
      if (e$.prepare) {
        await e$.prepare();
      }
    });
  };

  /**
   * Sorts value when `order` and `orderByName` is defined.
   *
   * @param {array} value value to be sorted
   * @returns {array}
   * @private
   */
  const sortValue = (val) => {
    if ((!order.value && !orderByName.value) || !val) {
      return val;
    }

    const desc =
      order.value &&
      typeof order.value === "string" &&
      order.value.toUpperCase() == "DESC";

    /* istanbul ignore else */
    if (orderByName.value) {
      val = desc
        ? sortBy(val, orderByName.value).reverse()
        : sortBy(val, orderByName.value);
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
  const handleAdd = () => {
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
  const handleRemove = (index) => {
    if (isDisabled.value) {
      return;
    }

    remove(index);
  };

  // ================ HOOKS ===============

  if (
    initialValue.value === undefined &&
    parentDefaultValue.value === undefined &&
    default_.value === undefined
  ) {
    if (initial.value > 0) {
      for (let i = 0; i < initial.value; i++) {
        add();
      }
    } else {
      value.value = nullValue.value;
    }
  } else if (initialValue.value === undefined) {
    value.value = defaultValue.value;
  }

  return {
    availableData,
    requestData,
    data,
    length,
    add,
    remove,
    load,
    update,
    clear,
    reset,
    handleAdd,
    handleRemove,
    prepare,
  };
};

const date = function (props, context, dependencies) {
  const { formatLoad } = toRefs(props);

  const { data, availableData, requestData, update, clear, reset, prepare } = base(
    props,
    context,
    dependencies
  );

  // ============ DEPENDENCIES =============

  const form$ = dependencies.form$;
  const value = dependencies.value;
  const loadDateFormat = dependencies.loadDateFormat;

  const moment = form$.value.$vueform.services.moment;

  // =============== METHODS ===============

  const load = (val, format = false) => {
    let formatted =
      format && formatLoad.value ? formatLoad.value(val, form$.value) : val;

    checkDateFormat(loadDateFormat.value, formatted, moment);

    value.value =
      formatted instanceof Date || !formatted
        ? formatted
        : moment(formatted, loadDateFormat.value).toDate();
  };

  return {
    data,
    availableData,
    requestData,
    load,
    update,
    clear,
    reset,
    prepare,
  };
};

const dates = function (props, context, dependencies) {
  const { formatLoad } = toRefs(props);

  const { data, availableData, requestData, update, clear, reset, prepare } = base(
    props,
    context,
    dependencies
  );

  // ============ DEPENDENCIES =============

  const form$ = dependencies.form$;
  const value = dependencies.value;
  const loadDateFormat = dependencies.loadDateFormat;

  const moment = form$.value.$vueform.services.moment;

  // =============== METHODS ===============

  const load = (val, format = false) => {
    let formatted =
      format && formatLoad.value ? formatLoad.value(val, form$.value) : val;

    value.value = map(formatted, (v) => {
      checkDateFormat(loadDateFormat.value, v, moment);

      return v instanceof Date ? v : moment(v, loadDateFormat.value).toDate();
    });
  };

  return {
    data,
    availableData,
    requestData,
    load,
    update,
    clear,
    reset,
    prepare,
  };
};

const multilingual = function (
  props,
  context,
  dependencies,
  /* istanbul ignore next */ options = {}
) {
  const { formatLoad } = toRefs(props);

  const { data, availableData, requestData, clear, reset, prepare } = base(
    props,
    context,
    dependencies,
    options
  );

  // ============ DEPENDENCIES =============

  const form$ = dependencies.form$;
  const value = dependencies.value;
  const language = dependencies.language;
  const nullValue = dependencies.nullValue;

  // =============== PRIVATE ===============

  const setValue = (val) => {
    if (options.setValue) {
      return options.setValue(val);
    }

    value.value = val;
  };

  // =============== METHODS ===============

  const load = (val, format = false) => {
    let formatted =
      format && formatLoad.value ? formatLoad.value(val, form$.value) : val;

    if (!isPlainObject(formatted)) {
      throw new Error("Multilingual element requires an object to load");
    }

    setValue(Object.assign({}, clone(nullValue.value), formatted));
  };

  const update = (val) => {
    let updateValue = val;

    if (!isPlainObject(updateValue)) {
      updateValue = {
        [language.value]: val,
      };
    }

    setValue(Object.assign({}, value.value, updateValue));
  };

  return {
    data,
    availableData,
    requestData,
    load,
    update,
    clear,
    reset,
    prepare,
  };
};

const editor = function (props, context, dependencies) {
  const { data, availableData, requestData, load, update, clear, reset, prepare } = base(
    props,
    context,
    dependencies,
    {
      setValue: (val) => {
        value.value = val;

        nextTick(() => {
          input.value?.update(val);
        });
      },
    }
  );

  // ============ DEPENDENCIES =============

  const input = dependencies.input;
  const value = dependencies.value;

  return {
    data,
    availableData,
    requestData,
    load,
    update,
    clear,
    reset,
    prepare,
  };
};

const teditor = function (props, context, dependencies) {
  const { data, availableData, requestData, load, update, clear, reset, prepare } =
    multilingual(props, context, dependencies, {
      setValue: (val) => {
        value.value = val;

        nextTick(() => {
          input.value.update(val[language.value]);
        });
      },
    });

  // ============ DEPENDENCIES =============

  const input = dependencies.input;
  const model = dependencies.model;
  const value = dependencies.value;
  const language = dependencies.language;

  // ============== WATCHERS ==============

  watch(language, () => {
    input.value.update(model.value);
  });

  return {
    data,
    availableData,
    requestData,
    load,
    update,
    clear,
    reset,
    prepare,
  };
};

const file = function (props, context, dependencies) {
  const { load, update, clear, reset, prepare } = base(
    props,
    context,
    dependencies
  );

  const { submit, formatData, name } = toRefs(props);

  // ============ DEPENDENCIES =============

  const form$ = dependencies.form$;
  const available = dependencies.available;
  const value = dependencies.value;

  // ============== COMPUTED ===============

  const data = computed(() => {
    let v = value.value;

    if (typeof v === "object" && v?.__file__) {
      v = v instanceof File ? v : { ...v };
      delete v.__file__;
    }

    return { [name.value]: v };
  });

  const availableData = computed(() => {
    if (!available.value) {
      return {};
    }

    let v = value.value;

    if (typeof v === "object" && v?.__file__) {
      v = v instanceof File ? v : { ...v };
      delete v.__file__;
    }

    return { [name.value]: v };
  });

  const requestData = computed(() => {
    if (!available.value || !submit.value) {
      return {};
    }

    let v = value.value;

    if (typeof v === "object" && v?.__file__) {
      v = v instanceof File ? v : { ...v };
      delete v.__file__;
    }

    return formatData.value
      ? formatData.value(name.value, v, form$.value)
      : { [name.value]: v };
  });

  return {
    data,
    availableData,
    requestData,
    load,
    update,
    clear,
    reset,
    prepare,
  };
};

const multifile = function (props, context, dependencies) {
  const {
    length,
    add,
    remove,
    load,
    update,
    clear,
    reset,
    handleAdd,
    handleRemove,
    prepare,
  } = list(props, context, dependencies);

  const { submit, formatData, name } = toRefs(props);

  // ============ DEPENDENCIES =============

  const form$ = dependencies.form$;
  const available = dependencies.available;
  const value = dependencies.value;
  const children$ = dependencies.children$;

  // ============== COMPUTED ===============

  const data = computed(() => {
    let val = value.value;

    val = val.map((file) => {
      if (typeof file === "object" && file?.__file__) {
        let v = file instanceof File ? file : { ...file };
        delete v.__file__;
        return v;
      }

      return file;
    });

    return { [name.value]: val };
  });

  const availableData = computed(() => {
    if (!available.value) {
      return {};
    }

    let availableData = [];

    each(children$.value, (element$) => {
      const data = 'availableData' in element$ ? element$.availableData : element$.requestData
      let val = data[element$.name];

      /* istanbul ignore next: failsafe only */
      if (val !== undefined) {
        if (typeof val === "object" && val?.__file__) {
          let v = file instanceof File ? file : { ...file };
          delete v.__file__;
          val = v;
        }

        availableData.push(val);
      }
    });

    return { [name.value]: availableData };
  });

  const requestData = computed(() => {
    if (!available.value || !submit.value) {
      return {};
    }

    let requestData = [];

    each(children$.value, (element$) => {
      let val = element$.requestData[element$.name];

      /* istanbul ignore next: failsafe only */
      if (val !== undefined) {
        if (typeof val === "object" && val?.__file__) {
          let v = file instanceof File ? file : { ...file };
          delete v.__file__;
          val = v;
        }

        requestData.push(val);
      }
    });

    return formatData.value
      ? formatData.value(name.value, requestData, form$.value)
      : { [name.value]: requestData };
  });

  return {
    availableData,
    requestData,
    data,
    length,
    add,
    remove,
    load,
    update,
    clear,
    reset,
    handleAdd,
    handleRemove,
    prepare,
  };
};

const signature = function (props, context, dependencies) {
  const {
    data,
    availableData,
    requestData,
    load,
    update,
    clear: clearBase,
    reset: resetBase,
  } = base(props, context, dependencies);

  // ============ DEPENDENCIES =============

  const {
    mode,
    clearSignature,
    typingToImage,
    drawingToImage,
    uploaded,
    setDefaultMode,
    setDefaultFont,
    setDefaultColor,
    available,
    fire,
    el$,
  } = dependencies;

  // ============== COMPUTED ===============

  const clear = () => {
    clearBase();
    clearSignature();

    fire("clear", el$.value);
  };

  const reset = () => {
    clearSignature();
    setDefaultMode(true);
    setDefaultFont(true);
    setDefaultColor();
    resetBase();

    fire("reset", el$.value);
  };

  const prepare = async () => {
    if (uploaded.value || !available.value) {
      return;
    }

    if (mode.value === "type") {
      await typingToImage();
    }

    if (mode.value === "draw") {
      await drawingToImage();
    }
  };

  return {
    data,
    availableData,
    requestData,
    load,
    update,
    clear,
    reset,
    prepare,
  };
};

const matrix = function (props, context, dependencies, options = {}) {
  const { name, rows, formatLoad } = toRefs(props);

  const {
    clear: baseClear,
    reset: baseReset,
    prepare,
  } = object(props, context, dependencies);

  // ============ DEPENDENCIES =============

  const {
    el$,
    form$,
    children$,
    resolvedRows,
    resolvedColumns,
    dataType,
    defaultValue,
    value,
    computedRows,
    rowsCount,
    hasDynamicRows,
    fire,
    grid,
    resolveComponentName,
  } = dependencies;

  // ============== COMPUTED ===============

  const data = computed(() => {
    return { [name.value]: transformData() };
  });

  const availableData = computed(() => {
    return { [name.value]: transformData(true) };
  });

  const requestData = computed(() => {
    return availableData.value
  });

  // =============== METHODS ===============

  const load = (val, format = false) => {
    let formatted =
      format && formatLoad.value ? formatLoad.value(val, form$.value) : val;

    setData(formatted, "load");
  };

  const update = (val) => {
    setData(val, "update");
  };

  const clear = () => {
    baseClear();

    if (hasDynamicRows.value) {
      rowsCount.value = rows.value;
    }

    fire("clear", el$.value);
  };

  const reset = () => {
    baseReset();

    if (hasDynamicRows.value) {
      rowsCount.value = rows.value;
    }

    if (grid.value) {
      grid.value.scrollTop = 0;
      grid.value.scrollLeft = 0;
    }

    fire("reset", el$.value);
  };

  const add = () => {
    const oldValue = { ...value.value };

    rowsCount.value++;

    nextTick(() => {
      fire("add", rowsCount.value - 1, value.value, oldValue, el$.value);
    });
  };

  const remove = (i) => {
    const oldValue = { ...value.value };
    const newValue = { ...value.value };

    delete newValue[i];

    value.value = Object.values(newValue).reduce(
      (prev, curr, i) => ({
        ...prev,
        [i]: curr,
      }),
      {}
    );

    rowsCount.value--;

    fire("remove", i, value.value, oldValue, el$.value);
  };

  const handleAdd = () => {
    add();
  };

  const handleRemove = (i) => {
    remove(i);
  };

  const transformData = (skipUnavailable = false) => {
    let data = {};

    resolvedRows.value.forEach((row, r) => {
      if (!row.available && skipUnavailable) {
        return;
      }

      let rowValue =
        dataType.value === "object"
          ? {}
          : dataType.value === "array"
          ? []
          : null;

      resolvedColumns.value.forEach((column, c) => {
        if (!column.available && skipUnavailable) {
          return;
        }

        let cellValue = children$.value[resolveComponentName(r, c)]?.value;

        switch (dataType.value) {
          case "array":
            if (cellValue) {
              rowValue = [...(rowValue || []), column.value];
            }
            break;

          case "assoc":
            if (cellValue) {
              rowValue = column.value;
            }
            break;

          default:
            rowValue = {
              ...(rowValue || {}),
              [column.value]: cellValue,
            };
        }
      });

      data[row.value] = rowValue;
    });

    if (hasDynamicRows.value) {
      data = Object.values(data);
    }

    return data;
  };

  const setData = async (val, action) => {
    if (hasDynamicRows.value) {
      rowsCount.value = Object.keys(val).length;
      await nextTick();
    }

    el$.value.resolvedRows.forEach((row, r) => {
      el$.value.resolvedColumns.forEach((column, c) => {
        const rowValue = val[row.value] || {};
        const cell$ = children$.value[resolveComponentName(r, c)];

        switch (dataType.value) {
          case "assoc":
            cell$[action](column.value === rowValue);
            break;

          case "array":
            cell$[action](rowValue.indexOf(column.value) !== -1);
            break;

          default:
            cell$[action](rowValue[column.value]);
            break;
        }
      });
    });
  };

  watch(
    computedRows,
    (n, o) => {
      const oldLength = typeof o === "number" ? o : Object.keys(o).length;
      const newLength = typeof n === "number" ? n : Object.keys(n).length;

      const dir = oldLength > newLength ? "decrease" : "increase";
      const diff =
        dir === "increase" ? newLength - oldLength : oldLength - newLength;

      const nextIndex = newLength - 1;
      const lastIndex = oldLength - 1;

      let newValue = { ...value.value };

      if (dir === "increase") {
        switch (dataType.value) {
          case "assoc":
          case "array":
            for (let i = 0; i < diff; i++) {
              newValue[nextIndex + i] = cloneDeep(
                defaultValue.value[nextIndex + i]
              );
            }
            break;
        }
      } else {
        for (let i = 0; i < diff; i++) {
          if (newValue[lastIndex - i] !== undefined) {
            delete newValue[lastIndex - i];
          }
        }
      }

      value.value = newValue;
    },
    { flush: "post" }
  );

  return {
    data,
    availableData,
    requestData,
    load,
    update,
    clear,
    reset,
    prepare,
    handleAdd,
    handleRemove,
    add,
    remove,
  };
};

const multiselect = select;
const tags = select;
const hidden = text;

export {
  text,
  textarea,
  date,
  dates,
  object,
  group,
  list,
  multilingual,
  editor,
  teditor,
  file,
  multifile,
  select,
  multiselect,
  tags,
  captcha,
  signature,
  matrix,
  hidden,
};

export default base;
