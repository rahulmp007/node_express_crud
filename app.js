const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const bodyParser = require("body-parser");

const userRoute = require("./routes/User.routes");

const app = express();

// registering middlewres
app.use(helmet()); // secure the app by setting various http headers
app.use(morgan("combined")); // for logging purpose
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // json parse

app.use((req, res, next) => {
  console.log(`REQ => ${req.url} `);
  next();
});

app.use((err, req, res, next) => {
  console.log(`error catched => ${err.stack}`);
  next();
});

// routes
app.use("/api/v1/user", userRoute);

module.exports = app;
