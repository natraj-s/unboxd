
module.exports = function(sequelize, Sequelize) {

    var Article = sequelize.define("Article", {
        
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },

          key: {
            type: Sequelize.STRING,
            unique: true
          },
        
          title: {
            type: Sequelize.STRING
          },

          author: {
            type: Sequelize.STRING
          },

          publishedAt: {
            type: Sequelize.STRING
          },

          source: {
            type: Sequelize.STRING
          },

          url: {
            type: Sequelize.TEXT("medium")
          },

          urlToImage: {
            type: Sequelize.TEXT('medium')
          },

          description: {
            type: Sequelize.TEXT("long")
          },

          category: {
            type: Sequelize.STRING
          },

          clicks: {
            type: Sequelize.STRING
          },

          comments: {
            type: Sequelize.STRING
          }
    });

    Article.sync();
    return Article;
}
    