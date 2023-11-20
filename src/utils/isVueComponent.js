import isPlainObject from 'lodash/isPlainObject'

/**
 * From: https://github.com/fengyuanchen/is-vue-component/blob/master/src/index.js
 */

const { hasOwnProperty, toString } = Object.prototype;

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

function isNonNullObject(value) {
  return !!value;
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
export default function isVueComponent(value) {
  /* istanbul ignore next */
  return (isPlainObject(value) && (
    isNonEmptyString(value.template)
    || isFunction(value.render)
    || isNonEmptyString(value.el)
    || isElement(value.el)
    || isVueComponent(value.extends)
    || (isNonEmptyArray(value.mixins) && value.mixins.some(val => isVueComponent(val)))
  )) || (typeof value === 'function' &&  value.prototype && value.prototype.constructor.name === 'VueComponent' );
}