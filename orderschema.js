const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  deliveryAddress: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'customers',
    required: true,
  },
  foodid: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'addmenus',
    required: true,
  },
  paymentstatus: {
    type: Boolean,
    default: false,
  }
});

const OrderModel = mongoose.model('orders', orderSchema);

module.exports = OrderModel;
