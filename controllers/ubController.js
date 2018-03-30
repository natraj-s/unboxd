const db = require("../models");

// Defining methods for the ubController
module.exports = {
    findAll: function(req, res) {
        console.log("came here");
        db.Article
            .findAll()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    getTrending: function(req, res) {
        console.log("came here sorted");
        db.Article
            .findAll({
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

    ifExists: function(req, res) {
        db.Article
            .find({
                where: {
                    title: req.params.title
                }
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};