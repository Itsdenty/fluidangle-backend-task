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
    key: 'createContact',

    /**
     *
     *
     * @static
     * @param {*} req
     * @param {*} res
     * @memberof contactController
     * @returns {*} createContact
     */
    value: async function createContact(req, res) {
      var contact = req.body.contact;

      contact.userId = req.decodedToken.id;
      try {
        var createContact = await _contact2.default.createContact(contact);
        res.send(_transformer2.default.transformResponse(1, 'ok', createContact));
      } catch (error) {
        res.send(_transformer2.default.transformResponse(0, 'ok', error));
      }
    }

    /**
     *
     *
     * @static
     * @param {*} req
     * @param {*} res
     * @memberof contactController
     * @returns {*} userContacts
     */

  }, {
    key: 'getContacts',
    value: async function getContacts(req, res) {
      var userId = req.decodedToken.id;
      try {
        var userContacts = await _contact2.default.getContacts(userId);
        res.send(_transformer2.default.transformResponse(1, 'ok', userContacts));
      } catch (error) {
        res.send(_transformer2.default.transformResponse(0, 'ok', error));
      }
    }

    /**
     *
     *
     * @static
     * @param {*} req
     * @param {*} res
     * @memberof contactController
     * @returns {*} userContacts
     */

  }, {
    key: 'getContact',
    value: async function getContact(req, res) {
      var userId = req.decodedToken.id;
      var id = req.params.id;

      try {
        var userContacts = await _contact2.default.getContact(userId, id);
        res.send(_transformer2.default.transformResponse(1, 'ok', userContacts));
      } catch (error) {
        res.send(_transformer2.default.transformResponse(0, 'ok', error));
      }
    }

    /**
     *
     *
     * @static
     * @param {*} req
     * @param {*} res
     * @memberof contactController
     * @returns {*} userContacts
     */

  }, {
    key: 'updateContact',
    value: async function updateContact(req, res) {
      var userId = req.decodedToken.id;
      var id = req.params.id;

      try {
        var userContacts = await _contact2.default.updateContact(userId, id, req.body.contact);
        res.send(_transformer2.default.transformResponse(1, 'ok', userContacts));
      } catch (error) {
        res.send(_transformer2.default.transformResponse(0, 'ok', error));
      }
    }

    /**
     *
     *
     * @static
     * @param {*} req
     * @param {*} res
     * @memberof contactController
     * @returns {*} deletedContact
     */

  }, {
    key: 'deleteContact',
    value: async function deleteContact(req, res) {
      var userId = req.decodedToken.id;
      var id = req.params.id;

      try {
        var deletedContact = await _contact2.default.deleteContact(userId, id);
        res.send(_transformer2.default.transformResponse(1, 'ok', deletedContact));
      } catch (error) {
        res.send(_transformer2.default.transformResponse(0, 'ok', error));
      }
    }

    /**
     *
     *
     * @static
     * @param {*} req
     * @param {*} res
     * @memberof contactController
     * @returns {*} starredContacts
     */

  }, {
    key: 'starContact',
    value: async function starContact(req, res) {
      var userId = req.decodedToken.id;
      var id = req.params.id;

      var update = { isStarred: true };
      try {
        var starredContact = await _contact2.default.starContact(userId, id, update);
        res.send(_transformer2.default.transformResponse(1, 'ok', starredContact));
      } catch (error) {
        res.send(_transformer2.default.transformResponse(0, 'ok', error));
      }
    }

    /**
     *
     *
     * @static
     * @param {*} req
     * @param {*} res
     * @memberof contactController
     * @returns {*} userContacts
     */

  }, {
    key: 'getStarredContacts',
    value: async function getStarredContacts(req, res) {
      var userId = req.decodedToken.id;
      try {
        var starredContacts = await _contact2.default.getStarredContacts(userId);
        res.send(_transformer2.default.transformResponse(1, 'ok', starredContacts));
      } catch (error) {
        res.send(_transformer2.default.transformResponse(0, 'ok', error));
      }
    }
  }]);

  return contactController;
}();

exports.default = contactController;