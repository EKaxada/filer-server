const express = require("express");
const cors = require("cors");
const fileRoute = require("./routes/file.routes");
const url = "ekaxada/github.io";
require("./db/db");

const app = express();

app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", url);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(fileRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("listening on port " + PORT));
