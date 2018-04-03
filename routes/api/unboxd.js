const router = require("express").Router();
const ubController = require("../../controllers/ubController");
const passport = require("passport");

// Matches with "/api/books/:id"
router
  .route("/")
  .get(ubController.findAll)
  .post(ubController.create);

router
  .route("/articles/:title")
  .get(ubController.ifExists);
  

router
  .route("/trending")
  .get(ubController.getTrending);

router
  .route("/breaking/:category")
  .get(ubController.getLatest);

router
  .route("/aged/:category")
  .get(ubController.getOldest);

router
  .route("/clicks/:title/:clicks")
  .put(ubController.update);

// router
//   .route("/signup")
//   .post(ubController.createUser);

router.
  route("/signup")
  .post(passport.authenticate("local-signup"), (req, res) => {
    res.send("SUCCESS!");
  });

router.
  route("/signin")
  .post(passport.authenticate("local-signin"), (req, res) => {
    console.log("singin here", res.data);
    res.send("SUCCESS!");
  });

router
  .route("/finduser/:username")
  .get(ubController.findUser);

module.exports = router;