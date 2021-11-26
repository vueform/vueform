import _ from 'lodash';
import axios from 'axios';
import { watch, computed, ref } from '@vue/composition-api';
import moment from 'moment';

var flat = flatten;
flatten.flatten = flatten;
flatten.unflatten = unflatten;

function isBuffer (obj) {
  return obj &&
    obj.constructor &&
    (typeof obj.constructor.isBuffer === 'function') &&
    obj.constructor.isBuffer(obj)
}

function keyIdentity (key) {
  return key
}

function flatten (target, opts) {
  opts = opts || {};

  const delimiter = opts.delimiter || '.';
  const maxDepth = opts.maxDepth;
  const transformKey = opts.transformKey || keyIdentity;
  const output = {};

  function step (object, prev, currentDepth) {
    currentDepth = currentDepth || 1;
    Object.keys(object).forEach(function (key) {
      const value = object[key];
      const isarray = opts.safe && Array.isArray(value);
      const type = Object.prototype.toString.call(value);
      const isbuffer = isBuffer(value);
      const isobject = (
        type === '[object Object]' ||
        type === '[object Array]'
      );

      const newKey = prev
        ? prev + delimiter + transformKey(key)
        : transformKey(key);

      if (!isarray && !isbuffer && isobject && Object.keys(value).length &&
        (!opts.maxDepth || currentDepth < maxDepth)) {
        return step(value, newKey, currentDepth + 1)
      }

      output[newKey] = value;
    });
  }

  step(target);

  return output
}

function unflatten (target, opts) {
  opts = opts || {};

  const delimiter = opts.delimiter || '.';
  const overwrite = opts.overwrite || false;
  const transformKey = opts.transformKey || keyIdentity;
  const result = {};

  const isbuffer = isBuffer(target);
  if (isbuffer || Object.prototype.toString.call(target) !== '[object Object]') {
    return target
  }

  // safely ensure that the key is
  // an integer.
  function getkey (key) {
    const parsedKey = Number(key);

    return (
      isNaN(parsedKey) ||
      key.indexOf('.') !== -1 ||
      opts.object
    ) ? key
      : parsedKey
  }

  function addKeys (keyPrefix, recipient, target) {
    return Object.keys(target).reduce(function (result, key) {
      result[keyPrefix + delimiter + key] = target[key];

      return result
    }, recipient)
  }

  function isEmpty (val) {
    const type = Object.prototype.toString.call(val);
    const isArray = type === '[object Array]';
    const isObject = type === '[object Object]';

    if (!val) {
      return true
    } else if (isArray) {
      return !val.length
    } else if (isObject) {
      return !Object.keys(val).length
    }
  }

  target = Object.keys(target).reduce(function (result, key) {
    const type = Object.prototype.toString.call(target[key]);
    const isObject = (type === '[object Object]' || type === '[object Array]');
    if (!isObject || isEmpty(target[key])) {
      result[key] = target[key];
      return result
    } else {
      return addKeys(
        key,
        result,
        flatten(target[key], opts)
      )
    }
  }, {});

  Object.keys(target).forEach(function (key) {
    const split = key.split(delimiter).map(transformKey);
    let key1 = getkey(split.shift());
    let key2 = getkey(split[0]);
    let recipient = result;

    while (key2 !== undefined) {
      if (key1 === '__proto__') {
        return
      }

      const type = Object.prototype.toString.call(recipient[key1]);
      const isobject = (
        type === '[object Object]' ||
        type === '[object Array]'
      );

      // do not write over falsey, non-undefined values if overwrite is false
      if (!overwrite && !isobject && typeof recipient[key1] !== 'undefined') {
        return
      }

      if ((overwrite && !isobject) || (!overwrite && recipient[key1] == null)) {
        recipient[key1] = (
          typeof key2 === 'number' &&
          !opts.object ? [] : {}
        );
      }

      recipient = recipient[key1];
      if (split.length > 0) {
        key1 = getkey(split.shift());
        key2 = getkey(split[0]);
      }
    }

    // unflatten again for 'messy objects'
    recipient[key1] = unflatten(target[key], opts);
  });

  return result
}

function normalize (value) {
  if (value === undefined || typeof value != 'string') {
    return value
  }

  // is number
  if (value.match(/^-*\d+$/)) {
    return parseInt(value, 10)

    // is float
  } else if (value.match(/^\d+\.\d+$/)) {
    return parseFloat(value)

    // everything else
  } else {
    return value
  }
}

const parse = (string) => {
  let parseRule = () => {
    return string.split(':')[0]
  };

  let parseAttributes = () => {
   let parts = string.split(':');

    if (parts.length <= 1) {
      return null
    }

    let attributes = {};

    let rule = parts[0];

    parts.shift();
    let params = parts.join(':');

    if (['regex', 'not_regex'].indexOf(rule) !== -1) {
      attributes[0] = params;

      return attributes
    }

    _.each(params.split(','), (attribute, index) => {
      var attrParts = attribute.split('=');

      if (attrParts.length <= 1) {
        attributes[index] = normalize(attribute);
      }
      else {
        attributes[attrParts[0]] = normalize(attrParts[1]);
      }
    });

    return attributes
  };

  return {
    name: parseRule(),
    attributes: parseAttributes(),
  }
};

function replaceWildcards (fillable, fill) {
  if (!fill.match(/\.([0-9]+)(?![a-zA-Z]+)/g)) {
    return fillable
  }

  fill.match(/\.([0-9]+)(?![a-zA-Z]+)/g).forEach((match) => {
    fillable = fillable.replace('.*', match);
  });

  return fillable
}

function compare(first, second, operator) {
  switch (operator) {
    case '==': return first == second;
    case '!=': return first != second;
    case '>': return first > second;
    case '>=': return first >= second;
    case '<': return first < second;
    case '<=': return first <= second;
  }

  throw Error('Unknown operator: ' + operator)
}

const fileToObject = function (file) {
  return {
    lastModified: file.lastModified,
    name: file.name,
    size: file.size,
    type: file.type,
  }
};

const dataToComperable = function (data) {
  if (data instanceof File) {
    return fileToObject(data)
  }
  else if (data instanceof Date) {
    return data.toString()
  }
  else if (Array.isArray(data)) {
    return data.map(dataToComperable)
  }
  else if (typeof data === 'object' && data !== null) {
    return _.mapValues(data, dataToComperable)
  }

  return data
};

function dataEquals (a, b) {
  return _.isEqual(dataToComperable(a), dataToComperable(b))
}

const Validator = class {

  constructor(rule, props) {
    this.rule = rule;
    this.attributes = rule.attributes || {};
    this.condition = rule.condition || null;
    this.dependent = rule.dependent || null;

    this.element$ = props.element$;
    this.form$ = props.element$?.form$ || {};
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
    return this.rule.name
  }

  get failing() {
    return this.invalid
  }

  get defaultMessage() {
    return this.form$.__('vueform.defaultMessage')
  }

  get message() {
    let message = '';

    if (this.element$.messages[this.name]) {
      message = this.element$.messages[this.name];
    }
    else if (this.form$.options.messages[this.name]) {
      message = this.form$.options.messages[this.name];
    }
    else if (this.name !== '_class' && this.form$.__(`validation`)[this.name] !== undefined) {
      message = this.form$.__(`validation.${this.name}`);

      if (_.isPlainObject(message)) {
        message = message[this.messageType];
      }
    } else {
      message = this.defaultMessage;
    }

    // replace :params
    _.each(_.map(message.match(/:\w+/g),p=>p.replace(':','')), (param) => {
      message = message.replace(`:${param}`, this.messageParams[param]);
    });

    // replace {params}
    _.each(_.map(message.match(/{[^}]+/g),p=>p.replace('{','')), (param) => {
      message = message.replace(`{${param}}`, this.messageParams[param]);
    });

    return message
  }

  get messageType() {
    if (this.isNumeric) {
      return 'numeric'
    }
    else if (this.isFile) {
      return 'file'
    }
    else if (this.isArray) {
      return 'array'
    }

    return 'string'
  }

  get messageParams() {
    return {
      attribute: this.attributeName,
    }
  }

  get attributeName() {
    return this.element$.genericName
  }

  get type() {
    if (this.isNumeric) {
      return 'numeric'
    }
    else if (this.isFile) {
      return 'file'
    }
    else if (this.isArray) {
      return 'array'
    }
    
    return 'string'
  }

  get isNumeric() {
    return _.some(this.element$.Validators, { name: 'numeric' })
        || _.some(this.element$.Validators, { name: 'integer' })
  }

  get isNullable() {
    let nullable = false;

    _.each(this.element$.Validators, (Validator) => {
      if (Validator.name !== 'nullable') {
        return
      }

      if(Validator.condition === null) {
        nullable = true;
        return
      }
      
      nullable = Validator.condition(this.form$, this);
    });

    return nullable
  }

  get isFile() {
    return this.element$.isFileType
  }

  get isArray() {
    return this.element$.isArrayType
  }

  get isAsync() {
    return false
  }

  get debounce() {
    if (this.attributes.debounce) {
      return this.attributes.debounce
    }

    if (this.element$.debounce) {
      return this.element$.debounce
    }

    return false
  }

  get debouncing() {
    return this.debouncer !== null
  }

  init() {}

  async validate(value = this.element$.value) {
    if (!this.form$.validation) {
      return
    }

    if (this.isNullable && !this.filled(value)) {
      this.invalid = false;
      return
    }

    if (this.condition !== null) {
      if (!this.condition(this.form$, this)) {
        this.invalid = false;
        return
      }
    }

    if (this.debounce && this.filled(value)) {
      await this._validateWithDebounce(value);
    } else {
      if (this.debounce && this.debouncer) {
        clearTimeout(this.debouncer);
      }
      
      await this._validate(value);
    }
  }

  reset() {
    this.invalid = false;
  }

  watch(variables) {
    if (!Array.isArray(variables)) {
      variables = [variables]; 
    }

    variables.forEach((variable) => {
      this.addWatcher(variable);
    });
  }

  addWatcher(variable) {
    if (this.watchers[variable]) {
      return
    }

    this.watchers[variable] = watch(computed(() => _.get(this.form$.data, variable)), () => {
      this.revalidate();
    });
  }

  revalidate() {
    this.element$.Validators.forEach((Validator) => {
      if (Validator.rule.name === this.rule.name) {
        Validator.validate();
      }
    });
  }

  watchOther() {
    this.form$.$nextTick(() => {
      if (!this.other$) {
        throw new Error(this.otherPath + ' element does not exist')
      }

      this.form$.$watch(() => { return this.other$.value }, () => {
        if (this.element$.validated) {
          this.element$.validate();
        }
      });
    });
  }

  size(value) {
    if (this.isNumeric) {
      return value
    }
    else if (this.isFile) {
      return value ? value.size / 1000 : 0
    }
    else if (this.isArray) {
      return value.length
    } else if (value === null) {
      return 0
    } else if (value === undefined) {
      return 0
    } else if (value === '') {
      return 0
    }

    return String(value).length
  }

  filled(value) {
    if (value === undefined || (value === null && value !== this.element$.trueValue) || value === this.element$.falseValue) {
      return false;
    }
    else if (this.isNumeric && value === 0) {
      return false;
    }
    else if (_.isString(value) && _.trim(value) === '') {
      return false;
    }
    else if (_.isArray(value) && value.length < 1) {
      return false;
    }
    else if (value instanceof File && value.name === '') {
      return false;
    }

    return true
  }

  async _validate(value) {
    if (this.isAsync) {
      await this._validateAsync(value);
    } else {
      this._validateSync(value);
    }
  }

  async _validateAsync(value) {
    this.lastValue = value;

    this.pending = true;

    let valid = await this.check(value);

    if (dataEquals(this.lastValue, value)) {
      this.invalid = !valid;
      this.pending = false;
    }
  }

  _validateSync(value) {
    this.invalid = !this.check(value);
  }

  async _validateWithDebounce(value) {
    return new Promise((resolve, reject) => {
      if (this.debouncer) {
        resolve();
        clearTimeout(this.debouncer);
      }

      this.debouncer = setTimeout(async () => {
        await this._validate(value);
        this.debouncer = null;
        resolve();
      }, this.debounce);
    })
  }
};

