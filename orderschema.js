const mongoose = require("mongoose")
const orderschema = mongoose.Schema({
    foodid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"newfoods",
    },
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"newusers",
    },
    paymentstatus:{
        type:Boolean,
        required:false,
    },
    amount:{
        type:Number,
        required:true,
    },
    count:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
    }
})

module.exports=mongoose.model("neworders",orderschema)