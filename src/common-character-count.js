const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let newStr = s2;
  s1.split('').forEach((el) => (newStr = newStr.replace(el, '')));
  return s2.length - newStr.length;
}

module.exports = {
  getCommonCharacterCount,
};