const Factory = class {

  constructor(path, form$) {
    this.form$ = form$;
    this.element$ = form$.el$(path);
  }

  get rules() {
    return Object.assign({}, this.form$.$vueform.services.validation.rules, this.form$.$vueform.rules)
  }
 
  makeAll(rules) {
    let parsedRules = this.parseRules(rules);

    if (parsedRules.length == 0) {
      return []
    }

    return _.map(parsedRules, (rule) => {
      return this.make(rule)
    })
  }
  
  make(rule) {
    let ruleClass = typeof rule == 'function' ? rule : this.rules[rule.name];

    if (!ruleClass) {
      throw new Error(`Unknown rule: '${rule.name}'`)
    }

    return new ruleClass(rule, {
      element$: this.element$
    })
  }

  parseRules(rules) {
    if (!_.isArray(rules)) {
      rules = rules.split('|');
    }
    
    return _.flatMap(rules, (rule) => {
      if (typeof rule == 'function') {
        return rule
      }

      return this.isConditional(rule) ? this.parseConditional(rule) : this.parse(rule)
    })
  }

  parse(rule) {
    return parse(rule)
  }

  isConditional(rule) {
    return _.isPlainObject(rule)
  }

  parseConditional(rule) {
    let condition = _.values(rule)[0];
    let parsed = parse(_.keys(rule)[0]);

    // simplified condition
    if (_.isArray(condition)) {
      parsed = Object.assign({}, parsed, {
        dependent: replaceWildcards(condition[0], this.element$.path),
        condition: this.createConditionFromArray(condition),
      });

    // custom condition callback
    } else {
      parsed = Object.assign({}, parsed, {
        dependent: null,
        condition: condition,
      });
    }

    return parsed
  } 

  createConditionFromArray(condition) {
    let field = replaceWildcards(condition[0], this.element$.path);
    let operator = condition.length == 3 ? condition[1] : '==';
    let value = condition.length == 3 ? condition[2] : condition[1];

    return () => {
      var actual = _.get(this.form$.requestData, field);
      var expected = value;

      if (_.isArray(expected)) {
        if (operator === '!=') {
          if (expected.indexOf(actual) !== -1) {
            return false
          }
        } else if (expected.indexOf(actual) === -1) {
          return false
        }
      } else {
        return compare(actual, expected, operator)
      }

      return true
    }
  }
};

class accepted extends Validator {
  check(value) {
    return ['yes', 'on', '1', 1, true, 'true'].indexOf(value) !== -1
  }
}

class active_url extends Validator {
  get isAsync() {
    return true
  }

  async check(value) {
    const endpoint = this.form$.$vueform.config.endpoints.activeUrl;
    const method = endpoint.method;

    const res = await this.form$.$vueform.services.axios.request({
      url: endpoint.url,
      method,
      [method.toLowerCase() === 'get' ? 'params' : 'data']: {
        url: value
      },
    });
    
    return res.data
  }
}

class after extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      date: this.date.format(this.format),
    }
  }

  get param() {
    return this.attributes[0]
  }

  get format() {
    return ['date', 'dates'].indexOf(this.element$.type) !== -1 && this.element$.valueFormat
      ? this.element$.valueFormat
      : 'YYYY-MM-DD'
  }

  get otherFormat() {
    if (this.dateType != 'element') {
      return this.format
    }

    return ['date', 'dates'].indexOf(this.other$.type) !== -1 && this.other$.valueFormat
      ? this.other$.valueFormat
      : this.format
  }

  get otherPath() {
    if (this.dateType != 'element') {
      return null
    }

    return this.param
  } 

  get other$() {
    if (this.dateType != 'element') {
      return {}
    }

    return this.form$.el$(this.param)
  } 

  get date() {
    let date = '';

     switch (this.dateType) {
      case 'relative':
        if (this.param === 'today') {
          date = moment().startOf('day');
        }

        if (this.param === 'tomorrow') {
          date = moment().startOf('day').add(1, 'days');
        }

        if (this.param === 'yesterday') {
          date = moment().startOf('day').subtract(1, 'days');
        }
        break

      case 'element':
        date = moment(this.other$.value, this.otherFormat);
        break

      case 'absolute':
        date = moment(this.param, this.format);
        break
    }

    return date
  }

  get dateType() {
    if (['today', 'tomorrow', 'yesterday'].indexOf(this.param) !== -1) {
      return 'relative'
    } else if (this.form$.el$(this.param)) {
      return 'element'
    } else {
      return 'absolute'
    }
  }

  init() {
    this.form$.$nextTick(() => {
      if (this.dateType == 'element') {
        this.watchOther();
      }
    });
  }

  check(value) {
    if (_.isArray(value)) {
      let valid = true;

      _.each(value, (date) => {
        if (!this.checkDate(date)) {
          valid = false;
        }
      });

      return valid
    }

    return this.checkDate(value)
  }

  checkDate(value) {
    return moment(value, this.format).isAfter(moment(this.date, this.otherFormat))
  }
}

class after_or_equal extends after {
  checkDate(value) {
    return moment(value, this.format).isSameOrAfter(moment(this.date, this.otherFormat))
  }
}

class alpha extends Validator {
  check(value) {
    // Solution from XRegExp library:
    // https://stackoverflow.com/a/15861883/1276358
    return /^[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]*$/.test(value)
  }
}

class alpha_dash extends Validator {
  check(value) {
    // Solution from XRegExp library:
    // https://stackoverflow.com/a/15861883/1276358
    return /^[0-9-_\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]*$/.test(value)
  }
}

class alpha_num extends Validator {
  check(value) {
    // Solution from XRegExp library:
    // https://stackoverflow.com/a/15861883/1276358
    return /^[0-9\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]*$/.test(value)
  }
}

class array extends Validator {
  check(value) {
    return _.isArray(value)
  }
}

class before extends after {
  checkDate(value) {
    return moment(value, this.format).isBefore(moment(this.date, this.otherFormat))
  }
}

class before_or_equal extends after {
  checkDate(value) {
    return moment(value, this.format).isSameOrBefore(moment(this.date, this.otherFormat))
  }
}

class between extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      min: this.min,
      max: this.max,
    }
  }

  get min() {
    return this.attributes[0]
  } 

  get max() {
    return this.attributes[1]
  } 

  check(value) {
    if (!value) {
      return true
    }

    let size = this.size(value);

    return size >= this.min && size <= this.max
  }
}

class boolean extends Validator {
  check(value) {
    var accepted = [true, false, 0, 1, '0', '1'];

    return accepted.indexOf(value) !== -1
  }
}

class confirmed extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      other: this.other$.genericName,
    }
  }

  get otherPath() {
    return `${this.element$.path}_confirmation`
  }

  get other$() {
    return this.form$.el$(replaceWildcards(this.otherPath, this.element$.path))
  }

  init() {
    this.watchOther();
  }

  check(value) {
    if (!this.filled(this.other$.value)) {
      return true
    }

    return value == this.other$.value
  }
}

var reSpace = '[ \\t]+';
var reSpaceOpt = '[ \\t]*';
var reMeridian = '(?:([ap])\\.?m\\.?([\\t ]|$))';
var reHour24 = '(2[0-4]|[01]?[0-9])';
var reHour24lz = '([01][0-9]|2[0-4])';
var reHour12 = '(0?[1-9]|1[0-2])';
var reMinute = '([0-5]?[0-9])';
var reMinutelz = '([0-5][0-9])';
var reSecond = '(60|[0-5]?[0-9])';
var reSecondlz = '(60|[0-5][0-9])';
var reFrac = '(?:\\.([0-9]+))';

var reDayfull = 'sunday|monday|tuesday|wednesday|thursday|friday|saturday';
var reDayabbr = 'sun|mon|tue|wed|thu|fri|sat';
var reDaytext = reDayfull + '|' + reDayabbr + '|weekdays?';

var reReltextnumber = 'first|second|third|fourth|fifth|sixth|seventh|eighth?|ninth|tenth|eleventh|twelfth';
var reReltexttext = 'next|last|previous|this';
var reReltextunit = '(?:second|sec|minute|min|hour|day|fortnight|forthnight|month|year)s?|weeks|' + reDaytext;

var reYear = '([0-9]{1,4})';
var reYear2 = '([0-9]{2})';
var reYear4 = '([0-9]{4})';
var reYear4withSign = '([+-]?[0-9]{4})';
var reMonth = '(1[0-2]|0?[0-9])';
var reMonthlz = '(0[0-9]|1[0-2])';
var reDay = '(?:(3[01]|[0-2]?[0-9])(?:st|nd|rd|th)?)';
var reDaylz = '(0[0-9]|[1-2][0-9]|3[01])';

var reMonthFull = 'january|february|march|april|may|june|july|august|september|october|november|december';
var reMonthAbbr = 'jan|feb|mar|apr|may|jun|jul|aug|sept?|oct|nov|dec';
var reMonthroman = 'i[vx]|vi{0,3}|xi{0,2}|i{1,3}';
var reMonthText = '(' + reMonthFull + '|' + reMonthAbbr + '|' + reMonthroman + ')';

var reTzCorrection = '((?:GMT)?([+-])' + reHour24 + ':?' + reMinute + '?)';
var reTzAbbr = '\\(?([a-zA-Z]{1,6})\\)?';
var reDayOfYear = '(00[1-9]|0[1-9][0-9]|[12][0-9][0-9]|3[0-5][0-9]|36[0-6])';
var reWeekOfYear = '(0[1-9]|[1-4][0-9]|5[0-3])';

var reDateNoYear = reMonthText + '[ .\\t-]*' + reDay + '[,.stndrh\\t ]*';

function processMeridian(hour, meridian) {
  meridian = meridian && meridian.toLowerCase();

  switch (meridian) {
    case 'a':
      hour += hour === 12 ? -12 : 0;
      break;
    case 'p':
      hour += hour !== 12 ? 12 : 0;
      break;
  }

  return hour;
}

function processYear(yearStr) {
  var year = +yearStr;

  if (yearStr.length < 4 && year < 100) {
    year += year < 70 ? 2000 : 1900;
  }

  return year;
}

function lookupMonth(monthStr) {
  return {
    jan: 0,
    january: 0,
    i: 0,
    feb: 1,
    february: 1,
    ii: 1,
    mar: 2,
    march: 2,
    iii: 2,
    apr: 3,
    april: 3,
    iv: 3,
    may: 4,
    v: 4,
    jun: 5,
    june: 5,
    vi: 5,
    jul: 6,
    july: 6,
    vii: 6,
    aug: 7,
    august: 7,
    viii: 7,
    sep: 8,
    sept: 8,
    september: 8,
    ix: 8,
    oct: 9,
    october: 9,
    x: 9,
    nov: 10,
    november: 10,
    xi: 10,
    dec: 11,
    december: 11,
    xii: 11
  }[monthStr.toLowerCase()];
}

function lookupWeekday(dayStr) {
  var desiredSundayNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var dayNumbers = {
    mon: 1,
    monday: 1,
    tue: 2,
    tuesday: 2,
    wed: 3,
    wednesday: 3,
    thu: 4,
    thursday: 4,
    fri: 5,
    friday: 5,
    sat: 6,
    saturday: 6,
    sun: 0,
    sunday: 0
  };

  return dayNumbers[dayStr.toLowerCase()] || desiredSundayNumber;
}

function lookupRelative(relText) {
  var relativeNumbers = {
    last: -1,
    previous: -1,
    this: 0,
    first: 1,
    next: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5,
    sixth: 6,
    seventh: 7,
    eight: 8,
    eighth: 8,
    ninth: 9,
    tenth: 10,
    eleventh: 11,
    twelfth: 12
  };

  var relativeBehavior = {
    this: 1
  };

  var relTextLower = relText.toLowerCase();

  return {
    amount: relativeNumbers[relTextLower],
    behavior: relativeBehavior[relTextLower] || 0
  };
}

function processTzCorrection(tzOffset, oldValue) {
  var reTzCorrectionLoose = /(?:GMT)?([+-])(\d+)(:?)(\d{0,2})/i;
  tzOffset = tzOffset && tzOffset.match(reTzCorrectionLoose);

  if (!tzOffset) {
    return oldValue;
  }

  var sign = tzOffset[1] === '-' ? -1 : 1;
  var hours = +tzOffset[2];
  var minutes = +tzOffset[4];

  if (!tzOffset[4] && !tzOffset[3]) {
    minutes = Math.floor(hours % 100);
    hours = Math.floor(hours / 100);
  }

  // timezone offset in seconds
  return sign * (hours * 60 + minutes) * 60;
}

