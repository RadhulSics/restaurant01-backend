const express=require("express")
const Foodcontroller = require("./Foodcontroller")
const Customercontroller = require("./Customercontroller");
const Staffcontroller = require("./Staffcontroller");
const cartcontrol=require("./Cartcontroller")
const ordercontrol=require("./ordercontrol")
const router=express.Router()
module.exports=router

router.post("/addSchema", Customercontroller.addCustomer);

router.post("/Viewcustomers", Customercontroller.viewCustomer);
router.post("/customerlogin", Customercontroller.customerLogin);
router.post("/forgotPassword", Customercontroller.forgotPassword);
router.post("/staffregistration", Staffcontroller.staffregistration);
router.post("/stafflogin", Staffcontroller.stafflogin);
router.post('/addmenu',Foodcontroller.upload,Foodcontroller.addmenu)
router.get("/viewmenu", Foodcontroller.viewmenu);
router.get("/viewone", Foodcontroller.viewone);
router.post("/editfooddetails/:id", Foodcontroller.editfood);
router.post('/deletefood/:id',Foodcontroller.deletefood)
router.post('/addorder',ordercontrol.addorder)
router.get('/vieworder/:userid',ordercontrol.vieworder)
router.post('/cancelorder',ordercontrol.cancelorder)
router.post('/paymentstatus',ordercontrol.paymentstatus)
router.get('/vieworderdetails/:userid',ordercontrol.vieworderdetails)
router.get('/viewcustomerorder',ordercontrol.viewcustomerorder)
router.post("/addcart/:foodid", cartcontrol.addcart);
router.get("/viewcart/:userid", cartcontrol.viewcart);
router.post("/deletecartitem/:id", cartcontrol.deletecartitem);
router.post("/cartitems/:userid", cartcontrol.deletecart);

