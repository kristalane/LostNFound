module.exports = function(sequelize, DataTypes) {
	
  var item = sequelize.define("item", {
    itemtype: {
      type: DataTypes.STRING
    },
    color: {
      type: DataTypes.STRING
    },
    size: {
      type: DataTypes.STRING
    },
    attrib: {
      type: DataTypes.STRING
    },
    lost: {
      type: DataTypes.BOOLEAN
    },
    location: {
      type: DataTypes.STRING
    }
  });
  return item;
};
