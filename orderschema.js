const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  foodid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "addmenus"
  },
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "customers"
  },
  paymentstatus: {
    type: Boolean,
    default: false
  },
  amount: {
    type: Number,
    required: true
  },
  count: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  deliveryAddress: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("neworders", OrderSchema);
