/* eslint-disable prettier/prettier */
module.exports = (sequelize, DataTypes) => {
  const Park = sequelize.define("Park", {
    name: DataTypes.STRING
  });

  Park.associate = (models) => {
    models.Park.hasMany(models.Event, {
      onDelete: "CASCADE"
    });
  };


  return Park;
};
