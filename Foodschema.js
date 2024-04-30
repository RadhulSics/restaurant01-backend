const mongoose=require("mongoose")
var Addmenuschema= mongoose.Schema({
  foodname:{
    type:String,
    required:true
},
image:{
    type:String,
    required:true
},
price:{
    type:Number,
    required:true
},
category:{
    type:String,
    required:true
},
amount:{
    type:Number,
}
});
const addmenu=mongoose.model('addmenu',Addmenuschema);
module.exports=addmenu
// module.exports=mongoose.model("addmenu",Addmenuschema)