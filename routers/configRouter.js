// routers/configRouter.js

const express = require("express");
const router = express.Router();

const { boxColours, noteColours } = require("../config/colourThemes");

router.use((req, res, next) => {
  res.locals.boxColours = boxColours;
  res.locals.noteColours = noteColours;
  next();
});

module.exports = router;