// tz abbrevation : tz offset in seconds
var tzAbbrOffsets = {
  acdt: 37800,
  acst: 34200,
  addt: -7200,
  adt: -10800,
  aedt: 39600,
  aest: 36000,
  ahdt: -32400,
  ahst: -36000,
  akdt: -28800,
  akst: -32400,
  amt: -13840,
  apt: -10800,
  ast: -14400,
  awdt: 32400,
  awst: 28800,
  awt: -10800,
  bdst: 7200,
  bdt: -36000,
  bmt: -14309,
  bst: 3600,
  cast: 34200,
  cat: 7200,
  cddt: -14400,
  cdt: -18000,
  cemt: 10800,
  cest: 7200,
  cet: 3600,
  cmt: -15408,
  cpt: -18000,
  cst: -21600,
  cwt: -18000,
  chst: 36000,
  dmt: -1521,
  eat: 10800,
  eddt: -10800,
  edt: -14400,
  eest: 10800,
  eet: 7200,
  emt: -26248,
  ept: -14400,
  est: -18000,
  ewt: -14400,
  ffmt: -14660,
  fmt: -4056,
  gdt: 39600,
  gmt: 0,
  gst: 36000,
  hdt: -34200,
  hkst: 32400,
  hkt: 28800,
  hmt: -19776,
  hpt: -34200,
  hst: -36000,
  hwt: -34200,
  iddt: 14400,
  idt: 10800,
  imt: 25025,
  ist: 7200,
  jdt: 36000,
  jmt: 8440,
  jst: 32400,
  kdt: 36000,
  kmt: 5736,
  kst: 30600,
  lst: 9394,
  mddt: -18000,
  mdst: 16279,
  mdt: -21600,
  mest: 7200,
  met: 3600,
  mmt: 9017,
  mpt: -21600,
  msd: 14400,
  msk: 10800,
  mst: -25200,
  mwt: -21600,
  nddt: -5400,
  ndt: -9052,
  npt: -9000,
  nst: -12600,
  nwt: -9000,
  nzdt: 46800,
  nzmt: 41400,
  nzst: 43200,
  pddt: -21600,
  pdt: -25200,
  pkst: 21600,
  pkt: 18000,
  plmt: 25590,
  pmt: -13236,
  ppmt: -17340,
  ppt: -25200,
  pst: -28800,
  pwt: -25200,
  qmt: -18840,
  rmt: 5794,
  sast: 7200,
  sdmt: -16800,
  sjmt: -20173,
  smt: -13884,
  sst: -39600,
  tbmt: 10751,
  tmt: 12344,
  uct: 0,
  utc: 0,
  wast: 7200,
  wat: 3600,
  wemt: 7200,
  west: 3600,
  wet: 0,
  wib: 25200,
  wita: 28800,
  wit: 32400,
  wmt: 5040,
  yddt: -25200,
  ydt: -28800,
  ypt: -28800,
  yst: -32400,
  ywt: -28800,
  a: 3600,
  b: 7200,
  c: 10800,
  d: 14400,
  e: 18000,
  f: 21600,
  g: 25200,
  h: 28800,
  i: 32400,
  k: 36000,
  l: 39600,
  m: 43200,
  n: -3600,
  o: -7200,
  p: -10800,
  q: -14400,
  r: -18000,
  s: -21600,
  t: -25200,
  u: -28800,
  v: -32400,
  w: -36000,
  x: -39600,
  y: -43200,
  z: 0
};

