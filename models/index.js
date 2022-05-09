const User = require("./User");
const BlogPost = require("./BlogPost");
const Comment = require("./Comment");

//User relationships
User.hasMany(BlogPost, {
    foreignKey: "user_id"
});

User.hasMany(Comment, {
    foreignKey: "user_id"
});

//BlogPost relationships
BlogPost.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "cascade"
});

BlogPost.hasMany(Comment, {
    foreignKey: "blogPost_id"
});

//Comment relationships
Comment.belongsTo(BlogPost, {
    foreignKey: "blogPost_id",
    onDelete: "cascade"
});

Comment.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "cascade"
});

module.exports = { User, BlogPost, Comment }