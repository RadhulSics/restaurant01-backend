const mongoose = require("mongoose");
var CustomerSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  password: String,
  email: String,
  gender: String,
});
const customer = mongoose.model("Customers", CustomerSchema);
module.exports = customer;
