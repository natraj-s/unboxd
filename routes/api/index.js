const router = require("express").Router();
const ubRoutes = require("./unboxd");

// Unboxd routes
router.use("/unboxd", ubRoutes);

module.exports = router;
