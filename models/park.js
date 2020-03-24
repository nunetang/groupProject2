module.exports = function(sequelize, DataTypes) {
  var Park = sequelize.define("Park", {
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
          args: [1, 100]
        }
      }
    },
    city: {
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
          args: [1, 100]
        }
      }
    },
    ocupacy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true
        },
        isInt: true,
        len: [0, 1000]
      }
    },
    dogPlayground: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    }
  });
  return Park;
};
