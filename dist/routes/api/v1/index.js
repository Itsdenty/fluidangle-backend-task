'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _swaggerJsdoc = require('swagger-jsdoc');

var _swaggerJsdoc2 = _interopRequireDefault(_swaggerJsdoc);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _contact = require('./contact');

var _contact2 = _interopRequireDefault(_contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// Swagger jsdoc configuration
var swaggerDefinition = {
  info: {
    title: 'Node Swagger API',
    version: '1.0.0',
    description: 'Api documentation for the TSS inventory app.'
  },
  host: 'localhost:3100/',
  basePath: 'api/v1'
};

// options for the swagger docs
var options = {

  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,

  // path to the API docs
  apis: ['./swagger/*.js']

};

// initialize swagger-jsdoc
var swaggerSpec = (0, _swaggerJsdoc2.default)(options);

router.get('/swagger.json', function (req, res) {
  res.header('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

router.get('/', function (req, res) {
  res.send('You\'ve reached api/v1 routes');
});
router.use('/user', _user2.default);
router.use('/contact', _contact2.default);

exports.default = router;