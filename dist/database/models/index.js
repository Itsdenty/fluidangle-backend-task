'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _continuationLocalStorage = require('continuation-local-storage');

var _continuationLocalStorage2 = _interopRequireDefault(_continuationLocalStorage);

var _sequelizeConfig = require('../../config/sequelize-config');

var _sequelizeConfig2 = _interopRequireDefault(_sequelizeConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var basename = _path2.default.basename(module.filename),
    config = (0, _sequelizeConfig2.default)().currentSQL,
    namespace = _continuationLocalStorage2.default.createNamespace('rcb-ns'),
    db = {};
var sequelize = {};

_sequelize2.default.useCLS(namespace);

if (config.use_env_variable) {
  sequelize = new _sequelize2.default(process.env[config.use_env_variable]);
} else {
  sequelize = new _sequelize2.default(config.database, config.username, config.password, config.options);
}

_fs2.default.readdirSync(__dirname).filter(function (file) {
  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
}).forEach(function (file) {
  var model = sequelize.import(_path2.default.join(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = _sequelize2.default;
db.namespace = namespace;
// db.sequelize.connectionManager.pool.start();
exports.default = db;