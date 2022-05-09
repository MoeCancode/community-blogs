const express = require("express");
const router = express.Router();

const homeRoutes = require("./homeRoutes");
const dashboardRoutes = require("./dashboardRoutes");

router.use("/", homeRoutes);
// router.use("/dashboard", dashboardRoutes);

module.exports = router;