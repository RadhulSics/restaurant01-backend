const express = require("express");
const router = express.Router();
const Customercontroller = require("./Customercontroller");
const Staffcontroller=require("./Staffcontroller")
module.exports = router;
  
router.post("/addSchema", Customercontroller.addCustomer);
router.post("/Viewcustomers", Customercontroller.viewCustomer);
router.post("/customerlogin", Customercontroller.customerLogin);
router.post("/forgotPassword", Customercontroller.forgotPassword);
router.post('/staffregistration',Staffcontroller.staffregistration);
router.post('/stafflogin',Staffcontroller.stafflogin);

