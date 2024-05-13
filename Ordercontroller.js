const { truncate } = require("fs/promises");
const OrderModel = require("./Orderschema");

const addOrder = async (req, res) => {
  try {
    const orders = req.body || [];
    console.log(orders);
    const newOrder = new OrderModel(orders);
    const savedOrder = await newOrder.save();
    res.json({
      status: 200,
      message: "Order added successfully",
      result: savedOrder,
    });
  } catch (err) {
    console.error("Error on saving order", err);
    res.status(500).json({
      status: 500,
      message: "Failed to add order",
      error: err.message,
    });
  }
};

// const viewOrderDetails= (req, res) => {
//   const orderId = parseInt(req.params.id);
//   const order = orders.find((order) => order.id === orderId);

//   if (!order) {
//     return res.status(404).json({ error: "Order not found" });
//   }

//   res.json(order);
// };



const viewOrder = async (req, res) => {
  try {
    const userId = req.params.userid;
    const orders = await OrderModel.find({ userId, paymentstatus: false });
    res.json({
      status: 200,
      message: "Orders viewed successfully",
      result: orders,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Failed to view orders",
      error: err.message,
    });
  }
};

const cancelOrder = async (req, res) => {
  try {
    const orderIds = req.body.orderIds || [];
    const deletedOrders = await OrderModel.deleteMany({ _id: { $in: orderIds }, paymentstatus: false });
    res.json({
      status: 200,
      message: "Orders cancelled successfully",
      result: deletedOrders,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Failed to cancel orders",
      error: err.message,
    });
  }
};

const updatePaymentStatus = async (req, res) => {
  try {
    const orderIds = req.body.orderIds || [];
    const updatedOrders = await OrderModel.updateMany({ _id: { $in: orderIds }, paymentstatus: false }, { paymentstatus: true });
    res.json({
      status: 200,
      message: "Payment status updated successfully",
      result: updatedOrders,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Failed to update payment status",
      error: err.message,
    });
  }
};

const viewOrderDetails = async (req, res) => {
  try {
    const userId = req.params.userid;
    const orders = await OrderModel.find({ userId, paymentstatus: true }).populate("foodid");
    res.json({
      status: 200,
      message: "Order details viewed successfully",
      result: orders,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Failed to view order details",
      error: err.message,
    });
  }
};

const viewCustomerOrders = async (req, res) => {
  try {
    const orders = await OrderModel.find({ paymentstatus: true }).populate("userid").populate("foodid");
    res.json({
      status: 200,
      message: "Customer orders viewed successfully",
      result: orders,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Failed to view customer orders",
      error: err.message,
    });
  }
};

module.exports = {
  addOrder,
  viewOrder,
  cancelOrder,
  updatePaymentStatus,
  viewOrderDetails,
  viewCustomerOrders,
};
