/* eslint-disable prettier/prettier */
//Creating our Dog Model
module.exports = function(sequelize, DataTypes) {
  var Dog = sequelize.define("Dog", {
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
          msg: "Name of the dog is not in this range"
        }
      }
    },
    // Age of our dog also cannot be null and restricted by length
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Age of the dog is required"
        },
        isInt: true,
        len: [1, 25]
      }
    },
    //Weight required so that dogs of similar size socialize together
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1, 500]
      }
    },
    //Gender choices limited to male, female
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [["male", "female"]]
      }
    },
    color: {
      type: DataTypes.STRING
    },
    longFur: {
      type: DataTypes.BOOLEAN
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      specifications: DataTypes.STRING,
      validate: {
        isString: true,
        len: [1, 250],
        notEmpty: true
      }
    },
    //Dogs with similar energy levels should socialize together
    energetic: {
      type: DataTypes.INTEGER,
      notEmpty: true,
      validate: {
        isNumeric: true,
        len: {
          args: [0, 10],
          msg: "Scale of 0-10, how energetic is your pup?"
        }
      }
    },
    //Aggressive metric required for safety of other pets and pet owners
    aggressive: {
      type: DataTypes.INTEGER,
      notEmpty: true,
      validate: {
        len: {
          args: [0, 10],
          msg: "Scale of 0-10, how aggressive is your pup?"
        }
      }
    },
    //Dogs with similar social scores may be a better match for one another
    social: {
      type: DataTypes.INTEGER,
      notEmpty: true,
      validate: {
        isNumeric: true,
        len: {
          args: [0, 10],
          msg: "Scale of 0-10, how social is your pup?"
        }
      }
    }
  });
  Dog.associate = (models) => {
    models.Dog.belongsTo(models.Owner, {
      foreignKey: "petId",
    });
  };
  return Dog;
};
