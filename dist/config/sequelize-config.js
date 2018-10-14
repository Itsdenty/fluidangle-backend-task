'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _database = require('./database');

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var currentDB = function currentDB(env) {
  if (env === 'test') {
    _database2.default.currentSQL.database = 'test-fluid-angle-database';
    return _database2.default;
  }
  return _database2.default;
};
exports.default = currentDB;
// export default {
//   development: {
//     username: dbconfig.currentSQL.username,
//     password: dbconfig.currentSQL.password,
//     database: dbconfig.currentSQL.database,
//     host: dbconfig.currentSQL.options.host,
//     dialect: dbconfig.currentSQL.options.dialect
//   },
//   test: {
//     username: 'root',
//     password: null,
//     database: 'database_test',
//     host: '127.0.0.1',
//     dialect: 'mysql'
//   },
//   production: {
//     username: dbconfig.currentSQL.username,
//     password: dbconfig.currentSQL.password,
//     database: dbconfig.currentSQL.database,
//     host: dbconfig.currentSQL.options.host,
//     dialect: dbconfig.currentSQL.options.dialect
//   }
// };