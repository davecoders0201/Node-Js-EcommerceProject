const mongoose = require("mongoose");
const registerSchema = new mongoose.Schema(
  {
    your_name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    reenter_password: { type: String, require: true },
    image: { type: String, require: true },
    token: { type: String },
  },
  { collection: "register" }
);
module.exports = mongoose.model("register", registerSchema);
