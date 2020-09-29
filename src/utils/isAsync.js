/**
 * From:
 * https://stackoverflow.com/a/40539727/1276358
 */

export default function isAsync (func) {
  const string = func.toString().trim();

  return !!(string.match(/^async /) || string.match(/return _ref[^\.]*\.apply/))
}