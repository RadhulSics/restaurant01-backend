const express = require("express");
const router = express.Router();
const Customercontroller = require("./Customercontroller");
const Staffcontroller = require("./Staffcontroller");
const Foodcontroller = require("./Foodcontroller");
const ordercontrol = require("./ordercontrol");
module.exports = router;

router.post("/addSchema", Customercontroller.addCustomer);
router.post("/Viewcustomers", Customercontroller.viewCustomer);
router.post("/customerlogin", Customercontroller.customerLogin);
router.post("/forgotPassword", Customercontroller.forgotPassword);
router.post("/staffregistration", Staffcontroller.staffregistration);
router.post("/stafflogin", Staffcontroller.stafflogin);
router.post("/addmenu", Foodcontroller.addmenu);
router.post("/viewmenu", Foodcontroller.viewmenu);
router.post("/viewone", Foodcontroller.viewone);
router.post("/editfooddetails/:id", Foodcontroller.editfood);
router.post("/deletefood", Foodcontroller.deletefood);