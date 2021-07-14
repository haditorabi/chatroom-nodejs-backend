require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.on("error", (err) => {
  console.log("Mongoose Connection ERROR: " + err.message);
});

mongoose.connection.once("open", () => {
  console.log("MongoDB Connected!");
});

require("./models/User");
require("./models/Chatroom");

const app = require("./app");
  
const server = app.listen(8000, () => {
  console.log("Server listening on port 8000");
});


