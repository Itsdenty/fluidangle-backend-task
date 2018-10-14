'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../database/models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @description - Describes the Users of the app, their creation, their editing e.t.c.
 */
var contactProcessor = function () {
  function contactProcessor() {
    _classCallCheck(this, contactProcessor);
  }

  _createClass(contactProcessor, null, [{
    key: 'createContact',

    /**
     * @description - Creates a new contact for a user
     * @param{Object} contact - api request
     * @param{Object} res - route response
     * @return{json} the registered user's detail
     */
    value: async function createContact(contact) {
      return new Promise(function (resolve, reject) {
        _models2.default.Contact.create(contact).then(function (createdContact) {
          var resp = {
            message: 'Contact created successfully',
            contact: createdContact
          };
          resolve(resp);
        }).catch(_models2.default.Sequelize.ValidationError, function (error) {
          reject(error.errors);
        }).catch(function (error) {
          return reject(error);
        });
      });
    }

    /**
     * @description - Signs a user in by creating a session token
     * @param{Object} userId - api request
     * @param{Object} res - route response
     * @return{json} the user's login status
     */

  }, {
    key: 'getContacts',
    value: async function getContacts(userId) {
      return new Promise(function (resolve, reject) {
        _models2.default.Contact.findAll({ where: { userId: userId } }).then(function (contacts) {
          var resp = {
            message: 'User contacts retrieved successfully successfully',
            contacts: contacts
          };
          resolve(resp);
        }).catch(_models2.default.Sequelize.ValidationError, function (error) {
          console.log(error);
          reject(error.errors);
        }).catch(function (error) {
          console.log(error);
          reject(error);
        });
      });
    }
  }]);

  return contactProcessor;
}();

exports.default = contactProcessor;