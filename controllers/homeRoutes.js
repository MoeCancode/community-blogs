// const sequelize = require("../config/connection");
const { User, BlogPost, Comment } = require("../models");

const router = require("express").Router();

//Get login page
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/dashboard');
      return;
    }
    res.render('login');
  });
  


//GET homepage
router.get("/", async (req,res) => {
    try {
        const allPosts= await BlogPost.findAll({
            include: [User]
        })
        const posts = allPosts.map((post) => post.get({ plain: true }));
        
        res.render("homepage", {posts, loggedIn: req.session.loggedIn});
    }
     catch (error) {
        res.status(500).json(error);
    }
});

//GET post by id
router.get('/post/:id', async (req, res) => {
    try {
        const specificPost = await BlogPost.findOne({
            where: {
                id: req.params.id
            },
            attributes: ["id", "title", "description", "user_id"],
            include: [
               Comment, User 
            ]
        })
        postObj = specificPost.get({plain: true});

        const associatedComments = await Comment.findOne({
            where: {
                blogPost_id: req.params.id
            },
            include: [User]
        })
        commentObj = associatedComments.get({plain: true}); 

        res.render("Test", {postObj, commentObj, loggedIn: req.session.loggedIn}) 
        
        // const theComments = await Comment.findOne({
        //     where: {
        //         blogPost_id : req.params.id
        //     },
        //     include: [User, BlogPost]
        // })

        // pageComment = theComments.get({plain: true});
        
        // res.render("comment", {pageComment, loggedIn: req.session.loggedIn});

    } catch (error) {
        
    }

})

module.exports = router;