const db = process.env.MONGO_URI || "mongodb://localhost:27017/myCloud";
require("mongoose")
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
