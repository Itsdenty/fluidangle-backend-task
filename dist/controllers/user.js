'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _transformer = require('../utils/transformer');

var _transformer2 = _interopRequireDefault(_transformer);

var _user = require('../processors/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 *
 * @class userController
 */
var userController = function () {
  function userController() {
    _classCallCheck(this, userController);
  }

  _createClass(userController, null, [{
    key: 'userCreate',

    /**
     *
     *
     * @static
     * @param {*} req
     * @param {*} res
     * @memberof userController
     * @returns {*} createUser
     */
    value: async function userCreate(req, res) {
      var user = req.body.user;

      try {
        var createUser = await _user2.default.createUser(user);
        res.send(_transformer2.default.transformResponse(1, 'ok', createUser));
      } catch (error) {
        res.send(_transformer2.default.transformResponse(1, 'ok', error));
      }
    }

    // static async userLogin  (req, res) {
    //   try{
    //     const loginUser = await processor.loginUser(req);
    //     res.send(transformer.transformResponse(1, 'ok', loginUser));
    //   }
    //   catch(error) {
    //     res.send(transformer.transformResponse(1, 'ok', error))
    //   }
    // };

    // static userLogout (req, res) {
    //   res.send(transformer.transformResponse(1, 'ok', 'user logged out'));
    // };

  }]);

  return userController;
}();

exports.default = userController;