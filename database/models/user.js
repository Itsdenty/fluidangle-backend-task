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
      set: (value) => {
        this.setDataValue('name', value.toUpperCase());
      },
      get: () => this.getDataValue('name').toLowerCase()
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      set: (value) => {
        this.setDataValue('name', value.toUpperCase());
      },
      get: () => this.getDataValue('name').toLowerCase()
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    eletedAt: 'deleted_at',
    tableName: 'states',
    timestamps: true,
    paranoid: true,
    underscored: true,
    defaultScope: {
      where: {
      }
    },
    scopes: {
    },
    beforeCreate: async (usr) => {
      const salt = await bcrypt.genSalt(15);
      user.password = await bcrypt.hash(usr.password, salt);
    }
  });

  User.prototype.validPassword = async password => bcrypt.compare(password, this.password);

  return User;
};


export default user;
