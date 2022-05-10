const sequelize = require('../config/connection');
const { User, BlogPost, Comment } = require('../models');

const userData = require("./userData.json");
const blogPostData = require("./blogPostData.json");
const commentData = require("./commentData.json");

async function runSeed() {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
      });

    await BlogPost.bulkCreate(blogPostData);

    await Comment.bulkCreate(commentData);

    process.exit(0);
}

runSeed();