var formats = {
  yesterday: {
    regex: /^yesterday/i,
    name: 'yesterday',
    callback: function callback() {
      this.rd -= 1;
      return this.resetTime();
    }
  },

  now: {
    regex: /^now/i,
    name: 'now'
    // do nothing
  },

  noon: {
    regex: /^noon/i,
    name: 'noon',
    callback: function callback() {
      return this.resetTime() && this.time(12, 0, 0, 0);
    }
  },

  midnightOrToday: {
    regex: /^(midnight|today)/i,
    name: 'midnight | today',
    callback: function callback() {
      return this.resetTime();
    }
  },

  tomorrow: {
    regex: /^tomorrow/i,
    name: 'tomorrow',
    callback: function callback() {
      this.rd += 1;
      return this.resetTime();
    }
  },

  timestamp: {
    regex: /^@(-?\d+)/i,
    name: 'timestamp',
    callback: function callback(match, timestamp) {
      this.rs += +timestamp;
      this.y = 1970;
      this.m = 0;
      this.d = 1;
      this.dates = 0;

      return this.resetTime() && this.zone(0);
    }
  },

  firstOrLastDay: {
    regex: /^(first|last) day of/i,
    name: 'firstdayof | lastdayof',
    callback: function callback(match, day) {
      if (day.toLowerCase() === 'first') {
        this.firstOrLastDayOfMonth = 1;
      } else {
        this.firstOrLastDayOfMonth = -1;
      }
    }
  },

  backOrFrontOf: {
    regex: RegExp('^(back|front) of ' + reHour24 + reSpaceOpt + reMeridian + '?', 'i'),
    name: 'backof | frontof',
    callback: function callback(match, side, hours, meridian) {
      var back = side.toLowerCase() === 'back';
      var hour = +hours;
      var minute = 15;

      if (!back) {
        hour -= 1;
        minute = 45;
      }

      hour = processMeridian(hour, meridian);

      return this.resetTime() && this.time(hour, minute, 0, 0);
    }
  },

  weekdayOf: {
    regex: RegExp('^(' + reReltextnumber + '|' + reReltexttext + ')' + reSpace + '(' + reDayfull + '|' + reDayabbr + ')' + reSpace + 'of', 'i'),
    name: 'weekdayof'
    // todo
  },

  mssqltime: {
    regex: RegExp('^' + reHour12 + ':' + reMinutelz + ':' + reSecondlz + '[:.]([0-9]+)' + reMeridian, 'i'),
    name: 'mssqltime',
    callback: function callback(match, hour, minute, second, frac, meridian) {
      return this.time(processMeridian(+hour, meridian), +minute, +second, +frac.substr(0, 3));
    }
  },

  timeLong12: {
    regex: RegExp('^' + reHour12 + '[:.]' + reMinute + '[:.]' + reSecondlz + reSpaceOpt + reMeridian, 'i'),
    name: 'timelong12',
    callback: function callback(match, hour, minute, second, meridian) {
      return this.time(processMeridian(+hour, meridian), +minute, +second, 0);
    }
  },

  timeShort12: {
    regex: RegExp('^' + reHour12 + '[:.]' + reMinutelz + reSpaceOpt + reMeridian, 'i'),
    name: 'timeshort12',
    callback: function callback(match, hour, minute, meridian) {
      return this.time(processMeridian(+hour, meridian), +minute, 0, 0);
    }
  },

  timeTiny12: {
    regex: RegExp('^' + reHour12 + reSpaceOpt + reMeridian, 'i'),
    name: 'timetiny12',
    callback: function callback(match, hour, meridian) {
      return this.time(processMeridian(+hour, meridian), 0, 0, 0);
    }
  },

  soap: {
    regex: RegExp('^' + reYear4 + '-' + reMonthlz + '-' + reDaylz + 'T' + reHour24lz + ':' + reMinutelz + ':' + reSecondlz + reFrac + reTzCorrection + '?', 'i'),
    name: 'soap',
    callback: function callback(match, year, month, day, hour, minute, second, frac, tzCorrection) {
      return this.ymd(+year, month - 1, +day) && this.time(+hour, +minute, +second, +frac.substr(0, 3)) && this.zone(processTzCorrection(tzCorrection));
    }
  },

  wddx: {
    regex: RegExp('^' + reYear4 + '-' + reMonth + '-' + reDay + 'T' + reHour24 + ':' + reMinute + ':' + reSecond),
    name: 'wddx',
    callback: function callback(match, year, month, day, hour, minute, second) {
      return this.ymd(+year, month - 1, +day) && this.time(+hour, +minute, +second, 0);
    }
  },

  exif: {
    regex: RegExp('^' + reYear4 + ':' + reMonthlz + ':' + reDaylz + ' ' + reHour24lz + ':' + reMinutelz + ':' + reSecondlz, 'i'),
    name: 'exif',
    callback: function callback(match, year, month, day, hour, minute, second) {
      return this.ymd(+year, month - 1, +day) && this.time(+hour, +minute, +second, 0);
    }
  },

  xmlRpc: {
    regex: RegExp('^' + reYear4 + reMonthlz + reDaylz + 'T' + reHour24 + ':' + reMinutelz + ':' + reSecondlz),
    name: 'xmlrpc',
    callback: function callback(match, year, month, day, hour, minute, second) {
      return this.ymd(+year, month - 1, +day) && this.time(+hour, +minute, +second, 0);
    }
  },

  xmlRpcNoColon: {
    regex: RegExp('^' + reYear4 + reMonthlz + reDaylz + '[Tt]' + reHour24 + reMinutelz + reSecondlz),
    name: 'xmlrpcnocolon',
    callback: function callback(match, year, month, day, hour, minute, second) {
      return this.ymd(+year, month - 1, +day) && this.time(+hour, +minute, +second, 0);
    }
  },

  clf: {
    regex: RegExp('^' + reDay + '/(' + reMonthAbbr + ')/' + reYear4 + ':' + reHour24lz + ':' + reMinutelz + ':' + reSecondlz + reSpace + reTzCorrection, 'i'),
    name: 'clf',
    callback: function callback(match, day, month, year, hour, minute, second, tzCorrection) {
      return this.ymd(+year, lookupMonth(month), +day) && this.time(+hour, +minute, +second, 0) && this.zone(processTzCorrection(tzCorrection));
    }
  },

  iso8601long: {
    regex: RegExp('^t?' + reHour24 + '[:.]' + reMinute + '[:.]' + reSecond + reFrac, 'i'),
    name: 'iso8601long',
    callback: function callback(match, hour, minute, second, frac) {
      return this.time(+hour, +minute, +second, +frac.substr(0, 3));
    }
  },

  dateTextual: {
    regex: RegExp('^' + reMonthText + '[ .\\t-]*' + reDay + '[,.stndrh\\t ]+' + reYear, 'i'),
    name: 'datetextual',
    callback: function callback(match, month, day, year) {
      return this.ymd(processYear(year), lookupMonth(month), +day);
    }
  },

  pointedDate4: {
    regex: RegExp('^' + reDay + '[.\\t-]' + reMonth + '[.-]' + reYear4),
    name: 'pointeddate4',
    callback: function callback(match, day, month, year) {
      return this.ymd(+year, month - 1, +day);
    }
  },

  pointedDate2: {
    regex: RegExp('^' + reDay + '[.\\t]' + reMonth + '\\.' + reYear2),
    name: 'pointeddate2',
    callback: function callback(match, day, month, year) {
      return this.ymd(processYear(year), month - 1, +day);
    }
  },

  timeLong24: {
    regex: RegExp('^t?' + reHour24 + '[:.]' + reMinute + '[:.]' + reSecond),
    name: 'timelong24',
    callback: function callback(match, hour, minute, second) {
      return this.time(+hour, +minute, +second, 0);
    }
  },

  dateNoColon: {
    regex: RegExp('^' + reYear4 + reMonthlz + reDaylz),
    name: 'datenocolon',
    callback: function callback(match, year, month, day) {
      return this.ymd(+year, month - 1, +day);
    }
  },

  pgydotd: {
    regex: RegExp('^' + reYear4 + '\\.?' + reDayOfYear),
    name: 'pgydotd',
    callback: function callback(match, year, day) {
      return this.ymd(+year, 0, +day);
    }
  },

  timeShort24: {
    regex: RegExp('^t?' + reHour24 + '[:.]' + reMinute, 'i'),
    name: 'timeshort24',
    callback: function callback(match, hour, minute) {
      return this.time(+hour, +minute, 0, 0);
    }
  },

  iso8601noColon: {
    regex: RegExp('^t?' + reHour24lz + reMinutelz + reSecondlz, 'i'),
    name: 'iso8601nocolon',
    callback: function callback(match, hour, minute, second) {
      return this.time(+hour, +minute, +second, 0);
    }
  },

  iso8601dateSlash: {
    // eventhough the trailing slash is optional in PHP
    // here it's mandatory and inputs without the slash
    // are handled by dateslash
    regex: RegExp('^' + reYear4 + '/' + reMonthlz + '/' + reDaylz + '/'),
    name: 'iso8601dateslash',
    callback: function callback(match, year, month, day) {
      return this.ymd(+year, month - 1, +day);
    }
  },

  dateSlash: {
    regex: RegExp('^' + reYear4 + '/' + reMonth + '/' + reDay),
    name: 'dateslash',
    callback: function callback(match, year, month, day) {
      return this.ymd(+year, month - 1, +day);
    }
  },

  american: {
    regex: RegExp('^' + reMonth + '/' + reDay + '/' + reYear),
    name: 'american',
    callback: function callback(match, month, day, year) {
      return this.ymd(processYear(year), month - 1, +day);
    }
  },

  americanShort: {
    regex: RegExp('^' + reMonth + '/' + reDay),
    name: 'americanshort',
    callback: function callback(match, month, day) {
      return this.ymd(this.y, month - 1, +day);
    }
  },

  gnuDateShortOrIso8601date2: {
    // iso8601date2 is complete subset of gnudateshort
    regex: RegExp('^' + reYear + '-' + reMonth + '-' + reDay),
    name: 'gnudateshort | iso8601date2',
    callback: function callback(match, year, month, day) {
      return this.ymd(processYear(year), month - 1, +day);
    }
  },

  iso8601date4: {
    regex: RegExp('^' + reYear4withSign + '-' + reMonthlz + '-' + reDaylz),
    name: 'iso8601date4',
    callback: function callback(match, year, month, day) {
      return this.ymd(+year, month - 1, +day);
    }
  },

  gnuNoColon: {
    regex: RegExp('^t?' + reHour24lz + reMinutelz, 'i'),
    name: 'gnunocolon',
    callback: function callback(match, hour, minute) {
      // this rule is a special case
      // if time was already set once by any preceding rule, it sets the captured value as year
      switch (this.times) {
        case 0:
          return this.time(+hour, +minute, 0, this.f);
        case 1:
          this.y = hour * 100 + +minute;
          this.times++;

          return true;
        default:
          return false;
      }
    }
  },

  gnuDateShorter: {
    regex: RegExp('^' + reYear4 + '-' + reMonth),
    name: 'gnudateshorter',
    callback: function callback(match, year, month) {
      return this.ymd(+year, month - 1, 1);
    }
  },

  pgTextReverse: {
    // note: allowed years are from 32-9999
    // years below 32 should be treated as days in datefull
    regex: RegExp('^' + '(\\d{3,4}|[4-9]\\d|3[2-9])-(' + reMonthAbbr + ')-' + reDaylz, 'i'),
    name: 'pgtextreverse',
    callback: function callback(match, year, month, day) {
      return this.ymd(processYear(year), lookupMonth(month), +day);
    }
  },

  dateFull: {
    regex: RegExp('^' + reDay + '[ \\t.-]*' + reMonthText + '[ \\t.-]*' + reYear, 'i'),
    name: 'datefull',
    callback: function callback(match, day, month, year) {
      return this.ymd(processYear(year), lookupMonth(month), +day);
    }
  },

  dateNoDay: {
    regex: RegExp('^' + reMonthText + '[ .\\t-]*' + reYear4, 'i'),
    name: 'datenoday',
    callback: function callback(match, month, year) {
      return this.ymd(+year, lookupMonth(month), 1);
    }
  },

  dateNoDayRev: {
    regex: RegExp('^' + reYear4 + '[ .\\t-]*' + reMonthText, 'i'),
    name: 'datenodayrev',
    callback: function callback(match, year, month) {
      return this.ymd(+year, lookupMonth(month), 1);
    }
  },

  pgTextShort: {
    regex: RegExp('^(' + reMonthAbbr + ')-' + reDaylz + '-' + reYear, 'i'),
    name: 'pgtextshort',
    callback: function callback(match, month, day, year) {
      return this.ymd(processYear(year), lookupMonth(month), +day);
    }
  },

  dateNoYear: {
    regex: RegExp('^' + reDateNoYear, 'i'),
    name: 'datenoyear',
    callback: function callback(match, month, day) {
      return this.ymd(this.y, lookupMonth(month), +day);
    }
  },

  dateNoYearRev: {
    regex: RegExp('^' + reDay + '[ .\\t-]*' + reMonthText, 'i'),
    name: 'datenoyearrev',
    callback: function callback(match, day, month) {
      return this.ymd(this.y, lookupMonth(month), +day);
    }
  },

  isoWeekDay: {
    regex: RegExp('^' + reYear4 + '-?W' + reWeekOfYear + '(?:-?([0-7]))?'),
    name: 'isoweekday | isoweek',
    callback: function callback(match, year, week, day) {
      day = day ? +day : 1;

      if (!this.ymd(+year, 0, 1)) {
        return false;
      }

      // get day of week for Jan 1st
      var dayOfWeek = new Date(this.y, this.m, this.d).getDay();

      // and use the day to figure out the offset for day 1 of week 1
      dayOfWeek = 0 - (dayOfWeek > 4 ? dayOfWeek - 7 : dayOfWeek);

      this.rd += dayOfWeek + (week - 1) * 7 + day;
    }
  },

  relativeText: {
    regex: RegExp('^(' + reReltextnumber + '|' + reReltexttext + ')' + reSpace + '(' + reReltextunit + ')', 'i'),
    name: 'relativetext',
    callback: function callback(match, relValue, relUnit) {
      // todo: implement handling of 'this time-unit'
      // eslint-disable-next-line no-unused-vars
      var _lookupRelative = lookupRelative(relValue),
          amount = _lookupRelative.amount;

      switch (relUnit.toLowerCase()) {
        case 'sec':
        case 'secs':
        case 'second':
        case 'seconds':
          this.rs += amount;
          break;
        case 'min':
        case 'mins':
        case 'minute':
        case 'minutes':
          this.ri += amount;
          break;
        case 'hour':
        case 'hours':
          this.rh += amount;
          break;
        case 'day':
        case 'days':
          this.rd += amount;
          break;
        case 'fortnight':
        case 'fortnights':
        case 'forthnight':
        case 'forthnights':
          this.rd += amount * 14;
          break;
        case 'week':
        case 'weeks':
          this.rd += amount * 7;
          break;
        case 'month':
        case 'months':
          this.rm += amount;
          break;
        case 'year':
        case 'years':
          this.ry += amount;
          break;
        case 'mon':case 'monday':
        case 'tue':case 'tuesday':
        case 'wed':case 'wednesday':
        case 'thu':case 'thursday':
        case 'fri':case 'friday':
        case 'sat':case 'saturday':
        case 'sun':case 'sunday':
          this.resetTime();
          this.weekday = lookupWeekday(relUnit, 7);
          this.weekdayBehavior = 1;
          this.rd += (amount > 0 ? amount - 1 : amount) * 7;
          break;
      }
    }
  },

  relative: {
    regex: RegExp('^([+-]*)[ \\t]*(\\d+)' + reSpaceOpt + '(' + reReltextunit + '|week)', 'i'),
    name: 'relative',
    callback: function callback(match, signs, relValue, relUnit) {
      var minuses = signs.replace(/[^-]/g, '').length;

      var amount = +relValue * Math.pow(-1, minuses);

      switch (relUnit.toLowerCase()) {
        case 'sec':
        case 'secs':
        case 'second':
        case 'seconds':
          this.rs += amount;
          break;
        case 'min':
        case 'mins':
        case 'minute':
        case 'minutes':
          this.ri += amount;
          break;
        case 'hour':
        case 'hours':
          this.rh += amount;
          break;
        case 'day':
        case 'days':
          this.rd += amount;
          break;
        case 'fortnight':
        case 'fortnights':
        case 'forthnight':
        case 'forthnights':
          this.rd += amount * 14;
          break;
        case 'week':
        case 'weeks':
          this.rd += amount * 7;
          break;
        case 'month':
        case 'months':
          this.rm += amount;
          break;
        case 'year':
        case 'years':
          this.ry += amount;
          break;
        case 'mon':case 'monday':
        case 'tue':case 'tuesday':
        case 'wed':case 'wednesday':
        case 'thu':case 'thursday':
        case 'fri':case 'friday':
        case 'sat':case 'saturday':
        case 'sun':case 'sunday':
          this.resetTime();
          this.weekday = lookupWeekday(relUnit, 7);
          this.weekdayBehavior = 1;
          this.rd += (amount > 0 ? amount - 1 : amount) * 7;
          break;
      }
    }
  },

  dayText: {
    regex: RegExp('^(' + reDaytext + ')', 'i'),
    name: 'daytext',
    callback: function callback(match, dayText) {
      this.resetTime();
      this.weekday = lookupWeekday(dayText, 0);

      if (this.weekdayBehavior !== 2) {
        this.weekdayBehavior = 1;
      }
    }
  },

  relativeTextWeek: {
    regex: RegExp('^(' + reReltexttext + ')' + reSpace + 'week', 'i'),
    name: 'relativetextweek',
    callback: function callback(match, relText) {
      this.weekdayBehavior = 2;

      switch (relText.toLowerCase()) {
        case 'this':
          this.rd += 0;
          break;
        case 'next':
          this.rd += 7;
          break;
        case 'last':
        case 'previous':
          this.rd -= 7;
          break;
      }

      if (isNaN(this.weekday)) {
        this.weekday = 1;
      }
    }
  },

  monthFullOrMonthAbbr: {
    regex: RegExp('^(' + reMonthFull + '|' + reMonthAbbr + ')', 'i'),
    name: 'monthfull | monthabbr',
    callback: function callback(match, month) {
      return this.ymd(this.y, lookupMonth(month), this.d);
    }
  },

  tzCorrection: {
    regex: RegExp('^' + reTzCorrection, 'i'),
    name: 'tzcorrection',
    callback: function callback(tzCorrection) {
      return this.zone(processTzCorrection(tzCorrection));
    }
  },

  tzAbbr: {
    regex: RegExp('^' + reTzAbbr),
    name: 'tzabbr',
    callback: function callback(match, abbr) {
      var offset = tzAbbrOffsets[abbr.toLowerCase()];

      if (isNaN(offset)) {
        return false;
      }

      return this.zone(offset);
    }
  },

  ago: {
    regex: /^ago/i,
    name: 'ago',
    callback: function callback() {
      this.ry = -this.ry;
      this.rm = -this.rm;
      this.rd = -this.rd;
      this.rh = -this.rh;
      this.ri = -this.ri;
      this.rs = -this.rs;
      this.rf = -this.rf;
    }
  },

  year4: {
    regex: RegExp('^' + reYear4),
    name: 'year4',
    callback: function callback(match, year) {
      this.y = +year;
      return true;
    }
  },

  whitespace: {
    regex: /^[ .,\t]+/,
    name: 'whitespace'
    // do nothing
  },

  dateShortWithTimeLong: {
    regex: RegExp('^' + reDateNoYear + 't?' + reHour24 + '[:.]' + reMinute + '[:.]' + reSecond, 'i'),
    name: 'dateshortwithtimelong',
    callback: function callback(match, month, day, hour, minute, second) {
      return this.ymd(this.y, lookupMonth(month), +day) && this.time(+hour, +minute, +second, 0);
    }
  },

  dateShortWithTimeLong12: {
    regex: RegExp('^' + reDateNoYear + reHour12 + '[:.]' + reMinute + '[:.]' + reSecondlz + reSpaceOpt + reMeridian, 'i'),
    name: 'dateshortwithtimelong12',
    callback: function callback(match, month, day, hour, minute, second, meridian) {
      return this.ymd(this.y, lookupMonth(month), +day) && this.time(processMeridian(+hour, meridian), +minute, +second, 0);
    }
  },

  dateShortWithTimeShort: {
    regex: RegExp('^' + reDateNoYear + 't?' + reHour24 + '[:.]' + reMinute, 'i'),
    name: 'dateshortwithtimeshort',
    callback: function callback(match, month, day, hour, minute) {
      return this.ymd(this.y, lookupMonth(month), +day) && this.time(+hour, +minute, 0, 0);
    }
  },

  dateShortWithTimeShort12: {
    regex: RegExp('^' + reDateNoYear + reHour12 + '[:.]' + reMinutelz + reSpaceOpt + reMeridian, 'i'),
    name: 'dateshortwithtimeshort12',
    callback: function callback(match, month, day, hour, minute, meridian) {
      return this.ymd(this.y, lookupMonth(month), +day) && this.time(processMeridian(+hour, meridian), +minute, 0, 0);
    }
  }
};

