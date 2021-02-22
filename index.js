const express = require("express");
const cors = require("cors");
const fileRoute = require("./routes/file.routes");
require("./db/db");

const app = express();

app.use(cors());
app.use(fileRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("listening on port " + PORT));
