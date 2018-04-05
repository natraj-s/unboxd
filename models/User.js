// Dependencies
// =============================================================

Article = require("./Article");

module.exports = function(sequelize, Sequelize) {

    // Creates a "Login" model that matches up with DB
    var User = sequelize.define("User", {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
    
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },

      resettoken: {
        type: Sequelize.STRING
      }
      
    }, {
        timestamps: false
    });
    
    // User.associate = function(models) {
    //   models.User.belongsTo(models.Article,  { 
    //     foreignKey: "id"
    //   });
    // }

    User.sync();
    return User;
}
    