var resultProto = {
  // date
  y: NaN,
  m: NaN,
  d: NaN,
  // time
  h: NaN,
  i: NaN,
  s: NaN,
  f: NaN,

  // relative shifts
  ry: 0,
  rm: 0,
  rd: 0,
  rh: 0,
  ri: 0,
  rs: 0,
  rf: 0,

  // weekday related shifts
  weekday: NaN,
  weekdayBehavior: 0,

  // first or last day of month
  // 0 none, 1 first, -1 last
  firstOrLastDayOfMonth: 0,

  // timezone correction in minutes
  z: NaN,

  // counters
  dates: 0,
  times: 0,
  zones: 0,

  // helper functions
  ymd: function ymd(y, m, d) {
    if (this.dates > 0) {
      return false;
    }

    this.dates++;
    this.y = y;
    this.m = m;
    this.d = d;
    return true;
  },
  time: function time(h, i, s, f) {
    if (this.times > 0) {
      return false;
    }

    this.times++;
    this.h = h;
    this.i = i;
    this.s = s;
    this.f = f;

    return true;
  },
  resetTime: function resetTime() {
    this.h = 0;
    this.i = 0;
    this.s = 0;
    this.f = 0;
    this.times = 0;

    return true;
  },
  zone: function zone(minutes) {
    if (this.zones <= 1) {
      this.zones++;
      this.z = minutes;
      return true;
    }

    return false;
  },
  toDate: function toDate(relativeTo) {
    if (this.dates && !this.times) {
      this.h = this.i = this.s = this.f = 0;
    }

    // fill holes
    if (isNaN(this.y)) {
      this.y = relativeTo.getFullYear();
    }

    if (isNaN(this.m)) {
      this.m = relativeTo.getMonth();
    }

    if (isNaN(this.d)) {
      this.d = relativeTo.getDate();
    }

    if (isNaN(this.h)) {
      this.h = relativeTo.getHours();
    }

    if (isNaN(this.i)) {
      this.i = relativeTo.getMinutes();
    }

    if (isNaN(this.s)) {
      this.s = relativeTo.getSeconds();
    }

    if (isNaN(this.f)) {
      this.f = relativeTo.getMilliseconds();
    }

    // adjust special early
    switch (this.firstOrLastDayOfMonth) {
      case 1:
        this.d = 1;
        break;
      case -1:
        this.d = 0;
        this.m += 1;
        break;
    }

    if (!isNaN(this.weekday)) {
      var date = new Date(relativeTo.getTime());
      date.setFullYear(this.y, this.m, this.d);
      date.setHours(this.h, this.i, this.s, this.f);

      var dow = date.getDay();

      if (this.weekdayBehavior === 2) {
        // To make "this week" work, where the current day of week is a "sunday"
        if (dow === 0 && this.weekday !== 0) {
          this.weekday = -6;
        }

        // To make "sunday this week" work, where the current day of week is not a "sunday"
        if (this.weekday === 0 && dow !== 0) {
          this.weekday = 7;
        }

        this.d -= dow;
        this.d += this.weekday;
      } else {
        var diff = this.weekday - dow;

        // some PHP magic
        if (this.rd < 0 && diff < 0 || this.rd >= 0 && diff <= -this.weekdayBehavior) {
          diff += 7;
        }

        if (this.weekday >= 0) {
          this.d += diff;
        } else {
          this.d -= 7 - (Math.abs(this.weekday) - dow);
        }

        this.weekday = NaN;
      }
    }

    // adjust relative
    this.y += this.ry;
    this.m += this.rm;
    this.d += this.rd;

    this.h += this.rh;
    this.i += this.ri;
    this.s += this.rs;
    this.f += this.rf;

    this.ry = this.rm = this.rd = 0;
    this.rh = this.ri = this.rs = this.rf = 0;

    var result = new Date(relativeTo.getTime());
    // since Date constructor treats years <= 99 as 1900+
    // it can't be used, thus this weird way
    result.setFullYear(this.y, this.m, this.d);
    result.setHours(this.h, this.i, this.s, this.f);

    // note: this is done twice in PHP
    // early when processing special relatives
    // and late
    // todo: check if the logic can be reduced
    // to just one time action
    switch (this.firstOrLastDayOfMonth) {
      case 1:
        result.setDate(1);
        break;
      case -1:
        result.setMonth(result.getMonth() + 1, 0);
        break;
    }

    // adjust timezone
    if (!isNaN(this.z) && result.getTimezoneOffset() !== this.z) {
      result.setUTCFullYear(result.getFullYear(), result.getMonth(), result.getDate());

      result.setUTCHours(result.getHours(), result.getMinutes(), result.getSeconds() - this.z, result.getMilliseconds());
    }

    return result;
  }
};

var strtotime = function strtotime(str, now) {
  //       discuss at: https://locutus.io/php/strtotime/
  //      original by: Caio Ariede (https://caioariede.com)
  //      improved by: Kevin van Zonneveld (https://kvz.io)
  //      improved by: Caio Ariede (https://caioariede.com)
  //      improved by: A. Matías Quezada (https://amatiasq.com)
  //      improved by: preuter
  //      improved by: Brett Zamir (https://brett-zamir.me)
  //      improved by: Mirko Faber
  //         input by: David
  //      bugfixed by: Wagner B. Soares
  //      bugfixed by: Artur Tchernychev
  //      bugfixed by: Stephan Bösch-Plepelits (https://github.com/plepe)
  // reimplemented by: Rafał Kukawski
  //           note 1: Examples all have a fixed timestamp to prevent
  //           note 1: tests to fail because of variable time(zones)
  //        example 1: strtotime('+1 day', 1129633200)
  //        returns 1: 1129719600
  //        example 2: strtotime('+1 week 2 days 4 hours 2 seconds', 1129633200)
  //        returns 2: 1130425202
  //        example 3: strtotime('last month', 1129633200)
  //        returns 3: 1127041200
  //        example 4: strtotime('2009-05-04 08:30:00+00')
  //        returns 4: 1241425800
  //        example 5: strtotime('2009-05-04 08:30:00+02:00')
  //        returns 5: 1241418600
  //        example 6: strtotime('2009-05-04 08:30:00 YWT')
  //        returns 6: 1241454600

  if (now == null) {
    now = Math.floor(Date.now() / 1000);
  }

  // the rule order is important
  // if multiple rules match, the longest match wins
  // if multiple rules match the same string, the first match wins
  var rules = [formats.yesterday, formats.now, formats.noon, formats.midnightOrToday, formats.tomorrow, formats.timestamp, formats.firstOrLastDay, formats.backOrFrontOf,
  // formats.weekdayOf, // not yet implemented
  formats.timeTiny12, formats.timeShort12, formats.timeLong12, formats.mssqltime, formats.timeShort24, formats.timeLong24, formats.iso8601long, formats.gnuNoColon, formats.iso8601noColon, formats.americanShort, formats.american, formats.iso8601date4, formats.iso8601dateSlash, formats.dateSlash, formats.gnuDateShortOrIso8601date2, formats.gnuDateShorter, formats.dateFull, formats.pointedDate4, formats.pointedDate2, formats.dateNoDay, formats.dateNoDayRev, formats.dateTextual, formats.dateNoYear, formats.dateNoYearRev, formats.dateNoColon, formats.xmlRpc, formats.xmlRpcNoColon, formats.soap, formats.wddx, formats.exif, formats.pgydotd, formats.isoWeekDay, formats.pgTextShort, formats.pgTextReverse, formats.clf, formats.year4, formats.ago, formats.dayText, formats.relativeTextWeek, formats.relativeText, formats.monthFullOrMonthAbbr, formats.tzCorrection, formats.tzAbbr, formats.dateShortWithTimeShort12, formats.dateShortWithTimeLong12, formats.dateShortWithTimeShort, formats.dateShortWithTimeLong, formats.relative, formats.whitespace];

  var result = Object.create(resultProto);

  while (str.length) {
    var longestMatch = null;
    var finalRule = null;

    for (var i = 0, l = rules.length; i < l; i++) {
      var format = rules[i];

      var match = str.match(format.regex);

      if (match) {
        if (!longestMatch || match[0].length > longestMatch[0].length) {
          longestMatch = match;
          finalRule = format;
        }
      }
    }

    if (!finalRule || finalRule.callback && finalRule.callback.apply(result, longestMatch) === false) {
      return false;
    }

    str = str.substr(longestMatch[0].length);
    finalRule = null;
    longestMatch = null;
  }

  return Math.floor(result.toDate(new Date(now * 1000)) / 1000);
};

class date extends Validator {
  check(value) {
    return !!strtotime(value)
  }
}

class date_equals extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      date: this.date,
    }
  }

  get date() {
    return this.attributes[0]
  }

  check(value) {
    return value === this.date
  }
}

class date_format extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      format: this.format,
    }
  }

  get format() {
    return this.attributes[0]
  }

  check(value) {
    return value && moment(value, this.format).format(this.format) === value
  }
}

class different extends Validator {
  get otherPath() {
    return this.attributes[0]
  }

  get other$() {
    return this.form$.el$(replaceWildcards(this.otherPath, this.element$.path))
  }

  get messageParams() {
    return {
      attribute: this.attributeName,
      other: this.other$.genericName,
    }
  }

  init() {
    this.watchOther();
  }

  check(value) {
    if (!this.filled(value) && !this.filled(this.other$.value)) {
      return true
    }

    return value != this.other$.value
  }
}

class digits extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      digits: this.digits,
    }
  }

  get digits() {
    return this.attributes[0]
  }

  check(value) {
    return /^\d+$/.test(value) && value.toString().length == this.digits
  }
}

class digits_between extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      min: this.min,
      max: this.max,
    }
  }

  get min() {
    return this.attributes[0]
  }

  get max() {
    return this.attributes[1]
  }

  check(value) {
    let length = value.toString().length;

    return /^\d+$/.test(value) && length >= this.min && length <= this.max
  }
}

class dimensions extends Validator {
  get isAsync() {
    return true
  }

  async readImage(inputFile) {
    let reader = new FileReader();

    return new Promise((resolve, reject) => {
      reader.onerror = () => {
        temporaryFileReader.abort();
        reject(new DOMException("File cannot be parsed."));
      };

      reader.onloadend = (event) => {
        resolve(event.target.result);
      };

      reader.readAsDataURL(inputFile);
    })
  }

  async loadImage(value) {
    let source = await this.readImage(value);

    let image = new Image();

    return new Promise((resolve, reject) => {
      image.onerror = () => {
        reject(new DOMException("Image could not be loaded."));
      };

      image.onload = (event) => {
        resolve(event.target);
      };

      image.src = source;
    })
  }

  hasAttribute(attribute) {
    return Object.keys(this.attributes).map(a=>a.toLowerCase()).indexOf(attribute) !== -1
  } 

  async check(value) {
    if (this.isFile && !value) {
      return true
    }

    if (!this.isFile || !(value instanceof File)) {
      return false
    }

    let image = await this.loadImage(value);

    if (this.hasAttribute('min_width')) {
      if (image.width < this.attributes['min_width']) {
        return false
      }
    }

    if (this.hasAttribute('max_width')) {
      if (image.width > this.attributes['max_width']) {
        return false
      }
    }

    if (this.hasAttribute('min_height')) {
      if (image.height < this.attributes['min_height']) {
        return false
      }
    }

    if (this.hasAttribute('max_height')) {
      if (image.height > this.attributes['max_height']) {
        return false
      }
    }

    if (this.hasAttribute('width')) {
      if (image.width != this.attributes['width']) {
        return false
      }
    }

    if (this.hasAttribute('height')) {
      if (image.height != this.attributes['height']) {
        return false
      }
    }

    if (this.hasAttribute('ratio')) {
      let ratio = this.attributes['ratio'];
      let precision = 1 / (Math.min(image.width, image.height) + 1);

      let numerator = /\//.test(ratio) ? ratio.split('/')[0] : ratio;
      let denominator = /\//.test(ratio) ? ratio.split('/')[1] : 1;
      
      if (Math.abs(numerator / denominator - image.width / image.height) > precision) {
        return false
      }
    }

    return true
  }
}

function pregQuote(str, delimiter) {
  // eslint-disable-line camelcase
  //  discuss at: http://locutus.io/php/preg_quote/
  // original by: booeyOH
  // improved by: Ates Goral (http://magnetiq.com)
  // improved by: Kevin van Zonneveld (http://kvz.io)
  // improved by: Brett Zamir (http://brett-zamir.me)
  // bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
  //   example 1: preg_quote("$40")
  //   returns 1: '\\$40'
  //   example 2: preg_quote("*RRRING* Hello?")
  //   returns 2: '\\*RRRING\\* Hello\\?'
  //   example 3: preg_quote("\\.+*?[^]$(){}=!<>|:")
  //   returns 3: '\\\\\\.\\+\\*\\?\\[\\^\\]\\$\\(\\)\\{\\}\\=\\!\\<\\>\\|\\:'

  return (str + '')
    .replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\' + (delimiter || '') + '-]', 'g'), '\\$&')
}

