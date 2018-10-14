const contact = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    isStarred: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    timestamps: true,
    paranoid: true,
    underscored: true
  });
  Contact.associate = (models) => {
    Contact.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'User'
    });
  };
  return Contact;
};

export default contact;
