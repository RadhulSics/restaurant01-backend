const Staffmodel = require("./Staffschema");
const staffregistration = (req, res) => {
  const newStaff = new Staffmodel({
    fname: req.body.fname,
    lname: req.body.lname,
    dob:req.body.dob,
    gender: req.body.gender,
    email: req.body.email,
    password: req.body.password,
    confirmpassword:req.body.password,
    contactno: req.body.contactno,
   
  });
  newStaff
  .save()
    .then((data) => {
      console.log(data)
      res.json({
        status: 200,
        msg: "Staff Register Successfully",
        data,
      });
    })
    .catch((error) => {
      console.log(error)
      res.json({
        status: 500,
        msg: "Staff Register Unsuccessfully",
        
      });
    });
};

const stafflogin = (req, res) => {
  Staffmodel.findOne({ email: req.body.email })
    .exec()
    .then((data) => {
      if (data) {
        if (req.body.password === data.password) {
          res.json({
            status: 200,
            msg: "Login Successfully",
            result: data,
          });
        } else {
          res.json({
            status: 500,
            msg: "Password Invalid",
          });
        }
      } else {
        res.json({
          status: 500,
          msg: "Staff Id Invalid",
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

const StaffforgotPassword = (req, res) => {
  Staffmodel
    .findOne({ email: req.body.email })
    .exec()
    .then((data) => {
      if (data) {
        Staffmodel
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
module.exports = { staffregistration, stafflogin,StaffforgotPassword };