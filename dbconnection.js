const mongoose=require("mongoose")
mongoose.connect('mongodb+srv://psprashanth18_db_user:f7Hf9wztzflncVG2@cluster0.d2eia7z.mongodb.net/CustomerRegistration?retryWrites=true&w=majority')
.then(()=>console.log('Connected to MongoDB Atlas!...'))
let db=mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
console.log("Connection Successfull!");
})
module.exports=db;
