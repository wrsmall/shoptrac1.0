module.exports = function(sequelize, DataTypes) {
    var Task = sequelize.define("Task", {
      username:{  
        type:DataTypes.STRING,
        allowNull:false
      },
      vehicle: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      service: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      time:{
          type: DataTypes.STRING,
          allowNull:false
      },
      status:{
          type:DataTypes.STRING,
          defaultValue:"On time"
      },
      timecreated:{
        type: DataTypes.STRING,
        allowNull: false
        
      }
    });
  
    Task.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Task.belongsTo(models.Shop, {
        onDelete: "CASCADE",
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Task;
  };