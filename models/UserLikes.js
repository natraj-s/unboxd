module.exports = function(sequelize, Sequelize) {

    var UserLikes = sequelize.define("UserLikes", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        userName: {
            type: Sequelize.STRING
        },

        articleId: {
            type: Sequelize.STRING
        }
    });

    UserLikes.sync();

    return UserLikes;
}