var bCrypt = require("bcrypt-nodejs");

module.exports = function (passport, user) {
    var User = user;
    var LocalStrategy = require('passport-local').Strategy;

    console.log("ok i am here with ", User);


    passport.use('local-signup', new LocalStrategy(
        {
            usernameField: "username",
            emailField: "email",
            passwordField: "password",
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },

        function (req, username, password, done) {
            let email = req.body.email;

            var generateHash = function (password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };

            User.findOne({
                where: {
                    username: username
                }
            }).then(function (user) {
                if (user) {
                    console.log("ok checking here ", user);
                    return done(null, false, {
                        message: 'That username is already taken'
                    });
                }
                else {
                    console.log("no check so here");
                    var userPassword = generateHash(password);
                    var data =
                        {
                            username: username,
                            email: email,
                            password: userPassword
                            // firstname: req.body.firstname,
                            // lastname: req.body.lastname
                        };

                    User.create(data).then(function (newUser, created) {
                        if (!newUser) {
                            return done(null, false);
                        }
                        if (newUser) {
                            console.log("created new user");
                            return done(null, newUser);
                        }
                    });
                }
            });
        }
    ));

    passport.use('local-signin', new LocalStrategy(
        {
            usernameField: "username",
            passwordField: "password",
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },

        function (req, username, password, done) {
            var User = user;

            var isValidPassword = function (userpass, password) {
                return bCrypt.compareSync(password, userpass);
            }

            User.findOne({
                where: {
                    username: username
                }
            }).then(function (user) {
                
                if (!user) {
                    console.log("No such email");
                    return done(null, false, {
                        message: 'That email does not exist'
                    });
                }

                if (!isValidPassword(user.password, password)) {
                    console.log("Incorrect password");
                    return done(null, false, {
                        message: 'Incorrect password.'
                    });
                }

                var userinfo = user.get();
                return done(null, userinfo);
            }).catch(function (err) {
                console.log("ERROR: ", err);

                return done(null, false, {
                    message: "Something else went wrong with your signin"
                })
            });
        }
    ));

    //serialize
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    // deserialize user 
    passport.deserializeUser(function (id, done) {
        User.findById(id).then(function (user) {
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        });
    });

}