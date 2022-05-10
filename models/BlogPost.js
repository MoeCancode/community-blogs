const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");

class BlogPost extends Model {}

//Define fields for BlogPost model
BlogPost.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2]
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        user_id: {
           type: DataTypes.INTEGER,
           references: {
               model: "user",
               key: "id"
           } 
        },
        has_comment: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'blogPost'
    }
);

module.exports = BlogPost;