const flattenKeys = function(obj, path = []) {
  return !_.isObject(obj)
    ? { [path.join('.')]: obj }
    : _.reduce(obj, (cum, next, key) => _.merge(cum, flattenKeys(next, [...path, key])), {})
};

class distinct extends Validator {
  check(value) {
    let attribute = this.element$.path;
    let attributeName = attribute.replace(/\d+(?!\d+)/, '*');
    let rootVariable = attribute.match(/^[\w-]+/)[0];
    let attributeData = {
      [rootVariable]: this.form$.data[rootVariable]
    };

    let pattern = pregQuote(attributeName, '#').replace('\\*', '[^.]+');

    let data = {};

    _.each(flattenKeys(attributeData), (v, k) => {
      if (k != attribute && k.match('^' + pattern + '$') !== null) {
        data[k] = v;
      }
    });

    return !(_.values(data).indexOf(value) !== -1)
  }
}

class email extends Validator {
  check(value) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(value).toLowerCase());
  }
}

class exists extends Validator {
  get isAsync() {
    return true
  }

  get requestParams() {
    var params = {};

    _.each(this.attributes, (param, key) => {
      var requestParam = key;

      if (!isNaN(key)) {
        requestParam = param;
      }

      if (requestParam == 'debounce') {
        return
      }

      var el = this.form$.el$(requestParam);

      // set the element value or the param name itself
      params[_.keys(params).length] = el && key != 0 ? el.value : requestParam;
    });

    return params
  }
  
  async check(value) {
    const name = this.element$.name;
    const endpoint = this.form$.$vueform.config.endpoints.exists;
    const method = endpoint.method;

    const res = await this.form$.$vueform.services.axios.request({
      url: endpoint.url,
      method,
      [method.toLowerCase() === 'get' ? 'params' : 'data']: {
        params: this.requestParams,
        [name]: value,
        vueformFieldName: name
      },
    });

    return res.data
  }
}

class file extends Validator {
  check(value) {
    return (!value || value instanceof File) && this.isFile
  }
}

class filled extends Validator {
  check(value) {
    return this.filled(value)
  }
}

class gt extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      value: this.other$.value != null ? this.size(this.other$.value) : 0,
    }
  }

  get otherPath() {
    return this.attributes[0]
  }

  get other$() {
    return this.form$.el$(replaceWildcards(this.otherPath, this.element$.path))
  }

  init() {
    this.watchOther();
  }

  check(value) {
    let otherValue = this.other$.value;

    return this.compare(value, otherValue)
  }

  compare(value, otherValue) {
    let otherSize = this.size(otherValue);

    return otherSize == 0 || this.size(value) > otherSize
  }
}

class gte extends gt {
  compare(value, otherValue) {
    let otherSize = this.size(otherValue);

    return otherSize == 0 || this.size(value) >= otherSize
  }
}

class image extends Validator {
  check(value) {
    if (this.isFile && !value) {
      return true
    }

    if (!this.isFile || !(value instanceof File) || !value.name) {
      return false
    }

    var extension = value.name.split('.').pop();

    return ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg', 'webp'].indexOf(extension) !== -1
  }
}

class in_ extends Validator {
  check(value) {
    return _.values(this.attributes).indexOf(value) !== -1
  }
}

class in_array extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      other: this.other$.genericName,
    }
  }

  get other$() {
    return this.form$.el$(replaceWildcards(this.otherPath, this.element$.path))
  }

  get otherPath() {
    var matches = this.attributes[0].match(/.*(?=\.\*)/);

    if (matches === null) {
      throw new Error('in_array rule\'s other attribute should end with .*')
    }

    return matches[0]
  }

  init() {
    this.watchOther();
  }

  check(value) {
    var data = this.other$.value;

    if (!data) {
      return false
    }

    return data.indexOf(value) !== -1
  }
}

class integer extends Validator {
  check(value) {
    let normalized = normalize(String(value).trim());
    
    return normalized === parseInt(normalized, 10)
  }
}

const checker$1 = function(value) {
  var re = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\/([0-9]|[1-2][0-9]|3[0-2]))?$/;

  return re.test(value)
};

class ipv4 extends Validator {
  check(value) {
    return checker$1(value)
  }
}

const checker = function(value) {
  var re = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*(\/(\d|\d\d|1[0-1]\d|12[0-8]))?$/;

  return re.test(value)
};

class ipv6 extends Validator {
  check(value) {
    return checker(value)
  }
}

class ip extends Validator {
  check(value) {
    return checker$1(value) || checker(value)
  }
}

function isJson (str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }

  return true;
}

class json extends Validator {
  check(value) {
    return isJson(value)
  }
}

class lt extends gt {
  compare(value, otherValue) {
    let size = this.size(value);
    let otherSize = this.size(otherValue);

    return (otherSize == 0 && size == 0) || this.size(value) < otherSize
  }
}

class lte extends gt {
  compare(value, otherValue) {
    let size = this.size(value);
    let otherSize = this.size(otherValue);

    return (otherSize == 0 && size == 0) || this.size(value) <= otherSize
  }
}

class max extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      max: this.max,
    }
  }

  get max() {
    return this.attributes[0]
  } 

  check(value) {
    if (!value) {
      return true
    }

    return this.size(value) <= this.max
  }
}

class mimes extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      values: this.accepted.join(', '),
    }
  }

  get accepted () {
    return Object.values(this.attributes).map(a=>a.toLowerCase())
  }

  check(value) {
    if (this.isFile && !value) {
      return true
    }

    if (!this.isFile || !(value instanceof File) || !value.name) {
      return false
    }

    var extension = value.name.split('.').pop();

    return this.accepted.indexOf(extension.toLowerCase()) !== -1
  }
}

class mimetypes extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      values: this.accepted.join(', '),
    }
  }

  get accepted () {
    return Object.values(this.attributes).map(a=>a.toLowerCase())
  }

  check(value) {
    if (this.isFile && !value) {
      return true
    }

    if (!this.isFile || !(value instanceof File) || !value.type) {
      return false
    }

    return this.accepted.indexOf(value.type.toLowerCase()) !== -1
  }
}

class min extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      min: this.min,
    }
  }

  get min() {
    return this.attributes[0]
  } 

  check(value) {
    if (!value) {
      return true
    }

    return this.size(value) >= this.min
  }
}

class not_in extends Validator {
  check(value) {
    return _.values(this.attributes).indexOf(value) === -1
  }
}

class not_regex extends Validator {
  check(value) {
    var regex = new RegExp(this.attributes[0].replace(/^\/|\/[^\/]*$/g, ''));

    return !regex.test(value)
  }
}

class nullable extends Validator {
  check(value) {
    return true
  }
}

class numeric extends Validator {
  check(value) {
    return !isNaN(parseFloat(value)) && isFinite(value) && !/\s/.test(String(value)) && !Boolean(String(value).match(/^0x[0-9a-f]+$/i))
  }
}

class regex extends Validator {
  check(value) {
    var regex = new RegExp(this.attributes[0].replace(/^\/|\/[^\/]*$/g, ''));

    return regex.test(value)
  }
}

class required extends Validator {
  check(value) {
    return this.filled(value)
  }
}

class same extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      other: this.other$.genericName,
    }
  }

  get otherPath() {
    return this.attributes[0]
  }

  get other$() {
    return this.form$.el$(replaceWildcards(this.otherPath, this.element$.path))
  }

  init() {
    this.watchOther();
  }

  check(value) {
    if (!this.filled(value) && !this.filled(this.other$.value)) {
      return true
    }

    return value == this.other$.value
  }
}

class size extends Validator {
  get messageParams() {
    return {
      attribute: this.attributeName,
      size: this.size_,
    }
  }

  get size_() {
    return this.attributes[0]
  } 

  check(value) {
    if (!value) {
      return true
    }

    return this.size(value) == this.size_
  }
}

class string extends Validator {
  check(value) {
    return _.isString(value)
  }
}

class timezone extends Validator {
  check(value) {
    try {
      Intl.DateTimeFormat(undefined, {timeZone: value});

      return true
    }
    catch (ex) {
      return false
    }
  }
}

class unique extends Validator {
  get isAsync() {
    return true
  }

  get requestParams() {
    var params = {};

    _.each(this.attributes, (param, key) => {
      var requestParam = key;

      if (!isNaN(key)) {
        requestParam = param;
      }

      if (requestParam == 'debounce') {
        return
      }

      var el = this.form$.el$(requestParam);

      // set the element value or the param name itself
      params[_.keys(params).length] = el && key != 0 ? el.value : requestParam;
    });

    return params
  }
  
  async check(value) {
    const endpoint = this.form$.$vueform.config.endpoints.unique;
    const method = endpoint.method;

    const res = await this.form$.$vueform.services.axios.request({
      url: endpoint.url,
      method,
      [method.toLowerCase() === 'get' ? 'params' : 'data']: {
        params: this.requestParams,
        value: value,
      },
    });

    return res.data
  }
}

class url extends Validator {
  check(value) {
    // https://gist.github.com/dperini/729294
    var regex = new RegExp(
      "^" +
      // protocol identifier (optional)
      // short syntax // still required
      "(?:(?:(?:https?|ftp):)?\\/\\/)" +
      // user:pass BasicAuth (optional)
      "(?:\\S+(?::\\S*)?@)?" +
      "(?:" +
      // IP address exclusion
      // private & local networks
      "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
      "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
      "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +
      // IP address dotted notation octets
      // excludes loopback network 0.0.0.0
      // excludes reserved space >= 224.0.0.0
      // excludes network & broacast addresses
      // (first & last IP address of each class)
      "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
      "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
      "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
      "|" +
      // host & domain names, may end with dot
      // can be replaced by a shortest alternative
      // (?![-_])(?:[-\\w\\u00a1-\\uffff]{0,63}[^-_]\\.)+
      "(?:" +
      "(?:" +
      "[a-z0-9\\u00a1-\\uffff]" +
      "[a-z0-9\\u00a1-\\uffff_-]{0,62}" +
      ")?" +
      "[a-z0-9\\u00a1-\\uffff]\\." +
      ")+" +
      // TLD identifier name, may end with dot
      "(?:[a-z\\u00a1-\\uffff]{2,}\\.?)" +
      ")" +
        // port number (optional)
      "(?::\\d{2,5})?" +
      // resource path (optional)
      "(?:[/?#]\\S*)?" +
      "$", "i"
    );

    return regex.test(value)
  }
}

class uuid extends Validator {
  check(value) {
    var regex = /^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/i;

    return regex.test(value)
  }
}

var rules = {
  accepted,
  active_url,
  after,
  after_or_equal,
  alpha,
  alpha_dash,
  alpha_num,
  array,
  before,
  before_or_equal,
  between,
  boolean,
  confirmed,
  date,
  date_equals,
  date_format,
  different,
  digits,
  digits_between,
  dimensions,
  distinct,
  email,
  exists,
  file,
  filled,
  gt,
  gte,
  image,
  in: in_,
  in_array,
  integer,
  ip,
  ipv4,
  ipv6,
  json,
  lt,
  lte,
  max,
  mimes,
  mimetypes,
  min,
  not_in,
  not_regex,
  nullable,
  numeric,
  regex,
  required,
  same,
  size,
  string,
  timezone,
  unique,
  url,
  uuid,
};

var validation = {
  factory: Factory,
  rules: rules
};

class messageBag {
  constructor(baseErrors) {
    this.baseErrors = baseErrors;
    
    this.prepends = {
      errors: [],
      messages: [],
    };
    this.appends = {
      errors: [],
      messages: [],
    };
  }

  get errors() {
    return _.concat(
      this.prepends.errors,
      this.baseErrors,
      this.appends.errors,
    )
  }

  get messages() {
    return _.concat(
      this.prepends.messages,
      this.appends.messages,
    )
  }

  /**
   * The first error
   * 
   * @type {string}
   */
  get error() {
    return _.head(this.errors)
  }

  /**
   * The first message
   * 
   * @type {string}
   */
  get message() {
    return _.head(this.messages)
  }

