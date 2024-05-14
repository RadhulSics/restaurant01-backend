const menu = require("./Foodschema");
const multer = require("multer")

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./upload");
  },
filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).single("image");

const addmenu = (req, res) => {
  const newMenu = new menu({
    foodname: req.body.foodname,
    image: req.file.filename,
    price: req.body.price,
    amount: req.body.amount,
    category: req.body.category,
  });
  newMenu
    .save()
    .then((data) => {
      res.json({
        status: 200,
        msg: "Food added Successfully",
        result: data,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "Server Error",
        error: err,
      });
    });
};

const viewmenu = (req, res) => {
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

const editfood = (req,res) => {
  menu.findByIdAndUpdate(
    {
      _id: req.params.id,
    },
    {
      foodname: req.body.foodname,
      image: req.file,
      price: req.body.price,
      category: req.body.category,
    }
  )
  .exec()
  .then((data) => {
    res.status(200).json({
      status: 200,
      data: data,
    });
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json({
      status: 500,
      data: err,
    });
  });
}

const deletefood = (req, res) => {
  menu.findByIdAndDelete({ _id: req.params.id })
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











module.exports = { addmenu, viewmenu, upload, deletefood, viewone, editfood};
