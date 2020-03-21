module.exports = function(sequelize, DataType) {
  var Park = sequelize.define("Park", {
    name: {
      type: DataType.STRING,
      notNull: true,
      validate: {
        is: ["^[a-z]+$", "i"],
        len: [1, 255]
      }
    },
    address: {
      type: DataType.STRING,
      allowNull: true,
      validate: {
        notEmpty: true,
        is: /\b\d{1,6} +.{2,25}\b(avenue|ave|court|ct|street|st|drive|dr|lane|ln|road|rd|blvd|plaza|parkway|pkwy)[.,]?(.{0,25} +\b\d{5}\b)?/gi
      }
    },
    surface: {
      type: DataType.INTEGER,
      notNull: true,
      validate: {
        isInt: true
      }
    },
    dogPlayGround: {
      type: DataType.INTEGER,
      notNull: false,
      surface: {
        type: DataType.INTEGER
      }
    }
  });
  return Park;
};
