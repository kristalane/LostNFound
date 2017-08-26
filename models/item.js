module.exports = function(sequelize, DataTypes) {
  var Stuff = sequelize.define("stuff", {
    itemtype: {
      type: DataTypes.STRING,
      allowNull: false
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false
    },
    attrib: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lost: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "San Fancisco"
    }
  });
  return Stuff;
};
