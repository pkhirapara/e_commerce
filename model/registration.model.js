const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const registerfields = new Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String },
  mob: { type: Number },
  count: { type: Number },
});
registerfields.pre("save", async function (next) {
  //hash password before saving the user model
  //const user = this
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});
const registerModal = mongoose.model("registerdetails", registerfields);
module.exports = registerModal;
