'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var transformer = {};

transformer.transformResponse = function (responseCode, responseText, payload) {
  if (!payload) {
    payload = {};
  }

  return {
    responseCode: responseCode,
    responseText: responseText,
    payload: payload
  };
};

/**
 *
 * @param {Array} errors
 * @return {string} msgs
 * @description transforms errors generated by express validator to
 * a single message string with each message separated by '|'
 */
transformer.transformExpressValidationErrors = function (errors) {
  var msgs = '';

  if (!Array.isArray(errors)) return msgs;

  errors.forEach(function (item) {
    msgs += (item.msg || '') + ' \'|\'\'';
  });

  return msgs;
};

exports.default = transformer;