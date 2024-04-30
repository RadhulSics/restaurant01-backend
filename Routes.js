const express = require("express");
const router = express.Router();
const Customercontroller = require("./Customercontroller");
const Staffcontroller=require("./Staffcontroller")
const ordercontrol = require("./ordercontrol")
module.exports = router;
  
router.post("/addSchema", Customercontroller.addCustomer);
router.post("/Viewcustomers", Customercontroller.viewCustomer);
router.post("/customerlogin", Customercontroller.customerLogin);
router.post("/forgotPassword", Customercontroller.forgotPassword);
router.post('/staffregistration',Staffcontroller.staffregistration);
router.post('/stafflogin',Staffcontroller.stafflogin);
router.post('/addorder',ordercontrol.addorder)
router.get('/vieworder/:userid',ordercontrol.vieworder)
router.post('/cancelorder',ordercontrol.cancelorder)
router.post('/paymentstatus',ordercontrol.paymentstatus)
router.get('/vieworderdetails/:userid',ordercontrol.vieworderdetails)
router.get('/viewcustomerorder',ordercontrol.viewcustomerorder)

