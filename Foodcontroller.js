const menu=require("./Foodschema")
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, res, cb) {
      cb(null, "./upload");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({ storage: storage }).single("image");
const addmenu=(req,res)=>{
    const newmenu=new menu({
       foodname: req.body.foodname,
        image: req.file.filename,
        price: req.body.price,
        category: req.body.category,
        amount: req.body.amount
    })
    newmenu.save()
    .then(data=>{
      console.log("ok")
      res.json({status:200,
          message:" menu added successfully ",
          result: data,
      })
    })
    .catch(error=>{
        console.log(error)
        res.json({status:500,
        message:"database error",
        error: err,})
    
    })
}
const viewmenu= (req, res) => {
  menu
    .find()
    .exec()
    .then((data) => {
      res.json({
        status: 200,
        msg: "Viewed Successfully",
        result: data,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "Not Viewed",
        error: err,
      });
    });
};
const viewone = (req,res) => {
  menu
    .findById({ _id: req.params.id })
    .exec()
    .then((data) => {
      res.json({
        status: 200,
        msg: "success",
        data: data,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "error",
        data: err,
      });
    });
}

const editfood= (req,res) => {
  menu.findByIdAndUpdate(
    {
      _id: req.params.id,
    },
    {
      foodname: req.body.foodname,
      image: req.file,
      price: req.body.price,
      category: req.body.category,
      amount: req.body.amount,
    }
  )
  .exec()
  .then((data) => {
    res.json({
      status: 200,
      msg: "Data Updated",
      result: data,
    });
  })
  .catch((err) => {
    res.json({
      status: 500,
      msg: "Server error",
      error: err,
    });
  });
}

const deletefood = (req, res) => {
  menu
    .findByIdAndDelete({ _id: req.params.id })
    .exec()
    .then((data) => {
      res.json({
        status: 200,
        msg: "Data Deleted",
        result: data,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "Server error",
        error: err,
      });
    });
};


module.exports={addmenu,upload,viewmenu,viewone,editfood,deletefood}