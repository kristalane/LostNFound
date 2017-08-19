module.exports = function(sequelize, DataTypes) {
  var item = sequelize.define("lost_and_found", {
    type: DataTypes.STRING,
    size: DataTypes.STRING,
    color: DataTypes.STRING,
    attributes: DataTypes.STRING,
    location: DataTypes.POINT
  });
  return item;
};