/* eslint-disable prettier/prettier */
module.exports = function(sequelize, DataTypes) {
  var Owner = sequelize.define("Owner", {
    //Name of the dog cannot be null and only from letters restricted on limit of characters
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Required"
        },
        is: {
          args: ["^[a-z]+$", "i"],
          msg: "Only letters allowed"
        },
        len: {
          args: [1, 100],
          msg: "Name of the owner is not in this range"
        }
      }
    },
    petId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    zipCode: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  });

  Owner.associate = (models) => {
    models.Owner.belongsTo(models.User, {
      foreignKey: "id",
    });
  };
  return Owner;
};