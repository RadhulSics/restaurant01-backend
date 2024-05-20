const express=require("express")
const router = express.Router();
const Customercontroller = require("./Customercontroller");
const Staffcontroller = require("./Staffcontroller");
const Foodcontroller = require("./Foodcontroller");
const OrderController = require("./Ordercontroller");
const staffordercontroller = require("./staffordercontroller")


router.post("/addSchema", Customercontroller.addCustomer);

router.post("/Viewcustomers", Customercontroller.viewCustomer);
router.post("/customerlogin", Customercontroller.customerLogin);
router.post("/forgotPassword", Customercontroller.forgotPassword);

router.post("/staffregistration", Staffcontroller.staffregistration);
router.post("/stafflogin", Staffcontroller.stafflogin);
router.post("/staffforgotpassword", Staffcontroller.StaffforgotPassword);

router.post("/addmenu",Foodcontroller.upload, Foodcontroller.addmenu);
router.post("/viewmenu", Foodcontroller.viewmenu);
router.post("/viewone/:id", Foodcontroller.viewone);
router.post("/editfooddetails/:id", Foodcontroller.editfood);
router.post("/deletefood/:id", Foodcontroller.deletefood);

router.post("/addOrder", OrderController.addOrder);
router.post("/addOrder", OrderController.addOrder);
router.get("/viewOrder/:userid", OrderController.viewOrder);
router.post("/cancelOrder", OrderController.cancelOrder);
router.post("/updatePaymentStatus", OrderController.updatePaymentStatus);
router.get("/viewOrderDetails/:userid", OrderController.viewOrderDetails);
router.get("/viewCustomerOrders", OrderController.viewCustomerOrders);

router.post('/staffaddorder/:id',staffordercontroller.staffaddorder)
router.get('/stafforderdetails/:staffid',staffordercontroller.stafforderdetails)
router.get('/viewallstafforders',staffordercontroller.viewallstafforder)


module.exports = router;