  prepend(msg, type) {
    if (type === undefined) {
      type = 'error';
    }

    this.prepends[type == 'error' ? 'errors' : 'messages'].unshift(msg);
  }

  append(msg, type) {
    if (type === undefined) {
      type = 'error';
    }

    this.appends[type == 'error' ? 'errors' : 'messages'].push(msg);
  }

  remove(msg, type) {
    if (type === undefined) {
      type = 'any';
    }

    if (['any', 'error'].indexOf(type) !== -1) {
      _.each(this.prepends.errors, (error, index) => {
        if (error == msg) {
          this.rm('prepends', 'errors', index);
        }
      });
      _.each(this.appends.errors, (error, index) => {
        if (error == msg) {
          this.rm('appends', 'errors', index);
        }
      });
    }

    if (['any', 'message'].indexOf(type) !== -1) {
      _.each(this.prepends.messages, (error, index) => {
        if (error == msg) {
          this.rm('prepends', 'messages', index);
        }
      });
      _.each(this.appends.messages, (error, index) => {
        if (error == msg) {
          this.rm('appends', 'messages', index);
        }
      });
    }
  }

  rm(group, type, index) {
    this[group][type].splice(index, 1);
  }

  clear(type) {
    if (type === undefined) {
      type = 'all';
    }

    if (type == 'all') {
      this.prepends = {
        errors: [],
        messages: [],
      };
      this.appends = {
        errors: [],
        messages: [],
      };
    } else {
      this.prepends[type] = [];
      this.appends[type] = [];
    }
  }

  clearPrepended(type) {
    if (type === undefined) {
      type = 'all';
    }

    if (type == 'all') {
      this.prepends = {
        errors: [],
        messages: [],
      };
    } else {
      this.prepends[type] = [];
    }
  }

  clearAppended(type) {
    if (type === undefined) {
      type = 'all';
    }

    if (type == 'all') {
      this.appends = {
        errors: [],
        messages: [],
      };
    } else {
      this.appends[type] = [];
    }
  }
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var autosize = createCommonjsModule(function (module, exports) {
/*!
	autosize 4.0.4
	license: MIT
	http://www.jacklmoore.com/autosize
*/
(function (global, factory) {
	{
		factory(module, exports);
	}
})(commonjsGlobal, function (module, exports) {

	var map = typeof Map === "function" ? new Map() : function () {
		var keys = [];
		var values = [];

		return {
			has: function has(key) {
				return keys.indexOf(key) > -1;
			},
			get: function get(key) {
				return values[keys.indexOf(key)];
			},
			set: function set(key, value) {
				if (keys.indexOf(key) === -1) {
					keys.push(key);
					values.push(value);
				}
			},
			delete: function _delete(key) {
				var index = keys.indexOf(key);
				if (index > -1) {
					keys.splice(index, 1);
					values.splice(index, 1);
				}
			}
		};
	}();

	var createEvent = function createEvent(name) {
		return new Event(name, { bubbles: true });
	};
	try {
		new Event('test');
	} catch (e) {
		// IE does not support `new Event()`
		createEvent = function createEvent(name) {
			var evt = document.createEvent('Event');
			evt.initEvent(name, true, false);
			return evt;
		};
	}

	function assign(ta) {
		if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

		var heightOffset = null;
		var clientWidth = null;
		var cachedHeight = null;

		function init() {
			var style = window.getComputedStyle(ta, null);

			if (style.resize === 'vertical') {
				ta.style.resize = 'none';
			} else if (style.resize === 'both') {
				ta.style.resize = 'horizontal';
			}

			if (style.boxSizing === 'content-box') {
				heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
			} else {
				heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
			}
			// Fix when a textarea is not on document body and heightOffset is Not a Number
			if (isNaN(heightOffset)) {
				heightOffset = 0;
			}

			update();
		}

		function changeOverflow(value) {
			{
				// Chrome/Safari-specific fix:
				// When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
				// made available by removing the scrollbar. The following forces the necessary text reflow.
				var width = ta.style.width;
				ta.style.width = '0px';
				// Force reflow:
				/* jshint ignore:start */
				ta.offsetWidth;
				/* jshint ignore:end */
				ta.style.width = width;
			}

			ta.style.overflowY = value;
		}

		function getParentOverflows(el) {
			var arr = [];

			while (el && el.parentNode && el.parentNode instanceof Element) {
				if (el.parentNode.scrollTop) {
					arr.push({
						node: el.parentNode,
						scrollTop: el.parentNode.scrollTop
					});
				}
				el = el.parentNode;
			}

			return arr;
		}

		function resize() {
			if (ta.scrollHeight === 0) {
				// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
				return;
			}

			var overflows = getParentOverflows(ta);
			var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

			ta.style.height = '';
			ta.style.height = ta.scrollHeight + heightOffset + 'px';

			// used to check if an update is actually necessary on window.resize
			clientWidth = ta.clientWidth;

			// prevents scroll-position jumping
			overflows.forEach(function (el) {
				el.node.scrollTop = el.scrollTop;
			});

			if (docTop) {
				document.documentElement.scrollTop = docTop;
			}
		}

		function update() {
			resize();

			var styleHeight = Math.round(parseFloat(ta.style.height));
			var computed = window.getComputedStyle(ta, null);

			// Using offsetHeight as a replacement for computed.height in IE, because IE does not account use of border-box
			var actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(computed.height)) : ta.offsetHeight;

			// The actual height not matching the style height (set via the resize method) indicates that 
			// the max-height has been exceeded, in which case the overflow should be allowed.
			if (actualHeight < styleHeight) {
				if (computed.overflowY === 'hidden') {
					changeOverflow('scroll');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			} else {
				// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
				if (computed.overflowY !== 'hidden') {
					changeOverflow('hidden');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			}

			if (cachedHeight !== actualHeight) {
				cachedHeight = actualHeight;
				var evt = createEvent('autosize:resized');
				try {
					ta.dispatchEvent(evt);
				} catch (err) {
					// Firefox will throw an error on dispatchEvent for a detached element
					// https://bugzilla.mozilla.org/show_bug.cgi?id=889376
				}
			}
		}

		var pageResize = function pageResize() {
			if (ta.clientWidth !== clientWidth) {
				update();
			}
		};

		var destroy = function (style) {
			window.removeEventListener('resize', pageResize, false);
			ta.removeEventListener('input', update, false);
			ta.removeEventListener('keyup', update, false);
			ta.removeEventListener('autosize:destroy', destroy, false);
			ta.removeEventListener('autosize:update', update, false);

			Object.keys(style).forEach(function (key) {
				ta.style[key] = style[key];
			});

			map.delete(ta);
		}.bind(ta, {
			height: ta.style.height,
			resize: ta.style.resize,
			overflowY: ta.style.overflowY,
			overflowX: ta.style.overflowX,
			wordWrap: ta.style.wordWrap
		});

		ta.addEventListener('autosize:destroy', destroy, false);

		// IE9 does not fire onpropertychange or oninput for deletions,
		// so binding to onkeyup to catch most of those events.
		// There is no way that I know of to detect something like 'cut' in IE9.
		if ('onpropertychange' in ta && 'oninput' in ta) {
			ta.addEventListener('keyup', update, false);
		}

		window.addEventListener('resize', pageResize, false);
		ta.addEventListener('input', update, false);
		ta.addEventListener('autosize:update', update, false);
		ta.style.overflowX = 'hidden';
		ta.style.wordWrap = 'break-word';

		map.set(ta, {
			destroy: destroy,
			update: update
		});

		init();
	}

	function destroy(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.destroy();
		}
	}

	function update(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.update();
		}
	}

	var autosize = null;

	// Do nothing in Node.js environment and IE8 (or lower)
	if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
		autosize = function autosize(el) {
			return el;
		};
		autosize.destroy = function (el) {
			return el;
		};
		autosize.update = function (el) {
			return el;
		};
	} else {
		autosize = function autosize(el, options) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], function (x) {
					return assign(x);
				});
			}
			return el;
		};
		autosize.destroy = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], destroy);
			}
			return el;
		};
		autosize.update = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], update);
			}
			return el;
		};
	}

	exports.default = autosize;
	module.exports = exports['default'];
});
});

class google {
  constructor() {
    this.autocomplete = null;
    this.autocompleteListener = null;
    this.options = {};
  }

  init(container, onChange, options) {
    if (window.google === undefined || window.google.maps === undefined || window.google.maps.places === undefined || window.google.maps.places.Autocomplete === undefined) ;

    this.options = options;

    this.autocomplete = new window.google.maps.places.Autocomplete(container, options);

    this.autocompleteListener = this.autocomplete.addListener('place_changed', () => {
      let place = this.autocomplete.getPlace();
      
      onChange(this.formatValue(place), place);
    });
  }

  destroy() {
    window.google.maps.event.removeListener(this.autocompleteListener);
    window.google.maps.event.clearInstanceListeners(this.autocomplete);

    let pac = document.querySelector('.pac-container');

    if (pac) {
      pac.remove();
    }
  }

  formatValue(value) {
    if (!_.isPlainObject(value)) {
      return value
    }

    let addressComponents = value.address_components;

    let street = this.addressComponent(addressComponents, 'street');
    let streetNumber = this.addressComponent(addressComponents, 'street_number');

    let address = null;

    if (street !== null) {
      address = street;
    }

    if (streetNumber !== null) {
      address += (street !== null ? ' ' : '') + streetNumber;
    }

    return {
      country: this.addressComponent(addressComponents, 'country'),
      country_code: this.addressComponent(addressComponents, 'country_code'),
      state: this.addressComponent(addressComponents, 'state'),
      state_code: this.addressComponent(addressComponents, 'state_code'),
      city: this.addressComponent(addressComponents, 'city'),
      zip: this.addressComponent(addressComponents, 'zip'),
      address: address,
      formatted_address: value.formatted_address || null,
      lat: value.geometry.location.lat() || null,
      lng: value.geometry.location.lng() || null,
    }
  }

  addressComponent(addressComponents, type) {
    let typeMap = {
      country: { field: 'country', type: 'long_name' },
      country_code: { field: 'country', type: 'short_name' },
      state: { field: 'administrative_area_level_1', type: 'long_name' },
      state_code: { field: 'administrative_area_level_1', type: 'short_name' },
      city: { field: 'locality', type: 'long_name' },
      zip: { field: 'postal_code', type: 'long_name' },
      street: { field: 'route', type: 'long_name' },
      street_number: { field: 'street_number', type: 'long_name' },
    };

    let addressComponent = null;

    _.each(addressComponents, (component) => {
      if (component.types.indexOf(typeMap[type].field) !== -1) {
        if (['state', 'state_code'].indexOf(type) !== -1 && this.addressComponent(addressComponents, 'country_code') != 'US') {
          return 
        }

        addressComponent = component[typeMap[type].type] || null;
      }
    });

    return addressComponent
  }
}

class algolia {
  constructor() {
    this.places = null;
    this.options = {};
  }

  init(container, onChange, options) {
    if (window.places === undefined) {
      throw new Error('Algolia Places API missing. Please include script in your project from https://community.algolia.com/places/documentation.html#cdn-script or install via npm and set to `window.places`.')
    }

    this.options = options;

    this.places = window.places(Object.assign({}, {
      container,
    }, options));

    this.places.on('change', (e) => {
      onChange(this.formatValue(e.suggestion), e.suggestion);
    });
  }
  
  destroy() {
    this.places.destroy();
  } 

  formatValue(value) {
    if (!_.isPlainObject(value)) {
      return value
    }

    return {
      country: value.country,
      country_code: value.countryCode ? value.countryCode.toUpperCase() : null,
      state: value.countryCode == 'us' ? value.administrative : null,
      state_code: value.countryCode == 'us' ? this.stateCode(value.administrative.toLowerCase()) : null,
      city: value.city,
      zip: value.postcode,
      address: value.name,
      formatted_address: value.value,
      lat: value.latlng.lat,
      lng: value.latlng.lng,
    }
  }

