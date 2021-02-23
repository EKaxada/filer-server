const express = require("express");
const cors = require("cors");
const fileRoute = require("./routes/file.routes");
require("dotenv").config();
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

const db = mongodb+srv://ekaxada:9h9qtHj8AeahCac@cluster0.etx8o.mongodb.net/ekaxada?retryWrites=true&w=majority;
require("mongoose")
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("db connected..."))
  .catch((err) => console.err(err));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log("listening on port " + PORT));
