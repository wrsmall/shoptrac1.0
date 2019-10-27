var bcrypt= require('bcrypt');
module.exports = function (sequelize, DataTypes) {
 
  var Shop = sequelize.define("Shop", {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    techname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    onduty: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    level:{
      type: DataTypes.STRING,
    }

  });
 
  Shop.associate = function (models) {

    Shop.hasMany(models.Task, {
      onDelete: "CASCADE"
    });
  };
 
    
  
  return Shop;
  
};