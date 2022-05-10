// const sequelize = require("../config/connection");
const { User, BlogPost, Comment } = require("../models");

const router = require("express").Router();

router.get("/", async (req,res) => {
    const allPosts= await BlogPost.findAll({
        include: [User]
    })

    const posts = allPosts.map((post) => {
        return post.get({plain: true});
    })

    console.log(`-----------------------------!!!!!!!!!!!!! `+ allPosts);
    res.render("homepage", {posts});
});

module.exports = router;