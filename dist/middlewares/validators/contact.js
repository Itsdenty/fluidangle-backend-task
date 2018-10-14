'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _transformer = require('../../utils/transformer');

var _transformer2 = _interopRequireDefault(_transformer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Validator = {};

Validator.create = function (req, res, next) {
  req.checkBody('contact.firstName', 'Please enter a valid firstName').notEmpty().isHumanName();
  req.checkBody('contact.lastName', 'Please supply a valid lastName').notEmpty().isHumanName();
  req.checkBody('contact.email', 'please supply a valid email').notEmpty().isEmailV2();
  req.checkBody('contact.phoneNumber', 'Please supply a valid phone number').notEmpty().isMinLen(11).isMaxLen(13);
  req.asyncValidationErrors().then(next).catch(function (errors) {
    return res.status(400).json(_transformer2.default.transformResponse(0, _transformer2.default.transformExpressValidationErrors(errors), errors));
  });
};

Validator.update = function (req, res, next) {
  req.checkBody('contact.firstName', 'Please enter a valid firstName').optional().isHumanName();
  req.checkBody('contact.lastName', 'Please supply a valid lastName').optional().isHumanName();
  req.checkBody('contact.email', 'please supply a valid email').optional().isEmailV2();
  req.checkBody('contact.phoneNumber', 'Please supply a valid phone number').optional().isMinLen(11).isMaxLen(13);
  req.asyncValidationErrors().then(next).catch(function (errors) {
    return res.status(400).json(_transformer2.default.transformResponse(0, _transformer2.default.transformExpressValidationErrors(errors), errors));
  });
};
exports.default = Validator;