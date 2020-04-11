const mongoose = require("mongoose");
const MONGO_DB_URI = `mongodb+srv://kanha_admin:i83jWPv8I71OD4oE@cluster0-veczd.mongodb.net/Newstore?retryWrites=true&w=majority`;
mongoose
  .connect(MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(function () {
    console.log("data base connected successfully");
  })
  .catch(function (err) {
    console.log(err.message);
  });