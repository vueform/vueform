import { vsprintf } from 'sprintf-js'

const utils = {

  clickedOutsideElement(elemId) {
    var theElem = utils.getEventTarget(window.event);
    while(theElem != null) {
      if(theElem.id == elemId)
        return false;
      theElem = theElem.offsetParent;
    }
    return true;
  },

  getEventTarget(evt) {
    var targ = (evt.target) ? evt.target : evt.srcElement;
    if(targ != null) {
      if(targ.nodeType == 3)
        targ = targ.parentNode;
    }
    return targ;
  },

  readFile(inputFile) {
    var reader = new FileReader();

    return new Promise((resolve, reject) => {
      reader.onerror = () => {
        reader.abort()
        reject(new DOMException("File cannot be parsed."))
      }

      reader.onloadend = (event) => {
        resolve(event.target.result)
      }

      reader.readAsDataURL(inputFile)
    })
  },

  extendTheme() {
    var final = {}

    _.each(arguments, (custom) => {
      var base = _.clone(final)
      
      Object.assign(final, base, {
        name: custom.name || base.name,
        classes: Object.assign({}, base.classes, custom.classes || {}),
        components: Object.assign({}, base.components, custom.components || {}),
        elements: Object.assign({}, base.elements, custom.elements || {}),
        grid: Object.assign({}, base.grid, custom.grid || {}),
        layouts: custom.layouts || base.layouts,
      })
    })

    return final
  },

	anyInArray(needles, haystack) {
		return needles.some(element => haystack.indexOf(element) !== -1)
	},

	normalizeArray(array) {
		var normalized = []

		_.forEach(array, (value) => {
			normalized.push(utils.normalize(value))
		})

		return normalized
	},

	normalize(value) {
		if (value === undefined || typeof value != 'string') {
			return value
		}

		// is number
		if (value.match(/^\d+$/)) {
			return parseInt(value, 10)

			// is float
		} else if (value.match(/^\d+\.\d+$/)) {
			return parseFloat(value)

			// everything else
		} else {
			return value
		}
	},

	// https://github.com/lodash/lodash/issues/2240#issuecomment-418820848
	flattenKeys(obj, path = []) {
		return !_.isObject(obj)
			? { [path.join('.')]: obj }
			: _.reduce(obj, (cum, next, key) => _.merge(cum, utils.flattenKeys(next, [...path, key])), {})
	},

	pregQuote(str, delimiter) {
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
	},

	replaceWildcards(fillable, fill) {
		return vsprintf(fillable.replace('.*', '%s'), fill.match(/\.[0-9]/))
	},

	compare(first, second, operator) {
		switch (operator) {
			case '=': return first == second; break
			case '!=': return first != second; break
			case '>': return first > second; break
			case '>=': return first >= second; break
			case '<': return first < second; break
			case '<=': return first <= second; break
		}

		throw Error('Unknown operator: ' + operator)
	},

	bytes2size(bytes) {
		var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

		if (bytes == 0) {
			return '0 Byte'
		}

		var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))

		return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i]
	},

	isJson(str) {
		try {
			JSON.parse(str);
		} catch (e) {
			return false;
		}

		return true;
	}
}

export default utils