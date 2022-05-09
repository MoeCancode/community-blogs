const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = require("./userData.json");
const blogPostData = require("./blogPostData.json");

async function runSeed() {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
      });

    await Blog.bulkCreate(blogPostData);

    process.exit(0);
}

runSeed();