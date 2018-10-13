'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var user = function user(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    eletedAt: 'deleted_at',
    tableName: 'users',
    timestamps: true,
    paranoid: true,
    underscored: true,
    defaultScope: {
      where: {}
    },
    scopes: {},
    freezeTableName: true,
    beforeCreate: async function beforeCreate(usr) {
      var salt = await _bcrypt2.default.genSalt(15);
      user.password = await _bcrypt2.default.hash(usr.password, salt);
    }
  });
  User.prototype.validPassword = async function (password) {
    return _bcrypt2.default.compare(password, undefined.password);
  };

  return User;
};

exports.default = user;