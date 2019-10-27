const router = require("express").Router();
const shopRoutes = require("./Shop");
const taskRoutes= require('./Task')

// Book routes
router.use("/Shop", shopRoutes);
router.use("/Task",taskRoutes);

module.exports = router;
