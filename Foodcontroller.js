const menu = require("./Foodschema");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage }).single("image");

const addmenu = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        status: 500,
        message: "File upload failed",
        error: err,
      });
    }

    const newmenu = new menu({
      foodname: req.body.foodname,
      image: req.file ? req.file.filename : "", // Handle case where req.file might be undefined
      price: req.body.price,
      category: req.body.category,
      amount: req.body.amount,
    });

    newmenu
      .save()
      .then((data) => {
        console.log("ok");
        res.json({
          status: 200,
          message: "Menu added successfully",
          result: data,
        });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({
          status: 500,
          message: "Database error",
          error: error,
        });
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
        message: "Viewed Successfully",
        result: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: "Not Viewed",
        error: err,
      });
    });
};

const viewone = (req, res) => {
  menu
    .findById({ _id: req.params.id })
    .exec()
    .then((data) => {
      res.json({
        status: 200,
        message: "Success",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: "Error",
        error: err,
      });
    });
};

const editfood = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        status: 500,
        message: "File upload failed",
        error: err,
      });
    }

    const updateData = {
      foodname: req.body.foodname,
      price: req.body.price,
      category: req.body.category,
      amount: req.body.amount,
    };

    // Add image to update data if available
    if (req.file) {
      updateData.image = req.file.filename;
    }

    menu
      .findByIdAndUpdate({ _id: req.params.id }, updateData, { new: true })
      .exec()
      .then((data) => {
        res.json({
          status: 200,
          message: "Success",
          data: data,
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({
          status: 500,
          message: "Error",
          error: err,
        });
      });
  });
};

const deletefood = (req, res) => {
  menu
    .findByIdAndDelete({ _id: req.params.id })
    .exec()
    .then((data) => {
      res.json({
        status: 200,
        message: "Data Deleted",
        result: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 500,
        message: "Server error",
        error: err,
      });
    });
};

const placeorder = (req, res) => {
  const { foodname, image, quantity, address, totalAmount } = req.body;

  // Logic to save the order to the database, etc.

  // For demonstration purposes, just sending back a success response
  res.json({
    status: 200,
    message: "Order placed successfully",
    order: {
      foodname,
      image,
      quantity,
      address,
      totalAmount
    }
  });
};




module.exports = { addmenu, viewmenu, viewone, editfood, deletefood,placeorder };
