const sequelize = require("../config/connection");
const { User, BlogPost, Comment } = require("../models");

const router = require("express").Router();

router.get("/", (req,res) => {
    res.render("mainmain");
});

module.exports = router;