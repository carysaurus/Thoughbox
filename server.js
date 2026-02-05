// server.js

const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const passport = require("passport");
const session = require("express-session");

const authRouter = require("./routers/authRouter");
const configRouter = require("./routers/configRouter");
const boxRouter = require("./routers/boxRouter");
const pageRouter = require("./routers/pageRouter");
const noteRouter = require("./routers/noteRouter");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

/* -------------------------------------- */
/* Middleware */
/* -------------------------------------- */
app.use(express.json());
app.use(express.static("public"));
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "some secret",
    resave: false,
    saveUninitialized: false,
  }),
);
app.use(passport.initialize());
app.use(passport.session());

/* -------------------------------------- */
/* Routes */
/* -------------------------------------- */
app.use(configRouter);
app.use("/boxes", boxRouter);
app.use("/notes", noteRouter);
app.use("/", pageRouter);
app.use("/auth", authRouter);

/* -------------------------------------- */
/* Connect to Database and Server */
/* -------------------------------------- */
mongoose
  .connect("mongodb://localhost:27017/thoughtbox")
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
