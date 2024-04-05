const mongoose=require("mongoose")
mongoose.connect('mongodb://127.0.0.1:27017/CustomerRegistration')
.then(()=>console.log('Connected!'))
let db=mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
console.log("Connection Successful!");
})
module.exports=db