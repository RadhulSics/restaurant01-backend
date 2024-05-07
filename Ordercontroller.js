const ordermodel = require("./Orderschema");

const addOrder = async (req, res) => {
  try {
    let flag = 0;
    for (const x of req.body.state) { 
      const data = await ordermodel
      // const date = new Date();
      const newOrder = new ordermodel({
        foodid: x.foodid._id,
        userid: x.userid,
        paymentstatus: false,
        amount: x.foodid.price,
        count: x.count,
        date: date,
      });
       newOrder.save();
      flag = 1;
    }
    res.json({
      status: 200,
      message: "Added Successfully",
    });
  } catch (err) {
    console.log("Error on saving order", err);
    res.status(500).json({
      status: 500,
      message: "Failed to add order",
      error: err,
    });
  }
};



const viewOrder = async (req, res) => {
  try {
    const data = await ordermodel
      .find({ userid: req.params.userid, paymentstatus: false })
      .exec();
    res.json({
      status: 200,
      message: "Viewed Successfully",
      result: data,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Failed to view orders",
      error: err,
    });
  }
};

const cancelOrder = async (req, res) => {
  try {
    for (const x of req.body.items) {
      await ordermodel
        .findOneAndDelete({ _id: x._id, paymentstatus: false })
        .exec();
    }
    res.json({
      status: 200,
      message: "Payment Cancelled",
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Failed to cancel order",
      error: err,
    });
  }
};

const updatePaymentStatus = async (req, res) => {
  try {
    for (const x of req.body.items) {
      await ordermodel
        .findOneAndUpdate(
          { _id: x._id, userid: x.userid, paymentstatus: false },
          { paymentstatus: true }
        )
        .exec();
    }
    res.json({
      status: 200,
      message: "Payment Success",
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Failed to update payment status",
      error: err,
    });
  }
};

const viewOrderDetails = async (req, res) => {
  try {
    const data = await ordermodel
      .find({ userid: req.params.userid, paymentstatus: true })
      .populate("foodid")
      .exec();
    res.json({
      status: 200,
      message: "Viewed Successfully",
      result: data,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Failed to view order details",
      error: err,
    });
  }
};

const viewCustomerOrders = async (req, res) => {
  try {
    const data = await ordermodel
      .find({ paymentstatus: true })
      .populate("userid")
      .populate("foodid")
      .exec();
    res.json({
      status: 200,
      message: "Viewed Successfully",
      result: data,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "Failed to view customer orders",
      error: err,
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
