'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _contact = require('../../../controllers/contact');

var _contact2 = _interopRequireDefault(_contact);

var _contact3 = require('../../../middlewares/validators/contact');

var _contact4 = _interopRequireDefault(_contact3);

var _auth = require('../../../middlewares/auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/', _auth2.default.verifyToken, _contact4.default.create, _contact2.default.createContact);
router.patch('/:id', _auth2.default.verifyToken, _contact4.default.update, _contact2.default.updateContact);
router.get('/', _auth2.default.verifyToken, _contact2.default.getContacts);
router.get('/:id', _auth2.default.verifyToken, _contact2.default.getContact);
exports.default = router;