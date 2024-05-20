const { Console } = require("console");
const customer = require("./Customerschema");
const addCustomer = (req, res) => {
  const newCustomer = new customer({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: req.body.password,
    confirmpassword: req.body.confirmpassword,
    email: req.body.email,
    gender: req.body.gender,
  });
  newCustomer
    .save()
    .then((data) => {
      console.log(data);
      res.json({ status: 200, message: "Data stored successfully", data });
    })
    .catch((error) => {
      console.log(error);
      res.json({ status: 400, messege: "Failed" });
    });
};
const viewCustomer = (req, res) => {
  customer
    .find()
    .exec()
    .then((data) => {
      console.log(data);
      res.json({ status: 200, message: "successfull", data });
    })
    .catch((error) => {
      console.log(error);
      res.json({ status: 400, messege: "Failed" });
    });
};
const customerLogin = (req, res) => {
  console.log(req.body.email);
  console.log(req.body.password);
  customer
    .findOne({email:req.body.email})
    .exec()
    .then(data => {
      console.log("dta",data);
      if (data) {
        if (data.password == req.body.password) {
          res.json({ status: 200, message: "Login successful", data });
        } else {
          res.json({ status: 405, message: "password mismatch" });
        }
      } else {
        res.json({ status: 409, message: "User not found" });
      }
    })
    .catch((error) => {
      console.log(error);
      res.json({ status: 400, message: "Failed to login" });
    });
};
const forgotPassword = (req, res) => {
  customer
    .findOne({ email: req.body.email })
    .exec()
    .then((data) => {
      if (data) {
        customer
          .updateOne({ email: req.body.email }, { password: req.body.password })
          .exec()
          .then((data) => {
            res.json({
              status: 200,
              msg: "Password Updated Successfully",
              result: data,
            });
          });
      } else {
        res.json({
          status: 500,
          msg: "Email Id invalid",
        });
      }
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "Server error",
        error: err,
      });
    });
};
module.exports = { addCustomer, viewCustomer, customerLogin, forgotPassword };
