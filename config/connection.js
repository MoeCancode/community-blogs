const Sequelize = require("sequelize");
require("dotenv").config();

if (process.env.JAWSDB_URL) {
  db = new Sequelize(process.env.JAWSDB_URL);
} else {
  db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: "localhost",
      dialect: "mysql",
      dialectOptions: {
        decimalNumbers: true,
      },
    }
  );
}

module.exports = db;
