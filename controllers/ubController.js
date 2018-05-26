const db = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// Defining methods for the ubController
module.exports = {
    findAll: function(req, res) {
        console.log("came here");
        db.Article
            .findAll()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    findById: function(req, res) {
        console.log("findbyid ", req.params.id);
        let temp = req.params.id.split(",");
        db.Article
            .findAll({
                where: {
                    id: {
                        [Op.in]: temp
                    }
                },
                order: [
                    ['updatedAt', 'DESC']
                ]                
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    getTrending: function(req, res) {
        console.log("came here sorted");
        db.Article
            .findAll({
                limit: 20,
                order: [
                    ['clicks', 'DESC'],
                ]
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    getLatest: function(req, res) {
        console.log("came here latest");
        db.Article
            .findAll({
                limit: 20,
                where: {
                    category: req.params.category
                },
                order: [
                    ['publishedAt', 'DESC'],
                ]
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    getOldest: function(req, res) {
        console.log("came here aged");
        db.Article
            .findAll({
                limit: 20,
                where: {
                    category: req.params.category
                },
                order: [
                    ['publishedAt', 'ASC'],
                ]
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    create: function(req, res) {
        db.Article
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    createUser: function(req, res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    findUser: function(req, res) {
        db.User
            .find({
                where: {
                    username: req.params.username
                }
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    ifExists: function(req, res) {
        db.Article
            .find({
                where: {
                    title: req.params.title
                }
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    update: function(req, res) {
        db.Article
            .update(
                    { clicks: req.params.clicks },
                    { where: { title: req.params.title }}
            )
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    getLikes: function(req, res) {
        db.UserLikes
            .find(             
                { where: 
                    { 
                        userName: req.params.username,
                        articleId: req.params.articleId
                    }
                }
            )
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    deleteLikes: function(req, res) {
        db.UserLikes
            .destroy(
                { where: 
                    { 
                        userName: req.params.username,
                        articleId: req.params.articleId
                    }
                }
            )
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    getLikesByUser: function(req, res) {
        db.UserLikes
            .findAll(
                {attributes: ['articleId'], 
                where:
                    {
                        userName: req.params.username
                    }
                }                
            )
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    updateLikes: function(req, res) {        
        db.UserLikes
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    getArtComments: function(req, res) {
        db.UserComments
        .findAll(             
            { where: 
                { 
                    articleId: req.params.articleId
                }
            }
        )
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    getArtNumComments: function(req, res) {
        db.UserComments
        .count(             
            { where: 
                { 
                    articleId: req.params.articleId
                }
            }
        )
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    updateCommentsNum: function(req, res) {
        db.Article
            .update(
                    { comments: req.params.comments },
                    { where: { id: req.params.articleId }}
            )
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    postComment: function(req, res) {
        db.UserComments
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};             