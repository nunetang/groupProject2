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
    lastName: {
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
          msg: "Last Name of the owner is not in this range"
        }
      }
    },
    yearsOfExperience: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true
        },
        isInt: true,
        len: [0, 100]
      }
    },
    dogCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 500]
      }
    }
  });
  return Owner;
};
