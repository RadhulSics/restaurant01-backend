const staffordermodel = require("./stafforderscheme");

const staffaddorder = (req, res) => {
  const newStafforder = new staffordermodel({
    foodid: req.body.foodid,
    staffid: req.body.userId, // Assuming this is the staff ID
    amount: req.body.amount,
    count: req.body.quantity,
    customername: req.body.customername,
    date: new Date(), // Assuming you want to set the current date
  });

  newStafforder
    .save()
    .then((data) => {
      console.log(data);
      res.status(200).json({
        status: 200,
        msg: "Ordered Successfully",
      });
    })
    .catch((err) => {
      console.error("Error on saving order", err);
      res.status(500).json({
        status: 500,
        msg: "Failed to order",
        error: err,
      });
    });
};


const stafforderdetails = (req,res) => {
  staffordermodel.find({staffid: req.params.staffid}).populate("foodid")
  .exec()
  .then((data) => {
    res.json({
      status: 200,
      msg: "Viewed Successfully",
      result: data,
    });
  })
  .catch((err) => {
    res.json({
      status: 500,
      msg: "Not Viewed",
      error: err,
    });
  });
}

const viewallstafforder = (req,res) => {
  staffordermodel.find().populate("staffid").populate("foodid")
  .exec()
  .then((data) => {
    res.json({
      status: 200,
      msg: "Viewed Successfully",
      result: data,
    });
  })
  .catch((err) => {
    res.json({
      status: 500,
      msg: "Not Viewed",
      error: err,
    });
  });
}

module.exports = {staffaddorder, stafforderdetails, viewallstafforder}