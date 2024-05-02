const express = require("express");
const Foodcontroller = require("./Foodcontroller")
const Customercontroller = require("./Customercontroller");
const Staffcontroller=require("./Staffcontroller")

const router = express.Router();
router.post('/addmenu',Foodcontroller.upload,Foodcontroller.addmenu)
router.get('/viewmenu',Foodcontroller.viewmenu)
router.get('/viewone/:id',Foodcontroller.viewone)
router.post('/editfooddetails/:id',Foodcontroller.editfood)
router.post('/deletefood/:id',Foodcontroller.deletefood)
router.post("/addSchema", Customercontroller.addCustomer);

router.post("/Viewcustomers", Customercontroller.viewCustomer);
router.post("/customerlogin", Customercontroller.customerLogin);
router.post("/forgotPassword", Customercontroller.forgotPassword);
router.post('/staffregistration',Staffcontroller.staffregistration);
router.post('/stafflogin',Staffcontroller.stafflogin);
module.exports = router;

