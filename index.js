const express = require("express");
const cors = require("cors");
const fileRoute = require("./routes/file.routes");
const url = "https://filer.netlify.app";

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

const db = process.env.MONGO_URI || "mongodb://localhost:27017/myCloud";
require("mongoose")
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("db connected..."))
  .catch((err) => console.err(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("listening on port " + PORT));
