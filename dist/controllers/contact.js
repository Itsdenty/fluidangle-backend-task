'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _transformer = require('../utils/transformer');

var _transformer2 = _interopRequireDefault(_transformer);

var _contact = require('../processors/contact');

var _contact2 = _interopRequireDefault(_contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 *
 * @class contactController
 */
var contactController = function () {
  function contactController() {
    _classCallCheck(this, contactController);
  }

  _createClass(contactController, null, [{
    key: 'contactCreate',

    /**
     *
     *
     * @static
     * @param {*} req
     * @param {*} res
     * @memberof contactController
     * @returns {*} createContact
     */
    value: async function contactCreate(req, res) {
      var contact = req.body.contact;

      contact.userId = req.decodedToken.id;
      try {
        var createContact = await _contact2.default.createContact(contact);
        res.send(_transformer2.default.transformResponse(1, 'ok', createContact));
      } catch (error) {
        res.send(_transformer2.default.transformResponse(0, 'ok', error));
      }
    }
  }]);

  return contactController;
}();

exports.default = contactController;