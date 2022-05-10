const express = require("express");
const mysql = require("mysql2");
const exphbs = require("express-handlebars");
const path = require("path");
const session = require("express-session");
require("dotenv").config();
const helpers = require(`./utils/helpers`);

const routes = require("./controllers");
const db = require("./config/connection");

const app = express();

//Session
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sess = {
  secret: "Sper secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: db,
  }),
};

app.use(session(sess));

//Handlebars
const hbs = exphbs.create({ helpers });
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, `public`)));

const PORT = process.env.PORT || 3200;

app.use(routes);

db.sync({force:false}).then(() => {
    app.listen(PORT, console.log(`Server started on port: ${PORT}`));
})

