'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../database/models');

var _models2 = _interopRequireDefault(_models);

var _createToken = require('../utils/createToken');

var _createToken2 = _interopRequireDefault(_createToken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var secretKey = process.env.JWT_SECRET;

/**
 * @description - Describes the Users of the app, their creation, their editing e.t.c.
 */

var userProcessor = function () {
  function userProcessor() {
    _classCallCheck(this, userProcessor);
  }

  _createClass(userProcessor, null, [{
    key: 'createUser',

    /**
     * @description - Creates a new user in the app and assigns a token to them
     * @param{Object} user - api request
     * @param{Object} res - route response
     * @return{json} the registered user's detail
     */
    value: async function createUser(user) {
      return new Promise(function (resolve, reject) {
        _models2.default.User.create(user).then(function (createdUser) {
          console.log(createdUser);
          var _id = createdUser._id,
              firstName = createdUser.firstName,
              lastName = createdUser.lastName,
              email = createdUser.email;
          // create the token after all the inputs are certified ok

          var authToken = _createToken2.default.token({
            _id: _id, firstName: firstName, lastName: lastName, email: email
          }, secretKey);
          var resp = {
            message: 'User created successfully',
            user: createdUser,
            token: authToken
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
     * @param{Object} req - api request
     * @param{Object} res - route response
     * @return{json} the user's login status
     */
    // static async loginUser (req) {
    //   const email = req.body.email.trim().toLowerCase();
    //   const findOneUser = `SELECT * FROM aUsers
    //                         WHERE email = $1`;
    //   // checks if a token was passed into the request header
    //   if (req.headers.authorization) {
    //     try {
    //       const token = req.headers.authorization.split(' ')[1];
    //       const decoded = jwt.verify(token, secretKey);
    //       req.userData = decoded.userid;
    //       if (req.userData !== null) {
    //         return {message: 'You are already logged in'};
    //       }
    //     }
    //     catch (error) {
    //       return {message: 'Token is invalid or has expired, Please re-login'};
    //     }
    //   }
    //   try {
    //     const client = await clientPool.connect();
    //     //find a user with the given email
    //     const user = await client.query({text : findOneUser, values: [email]});
    //     if (user.rows[0]) {
    //       const signedInUser = user.rows[0];
    //       //check it the password matches
    //       const correctPassword = await bcrypt.compare(req.body.password, user.rows[0].password);
    //       if( !correctPassword) {
    //         return { message: 'wrong password!'};
    //       }
    //       else {
    //         // creates a token that lasts for 24 hours
    //         const {
    //           userid, firstname, lastname
    //         } = user.rows[0];
    //         const authToken = createToken.token({ userid, firstname, lastname }, secretKey);
    //         return {
    //           message: 'You are logged in!',
    //           token: authToken,
    //           user: signedInUser
    //         };
    //       }
    //     }
    //   }
    //   catch(error){
    //     return{ message: 'An error occured'};
    //   }
    // }

  }]);

  return userProcessor;
}();

exports.default = userProcessor;