const { appendFile } = require("fs");
const Sequelize = require("sequelize");

const db = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PW, 
    {
    host: 'localhost',
    dialect: "mysql",
    dialectOptions: {
        decimalNumbers: true,
      }
  });

  module.exports = db;