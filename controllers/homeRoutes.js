// const sequelize = require("../config/connection");
const { User, BlogPost, Comment } = require("../models");

const router = require("express").Router();

router.get("/", (req,res) => {
    res.render("homepage");
    console.log("Yes bro ------------------------------------------------------------------------");
});

module.exports = router;