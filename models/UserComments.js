module.exports = function(sequelize, Sequelize) {

    var UserComments = sequelize.define("UserComments", {
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
        },

        comment: {
            type: Sequelize.TEXT
        },

        parentId: {
            type: Sequelize.STRING
        }
    });

    UserComments.sync();

    return UserComments;
}