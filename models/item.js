module.exports = function(sequelize, DataTypes) {
  var Stuff = sequelize.define("stuff", {
    itemtype: DataTypes.STRING,
    size: DataTypes.STRING,
    color: DataTypes.STRING,
    attrib: DataTypes.STRING,
    location: DataTypes.POINT
  });
  return Stuff;
};
