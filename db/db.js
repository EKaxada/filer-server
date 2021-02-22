//connect to database
const db = "mongodb://localhost:27017/myCloud";
//   "mongodb+srv://ekaxada:1234567890@cluster0.dgpl9.mongodb.net/ekaxada?retryWrites=true&w=majority";
require("mongoose")
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("db connected..."))
  .catch((err) => console.err(err));