const mongoose = require("mongoose");
var CustomerSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  password: String,
  email: String,
  gender: String,
});
const customer = mongoose.model("customers", CustomerSchema);
module.exports = customer;