  stateCode(name) {
    let states = {
      AL: 'alabama', AK: 'alaska', AZ: 'arizona', AR: 'arkansas', CA: 'california', CO: 'colorado',
      CT: 'connecticut', DE: 'delaware', DC: 'district of columbia', FL: 'florida', GA: 'georgia',
      HI: 'hawaii', ID: 'idaho', IL: 'illinois', IN: 'indiana', IA: 'iowa', KS: 'kansas', KY: 'kentucky',
      LA: 'louisiana', ME: 'maine', MD: 'maryland', MA: 'massachusetts', MI: 'michigan', MN: 'minnesota',
      MS: 'mississippi', MO: 'missouri', MT: 'montana', NE: 'nebraska', NV: 'nevada', NH: 'new hampshire',
      NJ: 'new Jersey', NM: 'new Mexico', NY: 'new york', NC: 'north carolina', ND: 'north dakota',
      OH: 'ohio', OK: 'oklahoma', OR: 'oregon', PA: 'pennsylvania', RI: 'rhode Island', SC: 'south carolina',
      SD: 'south dakota', TN: 'tennessee', TX: 'texas', UT: 'utah', VT: 'vermont', VA: 'virginia',
      WA: 'washington', WV: 'west virginia', WI: 'wisconsin', WY: 'wyoming'
    };

    if (_.values(states).indexOf(name) === -1) {
      return null
    }

    return _.keys(states)[_.values(states).indexOf(name)]
  }
}

var location = {
  google,
  algolia,
};

// condition - condition information [otherPath, operator, expectedValue]
// elementPath - current
const check = (condition, elementPath, form$) => {
  let checkFunction = () => {
    return condition(form$)
  };

  let checkArray = () => {
    let { conditionPath, operator, expected } = details();

    // other
    let element$ = form$.el$(conditionPath);

    let hasCircularCondition = false;

    // other && currentPath
    if (element$ && elementPath) {
      _.each(element$.conditions, (condition) => {
        if (!Array.isArray(condition)) {
          return
        }

        if (condition[0] == elementPath) {
          hasCircularCondition = true;
        }
      });
    }

    if (!element$ || (!hasCircularCondition && !element$.available)) {
      return false
    }
    
    return compareValues(element$.value, expected, operator)
  };

  let details = () => {
    return {
      conditionPath: elementPath ? replaceWildcards(condition[0], elementPath) : condition[0],
      operator: condition.length == 3 ? condition[1] : '==',
      expected: condition.length == 3 ? condition[2] : condition[1],
    }
  };

  let compareValues = (actual, expected, operator) => {
    actual = normalize(actual);
    expected = normalize(expected);

    if (_.isArray(expected)) {
      if (operator.toLowerCase() === 'not_in') {
        // ['checkboxes', 'not_in', [1,2,3]]
        if (_.isArray(actual)) {
          return actual.filter(e => expected.includes(e)).length == 0

        // ['checkbox', 'not_in', [1,2,3]]
        } else {
          return expected.indexOf(actual) === -1
        }
      } else {
        // ['checkboxes', [1,2,3]]
        if (_.isArray(actual)) {
          return actual.filter(e => expected.includes(e)).length > 0

        // ['checkbox', [1,2,3]]
        } else {
          return expected.indexOf(actual) !== -1
        }
      }
    }
    
    return compare(actual, expected, operator)
  };
  
  if (typeof condition == 'function') {
    return checkFunction()
  }

  else if (_.isArray(condition)) {
    return checkArray()
  }

  throw new Error('Condition must be a function or an array')
};

var condition = {
  check
};

class i18n {
  constructor(options) {
    this.locales = options.locales;
    this.locale = options.locale;
    this.fallbackLocale = options.fallbackLocale;
  }

  $t(expr, data = {}) {
    let tag = _.get(this.locales[this.locale], expr) || expr;

    if (tag === expr) {
      tag = _.get(this.locales[this.fallbackLocale], expr) || expr;
    }

    _.each(data, (value, key) => {
      tag = tag.replace(':' + key, value);
    });

    _.each(data, (value, key) => {
      tag = tag.replace('{' + key + '}', value);
    });

    return tag
  }
}

class Columns
{
  defaultBreakpoint = 'default'

  constructor (columns, formColumns, configColumns, hasLabel, getClass) {
    this.columns = this.serialize(columns || {});
    this.formColumns = this.serialize(formColumns || {});
    this.configColumns = this.serialize(configColumns || {});
    this.hasLabel = hasLabel;
    this.getClass = getClass;

    this.cols = this.getCols();
  }

  get classes () {
    return {
      container: this.getClasses('container'),
      label: this.getClasses('label'),
      innerContainer: this.getClasses('innerContainer'),
      wrapper: this.getClasses('wrapper'),
    }
  }

  serialize(columns) {
    // columns: 8
    if (['number', 'string'].indexOf(typeof columns) !== -1) {
      return { [this.defaultBreakpoint]: { container: columns } }
    }

    // columns: { container: 8, container: { default: 8, lg: 8 } }
    if (typeof columns === 'object' && ['container', 'label', 'wrapper'].indexOf(Object.keys(columns)[0]) !== -1) {
      let serialized = {};

      _.each(columns, (size, type) => {
        // columns: { container: 8 }
        if (['number', 'string'].indexOf(typeof size) !== -1) {
          if (serialized[this.defaultBreakpoint] === undefined) {
            serialized[this.defaultBreakpoint] = {};
          }

          serialized[this.defaultBreakpoint][type] = size;
        }

        // columns: { container: { default: 8, lg: 8 } }
        else {
          _.each(size, (s, breakpoint) => {
            if (serialized[breakpoint] === undefined) {
              serialized[breakpoint] = {};
            }

            serialized[breakpoint][type] = s;
          });
        }
      });

      return serialized
    }

    // columns: { lg: 8, lg: { container: 8 } }
    else {
      let serialized = {};

      _.each(columns, (size, breakpoint) => {
        // columns: { lg: 8 }
        if (['number', 'string'].indexOf(typeof size) !== -1) {
          if (serialized[breakpoint] === undefined) {
            serialized[breakpoint] = {};
          }
          
          serialized[breakpoint].container = size;
        }
        
        // columns: { lg: { container: 8 } }
        else {
          serialized[breakpoint] = size;
        }
      });

      return serialized
    }
  }

  getNullClass () {
    return [this.getClass(this.defaultBreakpoint, 0)]
  }

  getClasses (type) {
    const classes = [];

    Object.keys(this.cols).forEach((breakpoint) => {
      let size;

      if (type === 'innerContainer') {
        size = this.cols[breakpoint].label;
        size = size >= 12 || !this.hasLabel ? 12 : 12 - size;
      } else {
        size = this.cols[breakpoint][type];

        if (type === 'label' && !this.hasLabel) {
          size = 0;
        }

        if (type === 'wrapper' && !this.hasLabel) {
          size += this.cols[breakpoint].label || 0;

          if (size > 12) {
            size = 12;
          }
        }
      }
        
      if (size !== undefined && !isNaN(size)) {
        classes.push(this.getClass(breakpoint, size));
      }
    });

    return classes
  }

  getCols() {
    return _.merge({},
      { [this.defaultBreakpoint]: { container: 12, label: 12, wrapper: 12 } },
      this.configColumns || {},
      this.formColumns || {},
      this.columns || {}
    )
  }
}

function installer(config, components) {
  const Vueform = class {
    constructor() {
      this.options = {
        config: _.omit(config, ['theme', 'templates', 'classes', 'locales', 'rules']),
        templates: config.templates || {},
        classes: config.classes || {},
        theme: config.theme || {},
        rules: config.rules || {},
        locales: config.locales || {},
        services: {
          validation,
          axios,
          messageBag,
          autosize,
          location,
          condition,
          columns: Columns,
        }
      };
    }

    config(config) {
      // merge
      _.each([
         'theme', 'templates', 'classes', 'locales', 'rules',
      ], (attr) => {
          if (config[attr] !== undefined) {
            this.options[attr] = Object.assign({}, this.options[attr], config[attr]);
          }
      });

      // merge
      _.each([
        'languages', 'services',
      ], (attr) => {
          if (config[attr] !== undefined) {
            this.options.config[attr] = Object.assign({}, this.options.config[attr], config[attr]);
          }
      });

      // deep merge
      _.each([
        'endpoints',
      ], (attr) => {
          if (config[attr] !== undefined) {
            this.options.config[attr] = _.merge({}, this.options.config[attr], config[attr]);
          }
      });
      
      // replace
      _.each([
        'columns', 'forceLabels', 'displayErrors', 'floatPlaceholders', 'displayErrors', 'displayMessages',
        'language', 'locale', 'fallbackLocale', 'orderFrom', 'validateOn', 'formData', 'beforeSend', 'axios',
        'locationProvider'
      ], (attr) => {
          if (config[attr] !== undefined) {
            this.options.config[attr] = config[attr];
          }
      });

      // Adding elements to theme components
      if (config.elements !== undefined) {
        this.options.theme.components = {
          ...this.options.theme.components,
        };

        Object.values(config.elements).forEach((element) => {
          this.options.theme.components = {
            ...this.options.theme.components,
            ...element.components,
          };
        });
      }
    }

    registerComponents(appOrVue) {
      _.each(components, (comp, name) => {
        const component = {...comp};

        component.setup = (props, context) => {
          context = Object.assign({}, context, {
            name: ref(name),
            emits: component.emits,
          });

          return comp.setup(props, context)
        };

        component.components = this.options.theme.templates[name].components || {};

        component.render = function() {
          return this.templates[name].render.apply(this, arguments)
        };

        component.staticRenderFns = function() {
          return this.templates[name].staticRenderFns
        };

        appOrVue.component(name, component);
      });
    }

    initAxios() {
      const $axios = this.options.services.axios;
      const axiosConfig = this.options.config.axios;
      const axiosConfigFlat = flat(this.options.config.axios);

      Object.keys(axiosConfigFlat).forEach((key) => {
        const value = axiosConfigFlat[key];

        if (['onUnauthenticated'].indexOf(key) === -1 && key.indexOf('csrfRequest.') === -1) {
          _.set($axios.defaults, key, value);
        }
      });

      $axios.interceptors.response.use(r => r, (error) => {
        if (!error.response) {
          return Promise.reject(error)
        }

        return new Promise((resolve, reject) => {
          const response = error.response;
          const originalRequest = response.config;

          if ([401, 419].indexOf(error.response.status) !== -1) {
            if (axiosConfig.csrfRequest && !originalRequest.CSRF) {
              $axios.request({
                ...axiosConfig.csrfRequest,
                CSRF: true,
              }).then(() => {
                resolve($axios.request({...originalRequest, CSRF: true }));
              }).catch((error) => {
                reject(error);
              });
            } else if (axiosConfig.onUnauthenticated) {
              axiosConfig.onUnauthenticated();
            } else {
              reject(error);
            }
          } else {
            reject(error);
          }
        })
      });
    }

    initI18n() {
      this.options.i18n = new i18n({
        locales: this.options.locales,
        locale: this.options.config.locale,
        fallbackLocale: this.options.config.fallbackLocale,
      });
    }

    install(appOrVue, options) {
      const version = parseInt(appOrVue.version.split('.')[0]);

      if (options) {
        this.config(options);
      }

      this.initAxios();
      this.initI18n();
      this.registerComponents(appOrVue);

      switch (version) {
        case 2:
          appOrVue.config.ignoredElements = ['trix-editor'];
          appOrVue.config.unwrapInjectedRef = true;

          const $vueform = this.options;

          if (!appOrVue.__VUEFORM__) {
            appOrVue.__VUEFORM__ = true;
            appOrVue.mixin({
              data() {
                return {
                  $vueform: {},
                }
              },
              methods: {
                __: (expr, data) => this.options.i18n.$t(expr, data)
              },
              beforeCreate() {
                // might exist as test mock
                if (!this.$vueform) {
                  this.$vueform = {
                    config: appOrVue.observable($vueform.config),
                    classes: $vueform.classes,
                    templates: $vueform.templates,
                    rules: $vueform.rules,
                    services: $vueform.services,
                    theme: $vueform.theme,
                  };
                }
              }
            });
          }
          break

        case 3:
          appOrVue.config.isCustomElement = (tag) => ['trix-editor'].indexOf(tag) !== -1;
          appOrVue.config.compilerOptions.isCustomElement = (tag) => ['trix-editor'].indexOf(tag) !== -1;

          appOrVue.config.unwrapInjectedRef = true;
          appOrVue.config.globalProperties.$vueform = this.options;
          appOrVue.provide('$vueform', this.options);

          appOrVue.mixin({
            methods: {
              $set(obj, key, value) {
                obj[key] = value;
              },
              $delete(obj, key) {
                delete obj[key];
              },
              __: (expr, data) => this.options.i18n.$t(expr, data)
            },
          });
          break
      }
    }
  };

  return new Vueform()
}

export { installer as default };
