/* eslint-disable prettier/prettier */
module.exports = (sequelize, DataTypes) => {
  const Dog = sequelize.define("Dog", {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    color: DataTypes.STRING,
    longFur: DataTypes.STRING,
    bio: DataTypes.TEXT,
    type: DataTypes.STRING,
    energetic: DataTypes.INTEGER,
    aggressive: DataTypes.INTEGER,
    social: DataTypes.INTEGER,
    profileImage: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },
  });

  Dog.associate = (models) => {
    models.Dog.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
      }
    });
  };
  return Dog;
};
