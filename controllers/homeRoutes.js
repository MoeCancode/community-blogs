const { User, BlogPost, Comment } = require("../models");

const router = require("express").Router();

//Get login page
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});

//GET homepage
router.get("/", async (req, res) => {
  try {
    const allPosts = await BlogPost.findAll({
      include: [User],
    });
    const posts = allPosts.map((post) => post.get({ plain: true }));

    res.render("homepage", { posts, loggedIn: req.session.loggedIn });
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET post by id
router.get("/post/:id", async (req, res) => {
  try {
    const specificPost = await BlogPost.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["id", "title", "description", "user_id", "has_comment"],
      include: [Comment, User],
    });
    postObj = specificPost.get({ plain: true });

    if (postObj.has_comment) {
      let associatedComments = await Comment.findAll({
        where: {
          blogPost_id: req.params.id,
        },
        attributes: ["id", "content", "user_id", "blogPost_id"],
        include: [User],
      });
      commentObj = associatedComments.map((cmnt) => cmnt.get({ plain: true }));

      res.render("Test", {
        postObj,
        commentObj,
        loggedIn: req.session.loggedIn,
      });
    } else {
      res.render("Test", {
        postObj,
        loggedIn: req.session.loggedIn,
      });
    }
  } catch (error) {}
});

//Create new comment
router.post("/post/:id", async (req, res) => {
    console.log("WTHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH")
  try {
    console.log("UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU" + req.body);
    const commentData = await Comment.create({
      content: req.body.commentContent,
      user_id: 2,
      blogPost_id: req.params.id,
    });

    res.json("Comment added");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
