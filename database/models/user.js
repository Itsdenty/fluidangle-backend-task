import bcrypt from 'bcrypt';

const user = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    tableName: 'users',
    timestamps: true,
    paranoid: true,
    underscored: true,
    defaultScope: {
      where: {
      }
    },
    scopes: {
    },
    freezeTableName: true,
    beforeCreate: async (usr) => {
      const salt = await bcrypt.genSalt(15);
      user.password = await bcrypt.hash(usr.password, salt);
    },
  });
  User.prototype.validPassword = async function validPassword(password) {
    bcrypt.compare(password, this.password);
  };

  return User;
};


export default user;
