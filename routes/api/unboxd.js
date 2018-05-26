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
  .route("/articlesbyid/:id")
  .get(ubController.findById);

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

router
  .route("/likes/:username/:articleId")
  .get(ubController.getLikes)
  .delete(ubController.deleteLikes);

router
  .route("/likesbyuser/:username")
  .get(ubController.getLikesByUser);

router
  .route("/updatelikes/")
  .post(ubController.updateLikes);

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

router
  .route("/getArtComments/:articleId")
  .get(ubController.getArtComments);

router
  .route("/getArtNumComments/:articleId")
  .get(ubController.getArtNumComments);

router
  .route("/updateComments/:articleId/:comments")
  .put(ubController.updateCommentsNum);

router
  .route("/comment")
  .post(ubController.postComment);

module.exports = router;