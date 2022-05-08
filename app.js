const express = require("express");
const mysql = require("mysql2");
const exphbs = require("express-handlebars");
const path = require("path");
require("dotenv").config();

const db = require("./config/connection")
  

//Test database connection
  db.authenticate()
  .then(() => console.log("Database connected successfully!"))
  .catch(err => console.log(`We have an error: ${err}`));

const app = express();
const PORT = process.env.PORT || 3200;

app.get("/", (req,res) => {
    res.send("index");
});

app.listen(PORT, console.log(`Server started on port: ${PORT}`));