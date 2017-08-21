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
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lost: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  });
  return Stuff;
  // return {
  //   /**
  //    * Delete the stuff with the given Id
  //    * @param int id
  //    * @return Promise
  //    */
  //   deleteStuff(id){
  //     return Stuff.delete({where: {id: id}});
  //   }
  // };
};
