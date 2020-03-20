//Creating our Dog Model
module.exports = function (sequelize, DataTypes) {
    var Dog = sequelize.define("Dog", {
        //Name of the  dog  cannot be null and   only  from latters restricted  on  limit of characters
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
                    msg: "Name of the  dog is not in this range"
                }
            }
        },
        // Age of  our   dog also cannot  be null and restricted   by lenght
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
        gender: {
            type: DataTypes.BOOLEAN
        },
        color: {
            type: DataTypes.STRING
        },
        longFur: {
            type: DataTypes.BOOLEAN
        },
        discription: {
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
        hyper: {
            type: DataTypes.INTEGER,
            notEmpty: true,
            validate: {
                isNumeric: true
            }
        },
        patient: {
            type: DataTypes.INTEGER,
            notEmpty: true,
            validate: {
                isNumeric: true
            }
        }
    });
    return Dog;
};
