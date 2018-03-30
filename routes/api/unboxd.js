const router = require("express").Router();
const ubController = require("../../controllers/ubController");

// Matches with "/api/books/:id"
router
  .route("/")
  .get(ubController.findAll)
  .post(ubController.create);

router
  .route("/:title")
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

module.exports = router;