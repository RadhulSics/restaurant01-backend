const staffcartmodel = require("./staffcartscheme");

const staffaddcart = async(req, res) => {
  const date = new Date();
  const newStaffcart = new staffcartmodel({
    foodid: req.params.foodid,
    staffid: req.body.staffid,
    count: req.body.count,
    date: date,
  });
  await newStaffcart
    .save()
    .then((data) => {
      res.json({
        status: 200,
        msg: "Added Successfully",
        result: data,
      });
    })
    .catch((err) => {
    console.log("data not saved ",err);
    });
};




module.exports = { staffaddcart};
