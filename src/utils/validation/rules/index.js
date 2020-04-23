import Rule from './rule'
import utils from './../../index'
import validators from './validators'
import helpers from './helpers'
import gt from './gt'
import after from './after'

const rules = {
  // Accepted
  accepted: class extends Rule {
    validate(value) {
      var accepted = ['yes', 'on', '1', 1, true, 'true']

      return accepted.indexOf(value) !== -1
    }
  },

  // Active URL
  active_url: class extends Rule {
    get async() {
      return true
    }

    async validate(value) {
      var res = await axios.post(laraform.config.endpoints.validators.active_url, {
        url: value
      })

      return res.data
    }
  },

  // After(Date)
  after: after,

  // After Or Equal(Date)
  after_or_equal: class extends after {
    _checkDate(actual, other) {
      return moment(actual).format('X') >= moment(other).format('X')
    }
  },

  // Alpha
  alpha: class extends Rule {
    validate(value) {
      return /^[a-zA-Z]+$/.test(value)
    }
  },

  // Alpha Dash
  alpha_dash: class extends Rule {
    validate(value) {
      return /^[a-zA-Z0-9\-_]+$/.test(value)
    }
  },

  // Alpha Numeric
  alpha_num: class extends Rule {
    validate(value) {
      return /^[a-zA-Z0-9]+$/.test(value)
    }
  },

  // Array
  array: class extends Rule {
    validate(value) {
      return _.isArray(value)
    }
  },

  // Before(Date)
  before: class extends after {
    _checkDate(actual, other) {
      return moment(actual).format('X') < moment(other).format('X')
    }
  },

  // Before Or Equal(Date)
  before_or_equal: class extends after {
    _checkDate(actual, other) {
      return moment(actual).format('X') <= moment(other).format('X')
    }
  },

  // Between
  between: class extends Rule {
    get params() {
      return {
        0: 'min',
        1: 'max',
      }
    }

    selectMessage(message) {
      return helpers.selectSizeMessage(this, message)
    }

    validate(value) {
      if (!value) {
        return false
      }

      var min = this.attributes[0]
      var max = this.attributes[1]
      var size = helpers.getSize(this, value)

      return size >= min && size <= max
    }
  },

  // Boolean
  boolean: class extends Rule {
    validate(value) {
      var accepted = [true, false, 0, 1, '0', '1']

      return accepted.indexOf(value) !== -1
    }
  },

  // Confirmed
  confirmed: class extends Rule {
    init() {
      this.watchOther(this.element$.path + '_confirmation')
    }

    validate(value = this.element$.value) {
      if (!validators.filled(value) && !validators.filled(this.other.value)) {
        return true
      }

      return value == this.other.value
    }
  },

  // Date
  date: class extends Rule {
    validate(value) {
      return !isNaN(Date.parse(value))
    }
  },

  // Date Equals
  date_equals: class extends Rule {
    get params() {
      return {
        0: 'date'
      }
    }

    validate(value) {
      return moment(expected).diff(actual) === 0
    }
  },

  // Date Format
  date_format: class extends Rule {
    get params() {
      return {
        0: 'format'
      }
    }

    validate(value) {
      var expected = moment(value).format(this.attributes[0])

      return expected === value
    }
  },

  // Different
  different: class extends Rule {
    get params() {
      return {
        0: 'other',
      }
    }

    init() {
      this.watchOther(this.attributes[0])
    }

    validate(value = this.element$.value) {
      if (!validators.filled(value) && !validators.filled(this.other.value)) {
        return false
      }

      return value != this.other.value
    }
  },

  // Digits
  digits: class extends Rule {
    get params() {
      return {
        0: 'digits'
      }
    }

    validate(value) {
      return /^\d+$/.test(value) && value.toString().length == this.attributes[0]
    }
  },

  // Digits Between
  digits_between: class extends Rule {
    get params() {
      return {
        0: 'min',
        1: 'max',
      }
    }

    validate(value) {
      var length = value.toString().length

      return /^\d+$/.test(value)
        && length >= this.attributes[0]
        && length <= this.attributes[1]
    }
  },

  // Dimensions(Image Files)
  dimensions: class extends Rule {
    get async() {
      return true
    }

    readImage(inputFile) {
      var reader = new FileReader();

      return new Promise((resolve, reject) => {
        reader.onerror = () => {
          temporaryFileReader.abort();
          reject(new DOMException("File cannot be parsed."));
        };

        reader.onloadend = (event) => {
          resolve(event.target.result);
        };

        reader.readAsDataURL(inputFile);
      });
    }

    async loadImage(value) {
      var source = await this.readImage(value)

      var image = new Image();

      return new Promise((resolve, reject) => {
        image.onerror = () => {
          reject(new DOMException("Image could not be loaded."));
        };

        image.onload = (event) => {
          resolve(event.target);
        };

        image.src = source;
      });
    }

    async validate(value) {
      if (!value || !value instanceof File) {
        return false
      }

      var image = await this.loadImage(value)

      if (_.has(this.attributes, 'min_width')) {
        if (image.width < this.attributes['min_width']) {
          return false
        }
      }

      if (_.has(this.attributes, 'max_width')) {
        if (image.width > this.attributes['max_width']) {
          return false
        }
      }

      if (_.has(this.attributes, 'min_height')) {
        if (image.height < this.attributes['min_height']) {
          return false
        }
      }

      if (_.has(this.attributes, 'max_height')) {
        if (image.height > this.attributes['max_height']) {
          return false
        }
      }

      if (_.has(this.attributes, 'width')) {
        if (image.width !== this.attributes['width']) {
          return false
        }
      }

      if (_.has(this.attributes, 'height')) {
        if (image.height !== this.attributes['height']) {
          return false
        }
      }

      if (_.has(this.attributes, 'ratio')) {
        var ratio = this.attributes['ratio']
        var precision = 1 / Math.max(image.width, image.height)

        if (/\//.test(ratio)) {
          var numerator = ratio.split('/')[0]
          var denominator = ratio.split('/')[1]

          ratio = numerator / denominator
        }

        if (Math.abs(ratio - image.width / image.height) > precision) {
          return false
        }
      }

      return true
    }
  },

  // Distinct
  distinct: class extends Rule {
    validate(value) {
      var attribute = this.element$.path
      var attributeName = attribute.replace(/\d+(?!\d+)/, '*')
      var rootVariable = attribute.match(/^[\w-]+/)[0]
      var attributeData = {
        [rootVariable]: this.form$.data[rootVariable]
      }

      var pattern = utils.pregQuote(attributeName, '#').replace('\\*', '[^.]+')

      var data = {}

      _.each(utils.flattenKeys(attributeData), (v, k) => {
        if (k != attribute && k.match('^' + pattern + '$') !== null) {
          data[k] = v
        }
      })

      return !(_.values(data).indexOf(value) !== -1)
    }
  },

  // E-Mail
  email: class extends Rule {
    validate(value) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      return re.test(String(value).toLowerCase());
    }
  },

  // Exists (Database)
  exists: class extends Rule {
    get async() {
      return true
    }

    get requestParams() {
      var params = {}

      _.each(this.attributes, (param, key) => {
        var requestParam = key

        if (!isNaN(key)) {
          requestParam = param
        }

        if (requestParam == 'debounce') {
          return
        }

        var el = this.form$.el$(requestParam)

        // set the element value or the param name itself
        params[_.keys(params).length] = el ? el.value : requestParam
      })

      return params
    }

    async validate(value) {
      var name = this.element$.name

      var res = await axios.post(laraform.config.endpoints.validators.exists, {
        params: this.requestParams,
        [name]: value,
        laraformFieldName: name
      })

      return res.data
    }
  },

  // File
  file: class extends Rule {
    validate(value) {
      return value instanceof File
    }
  },

  // Filled
  filled: class extends Rule {
    validate(value) {
      return validators.filled(value)
    }
  },

  // Greater Than
  gt: gt,

  // Greater Than Or Equal
  gte: class extends gt {
    validate(value) {
      var type = helpers.getValueType(this)

      helpers.requireSameType(value, this.other.value)

      var thisValue = helpers.getSizeByType(value, type)
      var otherValue = helpers.getSizeByType(this.other.value, type)

      return thisValue >= otherValue
    }
  },

  // Image (File)
  image: class extends Rule {
    validate(value) {
      return validators.mimes(value, ['jpeg', 'jpg', 'png', 'gif', 'bmp', 'svg'])
    }
  },

  // In
  in: class extends Rule {
    validate(value) {
      return _.values(this.attributes).indexOf(value) !== -1
    }
  },

  // In Array
  in_array: class extends Rule {
    get params() {
      return {
        0: 'other'
      }
    }

    init() {
      var attribute = this.attributes[0]

      var matches = attribute.match(/.*(?=\.\*)/)

      if (matches === null) {
        throw new Error('in_array rule\'s other attribute should end with .*')
      }

      this.watchOther(matches[0])
    }

    validate(value) {
      var data = this.other.value

      if (!data) {
        return false
      }

      return data.indexOf(value) !== -1
    }
  },

  // Integer
  integer: class extends Rule {
    validate(value) {
      return Number.isInteger(helpers.normalize(value))
    }
  },

  // IP Address
  ip: class extends Rule {
    validate(value) {
      return validators.ipv4(value) || validators.ipv6(value)
    }
  },

  // IPv4 Address
  ipv4: class extends Rule {
    validate(value) {
      return validators.ipv4(value)
    }
  },

  // IPv6 Address
  ipv6: class extends Rule {
    validate(value) {
      return validators.ipv6(value)
    }
  },

  // JSON
  json: class extends Rule {
    validate(value) {
      return utils.isJson(value)
    }
  },

  // Less Than
  lt: class extends gt {
    validate(value) {
      var type = helpers.getValueType(this)

      helpers.requireSameType(value, this.other.value)

      var thisValue = helpers.getSizeByType(value, type)
      var otherValue = helpers.getSizeByType(this.other.value, type)

      return thisValue < otherValue
    }
  },

  // Less Than Or Equal
  lte: class extends gt {
    validate(value) {
      var type = helpers.getValueType(this)

      helpers.requireSameType(value, this.other.value)

      var thisValue = helpers.getSizeByType(value, type)
      var otherValue = helpers.getSizeByType(this.other.value, type)

      return thisValue <= otherValue
    }
  },

  // Max
  max: class extends Rule {
    get params() {
      return {
        0: 'max'
      }
    }

    selectMessage(message) {
      return helpers.selectSizeMessage(this, message)
    }

    validate(value) {
      if (!value) {
        return true
      }

      var min = this.attributes[0]
      var size = helpers.getSize(this, value)

      return size <= min
    }
  },

  // MIME Types
  mimetypes: class extends Rule {
    validate(value) {
      if (!value || !value.type) {
        return false
      }

      var accepted = _.values(this.attributes)
      var mime = value.type

      return accepted.indexOf(mime) !== -1
    }
  },

  // MIME Type By File Extension
  mimes: class extends Rule {
    validate(value) {
      return validators.mimes(value, _.values(this.attributes))
    }
  },

  // Min
  min: class extends Rule {
    get params() {
      return {
        0: 'min'
      }
    }

    selectMessage(message) {
      return helpers.selectSizeMessage(this, message)
    }

    validate(value) {
      if (!value) {
        return true
      }

      var min = this.attributes[0]
      var size = helpers.getSize(this, value)

      return size >= min
    }
  },

  // Not In
  not_in: class extends Rule {
    validate(value) {
      return _.values(this.attributes).indexOf(value) === -1
    }
  },

  // Not Regex
  not_regex: class extends Rule {
    validate(value) {
      var regex = new RegExp(this.attributes[0].replace(/^\/|\/[^\/]*$/g, ''))

      return !regex.test(value)
    }
  },

  // Numeric
  numeric: class extends Rule {
    validate(value = this.element$.value) {
      return !isNaN(parseFloat(value)) && isFinite(value);
    }
  },

  // Regular Expression
  regex: class extends Rule {
    validate(value) {
      var regex = new RegExp(this.attributes[0].replace(/^\/|\/[^\/]*$/g, ''))

      return regex.test(value)
    }
  },

  // Required
  required: class extends Rule {
    validate(value = this.element$.value) {
      return validators.filled(value)
    }
  },

  // Required If
  required_if: class extends Rule {
    get params() {
      return {
        0: 'other',
        1: 'value'
      }
    }

    get valuesParam() {
      var attributes = _.clone(this.attributes)

      delete attributes[0]

      return Object.values(attributes).join(', ')
    }

    init() {
      this.watchOther(this.attributes[0])
    }

    validate(value = this.element$.value) {
      var acceptedValues = _.clone(this.attributes)

      delete acceptedValues[0]

      if (_.values(acceptedValues).indexOf(this.other.value) === -1) {
        return true
      }

      return validators.filled(value)
    }
  },

  // Required Unless
  required_unless: class extends Rule {
    get params() {
      return {
        0: 'other',
        1: 'value'
      }
    }

    get valuesParam() {
      var attributes = _.clone(this.attributes)

      delete attributes[0]

      return Object.values(attributes).join(', ')
    }

    init() {
      this.watchOther(this.attributes[0])
    }

    validate(value = this.element$.value) {
      var acceptedValues = _.clone(this.attributes)

      delete acceptedValues[0]

      if (_.values(acceptedValues).indexOf(this.other.value) !== -1) {
        return true
      }

      return validators.filled(value)
    }
  },

  // Same
  same: class extends Rule {
    get params() {
      return {
        0: 'other',
      }
    }

    init() {
      this.watchOther(this.attributes[0])
    }

    validate(value = this.element$.value) {
      if (!validators.filled(value) && !validators.filled(this.other.value)) {
        return true
      }

      return value == this.other.value
    }
  },

  // Size
  size: class extends Rule {
    get params() {
      return {
        0: 'size',
      }
    }

    selectMessage(message) {
      return helpers.selectSizeMessage(this, message)
    }

    validate(value) {
      if (!value) {
        return true
      }

      var expectedSize = this.attributes[0]
      var size = helpers.getSize(this, value)

      return size == expectedSize
    }
  },

  // String
  string: class extends Rule {
    validate(value) {
      return _.isString(value)
    }
  },

  // Timezone
  timezone: class extends Rule {
    validate(value) {
      return !!moment.tz.zone(value)
    }
  },

  // Unique(Database)
  unique: class extends Rule {
    get async() {
      return true
    }

    get requestParams() {
      var params = {}

      _.each(this.attributes, (param, key) => {
        var requestParam = key

        if (!isNaN(key)) {
          requestParam = param
        }

        if (requestParam == 'debounce') {
          return
        }

        var el = this.form$.el$(requestParam)

        // set the element value or the param name itself
        params[_.keys(params).length] = el ? el.value : requestParam
      })

      return params
    }
    
    async validate(value) {
      var res = await axios.post(laraform.config.endpoints.validators.unique, {
        params: this.requestParams,
        value: value
      })

      return res.data
    }
  },

  // URL
  url: class extends Rule {
    validate(value) {
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
  },

  // UUID
  uuid: class extends Rule {
    validate(value) {
      var regex = /^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/i

      return regex.test(value)
    }
  },
}

export default rules