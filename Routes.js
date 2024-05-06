const express = require("express");
const router = express.Router();
const Customercontroller = require("./Customercontroller");
const Staffcontroller = require("./Staffcontroller");
const Foodcontroller = require("./Foodcontroller");
const Ordercontroller = require("./Ordercontroller");

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
router.post("/addOrder", Ordercontroller.addOrder);
router.post("/viewOrder", Ordercontroller.viewOrder);
router.post("/cancelOrder", Ordercontroller.cancelOrder);
router.post("/updatePaymentStatus", Ordercontroller.updatePaymentStatus);
router.post("/viewOrderDetails", Ordercontroller.viewOrderDetails);
router.post("/viewCustomerOrders", Ordercontroller.viewCustomerOrders);
