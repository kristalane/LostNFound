module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("lost_and_found", {
    name: DataTypes.STRING,
    item: DataTypes.STRING
  });
  return user;
};